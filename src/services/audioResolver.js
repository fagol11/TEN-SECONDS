/**
 * Audio & Artwork Resolver Service
 *
 * Resolution chain (in order):
 *   1. Deezer via allorigins.win CORS proxy  -- universal 30s MP3 + hi-res cover
 *   2. iTunes Search API (country=IT)        -- 30s AAC preview + artwork
 *   3. iTunes Search API (country=US)        -- fallback country
 *   4. iTunes retry with title-only query
 *
 * Works in both web browser and Android WebView (Capacitor).
 */

// ---------------------------------------------------------------------------
// In-memory cache (keyed by "artist::title") — avoids double API calls
// ---------------------------------------------------------------------------
const _cache = new Map();
const _audioPreloadCache = new Map();
const _blobUrlCache = new Map();

/**
 * Preloads an audio file in memory as a Blob URL for instant 0ms playback start.
 */
export async function preloadAudio(url) {
  if (!url || typeof window === 'undefined' || _blobUrlCache.has(url)) return _blobUrlCache.get(url) || url;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      _blobUrlCache.set(url, blobUrl);
      return blobUrl;
    }
  } catch (e) {
    try {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = url;
      audio.load();
      _audioPreloadCache.set(url, audio);
    } catch (err) {}
  }
  return url;
}

export function getFastAudioUrl(url) {
  return _blobUrlCache.get(url) || url;
}

// ---------------------------------------------------------------------------
// String Normalisation
// ---------------------------------------------------------------------------

export function normalizeString(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[\(\[\{].*?[\)\]\}]/g, '')
    .replace(/\b(feat|ft|featuring|remastered|remaster|deluxe|version|edit|live|bonus|explicit|original|mix)\b/g, '')
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function calculateSimilarity(str1, str2) {
  const a = normalizeString(str1);
  const b = normalizeString(str2);
  if (!a || !b) return 0;
  if (a === b) return 1.0;
  const tokA = new Set(a.split(' ').filter(Boolean));
  const tokB = new Set(b.split(' ').filter(Boolean));
  let matches = 0;
  for (const t of tokA) if (tokB.has(t)) matches++;
  const union = new Set([...tokA, ...tokB]).size;
  return union > 0 ? matches / union : 0;
}

// ---------------------------------------------------------------------------
// iTunes helper
// ---------------------------------------------------------------------------

async function _queryItunes(query, artist, title, country) {
  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=8&country=${country}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(7000) });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.results?.length) return null;

    let best = null;
    let bestScore = 0;
    for (const item of data.results) {
      if (!item.previewUrl) continue;
      const score = calculateSimilarity(title, item.trackName) * 0.65
                  + calculateSimilarity(artist, item.artistName) * 0.35;
      if (score > bestScore) { bestScore = score; best = item; }
    }

    if (best && bestScore >= 0.2) {
      return {
        previewUrl: best.previewUrl,
        artworkUrl: best.artworkUrl100
          ? best.artworkUrl100.replace('100x100bb', '600x600bb')
          : null,
        trackName: best.trackName,
        artistName: best.artistName,
        provider: `itunes_${country.toLowerCase()}`,
      };
    }
    return null;
  } catch (e) {
    console.warn(`[audioResolver] iTunes ${country} error:`, e?.message);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Single Track Resolver
// ---------------------------------------------------------------------------

/**
 * Resolves a 30-second preview URL and album artwork for a given artist + title.
 * @returns {Promise<{ previewUrl, artworkUrl, trackName, artistName, provider } | null>}
 */
export async function resolveAudioPreview(artist, title) {
  const cacheKey = `${normalizeString(artist)}::${normalizeString(title)}`;
  if (_cache.has(cacheKey)) return _cache.get(cacheKey);

  const query = `${artist} ${title}`;

  // 1. Deezer via public CORS proxy (allorigins.win)
  try {
    const deezerApiUrl = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&limit=10`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(deezerApiUrl)}`;
    const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(5000) });
    if (res.ok) {
      const data = await res.json();
      if (data?.data?.length > 0) {
        let best = null;
        let bestScore = 0;
        for (const item of data.data) {
          if (!item.preview) continue;
          const score = calculateSimilarity(title, item.title) * 0.65
                      + calculateSimilarity(artist, item.artist?.name || '') * 0.35;
          if (score > bestScore) { bestScore = score; best = item; }
        }
        if (best && bestScore >= 0.25) {
          const result = {
            previewUrl: best.preview,
            artworkUrl: best.album?.cover_big || best.album?.cover_medium || best.album?.cover || null,
            trackName: best.title,
            artistName: best.artist?.name || artist,
            provider: 'deezer',
          };
          _cache.set(cacheKey, result);
          return result;
        }
      }
    }
  } catch (e) {
    console.warn('[audioResolver] Deezer proxy failed, falling through to iTunes:', e?.message);
  }

  // 2. iTunes Italy
  const r1 = await _queryItunes(query, artist, title, 'IT');
  if (r1) { _cache.set(cacheKey, r1); return r1; }

  // 3. iTunes US
  const r2 = await _queryItunes(query, artist, title, 'US');
  if (r2) { _cache.set(cacheKey, r2); return r2; }

  // 4. Short query (title only) -- last resort
  const r3 = await _queryItunes(title, artist, title, 'US');
  if (r3) { _cache.set(cacheKey, r3); return r3; }

  _cache.set(cacheKey, null); // cache negative so we don't retry
  return null;
}

// ---------------------------------------------------------------------------
// Batch Track List Resolver
// ---------------------------------------------------------------------------

/**
 * Resolves audio previews for an array of tracks concurrently (max 4 at a time).
 * Tracks that already have a valid previewUrl are kept as-is.
 * Tracks with no resolution are dropped.
 */
export async function validateAndResolveTrackList(tracks) {
  if (!tracks || tracks.length === 0) return [];

  const CONCURRENCY = 4;
  const results = [];

  for (let i = 0; i < tracks.length; i += CONCURRENCY) {
    const batch = tracks.slice(i, i + CONCURRENCY);

    const settled = await Promise.allSettled(
      batch.map(async (track) => {
        // Track already has working audio -- keep it, optionally upgrade artwork
        if (track.previewUrl && track.previewUrl.startsWith('http')) {
          if (!track.artworkUrl) {
            const resolved = await resolveAudioPreview(track.artist, track.title);
            return { ...track, artworkUrl: resolved?.artworkUrl || null };
          }
          return track;
        }
        // Resolve from scratch
        const resolved = await resolveAudioPreview(track.artist, track.title);
        if (resolved?.previewUrl) {
          return {
            ...track,
            previewUrl: resolved.previewUrl,
            artworkUrl: resolved.artworkUrl || track.artworkUrl || null,
          };
        }
        return null; // no audio found -- drop this track
      })
    );

    for (const r of settled) {
      if (r.status === 'fulfilled' && r.value) results.push(r.value);
    }
  }

  return results;
}
