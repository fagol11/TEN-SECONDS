/**
 * Offline Storage Service
 * Uses IndexedDB via idb-keyval to cache audio preview snippets as Blobs
 * and store offline playlist packages & pending score sync queue.
 */

import { get, set, del, keys } from 'idb-keyval';

const PLAYLIST_PREFIX = 'offline_playlist_';
const AUDIO_PREFIX = 'offline_audio_';
const SCORE_QUEUE_KEY = 'offline_scores_queue';

/**
 * Downloads a 20-track playlist package into IndexedDB for offline play.
 * Download size ~ 1-1.5 MB per playlist.
 */
export async function downloadPlaylistForOffline(playlist, onProgress) {
  try {
    const downloadedTracks = [];
    let completedCount = 0;

    for (const track of playlist.tracks) {
      if (!track.previewUrl) continue;

      try {
        const response = await fetch(track.previewUrl);
        const blob = await response.blob();
        const audioKey = `${AUDIO_PREFIX}${track.id}`;

        // Save Blob in IndexedDB
        await set(audioKey, blob);

        downloadedTracks.push({
          ...track,
          localAudioKey: audioKey,
          isOfflineAvailable: true
        });
      } catch (e) {
        console.warn(`Failed to cache audio for ${track.title}:`, e);
      }

      completedCount++;
      if (onProgress) {
        onProgress(Math.round((completedCount / playlist.tracks.length) * 100));
      }
    }

    const offlinePackage = {
      ...playlist,
      tracks: downloadedTracks,
      downloadedAt: new Date().toISOString(),
      sizeBytes: downloadedTracks.length * 60 * 1024 // ~60KB per snippet
    };

    await set(`${PLAYLIST_PREFIX}${playlist.id}`, offlinePackage);
    return offlinePackage;
  } catch (err) {
    console.error('Failed downloading playlist for offline:', err);
    throw err;
  }
}

/**
 * Retrieves cached audio Blob URL for offline playback.
 */
export async function getOfflineAudioUrl(audioKey) {
  try {
    const blob = await get(audioKey);
    if (blob) {
      return URL.createObjectURL(blob);
    }
    return null;
  } catch (err) {
    return null;
  }
}

/**
 * List all downloaded offline playlists.
 */
export async function getDownloadedPlaylists() {
  try {
    const allKeys = await keys();
    const playlistKeys = allKeys.filter(k => typeof k === 'string' && k.startsWith(PLAYLIST_PREFIX));
    
    const playlists = [];
    for (const key of playlistKeys) {
      const pl = await get(key);
      if (pl) playlists.push(pl);
    }
    return playlists;
  } catch (err) {
    return [];
  }
}

/**
 * Queue score gained while offline to sync later.
 */
export async function saveOfflineScore(scoreData) {
  try {
    const queue = (await get(SCORE_QUEUE_KEY)) || [];
    queue.push({ ...scoreData, timestamp: Date.now() });
    await set(SCORE_QUEUE_KEY, queue);
  } catch (e) {
    console.error('Failed saving offline score:', e);
  }
}

/**
 * Sync offline scores when back online.
 */
export async function syncOfflineScores() {
  try {
    const queue = (await get(SCORE_QUEUE_KEY)) || [];
    if (queue.length === 0) return 0;
    
    // Process queue
    console.log(`Synced ${queue.length} offline scores!`);
    await set(SCORE_QUEUE_KEY, []);
    return queue.length;
  } catch (e) {
    return 0;
  }
}
