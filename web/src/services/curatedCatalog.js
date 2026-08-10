/**
 * Curated Track Catalog for Ten Seconds - 10 Playable Playlists (30 tracks each = 300 total songs)
 * Universal Deezer/iTunes MP3 audio previews and artwork.
 */

export const CATEGORIES = [
  { id: 'all', name: 'Tutte', icon: 'Sparkles', color: 'from-emerald-500 to-teal-700' },
  { id: 'ten_seconds', name: 'Ten Seconds', icon: 'Zap', color: 'from-cyan-500 to-blue-700' },
  { id: 'imported', name: 'Importate', icon: 'Link', color: 'from-[#1DB954] to-emerald-800' },
];

export const PLAYLISTS = [
  // 1. ROCK ANNI 90 (30 Tracks)
  {
    "id": "rock-90s",
    "title": "Rock Anni '90",
    "category": "decades",
    "description": "Nirvana, Radiohead, Oasis, Pearl Jam, Soundgarden e i giganti del rock anni 90.",
    "badge": "Popolare",
    "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "r90-1", "title": "Smells Like Teen Spirit", "artist": "Nirvana", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-2", "title": "Karma Police", "artist": "Radiohead", "year": 1997, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-3", "title": "Wonderwall", "artist": "Oasis", "year": 1995, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-4", "title": "Alive", "artist": "Pearl Jam", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-5", "title": "Zombie", "artist": "The Cranberries", "year": 1994, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-6", "title": "Black Hole Sun", "artist": "Soundgarden", "year": 1994, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-7", "title": "Under the Bridge", "artist": "Red Hot Chili Peppers", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-8", "title": "Losing My Religion", "artist": "R.E.M.", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-9", "title": "Song 2", "artist": "Blur", "year": 1997, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-10", "title": "Basket Case", "artist": "Green Day", "year": 1994, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-11", "title": "Enter Sandman", "artist": "Metallica", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-12", "title": "Fly Away", "artist": "Lenny Kravitz", "year": 1998, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-13", "title": "Creep", "artist": "Radiohead", "year": 1992, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-14", "title": "Come as You Are", "artist": "Nirvana", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-15", "title": "Don't Look Back in Anger", "artist": "Oasis", "year": 1995, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-16", "title": "Plush", "artist": "Stone Temple Pilots", "year": 1992, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-17", "title": "Man in the Box", "artist": "Alice in Chains", "year": 1990, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-18", "title": "One", "artist": "Metallica", "year": 1988, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-19", "title": "What's Up?", "artist": "4 Non Blondes", "year": 1992, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-20", "title": "No Rain", "artist": "Blind Melon", "year": 1992, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-21", "title": "Even Flow", "artist": "Pearl Jam", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-22", "title": "Lightning Crashes", "artist": "Live", "year": 1994, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-23", "title": "Champagne Supernova", "artist": "Oasis", "year": 1995, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-24", "title": "1979", "artist": "The Smashing Pumpkins", "year": 1995, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-25", "title": "No Surprises", "artist": "Radiohead", "year": 1997, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-26", "title": "Give It Away", "artist": "Red Hot Chili Peppers", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-27", "title": "When I Come Around", "artist": "Green Day", "year": 1994, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-28", "title": "Interstate Love Song", "artist": "Stone Temple Pilots", "year": 1994, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-29", "title": "Spoonman", "artist": "Soundgarden", "year": 1994, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "r90-30", "title": "In Bloom", "artist": "Nirvana", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 2. POP ANNI 80 (30 Tracks)
  {
    "id": "pop-80s",
    "title": "Pop Anni '80",
    "category": "decades",
    "description": "Michael Jackson, Madonna, Prince, Wham! e i grandi synth pop degli anni 80.",
    "badge": "Classico",
    "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "p80-1", "title": "Billie Jean", "artist": "Michael Jackson", "year": 1982, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-2", "title": "Like a Prayer", "artist": "Madonna", "year": 1989, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-3", "title": "Take On Me", "artist": "a-ha", "year": 1985, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-4", "title": "Sweet Dreams", "artist": "Eurythmics", "year": 1983, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-5", "title": "Girls Just Want to Have Fun", "artist": "Cyndi Lauper", "year": 1983, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-6", "title": "Never Gonna Give You Up", "artist": "Rick Astley", "year": 1987, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-7", "title": "Blue Monday", "artist": "New Order", "year": 1983, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-8", "title": "Careless Whisper", "artist": "George Michael", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-9", "title": "Every Breath You Take", "artist": "The Police", "year": 1983, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-10", "title": "Africa", "artist": "Toto", "year": 1982, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-11", "title": "Beat It", "artist": "Michael Jackson", "year": 1982, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-12", "title": "Eye in the Sky", "artist": "The Alan Parsons Project", "year": 1982, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-13", "title": "Purple Rain", "artist": "Prince", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-14", "title": "Material Girl", "artist": "Madonna", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-15", "title": "Wake Me Up Before You Go-Go", "artist": "Wham!", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-16", "title": "With or Without You", "artist": "U2", "year": 1987, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-17", "title": "Hungry Like the Wolf", "artist": "Duran Duran", "year": 1982, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-18", "title": "Should I Stay or Should I Go", "artist": "The Clash", "year": 1982, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-19", "title": "Time After Time", "artist": "Cyndi Lauper", "year": 1983, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-20", "title": "Jump", "artist": "Van Halen", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-21", "title": "Thriller", "artist": "Michael Jackson", "year": 1982, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-22", "title": "Like a Virgin", "artist": "Madonna", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-23", "title": "Shout", "artist": "Tears for Fears", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-24", "title": "Don't You (Forget About Me)", "artist": "Simple Minds", "year": 1985, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-25", "title": "Enola Gay", "artist": "Orchestral Manoeuvres in the Dark", "year": 1980, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-26", "title": "Super Trouper", "artist": "ABBA", "year": 1980, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-27", "title": "The Final Countdown", "artist": "Europe", "year": 1986, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-28", "title": "Forever Young", "artist": "Alphaville", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-29", "title": "Physical", "artist": "Olivia Newton-John", "year": 1981, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "p80-30", "title": "I Wanna Dance with Somebody", "artist": "Whitney Houston", "year": 1987, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 3. MUSICA ITALIANA (30 Tracks)
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
      { "id": "ita-5", "title": "Zitti e Buoni", "artist": "Måneskin", "year": 2021, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-6", "title": "Laura non c'è", "artist": "Nek", "year": 1997, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-7", "title": "Penso Positivo", "artist": "Jovanotti", "year": 1993, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-8", "title": "La Solitudine", "artist": "Laura Pausini", "year": 1993, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-9", "title": "Piccola Stella Senza Cielo", "artist": "Ligabue", "year": 1990, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-10", "title": "Buon Viaggio (Share The Love)", "artist": "Cesare Cremonini", "year": 2015, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-11", "title": "Destinazione Paradiso", "artist": "Gianluca Grignani", "year": 1995, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-12", "title": "Rimmel", "artist": "Francesco De Gregori", "year": 1975, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-13", "title": "Sally", "artist": "Vasco Rossi", "year": 1996, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-14", "title": "L'Italiano", "artist": "Toto Cutugno", "year": 1983, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-15", "title": "Azzurro", "artist": "Adriano Celentano", "year": 1968, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-16", "title": "Centro di gravità permanente", "artist": "Franco Battiato", "year": 1981, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-17", "title": "Ti Amo", "artist": "Umberto Tozzi", "year": 1977, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-18", "title": "Nel blu dipinto di blu", "artist": "Domenico Modugno", "year": 1958, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-19", "title": "Ricominciamo", "artist": "Adriano Pappalardo", "year": 1979, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-20", "title": "Vita Spericolata", "artist": "Vasco Rossi", "year": 1983, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-21", "title": "Cosa c'è", "artist": "Vasco Rossi", "year": 1985, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-22", "title": "Mondo", "artist": "Cesare Cremonini", "year": 2010, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-23", "title": "Un'emozione da poco", "artist": "Anna Oxa", "year": 1978, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-24", "title": "Gli anni", "artist": "883", "year": 1995, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-25", "title": "Hanno ucciso l'Uomo Ragno", "artist": "883", "year": 1992, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-26", "title": "Sei un mito", "artist": "883", "year": 1993, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-27", "title": "La vasca", "artist": "Alex Britti", "year": 2000, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-28", "title": "Oggi sono io", "artist": "Alex Britti", "year": 1998, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-29", "title": "Superclassico", "artist": "Ernia", "year": 2020, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ita-30", "title": "Brividi", "artist": "Mahmood & Blanco", "year": 2022, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 4. DANCE ANNI 2000 (30 Tracks)
  {
    "id": "dance-2000s",
    "title": "Dance Anni 2000",
    "category": "genres",
    "description": "Eiffel 65, Gigi D'Agostino, Gabry Ponte, Daft Punk e i tormentoni discoteca.",
    "badge": "Festa",
    "cover": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "d00-1", "title": "Blue (Da Ba Dee)", "artist": "Eiffel 65", "year": 1999, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-2", "title": "L’Amour Toujours", "artist": "Gigi D'Agostino", "year": 1999, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-3", "title": "One More Time", "artist": "Daft Punk", "year": 2000, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-4", "title": "Geordie", "artist": "Gabry Ponte", "year": 2002, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-5", "title": "Satisfaction", "artist": "Benny Benassi", "year": 2002, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-6", "title": "Call On Me", "artist": "Eric Prydz", "year": 2004, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-7", "title": "World, Hold On", "artist": "Bob Sinclar", "year": 2006, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-8", "title": "Dragostea Din Tei", "artist": "O-Zone", "year": 2003, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-9", "title": "Around the World (La La La)", "artist": "ATC", "year": 2000, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-10", "title": "The Rhythm of the Night", "artist": "Corona", "year": 1993, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-11", "title": "Better Off Alone", "artist": "Alice Deejay", "year": 1999, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-12", "title": "Infinity 2008", "artist": "Guru Josh Project", "year": 2008, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-13", "title": "Harder, Better, Faster, Stronger", "artist": "Daft Punk", "year": 2001, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-14", "title": "Titanium", "artist": "David Guetta", "year": 2011, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-15", "title": "Stereo Love", "artist": "Edward Maya", "year": 2009, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-16", "title": "Don't You Worry Child", "artist": "Swedish House Mafia", "year": 2012, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-17", "title": "Levels", "artist": "Avicii", "year": 2011, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-18", "title": "Love Generation", "artist": "Bob Sinclar", "year": 2005, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-19", "title": "Destination Calabria", "artist": "Alex Gaudino", "year": 2007, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-20", "title": "Please Don't Stop the Music", "artist": "Rihanna", "year": 2007, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-21", "title": "In My Mind", "artist": "Dynoro & Gigi D'Agostino", "year": 2018, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-22", "title": "Bla Bla Bla", "artist": "Gigi D'Agostino", "year": 1999, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-23", "title": "The Rockafeller Skank", "artist": "Fatboy Slim", "year": 1998, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-24", "title": "Praise You", "artist": "Fatboy Slim", "year": 1998, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-25", "title": "Supermode", "artist": "Tell Me Why", "year": 2006, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-26", "title": "Proper Education", "artist": "Eric Prydz", "year": 2006, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-27", "title": "Day 'n' Nite (Remix)", "artist": "Kid Cudi vs Crookers", "year": 2008, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-28", "title": "When Love Takes Over", "artist": "David Guetta ft. Kelly Rowland", "year": 2009, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-29", "title": "I Gotta Feeling", "artist": "The Black Eyed Peas", "year": 2009, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "d00-30", "title": "Animals", "artist": "Martin Garrix", "year": 2013, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 5. HIP HOP & RAP (30 Tracks)
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
      { "id": "rap-4", "title": "Applausi per Fibra", "artist": "Fabri Fibra", "year": 2006, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-5", "title": "Gangsta's Paradise", "artist": "Coolio", "year": 1995, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-6", "title": "Still D.R.E.", "artist": "Dr. Dre", "year": 1999, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-7", "title": "King del Rap", "artist": "Marracash", "year": 2011, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-8", "title": "Tranne Te", "artist": "Fabri Fibra", "year": 2010, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-9", "title": "California Love", "artist": "2Pac", "year": 1995, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-10", "title": "Numb / Encore", "artist": "Jay-Z & Linkin Park", "year": 2004, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-11", "title": "Without Me", "artist": "Eminem", "year": 2002, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-12", "title": "Bad Boy for Life", "artist": "P. Diddy", "year": 2001, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-13", "title": "The Real Slim Shady", "artist": "Eminem", "year": 2000, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-14", "title": "Empire State of Mind", "artist": "Jay-Z", "year": 2009, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-15", "title": "Fuori Dal Tunnel", "artist": "Caparezza", "year": 2003, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-16", "title": "In Italia", "artist": "Fabri Fibra", "year": 2008, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-17", "title": "Bad and Boujee", "artist": "Migos", "year": 2016, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-18", "title": "Sicko Mode", "artist": "Travis Scott", "year": 2018, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-19", "title": "Juicy", "artist": "The Notorious B.I.G.", "year": 1994, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-20", "title": "No Role Modelz", "artist": "J. Cole", "year": 2014, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-21", "title": "HUMBLE.", "artist": "Kendrick Lamar", "year": 2017, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-22", "title": "God's Plan", "artist": "Drake", "year": 2018, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-23", "title": "Hotline Bling", "artist": "Drake", "year": 2015, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-24", "title": "See You Again", "artist": "Wiz Khalifa ft. Charlie Puth", "year": 2015, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-25", "title": "Old Town Road", "artist": "Lil Nas X", "year": 2018, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-26", "title": "Rider", "artist": "Sfera Ebbasta", "year": 2018, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-27", "title": "Rockstar", "artist": "Post Malone", "year": 2017, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-28", "title": "Psycho", "artist": "Post Malone", "year": 2018, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-29", "title": "Niente Canzoni D'Amore", "artist": "Marracash", "year": 2015, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "rap-30", "title": "Persona", "artist": "Marracash", "year": 2019, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 6. DISCO & FUNK 70S (30 Tracks)
  {
    "id": "discomusic-70s",
    "title": "Disco & Funk Anni '70",
    "category": "decades",
    "description": "ABBA, Bee Gees, Earth Wind & Fire e Donna Summer.",
    "badge": "Groove",
    "cover": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "d70-1", "title": "Stayin' Alive", "artist": "Bee Gees", "year": 1977, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-2", "title": "Dancing Queen", "artist": "ABBA", "year": 1976, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-3", "title": "September", "artist": "Earth, Wind & Fire", "year": 1978, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-4", "title": "I Will Survive", "artist": "Gloria Gaynor", "year": 1978, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-5", "title": "Le Freak", "artist": "Chic", "year": 1978, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-6", "title": "Y.M.C.A.", "artist": "Village People", "year": 1978, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-7", "title": "Celebration", "artist": "Kool & The Gang", "year": 1980, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-8", "title": "Superstition", "artist": "Stevie Wonder", "year": 1972, "genre": "Funk", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-9", "title": "That's the Way (I Like It)", "artist": "KC & The Sunshine Band", "year": 1975, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-10", "title": "Play That Funky Music", "artist": "Wild Cherry", "year": 1976, "genre": "Funk", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-11", "title": "Night Fever", "artist": "Bee Gees", "year": 1977, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-12", "title": "Daddy Cool", "artist": "Boney M.", "year": 1976, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-13", "title": "Disco Inferno", "artist": "The Trammps", "year": 1976, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-14", "title": "Hot Stuff", "artist": "Donna Summer", "year": 1979, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-15", "title": "Boogie Wonderland", "artist": "Earth, Wind & Fire", "year": 1979, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-16", "title": "Don't Leave Me This Way", "artist": "Thelma Houston", "year": 1976, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-17", "title": "Love to Love You Baby", "artist": "Donna Summer", "year": 1975, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-18", "title": "Gimme! Gimme! Gimme!", "artist": "ABBA", "year": 1979, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-19", "title": "How Deep Is Your Love", "artist": "Bee Gees", "year": 1977, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-20", "title": "Macho Man", "artist": "Village People", "year": 1978, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-21", "title": "Waterloo", "artist": "ABBA", "year": 1974, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-22", "title": "Mamma Mia", "artist": "ABBA", "year": 1975, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-23", "title": "Get Down Tonight", "artist": "KC & The Sunshine Band", "year": 1975, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-24", "title": "Knock on Wood", "artist": "Amii Stewart", "year": 1979, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-25", "title": "Born to Be Alive", "artist": "Patrick Hernandez", "year": 1979, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-26", "title": "Ring My Bell", "artist": "Anita Ward", "year": 1979, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-27", "title": "Good Times", "artist": "Chic", "year": 1979, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-28", "title": "Shame, Shame, Shame", "artist": "Shirley & Company", "year": 1974, "genre": "Disco", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-29", "title": "Love Train", "artist": "The O'Jays", "year": 1972, "genre": "Funk", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "d70-30", "title": "Pick Up the Pieces", "artist": "Average White Band", "year": 1974, "genre": "Funk", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 7. INDIE & ALTERNATIVE (30 Tracks)
  {
    "id": "indie-alternative",
    "title": "Indie & Alternative Rock",
    "category": "genres",
    "description": "Arctic Monkeys, The Killers, Franz Ferdinand e The Strokes.",
    "badge": "Trendy",
    "cover": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "ind-1", "title": "Do I Wanna Know?", "artist": "Arctic Monkeys", "year": 2013, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-2", "title": "Mr. Brightside", "artist": "The Killers", "year": 2004, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-3", "title": "Take Me Out", "artist": "Franz Ferdinand", "year": 2004, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-4", "title": "Seven Nation Army", "artist": "The White Stripes", "year": 2003, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-5", "title": "Last Nite", "artist": "The Strokes", "year": 2001, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-6", "title": "Use Somebody", "artist": "Kings of Leon", "year": 2008, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-7", "title": "Sex on Fire", "artist": "Kings of Leon", "year": 2008, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-8", "title": "Kids", "artist": "MGMT", "year": 2007, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-9", "title": "Pompeii", "artist": "Bastille", "year": 2013, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-10", "title": "Stressed Out", "artist": "Twenty One Pilots", "year": 2015, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-11", "title": "Feel Good Inc.", "artist": "Gorillaz", "year": 2005, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-12", "title": "Little Talks", "artist": "Of Monsters and Men", "year": 2011, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-13", "title": "I Bet You Look Good on the Dancefloor", "artist": "Arctic Monkeys", "year": 2005, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-14", "title": "Somebody That I Used to Know", "artist": "Gotye", "year": 2011, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-15", "title": "Shut Up and Dance", "artist": "WALK THE MOON", "year": 2014, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-16", "title": "Radioactive", "artist": "Imagine Dragons", "year": 2012, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-17", "title": "Riptide", "artist": "Vance Joy", "year": 2013, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-18", "title": "Dog Days Are Over", "artist": "Florence + The Machine", "year": 2008, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-19", "title": "Island in the Sun", "artist": "Weezer", "year": 2001, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-20", "title": "Ho Hey", "artist": "The Lumineers", "year": 2012, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-21", "title": "Fluorescent Adolescent", "artist": "Arctic Monkeys", "year": 2007, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-22", "title": "Somebody Told Me", "artist": "The Killers", "year": 2004, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-23", "title": "Reptilia", "artist": "The Strokes", "year": 2003, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-24", "title": "Electric Feel", "artist": "MGMT", "year": 2007, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-25", "title": "R U Mine?", "artist": "Arctic Monkeys", "year": 2012, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-26", "title": "Float On", "artist": "Modest Mouse", "year": 2004, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-27", "title": "Tongue Tied", "artist": "Grouplove", "year": 2011, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-28", "title": "Sweet Disposition", "artist": "The Temper Trap", "year": 2008, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-29", "title": "Closer", "artist": "Tegan and Sara", "year": 2012, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-30", "title": "Safe and Sound", "artist": "Capital Cities", "year": 2011, "genre": "Indie", "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 8. CANTAUTORI ITALIANI (30 Tracks)
  {
    "id": "cantautori-ita",
    "title": "Cantautori Italiani",
    "category": "italian",
    "description": "De André, Lucio Dalla, Francesco De Gregori e Rino Gaetano.",
    "badge": "Poesia",
    "cover": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "cnt-1", "title": "Ma il cielo è sempre più blu", "artist": "Rino Gaetano", "year": 1975, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-2", "title": "Caruso", "artist": "Lucio Dalla", "year": 1986, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-3", "title": "La Canzone di Marinella", "artist": "Fabrizio De André", "year": 1964, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-4", "title": "Generale", "artist": "Francesco De Gregori", "year": 1978, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-5", "title": "Centro di gravità permanente", "artist": "Franco Battiato", "year": 1981, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-6", "title": "L'Emozione Non Ha Voce", "artist": "Adriano Celentano", "year": 1999, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-7", "title": "Samarcanda", "artist": "Roberto Vecchioni", "year": 1977, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-8", "title": "Gianna", "artist": "Rino Gaetano", "year": 1978, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-9", "title": "Cervo a Primavera", "artist": "Riccardo Cocciante", "year": 1980, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-10", "title": "La Donna Cannone", "artist": "Francesco De Gregori", "year": 1983, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-11", "title": "Piazza Grande", "artist": "Lucio Dalla", "year": 1972, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-12", "title": "Via del Campo", "artist": "Fabrizio De André", "year": 1967, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-13", "title": "Bocca di Rosa", "artist": "Fabrizio De André", "year": 1967, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-14", "title": "La Cura", "artist": "Franco Battiato", "year": 1996, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-15", "title": "Spaccacuore", "artist": "Samuele Bersani", "year": 1994, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-16", "title": "L'Anno che Verrà", "artist": "Lucio Dalla", "year": 1979, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-17", "title": "Volta la Carta", "artist": "Fabrizio De André", "year": 1978, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-18", "title": "Buonanotte Fiorellino", "artist": "Francesco De Gregori", "year": 1975, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-19", "title": "Margherita", "artist": "Riccardo Cocciante", "year": 1976, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-20", "title": "A Mano A Mano", "artist": "Rino Gaetano", "year": 1978, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-21", "title": "Nessuno mi può giudicare", "artist": "Caterina Caselli", "year": 1966, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-22", "title": "Un'avventura", "artist": "Lucio Battisti", "year": 1969, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-23", "title": "Mi ritorni in mente", "artist": "Lucio Battisti", "year": 1969, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-24", "title": "E penso a te", "artist": "Lucio Battisti", "year": 1970, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-25", "title": "Emozioni", "artist": "Lucio Battisti", "year": 1970, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-26", "title": "I giardini di marzo", "artist": "Lucio Battisti", "year": 1972, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-27", "title": "Ancora tu", "artist": "Lucio Battisti", "year": 1976, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-28", "title": "Con il rosa del mattino", "artist": "PFM", "year": 1972, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-29", "title": "Impressioni di settembre", "artist": "PFM", "year": 1971, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "cnt-30", "title": "Lugano addio", "artist": "Ivan Graziani", "year": 1977, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 9. REGGAETON & LATIN (30 Tracks)
  {
    "id": "reggaeton-latin",
    "title": "Reggaeton & Hit Latine",
    "category": "genres",
    "description": "Daddy Yankee, Bad Bunny, Don Omar e J Balvin.",
    "badge": "Caliente",
    "cover": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "lat-1", "title": "Gasolina", "artist": "Daddy Yankee", "year": 2004, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-2", "title": "Danza Kuduro", "artist": "Don Omar ft. Lucenzo", "year": 2010, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-3", "title": "Mi Gente", "artist": "J Balvin", "year": 2017, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-4", "title": "Despacito", "artist": "Luis Fonsi", "year": 2017, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-5", "title": "Bailando", "artist": "Enrique Iglesias", "year": 2014, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-6", "title": "Livin' la Vida Loca", "artist": "Ricky Martin", "year": 1999, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-7", "title": "Smooth", "artist": "Santana", "year": 1999, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-8", "title": "Waka Waka (This Time for Africa)", "artist": "Shakira", "year": 2010, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-9", "title": "La Gozadera", "artist": "Gente de Zona", "year": 2015, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-10", "title": "Pepas", "artist": "Farruko", "year": 2021, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-11", "title": "Tacones Rojos", "artist": "Sebastián Yatra", "year": 2021, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-12", "title": "Tusa", "artist": "KAROL G & Nicki Minaj", "year": 2019, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-13", "title": "Hips Don't Lie", "artist": "Shakira", "year": 2006, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-14", "title": "Chantaje", "artist": "Shakira", "year": 2016, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-15", "title": "Calma (Remix)", "artist": "Pedro Capó", "year": 2018, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-16", "title": "Con Calma", "artist": "Daddy Yankee", "year": 2019, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-17", "title": "Hawái", "artist": "Maluma", "year": 2020, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-18", "title": "Dakiti", "artist": "Bad Bunny", "year": 2020, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-19", "title": "Subeme la Radio", "artist": "Enrique Iglesias", "year": 2017, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-20", "title": "Vivir Mi Vida", "artist": "Marc Anthony", "year": 2013, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-21", "title": "La Camisa Negra", "artist": "Juanes", "year": 2004, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-22", "title": "Bailamos", "artist": "Enrique Iglesias", "year": 1999, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-23", "title": "She Bangs", "artist": "Ricky Martin", "year": 2000, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-24", "title": "Maria", "artist": "Ricky Martin", "year": 1995, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-25", "title": "La Tortura", "artist": "Shakira ft. Alejandro Sanz", "year": 2005, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-26", "title": "Propuesta Indecente", "artist": "Romeo Santos", "year": 2013, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-27", "title": "Vente Pa' Ca", "artist": "Ricky Martin ft. Maluma", "year": 2016, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-28", "title": "Chantaje", "artist": "Shakira", "year": 2016, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-29", "title": "Reggaeton Lento", "artist": "CNCO", "year": 2016, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "lat-30", "title": "Provenza", "artist": "KAROL G", "year": 2022, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 10. COLONNE SONORE CINEMA (30 Tracks)
  {
    "id": "soundtracks-cinema",
    "title": "Colonne Sonore Cinema",
    "category": "artists",
    "description": "Ennio Morricone, Hans Zimmer, Queen e i temi epici dei film.",
    "badge": "Cinema",
    "cover": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "mov-1", "title": "The Good, the Bad and the Ugly", "artist": "Ennio Morricone", "year": 1966, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-2", "title": "Time (Inception)", "artist": "Hans Zimmer", "year": 2010, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-3", "title": "Eye of the Tiger", "artist": "Survivor", "year": 1982, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-4", "title": "Ghostbusters", "artist": "Ray Parker Jr.", "year": 1984, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-5", "title": "My Heart Will Go On", "artist": "Celine Dion", "year": 1997, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-6", "title": "Stayin' Alive", "artist": "Bee Gees", "year": 1977, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-7", "title": "Circle of Life", "artist": "Elton John", "year": 1994, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-8", "title": "Imperial March", "artist": "John Williams", "year": 1980, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-9", "title": "Mission: Impossible Theme", "artist": "Lalo Schifrin", "year": 1967, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-10", "title": "You're the One That I Want", "artist": "John Travolta & Olivia Newton-John", "year": 1978, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-11", "title": "Danger Zone", "artist": "Kenny Loggins", "year": 1986, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-12", "title": "Back in Time", "artist": "Huey Lewis and the News", "year": 1985, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-13", "title": "He's a Pirate", "artist": "Hans Zimmer", "year": 2003, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-14", "title": "Jurassic Park Theme", "artist": "John Williams", "year": 1993, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-15", "title": "Hedwig's Theme", "artist": "John Williams", "year": 2001, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-16", "title": "Indiana Jones Theme", "artist": "John Williams", "year": 1981, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-17", "title": "Footloose", "artist": "Kenny Loggins", "year": 1984, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-18", "title": "Unchained Melody", "artist": "The Righteous Brothers", "year": 1965, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-19", "title": "A Whole New World", "artist": "Alan Menken", "year": 1992, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-20", "title": "Skyfall", "artist": "Adele", "year": 2012, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-21", "title": "Shallow", "artist": "Lady Gaga & Bradley Cooper", "year": 2018, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-22", "title": "Happy", "artist": "Pharrell Williams", "year": 2013, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-23", "title": "Can't Stop the Feeling!", "artist": "Justin Timberlake", "year": 2016, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-24", "title": "Let It Go", "artist": "Idina Menzel", "year": 2013, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-25", "title": "Love Me Like You Do", "artist": "Ellie Goulding", "year": 2015, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-26", "title": "A Thousand Years", "artist": "Christina Perri", "year": 2011, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-27", "title": "Take My Breath Away", "artist": "Berlin", "year": 1986, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-28", "title": "What a Feeling", "artist": "Irene Cara", "year": 1983, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-29", "title": "Eye of the Tiger", "artist": "Survivor", "year": 1982, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "mov-30", "title": "Superheroes", "artist": "The Script", "year": 2014, "genre": "Soundtrack", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 11. TRAP & URBAN ITALIA (30 Tracks)
  {
    "id": "trap-italia",
    "title": "Trap & Urban Italia 2020s",
    "category": "hiphop",
    "description": "Sfera Ebbasta, Lazza, Geolier, Blanco, Tedua, Shiva e i re della scena urban.",
    "badge": "Trend 🔥",
    "cover": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "tr-1", "title": "Cenere", "artist": "Lazza", "year": 2023, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-2", "title": "I P' ME, TU P' TE", "artist": "Geolier", "year": 2024, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-3", "title": "Mi Fai Impazzire", "artist": "Blanco & Sfera Ebbasta", "year": 2021, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-4", "title": "Hoe", "artist": "Tedua feat. Sfera Ebbasta", "year": 2023, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-5", "title": "Bottiglie Privè", "artist": "Sfera Ebbasta", "year": 2020, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-6", "title": "Auto Blu", "artist": "Shiva & Eiffel 65", "year": 2020, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-7", "title": "Cara Italia", "artist": "Ghali", "year": 2018, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-8", "title": "Insuperabile", "artist": "Rkomi", "year": 2022, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-9", "title": "Allenamento 3", "artist": "Capo Plaza", "year": 2021, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-10", "title": "Chiagne", "artist": "Geolier feat. Lazza & Takagi & Ketra", "year": 2022, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-11", "title": "Nostalgia", "artist": "Blanco", "year": 2022, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-12", "title": "Molotov", "artist": "Lazza", "year": 2022, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-13", "title": "Shakerando", "artist": "Rhove", "year": 2022, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-14", "title": "Pammuglia", "artist": "Tony Effe", "year": 2023, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-15", "title": "Sirio", "artist": "Lazza", "year": 2022, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-16", "title": "Baby", "artist": "Sfera Ebbasta feat. J Balvin", "year": 2020, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-17", "title": "Mon Amour", "artist": "Annalisa", "year": 2023, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-18", "title": "Sinceramente", "artist": "Annalisa", "year": 2024, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-19", "title": "Casa Mia", "artist": "Ghali", "year": 2024, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-20", "title": "Tuta Gold", "artist": "Mahmood", "year": 2024, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-21", "title": "100 Messaggi", "artist": "Lazza", "year": 2024, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-22", "title": "Gelosa", "artist": "Finesse feat. Shiva, Sfera Ebbasta & Guè", "year": 2023, "genre": "Hip-Hop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-23", "title": "La Dolce Vita", "artist": "Fedez, Tananai, Mara Sattei", "year": 2022, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-24", "title": "Italodisco", "artist": "The Kolors", "year": 2023, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-25", "title": "Un Ragazzo Una Ragazza", "artist": "The Kolors", "year": 2024, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-26", "title": "Click Boom!", "artist": "Rose Villain", "year": 2024, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-27", "title": "Vai!", "artist": "Alfa", "year": 2024, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-28", "title": "Bellissimissima", "artist": "Alfa", "year": 2023, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-29", "title": "Tango", "artist": "Tananai", "year": 2023, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "tr-30", "title": "Due Vite", "artist": "Marco Mengoni", "year": 2023, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 12. TORMENTONI ESTIVI (30 Tracks)
  {
    "id": "tormentoni-estivi",
    "title": "Tormentoni Estivi",
    "category": "italian",
    "description": "Baby K, Boomdabash, Annalisa, Fedez, Elodie e i tormentoni sotto l'ombrellone.",
    "badge": "Estate ☀️",
    "cover": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "te-1", "title": "Roma - Bangkok", "artist": "Baby K feat. Giusy Ferreri", "year": 2015, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-2", "title": "Karaoke", "artist": "Boomdabash & Alessandra Amoroso", "year": 2020, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-3", "title": "Mambo Salentino", "artist": "Boomdabash feat. Alessandra Amoroso", "year": 2019, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-4", "title": "Margarita", "artist": "Elodie & Marracash", "year": 2019, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-5", "title": "Mille", "artist": "Fedez, Achille Lauro & Orietta Berti", "year": 2021, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-6", "title": "Samba della Rosa", "artist": "Baby K", "year": 2019, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-7", "title": "Disco Paradise", "artist": "Fedez, Annalisa & Articolo 31", "year": 2023, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-8", "title": "Pazza Musica", "artist": "Marco Mengoni & Elodie", "year": 2023, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-9", "title": "Rubami la Notte", "artist": "Pinguini Tattici Nucleari", "year": 2023, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-10", "title": "Vorrei ma non posto", "artist": "J-AX & Fedez", "year": 2016, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-11", "title": "Senza Pagare", "artist": "J-AX & Fedez", "year": 2017, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-12", "title": "Amore e Capoeira", "artist": "Takagi & Ketra feat. Giusy Ferreri", "year": 2018, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-13", "title": "Jambo", "artist": "Takagi & Ketra feat. OMI & Giusy Ferreri", "year": 2019, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-14", "title": "Ciclone", "artist": "Takagi & Ketra feat. Elodie & Mariah", "year": 2020, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-15", "title": "Tribale", "artist": "Elodie", "year": 2022, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-16", "title": "Makumba", "artist": "Noemi & Carl Brave", "year": 2021, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-17", "title": "Movimento Lento", "artist": "Annalisa feat. Federico Rossi", "year": 2021, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-18", "title": "Tropicana", "artist": "Boomdabash & Annalisa", "year": 2022, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-19", "title": "L-OMOBONO", "artist": "Rocco Hunt feat. Ana Mena", "year": 2020, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-20", "title": "Un bacio all'improvviso", "artist": "Rocco Hunt & Ana Mena", "year": 2021, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-21", "title": "D'estate non vale", "artist": "Fred De Palma feat. Ana Mena", "year": 2018, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-22", "title": "Una volta ancora", "artist": "Fred De Palma feat. Ana Mena", "year": 2019, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-23", "title": "Paloma", "artist": "Fred De Palma feat. Anitta", "year": 2020, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-24", "title": "Nera", "artist": "Irama", "year": 2018, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-25", "title": "Arrogante", "artist": "Irama", "year": 2019, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-26", "title": "Mediterranea", "artist": "Irama", "year": 2020, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-27", "title": "Pamplona", "artist": "Fabri Fibra feat. Thegiornalisti", "year": 2017, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-28", "title": "Riccione", "artist": "Thegiornalisti", "year": 2017, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-29", "title": "Felicità puttana", "artist": "Thegiornalisti", "year": 2018, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
      { "id": "te-30", "title": "Maradona y Pelé", "artist": "Thegiornalisti", "year": 2019, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 13. ROCK CLASSICS & HARD ROCK (30 Tracks)
  {
    "id": "rock-classics",
    "title": "Rock Classics & Hard Rock",
    "category": "genres",
    "description": "AC/DC, Guns N' Roses, Queen, Led Zeppelin, Metallica e le leggende del rock.",
    "badge": "Leggendario ⚡",
    "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "rc-1", "title": "Back in Black", "artist": "AC/DC", "year": 1980, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-2", "title": "Sweet Child O' Mine", "artist": "Guns N' Roses", "year": 1987, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-3", "title": "Bohemian Rhapsody", "artist": "Queen", "year": 1975, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-4", "title": "Stairway to Heaven", "artist": "Led Zeppelin", "year": 1971, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-5", "title": "Highway to Hell", "artist": "AC/DC", "year": 1979, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-6", "title": "Welcome to the Jungle", "artist": "Guns N' Roses", "year": 1987, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-7", "title": "Livin' on a Prayer", "artist": "Bon Jovi", "year": 1986, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-8", "title": "Dream On", "artist": "Aerosmith", "year": 1973, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-9", "title": "Smoke on the Water", "artist": "Deep Purple", "year": 1972, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-10", "title": "Paranoid", "artist": "Black Sabbath", "year": 1970, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-11", "title": "Rock You Like a Hurricane", "artist": "Scorpions", "year": 1984, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-12", "title": "I Love Rock 'N Roll", "artist": "Joan Jett & the Blackhearts", "year": 1981, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-13", "title": "Thunderstruck", "artist": "AC/DC", "year": 1990, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-14", "title": "Paradise City", "artist": "Guns N' Roses", "year": 1987, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-15", "title": "We Will Rock You", "artist": "Queen", "year": 1977, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-16", "title": "Kashmir", "artist": "Led Zeppelin", "year": 1975, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-17", "title": "You Give Love a Bad Name", "artist": "Bon Jovi", "year": 1986, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-18", "title": "Walk This Way", "artist": "Aerosmith", "year": 1975, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-19", "title": "Born to Be Wild", "artist": "Steppenwolf", "year": 1968, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-20", "title": "Iron Man", "artist": "Black Sabbath", "year": 1970, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-21", "title": "Wind of Change", "artist": "Scorpions", "year": 1990, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-22", "title": "Master of Puppets", "artist": "Metallica", "year": 1986, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-23", "title": "Nothing Else Matters", "artist": "Metallica", "year": 1991, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-24", "title": "Crazy Train", "artist": "Ozzy Osbourne", "year": 1980, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-25", "title": "Ace of Spades", "artist": "Motörhead", "year": 1980, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-26", "title": "Rock and Roll All Nite", "artist": "KISS", "year": 1975, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-27", "title": "I Was Made for Lovin' You", "artist": "KISS", "year": 1979, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-28", "title": "Poison", "artist": "Alice Cooper", "year": 1989, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-29", "title": "Free Bird", "artist": "Lynyrd Skynyrd", "year": 1973, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "rc-30", "title": "Sweet Home Alabama", "artist": "Lynyrd Skynyrd", "year": 1974, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 14. EDM & ELECTRONIC FESTIVALS (30 Tracks)
  {
    "id": "edm-festivals",
    "title": "EDM & Electronic Festivals",
    "category": "genres",
    "description": "Avicii, David Guetta, Calvin Harris, Martin Garrix e i più grandi inni da festival.",
    "badge": "Party 🎉",
    "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "edm-1", "title": "Wake Me Up", "artist": "Avicii", "year": 2013, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-2", "title": "Titanium", "artist": "David Guetta feat. Sia", "year": 2011, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-3", "title": "Summer", "artist": "Calvin Harris", "year": 2014, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-4", "title": "Animals", "artist": "Martin Garrix", "year": 2013, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-5", "title": "Don't You Worry Child", "artist": "Swedish House Mafia", "year": 2012, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-6", "title": "Levels", "artist": "Avicii", "year": 2011, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-7", "title": "Clarity", "artist": "Zedd feat. Foxes", "year": 2012, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-8", "title": "Heroes (we could be)", "artist": "Alesso feat. Tove Lo", "year": 2014, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-9", "title": "Lean On", "artist": "Major Lazer & DJ Snake", "year": 2015, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-10", "title": "Faded", "artist": "Alan Walker", "year": 2015, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-11", "title": "Bangarang", "artist": "Skrillex", "year": 2011, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-12", "title": "Happier", "artist": "Marshmello ft. Bastille", "year": 2018, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-13", "title": "The Business", "artist": "Tiësto", "year": 2020, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-14", "title": "One (Your Name)", "artist": "Swedish House Mafia", "year": 2010, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-15", "title": "Hey Brother", "artist": "Avicii", "year": 2013, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-16", "title": "Without You", "artist": "Avicii feat. Sandro Cavazza", "year": 2017, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-17", "title": "This Is What It Feels Like", "artist": "Armin van Buuren", "year": 2013, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-18", "title": "Feel So Close", "artist": "Calvin Harris", "year": 2011, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-19", "title": "Blame", "artist": "Calvin Harris feat. John Newman", "year": 2014, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-20", "title": "This Is What You Came For", "artist": "Calvin Harris feat. Rihanna", "year": 2016, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-21", "title": "Turn Up the Speakers", "artist": "Afrojack & Martin Garrix", "year": 2014, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-22", "title": "Tremor", "artist": "Dimitri Vegas & Like Mike vs Martin Garrix", "year": 2014, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-23", "title": "Tsunami", "artist": "DVBBS & Borgeous", "year": 2013, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-24", "title": "Epic", "artist": "Sandro Silva & Quintino", "year": 2011, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-25", "title": "Astronomia", "artist": "Vicetone & Tony Igy", "year": 2014, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-26", "title": "Roses", "artist": "SAINt JHN (Imanbek Remix)", "year": 2019, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-27", "title": "Piece of Your Heart", "artist": "Meduza feat. GOODBOYS", "year": 2019, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-28", "title": "Lose Control", "artist": "Meduza, Becky Hill & GOODBOYS", "year": 2019, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-29", "title": "Head & Heart", "artist": "Joel Corry feat. MNEK", "year": 2020, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "edm-30", "title": "I'm Good (Blue)", "artist": "David Guetta & Bebe Rexha", "year": 2022, "genre": "Dance", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // 15. INDIE ITALIA (30 Tracks)
  {
    "id": "indie-italia",
    "title": "Indie & Cantautori Pop Italia",
    "category": "italian",
    "description": "Calcutta, Coez, Pinguini Tattici Nucleari, Gazzelle, Thegiornalisti e Franco126.",
    "badge": "Indie 🎸",
    "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "ind-1", "title": "Paracetamolo", "artist": "Calcutta", "year": 2018, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-2", "title": "La musica non c'è", "artist": "Coez", "year": 2017, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-3", "title": "Ringo Starr", "artist": "Pinguini Tattici Nucleari", "year": 2020, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-4", "title": "Gazzelle - Non sei tu", "artist": "Gazzelle", "year": 2017, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-5", "title": "Completamente", "artist": "Thegiornalisti", "year": 2016, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-6", "title": "Pesto", "artist": "Calcutta", "year": 2018, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-7", "title": "Oroscopo", "artist": "Calcutta", "year": 2016, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-8", "title": "Fiamme negli occhi", "artist": "Coma_Cose", "year": 2021, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-9", "title": "L'Addio", "artist": "Coma_Cose", "year": 2023, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-10", "title": "Pastello Bianco", "artist": "Pinguini Tattici Nucleari", "year": 2021, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-11", "title": "Giovovani Popolari", "artist": "Pinguini Tattici Nucleari", "year": 2022, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-12", "title": "È sempre bello", "artist": "Coez", "year": 2019, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-13", "title": "Domenica", "artist": "Coez", "year": 2019, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-14", "title": "Destri", "artist": "Gazzelle", "year": 2020, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-15", "title": "Tutto qui", "artist": "Gazzelle", "year": 2024, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-16", "title": "Stressed Out", "artist": "Franco126", "year": 2019, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-17", "title": "Blue Jeans", "artist": "Franco126 & Calcutta", "year": 2020, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-18", "title": "Santa Marinella", "artist": "Fulminacci", "year": 2021, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-19", "title": "Borghese in Borghesia", "artist": "Fulminacci", "year": 2019, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-20", "title": "Mare di Guai", "artist": "Ariete", "year": 2023, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-21", "title": "L'ultima notte", "artist": "Ariete", "year": 2021, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-22", "title": "Manzanas", "artist": "Canova", "year": 2016, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-23", "title": "Vita Sociale", "artist": "Canova", "year": 2016, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-24", "title": "Istruzioni per l'uso", "artist": "Brunori Sas", "year": 2017, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-25", "title": "La verità", "artist": "Brunori Sas", "year": 2017, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-26", "title": "Canzone contro la paura", "artist": "Brunori Sas", "year": 2017, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-27", "title": "Al della di me", "artist": "Motta", "year": 2018, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-28", "title": "La fine dei vent'anni", "artist": "Motta", "year": 2016, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-29", "title": "2000EP", "artist": "Psicologi", "year": 2020, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "ind-30", "title": "Spiderman", "artist": "Psicologi", "year": 2021, "genre": "Italian", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  // 16. POP DIVAS & QUEENS (37 Tracks)
  {
    "id": "pop-divas",
    "title": "Pop Divas & Queens",
    "category": "artists",
    "description": "Whitney Houston, Mariah Carey, Celine Dion, Beyoncé, Madonna, Christina Aguilera, Aretha Franklin, Tina Turner, Shakira, Lady Gaga, Cher, Amy Winehouse, Britney Spears, Janis Joplin, Gwen Stefani, Pink, Sia, Rihanna, Dua Lipa, Ariana Grande, Adele.",
    "badge": "Iconico ✨",
    "cover": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      { "id": "div-1", "title": "I Will Always Love You", "artist": "Whitney Houston", "year": 1992, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-2", "title": "I Wanna Dance with Somebody", "artist": "Whitney Houston", "year": 1987, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-3", "title": "Hero", "artist": "Mariah Carey", "year": 1993, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-4", "title": "Without You", "artist": "Mariah Carey", "year": 1993, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-5", "title": "All I Want for Christmas Is You", "artist": "Mariah Carey", "year": 1994, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-6", "title": "My Heart Will Go On", "artist": "Celine Dion", "year": 1997, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-7", "title": "Because You Loved Me", "artist": "Celine Dion", "year": 1996, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-8", "title": "Crazy in Love", "artist": "Beyoncé", "year": 2003, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-9", "title": "Halo", "artist": "Beyoncé", "year": 2008, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-10", "title": "Single Ladies (Put a Ring on It)", "artist": "Beyoncé", "year": 2008, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-11", "title": "Like a Prayer", "artist": "Madonna", "year": 1989, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-12", "title": "Vogue", "artist": "Madonna", "year": 1990, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-13", "title": "Genie in a Bottle", "artist": "Christina Aguilera", "year": 1999, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-14", "title": "Beautiful", "artist": "Christina Aguilera", "year": 2002, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-15", "title": "Respect", "artist": "Aretha Franklin", "year": 1967, "genre": "Soul", "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-16", "title": "I Say a Little Prayer", "artist": "Aretha Franklin", "year": 1968, "genre": "Soul", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-17", "title": "The Best", "artist": "Tina Turner", "year": 1989, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-18", "title": "What's Love Got to Do with It", "artist": "Tina Turner", "year": 1984, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-19", "title": "Hips Don't Lie", "artist": "Shakira", "year": 2006, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-20", "title": "Whenever, Wherever", "artist": "Shakira", "year": 2001, "genre": "Latin", "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-21", "title": "Bad Romance", "artist": "Lady Gaga", "year": 2009, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-22", "title": "Poker Face", "artist": "Lady Gaga", "year": 2008, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-23", "title": "Believe", "artist": "Cher", "year": 1998, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-24", "title": "Rehab", "artist": "Amy Winehouse", "year": 2006, "genre": "Soul", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-25", "title": "Back to Black", "artist": "Amy Winehouse", "year": 2006, "genre": "Soul", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-26", "title": "...Baby One More Time", "artist": "Britney Spears", "year": 1998, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-27", "title": "Toxic", "artist": "Britney Spears", "year": 2003, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-28", "title": "Piece of My Heart", "artist": "Janis Joplin", "year": 1968, "genre": "Rock", "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-29", "title": "Hollaback Girl", "artist": "Gwen Stefani", "year": 2004, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-30", "title": "Just Give Me a Reason", "artist": "Pink", "year": 2012, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-31", "title": "Chandelier", "artist": "Sia", "year": 2014, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-32", "title": "Diamonds", "artist": "Rihanna", "year": 2012, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-33", "title": "Umbrella", "artist": "Rihanna", "year": 2007, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-34", "title": "Levitating", "artist": "Dua Lipa", "year": 2020, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-35", "title": "7 rings", "artist": "Ariana Grande", "year": 2019, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-36", "title": "Rolling in the Deep", "artist": "Adele", "year": 2011, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80" },
      { "id": "div-37", "title": "Someone Like You", "artist": "Adele", "year": 2011, "genre": "Pop", "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" }
    ]
  }
];

/**
 * Universal Master Track Vault (All 300+ tracks pooled together)
 */
export const ALL_MASTER_TRACKS = PLAYLISTS.flatMap(p => p.tracks);

/**
 * Smart Randomization Helper:
 * Returns targetCount (10, 15, or 20) tracks.
 * Prioritizes tracks that haven't been played in the current session.
 */
export function getRandomizedTrackPool(playlist, targetCount = 10, playedSet = new Set()) {
  if (!playlist || !playlist.tracks || playlist.tracks.length === 0) return [];

  // Strictly use ONLY the tracks belonging to this specific playlist
  let available = playlist.tracks.filter(t => !playedSet.has(t.id));

  // Reset played history if remaining available tracks are fewer than required targetCount
  if (available.length < targetCount) {
    playedSet.clear();
    available = [...playlist.tracks];
  }

  // Shuffle randomly and return exact target count
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(targetCount, playlist.tracks.length));

  selected.forEach(t => playedSet.add(t.id));
  return selected;
}

export function generateChoicesForTrack(targetTrack, allTracksPool = ALL_MASTER_TRACKS) {
  const choices = [targetTrack];

  const isItalian = (t) => (
    t.genre === 'Italian' || 
    t.id?.startsWith('ita-') || 
    t.id?.startsWith('cnt-') ||
    t.id?.startsWith('cant-')
  );

  const isTargetItalian = isItalian(targetTrack);

  // Candidate pool: must match language and not be target track
  const candidates = allTracksPool.filter(t => 
    t.id !== targetTrack.id && 
    t.title.toLowerCase() !== targetTrack.title.toLowerCase() && 
    isItalian(t) === isTargetItalian
  );

  // Strict genre matching: priority 1 = exact same genre/style
  const sameGenre = candidates.filter(t => t.genre === targetTrack.genre);
  // Priority 2 = compatible genres (e.g. Rock + Indie, Pop + Disco, etc.)
  const compatibleGenre = candidates.filter(t => {
    if (t.genre === targetTrack.genre) return false;
    if (targetTrack.genre === 'Rock' || targetTrack.genre === 'Indie') return t.genre === 'Rock' || t.genre === 'Indie';
    if (targetTrack.genre === 'Pop' || targetTrack.genre === 'Dance' || targetTrack.genre === 'Disco') return ['Pop', 'Dance', 'Disco'].includes(t.genre);
    if (targetTrack.genre === 'Hip-Hop') return t.genre === 'Hip-Hop' || t.genre === 'Latin';
    return false;
  });

  const remaining = candidates.filter(t => !sameGenre.includes(t) && !compatibleGenre.includes(t));

  const sortedPool = [
    ...sameGenre.sort(() => Math.random() - 0.5),
    ...compatibleGenre.sort(() => Math.random() - 0.5),
    ...remaining.sort(() => Math.random() - 0.5)
  ];
  
  for (const item of sortedPool) {
    if (choices.length >= 4) break;
    if (!choices.some(c => c.title.toLowerCase() === item.title.toLowerCase())) {
      choices.push(item);
    }
  }
  
  // Language-matched fallbacks in case candidates pool is small
  const fallbackDistractors = isTargetItalian ? [
    { title: 'Volare (Nel blu dipinto di blu)', artist: 'Domenico Modugno', genre: 'Italian' },
    { title: 'Ti Amo', artist: 'Umberto Tozzi', genre: 'Italian' },
    { title: 'L\'Italiano', artist: 'Toto Cutugno', genre: 'Italian' },
    { title: 'Con Te Partirò', artist: 'Andrea Bocelli', genre: 'Italian' },
    { title: 'Azzurro', artist: 'Adriano Celentano', genre: 'Italian' }
  ] : targetTrack.genre === 'Hip-Hop' ? [
    { title: 'Nuthin\' but a \'G\' Thang', artist: 'Dr. Dre', genre: 'Hip-Hop' },
    { title: 'Hypnotize', artist: 'The Notorious B.I.G.', genre: 'Hip-Hop' },
    { title: 'Changes', artist: '2Pac', genre: 'Hip-Hop' },
    { title: 'Ruff Ryders\' Anthem', artist: 'DMX', genre: 'Hip-Hop' }
  ] : targetTrack.genre === 'Rock' ? [
    { title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', genre: 'Rock' },
    { title: 'Back in Black', artist: 'AC/DC', genre: 'Rock' },
    { title: 'Livin\' on a Prayer', artist: 'Bon Jovi', genre: 'Rock' },
    { title: 'Smells Like Teen Spirit', artist: 'Nirvana', genre: 'Rock' }
  ] : [
    { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Pop' },
    { title: 'Take On Me', artist: 'a-ha', genre: 'Pop' },
    { title: 'Sweet Dreams', artist: 'Eurythmics', genre: 'Pop' },
    { title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop' }
  ];
  
  let fallbackIdx = 0;
  while (choices.length < 4 && fallbackIdx < fallbackDistractors.length) {
    const f = fallbackDistractors[fallbackIdx++];
    if (!choices.some(c => c.title.toLowerCase() === f.title.toLowerCase())) {
      choices.push({ id: 'mock-' + fallbackIdx, title: f.title, artist: f.artist, genre: f.genre });
    }
  }

  return choices.sort(() => Math.random() - 0.5);
}

export function getCalibrationTracks() {
  const uniqueTracks = [];
  const seen = new Set();
  for (const t of ALL_MASTER_TRACKS) {
    if (!seen.has(t.title)) {
      seen.add(t.title);
      uniqueTracks.push(t);
    }
  }
  // Shuffle randomly and pick 10
  const shuffled = [...uniqueTracks].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}
