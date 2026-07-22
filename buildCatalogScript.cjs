const fs = require('fs');
const resolved = JSON.parse(fs.readFileSync('./resolved_catalog.json', 'utf8'));

const jsContent = `/**
 * Curated Track Catalog for Ten Seconds
 * Universal Deezer MP3 audio previews and 500x500 high-res artwork.
 */

export const CATEGORIES = [
  { id: 'all', name: 'Tutti i Brani', icon: 'Sparkles', color: 'from-emerald-500 to-teal-700' },
  { id: 'decades', name: 'Decadi', icon: 'Clock', color: 'from-cyan-500 to-blue-700' },
  { id: 'genres', name: 'Generi', icon: 'Disc', color: 'from-purple-500 to-indigo-700' },
  { id: 'artists', name: 'Best of Artisti', icon: 'UserCheck', color: 'from-pink-500 to-rose-700' },
  { id: 'italian', name: 'Musica Italiana', icon: 'Flag', color: 'from-amber-500 to-orange-700' },
];

export const PLAYLISTS = ${JSON.stringify(resolved, null, 2)};

export function generateChoicesForTrack(targetTrack, allTracksPool) {
  const choices = [targetTrack];
  const candidates = allTracksPool.filter(t => t.id !== targetTrack.id && t.title !== targetTrack.title);
  const shuffled = [...candidates].sort(() => Math.random() - 0.5);
  
  for (const item of shuffled) {
    if (choices.length >= 4) break;
    if (!choices.some(c => c.title === item.title && c.artist === item.artist)) {
      choices.push(item);
    }
  }
  
  const fallbackDistractors = [
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
    { title: 'Hotel California', artist: 'Eagles' },
    { title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
    { title: 'Shape of You', artist: 'Ed Sheeran' },
    { title: 'Blinding Lights', artist: 'The Weeknd' }
  ];
  
  let fallbackIdx = 0;
  while (choices.length < 4 && fallbackIdx < fallbackDistractors.length) {
    const f = fallbackDistractors[fallbackIdx++];
    if (!choices.some(c => c.title === f.title)) {
      choices.push({ id: 'mock-' + fallbackIdx, title: f.title, artist: f.artist });
    }
  }

  return choices.sort(() => Math.random() - 0.5);
}

export function getCalibrationTracks() {
  const allTracks = PLAYLISTS.flatMap(p => p.tracks);
  const uniqueTracks = [];
  const seen = new Set();
  for (const t of allTracks) {
    if (!seen.has(t.title)) {
      seen.add(t.title);
      uniqueTracks.push(t);
    }
  }
  return uniqueTracks.slice(0, 10);
}
`;

fs.writeFileSync('./src/services/curatedCatalog.js', jsContent);
console.log('BUILD SUCCESSFUL!');
