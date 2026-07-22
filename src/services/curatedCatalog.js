/**
 * Curated Track Catalog for Ten Seconds - 10 Playable Playlists
 * Universal Deezer MP3 audio previews and 500x500 high-res artwork.
 */

export const CATEGORIES = [
  { id: 'all', name: 'Tutti i Brani', icon: 'Sparkles', color: 'from-emerald-500 to-teal-700' },
  { id: 'decades', name: 'Decadi', icon: 'Clock', color: 'from-cyan-500 to-blue-700' },
  { id: 'genres', name: 'Generi', icon: 'Disc', color: 'from-purple-500 to-indigo-700' },
  { id: 'artists', name: 'Best of Artisti', icon: 'UserCheck', color: 'from-pink-500 to-rose-700' },
  { id: 'italian', name: 'Musica Italiana', icon: 'Flag', color: 'from-amber-500 to-orange-700' },
];

export const PLAYLISTS = [
  // 1. ROCK ANNI 90
  {
    "id": "rock-90s",
    "title": "Rock Anni '90",
    "category": "decades",
    "description": "Nirvana, Radiohead, Oasis, Pearl Jam, Soundgarden e i giganti del rock anni 90.",
    "badge": "Popolare",
    "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "rock-90s-1",
        "title": "Smells Like Teen Spirit",
        "artist": "Nirvana",
        "year": 1991,
        "genre": "Rock",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3?hdnea=exp=1784645450~acl=/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3*~data=user_id=0,application_id=42~hmac=a12b27a736c0b198f9415b2c6c5f5b352f4e5dd49d7e5fcc19ddc6e5b1500f5b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/500x500-000000-80-0-0.jpg"
      },
      {
        "id": "rock-90s-2",
        "title": "Karma Police",
        "artist": "Radiohead",
        "year": 1997,
        "genre": "Rock",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/1/d/0/41dd34fd7d334b1c55b6970ef6db0d2f.mp3?hdnea=exp=1784645450~acl=/api/1/1/4/1/d/0/41dd34fd7d334b1c55b6970ef6db0d2f.mp3*~data=user_id=0,application_id=42~hmac=c041c95bad3a1a07a33df65e8d35bc37621775dfa62632b7c3ce32aacfe00fed",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/05a186e0a859a36f9cd51cdae2158fe1/500x500-000000-80-0-0.jpg"
      },
      {
        "id": "rock-90s-3",
        "title": "Wonderwall",
        "artist": "Oasis",
        "year": 1995,
        "genre": "Rock",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/8/e/0/28eb51bd66a2e1274ce09c17edb5f09c.mp3?hdnea=exp=1784645450~acl=/api/1/1/2/8/e/0/28eb51bd66a2e1274ce09c17edb5f09c.mp3*~data=user_id=0,application_id=42~hmac=9b8bbffa15d8a84de89908f900fe4f8c3e2860e59138b916eb79f7857e248ddf",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9fb38b8f280cbbe9ee5fd66621855a8a/500x500-000000-80-0-0.jpg"
      },
      {
        "id": "rock-90s-4",
        "title": "Alive",
        "artist": "Pearl Jam",
        "year": 1991,
        "genre": "Rock",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/2/0/4e2e3f9fda3e7ec7cbed140b11cdcdb1.mp3?hdnea=exp=1784645450~acl=/api/1/1/4/e/2/0/4e2e3f9fda3e7ec7cbed140b11cdcdb1.mp3*~data=user_id=0,application_id=42~hmac=7f52f712a65a1141a5c0d0824445d21655a7a7e8183fed7561de9195db42d5cd",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/00ee8c40862fb4e258fcbeaa17d7199e/500x500-000000-80-0-0.jpg"
      },
      {
        "id": "rock-90s-5",
        "title": "Zombie",
        "artist": "The Cranberries",
        "year": 1994,
        "genre": "Rock",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/6/a/0/36a85b40cf6d71f69d551f95115b4db1.mp3?hdnea=exp=1784645451~acl=/api/1/1/3/6/a/0/36a85b40cf6d71f69d551f95115b4db1.mp3*~data=user_id=0,application_id=42~hmac=802967d3170dfc86890b5b81f156954cb929c88cb3aa3010dedf05c319fc58a0",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/36917cca6bd7098af00298bba28524a6/500x500-000000-80-0-0.jpg"
      }
    ]
  },

  // 2. POP ANNI 80
  {
    "id": "pop-80s",
    "title": "Pop Anni '80",
    "category": "decades",
    "description": "Michael Jackson, Madonna, Prince, Wham! e i grandi synth pop degli anni 80.",
    "badge": "Classico",
    "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "pop-80s-1",
        "title": "Billie Jean",
        "artist": "Michael Jackson",
        "year": 1982,
        "genre": "Pop",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/6/e/0/e6e0f8717b1e6353e2abf797c6849889.mp3?hdnea=exp=1784645454~acl=/api/1/1/e/6/e/0/e6e0f8717b1e6353e2abf797c6849889.mp3*~data=user_id=0,application_id=42~hmac=80fcca04dfb496061937a05db7154f27cc800ed969f3872d800dcc78ad34f7b5",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a0ad67d1beb761f2cb9f8b60e5bcf07a/500x500-000000-80-0-0.jpg"
      },
      {
        "id": "pop-80s-2",
        "title": "Like a Prayer",
        "artist": "Madonna",
        "year": 1989,
        "genre": "Pop",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/3/5/0/83568d6e8eab5d7d29effe9bf3a473ce.mp3?hdnea=exp=1784645454~acl=/api/1/1/8/3/5/0/83568d6e8eab5d7d29effe9bf3a473ce.mp3*~data=user_id=0,application_id=42~hmac=2765968cf16794ba27f0c9a91609cf69729dcff027c654c6035545e39ec3716b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cb3560d83ededa230d78f7bf047c583a/500x500-000000-80-0-0.jpg"
      },
      {
        "id": "pop-80s-3",
        "title": "Take On Me",
        "artist": "a-ha",
        "year": 1985,
        "genre": "Pop",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/1/9/0/b19c969e9d7193a3fa7e5880fed2aefb.mp3?hdnea=exp=1784645454~acl=/api/1/1/b/1/9/0/b19c969e9d7193a3fa7e5880fed2aefb.mp3*~data=user_id=0,application_id=42~hmac=62f00aee96cfedf1db280884ed193ca3b2ac0fc3f3a6bed8274bbdd143341f74",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e0ce8977ab98d73bcea00fc838ece034/500x500-000000-80-0-0.jpg"
      },
      {
        "id": "pop-80s-4",
        "title": "Sweet Dreams",
        "artist": "Eurythmics",
        "year": 1983,
        "genre": "Pop",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/4/8/0/54847febfb0f146f6f039e71dc887cf6.mp3?hdnea=exp=1784645454~acl=/api/1/1/5/4/8/0/54847febfb0f146f6f039e71dc887cf6.mp3*~data=user_id=0,application_id=42~hmac=c79e86f3ef281c84ab4bef6dc64150f2d6dbed50bc4dd7c68abde0b45b4106e2",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/81061a21fd646f5bec5dcfe32684385b/500x500-000000-80-0-0.jpg"
      }
    ]
  },

  // 3. MUSICA ITALIANA
  {
    "id": "hits-italiane",
    "title": "Grandi Successi Italiani",
    "category": "italian",
    "description": "Vasco Rossi, Ligabue, Lucio Battisti, Cesare Cremonini e Måneskin.",
    "badge": "Top Italia",
    "cover": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "ita-1", "title": "Albachiara", "artist": "Vasco Rossi", "year": 1979, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-2", "title": "Certe Notti", "artist": "Ligabue", "year": 1995, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-3", "title": "Il Mio Canto Libero", "artist": "Lucio Battisti", "year": 1972, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-4", "title": "50 Special", "artist": "Lùnapop", "year": 1999, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-5", "title": "Zitti e Buoni", "artist": "Måneskin", "year": 2021, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 4. DANCE ANNI 2000
  {
    "id": "dance-2000s",
    "title": "Dance Anni 2000",
    "category": "genres",
    "description": "Eiffel 65, Gigi D'Agostino, Gabry Ponte, Daft Punk e i tormentoni discoteca.",
    "badge": "Festa",
    "cover": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "dance-1", "title": "Blue (Da Ba Dee)", "artist": "Eiffel 65", "year": 1999, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "dance-2", "title": "L’Amour Toujours", "artist": "Gigi D'Agostino", "year": 1999, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "dance-3", "title": "One More Time", "artist": "Daft Punk", "year": 2000, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "dance-4", "title": "Geordie", "artist": "Gabry Ponte", "year": 2002, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 5. HIP HOP & RAP
  {
    "id": "hiphop-rap",
    "title": "Hip Hop & Rap Legends",
    "category": "genres",
    "description": "Eminem, 50 Cent, Caparezza, Fabri Fibra e Marracash.",
    "badge": "Ritmo",
    "cover": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "rap-1", "title": "Lose Yourself", "artist": "Eminem", "year": 2002, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-2", "title": "In Da Club", "artist": "50 Cent", "year": 2003, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-3", "title": "Vieni a Ballare in Puglia", "artist": "Caparezza", "year": 2008, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-4", "title": "Applausi per Fibra", "artist": "Fabri Fibra", "year": 2006, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 6. DISCO & FUNK 70S
  {
    "id": "discomusic-70s",
    "title": "Disco & Funk Anni '70",
    "category": "decades",
    "description": "ABBA, Bee Gees, Earth Wind & Fire e Donna Summer.",
    "badge": "Groove",
    "cover": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "disco-1", "title": "Stayin' Alive", "artist": "Bee Gees", "year": 1977, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "disco-2", "title": "Dancing Queen", "artist": "ABBA", "year": 1976, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "disco-3", "title": "September", "artist": "Earth, Wind & Fire", "year": 1978, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 7. INDIE & ALTERNATIVE
  {
    "id": "indie-alternative",
    "title": "Indie & Alternative Rock",
    "category": "genres",
    "description": "Arctic Monkeys, The Killers, Franz Ferdinand e The Strokes.",
    "badge": "Trendy",
    "cover": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "indie-1", "title": "Do I Wanna Know?", "artist": "Arctic Monkeys", "year": 2013, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "indie-2", "title": "Mr. Brightside", "artist": "The Killers", "year": 2004, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "indie-3", "title": "Take Me Out", "artist": "Franz Ferdinand", "year": 2004, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 8. CANTAUTORI ITALIANI
  {
    "id": "cantautori-ita",
    "title": "Cantautori Italiani",
    "category": "italian",
    "description": "De André, Lucio Dalla, Francesco De Gregori e Rino Gaetano.",
    "badge": "Poesia",
    "cover": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "cant-1", "title": "Ma il cielo è sempre più blu", "artist": "Rino Gaetano", "year": 1975, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cant-2", "title": "Caruso", "artist": "Lucio Dalla", "year": 1986, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cant-3", "title": "La Canzone di Marinella", "artist": "Fabrizio De André", "year": 1964, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 9. REGGAETON & LATIN
  {
    "id": "reggaeton-latin",
    "title": "Reggaeton & Hit Latine",
    "category": "genres",
    "description": "Daddy Yankee, Bad Bunny, Don Omar e J Balvin.",
    "badge": "Caliente",
    "cover": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "latin-1", "title": "Gasolina", "artist": "Daddy Yankee", "year": 2004, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "latin-2", "title": "Danza Kuduro", "artist": "Don Omar ft. Lucenzo", "year": 2010, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "latin-3", "title": "Mi Gente", "artist": "J Balvin", "year": 2017, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 10. COLONNE SONORE CINEMA
  {
    "id": "soundtracks-cinema",
    "title": "Colonne Sonore Cinema",
    "category": "artists",
    "description": "Ennio Morricone, Hans Zimmer, Queen e i temi epici dei film.",
    "badge": "Cinema",
    "cover": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "movie-1", "title": "The Good, the Bad and the Ugly", "artist": "Ennio Morricone", "year": 1966, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "movie-2", "title": "Time (Inception)", "artist": "Hans Zimmer", "year": 2010, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "movie-3", "title": "Eye of the Tiger", "artist": "Survivor", "year": 1982, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" }
    ]
  }
];

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
