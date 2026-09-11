/**
 * Audio & Artwork Resolver Service - Ultra Resilient Multi-Tier Proxy Engine
 *
 * Tier 1: Deezer API via fast corsproxy.io proxy (universal 30s MP3 + hi-res artwork)
 * Tier 2: Deezer API via fallback proxies (allorigins, codetabs)
 * Tier 3: iTunes Search API (IT & US)
 * Tier 4: Query Sanitization & Title-only fallbacks
 */

// ---------------------------------------------------------------------------
// In-memory cache (keyed by "artist::title") — avoids double API calls
// ---------------------------------------------------------------------------
const _cache = new Map();
const _blobUrlCache = new Map();

/**
 * Safe timeout signal helper
 */
function safeTimeout(ms) {
  if (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) {
    return AbortSignal.timeout(ms);
  }
  const ctrl = new AbortController();
  setTimeout(() => ctrl.abort(), ms);
  return ctrl.signal;
}

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
  } catch (e) {}
  return url;
}

export function getFastAudioUrl(url) {
  return _blobUrlCache.get(url) || url;
}

// ---------------------------------------------------------------------------
// String Normalisation & Sanitization
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
// Multi-Proxy Deezer Query Helper
// ---------------------------------------------------------------------------

const DEEZER_PROXIES = [
  (target) => target, // Direct fetch (native mobile & non-CORS environments)
  (target) => `https://corsproxy.io/?url=${encodeURIComponent(target)}`,
  (target) => `https://api.allorigins.win/raw?url=${encodeURIComponent(target)}`,
  (target) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(target)}`,
];

async function _queryDeezer(query, artist, title) {
  const targetApi = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&limit=10`;

  for (const getProxyUrl of DEEZER_PROXIES) {
    try {
      const proxyUrl = getProxyUrl(targetApi);
      const res = await fetch(proxyUrl, { signal: safeTimeout(3500) });
      if (!res.ok) continue;

      const data = await res.json();
      if (!data?.data?.length) continue;

      let best = null;
      let bestScore = 0;

      for (const item of data.data) {
        if (!item.preview) continue;
        const score = calculateSimilarity(title, item.title) * 0.65
                    + calculateSimilarity(artist, item.artist?.name || '') * 0.35;
        if (score > bestScore) {
          bestScore = score;
          best = item;
        }
      }

      if (!best && data.data[0]?.preview) {
        best = data.data[0];
        bestScore = 0.3;
      }

      if (best && best.preview) {
        return {
          previewUrl: best.preview,
          artworkUrl: best.album?.cover_big || best.album?.cover_medium || best.album?.cover || null,
          trackName: best.title,
          artistName: best.artist?.name || artist,
          provider: 'deezer',
        };
      }
    } catch (e) {
      // Continue to next proxy
    }
  }

  return null;
}

export function isDeezerUrlExpired(url) {
  if (!url || typeof url !== 'string') return false;
  const match = url.match(/hdnea=exp=(\d+)/);
  if (match && match[1]) {
    const expSec = parseInt(match[1], 10);
    const nowSec = Math.floor(Date.now() / 1000);
    return nowSec > (expSec - 120);
  }
  return false;
}

// ---------------------------------------------------------------------------
// iTunes Search API Helper (Apple iTunes supports native CORS Access-Control-Allow-Origin: *)
// ---------------------------------------------------------------------------

async function _queryItunes(query, artist, title, country = 'IT') {
  const targetApi = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=8&country=${country}`;

  const urlsToTry = [
    targetApi, // Native CORS from Apple
    `https://corsproxy.io/?url=${encodeURIComponent(targetApi)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(targetApi)}`
  ];

  for (const url of urlsToTry) {
    try {
      const res = await fetch(url, { signal: safeTimeout(3000) });
      if (!res.ok) continue;

      const data = await res.json();
      if (!data?.results?.length) continue;

      let best = null;
      let bestScore = 0;
      for (const item of data.results) {
        if (!item.previewUrl) continue;
        const score = calculateSimilarity(title, item.trackName) * 0.65
                    + calculateSimilarity(artist, item.artistName) * 0.35;
        if (score > bestScore) { bestScore = score; best = item; }
      }

      if (!best && data.results[0]?.previewUrl) {
        best = data.results[0];
        bestScore = 0.2;
      }

      if (best && best.previewUrl) {
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
    } catch (e) {}
  }

  return null;
}

// ---------------------------------------------------------------------------
// Single Track Multi-Tier Resolver
// ---------------------------------------------------------------------------

/**
 * Resolves a 30-second preview URL and album artwork for a given artist + title.
 * @returns {Promise<{ previewUrl, artworkUrl, trackName, artistName, provider } | null>}
 */
export async function resolveAudioPreview(artistOrTrack, titleParam) {
  let artist = artistOrTrack;
  let title = titleParam;

  if (artistOrTrack && typeof artistOrTrack === 'object') {
    const rawUrl = artistOrTrack.previewUrl;
    if (rawUrl && rawUrl.startsWith('http') && !isDeezerUrlExpired(rawUrl)) {
      return {
        previewUrl: rawUrl,
        artworkUrl: artistOrTrack.artworkUrl || null,
        trackName: artistOrTrack.title,
        artistName: artistOrTrack.artist,
        provider: 'catalog_direct'
      };
    }
    artist = artistOrTrack.artist || '';
    title = artistOrTrack.title || '';
  }

  if (!artist && !title) return null;

  const cacheKey = `${normalizeString(artist)}::${normalizeString(title)}`;
  if (_cache.has(cacheKey)) {
    const cached = _cache.get(cacheKey);
    if (cached?.previewUrl && !isDeezerUrlExpired(cached.previewUrl)) {
      return cached;
    }
  }

  const cleanTitle = title.replace(/[\(\[\{].*?[\)\]\}]/g, '').trim();
  const cleanArtist = artist.replace(/\b(feat|ft|featuring)\b.*?$/i, '').replace(/&.*$/, '').trim();

  // Tier 1: Query on iTunes IT (Permanent ultra-fast Apple CDN preview without expiration)
  let result = await _queryItunes(`${artist} ${cleanTitle}`.trim(), artist, title, 'IT');
  if (result) { _cache.set(cacheKey, result); return result; }

  // Tier 2: Query on iTunes US
  result = await _queryItunes(`${artist} ${cleanTitle}`.trim(), artist, title, 'US');
  if (result) { _cache.set(cacheKey, result); return result; }

  // Tier 3: Query with full Artist + Title on Deezer
  result = await _queryDeezer(`${artist} ${title}`.trim(), artist, title);
  if (result) {
    _cache.set(cacheKey, result);
    return result;
  }

  // Tier 4: Query with Cleaned Artist + Title on Deezer
  if (cleanTitle !== title || cleanArtist !== artist) {
    result = await _queryDeezer(`${cleanArtist} ${cleanTitle}`.trim(), artist, title);
    if (result) {
      _cache.set(cacheKey, result);
      return result;
    }
  }

  // Tier 5: Query with Title Only on iTunes & Deezer
  if (cleanTitle) {
    result = await _queryItunes(cleanTitle, artist, title, 'US');
    if (result) { _cache.set(cacheKey, result); return result; }

    result = await _queryDeezer(cleanTitle, artist, title);
    if (result) { _cache.set(cacheKey, result); return result; }
  }

  _cache.set(cacheKey, null);
  return null;
}

// ---------------------------------------------------------------------------
// Batch Track List Resolver
// ---------------------------------------------------------------------------

export async function validateAndResolveTrackList(tracks) {
  if (!tracks || tracks.length === 0) return [];

  const CONCURRENCY = 4;
  const results = [];

  for (let i = 0; i < tracks.length; i += CONCURRENCY) {
    const batch = tracks.slice(i, i + CONCURRENCY);

    const settled = await Promise.allSettled(
      batch.map(async (track) => {
        if (track.previewUrl && track.previewUrl.startsWith('http')) {
          if (!track.artworkUrl) {
            const resolved = await resolveAudioPreview(track.artist, track.title);
            return { ...track, artworkUrl: resolved?.artworkUrl || null };
          }
          return track;
        }
        const resolved = await resolveAudioPreview(track.artist, track.title);
        if (resolved?.previewUrl) {
          return {
            ...track,
            previewUrl: resolved.previewUrl,
            artworkUrl: resolved.artworkUrl || track.artworkUrl || null,
          };
        }
        return null;
      })
    );

    for (const r of settled) {
      if (r.status === 'fulfilled' && r.value) results.push(r.value);
    }
  }

  return results;
}
