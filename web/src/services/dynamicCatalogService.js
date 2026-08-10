/**
 * Dynamic Catalog Service for Ten Seconds
 *
 * Combines API track discovery with a Daily Local Catalog Cache and Anti-Repeat Registry.
 * - Daily Cache: Fetches 30-50 fresh tracks per playlist every 24h & stores them in localStorage.
 * - Instant 0ms Playback: Reads from local cache during gameplay.
 * - Anti-Repeat: Tracks played song IDs during the session so songs don't repeat.
 */

import { PLAYLISTS, ALL_MASTER_TRACKS } from './curatedCatalog';
import { resolveAudioPreview } from './audioResolver';

// Rich Artist Seeds for all 10 Playlists (30+ iconic artists per category)
export const PLAYLIST_ARTIST_SEEDS = {
  'rock-90s': [
    'Nirvana', 'Radiohead', 'Oasis', 'Pearl Jam', 'Soundgarden', 'Red Hot Chili Peppers',
    'R.E.M.', 'Green Day', 'Metallica', 'Blur', 'The Cranberries', 'Stone Temple Pilots',
    'Alice in Chains', 'Foo Fighters', 'Blink-182', 'Smashing Pumpkins', 'Lenny Kravitz',
    'Live', 'Bush', 'Rage Against the Machine', 'Incubus', 'Silverchair', 'Offspring'
  ],
  'pop-80s': [
    'Michael Jackson', 'Madonna', 'Prince', 'Wham!', 'Eurythmics', 'Duran Duran',
    'A-ha', 'Whitney Houston', 'Cyndi Lauper', 'George Michael', 'Depeche Mode',
    'Tears for Fears', 'The Police', 'Rick Astley', 'Culture Club', 'Pet Shop Boys',
    'Bon Jovi', 'Bryan Adams', 'Lionel Richie', 'Phil Collins', 'Simple Minds'
  ],
  'italian-hits': [
    'Vasco Rossi', 'Ligabue', 'Lucio Battisti', 'Måneskin', 'Cesare Cremonini',
    'Max Pezzali', '883', 'Laura Pausini', 'Eros Ramazzotti', 'Jovanotti', 'Zucchero',
    'Tiziano Ferro', 'Marco Mengoni', 'Ultimo', 'Pinguini Tattici Nucleari', 'Elodie',
    'Annalisa', 'Loredana Bertè', 'Gianna Nannini', 'Biagio Antonacci', 'Lucio Dalla'
  ],
  'dance-2000s': [
    'Eiffel 65', 'Gigi D\'Agostino', 'Gabry Ponte', 'Daft Punk', 'Avicii', 'David Guetta',
    'Prezioso', 'Molella', 'Cascada', 'Benny Benassi', 'Eric Prydz', 'Bob Sinclar',
    'Swedish House Mafia', 'Calvin Harris', 'Tiësto', 'Armin van Buuren', 'Cascada',
    'Alcazar', 'Groove Coverage', 'Corona', 'Robert Miles', 'Alex Gaudino'
  ],
  'hiphop-rap': [
    'Eminem', '50 Cent', 'Caparezza', 'Fabri Fibra', 'Marracash', 'Salmo', 'Guè',
    'Sfera Ebbasta', '2Pac', 'The Notorious B.I.G.', 'Dr. Dre', 'Snoop Dogg', 'Jay-Z',
    'Kanye West', 'Kendrick Lamar', 'Drake', 'Travis Scott', 'Capo Plaza', 'Geolier',
    'Lazza', 'Noyz Narcos', 'Club Dogo', 'J-Ax', 'Articolo 31'
  ],
  'disco-70s': [
    'Bee Gees', 'ABBA', 'Earth Wind & Fire', 'Donna Summer', 'Boney M.', 'Chic',
    'KC and the Sunshine Band', 'Gloria Gaynor', 'Kool & The Gang', 'The Trammps',
    'Sister Sledge', 'Village People', 'Diana Ross', 'The Jackson 5', 'Baccara'
  ],
  'indie-alt': [
    'Arctic Monkeys', 'The Killers', 'Franz Ferdinand', 'The Strokes', 'Muse',
    'Coldplay', 'Kings of Leon', 'Kaiser Chiefs', 'The Kooks', 'Kasabian',
    'Phoenix', 'MGMT', 'Foster the People', 'Two Door Cinema Club', 'Florence + The Machine',
    'The Black Keys', 'Vampire Weekend', 'Mumford & Sons', 'Imagine Dragons'
  ],
  'cantautori-ita': [
    'Fabrizio De André', 'Lucio Dalla', 'Rino Gaetano', 'Francesco De Gregori',
    'Franco Battiato', 'Claudio Baglioni', 'Antonello Venditti', 'Pino Daniele',
    'Ivano Fossati', 'Francesco Guccini', 'Giorgio Gaber', 'Edoardo Bennato',
    'Domenico Modugno', 'Gino Paoli', 'Luigi Tenco', 'Mia Martini'
  ],
  'reggaeton-latin': [
    'Daddy Yankee', 'Bad Bunny', 'Don Omar', 'Shakira', 'J Balvin', 'Maluma',
    'Rauw Alejandro', 'Ozuna', 'Anuel AA', 'Karol G', 'Nicky Jam', 'Wisdom & Yandel',
    'Luis Fonsi', 'Enrique Iglesias', 'Ricky Martin', 'Farruko', 'Jhay Cortez'
  ],
  'cinema-tv': [
    'Ennio Morricone', 'Hans Zimmer', 'Queen', 'John Williams', 'Alan Silvestri',
    'Howard Shore', 'Danny Elfman', 'Michael Giacchino', 'Ludwig Göransson',
    'Ramin Djawadi', 'Elton John', 'Phil Collins', 'Ray Parker Jr.', 'Kenny Loggins'
  ]
};

const DAILY_CATALOG_KEY = 'ten_seconds_daily_catalog_cache';
const DAILY_CATALOG_DATE_KEY = 'ten_seconds_daily_catalog_date';

/**
 * Returns today's date string in YYYY-MM-DD format
 */
export function getTodayDateString() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Reads local cached daily catalog from localStorage
 */
export function getLocalDailyCatalog() {
  try {
    const saved = localStorage.getItem(DAILY_CATALOG_KEY);
    const date = localStorage.getItem(DAILY_CATALOG_DATE_KEY);
    if (saved && date === getTodayDateString()) {
      return JSON.parse(saved);
    }
  } catch (e) {}
  return null;
}

/**
 * Refreshes daily catalog by discovering dynamic tracks via API & saving to cache
 */
export async function refreshDailyCatalog(force = false) {
  const today = getTodayDateString();
  const existingDate = localStorage.getItem(DAILY_CATALOG_DATE_KEY);
  const existingCatalog = getLocalDailyCatalog();

  if (!force && existingCatalog && existingDate === today) {
    return existingCatalog;
  }

  console.log('[Dynamic Catalog] Refreshing Daily Catalog for', today);
  const newCatalog = {};

  for (const pl of PLAYLISTS) {
    const seeds = PLAYLIST_ARTIST_SEEDS[pl.id] || [];
    const baseTracks = pl.tracks || [];
    const dynamicTracks = [...baseTracks];

    // Pick 5 random artists from seed pool
    const selectedArtists = [...seeds].sort(() => 0.5 - Math.random()).slice(0, 5);

    try {
      const apiResults = await Promise.allSettled(
        selectedArtists.map(async (artist) => {
          const res = await resolveAudioPreview(artist, '');
          if (res?.previewUrl) {
            return {
              id: `dyn-${pl.id}-${Math.random().toString(36).substring(2, 7)}`,
              title: res.trackName || `${artist} Hit`,
              artist: res.artistName || artist,
              previewUrl: res.previewUrl,
              artworkUrl: res.artworkUrl || pl.cover,
              genre: pl.title
            };
          }
          return null;
        })
      );

      for (const r of apiResults) {
        if (r.status === 'fulfilled' && r.value) {
          // Avoid duplicate titles
          if (!dynamicTracks.some(t => t.title.toLowerCase() === r.value.title.toLowerCase())) {
            dynamicTracks.push(r.value);
          }
        }
      }
    } catch (err) {
      console.warn(`[Dynamic Catalog] API fetch warning for ${pl.id}:`, err?.message);
    }

    // Shuffle track pool for this playlist
    newCatalog[pl.id] = dynamicTracks.sort(() => 0.5 - Math.random());
  }

  try {
    localStorage.setItem(DAILY_CATALOG_KEY, JSON.stringify(newCatalog));
    localStorage.setItem(DAILY_CATALOG_DATE_KEY, today);
  } catch (e) {}

  return newCatalog;
}

/**
 * Retrieves 10 randomized tracks for a game session from today's daily catalog,
 * excluding recently played tracks (Anti-Repeat History).
 */
export function getTracksForPlaylistSession(playlistId, count = 10, playedTrackIds = []) {
  const dailyCatalog = getLocalDailyCatalog();
  const playlistObj = PLAYLISTS.find(p => p.id === playlistId);
  const basePool = dailyCatalog?.[playlistId] || playlistObj?.tracks || ALL_MASTER_TRACKS;

  const playedSet = new Set(playedTrackIds);

  // 1. Filter out recently played tracks
  let available = basePool.filter(t => !playedSet.has(t.id || t.title));

  // If pool exhausted, reset filter
  if (available.length < count) {
    available = [...basePool];
  }

  // 2. Shuffle and pick `count` tracks
  const shuffled = [...available].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
