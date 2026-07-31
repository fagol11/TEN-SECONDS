/**
 * Spotify Integration Service — Real API v1
 *
 * Uses Spotify Web API with Client Credentials flow to:
 *   1. Fetch real playlist metadata (title, cover, description)
 *   2. Fetch all real track items (name + artists) from the playlist
 *   3. Cross-reference with iTunes/Deezer to attach 30s audio previews
 *
 * Client Credentials flow is appropriate for reading public playlists
 * in a mobile/Capacitor app without requiring user login.
 */

import { validateAndResolveTrackList } from './audioResolver';

const SPOTIFY_CLIENT_ID     = 'e5db15cdd7544823a58b50462e272e5d';
const SPOTIFY_CLIENT_SECRET = 'f8a654f081e743b78b5baa22e3742100';

// ---------------------------------------------------------------------------
// Token Cache (in-memory, refreshes automatically when expired)
// ---------------------------------------------------------------------------
let _cachedToken = null;
let _tokenExpiresAt = 0;

async function getSpotifyToken() {
  if (_cachedToken && Date.now() < _tokenExpiresAt - 10000) {
    return _cachedToken;
  }

  const credentials = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) {
    throw new Error(`Spotify token error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  _cachedToken = data.access_token;
  _tokenExpiresAt = Date.now() + data.expires_in * 1000;
  return _cachedToken;
}

// ---------------------------------------------------------------------------
// Fetch all tracks from a playlist (handles pagination)
// ---------------------------------------------------------------------------
async function fetchAllPlaylistTracks(playlistId, token) {
  const allTracks = [];
  let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=50&fields=next,items(track(name,artists(name),preview_url,album(images)))`;

  while (url) {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) break;
    const data = await res.json();

    for (const item of data.items || []) {
      const track = item?.track;
      if (!track || !track.name) continue;
      allTracks.push({
        title: track.name,
        artist: track.artists?.map(a => a.name).join(', ') || 'Artista Sconosciuto',
        previewUrl: track.preview_url || null,
        artworkUrl: track.album?.images?.[0]?.url || null,
      });
    }

    url = data.next || null; // next page or null if last page
  }

  return allTracks;
}

// ---------------------------------------------------------------------------
// Main export: import a playlist from a Spotify URL or ID
// ---------------------------------------------------------------------------

/**
 * @param {string} playlistIdOrUrl  - Full Spotify URL or bare playlist ID
 * @returns {Promise<object|null>}  - Playlist object ready for startGame()
 */
export async function importSpotifyPlaylist(playlistIdOrUrl) {
  try {
    let playlistId = (playlistIdOrUrl || '').trim();
    if (!playlistId) return null;

    // Extract ID from full URL (e.g. https://open.spotify.com/playlist/37i9dQZF1DX...)
    const idMatch = playlistId.match(/playlist\/([a-zA-Z0-9]+)/);
    if (idMatch) {
      playlistId = idMatch[1];
    } else {
      playlistId = playlistId.split('?')[0].split('/')[0];
    }

    // Step 1: Get OAuth token via Client Credentials
    const token = await getSpotifyToken();

    // Step 2: Fetch playlist metadata
    const metaRes = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}?fields=name,description,images,tracks(total)`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(8000),
    });

    let playlistTitle = 'Playlist Spotify Importata';
    let playlistCover = 'https://images.unsplash.com/photo-1614680376593-902f749f7cfc?auto=format&fit=crop&w=600&q=80';
    let playlistDescription = 'Playlist importata da Spotify';
    let totalTracks = 0;

    if (metaRes.ok) {
      const meta = await metaRes.json();
      if (meta.name) playlistTitle = meta.name;
      if (meta.images?.[0]?.url) playlistCover = meta.images[0].url;
      if (meta.description) playlistDescription = meta.description;
      if (meta.tracks?.total) totalTracks = meta.tracks.total;
    }

    // Step 3: Fetch all track items (title + artist + Spotify 30s preview if available)
    let extractedSongs = await fetchAllPlaylistTracks(playlistId, token);

    // Step 4: For tracks without Spotify preview, resolve via iTunes/Deezer
    // For tracks WITH Spotify preview_url, keep them but still resolve artwork if missing
    const resolvedTracks = await validateAndResolveTrackList(extractedSongs);

    if (resolvedTracks.length === 0) {
      return null;
    }

    return {
      id: `spotify-${playlistId}-${Date.now()}`,
      title: playlistTitle,
      badge: 'Spotify',
      category: 'imported',
      description: `${playlistDescription || 'Playlist Spotify'} (${resolvedTracks.length} brani con audio)`,
      cover: playlistCover,
      tracks: resolvedTracks,
    };
  } catch (err) {
    console.warn('[spotifyService] Import error:', err?.message);
    return null;
  }
}
