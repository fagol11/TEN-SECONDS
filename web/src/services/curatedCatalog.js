/**
 * Curated Track Catalog for Ten Seconds - 20 Playable Playlists (1,000 total songs)
 * Fully hydrated with verified MP3/M4A audio previews and hi-res artwork.
 */

export const CATEGORIES = [
  { id: 'all', name: 'Tutte', icon: 'Sparkles', color: 'from-emerald-500 to-teal-700' },
  { id: 'ten_seconds', name: 'Ten Seconds', icon: 'Zap', color: 'from-cyan-500 to-blue-700' },
  { id: 'imported', name: 'Importate', icon: 'Link', color: 'from-[#1DB954] to-emerald-800' },
];

export const PLAYLISTS = [
  {
    "id": "rock-90s",
    "title": "Rock Anni '90",
    "category": "decades",
    "description": "Nirvana, Radiohead, Oasis, Pearl Jam, Soundgarden e i giganti del rock anni 90.",
    "badge": "Popolare",
    "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "r90-1",
        "title": "Smells Like Teen Spirit",
        "artist": "Nirvana",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3?hdnea=exp=1786710702~acl=/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3*~data=user_id=0,application_id=42~hmac=a2e201dffe86edfaee265ffaba6bf375b4b98fccc38d3d7881fb9294fc1a626e"
      },
      {
        "id": "r90-2",
        "title": "Karma Police",
        "artist": "Radiohead",
        "year": 1997,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/1/d/0/41dd34fd7d334b1c55b6970ef6db0d2f.mp3?hdnea=exp=1786710702~acl=/api/1/1/4/1/d/0/41dd34fd7d334b1c55b6970ef6db0d2f.mp3*~data=user_id=0,application_id=42~hmac=325ca76d851c3a6dc29d099bedefb3984a4653958e3e98e5e631fb2087123113"
      },
      {
        "id": "r90-3",
        "title": "Wonderwall",
        "artist": "Oasis",
        "year": 1995,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/9/0/e992ed1b27bd8da3c4f6128047285674.mp3?hdnea=exp=1786710702~acl=/api/1/1/e/9/9/0/e992ed1b27bd8da3c4f6128047285674.mp3*~data=user_id=0,application_id=42~hmac=90e65b625987ac6d7a67a8322c31e50da0a4453bb01262e889094541c832d44c"
      },
      {
        "id": "r90-4",
        "title": "Alive",
        "artist": "Pearl Jam",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/2/0/4e2e3f9fda3e7ec7cbed140b11cdcdb1.mp3?hdnea=exp=1786710702~acl=/api/1/1/4/e/2/0/4e2e3f9fda3e7ec7cbed140b11cdcdb1.mp3*~data=user_id=0,application_id=42~hmac=5324c62a8eefbfde90fc3c4b7a0151793d3199f9915622d3d80c2a8046f520f7"
      },
      {
        "id": "r90-5",
        "title": "Zombie",
        "artist": "The Cranberries",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/6/a/0/36a85b40cf6d71f69d551f95115b4db1.mp3?hdnea=exp=1786710702~acl=/api/1/1/3/6/a/0/36a85b40cf6d71f69d551f95115b4db1.mp3*~data=user_id=0,application_id=42~hmac=2b28cc6af63ebeba7c0869b605194cc213269a2ffb5dc6c9e3d27661c4717196"
      },
      {
        "id": "r90-6",
        "title": "Black Hole Sun",
        "artist": "Soundgarden",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/f/b/0/efb5406f9e60e28bcc967b60ace4a17f.mp3?hdnea=exp=1786710702~acl=/api/1/1/e/f/b/0/efb5406f9e60e28bcc967b60ace4a17f.mp3*~data=user_id=0,application_id=42~hmac=71ec9c0aa913162633b1ed9b990a7479a3536ead1fbc195d82401ab6594c4d01"
      },
      {
        "id": "r90-7",
        "title": "Under the Bridge",
        "artist": "Red Hot Chili Peppers",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/5/d/0/35dec79ccfa79745ced0b4ffa2a0f8a2.mp3?hdnea=exp=1786710703~acl=/api/1/1/3/5/d/0/35dec79ccfa79745ced0b4ffa2a0f8a2.mp3*~data=user_id=0,application_id=42~hmac=aadc4586838b8d3f6a995a606e2de0410bd62430d0cc36581c7b220ad32b7ad4"
      },
      {
        "id": "r90-8",
        "title": "Losing My Religion",
        "artist": "R.E.M.",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/f/0/4ef0a38d9159a0f45d5f16399db90862.mp3?hdnea=exp=1786710702~acl=/api/1/1/4/e/f/0/4ef0a38d9159a0f45d5f16399db90862.mp3*~data=user_id=0,application_id=42~hmac=abb09395b154acf9e7d1913d0c0c9b591ae0a1b1a0e312847b4f91ba1b79223c"
      },
      {
        "id": "r90-9",
        "title": "Song 2",
        "artist": "Blur",
        "year": 1997,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/5/2/0/b52000f4b656776924aeecb6b45eef79.mp3?hdnea=exp=1786710702~acl=/api/1/1/b/5/2/0/b52000f4b656776924aeecb6b45eef79.mp3*~data=user_id=0,application_id=42~hmac=9b7c3384384d15fbd764b6b8db0f8a7f97704f7a59cf3fea3a579377e6f8e738"
      },
      {
        "id": "r90-10",
        "title": "Basket Case",
        "artist": "Green Day",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/2/0/e92e69639b644d52ef79e3ae235c8a91.mp3?hdnea=exp=1786710703~acl=/api/1/1/e/9/2/0/e92e69639b644d52ef79e3ae235c8a91.mp3*~data=user_id=0,application_id=42~hmac=cbb26f7ea3c07b7e21e51a9abe63032d8cee3be2417a22747c99301dca8e75ae"
      },
      {
        "id": "r90-11",
        "title": "Enter Sandman",
        "artist": "Metallica",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/0/0/c70d7e81abc196d915aadd1e7489a75a.mp3?hdnea=exp=1786710703~acl=/api/1/1/c/7/0/0/c70d7e81abc196d915aadd1e7489a75a.mp3*~data=user_id=0,application_id=42~hmac=68353bbeca0757933ba3bf372b3dc0dfee266266938a36865fdf04f03d3d83e4"
      },
      {
        "id": "r90-12",
        "title": "Fly Away",
        "artist": "Lenny Kravitz",
        "year": 1998,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/e/e/0/0ee6935f930803d6f0e24db974aa7d0e.mp3?hdnea=exp=1786710703~acl=/api/1/1/0/e/e/0/0ee6935f930803d6f0e24db974aa7d0e.mp3*~data=user_id=0,application_id=42~hmac=90c82c7a48a089b35fe41571938664f29a6964576f345bed9211ac56b3a2e078"
      },
      {
        "id": "r90-13",
        "title": "Creep",
        "artist": "Radiohead",
        "year": 1992,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/9/c/0/b9c4cde36fbe176cc3e84dc08fc0611b.mp3?hdnea=exp=1786710703~acl=/api/1/1/b/9/c/0/b9c4cde36fbe176cc3e84dc08fc0611b.mp3*~data=user_id=0,application_id=42~hmac=85b31602f9fc03ae40ccefde0d1b765b38a3df04a7130c5f93f956653fb7da9c"
      },
      {
        "id": "r90-14",
        "title": "Come as You Are",
        "artist": "Nirvana",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/7/c/0/27c313fdbf4ae7aec1ac264c10e110e2.mp3?hdnea=exp=1786710703~acl=/api/1/1/2/7/c/0/27c313fdbf4ae7aec1ac264c10e110e2.mp3*~data=user_id=0,application_id=42~hmac=54b08409b79067e01be49eced7b00c43829591f94dfecbb3d00c7c1fbfca1b1d"
      },
      {
        "id": "r90-15",
        "title": "Don't Look Back in Anger",
        "artist": "Oasis",
        "year": 1995,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/6/0/0/86078719abe82afc13aaf2c9f00bc85a.mp3?hdnea=exp=1786710703~acl=/api/1/1/8/6/0/0/86078719abe82afc13aaf2c9f00bc85a.mp3*~data=user_id=0,application_id=42~hmac=6bad37c32b8eb81b2764275d03fb8e63953417b630969e26ab805ffe06c7451f"
      },
      {
        "id": "r90-16",
        "title": "Plush",
        "artist": "Stone Temple Pilots",
        "year": 1992,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/5/4/0/f54971627f1bdace3e4c9bb2087322b6.mp3?hdnea=exp=1786710704~acl=/api/1/1/f/5/4/0/f54971627f1bdace3e4c9bb2087322b6.mp3*~data=user_id=0,application_id=42~hmac=968b503bc69c99dbdaec78217620b27b532a6cc06a6f1462922fd1293c811ced"
      },
      {
        "id": "r90-17",
        "title": "Man in the Box",
        "artist": "Alice in Chains",
        "year": 1990,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/4/7/0/947364543f99e4d69c3c873ce6721d4c.mp3?hdnea=exp=1786710704~acl=/api/1/1/9/4/7/0/947364543f99e4d69c3c873ce6721d4c.mp3*~data=user_id=0,application_id=42~hmac=011a341eeee36ca6ef41189476dab2a3c06964c055b1aa66f2cfc3088d584fb6"
      },
      {
        "id": "r90-18",
        "title": "One",
        "artist": "Metallica",
        "year": 1988,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/b/6/0/4b644cbb29fc415e3215eb8a66e886b8.mp3?hdnea=exp=1786710704~acl=/api/1/1/4/b/6/0/4b644cbb29fc415e3215eb8a66e886b8.mp3*~data=user_id=0,application_id=42~hmac=c9b149dda5998fbea2ac0342c2d6f2b5306b814aed096c9e1ff22ec528e6f280"
      },
      {
        "id": "r90-19",
        "title": "What's Up?",
        "artist": "4 Non Blondes",
        "year": 1992,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/6/0/0/b6094cd4a5bf36cd534651cdb6ad29e8.mp3?hdnea=exp=1786710704~acl=/api/1/1/b/6/0/0/b6094cd4a5bf36cd534651cdb6ad29e8.mp3*~data=user_id=0,application_id=42~hmac=757f018edcf3a17c59305300abfab7e8a4a7a9944fb2f16fea77d35a952d33a7"
      },
      {
        "id": "r90-20",
        "title": "No Rain",
        "artist": "Blind Melon",
        "year": 1992,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/d/5/0/cd5846c10b63919e3f01eb9503453a58.mp3?hdnea=exp=1786710704~acl=/api/1/1/c/d/5/0/cd5846c10b63919e3f01eb9503453a58.mp3*~data=user_id=0,application_id=42~hmac=86103f385387f7ccce236d32fa587169b080044a326639044acf32331a172756"
      },
      {
        "id": "r90-21",
        "title": "Even Flow",
        "artist": "Pearl Jam",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/3/7/0/33745c12797ff41b67c78952050765a0.mp3?hdnea=exp=1786710705~acl=/api/1/1/3/3/7/0/33745c12797ff41b67c78952050765a0.mp3*~data=user_id=0,application_id=42~hmac=c48cc2271dd673ff6a3973c05bacb79a0b95212bf5e22907167efe2a587d1513"
      },
      {
        "id": "r90-22",
        "title": "Lightning Crashes",
        "artist": "Live",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/1/0/0/010f5f04b1f4cba8b79892ed68427474.mp3?hdnea=exp=1786710705~acl=/api/1/1/0/1/0/0/010f5f04b1f4cba8b79892ed68427474.mp3*~data=user_id=0,application_id=42~hmac=698b2107f0c13b9a73342b8926abaa56032e753896bf832c03cef3c3b2f9c52d"
      },
      {
        "id": "r90-23",
        "title": "Champagne Supernova",
        "artist": "Oasis",
        "year": 1995,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/a/a/0/faad6f2d8ea4bebbc6874adc0866c734.mp3?hdnea=exp=1786710705~acl=/api/1/1/f/a/a/0/faad6f2d8ea4bebbc6874adc0866c734.mp3*~data=user_id=0,application_id=42~hmac=8df3b29652a9fddec3306f4f53127d58ce5bf797f54c41911e06876d6f122641"
      },
      {
        "id": "r90-24",
        "title": "1979",
        "artist": "The Smashing Pumpkins",
        "year": 1995,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/8/8/0/b88841c8283987ab0fd90008ade3c179.mp3?hdnea=exp=1786710705~acl=/api/1/1/b/8/8/0/b88841c8283987ab0fd90008ade3c179.mp3*~data=user_id=0,application_id=42~hmac=4715eb9424f715449447142b7662fc7cdd670f4c9cd63f7e0cb30f65954efe36"
      },
      {
        "id": "r90-25",
        "title": "No Surprises",
        "artist": "Radiohead",
        "year": 1997,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/f/1/0/1f10e9c9eda91f9331f6c42c0dd077a2.mp3?hdnea=exp=1786710705~acl=/api/1/1/1/f/1/0/1f10e9c9eda91f9331f6c42c0dd077a2.mp3*~data=user_id=0,application_id=42~hmac=298984e9e46157a46676fd5844afa95555ae7d472abc8253d6df79b10370dde0"
      },
      {
        "id": "r90-26",
        "title": "Give It Away",
        "artist": "Red Hot Chili Peppers",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/3/0/633bab1e1a03a676baf98ef3692d9e0b.mp3?hdnea=exp=1786710705~acl=/api/1/1/6/3/3/0/633bab1e1a03a676baf98ef3692d9e0b.mp3*~data=user_id=0,application_id=42~hmac=a5aa79715565bae6f5c691b2dba5a3e1feb72e319895d6d2cb970cc7d1af1d1b"
      },
      {
        "id": "r90-27",
        "title": "When I Come Around",
        "artist": "Green Day",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/7/0/f67b81a44e70a399601d8bdef028cfb1.mp3?hdnea=exp=1786710705~acl=/api/1/1/f/6/7/0/f67b81a44e70a399601d8bdef028cfb1.mp3*~data=user_id=0,application_id=42~hmac=bbe4a9fc98f105d1a80fb161b22269aefe42db81b77cb09af84f107693558e70"
      },
      {
        "id": "r90-28",
        "title": "Interstate Love Song",
        "artist": "Stone Temple Pilots",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/f/0/70f217a9d5e53d0ab5c5359859499055.mp3?hdnea=exp=1786710705~acl=/api/1/1/7/0/f/0/70f217a9d5e53d0ab5c5359859499055.mp3*~data=user_id=0,application_id=42~hmac=c306c2a153459f3ce5d0fc2f9b07c62d616e142c5ebcc1cfeeb242830ac3d15a"
      },
      {
        "id": "r90-29",
        "title": "Spoonman",
        "artist": "Soundgarden",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/b/4/0/2b4d21fad403d5e48ab7410fbcf5f362.mp3?hdnea=exp=1786710705~acl=/api/1/1/2/b/4/0/2b4d21fad403d5e48ab7410fbcf5f362.mp3*~data=user_id=0,application_id=42~hmac=bd03fedb14d124de024b36cdf76c168f5fc08c7a4e19f87143fc018db44371f8"
      },
      {
        "id": "r90-30",
        "title": "In Bloom",
        "artist": "Nirvana",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/2/5/0/325e263266ce02ceac5d0dec47f39754.mp3?hdnea=exp=1786710705~acl=/api/1/1/3/2/5/0/325e263266ce02ceac5d0dec47f39754.mp3*~data=user_id=0,application_id=42~hmac=1ef5bc7aa089c15d62b4eed333a1d24aca0e64f7b0b8e4e876ad92bcb23ecd72"
      },
      {
        "id": "r90-31",
        "title": "Cryin'",
        "artist": "Aerosmith",
        "year": 1993,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/04cfb163fee3a6dcf025525eb6b57f44/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/5/a/0/95a911e2a88c88bb54aa4c1613cfe7b5.mp3?hdnea=exp=1788639288~acl=/api/1/1/9/5/a/0/95a911e2a88c88bb54aa4c1613cfe7b5.mp3*~data=user_id=0,application_id=42~hmac=901a5b68aaf84d56e9e3ce43ccdb6be2453f44724a2129aac9551aa855b8aed2"
      },
      {
        "id": "r90-32",
        "title": "Are You Gonna Go My Way",
        "artist": "Lenny Kravitz",
        "year": 2007,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/92fc3b56541e6af90105452f8e3cf510/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/2/5/0/425773b389d492d75d1bf57641b23f4d.mp3?hdnea=exp=1788639288~acl=/api/1/1/4/2/5/0/425773b389d492d75d1bf57641b23f4d.mp3*~data=user_id=0,application_id=42~hmac=98e4344696c1f03df68a5486696551d7a2251b69f1187cecaca9c1f22d9c35dd"
      },
      {
        "id": "r90-33",
        "title": "Come Out and Play",
        "artist": "The Offspring",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7199697566542a1b1d7918e3cb381899/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/7/1/0/d718e8c0613b7317c33789c926e3f131.mp3?hdnea=exp=1788639288~acl=/api/1/1/d/7/1/0/d718e8c0613b7317c33789c926e3f131.mp3*~data=user_id=0,application_id=42~hmac=393f0bb19d92ea706b816ca664f6abb6aab3fdf427b0825744fa090b59b997f1"
      },
      {
        "id": "r90-34",
        "title": "Self Esteem",
        "artist": "The Offspring",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7199697566542a1b1d7918e3cb381899/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/a/a/0/0aa57c3a09e262fb27415879b8e0ea0f.mp3?hdnea=exp=1788639289~acl=/api/1/1/0/a/a/0/0aa57c3a09e262fb27415879b8e0ea0f.mp3*~data=user_id=0,application_id=42~hmac=d672faec595db4cbcb86f3f4f4f758b23df9a96b144f72433998a414f4bd4bb9"
      },
      {
        "id": "r90-35",
        "title": "The Kids Aren't Alright",
        "artist": "The Offspring",
        "year": 2016,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f7d8a61b8c4b118e642acfb3db0a45a1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/0/3/0/b0384634d586e98fcf6f8613fc22eeb7.mp3?hdnea=exp=1788639289~acl=/api/1/1/b/0/3/0/b0384634d586e98fcf6f8613fc22eeb7.mp3*~data=user_id=0,application_id=42~hmac=8f0f6326af3db231a177c09d4515cc6c57208aae89bc2f278feedbb9208193ef"
      },
      {
        "id": "r90-36",
        "title": "Everlong",
        "artist": "Foo Fighters",
        "year": 2009,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/266f01f1c7a04843d11cd08f9c07d11f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/1/b/0/91b781968e297de2467fe9890893e586.mp3?hdnea=exp=1788639289~acl=/api/1/1/9/1/b/0/91b781968e297de2467fe9890893e586.mp3*~data=user_id=0,application_id=42~hmac=fbef7e60cb01b6b28320e054299c13928d312f9b6cd549ec47c260985efe6d58"
      },
      {
        "id": "r90-37",
        "title": "Monkey Wrench",
        "artist": "Foo Fighters",
        "year": 2009,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/266f01f1c7a04843d11cd08f9c07d11f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/f/e/0/dfefa5e821f5bb257358b5e0b89a25c3.mp3?hdnea=exp=1788639290~acl=/api/1/1/d/f/e/0/dfefa5e821f5bb257358b5e0b89a25c3.mp3*~data=user_id=0,application_id=42~hmac=74c2f5e4eb0e5251cc1f4d5b6600e218e3538aa44f4f630212f8d0b207d4c9ad"
      },
      {
        "id": "r90-38",
        "title": "Scar Tissue",
        "artist": "Red Hot Chili Peppers",
        "year": 2004,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5e61e8290a4d1d64ca58920656c9602d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/8/2/0/5827c9257a749eb955a7dd3ef3c2eb3c.mp3?hdnea=exp=1788639290~acl=/api/1/1/5/8/2/0/5827c9257a749eb955a7dd3ef3c2eb3c.mp3*~data=user_id=0,application_id=42~hmac=632c9058cfc02401aeabafb25464d3cdc04e1ae74eaa5ecf21e727cfaaef40bb"
      },
      {
        "id": "r90-39",
        "title": "Lithium",
        "artist": "Nirvana",
        "year": 2018,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/753428fbca4850a4a63ce9e59a73a21c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/f/0/0/df0640c38207c25c4cce37793e28f82d.mp3?hdnea=exp=1788639290~acl=/api/1/1/d/f/0/0/df0640c38207c25c4cce37793e28f82d.mp3*~data=user_id=0,application_id=42~hmac=59f37762a3e76b3c3e0d53f060bc63bd66512f8aeaafa239d06581c26627e5d3"
      },
      {
        "id": "r90-40",
        "title": "What's My Age Again?",
        "artist": "blink-182",
        "year": 2018,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c25db71db5267c6919391c5f6d8b0d37/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/6/2/0/b6294fab2b60d1d2ea91d73d2b8a0508.mp3?hdnea=exp=1788639291~acl=/api/1/1/b/6/2/0/b6294fab2b60d1d2ea91d73d2b8a0508.mp3*~data=user_id=0,application_id=42~hmac=12a2218f2a4f4721d2221270caa70012ee3fbc4a137d7a68e685e3b31149bcba"
      },
      {
        "id": "r90-41",
        "title": "Dammit",
        "artist": "blink-182",
        "year": 2016,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/50627ad1a5ce0215359f0e8b2e37a01f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/b/0/4eb4298bb07c48a627d88c29035e9b83.mp3?hdnea=exp=1788639291~acl=/api/1/1/4/e/b/0/4eb4298bb07c48a627d88c29035e9b83.mp3*~data=user_id=0,application_id=42~hmac=90cc437a295013d5896d390eab4cbff6e78dfb5ce4aece49ea49b9b160dae7af"
      },
      {
        "id": "r90-42",
        "title": "Bullet With Butterfly Wings",
        "artist": "The Smashing Pumpkins",
        "year": 2012,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/604cf65ac87ccca2870943a04b26e95e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/2/b/0/42bd9ec7f7a62ec1fe63b6f650e2c65d.mp3?hdnea=exp=1788639292~acl=/api/1/1/4/2/b/0/42bd9ec7f7a62ec1fe63b6f650e2c65d.mp3*~data=user_id=0,application_id=42~hmac=c7fec106e09187ea7aba2461420abb7c5316e33d41764417366028bb0a05c7bb"
      },
      {
        "id": "r90-43",
        "title": "Today",
        "artist": "The Smashing Pumpkins",
        "year": 2011,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/14fc556f659caee13ababa07f1ede592/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/9/0/da9619fd5007dc97ad792121a2a3d9b1.mp3?hdnea=exp=1788639292~acl=/api/1/1/d/a/9/0/da9619fd5007dc97ad792121a2a3d9b1.mp3*~data=user_id=0,application_id=42~hmac=2ab3c70a6f01e11c7a049723ad88b8c8edca47649b272063c7a864d9bedeb2ec"
      },
      {
        "id": "r90-44",
        "title": "Been Caught Stealing",
        "artist": "Jane's Addiction",
        "year": 1990,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e31d867c27803d442aacad8a7dac5d15/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/6/2/0/d620dedbc9f58430eb9a8702b6262fe5.mp3?hdnea=exp=1788639292~acl=/api/1/1/d/6/2/0/d620dedbc9f58430eb9a8702b6262fe5.mp3*~data=user_id=0,application_id=42~hmac=2eb859e598c80f63ee94b489b40175ce42a9a193a2b0ec78a69d29dc33a3bdd7"
      },
      {
        "id": "r90-45",
        "title": "Epic",
        "artist": "Faith No More",
        "year": 2005,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/88fcaad892e7686ec8b9a901e5a29c41/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/0/c/0/f0c43f29f9347719d23a001e627a452e.mp3?hdnea=exp=1788639293~acl=/api/1/1/f/0/c/0/f0c43f29f9347719d23a001e627a452e.mp3*~data=user_id=0,application_id=42~hmac=48f592023804a65f4f38f7254414144e87ca9e2f9d6ff0fd2d442e6165e68d01"
      },
      {
        "id": "r90-46",
        "title": "Two Princes",
        "artist": "Spin Doctors",
        "year": 2000,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/31be78823ba1adb26ed8012f4ad2db77/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/6/0/4963708cb517dc74953a9f7654d7cd89.mp3?hdnea=exp=1788639293~acl=/api/1/1/4/9/6/0/4963708cb517dc74953a9f7654d7cd89.mp3*~data=user_id=0,application_id=42~hmac=6499704dd70a93b34ec19675777377021061e17035246ab094c0b5f6d58d9169"
      },
      {
        "id": "r90-47",
        "title": "Bitter Sweet Symphony",
        "artist": "The Verve",
        "year": 2017,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ecc7727e897198892b98e7c019fba45f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/4/1/0/341bbcf7cf85b72d242ecee1c7134483.mp3?hdnea=exp=1788639294~acl=/api/1/1/3/4/1/0/341bbcf7cf85b72d242ecee1c7134483.mp3*~data=user_id=0,application_id=42~hmac=6fa33e6994bd649dba85325e45737dbb795ec71502bd2ac21bc2f587103a1c23"
      },
      {
        "id": "r90-48",
        "title": "Glycerine",
        "artist": "Bush",
        "year": 2017,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/01bb7dd3e6fa3f6e47f554f518954d58/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/d/7/0/bd7a5fb9621da2b125b27add547a55cb.mp3?hdnea=exp=1788639294~acl=/api/1/1/b/d/7/0/bd7a5fb9621da2b125b27add547a55cb.mp3*~data=user_id=0,application_id=42~hmac=c0d2de2041673086ab5c33a2b1bc1e916f5d08b22555ebaf76b4b3085e2bf580"
      },
      {
        "id": "r90-49",
        "title": "3AM",
        "artist": "Matchbox Twenty",
        "year": 1996,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/096f4acb57a8d563789179d64738f32b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/7/3/0/673f7e5d80b02999c26520775b24dbba.mp3?hdnea=exp=1788639295~acl=/api/1/1/6/7/3/0/673f7e5d80b02999c26520775b24dbba.mp3*~data=user_id=0,application_id=42~hmac=1a0a1090cb5c59ef164bddffeb0546cc4f3bb534aad166819e1f2facc74e0f89"
      },
      {
        "id": "r90-50",
        "title": "Closing Time",
        "artist": "Semisonic",
        "year": 1998,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f6c02f0959b7875e98ea91b4def22862/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/6/c/0/76c8c8f548ec49e08d592d5ec702d020.mp3?hdnea=exp=1788639295~acl=/api/1/1/7/6/c/0/76c8c8f548ec49e08d592d5ec702d020.mp3*~data=user_id=0,application_id=42~hmac=3b276ca90618b1ac1575c426b1d12cac5d1076cb873b8aab981bd1a5f63f1750"
      }
    ]
  },
  {
    "id": "pop-80s",
    "title": "Pop Anni '80",
    "category": "decades",
    "description": "Michael Jackson, Madonna, Prince, Wham! e i grandi synth pop degli anni 80.",
    "badge": "Classico",
    "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "p80-1",
        "title": "Billie Jean",
        "artist": "Michael Jackson",
        "year": 1982,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/6/e/0/e6e0f8717b1e6353e2abf797c6849889.mp3?hdnea=exp=1786710705~acl=/api/1/1/e/6/e/0/e6e0f8717b1e6353e2abf797c6849889.mp3*~data=user_id=0,application_id=42~hmac=11dde3304a35b5dd9d82a2909b5cd46f70b9ea9e8d11152f24b45023baf7cfe0"
      },
      {
        "id": "p80-2",
        "title": "Like a Prayer",
        "artist": "Madonna",
        "year": 1989,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/3/5/0/83568d6e8eab5d7d29effe9bf3a473ce.mp3?hdnea=exp=1786710705~acl=/api/1/1/8/3/5/0/83568d6e8eab5d7d29effe9bf3a473ce.mp3*~data=user_id=0,application_id=42~hmac=18c5142fdf95a50020859d7a7e4b1bb0e2e336cb21eb3790b64aa3e30c8a5c85"
      },
      {
        "id": "p80-3",
        "title": "Take On Me",
        "artist": "a-ha",
        "year": 1985,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/1/f/0/61f7cfb5575b6a15994e754f56cb6411.mp3?hdnea=exp=1786710705~acl=/api/1/1/6/1/f/0/61f7cfb5575b6a15994e754f56cb6411.mp3*~data=user_id=0,application_id=42~hmac=2b7faa0c1965ea5a1d4ee8b8ecb6e11a6ecc3b9a9e73e3316d4a2bca9ba4bb3e"
      },
      {
        "id": "p80-4",
        "title": "Sweet Dreams",
        "artist": "Eurythmics",
        "year": 1983,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/4/8/0/54847febfb0f146f6f039e71dc887cf6.mp3?hdnea=exp=1786710705~acl=/api/1/1/5/4/8/0/54847febfb0f146f6f039e71dc887cf6.mp3*~data=user_id=0,application_id=42~hmac=20149910a6389ebbbd9280b5a1de94331ef4cc60257720c5fb7b8c8c1cdb4ee5"
      },
      {
        "id": "p80-5",
        "title": "Girls Just Want to Have Fun",
        "artist": "Cyndi Lauper",
        "year": 1983,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/6/f/0/a6fee1bea8f3ec24b4b86785b197b09b.mp3?hdnea=exp=1786710705~acl=/api/1/1/a/6/f/0/a6fee1bea8f3ec24b4b86785b197b09b.mp3*~data=user_id=0,application_id=42~hmac=86c4f273ce6732bf3ac7e80bff705ea8d62ae8366c9bb57846453425cca1dd99"
      },
      {
        "id": "p80-6",
        "title": "Never Gonna Give You Up",
        "artist": "Rick Astley",
        "year": 1987,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/7/7/0/e773d9a1121ced48f2e74bca4271699c.mp3?hdnea=exp=1786710705~acl=/api/1/1/e/7/7/0/e773d9a1121ced48f2e74bca4271699c.mp3*~data=user_id=0,application_id=42~hmac=d84507df99a996080d68c5b0eb930baaaa15e8f9f87c7f70f4b99f77ce67fdce"
      },
      {
        "id": "p80-7",
        "title": "Blue Monday",
        "artist": "New Order",
        "year": 1983,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/a/e/0/7aea8a4ca1d9900292e76da306cf1692.mp3?hdnea=exp=1786710705~acl=/api/1/1/7/a/e/0/7aea8a4ca1d9900292e76da306cf1692.mp3*~data=user_id=0,application_id=42~hmac=900b7da32b8c72913d1f57fda1bf57a97a738e09f83ec470bf3a69ae90963594"
      },
      {
        "id": "p80-8",
        "title": "Careless Whisper",
        "artist": "George Michael",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/1/0/a91845f6dd1265c2f85a3f716d9029e5.mp3?hdnea=exp=1786710705~acl=/api/1/1/a/9/1/0/a91845f6dd1265c2f85a3f716d9029e5.mp3*~data=user_id=0,application_id=42~hmac=df706908e1e77a688e5b40ceafbc1e1244bc86189ce20e86983f4500ec030a2e"
      },
      {
        "id": "p80-9",
        "title": "Every Breath You Take",
        "artist": "The Police",
        "year": 1983,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/4/0/f64bec38146590bbfa345352446d5f52.mp3?hdnea=exp=1786710705~acl=/api/1/1/f/6/4/0/f64bec38146590bbfa345352446d5f52.mp3*~data=user_id=0,application_id=42~hmac=9636c65cdf60583cb533dcb1d7a4474f85a28263754a7d7cd492bbd3adb938ed"
      },
      {
        "id": "p80-10",
        "title": "Africa",
        "artist": "Toto",
        "year": 1982,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/6/0/d46762f2025f13175f2fd2c062b46182.mp3?hdnea=exp=1786710705~acl=/api/1/1/d/4/6/0/d46762f2025f13175f2fd2c062b46182.mp3*~data=user_id=0,application_id=42~hmac=a1c905e018eb21dea6cfd6110d4b292c9e1d8d505615c6d48a97d244de33be64"
      },
      {
        "id": "p80-11",
        "title": "Beat It",
        "artist": "Michael Jackson",
        "year": 1982,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/2/0/1726d9ef2d75c2d3adfb4f82a06ab589.mp3?hdnea=exp=1786710705~acl=/api/1/1/1/7/2/0/1726d9ef2d75c2d3adfb4f82a06ab589.mp3*~data=user_id=0,application_id=42~hmac=4172b213e26422a54063440cfaaf177e1ea95ebe2b836be424dccb88c3d08886"
      },
      {
        "id": "p80-12",
        "title": "Eye in the Sky",
        "artist": "The Alan Parsons Project",
        "year": 1982,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/0/7/0/60766d039b238277d389d2edb5afc27e.mp3?hdnea=exp=1786710705~acl=/api/1/1/6/0/7/0/60766d039b238277d389d2edb5afc27e.mp3*~data=user_id=0,application_id=42~hmac=aa848e83e65860885db789506c3e6366147c777914dde58280a5387dbe32e785"
      },
      {
        "id": "p80-13",
        "title": "Purple Rain",
        "artist": "Prince",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/d/a/0/bda5bec32c133fbce832b83eb026feaf.mp3?hdnea=exp=1786710705~acl=/api/1/1/b/d/a/0/bda5bec32c133fbce832b83eb026feaf.mp3*~data=user_id=0,application_id=42~hmac=fbbdf65ef821856d624bff3576ec9cd29321559860bcb392f5b89af2d2ba4cd5"
      },
      {
        "id": "p80-14",
        "title": "Material Girl",
        "artist": "Madonna",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/b/c/0/0bc4e106a72207dd283a493c33d9abaf.mp3?hdnea=exp=1786710705~acl=/api/1/1/0/b/c/0/0bc4e106a72207dd283a493c33d9abaf.mp3*~data=user_id=0,application_id=42~hmac=6818cada69bd12b3210f929d12a0e09a002748d9c11db9d97599cb94e9fab876"
      },
      {
        "id": "p80-15",
        "title": "Wake Me Up Before You Go-Go",
        "artist": "Wham!",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/6/b/0/b6b916879db11a5fcf980c6261c46b54.mp3?hdnea=exp=1786710705~acl=/api/1/1/b/6/b/0/b6b916879db11a5fcf980c6261c46b54.mp3*~data=user_id=0,application_id=42~hmac=956e64f3edbd2bd96d68680720c7d9e646a3c88389fed82332a99799f8681eb7"
      },
      {
        "id": "p80-16",
        "title": "With or Without You",
        "artist": "U2",
        "year": 1987,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/e/0/08ee0283f63e8754d8be41fda4274717.mp3?hdnea=exp=1786710706~acl=/api/1/1/0/8/e/0/08ee0283f63e8754d8be41fda4274717.mp3*~data=user_id=0,application_id=42~hmac=3a5f3c8ac32438cd69749391658e8b1de1cca33c6b75b77a4305194d603f628b"
      },
      {
        "id": "p80-17",
        "title": "Hungry Like the Wolf",
        "artist": "Duran Duran",
        "year": 1982,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/8/5/0/b85cc61ef0729b55b07b4db069138b3f.mp3?hdnea=exp=1786710706~acl=/api/1/1/b/8/5/0/b85cc61ef0729b55b07b4db069138b3f.mp3*~data=user_id=0,application_id=42~hmac=e3cfcd32331435a5e594ad7d8ce39e46baa8d80f5a8ae2226423d6094468571a"
      },
      {
        "id": "p80-18",
        "title": "Should I Stay or Should I Go",
        "artist": "The Clash",
        "year": 1982,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/8/5/0/f85fc630b231b9a7d9365c5939358474.mp3?hdnea=exp=1786710706~acl=/api/1/1/f/8/5/0/f85fc630b231b9a7d9365c5939358474.mp3*~data=user_id=0,application_id=42~hmac=a4fa41d36b2df1d1b6fbd4ce9ada29403d46ab80cbdf9ee84eceb67495c8bf03"
      },
      {
        "id": "p80-19",
        "title": "Time After Time",
        "artist": "Cyndi Lauper",
        "year": 1983,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/0/2/0/b023d90039254e9f180bdc0efca2b2df.mp3?hdnea=exp=1786710706~acl=/api/1/1/b/0/2/0/b023d90039254e9f180bdc0efca2b2df.mp3*~data=user_id=0,application_id=42~hmac=817969ebf8487f7302f8ce872696b00ee3781fb4367c537d81a910cb07af3b72"
      },
      {
        "id": "p80-20",
        "title": "Jump",
        "artist": "Van Halen",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/5/6/0/4564585fd721c9bf1df04fbf95f2ba9a.mp3?hdnea=exp=1786710706~acl=/api/1/1/4/5/6/0/4564585fd721c9bf1df04fbf95f2ba9a.mp3*~data=user_id=0,application_id=42~hmac=54a5842bc8df7b707458811a35510beebe917c6437ebc8f014cfa008a3cd9454"
      },
      {
        "id": "p80-21",
        "title": "Thriller",
        "artist": "Michael Jackson",
        "year": 1982,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/8/3/0/3832b349ee4d8b66f6022bc99dcca300.mp3?hdnea=exp=1786710706~acl=/api/1/1/3/8/3/0/3832b349ee4d8b66f6022bc99dcca300.mp3*~data=user_id=0,application_id=42~hmac=52eb773582b471faa25cd6d52920b995fa8f7713cd911aa5cdecd2b920d539d8"
      },
      {
        "id": "p80-22",
        "title": "Like a Virgin",
        "artist": "Madonna",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/f/0/25fbaf464b037d6c6fefd78a9ef1c115.mp3?hdnea=exp=1786710706~acl=/api/1/1/2/5/f/0/25fbaf464b037d6c6fefd78a9ef1c115.mp3*~data=user_id=0,application_id=42~hmac=67d221a97c66830ff9b116b0e0793a1d79518669d105d860a89803b32720c478"
      },
      {
        "id": "p80-23",
        "title": "Shout",
        "artist": "Tears for Fears",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/e/9/0/ae9deb2e11cb0cbab5af051869f15599.mp3?hdnea=exp=1786710706~acl=/api/1/1/a/e/9/0/ae9deb2e11cb0cbab5af051869f15599.mp3*~data=user_id=0,application_id=42~hmac=bfde582798e1100306c5fa2a2929b3a4b034fac743e46424f7b52334a17bdf09"
      },
      {
        "id": "p80-24",
        "title": "Don't You (Forget About Me)",
        "artist": "Simple Minds",
        "year": 1985,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/e/4/0/7e4ac0d1ae0b8fb27633f8017eccb63a.mp3?hdnea=exp=1786710706~acl=/api/1/1/7/e/4/0/7e4ac0d1ae0b8fb27633f8017eccb63a.mp3*~data=user_id=0,application_id=42~hmac=16ce69526b02483689e0cfdc19d8ff7c6967ee6f7e48b691e1108bcc7f33ddb3"
      },
      {
        "id": "p80-25",
        "title": "Enola Gay",
        "artist": "Orchestral Manoeuvres in the Dark",
        "year": 1980,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/c/0/70c377cf2510d0a1d4d9092634b6b8a4.mp3?hdnea=exp=1786710706~acl=/api/1/1/7/0/c/0/70c377cf2510d0a1d4d9092634b6b8a4.mp3*~data=user_id=0,application_id=42~hmac=ed0c33afe97554f0e0c180d392be8f30f29f98fb720bfbe53da0a7a2598fa749"
      },
      {
        "id": "p80-26",
        "title": "Super Trouper",
        "artist": "ABBA",
        "year": 1980,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/2/f/0/c2fa632fab2dcea1831a2832f91cddd9.mp3?hdnea=exp=1786710706~acl=/api/1/1/c/2/f/0/c2fa632fab2dcea1831a2832f91cddd9.mp3*~data=user_id=0,application_id=42~hmac=f2581a1c111e9b1098662e75bbd246431834cc1692f0c2099822ea9fabf35277"
      },
      {
        "id": "p80-27",
        "title": "The Final Countdown",
        "artist": "Europe",
        "year": 1986,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/0/0/040685eaaa8099482ac9079bbd08a318.mp3?hdnea=exp=1786710706~acl=/api/1/1/0/4/0/0/040685eaaa8099482ac9079bbd08a318.mp3*~data=user_id=0,application_id=42~hmac=f9fa078df188d393953bebeb83f1867e29aa35f8d3ae678563af60ba1e56bde2"
      },
      {
        "id": "p80-28",
        "title": "Forever Young",
        "artist": "Alphaville",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/f/0/0/7f02fea4b9542f7219e32b30a0b50e60.mp3?hdnea=exp=1786710706~acl=/api/1/1/7/f/0/0/7f02fea4b9542f7219e32b30a0b50e60.mp3*~data=user_id=0,application_id=42~hmac=2188ed700fb4d2fa668f3b0743325c36dd909c63c65237518946510bdd0de381"
      },
      {
        "id": "p80-29",
        "title": "Physical",
        "artist": "Olivia Newton-John",
        "year": 1981,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/7/0/217a9192e7a5621d588bdea3a6312e95.mp3?hdnea=exp=1786710706~acl=/api/1/1/2/1/7/0/217a9192e7a5621d588bdea3a6312e95.mp3*~data=user_id=0,application_id=42~hmac=df249a0e9dd8534eadb9156f7817c5004d922b87eeaaf848eef9a8fa7ed046c0"
      },
      {
        "id": "p80-30",
        "title": "I Wanna Dance with Somebody",
        "artist": "Whitney Houston",
        "year": 1987,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/b/0/ffbaa0dbc8eb4b09e015a5b92d497425.mp3?hdnea=exp=1786710706~acl=/api/1/1/f/f/b/0/ffbaa0dbc8eb4b09e015a5b92d497425.mp3*~data=user_id=0,application_id=42~hmac=1fd4ee7e23b0c4a4c766dc43b4c2aec463f15aad48081a0f6eba35bb417eecf6"
      },
      {
        "id": "p80-31",
        "title": "Everybody Wants To Rule The World",
        "artist": "Tears for Fears",
        "year": 2003,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/586d7267038476352b759c0a36415d67/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/2/a/0/f2af6fb99f6ccecb8df79b4a06bd6aab.mp3?hdnea=exp=1788639295~acl=/api/1/1/f/2/a/0/f2af6fb99f6ccecb8df79b4a06bd6aab.mp3*~data=user_id=0,application_id=42~hmac=20c2f41eb405c9a2ed2d642a549e2ee52cb9e2b514e165b5df6ae38def331ee8"
      },
      {
        "id": "p80-32",
        "title": "The Reflex",
        "artist": "Duran Duran",
        "year": 1998,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3ed10ab812e802c87e423db20800f678/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/6/8/0/c68db52294a68567db344d40445b8a4f.mp3?hdnea=exp=1788639296~acl=/api/1/1/c/6/8/0/c68db52294a68567db344d40445b8a4f.mp3*~data=user_id=0,application_id=42~hmac=bd7addfb88b1d65dc69912577bfbf1d8b40fbd9c9dcc7df7f94e380688d78a42"
      },
      {
        "id": "p80-33",
        "title": "Rio",
        "artist": "Duran Duran",
        "year": 2009,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c3ef1ffaad88a51594e210a1075c2f1c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/7/1/0/b710de63d4ddc164f7e2f98e3acfd2d6.mp3?hdnea=exp=1788639296~acl=/api/1/1/b/7/1/0/b710de63d4ddc164f7e2f98e3acfd2d6.mp3*~data=user_id=0,application_id=42~hmac=34825aefac82c0568192612d318f94012ccafec6b98eba172e8d15ddcac205f0"
      },
      {
        "id": "p80-34",
        "title": "True (Single Edit)",
        "artist": "Spandau Ballet",
        "year": 2000,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b88d3c3ad23435fb5b8d52038551c1f6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/d/2/0/ad23253dcb48233f2bea4ff40a339d34.mp3?hdnea=exp=1788639297~acl=/api/1/1/a/d/2/0/ad23253dcb48233f2bea4ff40a339d34.mp3*~data=user_id=0,application_id=42~hmac=323ea8c18be6eecabce8da5c3d452fbd2f266859b48a4fdd7466b2e853cbf202"
      },
      {
        "id": "p80-35",
        "title": "Gold",
        "artist": "Spandau Ballet",
        "year": 2000,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b88d3c3ad23435fb5b8d52038551c1f6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/8/f/0/c8f6ba0bf79baec74057da235757595b.mp3?hdnea=exp=1788639297~acl=/api/1/1/c/8/f/0/c8f6ba0bf79baec74057da235757595b.mp3*~data=user_id=0,application_id=42~hmac=65688b74101b59c0314bb6388359daafe02dbfa5a3200d670b1be9b8e069c502"
      },
      {
        "id": "p80-36",
        "title": "In the Air Tonight",
        "artist": "Phil Collins",
        "year": 2016,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/73e6481676a8ab3e93f0f7b79a9cff68/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/a/e/0/7ae98a206f52ed24eb6166804b9fb797.mp3?hdnea=exp=1788639298~acl=/api/1/1/7/a/e/0/7ae98a206f52ed24eb6166804b9fb797.mp3*~data=user_id=0,application_id=42~hmac=db4af155a8b6c2cb30a13d257db35f55dd7bdeb97045a80bac4e276e00955295"
      },
      {
        "id": "p80-37",
        "title": "Karma Chameleon",
        "artist": "Culture Club",
        "year": 2003,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d81a729eef520198f77d3de7e0fb6458/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/9/2/0/1921ea9df7a0f5b0c39919ecbf8b950b.mp3?hdnea=exp=1788639298~acl=/api/1/1/1/9/2/0/1921ea9df7a0f5b0c39919ecbf8b950b.mp3*~data=user_id=0,application_id=42~hmac=e8c996ce43b19f7e73bb6d87f8665c48bf1de176ebcbe6629f7775a0a6b639fe"
      },
      {
        "id": "p80-38",
        "title": "Total Eclipse of the Heart",
        "artist": "Bonnie Tyler",
        "year": 1993,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9bc5fa03c897154eded3719e512567cc/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/d/0/4ed3a7fbb98730781ae3c6d85ca75fab.mp3?hdnea=exp=1788639299~acl=/api/1/1/4/e/d/0/4ed3a7fbb98730781ae3c6d85ca75fab.mp3*~data=user_id=0,application_id=42~hmac=b143bc59c0e9fbf5771dee75851979a1fc8a4d29983d13d5315207a689032d9c"
      },
      {
        "id": "p80-39",
        "title": "All Night Long (All Night) (Single Version)",
        "artist": "Lionel Richie",
        "year": 1992,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b9cd304cfed071dfa484824c3a55b993/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/a/a/0/faa0735dd76a9785ca26ce1c45804d62.mp3?hdnea=exp=1788639299~acl=/api/1/1/f/a/a/0/faa0735dd76a9785ca26ce1c45804d62.mp3*~data=user_id=0,application_id=42~hmac=929c65afaadaf736d5b299bb85e2e045f0873d0c2ce5d33bc20c90e85e2958cb"
      },
      {
        "id": "p80-40",
        "title": "Footloose (From \"Footloose\" Soundtrack)",
        "artist": "Kenny Loggins",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fda8e610d5c116c28c0351355fc67208/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/4/7/0/947a7df828e2fd9c5be9083683efe572.mp3?hdnea=exp=1788639299~acl=/api/1/1/9/4/7/0/947a7df828e2fd9c5be9083683efe572.mp3*~data=user_id=0,application_id=42~hmac=0b69eb9a474766683292ba3b9091cac06c2dfe7fd7d0058217ecfad4c451bb6d"
      },
      {
        "id": "p80-41",
        "title": "Cheri Cheri Lady",
        "artist": "Modern Talking",
        "year": 2014,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e087110af2549642da54098a5c14b7ab/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/3/0/a939dde099326129621d1a2ef3190074.mp3?hdnea=exp=1788639300~acl=/api/1/1/a/9/3/0/a939dde099326129621d1a2ef3190074.mp3*~data=user_id=0,application_id=42~hmac=dcbd3fc8e1f108906e9914521bc8d2f7d67f91b37db799efbde243058c61dc9b"
      },
      {
        "id": "p80-42",
        "title": "You're My Heart, You're My Soul",
        "artist": "Modern Talking",
        "year": 2005,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f5ab7814eda8bdbab33e9bb6941655f3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/d/9/0/4d938002af20915cf346dd90662e3cd0.mp3?hdnea=exp=1788639300~acl=/api/1/1/4/d/9/0/4d938002af20915cf346dd90662e3cd0.mp3*~data=user_id=0,application_id=42~hmac=f084a33d61baa7b69387492dc1eb5a953c18daf24313c8c9b1b4419492974377"
      },
      {
        "id": "p80-43",
        "title": "Tainted Love",
        "artist": "Soft Cell",
        "year": 2002,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a809e8767a0cc557be1c894c5ed1c71e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/c/0/64c7f0ad48610384343c8a57e0209491.mp3?hdnea=exp=1788639300~acl=/api/1/1/6/4/c/0/64c7f0ad48610384343c8a57e0209491.mp3*~data=user_id=0,application_id=42~hmac=dcb85257b7066f051e7bf798885ff1bfa1d8fb340fc2ca4dd8b57a74f21894f4"
      },
      {
        "id": "p80-44",
        "title": "Down Under",
        "artist": "Men at Work",
        "year": 1996,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/968a09e7739dfeee3448a1a79555504a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/e/0/80ed7c8595ec14993f6860672b7077f2.mp3?hdnea=exp=1788639301~acl=/api/1/1/8/0/e/0/80ed7c8595ec14993f6860672b7077f2.mp3*~data=user_id=0,application_id=42~hmac=1baa6d9764e3042fdaf0adf78950db2490e69682bb29a351cc329b79039f5168"
      },
      {
        "id": "p80-45",
        "title": "You Spin Me Round (Like A Record) (Original 7\" Mix)",
        "artist": "Dead or Alive",
        "year": 2000,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/bd04118ee5cba37d079a8627780d9125/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/e/0/25e6f50fae1c1263eed13800eb5af687.mp3?hdnea=exp=1788639301~acl=/api/1/1/2/5/e/0/25e6f50fae1c1263eed13800eb5af687.mp3*~data=user_id=0,application_id=42~hmac=e85a48a13ebdb5a0fc0c304611fc9694e9db46000f0c4283980b1a98fcb81a79"
      },
      {
        "id": "p80-46",
        "title": "Kids In America",
        "artist": "Kim Wilde",
        "year": 1981,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/757e61221dd279212b585eb0745453cb/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/e/8/0/1e85e14803860975c8322b36d85576ff.mp3?hdnea=exp=1788639302~acl=/api/1/1/1/e/8/0/1e85e14803860975c8322b36d85576ff.mp3*~data=user_id=0,application_id=42~hmac=d3d7668f89f4a0b7c32f53c036a377b34e6e631437e37c3acdb5647b48913496"
      },
      {
        "id": "p80-47",
        "title": "Eye of the Tiger",
        "artist": "Survivor",
        "year": 2006,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e66b5d3a40f69690c1633afb73cc590c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/a/6/0/6a6cec63a2a62ad17c65c3706e216ce8.mp3?hdnea=exp=1788639302~acl=/api/1/1/6/a/6/0/6a6cec63a2a62ad17c65c3706e216ce8.mp3*~data=user_id=0,application_id=42~hmac=e26ea7ffada2c17f8a66d6c5fb251ad712c3d175ec0dd2d54a2bfaa5c30194cd"
      },
      {
        "id": "p80-48",
        "title": "The Power Of Love",
        "artist": "Huey Lewis & The News",
        "year": 2006,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/947835de11de3edaf23440d0078b0a92/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/5/b/0/15bb215926ab0bd14776916ec0291652.mp3?hdnea=exp=1788639303~acl=/api/1/1/1/5/b/0/15bb215926ab0bd14776916ec0291652.mp3*~data=user_id=0,application_id=42~hmac=a9b58581e2ea364c54f40aea080726a8d43c3129f3b095aedd337579c710e5f3"
      },
      {
        "id": "p80-49",
        "title": "Jessie's Girl",
        "artist": "Rick Springfield",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7ebeaa61214fb5417721fa0bae3f0a25/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/c/f/0/1cfd5dd900a1c98168b147c4c4c1a3fe.mp3?hdnea=exp=1788639303~acl=/api/1/1/1/c/f/0/1cfd5dd900a1c98168b147c4c4c1a3fe.mp3*~data=user_id=0,application_id=42~hmac=c2ee00817c650273c5aae0bc2d8957ce6be81b29e7d642c2b501288470c12c8f"
      },
      {
        "id": "p80-50",
        "title": "Maneater",
        "artist": "Daryl Hall & John Oates",
        "year": 2005,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/929bd320066244bacaea2d4ca054d73a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/a/a/0/2aa05af73a00e68c2180ba49686398b6.mp3?hdnea=exp=1788639304~acl=/api/1/1/2/a/a/0/2aa05af73a00e68c2180ba49686398b6.mp3*~data=user_id=0,application_id=42~hmac=f6f2811e7e82000792c623c2212578a9ee517fe784b4971397e8ea105d5f1f0f"
      }
    ]
  },
  {
    "id": "hits-italiane",
    "title": "Grandi Successi Italiani",
    "category": "italian",
    "description": "Vasco Rossi, Ligabue, Lucio Battisti, Cesare Cremonini e Måneskin.",
    "badge": "Top Italia",
    "cover": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "ita-1",
        "title": "Albachiara",
        "artist": "Vasco Rossi",
        "year": 1979,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/2/4/0/a2464648450e8e86da3a846136bbd04b.mp3?hdnea=exp=1786710706~acl=/api/1/1/a/2/4/0/a2464648450e8e86da3a846136bbd04b.mp3*~data=user_id=0,application_id=42~hmac=ddc00b82e29c1eedb97bbc9f2faff8665aff638a6260d4f9eb7025902159869b"
      },
      {
        "id": "ita-2",
        "title": "Certe Notti",
        "artist": "Ligabue",
        "year": 1995,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/14/24/6f/14246f00-8ed5-4642-d4f5-c82619753ebf/mzaf_8790682161018782898.plus.aac.p.m4a"
      },
      {
        "id": "ita-3",
        "title": "Il Mio Canto Libero",
        "artist": "Lucio Battisti",
        "year": 1972,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ee/41/1c/ee411c93-6961-3475-1d7b-aa64275cab0d/mzaf_8297109431875020512.plus.aac.p.m4a"
      },
      {
        "id": "ita-4",
        "title": "50 Special",
        "artist": "Lùnapop",
        "year": 1999,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/f/9/0/af975a0533db54bc58c106fb0e364a92.mp3?hdnea=exp=1786710706~acl=/api/1/1/a/f/9/0/af975a0533db54bc58c106fb0e364a92.mp3*~data=user_id=0,application_id=42~hmac=38b792dc75f6058a6ed495f392342e235f3cead3cd7e52afc3229624ad3fd2e4"
      },
      {
        "id": "ita-5",
        "title": "Zitti e Buoni",
        "artist": "Måneskin",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/cf/ea/04/cfea046b-85af-65fe-212d-1236079aacd5/mzaf_9864638815001142268.plus.aac.p.m4a"
      },
      {
        "id": "ita-6",
        "title": "Laura non c'è",
        "artist": "Nek",
        "year": 1997,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/69/01/13/69011340-f42f-f3f4-eaea-1e1296d434d5/mzaf_4687722581933129198.plus.aac.p.m4a"
      },
      {
        "id": "ita-7",
        "title": "Penso Positivo",
        "artist": "Jovanotti",
        "year": 1993,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ed/ac/17/edac1787-8606-4c7f-b632-cda7668a28c4/mzaf_2459010520309700160.plus.aac.p.m4a"
      },
      {
        "id": "ita-8",
        "title": "La Solitudine",
        "artist": "Laura Pausini",
        "year": 1993,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/de/ae/0f/deae0f8e-b047-c3fb-25a4-80381990a8d6/mzaf_11805627372487887199.plus.aac.p.m4a"
      },
      {
        "id": "ita-9",
        "title": "Piccola Stella Senza Cielo",
        "artist": "Ligabue",
        "year": 1990,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c0/9a/ab/c09aab88-9d15-537d-7650-e465bf87ecb2/mzaf_16326805594373836685.plus.aac.p.m4a"
      },
      {
        "id": "ita-10",
        "title": "Buon Viaggio (Share The Love)",
        "artist": "Cesare Cremonini",
        "year": 2015,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f5/48/4f/f5484ffa-a4de-78a0-31b1-92db06947c43/mzaf_7067479313037380818.plus.aac.p.m4a"
      },
      {
        "id": "ita-11",
        "title": "Destinazione Paradiso",
        "artist": "Gianluca Grignani",
        "year": 1995,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ee/a3/79/eea37971-d8ec-4bfb-8521-1ad03208b1a7/mzaf_5468369399254118363.plus.aac.p.m4a"
      },
      {
        "id": "ita-12",
        "title": "Rimmel",
        "artist": "Francesco De Gregori",
        "year": 1975,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/a/7/0/0a783057d8b97561c77aea0096fccbe7.mp3?hdnea=exp=1786710708~acl=/api/1/1/0/a/7/0/0a783057d8b97561c77aea0096fccbe7.mp3*~data=user_id=0,application_id=42~hmac=faef71bcf3c1ee95c1ef3400b35874195002672b355c7bd079e6448b11fd80ce"
      },
      {
        "id": "ita-13",
        "title": "Sally",
        "artist": "Vasco Rossi",
        "year": 1996,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/6/0/636e3d06ccf2da511ecac0f18dbd4b53.mp3?hdnea=exp=1786710708~acl=/api/1/1/6/3/6/0/636e3d06ccf2da511ecac0f18dbd4b53.mp3*~data=user_id=0,application_id=42~hmac=39a47f24bc07557f4facb7cc00ba3d620a6d96f9ac96b12465720be9ac1d9f22"
      },
      {
        "id": "ita-14",
        "title": "L'Italiano",
        "artist": "Toto Cutugno",
        "year": 1983,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/33/ee/98/33ee9876-8f4c-93e3-9227-06d4f90a767b/mzaf_10332338798154827065.plus.aac.p.m4a"
      },
      {
        "id": "ita-15",
        "title": "Azzurro",
        "artist": "Adriano Celentano",
        "year": 1968,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/a/d/0/fad1a2c24e308ebdf6ff13c57f5a07ee.mp3?hdnea=exp=1786710708~acl=/api/1/1/f/a/d/0/fad1a2c24e308ebdf6ff13c57f5a07ee.mp3*~data=user_id=0,application_id=42~hmac=3b30eb03fc043abde0e91865096386c71946e0bc49d19997209f0b400e8510c5"
      },
      {
        "id": "ita-16",
        "title": "Centro di gravità permanente",
        "artist": "Franco Battiato",
        "year": 1981,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/3/0/d434a47ffb11f77c40e97deca4fda063.mp3?hdnea=exp=1786710708~acl=/api/1/1/d/4/3/0/d434a47ffb11f77c40e97deca4fda063.mp3*~data=user_id=0,application_id=42~hmac=92ec8c8fdec4e549eb5b4470e027f1f13ea4e14f83738614e6c4e8ded5fae7a9"
      },
      {
        "id": "ita-17",
        "title": "Ti Amo",
        "artist": "Umberto Tozzi",
        "year": 1977,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/7/0/997873d5b4b9dae2a511da7f7d21011d.mp3?hdnea=exp=1786710708~acl=/api/1/1/9/9/7/0/997873d5b4b9dae2a511da7f7d21011d.mp3*~data=user_id=0,application_id=42~hmac=ff55acce733871a1a11fc57dbd269ca05ab26e198eefa65e94ec8bfb99e99794"
      },
      {
        "id": "ita-18",
        "title": "Nel blu dipinto di blu",
        "artist": "Domenico Modugno",
        "year": 1958,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/c/0/80c427b60a71efe2525f871b6e37302c.mp3?hdnea=exp=1786710708~acl=/api/1/1/8/0/c/0/80c427b60a71efe2525f871b6e37302c.mp3*~data=user_id=0,application_id=42~hmac=bb6b88bf79618d035b878a95407c73f573645ef67dfeadd02cdd4698312bf296"
      },
      {
        "id": "ita-19",
        "title": "Ricominciamo",
        "artist": "Adriano Pappalardo",
        "year": 1979,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/c/0/0/8c00af21ec731b939f5e8ce56404a273.mp3?hdnea=exp=1786710708~acl=/api/1/1/8/c/0/0/8c00af21ec731b939f5e8ce56404a273.mp3*~data=user_id=0,application_id=42~hmac=52c924b2f497eabbc8d67e8cc51f11bc098017f343f88046ba2946d780389f2d"
      },
      {
        "id": "ita-20",
        "title": "Vita Spericolata",
        "artist": "Vasco Rossi",
        "year": 1983,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/9/b/0/f9b07d971ffe1b4189cd0ea3ce8d6dc3.mp3?hdnea=exp=1786710708~acl=/api/1/1/f/9/b/0/f9b07d971ffe1b4189cd0ea3ce8d6dc3.mp3*~data=user_id=0,application_id=42~hmac=7b4530d175b1e9dc41cb8d4340c8422325807d1de162eeeddcc973a195e0e064"
      },
      {
        "id": "ita-21",
        "title": "Cosa c'è",
        "artist": "Vasco Rossi",
        "year": 1985,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/b/c/0/2bc4d3868c9e86e621c3254bb23f1ec0.mp3?hdnea=exp=1786710708~acl=/api/1/1/2/b/c/0/2bc4d3868c9e86e621c3254bb23f1ec0.mp3*~data=user_id=0,application_id=42~hmac=6fdffe64a842d1bf366467735d7245502e575cb6e733be88cfcfa4c5a49af910"
      },
      {
        "id": "ita-22",
        "title": "Mondo",
        "artist": "Cesare Cremonini",
        "year": 2010,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/0/3/0/d03cf76c5423c0a3afe90b17c601557e.mp3?hdnea=exp=1786710708~acl=/api/1/1/d/0/3/0/d03cf76c5423c0a3afe90b17c601557e.mp3*~data=user_id=0,application_id=42~hmac=a4ceac1e6f8def42feacd44afc5265cd436add6cd814440a9bb905070bc8449f"
      },
      {
        "id": "ita-23",
        "title": "Un'emozione da poco",
        "artist": "Anna Oxa",
        "year": 1978,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/2/e/0/72e27328b3e3f96110d1bf8b5855e72e.mp3?hdnea=exp=1786710708~acl=/api/1/1/7/2/e/0/72e27328b3e3f96110d1bf8b5855e72e.mp3*~data=user_id=0,application_id=42~hmac=87725bd676a8aa02a11a19ab5d66a394edb9d0e44968c3f852313e0eba34740f"
      },
      {
        "id": "ita-24",
        "title": "Gli anni",
        "artist": "883",
        "year": 1995,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/7/9/0/a790f14e2d9b32e85fc5657bcc06b75e.mp3?hdnea=exp=1786710708~acl=/api/1/1/a/7/9/0/a790f14e2d9b32e85fc5657bcc06b75e.mp3*~data=user_id=0,application_id=42~hmac=beefbe15b4e943e0c7e434040c21240dc428fac472ef74d47a99b5f7fc98ed53"
      },
      {
        "id": "ita-25",
        "title": "Hanno ucciso l'Uomo Ragno",
        "artist": "883",
        "year": 1992,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/6/0/e96d7665ecbf495d7968bc1c6f9f3120.mp3?hdnea=exp=1786710708~acl=/api/1/1/e/9/6/0/e96d7665ecbf495d7968bc1c6f9f3120.mp3*~data=user_id=0,application_id=42~hmac=1d540fc4ad6a237ba7afefe502b8b0f08b1c21a0fcc3c6e788146d1ab430c39f"
      },
      {
        "id": "ita-26",
        "title": "Sei un mito",
        "artist": "883",
        "year": 1993,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/e/0/ffec039320e7fdda7368667846561842.mp3?hdnea=exp=1786710708~acl=/api/1/1/f/f/e/0/ffec039320e7fdda7368667846561842.mp3*~data=user_id=0,application_id=42~hmac=4431f17536f323da9fe9a9e457fe131f2e1384fd7e7c958b63aeb94dc9f3f159"
      },
      {
        "id": "ita-27",
        "title": "La vasca",
        "artist": "Alex Britti",
        "year": 2000,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/c/c/0/5cc46e6461ee10c94e07fb3bcedb287f.mp3?hdnea=exp=1786710708~acl=/api/1/1/5/c/c/0/5cc46e6461ee10c94e07fb3bcedb287f.mp3*~data=user_id=0,application_id=42~hmac=3daa1f8150ae09618b67c3a9ae6d1e8ef2d103fd6db4b5d4bcc70084cf2dd0b1"
      },
      {
        "id": "ita-28",
        "title": "Oggi sono io",
        "artist": "Alex Britti",
        "year": 1998,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/c/4/0/5c46bab269799da4de59e761d6f2c036.mp3?hdnea=exp=1786710708~acl=/api/1/1/5/c/4/0/5c46bab269799da4de59e761d6f2c036.mp3*~data=user_id=0,application_id=42~hmac=81bb09e44cb3b5da32f0d77376d24f00a3cbef66e9ee93447aa33a17fc6738d1"
      },
      {
        "id": "ita-29",
        "title": "Superclassico",
        "artist": "Ernia",
        "year": 2020,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/a/2/0/1a223242127ff31c1aca052506975f15.mp3?hdnea=exp=1786710708~acl=/api/1/1/1/a/2/0/1a223242127ff31c1aca052506975f15.mp3*~data=user_id=0,application_id=42~hmac=599bd02b7125d3174ff25749eea0aa5cbe3749f45345947bfa814c518b11c226"
      },
      {
        "id": "ita-30",
        "title": "Brividi",
        "artist": "Mahmood & Blanco",
        "year": 2022,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/3/8/0/3384fbe4c963414060cf825acbabb32c.mp3?hdnea=exp=1786710708~acl=/api/1/1/3/3/8/0/3384fbe4c963414060cf825acbabb32c.mp3*~data=user_id=0,application_id=42~hmac=d25b48ab11697c57eccfbac1ab1155d9c0b9d99ce45af6752406458a67acd8a6"
      },
      {
        "id": "ita-31",
        "title": "Urlando contro il cielo",
        "artist": "Ligabue",
        "year": 2015,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/61b9d089a0039c9348bb15258e9229c8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/7/f/0/a7fcb30a6e134bf1bd74220b152cd875.mp3?hdnea=exp=1788639304~acl=/api/1/1/a/7/f/0/a7fcb30a6e134bf1bd74220b152cd875.mp3*~data=user_id=0,application_id=42~hmac=5a6d101f84204e3e187854d6c26a1207bbe103a0b13ad5fcd6338a7f59e64bf3"
      },
      {
        "id": "ita-32",
        "title": "Diavolo In Me",
        "artist": "Zucchero",
        "year": 2008,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/89233ce3a53eb6155d01d41bfc29d7f5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/a/0/0/1a0e4b7f18cf42adbb8a2ca3f61ebab3.mp3?hdnea=exp=1788639305~acl=/api/1/1/1/a/0/0/1a0e4b7f18cf42adbb8a2ca3f61ebab3.mp3*~data=user_id=0,application_id=42~hmac=715230336b7aeeb5288d179967d5a363a5e8e64f0bdf8afd7b683066e36517ee"
      },
      {
        "id": "ita-33",
        "title": "Baila Morena",
        "artist": "Zucchero",
        "year": 2004,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2b612b4ca5ea00d924e4f83d0fb1d383/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/f/9/0/9f9c5727620c67d4c1f7e29a3f9a568e.mp3?hdnea=exp=1788639305~acl=/api/1/1/9/f/9/0/9f9c5727620c67d4c1f7e29a3f9a568e.mp3*~data=user_id=0,application_id=42~hmac=f1a86028d3505b55fe143d6fc231eb3e0d40d16ea7a43d2e7055fedc4aca6dc9"
      },
      {
        "id": "ita-34",
        "title": "Senza Una Donna",
        "artist": "Zucchero",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ed20452092602c2d6fa1aadb3d6d2290/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/a/a/0/8aaad84016b335a2d3654d1c85dc2a7e.mp3?hdnea=exp=1788639305~acl=/api/1/1/8/a/a/0/8aaad84016b335a2d3654d1c85dc2a7e.mp3*~data=user_id=0,application_id=42~hmac=f2607daf9560004a9ff4488d374be6b6308127046418c800d0136f7c8d01182c"
      },
      {
        "id": "ita-35",
        "title": "Più bella cosa",
        "artist": "Eros Ramazzotti",
        "year": 1997,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f16e65651565170e3bd3dcbd438520e1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/0/0/4903e731bf592c049ce99451e106b502.mp3?hdnea=exp=1788639306~acl=/api/1/1/4/9/0/0/4903e731bf592c049ce99451e106b502.mp3*~data=user_id=0,application_id=42~hmac=c113e73f3e2fc45460ab9224ed1b1610a561f4132992145ce45d068ac4ed1ac4"
      },
      {
        "id": "ita-36",
        "title": "Se bastasse una canzone",
        "artist": "Eros Ramazzotti",
        "year": 1997,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f16e65651565170e3bd3dcbd438520e1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/5/9/0/159eb0f54f27deeb6bca9e63dc9f42c2.mp3?hdnea=exp=1788639306~acl=/api/1/1/1/5/9/0/159eb0f54f27deeb6bca9e63dc9f42c2.mp3*~data=user_id=0,application_id=42~hmac=30289e69d3a78858732cad320c84d4557d5043a57f087413fd424b40b00e16a8"
      },
      {
        "id": "ita-37",
        "title": "Strani amori",
        "artist": "Laura Pausini",
        "year": 2001,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cd08f3013b048503510029f52a4bfff1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/6/6/0/266fcaca57c804da8fbbe8e589de658b.mp3?hdnea=exp=1788639306~acl=/api/1/1/2/6/6/0/266fcaca57c804da8fbbe8e589de658b.mp3*~data=user_id=0,application_id=42~hmac=023c579b4894239a418b278ae6b07858ee8e5322aef229635a9a6bd530e579af"
      },
      {
        "id": "ita-38",
        "title": "Come saprei",
        "artist": "Giorgia",
        "year": 2002,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7c659799df46c3e9a025e429ea856113/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/0/5/0/d056bcd4b13f5cf7fab5605781f08d95.mp3?hdnea=exp=1788639307~acl=/api/1/1/d/0/5/0/d056bcd4b13f5cf7fab5605781f08d95.mp3*~data=user_id=0,application_id=42~hmac=6787876ab4630be7191279522b3b83cfa98dbbe47cca3a71a087bde3c22b6865"
      },
      {
        "id": "ita-39",
        "title": "Gocce di memoria",
        "artist": "Giorgia",
        "year": 2003,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/225a0f3cc04dc4cab06daa7f0fc80181/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/7/9/0/d79e33ac210a15a6e9743e48f5c30643.mp3?hdnea=exp=1788639307~acl=/api/1/1/d/7/9/0/d79e33ac210a15a6e9743e48f5c30643.mp3*~data=user_id=0,application_id=42~hmac=678058f404f0d3e5b296cd7fac72492e051a1aa046e90aacb95d7b55e7ff2540"
      },
      {
        "id": "ita-40",
        "title": "Sere nere",
        "artist": "Tiziano Ferro",
        "year": 2003,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/acc9c50a6401d396a719204377a77411/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/9/f/0/f9f7ef580823861349b555805ed716b8.mp3?hdnea=exp=1788639307~acl=/api/1/1/f/9/f/0/f9f7ef580823861349b555805ed716b8.mp3*~data=user_id=0,application_id=42~hmac=ed71eb134e9d96815892532accd6c9abce5b776f5b6cd99da057f37ba9fd92b1"
      },
      {
        "id": "ita-41",
        "title": "Non Me Lo So Spiegare",
        "artist": "Tiziano Ferro",
        "year": 2015,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/89692b5f9aaa032875f9c1d5c9900e21/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/9/e/0/69e176b67ee9e9c34f8a380d2bd42d96.mp3?hdnea=exp=1788639308~acl=/api/1/1/6/9/e/0/69e176b67ee9e9c34f8a380d2bd42d96.mp3*~data=user_id=0,application_id=42~hmac=63e49bd6fd160e2dc8104b67355ea9ef961e751b4b5e537f1675634a63dcb980"
      },
      {
        "id": "ita-42",
        "title": "Marmellata #25",
        "artist": "Cesare Cremonini",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/45142c7e00deb39f635014431343b711/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/a/a/0/5aa0de90062d12969cc1e5bb4b59a580.mp3?hdnea=exp=1788639308~acl=/api/1/1/5/a/a/0/5aa0de90062d12969cc1e5bb4b59a580.mp3*~data=user_id=0,application_id=42~hmac=354215c29f19d339fa7d6aaeca402158581fddedd816030fa09a84a6f6ac1022"
      },
      {
        "id": "ita-43",
        "title": "Nord sud ovest est",
        "artist": "883",
        "year": 2004,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b4577ff190d35e59069272466692b5eb/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/1/0/2d11e73ffc5381efc30bf02f8e826850.mp3?hdnea=exp=1788639309~acl=/api/1/1/2/d/1/0/2d11e73ffc5381efc30bf02f8e826850.mp3*~data=user_id=0,application_id=42~hmac=75bc14f1330b3c545dbae4c51d38560ff3c0ead4693d09f89510c237071e0e29"
      },
      {
        "id": "ita-44",
        "title": "Come mai",
        "artist": "883",
        "year": 2004,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b4577ff190d35e59069272466692b5eb/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/d/2/0/ad257ef5beebfcb445eb77b23f7e42bc.mp3?hdnea=exp=1788639309~acl=/api/1/1/a/d/2/0/ad257ef5beebfcb445eb77b23f7e42bc.mp3*~data=user_id=0,application_id=42~hmac=f12d7ae716a43112b0e5be0e809510ef520447b2604a1e77826bee46f416e29a"
      },
      {
        "id": "ita-45",
        "title": "Bella",
        "artist": "Jovanotti",
        "year": 2004,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3dc24cd0349b655d8eb86d32ebcdbabf/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/e/d/0/9ed462b98ade2bfa26f6e9bc2cdbb2aa.mp3?hdnea=exp=1788639309~acl=/api/1/1/9/e/d/0/9ed462b98ade2bfa26f6e9bc2cdbb2aa.mp3*~data=user_id=0,application_id=42~hmac=b42d2684fb534ccf68e601a103b38a4e5b6d23134b0cf22c24abed7e642bd1f5"
      },
      {
        "id": "ita-46",
        "title": "A Te",
        "artist": "Jovanotti",
        "year": 2008,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ceb211dd778d63a73f1892498de47828/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/4/5/0/34583731ae514d85fecb9ee428af57a5.mp3?hdnea=exp=1788639310~acl=/api/1/1/3/4/5/0/34583731ae514d85fecb9ee428af57a5.mp3*~data=user_id=0,application_id=42~hmac=8bee40741d86c663efd17778598e3c17b197704a2328dfee21658994be1c0025"
      },
      {
        "id": "ita-47",
        "title": "L'Ombelico Del Mondo",
        "artist": "Jovanotti",
        "year": 2020,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/88467f722eb77c6933cde12f249e9c10/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/f/4/0/bf4b30147a22c323dc04fc66129037fc.mp3?hdnea=exp=1788639310~acl=/api/1/1/b/f/4/0/bf4b30147a22c323dc04fc66129037fc.mp3*~data=user_id=0,application_id=42~hmac=ed86c49685063f8802680a40629e488f4ee677b714f9f9c025ab8affa0652e20"
      },
      {
        "id": "ita-48",
        "title": "Sei nell'anima",
        "artist": "Gianna Nannini",
        "year": 2026,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/663ea59573a7aa574f9b318061e8e040/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/b/a/0/4ba80a870e638c6a271424b8e4ee8807.mp3?hdnea=exp=1788639310~acl=/api/1/1/4/b/a/0/4ba80a870e638c6a271424b8e4ee8807.mp3*~data=user_id=0,application_id=42~hmac=d928c677673e0d3aae769faaa9f5b29513e6c132918a16b551a9a93ffe3eaa9b"
      },
      {
        "id": "ita-49",
        "title": "Meravigliosa Creatura",
        "artist": "Gianna Nannini",
        "year": 2026,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f106d3fc0d059811b638093caa3c928f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/f/9/0/5f962e707311cdbe63d79e8810b5d166.mp3?hdnea=exp=1788639311~acl=/api/1/1/5/f/9/0/5f962e707311cdbe63d79e8810b5d166.mp3*~data=user_id=0,application_id=42~hmac=cc66e2065be40ee32712c4dae2ec59f5ad1fb7cd28e39b5c0847bdfffea5435a"
      },
      {
        "id": "ita-50",
        "title": "Iris (Tra Le Tue Poesie)",
        "artist": "Biagio Antonacci",
        "year": 2008,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/85bbeeb098bfe22de6ae36da655823e1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/7/0/507441951fa83965038285192799470b.mp3?hdnea=exp=1788639311~acl=/api/1/1/5/0/7/0/507441951fa83965038285192799470b.mp3*~data=user_id=0,application_id=42~hmac=46f271948ef8b13ea4cf19ccf24b134187844780bd488e6b2c4bc224b8dc011a"
      }
    ]
  },
  {
    "id": "dance-2000s",
    "title": "Dance Anni 2000",
    "category": "genres",
    "description": "Eiffel 65, Gigi D'Agostino, Gabry Ponte, Daft Punk e i tormentoni discoteca.",
    "badge": "Festa",
    "cover": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "d00-1",
        "title": "Blue (Da Ba Dee)",
        "artist": "Eiffel 65",
        "year": 1999,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/b/0/0/eb0591cd63ab61069bc14b1082f78efe.mp3?hdnea=exp=1786710709~acl=/api/1/1/e/b/0/0/eb0591cd63ab61069bc14b1082f78efe.mp3*~data=user_id=0,application_id=42~hmac=51321a32fbcdc55eda555cae636ad22c8134d2ebc7f13737987373e4aa4b4ed8"
      },
      {
        "id": "d00-2",
        "title": "L’Amour Toujours",
        "artist": "Gigi D'Agostino",
        "year": 1999,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/a/5/0/3a5fa9cc31b241f9b886eb4d0f0ea25b.mp3?hdnea=exp=1786710709~acl=/api/1/1/3/a/5/0/3a5fa9cc31b241f9b886eb4d0f0ea25b.mp3*~data=user_id=0,application_id=42~hmac=cf47321e00e3adfbd9cfa7de79c17d9ed2c2daf6070f3bfc9acfa3f5a226b089"
      },
      {
        "id": "d00-3",
        "title": "One More Time",
        "artist": "Daft Punk",
        "year": 2000,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/8/c/0/f8c5dc3837912dba37c9a1ab3170cc3f.mp3?hdnea=exp=1786710709~acl=/api/1/1/f/8/c/0/f8c5dc3837912dba37c9a1ab3170cc3f.mp3*~data=user_id=0,application_id=42~hmac=a9f491ece97e9c246864969c3315a0428940add02f64ba4f025e384cfe1fa42e"
      },
      {
        "id": "d00-4",
        "title": "Geordie",
        "artist": "Gabry Ponte",
        "year": 2002,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/d/5/0/9d52c922191c0c9b62d06a2061af4e9a.mp3?hdnea=exp=1786710709~acl=/api/1/1/9/d/5/0/9d52c922191c0c9b62d06a2061af4e9a.mp3*~data=user_id=0,application_id=42~hmac=79466bb32e06c661cf98d72a15841332cb0a0aeb1ad69963706e51e4a42dbea7"
      },
      {
        "id": "d00-5",
        "title": "Satisfaction",
        "artist": "Benny Benassi",
        "year": 2002,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/8/f/0/78f3b50fbbbe4b25d6e078ff1114f9f9.mp3?hdnea=exp=1786710709~acl=/api/1/1/7/8/f/0/78f3b50fbbbe4b25d6e078ff1114f9f9.mp3*~data=user_id=0,application_id=42~hmac=8e6ac44d79f65247aca70e4cefb620be666b2970ee2042e21da2eba4e56e613a"
      },
      {
        "id": "d00-6",
        "title": "Call On Me",
        "artist": "Eric Prydz",
        "year": 2004,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/1/f/0/71f1901f67bb17848433352c23eb2491.mp3?hdnea=exp=1786710709~acl=/api/1/1/7/1/f/0/71f1901f67bb17848433352c23eb2491.mp3*~data=user_id=0,application_id=42~hmac=c6b3304f4251bb964e15d6cb2ae3435192930059295acd930fc999b1914b490b"
      },
      {
        "id": "d00-7",
        "title": "World, Hold On",
        "artist": "Bob Sinclar",
        "year": 2006,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/7/3/0/27329a7be8b10cdb5fed4892c6024fe0.mp3?hdnea=exp=1786710709~acl=/api/1/1/2/7/3/0/27329a7be8b10cdb5fed4892c6024fe0.mp3*~data=user_id=0,application_id=42~hmac=b05f307442069b78f5c3ea9a15c776f793646ede5bed46aeccf91637ca9cf00e"
      },
      {
        "id": "d00-8",
        "title": "Dragostea Din Tei",
        "artist": "O-Zone",
        "year": 2003,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/0/c/0/f0c469dffae968f50d1d21d4254009fa.mp3?hdnea=exp=1786710709~acl=/api/1/1/f/0/c/0/f0c469dffae968f50d1d21d4254009fa.mp3*~data=user_id=0,application_id=42~hmac=b62e4713c22dba8a06b3843174920f6a0d08c92e6443b2c0a3ae791f5d47eb44"
      },
      {
        "id": "d00-9",
        "title": "Around the World (La La La)",
        "artist": "ATC",
        "year": 2000,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/4/f/0/e4fc3f8d6cd5c2c1423119f233f843c7.mp3?hdnea=exp=1786710709~acl=/api/1/1/e/4/f/0/e4fc3f8d6cd5c2c1423119f233f843c7.mp3*~data=user_id=0,application_id=42~hmac=f082f2976af6a9442347827db6e35233a0d3158c442e517ad8c55e07bcee18c8"
      },
      {
        "id": "d00-10",
        "title": "The Rhythm of the Night",
        "artist": "Corona",
        "year": 1993,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/f/0/50fc77f679727694ef523f2a2002cb90.mp3?hdnea=exp=1786710709~acl=/api/1/1/5/0/f/0/50fc77f679727694ef523f2a2002cb90.mp3*~data=user_id=0,application_id=42~hmac=2f63f380a60b7e2e6f60e421ddb0e027f8ad17167241b61963def0fc285800b4"
      },
      {
        "id": "d00-11",
        "title": "Better Off Alone",
        "artist": "Alice Deejay",
        "year": 1999,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/d/d/0/add357b333c6d324aab0183ef56f467d.mp3?hdnea=exp=1786710709~acl=/api/1/1/a/d/d/0/add357b333c6d324aab0183ef56f467d.mp3*~data=user_id=0,application_id=42~hmac=9b2f27d5ce245784f2c267955fdb3125e1665a3debd63e13f90d4d4f6eaed720"
      },
      {
        "id": "d00-12",
        "title": "Infinity 2008",
        "artist": "Guru Josh Project",
        "year": 2008,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/b/b/0/5bb657362dfd6eabf59d02fdc266fdcd.mp3?hdnea=exp=1786710709~acl=/api/1/1/5/b/b/0/5bb657362dfd6eabf59d02fdc266fdcd.mp3*~data=user_id=0,application_id=42~hmac=2fce4447c4704b6a5e1fdf25698f2131bdaa8959b543a52b832ffc54c694729e"
      },
      {
        "id": "d00-13",
        "title": "Harder, Better, Faster, Stronger",
        "artist": "Daft Punk",
        "year": 2001,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/a/2/0/6a2c0a5670afe821e08fc5154909534a.mp3?hdnea=exp=1786710709~acl=/api/1/1/6/a/2/0/6a2c0a5670afe821e08fc5154909534a.mp3*~data=user_id=0,application_id=42~hmac=86593f42af9e45cb3c672f314bdcf379bfd976230808ced29582377a69cf4d77"
      },
      {
        "id": "d00-14",
        "title": "Titanium",
        "artist": "David Guetta",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/7/0/0/6704168518eedd6eff222b5fb55f86c0.mp3?hdnea=exp=1786710709~acl=/api/1/1/6/7/0/0/6704168518eedd6eff222b5fb55f86c0.mp3*~data=user_id=0,application_id=42~hmac=03b2fff32cb3134d5566ff7b99c93995aed37b31ed11ebf050d44ef5bd0b96c7"
      },
      {
        "id": "d00-15",
        "title": "Stereo Love",
        "artist": "Edward Maya",
        "year": 2009,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/e/7/0/fe7d8c3efe72b4abf3a002be58f42800.mp3?hdnea=exp=1786710709~acl=/api/1/1/f/e/7/0/fe7d8c3efe72b4abf3a002be58f42800.mp3*~data=user_id=0,application_id=42~hmac=41636ec58de88bb9e264dcde25753db3b9b700a57fffbd19af05e3d5b4bc6666"
      },
      {
        "id": "d00-16",
        "title": "Don't You Worry Child",
        "artist": "Swedish House Mafia",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/8/0/2184ae5bfff6b4af12135560d359abe9.mp3?hdnea=exp=1786710709~acl=/api/1/1/2/1/8/0/2184ae5bfff6b4af12135560d359abe9.mp3*~data=user_id=0,application_id=42~hmac=88e88f8f2108c4cc4932e78ecd0a2dbe8e096e3503a405f92d3edb3c9ba0778a"
      },
      {
        "id": "d00-17",
        "title": "Levels",
        "artist": "Avicii",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/d/9/0/0d9d5592d4169f2d6772234f5198662d.mp3?hdnea=exp=1786710709~acl=/api/1/1/0/d/9/0/0d9d5592d4169f2d6772234f5198662d.mp3*~data=user_id=0,application_id=42~hmac=51a2b4c0a4a5f71b55176da1d250319cb306fa5836a19b989244187caca731f1"
      },
      {
        "id": "d00-18",
        "title": "Love Generation",
        "artist": "Bob Sinclar",
        "year": 2005,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/1/0/211952108b0af2df39f72d2b7a2b24ff.mp3?hdnea=exp=1786710709~acl=/api/1/1/2/1/1/0/211952108b0af2df39f72d2b7a2b24ff.mp3*~data=user_id=0,application_id=42~hmac=01b17a5487d6a231e6cddd2f12765e847eb91e6c8de96d9c481747bf702b7fdc"
      },
      {
        "id": "d00-19",
        "title": "Destination Calabria",
        "artist": "Alex Gaudino",
        "year": 2007,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/8/e/0/48e5212349d609c26ef4d6a8aca0c406.mp3?hdnea=exp=1786710710~acl=/api/1/1/4/8/e/0/48e5212349d609c26ef4d6a8aca0c406.mp3*~data=user_id=0,application_id=42~hmac=67476d2495a98f9b917ad710f193ff2aadffb2b112ff6cd423124a1dec42ed6a"
      },
      {
        "id": "d00-20",
        "title": "Please Don't Stop the Music",
        "artist": "Rihanna",
        "year": 2007,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/6/8/0/b68999f43dd5f6bc0f6396da4fc0c6c2.mp3?hdnea=exp=1786710709~acl=/api/1/1/b/6/8/0/b68999f43dd5f6bc0f6396da4fc0c6c2.mp3*~data=user_id=0,application_id=42~hmac=3670b0193c924a774d8ca1861516e1dc3f96b6907cb93471d970f2976543d904"
      },
      {
        "id": "d00-21",
        "title": "In My Mind",
        "artist": "Dynoro & Gigi D'Agostino",
        "year": 2018,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/b/7/0/bb7ea68456d56ac152bb8aa8f5ba163b.mp3?hdnea=exp=1786710710~acl=/api/1/1/b/b/7/0/bb7ea68456d56ac152bb8aa8f5ba163b.mp3*~data=user_id=0,application_id=42~hmac=8fa36bca8f7349aa56ff13289db8da07639f01ae3c8000c64d87c6d4f8e757bf"
      },
      {
        "id": "d00-22",
        "title": "Bla Bla Bla",
        "artist": "Gigi D'Agostino",
        "year": 1999,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/6/0/086eb9002629a4718d868f1d65465ad1.mp3?hdnea=exp=1786710710~acl=/api/1/1/0/8/6/0/086eb9002629a4718d868f1d65465ad1.mp3*~data=user_id=0,application_id=42~hmac=8e3f08339a8ffd9ce53402663bd25c3ba7ca1b78ebdbe2c73a0b9cceee15de4a"
      },
      {
        "id": "d00-23",
        "title": "The Rockafeller Skank",
        "artist": "Fatboy Slim",
        "year": 1998,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/4/5/0/745cc2208f47660e112f7f45c01e5634.mp3?hdnea=exp=1786710710~acl=/api/1/1/7/4/5/0/745cc2208f47660e112f7f45c01e5634.mp3*~data=user_id=0,application_id=42~hmac=48d02757289fd514aecb95d4f06982062244dcbc5b89123b93112534b75798e9"
      },
      {
        "id": "d00-24",
        "title": "Praise You",
        "artist": "Fatboy Slim",
        "year": 1998,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/6/c/0/56c304748c8e535608b72437f8deac6d.mp3?hdnea=exp=1786710710~acl=/api/1/1/5/6/c/0/56c304748c8e535608b72437f8deac6d.mp3*~data=user_id=0,application_id=42~hmac=643f62f05e5a7723362fcea5d949a3794e9a08a6d31a8ae8157b0847e081c2ae"
      },
      {
        "id": "d00-25",
        "title": "Supermode",
        "artist": "Tell Me Why",
        "year": 2006,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/9/b/0/29b69db92d90deb241f75ad124009a18.mp3?hdnea=exp=1786710710~acl=/api/1/1/2/9/b/0/29b69db92d90deb241f75ad124009a18.mp3*~data=user_id=0,application_id=42~hmac=7ab5afe6189ca85133748f4dee303a29792b452188fbab92fb4dc61293ede275"
      },
      {
        "id": "d00-26",
        "title": "Proper Education",
        "artist": "Eric Prydz",
        "year": 2006,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/5/5/0/355cbcd8d4353e3e8e1af82ab857e8d7.mp3?hdnea=exp=1786710710~acl=/api/1/1/3/5/5/0/355cbcd8d4353e3e8e1af82ab857e8d7.mp3*~data=user_id=0,application_id=42~hmac=e98fdbfcedbe268a39e7e01e0a28c51f41b8dd490a859cc12ef1c27540d2007f"
      },
      {
        "id": "d00-27",
        "title": "Day 'n' Nite (Remix)",
        "artist": "Kid Cudi vs Crookers",
        "year": 2008,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/1/e/0/71ebfb525c7b86ce8cbead321d541ab8.mp3?hdnea=exp=1786710710~acl=/api/1/1/7/1/e/0/71ebfb525c7b86ce8cbead321d541ab8.mp3*~data=user_id=0,application_id=42~hmac=8050913b013c91a05b3a8086ce2d6564aa74561a76d35a8702d81781f49b2608"
      },
      {
        "id": "d00-28",
        "title": "When Love Takes Over",
        "artist": "David Guetta ft. Kelly Rowland",
        "year": 2009,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/6/1/0/061de66a4031b34cf4ab44f7ab2f4b71.mp3?hdnea=exp=1786710710~acl=/api/1/1/0/6/1/0/061de66a4031b34cf4ab44f7ab2f4b71.mp3*~data=user_id=0,application_id=42~hmac=34b745248a2997de863af70fff6bf58ec7208c66483e075fbeb6fe16088aa393"
      },
      {
        "id": "d00-29",
        "title": "I Gotta Feeling",
        "artist": "The Black Eyed Peas",
        "year": 2009,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/9/0/c491a843a03f645ba967338e15e1c5b5.mp3?hdnea=exp=1786710710~acl=/api/1/1/c/4/9/0/c491a843a03f645ba967338e15e1c5b5.mp3*~data=user_id=0,application_id=42~hmac=9770a44265075f6a2123c2ac9d3d736687b41758ac2b92c8ffffb3e825a47887"
      },
      {
        "id": "d00-30",
        "title": "Animals",
        "artist": "Martin Garrix",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/b/e/0/9bef660c3cf0ec4d85159a083ae81bf5.mp3?hdnea=exp=1786710710~acl=/api/1/1/9/b/e/0/9bef660c3cf0ec4d85159a083ae81bf5.mp3*~data=user_id=0,application_id=42~hmac=600f01b371b7b4ed4d1f7b5ca3f0e7375fd7eeea3bc25ee06faa1a32eb016f32"
      },
      {
        "id": "d00-31",
        "title": "Move Your Body (D.J.Gabry Ponte Original Radio Edit)",
        "artist": "Eiffel 65",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/54442be72c0074d953f66063648cd901/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/1/e/0/31eb8f988ee9a2ca899c113d4e26f002.mp3?hdnea=exp=1788639312~acl=/api/1/1/3/1/e/0/31eb8f988ee9a2ca899c113d4e26f002.mp3*~data=user_id=0,application_id=42~hmac=55be04484ea1c6dc19a1defe4569b931b26e7844cdcdff4bae271bb6cc8a5c96"
      },
      {
        "id": "d00-32",
        "title": "Tell Me Why",
        "artist": "Prezioso",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/dde1e0d7c97e06d5775ea6b71be22c1f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/b/0/0/3b0d5260abe90e4f10057067b0ec21a2.mp3?hdnea=exp=1788639312~acl=/api/1/1/3/b/0/0/3b0d5260abe90e4f10057067b0ec21a2.mp3*~data=user_id=0,application_id=42~hmac=a70ea10d386bd5728949b678933fbbe713a8486f575c11447ef04bf8f029dfd9"
      },
      {
        "id": "d00-33",
        "title": "Hit My Heart (Sfaction Radio Edit)",
        "artist": "Benassi Bros.",
        "year": 2021,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7a2280ab9163b0304cff9a64b9b78232/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/2/0/0/a20d760e2d1e7f904651127223bce2ca.mp3?hdnea=exp=1788639313~acl=/api/1/1/a/2/0/0/a20d760e2d1e7f904651127223bce2ca.mp3*~data=user_id=0,application_id=42~hmac=9460fa61fa4cf3d2ceb0d807d4acb3af8d5d621defe25c460bca1d06a58d538f"
      },
      {
        "id": "d00-34",
        "title": "Put Your Hands Up For Detroit",
        "artist": "Fedde Le Grand",
        "year": 2006,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5440a682a9c5581621506049f29ce72b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/4/3/0/24315faf128b213e1b651c2fd323c9c2.mp3?hdnea=exp=1788639313~acl=/api/1/1/2/4/3/0/24315faf128b213e1b651c2fd323c9c2.mp3*~data=user_id=0,application_id=42~hmac=df0f3bfdec23fd17eecf04d7849a7e71ca2c2cc664c259d3432a84bded68e8c5"
      },
      {
        "id": "d00-35",
        "title": "Everytime We Touch",
        "artist": "Cascada",
        "year": 2010,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/51515b40c93a2ac8b4aebb2505684802/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/0/2/0/6023be5f8ec82712db1fdf41c6ef81c5.mp3?hdnea=exp=1788639313~acl=/api/1/1/6/0/2/0/6023be5f8ec82712db1fdf41c6ef81c5.mp3*~data=user_id=0,application_id=42~hmac=69835add53d042ce6f3a33ddaf0fcde49caa6612dde3fe5bf948bb47a5ab4ecf"
      },
      {
        "id": "d00-36",
        "title": "Boten Anna (Instrumental)",
        "artist": "Basshunter",
        "year": 2006,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a29e2ba3d3e241125367e2e0aa33961d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/6/0/706d2a7cf2a6cfe105a27f21c5938065.mp3?hdnea=exp=1788639314~acl=/api/1/1/7/0/6/0/706d2a7cf2a6cfe105a27f21c5938065.mp3*~data=user_id=0,application_id=42~hmac=576695219fca5a3c6903c8fb8166bb2881d3799cb329fffac9b001963f79fc2c"
      },
      {
        "id": "d00-37",
        "title": "Sandstorm",
        "artist": "Darude",
        "year": 1999,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/44e790820c6d49aeb51398bc2fdb7ac9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/8/b/0/48b3943835a4f0b29e8f46328dafd720.mp3?hdnea=exp=1788639314~acl=/api/1/1/4/8/b/0/48b3943835a4f0b29e8f46328dafd720.mp3*~data=user_id=0,application_id=42~hmac=24b3c4d5e638a8197d73c8651f59b399cbab43c307e587327291e4f099d8abe9"
      },
      {
        "id": "d00-38",
        "title": "Played-A",
        "artist": "Safri Duo",
        "year": 2021,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/17ca418cde02c60bb4967c6e39aca66f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/e/0/63e5d6ff0f7d1963c47936c824b19bc0.mp3?hdnea=exp=1788639314~acl=/api/1/1/6/3/e/0/63e5d6ff0f7d1963c47936c824b19bc0.mp3*~data=user_id=0,application_id=42~hmac=35e9fa89410ffa0a5ef9b0f31be69f0866693b6c59a1c1b7e69693c4cc7b344d"
      },
      {
        "id": "d00-39",
        "title": "9 PM (Till I Come)",
        "artist": "ATB",
        "year": 1998,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9009a72ffad0f3cad0f9c889c7913725/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/3/f/0/73fb52090ed393160197944e71be226e.mp3?hdnea=exp=1788639315~acl=/api/1/1/7/3/f/0/73fb52090ed393160197944e71be226e.mp3*~data=user_id=0,application_id=42~hmac=8412c2c041a1ef2e3f4f5170834eec091e811633073e6654d6c2b830e8eb137f"
      },
      {
        "id": "d00-40",
        "title": "Pump It Up",
        "artist": "Danzel",
        "year": 2004,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9136b8df6ae2daae8f00ba1f5dd39daf/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/2/3/0/6235cc810b161b9fb2df28bb2975d97f.mp3?hdnea=exp=1788639315~acl=/api/1/1/6/2/3/0/6235cc810b161b9fb2df28bb2975d97f.mp3*~data=user_id=0,application_id=42~hmac=23ac9ce17cf804fd3c4011ad68788ac8ff0d3b54c02f88fc6d93ad9b891f98c2"
      },
      {
        "id": "d00-41",
        "title": "No Stress 2014 (Armano vs. Laurent Wolf) [Sebastien Lewis Radio Edit]",
        "artist": "Armano",
        "year": 2019,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e35937552cea342e38fcaae8b45339f5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/c/0/99c5d421916f0f605a826036fde98ab2.mp3?hdnea=exp=1788639315~acl=/api/1/1/9/9/c/0/99c5d421916f0f605a826036fde98ab2.mp3*~data=user_id=0,application_id=42~hmac=d5379d550b11632c1920d15dcba556fe88d59077bbb5f0c07acf498fd18cec5f"
      },
      {
        "id": "d00-42",
        "title": "Hot (Play & Win Radio Version)",
        "artist": "INNA",
        "year": 2010,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c108a55ba866c0b2ea17c07aba98d4bb/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/0/3/0/b0346405aed181dfe17e4fbf241f6040.mp3?hdnea=exp=1788639316~acl=/api/1/1/b/0/3/0/b0346405aed181dfe17e4fbf241f6040.mp3*~data=user_id=0,application_id=42~hmac=0a9d78c0eb402c604f93acd3937c22e1111a690a762a83e109494001b1ba1d78"
      },
      {
        "id": "d00-43",
        "title": "I Know You Want Me (Calle Ocho)",
        "artist": "Pitbull",
        "year": 2009,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/396c6fa64e1da93881b2b5f65c2e0afc/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/a/4/0/fa48f97526ce378e9b5f345ecebb6677.mp3?hdnea=exp=1788639316~acl=/api/1/1/f/a/4/0/fa48f97526ce378e9b5f345ecebb6677.mp3*~data=user_id=0,application_id=42~hmac=e62b7368556b7299376879a25019a03e31a4c1aadc2942ccf53a354f0a0f7276"
      },
      {
        "id": "d00-44",
        "title": "Poker Face",
        "artist": "Lady Gaga",
        "year": 2008,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cc24d60a998e1a296f0c22efa8ddffd2/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3?hdnea=exp=1788639317~acl=/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3*~data=user_id=0,application_id=42~hmac=06a993d7d2aa788b03175a201a1ca2cf1994bab86357332b866c7b84c0a61e3c"
      },
      {
        "id": "d00-45",
        "title": "Can't Get You out of My Head",
        "artist": "Kylie Minogue",
        "year": 2002,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/786064c48201a628c6ac78028ab4d06f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/4/0/a945ad6f37567a8b1500c4bf7355fc9b.mp3?hdnea=exp=1788639317~acl=/api/1/1/a/9/4/0/a945ad6f37567a8b1500c4bf7355fc9b.mp3*~data=user_id=0,application_id=42~hmac=f5befc6e9fcc6807382845b57586910d62d89826c78efd47814117c7c4d2886f"
      },
      {
        "id": "d00-46",
        "title": "Lady (Hear Me Tonight) - Remix",
        "artist": "Modjo",
        "year": 2025,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/43cc799e9d8bf79332ce16b6bfdfd4bd/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/a/6/0/6a6e9f1bd4a72e9dc3245d5f39360087.mp3?hdnea=exp=1788639317~acl=/api/1/1/6/a/6/0/6a6e9f1bd4a72e9dc3245d5f39360087.mp3*~data=user_id=0,application_id=42~hmac=b7da1b12a3170bcef48cb98af281524d64bd0436558e81ad26eb59134527e4f5"
      },
      {
        "id": "d00-47",
        "title": "It Feels So Good",
        "artist": "Sonique",
        "year": 1998,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e9f7742063c48b97e42d751fc0af942e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/f/2/0/bf2611924c76df7d9b112201f72797e1.mp3?hdnea=exp=1788639318~acl=/api/1/1/b/f/2/0/bf2611924c76df7d9b112201f72797e1.mp3*~data=user_id=0,application_id=42~hmac=8c0deb8c1d2159ed066bf8edbd412ed44c5d0fe592f18db049b85432891e8f0b"
      },
      {
        "id": "d00-48",
        "title": "Loneliness (Radio Cut)",
        "artist": "Tomcraft",
        "year": 2023,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8926dff1b3a2c6a6e1b555eebfd1f9dc/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/8/7/0/987493066ceb3d0b86bf74768eebe948.mp3?hdnea=exp=1788639318~acl=/api/1/1/9/8/7/0/987493066ceb3d0b86bf74768eebe948.mp3*~data=user_id=0,application_id=42~hmac=040853b85ee950782d33a906402ae9c2227588d4bbad1bb1718fade8e7f06dd4"
      },
      {
        "id": "d00-49",
        "title": "Pjanoo",
        "artist": "Eric Prydz",
        "year": 2008,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/69793a6778914a05537620708a6dfd52/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/2/f/0/92f6aea10b8d277924089f8e5b9f4a22.mp3?hdnea=exp=1788639318~acl=/api/1/1/9/2/f/0/92f6aea10b8d277924089f8e5b9f4a22.mp3*~data=user_id=0,application_id=42~hmac=5887cf097cfb7e0414a55d4870fe2f9f0c3cada19684d01da6eef46c6e1c5d2d"
      },
      {
        "id": "d00-50",
        "title": "Something",
        "artist": "Lasgo",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f2f5aa713d1f4f7a79ccec1398b4faa4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/3/2/0/53240fa388efbf084ac5fb32b851a719.mp3?hdnea=exp=1788639319~acl=/api/1/1/5/3/2/0/53240fa388efbf084ac5fb32b851a719.mp3*~data=user_id=0,application_id=42~hmac=8d1afe93990d504b21fe76c04bb0df991fa97e1d5df8a69d6596402a9acc1fd2"
      }
    ]
  },
  {
    "id": "hiphop-rap",
    "title": "Hip Hop & Rap Legends",
    "category": "genres",
    "description": "Eminem, 50 Cent, Caparezza, Fabri Fibra e Marracash.",
    "badge": "Ritmo",
    "cover": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "rap-1",
        "title": "Lose Yourself",
        "artist": "Eminem",
        "year": 2002,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/7/a/0/27a14827ff1e82c5e40e8b6a934a8637.mp3?hdnea=exp=1786710710~acl=/api/1/1/2/7/a/0/27a14827ff1e82c5e40e8b6a934a8637.mp3*~data=user_id=0,application_id=42~hmac=2d43bfce6e94a98bf622ab01e1091ab596b4c5a6c018385c57afefa34ebc3714"
      },
      {
        "id": "rap-2",
        "title": "In Da Club",
        "artist": "50 Cent",
        "year": 2003,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/7/d/0/e7dc0fbb4602f09e81d8afa81f13a400.mp3?hdnea=exp=1786710710~acl=/api/1/1/e/7/d/0/e7dc0fbb4602f09e81d8afa81f13a400.mp3*~data=user_id=0,application_id=42~hmac=05418b56146e245052fcc046d58dff52777fc6463568955c7667ea785f21466b"
      },
      {
        "id": "rap-3",
        "title": "Vieni a Ballare in Puglia",
        "artist": "Caparezza",
        "year": 2008,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/c/0/25c3c6d1a36b6ad5192d69908e59aadb.mp3?hdnea=exp=1786710710~acl=/api/1/1/2/5/c/0/25c3c6d1a36b6ad5192d69908e59aadb.mp3*~data=user_id=0,application_id=42~hmac=e77a11caf26f12c2f78414bcb652219b839a7778530a2615ec83a6a6a77db74b"
      },
      {
        "id": "rap-4",
        "title": "Applausi per Fibra",
        "artist": "Fabri Fibra",
        "year": 2006,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/9/3/0/c93b0b737f60af0928820cefbae8159f.mp3?hdnea=exp=1786710710~acl=/api/1/1/c/9/3/0/c93b0b737f60af0928820cefbae8159f.mp3*~data=user_id=0,application_id=42~hmac=53eb6fc5a05785ed6aceda21fbae249351967b89ee4582295c2fc2d95250b511"
      },
      {
        "id": "rap-5",
        "title": "Gangsta's Paradise",
        "artist": "Coolio",
        "year": 1995,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/f/1/0/3f19df3b484b0ab61f5e2de5820ceac2.mp3?hdnea=exp=1786710710~acl=/api/1/1/3/f/1/0/3f19df3b484b0ab61f5e2de5820ceac2.mp3*~data=user_id=0,application_id=42~hmac=07c03304c11535659fe80d90e7b201ad60685c5f4b0ef263e0c2501074977df6"
      },
      {
        "id": "rap-6",
        "title": "Still D.R.E.",
        "artist": "Dr. Dre",
        "year": 1999,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/cb/72/35/cb723539-f539-37d7-4316-9c2833142e3c/mzaf_17011503900190096840.plus.aac.p.m4a"
      },
      {
        "id": "rap-7",
        "title": "King del Rap",
        "artist": "Marracash",
        "year": 2011,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f0/03/3a/f0033aad-3c09-139b-2106-feda3ac0278b/mzaf_3173292055217083725.plus.aac.p.m4a"
      },
      {
        "id": "rap-8",
        "title": "Tranne Te",
        "artist": "Fabri Fibra",
        "year": 2010,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/61/fc/71/61fc715a-2112-a482-5eb6-8fcff68e23c2/mzaf_17371138204025019832.plus.aac.p.m4a"
      },
      {
        "id": "rap-9",
        "title": "California Love",
        "artist": "2Pac",
        "year": 1995,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/9/0/0/19076e85f658db2eaea4789c95a1655a.mp3?hdnea=exp=1786710710~acl=/api/1/1/1/9/0/0/19076e85f658db2eaea4789c95a1655a.mp3*~data=user_id=0,application_id=42~hmac=b44c0c5c52b99f858371c634e9489abe7a32d83427f5e842dc88513c68f1e001"
      },
      {
        "id": "rap-10",
        "title": "Numb / Encore",
        "artist": "Jay-Z & Linkin Park",
        "year": 2004,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/59/9b/4b599b36-f6c5-39a0-00ae-d8dff0d0a1ca/mzaf_3449483258786982860.plus.aac.p.m4a"
      },
      {
        "id": "rap-11",
        "title": "Without Me",
        "artist": "Eminem",
        "year": 2002,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7d/38/ff/7d38ff16-b52c-063a-a34d-767e836befcc/mzaf_13413071545825673354.plus.aac.p.m4a"
      },
      {
        "id": "rap-12",
        "title": "Bad Boy for Life",
        "artist": "P. Diddy",
        "year": 2001,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fb/90/22/fb902285-b1af-f17e-c8a6-ee504025d608/mzaf_11042710378775295372.plus.aac.p.m4a"
      },
      {
        "id": "rap-13",
        "title": "The Real Slim Shady",
        "artist": "Eminem",
        "year": 2000,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/58/35/ee/5835ee2e-d6a2-a7f0-b6a7-fa4469c378db/mzaf_4583343970859642161.plus.aac.p.m4a"
      },
      {
        "id": "rap-14",
        "title": "Empire State of Mind",
        "artist": "Jay-Z",
        "year": 2009,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/5d/9d/6e5d9d42-23d1-21cf-4822-cbedb12383e9/mzaf_2813097032706602219.plus.aac.p.m4a"
      },
      {
        "id": "rap-15",
        "title": "Fuori Dal Tunnel",
        "artist": "Caparezza",
        "year": 2003,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bf/85/95/bf85957a-4d48-0ec8-3c81-62c061f3fd2e/mzaf_10897142674165057056.plus.aac.p.m4a"
      },
      {
        "id": "rap-16",
        "title": "In Italia",
        "artist": "Fabri Fibra",
        "year": 2008,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c2/1e/6a/c21e6a92-68bd-2477-1e13-97d2ccc69cbc/mzaf_210315361333924513.plus.aac.p.m4a"
      },
      {
        "id": "rap-17",
        "title": "Bad and Boujee",
        "artist": "Migos",
        "year": 2016,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d9/57/0e/d9570e5d-49e5-bf42-07a2-e95f687083b1/mzaf_1817578927643166655.plus.aac.p.m4a"
      },
      {
        "id": "rap-18",
        "title": "Sicko Mode",
        "artist": "Travis Scott",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6c/e4/d9/6ce4d93b-1af7-14dd-bb68-9f80fcb2597f/mzaf_6430684220677140315.plus.aac.p.m4a"
      },
      {
        "id": "rap-19",
        "title": "Juicy",
        "artist": "The Notorious B.I.G.",
        "year": 1994,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5b/81/21/5b8121d4-1b2b-511a-1f38-0ef4346909b0/mzaf_4190278176982078552.plus.aac.p.m4a"
      },
      {
        "id": "rap-20",
        "title": "No Role Modelz",
        "artist": "J. Cole",
        "year": 2014,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/81/a2/33/81a2333c-1a07-0505-5375-2f1aa74ddf8e/mzaf_17607571914784018837.plus.aac.p.m4a"
      },
      {
        "id": "rap-21",
        "title": "HUMBLE.",
        "artist": "Kendrick Lamar",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1c/c3/74/1cc37441-d51c-755e-3805-0c8042579782/mzaf_2255295071365958312.plus.aac.p.m4a"
      },
      {
        "id": "rap-22",
        "title": "God's Plan",
        "artist": "Drake",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/da/7d/f1/da7df14b-8ee6-5020-d850-ccc0381eb141/mzaf_5511967710095380808.plus.aac.p.m4a"
      },
      {
        "id": "rap-23",
        "title": "Hotline Bling",
        "artist": "Drake",
        "year": 2015,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c7/b1/f3/c7b1f35a-8d24-735b-5923-1fb52fc7647e/mzaf_12441003627825640809.plus.aac.p.m4a"
      },
      {
        "id": "rap-24",
        "title": "See You Again",
        "artist": "Wiz Khalifa ft. Charlie Puth",
        "year": 2015,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ce/6a/9a/ce6a9a2e-9a37-f8ba-4935-4bc15db79fe1/mzaf_6977904213228880667.plus.aac.p.m4a"
      },
      {
        "id": "rap-25",
        "title": "Old Town Road",
        "artist": "Lil Nas X",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/9b/87/a1/9b87a1c7-59a1-4d75-bf1a-045072e7a51c/mzaf_13212852533006525594.plus.aac.p.m4a"
      },
      {
        "id": "rap-26",
        "title": "Rider",
        "artist": "Sfera Ebbasta",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/57/a3/6457a35b-53a2-5305-f02f-5b3da493b322/mzaf_7456722795800647116.plus.aac.p.m4a"
      },
      {
        "id": "rap-27",
        "title": "Rockstar",
        "artist": "Post Malone",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/7/5/0/f751c0f32b4c0d1d870b4294901f2fb3.mp3?hdnea=exp=1786710713~acl=/api/1/1/f/7/5/0/f751c0f32b4c0d1d870b4294901f2fb3.mp3*~data=user_id=0,application_id=42~hmac=e7336d0d68e0594496f2f0f3f6930c6ea080cc5d14a5c78b279c2d4ec78e740e"
      },
      {
        "id": "rap-28",
        "title": "Psycho",
        "artist": "Post Malone",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/1/5/0/b156f009eceb31d14bf2a9fe64e4fac4.mp3?hdnea=exp=1786710713~acl=/api/1/1/b/1/5/0/b156f009eceb31d14bf2a9fe64e4fac4.mp3*~data=user_id=0,application_id=42~hmac=19d58aaf98fea48fbbe24dee063d92cb4b5715bcb1e0aa16a0baff88a2713283"
      },
      {
        "id": "rap-29",
        "title": "Niente Canzoni D'Amore",
        "artist": "Marracash",
        "year": 2015,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/f/3/0/df37ad0c02586c2f1f9ddabd0d226f2f.mp3?hdnea=exp=1786710713~acl=/api/1/1/d/f/3/0/df37ad0c02586c2f1f9ddabd0d226f2f.mp3*~data=user_id=0,application_id=42~hmac=05942636fc94fe381b3c0ecde89e1400ef99939b635011b729d2033bfe53c029"
      },
      {
        "id": "rap-30",
        "title": "Persona",
        "artist": "Marracash",
        "year": 2019,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/5/0/4953144c2d81feba1a938b854e9fe928.mp3?hdnea=exp=1786710713~acl=/api/1/1/4/9/5/0/4953144c2d81feba1a938b854e9fe928.mp3*~data=user_id=0,application_id=42~hmac=0d552595d8df131750b5d628ada3b31f63942632b9ee8c8ce4e8dfc2522c026f"
      },
      {
        "id": "rap-31",
        "title": "Changes",
        "artist": "2Pac",
        "year": 2009,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/49856d92a31e284c7fe34b7971dba0b0/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/f/9/0/4f9e5b02c0124b2deb4c133e6594d0bf.mp3?hdnea=exp=1788639319~acl=/api/1/1/4/f/9/0/4f9e5b02c0124b2deb4c133e6594d0bf.mp3*~data=user_id=0,application_id=42~hmac=e163925f6313c54ef61ec1a1f302f546d77497bed9ea6518c221e2bf68b230fc"
      },
      {
        "id": "rap-32",
        "title": "Hypnotize",
        "artist": "The Notorious B.I.G.",
        "year": 2007,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/78af18fc11e9d880befd78777baffd9e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/4/a/0/f4a2cd616ccea4af3dbc44e6c3f90cd9.mp3?hdnea=exp=1788639319~acl=/api/1/1/f/4/a/0/f4a2cd616ccea4af3dbc44e6c3f90cd9.mp3*~data=user_id=0,application_id=42~hmac=76b239c6e436d62cd858b496ecef30569158225e32536e70ddc5c323ad78401d"
      },
      {
        "id": "rap-33",
        "title": "The Next Episode",
        "artist": "Dr. Dre",
        "year": 2008,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/7/c/0/b7cd9c360222d7d4b8bcb384f9353bec.mp3?hdnea=exp=1788639320~acl=/api/1/1/b/7/c/0/b7cd9c360222d7d4b8bcb384f9353bec.mp3*~data=user_id=0,application_id=42~hmac=3f5b61393816aacd595fa3f723a92ad80bce4e27856e95accdc0b24d9c75105c"
      },
      {
        "id": "rap-34",
        "title": "Candy Shop",
        "artist": "50 Cent",
        "year": 2005,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/67e90968c9c1956fbc2e831e125601fa/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/3/0/c435c508c879bca4bd191963e10348bf.mp3?hdnea=exp=1788639320~acl=/api/1/1/c/4/3/0/c435c508c879bca4bd191963e10348bf.mp3*~data=user_id=0,application_id=42~hmac=7fd207c8e0383a7e3cf6d2f67e61ae4539eba4ba41512d2577832567334bd216"
      },
      {
        "id": "rap-35",
        "title": "Drop It Like It's Hot",
        "artist": "Snoop Dogg",
        "year": 2004,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a0017427fdd2991b01fbfa92d101caa1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/8/c/0/88cfcdac65ff88437aa6ff22a82ef86a.mp3?hdnea=exp=1788639320~acl=/api/1/1/8/8/c/0/88cfcdac65ff88437aa6ff22a82ef86a.mp3*~data=user_id=0,application_id=42~hmac=a412fa54c335af72151eaa4d50df7935ac86ad5bb5c81582fb97cf7418fd55a5"
      },
      {
        "id": "rap-36",
        "title": "Gin and Juice",
        "artist": "Snoop Dogg",
        "year": 1993,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/513525f8796e03f191e5496cdf39b192/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/f/7/0/9f7ecff02944b02733675ed67334e088.mp3?hdnea=exp=1788639321~acl=/api/1/1/9/f/7/0/9f7ecff02944b02733675ed67334e088.mp3*~data=user_id=0,application_id=42~hmac=0c80587ac7e04bdac8adc9928b96ff135e8fb0d7970c62aaacac430fb4f06ea9"
      },
      {
        "id": "rap-37",
        "title": "Points of Authority / 99 Problems / One Step Closer",
        "artist": "JAY Z",
        "year": 2006,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7245b8fe756d39f20a53020163168dbe/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/a/0/4eae00bf874e3821e81aae814ed29312.mp3?hdnea=exp=1788639321~acl=/api/1/1/4/e/a/0/4eae00bf874e3821e81aae814ed29312.mp3*~data=user_id=0,application_id=42~hmac=b8fa57b3e2e6fcc27ee93eb1869cde90c3004afa0a93c317741b7e871f00da2f"
      },
      {
        "id": "rap-38",
        "title": "Stronger",
        "artist": "Kanye West",
        "year": 2007,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/15012d974c6263aec95e52e6d86cba23/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/8/7/0/c8777e35f09472d0e689a6738fc6810a.mp3?hdnea=exp=1788639321~acl=/api/1/1/c/8/7/0/c8777e35f09472d0e689a6738fc6810a.mp3*~data=user_id=0,application_id=42~hmac=4f814459943890c4fea8b2f30edf58c6d8e924506d02504442654e912383abab"
      },
      {
        "id": "rap-39",
        "title": "Gold Digger",
        "artist": "Kanye West",
        "year": 2005,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7cbfc94084895e59b5a313a98ab1bd9a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/2/5/0/525c0a401d49612f4ceb35367c52ccb3.mp3?hdnea=exp=1788639322~acl=/api/1/1/5/2/5/0/525c0a401d49612f4ceb35367c52ccb3.mp3*~data=user_id=0,application_id=42~hmac=e70e8d7165ff0caf9968621ef29a288d6b071a21d5c6f8ef14c0773db2cc0926"
      },
      {
        "id": "rap-40",
        "title": "Ms. Jackson",
        "artist": "Outkast",
        "year": 2001,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/be4f08ec67000dcf53749f87eafcb292/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/0/b/0/c0b78500fd54054dc38442cbdd6648bc.mp3?hdnea=exp=1788639322~acl=/api/1/1/c/0/b/0/c0b78500fd54054dc38442cbdd6648bc.mp3*~data=user_id=0,application_id=42~hmac=8c59c14e8bf75e7dae5dea09941345dada79ff1a8374d8d221569e420f929b4c"
      },
      {
        "id": "rap-41",
        "title": "Hey Ya!",
        "artist": "Outkast",
        "year": 2003,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f81783b6cc6030733cd475f820855562/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/3/9/0/039b2c3871d36df880b29fc2b4ac2fc8.mp3?hdnea=exp=1788639322~acl=/api/1/1/0/3/9/0/039b2c3871d36df880b29fc2b4ac2fc8.mp3*~data=user_id=0,application_id=42~hmac=e817e02b3d4fc59f8c3cf8896b54d6d0330907da2feef11a59614f6676f6d6cc"
      },
      {
        "id": "rap-42",
        "title": "Party Up",
        "artist": "DMX",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a6e30c41520cf1ed097344d1af767e82/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/a/1/0/ea1e55bb25b1369051c7b506ee084347.mp3?hdnea=exp=1788639323~acl=/api/1/1/e/a/1/0/ea1e55bb25b1369051c7b506ee084347.mp3*~data=user_id=0,application_id=42~hmac=cb36f843533236344d7bc3f99e0b78eecd4e40285cfb94fcdb1b1da1e36b9484"
      },
      {
        "id": "rap-43",
        "title": "X Gon' Give It To Ya (Int'l Bonus track)",
        "artist": "DMX",
        "year": 2003,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2738ddc7f2fa7d869438caf6a3d25a7b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/4/9/0/b49ac18e6c1e4a278e84a5f7f0abfb2b.mp3?hdnea=exp=1788639323~acl=/api/1/1/b/4/9/0/b49ac18e6c1e4a278e84a5f7f0abfb2b.mp3*~data=user_id=0,application_id=42~hmac=65e01164acd129e79988896db48457da2d7f890b037d571b80217efd348936c9"
      },
      {
        "id": "rap-44",
        "title": "Hot In Herre",
        "artist": "Nelly",
        "year": 2002,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/632fa55096ecab62a0c2556fa9e958c1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/0/d/0/d0d9d55037e52c4b8e25b3c37582ed11.mp3?hdnea=exp=1788639323~acl=/api/1/1/d/0/d/0/d0d9d55037e52c4b8e25b3c37582ed11.mp3*~data=user_id=0,application_id=42~hmac=ecff4e0baac674b90751ebe9283542e4c2bda8914969f315cf5ae61864947a2e"
      },
      {
        "id": "rap-45",
        "title": "Act A Fool",
        "artist": "Ludacris",
        "year": 2015,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/470b8a54548241fef2502b43b7dee980/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/3/0/2d342fa5e98c3f4cd837bde3f7bb2294.mp3?hdnea=exp=1788639324~acl=/api/1/1/2/d/3/0/2d342fa5e98c3f4cd837bde3f7bb2294.mp3*~data=user_id=0,application_id=42~hmac=644b40aa3e5f43908e897ac2c6d213fb0a38b6e32b9d9910d99fe1a3ae95e911"
      },
      {
        "id": "rap-46",
        "title": "Break Ya Neck",
        "artist": "Busta Rhymes",
        "year": 2001,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e11507c35ee746cf5433b00c695a8db1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/8/6/0/2868952ad3d120ebf6d62d619f9cddee.mp3?hdnea=exp=1788639324~acl=/api/1/1/2/8/6/0/2868952ad3d120ebf6d62d619f9cddee.mp3*~data=user_id=0,application_id=42~hmac=9659a56ca8aec72b4b9f9901a9229839b5a622ccc0e69b6086cdee7ffcc0d429"
      },
      {
        "id": "rap-47",
        "title": "Alright",
        "artist": "Kendrick Lamar",
        "year": 2015,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/00dd0da365a94b1829302d6b7fec70e6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/2/f/0/12fd60e1cc86369ca2153e461ea6f0eb.mp3?hdnea=exp=1788639324~acl=/api/1/1/1/2/f/0/12fd60e1cc86369ca2153e461ea6f0eb.mp3*~data=user_id=0,application_id=42~hmac=a4b04a66162835abcfc6f8798a12d47546fc3bd257d45cd7e704bff67b20cc48"
      },
      {
        "id": "rap-48",
        "title": "Goosebumps (Remix)",
        "artist": "Travis Scott",
        "year": 2021,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6b149002c49dbb6a6056512dbfcb5e95/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/1/b/0/c1b4cd82285fd169be45550a2cfe1b26.mp3?hdnea=exp=1788639325~acl=/api/1/1/c/1/b/0/c1b4cd82285fd169be45550a2cfe1b26.mp3*~data=user_id=0,application_id=42~hmac=d74a22d6da924f624e258c9951837e152d036b2132c361ec95b0185922a7aaf9"
      },
      {
        "id": "rap-49",
        "title": "Lollipop",
        "artist": "Lil Wayne",
        "year": 2008,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6f1644ea3f18ee2ff5673bcd03a5cca0/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/a/8/0/9a860ab2b1c62531ca760dee90dfa4e0.mp3?hdnea=exp=1788639325~acl=/api/1/1/9/a/8/0/9a860ab2b1c62531ca760dee90dfa4e0.mp3*~data=user_id=0,application_id=42~hmac=146dbe363278ad297445b728aa87201dfbe42e65885feca0656d2396c215614b"
      },
      {
        "id": "rap-50",
        "title": "Regulate (Album Version Explicit)",
        "artist": "Warren G",
        "year": 2007,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e21fd3908bf0265eab0a162702483ed2/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/9/1/0/7910ddf3485d04441d3d1d12ee894415.mp3?hdnea=exp=1788639325~acl=/api/1/1/7/9/1/0/7910ddf3485d04441d3d1d12ee894415.mp3*~data=user_id=0,application_id=42~hmac=58e46500350367b5c39584e0b5d7705c2cc2496f3c0d126140164c5c8e099ed6"
      }
    ]
  },
  {
    "id": "discomusic-70s",
    "title": "Disco & Funk Anni '70",
    "category": "decades",
    "description": "ABBA, Bee Gees, Earth Wind & Fire e Donna Summer.",
    "badge": "Groove",
    "cover": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "d70-1",
        "title": "Stayin' Alive",
        "artist": "Bee Gees",
        "year": 1977,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/1/9/0/319c89b68405e15329ed21a4139fff38.mp3?hdnea=exp=1786710713~acl=/api/1/1/3/1/9/0/319c89b68405e15329ed21a4139fff38.mp3*~data=user_id=0,application_id=42~hmac=545382a6e38fcb521fb1242ee5f33a7ffb9a297c9aecca8078761e3d1c26bfab"
      },
      {
        "id": "d70-2",
        "title": "Dancing Queen",
        "artist": "ABBA",
        "year": 1976,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/1/6/0/916f7137187790e999bc66e6460c07b2.mp3?hdnea=exp=1786710713~acl=/api/1/1/9/1/6/0/916f7137187790e999bc66e6460c07b2.mp3*~data=user_id=0,application_id=42~hmac=70b3800189ef53cc223d84d11b57727c7bcdf8c5c1d418af162109d1d2181aa1"
      },
      {
        "id": "d70-3",
        "title": "September",
        "artist": "Earth, Wind & Fire",
        "year": 1978,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/1/0/ff191ffcc88051796dd077e402aa14c5.mp3?hdnea=exp=1786710713~acl=/api/1/1/f/f/1/0/ff191ffcc88051796dd077e402aa14c5.mp3*~data=user_id=0,application_id=42~hmac=674a62e2ba9a52155a9841caabc0baa6964e09befebd15249e61a08ae7084344"
      },
      {
        "id": "d70-4",
        "title": "I Will Survive",
        "artist": "Gloria Gaynor",
        "year": 1978,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/8/2/0/c82418e167f8e20b43b288eba56e3f68.mp3?hdnea=exp=1786710713~acl=/api/1/1/c/8/2/0/c82418e167f8e20b43b288eba56e3f68.mp3*~data=user_id=0,application_id=42~hmac=8167ca37133a9d913c06a5f205c4829e6697586c457270536125df0ef63f7929"
      },
      {
        "id": "d70-5",
        "title": "Le Freak",
        "artist": "Chic",
        "year": 1978,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/b/e/0/dbe27e246e08fa7bad6dd09b9af59bb0.mp3?hdnea=exp=1786710713~acl=/api/1/1/d/b/e/0/dbe27e246e08fa7bad6dd09b9af59bb0.mp3*~data=user_id=0,application_id=42~hmac=e2799282a6ed7a7c1ed69309ff72084855fc3717f1951bcc9ea3d93903b7d19d"
      },
      {
        "id": "d70-6",
        "title": "Y.M.C.A.",
        "artist": "Village People",
        "year": 1978,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/a/b/0/2abe65ab0c7c525da63f57ec254844da.mp3?hdnea=exp=1786710714~acl=/api/1/1/2/a/b/0/2abe65ab0c7c525da63f57ec254844da.mp3*~data=user_id=0,application_id=42~hmac=8214504c8a0d1e2e42784552e1260b2697ea6201c7365a63a7c17b1a5c2da2ba"
      },
      {
        "id": "d70-7",
        "title": "Celebration",
        "artist": "Kool & The Gang",
        "year": 1980,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/5/7/0/c57461b9c73e665145f093881eca75e5.mp3?hdnea=exp=1786710714~acl=/api/1/1/c/5/7/0/c57461b9c73e665145f093881eca75e5.mp3*~data=user_id=0,application_id=42~hmac=8c717b5959a88a85345dee0b0ac21fc39757f1c8952fe90aa872135118027d4c"
      },
      {
        "id": "d70-8",
        "title": "Superstition",
        "artist": "Stevie Wonder",
        "year": 1972,
        "genre": "Funk",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/7/7/0/2777f372b6b097206c7a50a5ef794c7a.mp3?hdnea=exp=1786710713~acl=/api/1/1/2/7/7/0/2777f372b6b097206c7a50a5ef794c7a.mp3*~data=user_id=0,application_id=42~hmac=7087770ba06d56ef73a8a748d963481b82c1f047d7ae3a2aab5e0cb9e2f5f375"
      },
      {
        "id": "d70-9",
        "title": "That's the Way (I Like It)",
        "artist": "KC & The Sunshine Band",
        "year": 1975,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/a/9/0/ea9c1047a6197a9b2aace521eb08976f.mp3?hdnea=exp=1786710713~acl=/api/1/1/e/a/9/0/ea9c1047a6197a9b2aace521eb08976f.mp3*~data=user_id=0,application_id=42~hmac=6470bc16710eca9dfc7ff4dfb5ae1556df25e0d7b6824402cf8a70ee77e249f5"
      },
      {
        "id": "d70-10",
        "title": "Play That Funky Music",
        "artist": "Wild Cherry",
        "year": 1976,
        "genre": "Funk",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/1/0/c4152554b9f256a5e5b2088fe46f847c.mp3?hdnea=exp=1786710714~acl=/api/1/1/c/4/1/0/c4152554b9f256a5e5b2088fe46f847c.mp3*~data=user_id=0,application_id=42~hmac=eb60fc27a64dc2b0a0894470439df015596540db86780a2761cca2c0851204cc"
      },
      {
        "id": "d70-11",
        "title": "Night Fever",
        "artist": "Bee Gees",
        "year": 1977,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/8/2/0/a824451b82af8ad41abbdee5e26426ea.mp3?hdnea=exp=1786710714~acl=/api/1/1/a/8/2/0/a824451b82af8ad41abbdee5e26426ea.mp3*~data=user_id=0,application_id=42~hmac=6aa726880fc60bf2c42484f55968bb1ae86249b7e3c8648914f49e7e1b6ef19c"
      },
      {
        "id": "d70-12",
        "title": "Daddy Cool",
        "artist": "Boney M.",
        "year": 1976,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/1/f/0/b1fdc207ee93773c96378cc919c50d3c.mp3?hdnea=exp=1786710714~acl=/api/1/1/b/1/f/0/b1fdc207ee93773c96378cc919c50d3c.mp3*~data=user_id=0,application_id=42~hmac=2e4a311f13264b0afb58a7aa13ccefeda8aa170b124a13f972ce7453ca15dbbd"
      },
      {
        "id": "d70-13",
        "title": "Disco Inferno",
        "artist": "The Trammps",
        "year": 1976,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/e/0/25ebdc07e576da9cc718eb511618289e.mp3?hdnea=exp=1786710714~acl=/api/1/1/2/5/e/0/25ebdc07e576da9cc718eb511618289e.mp3*~data=user_id=0,application_id=42~hmac=e8d699280c86053d2e426318d43cb6e2b849cdeaa5f53c3bc99f0dec00348207"
      },
      {
        "id": "d70-14",
        "title": "Hot Stuff",
        "artist": "Donna Summer",
        "year": 1979,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/8/0/0482fdf4f10e2df15d8261ad5432f2f9.mp3?hdnea=exp=1786710714~acl=/api/1/1/0/4/8/0/0482fdf4f10e2df15d8261ad5432f2f9.mp3*~data=user_id=0,application_id=42~hmac=52fe075784a93148b1065bc4794b7400bc3252c78e404f928e335775f9b3ed1b"
      },
      {
        "id": "d70-15",
        "title": "Boogie Wonderland",
        "artist": "Earth, Wind & Fire",
        "year": 1979,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/3/f/0/83f86420abf5fad6af343a753edea5de.mp3?hdnea=exp=1786710714~acl=/api/1/1/8/3/f/0/83f86420abf5fad6af343a753edea5de.mp3*~data=user_id=0,application_id=42~hmac=59dc47bae7044f42329b8771d917ebad4675b30f7e6971eb8e46acbed799d1f6"
      },
      {
        "id": "d70-16",
        "title": "Don't Leave Me This Way",
        "artist": "Thelma Houston",
        "year": 1976,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/c/2/0/4c2797eee63f2c3fc1b861a8b426d569.mp3?hdnea=exp=1786710714~acl=/api/1/1/4/c/2/0/4c2797eee63f2c3fc1b861a8b426d569.mp3*~data=user_id=0,application_id=42~hmac=4221673935540d0af9e3f85aff422f06dd2996400637d5dc0a857ad06b590d1b"
      },
      {
        "id": "d70-17",
        "title": "Love to Love You Baby",
        "artist": "Donna Summer",
        "year": 1975,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/b/4/0/7b43803f91449db1a6b5ac26813cb4be.mp3?hdnea=exp=1786710714~acl=/api/1/1/7/b/4/0/7b43803f91449db1a6b5ac26813cb4be.mp3*~data=user_id=0,application_id=42~hmac=be75b2529117338727c8632e8921e68ed62010cbd5b882d5a284b6b82cf96af7"
      },
      {
        "id": "d70-18",
        "title": "Gimme! Gimme! Gimme!",
        "artist": "ABBA",
        "year": 1979,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/c/3/0/1c32cf1ffb918ac8f4e44958ad2c8183.mp3?hdnea=exp=1786710714~acl=/api/1/1/1/c/3/0/1c32cf1ffb918ac8f4e44958ad2c8183.mp3*~data=user_id=0,application_id=42~hmac=4994e49bdcdffeb3ee6889e168fb56f049314738e374c59be1f93685b982adea"
      },
      {
        "id": "d70-19",
        "title": "How Deep Is Your Love",
        "artist": "Bee Gees",
        "year": 1977,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/e/d/0/7ed3ca7732bd78c53938189a86738399.mp3?hdnea=exp=1786710714~acl=/api/1/1/7/e/d/0/7ed3ca7732bd78c53938189a86738399.mp3*~data=user_id=0,application_id=42~hmac=617d6fcc88922507fa2c62f48d1eedff5a79b8c10447007cc2a6b66bbb8c1252"
      },
      {
        "id": "d70-20",
        "title": "Macho Man",
        "artist": "Village People",
        "year": 1978,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/e/c/0/8ecebb6dbdc64e67af853a97f4bbc5f0.mp3?hdnea=exp=1786710714~acl=/api/1/1/8/e/c/0/8ecebb6dbdc64e67af853a97f4bbc5f0.mp3*~data=user_id=0,application_id=42~hmac=c445cc9872fa19e0a5cd7b967f55edae68da51ff8234a6561585348c5b4de328"
      },
      {
        "id": "d70-21",
        "title": "Waterloo",
        "artist": "ABBA",
        "year": 1974,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/c/0/50c431836b0b7a99cb46b3e9755cfcdb.mp3?hdnea=exp=1786710714~acl=/api/1/1/5/0/c/0/50c431836b0b7a99cb46b3e9755cfcdb.mp3*~data=user_id=0,application_id=42~hmac=2e1ae2a27269863685f5fe4f2b54443286a3dd4b272a9f94e1afb2e4fcaa3956"
      },
      {
        "id": "d70-22",
        "title": "Mamma Mia",
        "artist": "ABBA",
        "year": 1975,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/f/4/0/2f43ec31dca14cb85d055161622fbe2c.mp3?hdnea=exp=1786710714~acl=/api/1/1/2/f/4/0/2f43ec31dca14cb85d055161622fbe2c.mp3*~data=user_id=0,application_id=42~hmac=4033f6db6c23c0cf0acc2950575f96aa7b339a2fdac9ad1b75329ac4fc87b084"
      },
      {
        "id": "d70-23",
        "title": "Get Down Tonight",
        "artist": "KC & The Sunshine Band",
        "year": 1975,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/e/1/0/be1b163abb9fc87cd1ea74e7caa58d5a.mp3?hdnea=exp=1786710714~acl=/api/1/1/b/e/1/0/be1b163abb9fc87cd1ea74e7caa58d5a.mp3*~data=user_id=0,application_id=42~hmac=870ec0fac711755031cd9da7a6297bb35bee005684246aaf968fd8ce1086e0be"
      },
      {
        "id": "d70-24",
        "title": "Knock on Wood",
        "artist": "Amii Stewart",
        "year": 1979,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/0/0/0/400d91ee3bb81b9c811dbb5af3743918.mp3?hdnea=exp=1786710714~acl=/api/1/1/4/0/0/0/400d91ee3bb81b9c811dbb5af3743918.mp3*~data=user_id=0,application_id=42~hmac=c0c0573e1dd1a004e2dc4b86f4f933e2019c0ce533ff68d0e77c30f0472bf2cc"
      },
      {
        "id": "d70-25",
        "title": "Born to Be Alive",
        "artist": "Patrick Hernandez",
        "year": 1979,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/e/7/0/7e792b5e2b606282d58f403c34ad0a22.mp3?hdnea=exp=1786710714~acl=/api/1/1/7/e/7/0/7e792b5e2b606282d58f403c34ad0a22.mp3*~data=user_id=0,application_id=42~hmac=82c965f49858357373f6f4a5be1e489c763c1d5c31e4894457f54ab62b953a98"
      },
      {
        "id": "d70-26",
        "title": "Ring My Bell",
        "artist": "Anita Ward",
        "year": 1979,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/9/e/0/d9ec804eda12421ed96448a8926e0221.mp3?hdnea=exp=1786710715~acl=/api/1/1/d/9/e/0/d9ec804eda12421ed96448a8926e0221.mp3*~data=user_id=0,application_id=42~hmac=7b2683cead5739ff5531c03b8e5ab5283007a0450e597119c023f7c428197881"
      },
      {
        "id": "d70-27",
        "title": "Good Times",
        "artist": "Chic",
        "year": 1979,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/0/0/c7061afb6eca2fa62335365ff52d8d13.mp3?hdnea=exp=1786710715~acl=/api/1/1/c/7/0/0/c7061afb6eca2fa62335365ff52d8d13.mp3*~data=user_id=0,application_id=42~hmac=0bfa41554f0f27b6206459e1df96c4298da929d99d723b0be57fa321b806ea04"
      },
      {
        "id": "d70-28",
        "title": "Shame, Shame, Shame",
        "artist": "Shirley & Company",
        "year": 1974,
        "genre": "Disco",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/d/3/0/7d380801ab6261a51f693b064e07b38e.mp3?hdnea=exp=1786710715~acl=/api/1/1/7/d/3/0/7d380801ab6261a51f693b064e07b38e.mp3*~data=user_id=0,application_id=42~hmac=5583ae0ad626e92277084468909847a4d759cc0137b0a4f4e896ba0cd4e09745"
      },
      {
        "id": "d70-29",
        "title": "Love Train",
        "artist": "The O'Jays",
        "year": 1972,
        "genre": "Funk",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/d/1/0/dd16077883920eadfeec0aa72417f1a7.mp3?hdnea=exp=1786710715~acl=/api/1/1/d/d/1/0/dd16077883920eadfeec0aa72417f1a7.mp3*~data=user_id=0,application_id=42~hmac=f7cc4d0f2c2c43a23f81c0447a26d8943c4e978c5e190b5d72de7238bdfdbf0b"
      },
      {
        "id": "d70-30",
        "title": "Pick Up the Pieces",
        "artist": "Average White Band",
        "year": 1974,
        "genre": "Funk",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/0/f/0/f0f4ceb1b3a02e66d4d64ab67bd59ec7.mp3?hdnea=exp=1786710715~acl=/api/1/1/f/0/f/0/f0f4ceb1b3a02e66d4d64ab67bd59ec7.mp3*~data=user_id=0,application_id=42~hmac=92e06f0fdb66c19b6675403dfaabb18a6a7ac180d2304c3cf409ac249ef88902"
      },
      {
        "id": "d70-31",
        "title": "Boogie Wonderland (with The Emotions) (12\" Version)",
        "artist": "Earth, Wind & Fire",
        "year": 2018,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b6a1ae9701031dc1111cebec413f5242/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/7/2/0/272a36ae7b07b0d0dd72f8a9f34f9124.mp3?hdnea=exp=1788639326~acl=/api/1/1/2/7/2/0/272a36ae7b07b0d0dd72f8a9f34f9124.mp3*~data=user_id=0,application_id=42~hmac=2a50dd7fd4443e9856f2aa70b7122f3c14a7b2e496763ac30b0fdda992fdd103"
      },
      {
        "id": "d70-32",
        "title": "Bad Girls",
        "artist": "Donna Summer",
        "year": 2018,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2d6faf79614d81cf881f8500dd25598b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/9/0/809e0a4e77886860b3ab95d8a8ef9e33.mp3?hdnea=exp=1788639326~acl=/api/1/1/8/0/9/0/809e0a4e77886860b3ab95d8a8ef9e33.mp3*~data=user_id=0,application_id=42~hmac=04fbb3d049890b5c0deab5310589a32025dfaf6e4907e391643f9c6e695fc585"
      },
      {
        "id": "d70-33",
        "title": "Get Down On It",
        "artist": "Kool & The Gang",
        "year": 2015,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/432ebc60ba4d20887d67ef6b3cece11e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/3/0/08359db52235c97a31947ab3c75fe429.mp3?hdnea=exp=1788639327~acl=/api/1/1/0/8/3/0/08359db52235c97a31947ab3c75fe429.mp3*~data=user_id=0,application_id=42~hmac=05e4b978840f74fab07a306827c6dd1d82beaf48d1b8c7af677a7a965f28088e"
      },
      {
        "id": "d70-34",
        "title": "We Are Family",
        "artist": "Sister Sledge",
        "year": 1992,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b384580ff1e772c40db28546a9811d32/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/9/0/c49d90ea610129caa520f6d7262ceb0e.mp3?hdnea=exp=1788639327~acl=/api/1/1/c/4/9/0/c49d90ea610129caa520f6d7262ceb0e.mp3*~data=user_id=0,application_id=42~hmac=d0e4aabcd68a073a262507d0d0f534bf92abd282ecaf363db15aa94f4f766845"
      },
      {
        "id": "d70-35",
        "title": "In The Navy",
        "artist": "Village People",
        "year": 2026,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d673ddffc69947d36040567426d07858/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/1/4/0/5140b633f522443c8b9fc1526fc7a296.mp3?hdnea=exp=1788639328~acl=/api/1/1/5/1/4/0/5140b633f522443c8b9fc1526fc7a296.mp3*~data=user_id=0,application_id=42~hmac=57e6a20948468bf9e487108ad94f7239f86ed6811d6683ae3005b03a8b948814"
      },
      {
        "id": "d70-36",
        "title": "Rasputin",
        "artist": "Boney M.",
        "year": 2007,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/1c8adc5ca978db9e7a07e61de2becd3f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/6/1/0/5615cf01cb62a54ad3690825af373cb1.mp3?hdnea=exp=1788639328~acl=/api/1/1/5/6/1/0/5615cf01cb62a54ad3690825af373cb1.mp3*~data=user_id=0,application_id=42~hmac=9a387fa58146005bed43cbe4cc3cb3fe009b7a3db8af3f67152a35b3b778e75b"
      },
      {
        "id": "d70-37",
        "title": "Funkytown",
        "artist": "Lipps Inc.",
        "year": 2021,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/22c3b83d9c00899886508e1dffcf93ef/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/8/a/0/a8ac8c7820a2f088c1c65fc77ffd3948.mp3?hdnea=exp=1788639328~acl=/api/1/1/a/8/a/0/a8ac8c7820a2f088c1c65fc77ffd3948.mp3*~data=user_id=0,application_id=42~hmac=d2c6a1fe788050bf8b96e04b748ca05102f441525a3798abf6d9f7062b46c37f"
      },
      {
        "id": "d70-38",
        "title": "Upside Down",
        "artist": "Diana Ross",
        "year": 2003,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b7694952d41739a995da2e56eec6ee46/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/b/8/0/ab87d07617b2b77d1bf691dc790439b4.mp3?hdnea=exp=1788639329~acl=/api/1/1/a/b/8/0/ab87d07617b2b77d1bf691dc790439b4.mp3*~data=user_id=0,application_id=42~hmac=7e18fbc8197008f81a26f354d63ecebe52d5218aac0206167ac3576a02e02d4d"
      },
      {
        "id": "d70-39",
        "title": "Blame It on the Boogie",
        "artist": "The Jacksons",
        "year": 1978,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/214904421d220289b042486d9c5594bc/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/c/b/0/dcbb9c00fe13911eb42317d0fda267d3.mp3?hdnea=exp=1788639329~acl=/api/1/1/d/c/b/0/dcbb9c00fe13911eb42317d0fda267d3.mp3*~data=user_id=0,application_id=42~hmac=8753eaaee721c2c06606ef58cb31fe83c2894ad6f670574c90a724f0804f06a2"
      },
      {
        "id": "d70-40",
        "title": "You Make Me Feel (Mighty Real) [Epilogue]",
        "artist": "Sylvester",
        "year": 2013,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/dc7d1e5e301bbed192425b249ace9380/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/d/0/d4d3432c2e13782334764168f8bc48d1.mp3?hdnea=exp=1788639330~acl=/api/1/1/d/4/d/0/d4d3432c2e13782334764168f8bc48d1.mp3*~data=user_id=0,application_id=42~hmac=6f5f102eafa6ecf2cacba414db2886d90b196bce305dcc3f11c386798ddfd8b4"
      },
      {
        "id": "d70-41",
        "title": "And The Beat Goes On (Single Version)",
        "artist": "The Whispers",
        "year": 2026,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d863b5f9d659ab6132424877a19b702a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/a/8/0/ea82f9f013ee06c6ff2ab8250fc91c6c.mp3?hdnea=exp=1788639330~acl=/api/1/1/e/a/8/0/ea82f9f013ee06c6ff2ab8250fc91c6c.mp3*~data=user_id=0,application_id=42~hmac=c249a34e8600f80ff88020913545fb6256949e7ed123f1793b7933f1bdb745d1"
      },
      {
        "id": "d70-42",
        "title": "Fly Robin Fly",
        "artist": "Silver Convention",
        "year": 2010,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/937c303849332a9bcd76ecee72252ea4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/a/a/0/2aa0ad31d6522d5c36c94a7e95b153df.mp3?hdnea=exp=1788639330~acl=/api/1/1/2/a/a/0/2aa0ad31d6522d5c36c94a7e95b153df.mp3*~data=user_id=0,application_id=42~hmac=2f6dafbcc976336df619d206620be7737435576f2c2e24fa176a4b95365a178e"
      },
      {
        "id": "d70-43",
        "title": "Boogie Nights",
        "artist": "Heatwave",
        "year": 1977,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8469ba5128a397635f41992c19cf1318/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/6/0/806cb7234e8df395149aecb5f8861ead.mp3?hdnea=exp=1788639331~acl=/api/1/1/8/0/6/0/806cb7234e8df395149aecb5f8861ead.mp3*~data=user_id=0,application_id=42~hmac=1fc8c5a52257e8c551b1b5a1113caa8604eafe5319984b0b21e7af5633c1504e"
      },
      {
        "id": "d70-44",
        "title": "Kung Fu Fighting",
        "artist": "Carl Douglas",
        "year": 2026,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2d4d079390b68772923fc972e0bef471/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/f/0/0/6f00f719ff42d4fdede2b3f02f02131d.mp3?hdnea=exp=1788639331~acl=/api/1/1/6/f/0/0/6f00f719ff42d4fdede2b3f02f02131d.mp3*~data=user_id=0,application_id=42~hmac=3906b7dc89ad70119c4286b879f8a873c2c769d01adc9a1c5fc85a3b881422a7"
      },
      {
        "id": "d70-45",
        "title": "You're The First, The Last, My Everything (Edit)",
        "artist": "Barry White",
        "year": 2018,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5d4d9be63470e9c842f8d504aabc8bd6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/8/f/0/68fc92f7bc6e76e2647ba786cad413b8.mp3?hdnea=exp=1788639331~acl=/api/1/1/6/8/f/0/68fc92f7bc6e76e2647ba786cad413b8.mp3*~data=user_id=0,application_id=42~hmac=ea398e7a16666c5925d59e07d97fe216a01f693ed965aab9e44ae2464b9c2d85"
      },
      {
        "id": "d70-46",
        "title": "Never Can Say Goodbye (Rerecorded)",
        "artist": "Gloria Gaynor",
        "year": 1982,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9087e3caed31dabf7d60cb07bb18354c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/5/1/0/1511289d6f936ed980ccc823b6ba3b4d.mp3?hdnea=exp=1788639332~acl=/api/1/1/1/5/1/0/1511289d6f936ed980ccc823b6ba3b4d.mp3*~data=user_id=0,application_id=42~hmac=02aa69e351172cf1c93fed22c95eb5f4d920770a34d46b6f3b03b4ba32c9c481"
      },
      {
        "id": "d70-47",
        "title": "Rock the Boat",
        "artist": "The Hues Corporation",
        "year": 1974,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/1c4d08c22641273d3b0fda496753e0e9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/f/6/0/cf6a2e4f0cb3c56814cc5a701c7f422d.mp3?hdnea=exp=1788639332~acl=/api/1/1/c/f/6/0/cf6a2e4f0cb3c56814cc5a701c7f422d.mp3*~data=user_id=0,application_id=42~hmac=a93f23d836d4d9edbb91b010a1363e13e7f06db7b27e371b11bd095f7423a6aa"
      },
      {
        "id": "d70-48",
        "title": "Brick House",
        "artist": "Commodores",
        "year": 2006,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/18116e2b0b69ee571deb99db1526d7f2/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/5/1/0/f5179d56f0bde6dea052dfa238d500c2.mp3?hdnea=exp=1788639333~acl=/api/1/1/f/5/1/0/f5179d56f0bde6dea052dfa238d500c2.mp3*~data=user_id=0,application_id=42~hmac=01ad4f1c97bf29a7873e32c73de8b4f0ca8d373d2a601f697a35175ffeff9c12"
      },
      {
        "id": "d70-49",
        "title": "Take A Chance On Me",
        "artist": "ABBA",
        "year": 2008,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b8b70d474b7a8f27799e0d665e9b737e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/6/a/0/96a4f8f3fdc72bc05043e4e4896bebac.mp3?hdnea=exp=1788639333~acl=/api/1/1/9/6/a/0/96a4f8f3fdc72bc05043e4e4896bebac.mp3*~data=user_id=0,application_id=42~hmac=ae525429e4fd9b4741a61d0542705ba56ae907779aae0f72255f0e5ba6deb940"
      },
      {
        "id": "d70-50",
        "title": "I Want Your Love",
        "artist": "Chic",
        "year": 2013,
        "genre": "Disco",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7777aeda3765b54cd8373d86b837e6a5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/4/0/0/4406a9aee3915d0c1ed8f568d79e9237.mp3?hdnea=exp=1788639333~acl=/api/1/1/4/4/0/0/4406a9aee3915d0c1ed8f568d79e9237.mp3*~data=user_id=0,application_id=42~hmac=f05525bc506a9d1d507facbf60cab6df353a5df84e7e2e431ffecb12b4915c6b"
      }
    ]
  },
  {
    "id": "indie-alternative",
    "title": "Indie & Alternative Rock",
    "category": "genres",
    "description": "Arctic Monkeys, The Killers, Franz Ferdinand e The Strokes.",
    "badge": "Trendy",
    "cover": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "ind-1",
        "title": "Do I Wanna Know?",
        "artist": "Arctic Monkeys",
        "year": 2013,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/3/8/0/f380e7e1a00cd0149000196d2cef3f4c.mp3?hdnea=exp=1786710715~acl=/api/1/1/f/3/8/0/f380e7e1a00cd0149000196d2cef3f4c.mp3*~data=user_id=0,application_id=42~hmac=3aa4d56c75c333f668f5ff5090d9aead4fd05b5e7545ef589dc8bd268b2aea27"
      },
      {
        "id": "ind-2",
        "title": "Mr. Brightside",
        "artist": "The Killers",
        "year": 2004,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/f/2/0/0f2afffd5ba40fc616ee562cde64b94f.mp3?hdnea=exp=1786710715~acl=/api/1/1/0/f/2/0/0f2afffd5ba40fc616ee562cde64b94f.mp3*~data=user_id=0,application_id=42~hmac=eeafbe6f587bca4955e4b14b08275ee0d4f53ad8dc8f0d07325da96a82081132"
      },
      {
        "id": "ind-3",
        "title": "Take Me Out",
        "artist": "Franz Ferdinand",
        "year": 2004,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/8/3/0/a83b89c2a51d71e1ba168c4bd74d3c1e.mp3?hdnea=exp=1786710715~acl=/api/1/1/a/8/3/0/a83b89c2a51d71e1ba168c4bd74d3c1e.mp3*~data=user_id=0,application_id=42~hmac=cfb185dfd46d1a59d01e99bc0405099835050f8de8c5349d48e327e499958b2c"
      },
      {
        "id": "ind-4",
        "title": "Seven Nation Army",
        "artist": "The White Stripes",
        "year": 2003,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/d/e/0/7de8805c1993e802810d7ca37a615f81.mp3?hdnea=exp=1786710715~acl=/api/1/1/7/d/e/0/7de8805c1993e802810d7ca37a615f81.mp3*~data=user_id=0,application_id=42~hmac=20e10c7e8e3dfbca328d72b1cde3b11cbb97345f2994f77cc772a8c8505e95b4"
      },
      {
        "id": "ind-5",
        "title": "Last Nite",
        "artist": "The Strokes",
        "year": 2001,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/6/a/0/56a389988b6e92d834b033b067ccea0b.mp3?hdnea=exp=1786710715~acl=/api/1/1/5/6/a/0/56a389988b6e92d834b033b067ccea0b.mp3*~data=user_id=0,application_id=42~hmac=760e5639dc1fbe2539b33047f9dfda98be7947242f2d169f249ec6f5660fc78f"
      },
      {
        "id": "ind-6",
        "title": "Use Somebody",
        "artist": "Kings of Leon",
        "year": 2008,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/4/b/0/84bfbc6c14bb869f92ab2a84f9d5bac8.mp3?hdnea=exp=1786710715~acl=/api/1/1/8/4/b/0/84bfbc6c14bb869f92ab2a84f9d5bac8.mp3*~data=user_id=0,application_id=42~hmac=9aa8bc2a238a5d3130e683f63dcf1e225fb876c3c005636027d4833db66a56b2"
      },
      {
        "id": "ind-7",
        "title": "Sex on Fire",
        "artist": "Kings of Leon",
        "year": 2008,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/2/c/0/62cc28a50d49b82faedacb7752ad8891.mp3?hdnea=exp=1786710715~acl=/api/1/1/6/2/c/0/62cc28a50d49b82faedacb7752ad8891.mp3*~data=user_id=0,application_id=42~hmac=dfbbea0c06231442a4d5f1a60961a875e99b9942d656cb2dfbedb85b81e6f4ba"
      },
      {
        "id": "ind-8",
        "title": "Kids",
        "artist": "MGMT",
        "year": 2007,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/3/1/0/c31389823018dbdb8ce3864152712a35.mp3?hdnea=exp=1786710715~acl=/api/1/1/c/3/1/0/c31389823018dbdb8ce3864152712a35.mp3*~data=user_id=0,application_id=42~hmac=71004ee65a5f85a3f90545ff5752c29d097987487761113d83caf4f0c3b4de72"
      },
      {
        "id": "ind-9",
        "title": "Pompeii",
        "artist": "Bastille",
        "year": 2013,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/a/d/0/aadea7d50a71fb8f75cd5b49bf3b0fa1.mp3?hdnea=exp=1786710715~acl=/api/1/1/a/a/d/0/aadea7d50a71fb8f75cd5b49bf3b0fa1.mp3*~data=user_id=0,application_id=42~hmac=3e59322a1860c22d9d0037ec3068b475ecf001ae1ad52c62731188bef843a848"
      },
      {
        "id": "ind-10",
        "title": "Stressed Out",
        "artist": "Twenty One Pilots",
        "year": 2015,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/4/0/ee408e7fc092fc4d66c70688b5b9f37b.mp3?hdnea=exp=1786710715~acl=/api/1/1/e/e/4/0/ee408e7fc092fc4d66c70688b5b9f37b.mp3*~data=user_id=0,application_id=42~hmac=87ea2d9b7dff41a3849d7ed750a0ca7b61509302071ca37c8d402f0f788894a7"
      },
      {
        "id": "ind-11",
        "title": "Feel Good Inc.",
        "artist": "Gorillaz",
        "year": 2005,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/4/c/0/84cfe2b7fb50d7dc1da04db3bf01c07d.mp3?hdnea=exp=1786710716~acl=/api/1/1/8/4/c/0/84cfe2b7fb50d7dc1da04db3bf01c07d.mp3*~data=user_id=0,application_id=42~hmac=44a4798a8683b839858ae3826790f6c83de1f98a2f2cb3544e1ccc9b7d0ade98"
      },
      {
        "id": "ind-12",
        "title": "Little Talks",
        "artist": "Of Monsters and Men",
        "year": 2011,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/f/6/0/bf6c6c9357af965de4ef5669feb31fbf.mp3?hdnea=exp=1786710716~acl=/api/1/1/b/f/6/0/bf6c6c9357af965de4ef5669feb31fbf.mp3*~data=user_id=0,application_id=42~hmac=d40bbfa7f7aba5f87314afa6214b47da13bc451b991c82074727f7c5f2bd8ef0"
      },
      {
        "id": "ind-13",
        "title": "I Bet You Look Good on the Dancefloor",
        "artist": "Arctic Monkeys",
        "year": 2005,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/6/7/0/667973ef99272d4622145ddddd4f1201.mp3?hdnea=exp=1786710716~acl=/api/1/1/6/6/7/0/667973ef99272d4622145ddddd4f1201.mp3*~data=user_id=0,application_id=42~hmac=9eabb286c15d8fee3a3a626e1a7114f52070d901ce4971fd269c8c1781f463fe"
      },
      {
        "id": "ind-14",
        "title": "Somebody That I Used to Know",
        "artist": "Gotye",
        "year": 2011,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/b/4/0/fb41e6b3f36527de9f1ecca4a3e213df.mp3?hdnea=exp=1786710716~acl=/api/1/1/f/b/4/0/fb41e6b3f36527de9f1ecca4a3e213df.mp3*~data=user_id=0,application_id=42~hmac=7777e9c95024b9e4acfa23e2475dd82bf5ae2482811959a436df564ba173c6c8"
      },
      {
        "id": "ind-15",
        "title": "Shut Up and Dance",
        "artist": "WALK THE MOON",
        "year": 2014,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/b/0/a9bb99c03f2ecfde508ccc9ffa60421f.mp3?hdnea=exp=1786710716~acl=/api/1/1/a/9/b/0/a9bb99c03f2ecfde508ccc9ffa60421f.mp3*~data=user_id=0,application_id=42~hmac=0c6f1753df6c30eb6babd48a4d8a11cfa269202a7dcbc385d655020438d7f06e"
      },
      {
        "id": "ind-16",
        "title": "Radioactive",
        "artist": "Imagine Dragons",
        "year": 2012,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/3/2/0/43253a7dedefdd14b613839ab6b6e976.mp3?hdnea=exp=1786710716~acl=/api/1/1/4/3/2/0/43253a7dedefdd14b613839ab6b6e976.mp3*~data=user_id=0,application_id=42~hmac=42a2ec00302c15d03b77dd72d56e756307767d8a36b5650de3cdc6be409b96e1"
      },
      {
        "id": "ind-17",
        "title": "Riptide",
        "artist": "Vance Joy",
        "year": 2013,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1e/de/ea/1edeea50-c0f4-9d95-f0b8-b23a1af561db/mzaf_6343110017276582270.plus.aac.p.m4a"
      },
      {
        "id": "ind-18",
        "title": "Dog Days Are Over",
        "artist": "Florence + The Machine",
        "year": 2008,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8f/7e/a2/8f7ea289-f7c2-cba3-bbaa-feb9a52f3673/mzaf_6072891027828482967.plus.aac.p.m4a"
      },
      {
        "id": "ind-19",
        "title": "Island in the Sun",
        "artist": "Weezer",
        "year": 2001,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/c/0/0/4c04b1949ee94c585ecbf98aca43bcd4.mp3?hdnea=exp=1786710716~acl=/api/1/1/4/c/0/0/4c04b1949ee94c585ecbf98aca43bcd4.mp3*~data=user_id=0,application_id=42~hmac=49ee7e23adcf220c4876164677eaf74c6b95c3ad1df79a21f270e6ed389a9577"
      },
      {
        "id": "ind-20",
        "title": "Ho Hey",
        "artist": "The Lumineers",
        "year": 2012,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a1/9a/ee/a19aee35-cbb3-c47e-9e63-0b26473c5ff9/mzaf_11752666553586605937.plus.aac.p.m4a"
      },
      {
        "id": "ind-21",
        "title": "Fluorescent Adolescent",
        "artist": "Arctic Monkeys",
        "year": 2007,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/18/0e/11/180e1132-cdbf-e18b-87dc-b50b8a8e79ed/mzaf_8534528569570955656.plus.aac.p.m4a"
      },
      {
        "id": "ind-22",
        "title": "Somebody Told Me",
        "artist": "The Killers",
        "year": 2004,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3f/52/56/3f525606-7cb8-0292-51c1-c617802ba773/mzaf_433193577063250516.plus.aac.p.m4a"
      },
      {
        "id": "ind-23",
        "title": "Reptilia",
        "artist": "The Strokes",
        "year": 2003,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dc/fd/e4/dcfde43f-2c21-0778-f32a-f4380293f74f/mzaf_10139901306940368873.plus.aac.p.m4a"
      },
      {
        "id": "ind-24",
        "title": "Electric Feel",
        "artist": "MGMT",
        "year": 2007,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/e0/1d/4ae01dc9-fe01-1d85-3637-f8a0ec85f02b/mzaf_16939089744347690017.plus.aac.p.m4a"
      },
      {
        "id": "ind-25",
        "title": "R U Mine?",
        "artist": "Arctic Monkeys",
        "year": 2012,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/de/27/eb/de27eb8e-35cb-63ff-175d-35341bd5e268/mzaf_16379625954258685811.plus.aac.p.m4a"
      },
      {
        "id": "ind-26",
        "title": "Float On",
        "artist": "Modest Mouse",
        "year": 2004,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6a/d2/e6/6ad2e6b3-89e8-00b4-eb27-188b045ebd9d/mzaf_17149316111005193085.plus.aac.p.m4a"
      },
      {
        "id": "ind-27",
        "title": "Tongue Tied",
        "artist": "Grouplove",
        "year": 2011,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/52/ef/f0/52eff0fe-0590-e8b9-44a3-7fd09e60e32d/mzaf_15443957636918767990.plus.aac.p.m4a"
      },
      {
        "id": "ind-28",
        "title": "Sweet Disposition",
        "artist": "The Temper Trap",
        "year": 2008,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e2/07/b6/e207b61d-494a-f8c0-6533-832edf8b9268/mzaf_17037463273203694311.plus.aac.p.m4a"
      },
      {
        "id": "ind-29",
        "title": "Closer",
        "artist": "Tegan and Sara",
        "year": 2012,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/05/04/fe/0504fe18-daaf-d334-80d0-38880cd68165/mzaf_3096242620987121515.plus.aac.p.m4a"
      },
      {
        "id": "ind-30",
        "title": "Safe and Sound",
        "artist": "Capital Cities",
        "year": 2011,
        "genre": "Indie",
        "artworkUrl": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/dd/cd/ef/ddcdef0e-e19a-3e17-aaa7-74651919eaca/mzaf_2489256868357449114.plus.aac.p.m4a"
      },
      {
        "id": "ind-31",
        "title": "Brianstorm",
        "artist": "Arctic Monkeys",
        "year": 2007,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d7a4f9f1af8736457de34f28d50ef496/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/2/5/0/e25582132cf097d9dc673e7b014404f6.mp3?hdnea=exp=1788639333~acl=/api/1/1/e/2/5/0/e25582132cf097d9dc673e7b014404f6.mp3*~data=user_id=0,application_id=42~hmac=0d583fdf4c1069d9b62c461daf5f3fb84f8b3d4a0b5f153ca33046514bbf2b91"
      },
      {
        "id": "ind-32",
        "title": "Someday",
        "artist": "The Strokes",
        "year": 2001,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/700f0375d5ac8570f16a2c7eb128303f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/8/7/0/687ca82de37c2b71f2b8c5c6558a8fbc.mp3?hdnea=exp=1788639334~acl=/api/1/1/6/8/7/0/687ca82de37c2b71f2b8c5c6558a8fbc.mp3*~data=user_id=0,application_id=42~hmac=0e92778703fafb8bf06be82dd049e2a7922912f1bc0b0cd6e6a27b88525c5a83"
      },
      {
        "id": "ind-33",
        "title": "The Dark Of The Matinée",
        "artist": "Franz Ferdinand",
        "year": 2004,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f274cdbda80d97a785e001848378dd29/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/8/1/0/2818fc68f07764509614969c39818221.mp3?hdnea=exp=1788639334~acl=/api/1/1/2/8/1/0/2818fc68f07764509614969c39818221.mp3*~data=user_id=0,application_id=42~hmac=ae6537963d2152bde38db1f68610617bd7c682beb9da3f89ed9a2fb1dbc4d8ee"
      },
      {
        "id": "ind-34",
        "title": "1901",
        "artist": "Phoenix",
        "year": 2009,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c3bb90a6b2f333c1510a876236bacf0c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/f/2/0/af2aa8d5fc5627656575fb8ded0fa6e4.mp3?hdnea=exp=1788639335~acl=/api/1/1/a/f/2/0/af2aa8d5fc5627656575fb8ded0fa6e4.mp3*~data=user_id=0,application_id=42~hmac=ad501ec0d8a89a93a5be85f562b2cae711bfe474b4c16ddf76a2d95159a68a89"
      },
      {
        "id": "ind-35",
        "title": "Banquet",
        "artist": "Bloc Party",
        "year": 2005,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/10d12ba72bcb51710d6705af50a9226d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/a/b/0/7abc861ba576ef0a2b62d8a87935eda7.mp3?hdnea=exp=1788639335~acl=/api/1/1/7/a/b/0/7abc861ba576ef0a2b62d8a87935eda7.mp3*~data=user_id=0,application_id=42~hmac=4dd7d8f1a28f65314eaca58cd060a1266be2ff9ef8a6218bbaa301fbc0f778a4"
      },
      {
        "id": "ind-36",
        "title": "A-Punk",
        "artist": "Vampire Weekend",
        "year": 2008,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6fc963e3e5bd489dd82b0e02c3122792/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/f/c/0/0fcf43d840bf05f0786106fd4049b520.mp3?hdnea=exp=1788639335~acl=/api/1/1/0/f/c/0/0fcf43d840bf05f0786106fd4049b520.mp3*~data=user_id=0,application_id=42~hmac=c11f495202a7903a1ffe4bec394661f9fab88c50ce439658d04cc4dc578111d9"
      },
      {
        "id": "ind-37",
        "title": "Time to Pretend",
        "artist": "MGMT",
        "year": 2007,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/751372bcbd63a38e6ec6ef8bd448d687/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/f/2/0/5f2d758b2498c6721a9dd96764e29182.mp3?hdnea=exp=1788639336~acl=/api/1/1/5/f/2/0/5f2d758b2498c6721a9dd96764e29182.mp3*~data=user_id=0,application_id=42~hmac=406bd564497813c22cf77a1a304413e21426aefd506ab06a56e7228f9c57e1ba"
      },
      {
        "id": "ind-38",
        "title": "Pumped Up Kicks",
        "artist": "Foster the People",
        "year": 2011,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fc73624907c40d356ca26152754cef43/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/b/8/0/eb86469502f0571746a40d280c53bc5a.mp3?hdnea=exp=1788639336~acl=/api/1/1/e/b/8/0/eb86469502f0571746a40d280c53bc5a.mp3*~data=user_id=0,application_id=42~hmac=f41abd44f08357124706fbd8b59bf32a9b2e06ec0197dcfdf88318a616e20fce"
      },
      {
        "id": "ind-39",
        "title": "Maps",
        "artist": "Yeah Yeah Yeahs",
        "year": 2017,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/60ce1a5d2238dc4dc7a7024eb34aa841/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/5/3/0/d535e2c1d1eb1501ad7593b1d788755d.mp3?hdnea=exp=1788639336~acl=/api/1/1/d/5/3/0/d535e2c1d1eb1501ad7593b1d788755d.mp3*~data=user_id=0,application_id=42~hmac=cfb3cc94e33f921c36452132566268ed5616262840a7c7eb1ebb568c6d9d8b4f"
      },
      {
        "id": "ind-40",
        "title": "Evil",
        "artist": "Interpol",
        "year": 2005,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/421557b41380ab41d6dc23f0b5964df4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/6/9/0/569b822029e71038354050ddd16c5310.mp3?hdnea=exp=1788639337~acl=/api/1/1/5/6/9/0/569b822029e71038354050ddd16c5310.mp3*~data=user_id=0,application_id=42~hmac=45baf97af49c2373a3ab14a89e9cfb8636a3a92a329d028c30100fd576ed9b10"
      },
      {
        "id": "ind-41",
        "title": "Naive",
        "artist": "The Kooks",
        "year": 2008,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cc60dc84f76f498600c0c871eb9a0abf/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/3/0/c4383aa34c2b9fd29bb4bdd27c15ee71.mp3?hdnea=exp=1788639337~acl=/api/1/1/c/4/3/0/c4383aa34c2b9fd29bb4bdd27c15ee71.mp3*~data=user_id=0,application_id=42~hmac=2abfe48efba985051570b8d02f8ce3d035e8d99084494aefc850bae26d00c9a5"
      },
      {
        "id": "ind-42",
        "title": "What You Know",
        "artist": "Two Door Cinema Club",
        "year": 2010,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/15e23b5d33b0217b69826e1bea3fa1e8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/5/5/0/8554db04eee41e34229022d090fcf39e.mp3?hdnea=exp=1788639337~acl=/api/1/1/8/5/5/0/8554db04eee41e34229022d090fcf39e.mp3*~data=user_id=0,application_id=42~hmac=acc8150b303880d27da668d0e5ddcd54b5393d973f328f1796450425509706a5"
      },
      {
        "id": "ind-43",
        "title": "Mountain at My Gates",
        "artist": "Foals",
        "year": 2015,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d7024bf644f59bffc6a1706190fbb763/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/4/6/0/246300140bbb8549fd1e3d3d09b463f7.mp3?hdnea=exp=1788639338~acl=/api/1/1/2/4/6/0/246300140bbb8549fd1e3d3d09b463f7.mp3*~data=user_id=0,application_id=42~hmac=6e31f04bbee8539ebb83a43361b8c5b371feb6d3dcce3348bc54958952f2b83a"
      },
      {
        "id": "ind-44",
        "title": "Lonely Boy",
        "artist": "The Black Keys",
        "year": 2011,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f1e189eb93b8508d102931bcd9293ce8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/0/3/0/3031da4126a0dc1cb75571f31010248f.mp3?hdnea=exp=1788639338~acl=/api/1/1/3/0/3/0/3031da4126a0dc1cb75571f31010248f.mp3*~data=user_id=0,application_id=42~hmac=5c8174a7bed65e9c5a8d56b237599c07f9edf03d3aa868b33bc13a36e86a6407"
      },
      {
        "id": "ind-45",
        "title": "Shake It Out",
        "artist": "Florence + The Machine",
        "year": 2012,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/62d6168fd810482d09252025d9f69b0a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/6/7/0/267bb0494456fd37fac75bb06135df45.mp3?hdnea=exp=1788639338~acl=/api/1/1/2/6/7/0/267bb0494456fd37fac75bb06135df45.mp3*~data=user_id=0,application_id=42~hmac=2e4aedd9cff58827d2a708b9dd3b00109bdd2ee50d75543f96f345233badd32f"
      },
      {
        "id": "ind-46",
        "title": "Little Lion Man",
        "artist": "Mumford & Sons",
        "year": 2009,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9f351a90c45659fdf42680277be51b5c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/1/4/0/b1409645e6345cc390d19273ebad9af4.mp3?hdnea=exp=1788639339~acl=/api/1/1/b/1/4/0/b1409645e6345cc390d19273ebad9af4.mp3*~data=user_id=0,application_id=42~hmac=cf006cf1c31092aa1b56c50f00100cc47bb532c367f28710366435302944ed17"
      },
      {
        "id": "ind-47",
        "title": "Believer",
        "artist": "Imagine Dragons",
        "year": 2018,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/247b228179aea3b083eef43522b78b45/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/b/e/0/cbe9e3bf5b7fb4c15dc76f53c2221559.mp3?hdnea=exp=1788639339~acl=/api/1/1/c/b/e/0/cbe9e3bf5b7fb4c15dc76f53c2221559.mp3*~data=user_id=0,application_id=42~hmac=e669e6d0f2a38bd55abcbe74fc07115d8e7a934dbdb8d0730e56cb0b33ea0ae8"
      },
      {
        "id": "ind-48",
        "title": "Things We Lost In The Fire",
        "artist": "Bastille",
        "year": 2013,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2c9448000e49a026ea151de606b0d46c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/c/b/0/7cb20c65b2817f7a73107c5d3ef77848.mp3?hdnea=exp=1788639339~acl=/api/1/1/7/c/b/0/7cb20c65b2817f7a73107c5d3ef77848.mp3*~data=user_id=0,application_id=42~hmac=35bdeb5e10fe492f4612ab39f3339e1b4e655a287fc8ca69e4ab22ea5c78aa89"
      },
      {
        "id": "ind-49",
        "title": "Breezeblocks",
        "artist": "alt-J",
        "year": 2026,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/86ad6511178304fa3df49f716fdb4964/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/4/f/0/a4f064a2fcb370c71ce19e51c755f1fe.mp3?hdnea=exp=1788639339~acl=/api/1/1/a/4/f/0/a4f064a2fcb370c71ce19e51c755f1fe.mp3*~data=user_id=0,application_id=42~hmac=ecad7af32ae50c9a087bf8d3f7296bba14082aa1f0dd8ca0cc7df09212656a5a"
      },
      {
        "id": "ind-50",
        "title": "Ain't No Rest For The Wicked",
        "artist": "Cage The Elephant",
        "year": 2021,
        "genre": "Indie",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6f07141db40a7bb18e745ddd14a42c0f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/f/0/0/4f0082316b3eed93a55712f3f66035ea.mp3?hdnea=exp=1788639340~acl=/api/1/1/4/f/0/0/4f0082316b3eed93a55712f3f66035ea.mp3*~data=user_id=0,application_id=42~hmac=0f370e3d6fa2aad004711f7c0d0788fe5884ea4d14239b0b8aea1a9a80b70a7a"
      }
    ]
  },
  {
    "id": "cantautori-ita",
    "title": "Cantautori Italiani",
    "category": "italian",
    "description": "De André, Lucio Dalla, Francesco De Gregori e Rino Gaetano.",
    "badge": "Poesia",
    "unlockRequirement": {
      "deathParadeRecord": 10,
      "label": "10 in Death Parade 💀"
    },
    "cover": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "cnt-1",
        "title": "Ma il cielo è sempre più blu",
        "artist": "Rino Gaetano",
        "year": 1975,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/3/0/c7308644be9aca1a8f8718878b8b8d9b.mp3?hdnea=exp=1786710718~acl=/api/1/1/c/7/3/0/c7308644be9aca1a8f8718878b8b8d9b.mp3*~data=user_id=0,application_id=42~hmac=99bcd3f251e6dc617f6ec7df5dd8a9b661e453910cc2c97e024dc0e74d4fb1fa"
      },
      {
        "id": "cnt-2",
        "title": "Caruso",
        "artist": "Lucio Dalla",
        "year": 1986,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/a/2/0/5a20fe27077f1ea53494524c62a18223.mp3?hdnea=exp=1786710718~acl=/api/1/1/5/a/2/0/5a20fe27077f1ea53494524c62a18223.mp3*~data=user_id=0,application_id=42~hmac=452646eb1c1e8fb29c8fef3917cd1a228a6b749a56d5c8b9d71df8e420b827db"
      },
      {
        "id": "cnt-3",
        "title": "La Canzone di Marinella",
        "artist": "Fabrizio De André",
        "year": 1964,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/4/f/0/44fcef9bf60ec44db9b5aa9dd6b83ed3.mp3?hdnea=exp=1786710718~acl=/api/1/1/4/4/f/0/44fcef9bf60ec44db9b5aa9dd6b83ed3.mp3*~data=user_id=0,application_id=42~hmac=40bcce9209534b9f60d3650035ec2df9bbcdcf409f4c3aef4b0fe297c0a07b56"
      },
      {
        "id": "cnt-4",
        "title": "Generale",
        "artist": "Francesco De Gregori",
        "year": 1978,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/b/5/0/bb5aa635daa2e422edd50bc7423f0ad0.mp3?hdnea=exp=1786710718~acl=/api/1/1/b/b/5/0/bb5aa635daa2e422edd50bc7423f0ad0.mp3*~data=user_id=0,application_id=42~hmac=d75383eb91eb6dd84e9e1e56839b18662511a91d0442cf3f0ed6da0c6f43b14f"
      },
      {
        "id": "cnt-5",
        "title": "Centro di gravità permanente",
        "artist": "Franco Battiato",
        "year": 1981,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/3/0/d434a47ffb11f77c40e97deca4fda063.mp3?hdnea=exp=1786710718~acl=/api/1/1/d/4/3/0/d434a47ffb11f77c40e97deca4fda063.mp3*~data=user_id=0,application_id=42~hmac=022894facd4055a54fd56a77e0dbeddab705b03cf9b18d4a6cf4644638d48d2b"
      },
      {
        "id": "cnt-6",
        "title": "L'Emozione Non Ha Voce",
        "artist": "Adriano Celentano",
        "year": 1999,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/b/b/0/ebbf4b8fa18a8ca1a701ddc878dfb687.mp3?hdnea=exp=1786710718~acl=/api/1/1/e/b/b/0/ebbf4b8fa18a8ca1a701ddc878dfb687.mp3*~data=user_id=0,application_id=42~hmac=c7afeed0d21325193897d69841ec0fd64c4673338b7742c1312c4d5aac1aa429"
      },
      {
        "id": "cnt-7",
        "title": "Samarcanda",
        "artist": "Roberto Vecchioni",
        "year": 1977,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/f/4/0/bf42a217f2f1ad579a4f73cf310a7170.mp3?hdnea=exp=1786710718~acl=/api/1/1/b/f/4/0/bf42a217f2f1ad579a4f73cf310a7170.mp3*~data=user_id=0,application_id=42~hmac=c86b2cb8ee1cb4b47336049e5f128571abc9300a98f45761ffe2a5af44c681a0"
      },
      {
        "id": "cnt-8",
        "title": "Gianna",
        "artist": "Rino Gaetano",
        "year": 1978,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/c/1/0/1c14cd38784c652a9da133d418784498.mp3?hdnea=exp=1786710718~acl=/api/1/1/1/c/1/0/1c14cd38784c652a9da133d418784498.mp3*~data=user_id=0,application_id=42~hmac=cbc9b9e57586edcfadb7e1ce0f1d914901eb467a3d4dec0bca0eecc1a449398f"
      },
      {
        "id": "cnt-9",
        "title": "Cervo a Primavera",
        "artist": "Riccardo Cocciante",
        "year": 1980,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/8/c/0/48ca029c70c6a822546f9dec8258a386.mp3?hdnea=exp=1786710718~acl=/api/1/1/4/8/c/0/48ca029c70c6a822546f9dec8258a386.mp3*~data=user_id=0,application_id=42~hmac=9e8606dcef770a96da5b6bb1dc03c4c551f689c8ea06c631ec85c70ba13aa0e5"
      },
      {
        "id": "cnt-10",
        "title": "La Donna Cannone",
        "artist": "Francesco De Gregori",
        "year": 1983,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/f/7/0/ef7c58a2a1ef37b51baec5bdf3a3e4bf.mp3?hdnea=exp=1786710718~acl=/api/1/1/e/f/7/0/ef7c58a2a1ef37b51baec5bdf3a3e4bf.mp3*~data=user_id=0,application_id=42~hmac=d49f1049fa11ec2d3aa76906b09f81dcea05c50334ee2e9ccae32e1e1d909a7c"
      },
      {
        "id": "cnt-11",
        "title": "Piazza Grande",
        "artist": "Lucio Dalla",
        "year": 1972,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/b/6/0/0b6cdbdd860fe8bbf00c19daf7293665.mp3?hdnea=exp=1786710718~acl=/api/1/1/0/b/6/0/0b6cdbdd860fe8bbf00c19daf7293665.mp3*~data=user_id=0,application_id=42~hmac=811de4d9a84fcea59f891f2e899d529c3f0766633e919193eb84599f2a5e928f"
      },
      {
        "id": "cnt-12",
        "title": "Via del Campo",
        "artist": "Fabrizio De André",
        "year": 1967,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/a/6/0/7a601d7678352c967fcf45e8284d9729.mp3?hdnea=exp=1786710718~acl=/api/1/1/7/a/6/0/7a601d7678352c967fcf45e8284d9729.mp3*~data=user_id=0,application_id=42~hmac=3541bf751d0bc1559416bbe1d29d6c77ae08874398d2c561d31a49b998b7612c"
      },
      {
        "id": "cnt-13",
        "title": "Bocca di Rosa",
        "artist": "Fabrizio De André",
        "year": 1967,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/7/b/0/a7b6315a7c04ec96ac0124974fde489e.mp3?hdnea=exp=1786710718~acl=/api/1/1/a/7/b/0/a7b6315a7c04ec96ac0124974fde489e.mp3*~data=user_id=0,application_id=42~hmac=ca195f6138ad8094421a98727a889bf83641212472a0c9ce31f2c4fd665808e6"
      },
      {
        "id": "cnt-14",
        "title": "La Cura",
        "artist": "Franco Battiato",
        "year": 1996,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/1/7/0/a1774d25361574f190c5a33c56c20743.mp3?hdnea=exp=1786710718~acl=/api/1/1/a/1/7/0/a1774d25361574f190c5a33c56c20743.mp3*~data=user_id=0,application_id=42~hmac=8040138b15bb1bd099f6ca1e6c97cde397834a551175f237b31c0cdb994a3e5f"
      },
      {
        "id": "cnt-15",
        "title": "Spaccacuore",
        "artist": "Samuele Bersani",
        "year": 1994,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/8/a/0/98adad5f1e5f88ed223c1705b7968a98.mp3?hdnea=exp=1786710718~acl=/api/1/1/9/8/a/0/98adad5f1e5f88ed223c1705b7968a98.mp3*~data=user_id=0,application_id=42~hmac=854ebfb1beadf650f69d7656ed152b5313062be3710778eae51f67ba1cd44086"
      },
      {
        "id": "cnt-16",
        "title": "L'Anno che Verrà",
        "artist": "Lucio Dalla",
        "year": 1979,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/7/0/6374dda3ca711718ee3f7c010cff1723.mp3?hdnea=exp=1786710719~acl=/api/1/1/6/3/7/0/6374dda3ca711718ee3f7c010cff1723.mp3*~data=user_id=0,application_id=42~hmac=1e7edb0e65e503ecd8cb10a8ad3984f809dfe75b47b691b230634598d43dcc2c"
      },
      {
        "id": "cnt-17",
        "title": "Volta la Carta",
        "artist": "Fabrizio De André",
        "year": 1978,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/2/f/0/32f0ac44b9fc967c37839e9292dc5e6b.mp3?hdnea=exp=1786710719~acl=/api/1/1/3/2/f/0/32f0ac44b9fc967c37839e9292dc5e6b.mp3*~data=user_id=0,application_id=42~hmac=b9e1d5266b75e4e245a07e137e3cc997338ee8d1bade8a7a6e23ecc0fc62c62f"
      },
      {
        "id": "cnt-18",
        "title": "Buonanotte Fiorellino",
        "artist": "Francesco De Gregori",
        "year": 1975,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/9/2/0/0927b4e1ef1db382329a91ab259d9c7d.mp3?hdnea=exp=1786710719~acl=/api/1/1/0/9/2/0/0927b4e1ef1db382329a91ab259d9c7d.mp3*~data=user_id=0,application_id=42~hmac=e5323b685f140424918a409c1160671d9c13e3a94986963d40edae8e5c47485d"
      },
      {
        "id": "cnt-19",
        "title": "Margherita",
        "artist": "Riccardo Cocciante",
        "year": 1976,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/5/a/0/35ab21c6800ba44ef912611c20f7f095.mp3?hdnea=exp=1786710719~acl=/api/1/1/3/5/a/0/35ab21c6800ba44ef912611c20f7f095.mp3*~data=user_id=0,application_id=42~hmac=60b6d271546a4db508b56a554f82e0abe739413e1742c342ed101f5ddc90218c"
      },
      {
        "id": "cnt-20",
        "title": "A Mano A Mano",
        "artist": "Rino Gaetano",
        "year": 1978,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/9/c/0/59c00d6555e48c628f3bbd2ad69596a4.mp3?hdnea=exp=1786710719~acl=/api/1/1/5/9/c/0/59c00d6555e48c628f3bbd2ad69596a4.mp3*~data=user_id=0,application_id=42~hmac=3e551d594eddaa94fe8ec0faa0b1534f6bde7df31aa911177de09c95531533af"
      },
      {
        "id": "cnt-21",
        "title": "Nessuno mi può giudicare",
        "artist": "Caterina Caselli",
        "year": 1966,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/a/4/0/ca4f98c0c928bb49c158a642e29b78f3.mp3?hdnea=exp=1786710719~acl=/api/1/1/c/a/4/0/ca4f98c0c928bb49c158a642e29b78f3.mp3*~data=user_id=0,application_id=42~hmac=31e9551fe1e8eab7c8fb9cdd00c90a16fd37b4de616b88334f811a15103b4abb"
      },
      {
        "id": "cnt-22",
        "title": "Un'avventura",
        "artist": "Lucio Battisti",
        "year": 1969,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/1/d/0/41d9470e7ca6b32fa1ad1c2473212a4b.mp3?hdnea=exp=1786710719~acl=/api/1/1/4/1/d/0/41d9470e7ca6b32fa1ad1c2473212a4b.mp3*~data=user_id=0,application_id=42~hmac=222177e3cdd82b0af324c9cff339e659ffdfe6a86179c7c6fd4847ada3580361"
      },
      {
        "id": "cnt-23",
        "title": "Mi ritorni in mente",
        "artist": "Lucio Battisti",
        "year": 1969,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/c/2/0/1c2cc6c5cc1eb8b910416bc5c38c8b5e.mp3?hdnea=exp=1786710719~acl=/api/1/1/1/c/2/0/1c2cc6c5cc1eb8b910416bc5c38c8b5e.mp3*~data=user_id=0,application_id=42~hmac=7387dbaf044d7773ac451d3ab4971813f36bf6276d0af84380ea8bc9f41cdb96"
      },
      {
        "id": "cnt-24",
        "title": "E penso a te",
        "artist": "Lucio Battisti",
        "year": 1970,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/2/8/0/5284a18b80b7c8ef06eaa8dde4ca2626.mp3?hdnea=exp=1786710719~acl=/api/1/1/5/2/8/0/5284a18b80b7c8ef06eaa8dde4ca2626.mp3*~data=user_id=0,application_id=42~hmac=61c99086a0fb028b88fbeb93cf1bdeb0e37514efbe6736c129f12e25e891ff8b"
      },
      {
        "id": "cnt-25",
        "title": "Emozioni",
        "artist": "Lucio Battisti",
        "year": 1970,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/e/6/0/3e646914656f89405f798c947e38a6ec.mp3?hdnea=exp=1786710719~acl=/api/1/1/3/e/6/0/3e646914656f89405f798c947e38a6ec.mp3*~data=user_id=0,application_id=42~hmac=1df37e8512e518bc47a3a3862f4ad9cdcb0e7c9a229ae3509ba590c3fc5e44ba"
      },
      {
        "id": "cnt-26",
        "title": "I giardini di marzo",
        "artist": "Lucio Battisti",
        "year": 1972,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/2/8/0/128b9686e6f49b9d7e10dfaee97ff7be.mp3?hdnea=exp=1786710719~acl=/api/1/1/1/2/8/0/128b9686e6f49b9d7e10dfaee97ff7be.mp3*~data=user_id=0,application_id=42~hmac=ac45631b3454e6c23cf778f91f59627a82d47ba510b98d98fe7021b597447805"
      },
      {
        "id": "cnt-27",
        "title": "Ancora tu",
        "artist": "Lucio Battisti",
        "year": 1976,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/a/f/0/9af320372c2e315c52642d5e0d31ebc1.mp3?hdnea=exp=1786710719~acl=/api/1/1/9/a/f/0/9af320372c2e315c52642d5e0d31ebc1.mp3*~data=user_id=0,application_id=42~hmac=cb10776af6b89658e1a18faa4beaccb051bfb532b4cb41671abedfa2a3a32fe9"
      },
      {
        "id": "cnt-28",
        "title": "Con il rosa del mattino",
        "artist": "PFM",
        "year": 1972,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/82/a9/71/82a971bc-1752-7a37-6485-f9539bdc0563/mzaf_12218132190315087036.plus.aac.p.m4a"
      },
      {
        "id": "cnt-29",
        "title": "Impressioni di settembre",
        "artist": "PFM",
        "year": 1971,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/0/9/0/b09f46c1a84b0837661bf62d17efdeb8.mp3?hdnea=exp=1786710719~acl=/api/1/1/b/0/9/0/b09f46c1a84b0837661bf62d17efdeb8.mp3*~data=user_id=0,application_id=42~hmac=8ce8f274ec3c35966bc4854ce1150d82347379b610bde3442ddf155c649b45fb"
      },
      {
        "id": "cnt-30",
        "title": "Lugano addio",
        "artist": "Ivan Graziani",
        "year": 1977,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/8/0/08809bbd936e8d74d8017132e90846af.mp3?hdnea=exp=1786710719~acl=/api/1/1/0/8/8/0/08809bbd936e8d74d8017132e90846af.mp3*~data=user_id=0,application_id=42~hmac=74756caeb0e6e60eb71997791b35f0c2de365819b89750de3c77ece5a8d4eae7"
      },
      {
        "id": "cnt-31",
        "title": "Il pescatore Live",
        "artist": "Fabrizio De André",
        "year": 1979,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b84a69f7e508f38588f2eb89f3a652ed/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/8/8/0/b88cac1ad479fd306bcf2e3831b63c7e.mp3?hdnea=exp=1788639340~acl=/api/1/1/b/8/8/0/b88cac1ad479fd306bcf2e3831b63c7e.mp3*~data=user_id=0,application_id=42~hmac=de5b16b4634e33a96cf344965270b2cfed442a62176ee3c45627b8731e029eb9"
      },
      {
        "id": "cnt-32",
        "title": "Il testamento di Tito",
        "artist": "Fabrizio De André",
        "year": 1970,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7cbac3fba0f7f9603dd1c5b8fde6daf9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/c/d/0/8cd55a05d6fef6c598d582e966dce108.mp3?hdnea=exp=1788639341~acl=/api/1/1/8/c/d/0/8cd55a05d6fef6c598d582e966dce108.mp3*~data=user_id=0,application_id=42~hmac=d4ac6e9bde258398da5d629501dcfdee0573f4fb42207f26135f5fb6b7312af8"
      },
      {
        "id": "cnt-33",
        "title": "Crêuza de mä Alternative Mix 2014",
        "artist": "Fabrizio De André",
        "year": 2014,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3333520dfa02396b7bc56984de87c284/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/0/8/0/e08f0034e92aeffa515386b8e9bb6a2a.mp3?hdnea=exp=1788639341~acl=/api/1/1/e/0/8/0/e08f0034e92aeffa515386b8e9bb6a2a.mp3*~data=user_id=0,application_id=42~hmac=867635c37445720bbdedb816773dfe0bc97374a9d7b9c63eda4c82e717b9d318"
      },
      {
        "id": "cnt-34",
        "title": "Disperato erotico stomp",
        "artist": "Lucio Dalla",
        "year": 2002,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8f273ec611cd808f879ea84d54c639c5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/3/d/0/f3d4a937ed8bbcb9184f183f102e8b44.mp3?hdnea=exp=1788639341~acl=/api/1/1/f/3/d/0/f3d4a937ed8bbcb9184f183f102e8b44.mp3*~data=user_id=0,application_id=42~hmac=b1ce3b0d303fa08a4671c0c7228415f6c9fbd21909354fd93378c80cb13191be"
      },
      {
        "id": "cnt-35",
        "title": "Se io fossi un angelo Live",
        "artist": "Lucio Dalla",
        "year": 1986,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3f531fd546c16c1e7db4f6d4fded99d6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/a/f/0/8afac757ab44f9a17f574868307f068f.mp3?hdnea=exp=1788639342~acl=/api/1/1/8/a/f/0/8afac757ab44f9a17f574868307f068f.mp3*~data=user_id=0,application_id=42~hmac=159fa6a7d8ee78d71620f60cc7dbe458ce50ddb0f623bc34d1b4c5b2bea7fbf0"
      },
      {
        "id": "cnt-36",
        "title": "Il bandito e il campione Original Studio Version",
        "artist": "Francesco De Gregori",
        "year": 1993,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/936453368f58b95926bd15b226a6af9b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/c/8/0/4c8192bd849968cb2e46695d1ed4d900.mp3?hdnea=exp=1788639342~acl=/api/1/1/4/c/8/0/4c8192bd849968cb2e46695d1ed4d900.mp3*~data=user_id=0,application_id=42~hmac=ee796af55f6e0ffc935ca2f73199c1ef5736c25d9438cbdfed2da61a0e92fa16"
      },
      {
        "id": "cnt-37",
        "title": "Roma Capoccia",
        "artist": "Antonello Venditti",
        "year": 2007,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a907771a9d60e698dd966b01e4576fd7/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/8/4/0/984c19af93aa33f92266126eb6f79777.mp3?hdnea=exp=1788639342~acl=/api/1/1/9/8/4/0/984c19af93aa33f92266126eb6f79777.mp3*~data=user_id=0,application_id=42~hmac=adc4d3cf59ee3e38bb5f9cfeb4265be64b61908534fc65343b97b99f95da1fe4"
      },
      {
        "id": "cnt-38",
        "title": "Ricordati di me",
        "artist": "Antonello Venditti",
        "year": 2012,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/28f7225cd1da2ad770b800b82f4a3c81/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/1/8/0/a18bedf0061b93b176196799ce5bc1fe.mp3?hdnea=exp=1788639343~acl=/api/1/1/a/1/8/0/a18bedf0061b93b176196799ce5bc1fe.mp3*~data=user_id=0,application_id=42~hmac=f41d49a1a4a627b3ec250af0f4c84b4bb1e9376536c40f76ee14db0b0a5cc649"
      },
      {
        "id": "cnt-39",
        "title": "Ci vorrebbe un amico",
        "artist": "Antonello Venditti",
        "year": 2012,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/28f7225cd1da2ad770b800b82f4a3c81/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/e/0/d4eab07bd934c532a5407e54ec5ae00a.mp3?hdnea=exp=1788639343~acl=/api/1/1/d/4/e/0/d4eab07bd934c532a5407e54ec5ae00a.mp3*~data=user_id=0,application_id=42~hmac=8ca229f284629127b1056002777cd8b6231282e4ef5bc198b317ac39db894a97"
      },
      {
        "id": "cnt-40",
        "title": "Bomba o non bomba Live",
        "artist": "Antonello Venditti",
        "year": 2012,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/28f7225cd1da2ad770b800b82f4a3c81/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/d/3/0/3d3417075e4f43f402970fb51188f397.mp3?hdnea=exp=1788639343~acl=/api/1/1/3/d/3/0/3d3417075e4f43f402970fb51188f397.mp3*~data=user_id=0,application_id=42~hmac=0f8e017eccaf809e372caea53ea042349414109dbdd114b1dc6d5121da2092fc"
      },
      {
        "id": "cnt-41",
        "title": "Cuccurucucù",
        "artist": "Franco Battiato",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f61b7bb95d2fc1b7aec6ba310cb1455d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/1/8/0/91843a747a2937f86ddd1ef7dd9d06cb.mp3?hdnea=exp=1788639344~acl=/api/1/1/9/1/8/0/91843a747a2937f86ddd1ef7dd9d06cb.mp3*~data=user_id=0,application_id=42~hmac=a3d5819c25999375117afa97c9c1a2128c5a34415df6c7ba2b975a188ca8d492"
      },
      {
        "id": "cnt-42",
        "title": "Bandiera Bianca",
        "artist": "Franco Battiato",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f61b7bb95d2fc1b7aec6ba310cb1455d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/c/7/0/7c7c7a0f476738b72fd284cc280c4238.mp3?hdnea=exp=1788639344~acl=/api/1/1/7/c/7/0/7c7c7a0f476738b72fd284cc280c4238.mp3*~data=user_id=0,application_id=42~hmac=d5b28948dad9c4d7cdb27ef50173938c807c2db058e9c867067e9c9298e298f9"
      },
      {
        "id": "cnt-43",
        "title": "La Locomotiva",
        "artist": "Francesco Guccini",
        "year": 2011,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/aea758ae811d27456a40f43a9fbf2717/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/5/0/0/950f4c64a735bac36867a017c5b0ba5b.mp3?hdnea=exp=1788639345~acl=/api/1/1/9/5/0/0/950f4c64a735bac36867a017c5b0ba5b.mp3*~data=user_id=0,application_id=42~hmac=63a416c4f65ecf671c13ce90de91c1007687bdd02deabd5cf94e1e87cced87af"
      },
      {
        "id": "cnt-44",
        "title": "Cirano",
        "artist": "Francesco Guccini",
        "year": 2003,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ef4474008a0d41215a42db036f6f4275/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/6/0/e965e5a4068fba236da06e743dbd2685.mp3?hdnea=exp=1788639345~acl=/api/1/1/e/9/6/0/e965e5a4068fba236da06e743dbd2685.mp3*~data=user_id=0,application_id=42~hmac=6992976f00683a86457653cb215238a0d09040768a8a0900125e68a6824990c3"
      },
      {
        "id": "cnt-45",
        "title": "Luci a San Siro",
        "artist": "Roberto Vecchioni",
        "year": 2008,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ba6b9afbcf43078fb6658a4252ed3345/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/0/d/0/c0df7077f68b49cec2384c36328e1aba.mp3?hdnea=exp=1788639345~acl=/api/1/1/c/0/d/0/c0df7077f68b49cec2384c36328e1aba.mp3*~data=user_id=0,application_id=42~hmac=4d9f6938c781a04dfd0ddc0d5db59a1aca70be09e86fae82642f336fd95160fa"
      },
      {
        "id": "cnt-46",
        "title": "Chiamami Ancora Amore",
        "artist": "Roberto Vecchioni",
        "year": 2011,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b11aee1f28399dbf4c3b7531ff42c51c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/b/5/0/bb518ed02825d2ec7e1a8075eb7f616d.mp3?hdnea=exp=1788639346~acl=/api/1/1/b/b/5/0/bb518ed02825d2ec7e1a8075eb7f616d.mp3*~data=user_id=0,application_id=42~hmac=aa660709b1bc90de8abcbb09c4ebc31f811dcb7bfe7538da0e3c99a0031e3690"
      },
      {
        "id": "cnt-47",
        "title": "Napule è",
        "artist": "Pino Daniele",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/843182f2c74a08dfffc9760777896778/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/2/b/0/22bf9b7331813e9489fb7693a286161c.mp3?hdnea=exp=1788639346~acl=/api/1/1/2/2/b/0/22bf9b7331813e9489fb7693a286161c.mp3*~data=user_id=0,application_id=42~hmac=c7a0c13cee74e9c0f5b1759c3433e5ca2b770d4e22eabe4873ccd0100b7a3e79"
      },
      {
        "id": "cnt-48",
        "title": "Yes I Know My Way",
        "artist": "Pino Daniele",
        "year": 1981,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fa551f8193ab3e1c4058db7ac1fc5ca4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/9/0/0/59043c24da18594cd99d6cbbd6a0d6de.mp3?hdnea=exp=1788639347~acl=/api/1/1/5/9/0/0/59043c24da18594cd99d6cbbd6a0d6de.mp3*~data=user_id=0,application_id=42~hmac=215431a2d293cadc5f9396754ba8cdd0d8a3f9180a27e567f97d49e6c9b55779"
      },
      {
        "id": "cnt-49",
        "title": "Quanno Chiove",
        "artist": "Pino Daniele",
        "year": 2008,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/1a2a6ef83a83ed3480767512b628e172/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/e/0/50eb392286b451f84c119392dacb581d.mp3?hdnea=exp=1788639347~acl=/api/1/1/5/0/e/0/50eb392286b451f84c119392dacb581d.mp3*~data=user_id=0,application_id=42~hmac=db2a1eb9357d4f89a8a2a56fb733a4239158a08106b8e2587bd932da6bfdbf32"
      },
      {
        "id": "cnt-50",
        "title": "Je So' Pazzo",
        "artist": "Pino Daniele",
        "year": 2008,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7b81c44be470d4c769e238d9ab93f0e9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/2/8/0/428795bb779e8fac77943415298f38c0.mp3?hdnea=exp=1788639347~acl=/api/1/1/4/2/8/0/428795bb779e8fac77943415298f38c0.mp3*~data=user_id=0,application_id=42~hmac=791d765a35009549d156d036a36935a94b694ac87c27690c4018251d11444a43"
      }
    ]
  },
  {
    "id": "reggaeton-latin",
    "title": "Reggaeton & Hit Latine",
    "category": "genres",
    "description": "Daddy Yankee, Bad Bunny, Don Omar e J Balvin.",
    "badge": "Caliente",
    "cover": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "lat-1",
        "title": "Gasolina",
        "artist": "Daddy Yankee",
        "year": 2004,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/5/5/0/e55128c0f638a66732eca1fbd37038fc.mp3?hdnea=exp=1786710720~acl=/api/1/1/e/5/5/0/e55128c0f638a66732eca1fbd37038fc.mp3*~data=user_id=0,application_id=42~hmac=c347dbe52500380504ef6d255a12bd52023bc92e39548abe465cff25232b3010"
      },
      {
        "id": "lat-2",
        "title": "Danza Kuduro",
        "artist": "Don Omar ft. Lucenzo",
        "year": 2010,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/c/3/0/1c3da05cb48412e0b0573117325b9d23.mp3?hdnea=exp=1786710720~acl=/api/1/1/1/c/3/0/1c3da05cb48412e0b0573117325b9d23.mp3*~data=user_id=0,application_id=42~hmac=e92d8c7a07043de554a9440e8b8d633852fee41f9f2066846ca1a3e70953d324"
      },
      {
        "id": "lat-3",
        "title": "Mi Gente",
        "artist": "J Balvin",
        "year": 2017,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/2/1/0/821cd59abdfffb4e2f05257003755b3a.mp3?hdnea=exp=1786710720~acl=/api/1/1/8/2/1/0/821cd59abdfffb4e2f05257003755b3a.mp3*~data=user_id=0,application_id=42~hmac=0b06f3ae9136b2fac01915589e6446e040b7688d3a7334e5be4e0ed7946f5464"
      },
      {
        "id": "lat-4",
        "title": "Despacito",
        "artist": "Luis Fonsi",
        "year": 2017,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/6/8/0/c68396f0684b99d05f5b353fb3c4c888.mp3?hdnea=exp=1786710720~acl=/api/1/1/c/6/8/0/c68396f0684b99d05f5b353fb3c4c888.mp3*~data=user_id=0,application_id=42~hmac=ff95b80d87e3f4b2178be2b3b91913f405642a1851d83af63e8121a67476e119"
      },
      {
        "id": "lat-5",
        "title": "Bailando",
        "artist": "Enrique Iglesias",
        "year": 2014,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/3/0/0834e84c3c2f9e6ab92bd6200ce795d1.mp3?hdnea=exp=1786710720~acl=/api/1/1/0/8/3/0/0834e84c3c2f9e6ab92bd6200ce795d1.mp3*~data=user_id=0,application_id=42~hmac=82016cf16af311a7fccfcf5bdb8ba65074853b8e9f118cfd97cf1124f9ddca64"
      },
      {
        "id": "lat-6",
        "title": "Livin' la Vida Loca",
        "artist": "Ricky Martin",
        "year": 1999,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/b/0/0/db0b7add4623771c3a2a3a1ccaaee490.mp3?hdnea=exp=1786710720~acl=/api/1/1/d/b/0/0/db0b7add4623771c3a2a3a1ccaaee490.mp3*~data=user_id=0,application_id=42~hmac=48a0d3f4108b9ec6874ce4fe24b495c44d86586955f32ce22bb4fa9413b94a07"
      },
      {
        "id": "lat-7",
        "title": "Smooth",
        "artist": "Santana",
        "year": 1999,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/6/6/0/066818622bab6266aa80190fa52124cc.mp3?hdnea=exp=1786710720~acl=/api/1/1/0/6/6/0/066818622bab6266aa80190fa52124cc.mp3*~data=user_id=0,application_id=42~hmac=8df0108367d5831735bd536e46f4cba4c023a5b6c9850b8815482d55f574d8bd"
      },
      {
        "id": "lat-8",
        "title": "Waka Waka (This Time for Africa)",
        "artist": "Shakira",
        "year": 2010,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/1/0/0/4107a09dd93ef52169edd819029f3ac7.mp3?hdnea=exp=1786710720~acl=/api/1/1/4/1/0/0/4107a09dd93ef52169edd819029f3ac7.mp3*~data=user_id=0,application_id=42~hmac=a7b97737fb6ac340555b4bb1731949acf0c0861683c9df7faceb59c663c91643"
      },
      {
        "id": "lat-9",
        "title": "La Gozadera",
        "artist": "Gente de Zona",
        "year": 2015,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/7/0/6471fe45080cc14fbf3769aae96dabe1.mp3?hdnea=exp=1786710720~acl=/api/1/1/6/4/7/0/6471fe45080cc14fbf3769aae96dabe1.mp3*~data=user_id=0,application_id=42~hmac=78b81637bad84e78f182b1172a32b282529f2ee8f79b79a8a2c19ec4eaec03a7"
      },
      {
        "id": "lat-10",
        "title": "Pepas",
        "artist": "Farruko",
        "year": 2021,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/a/0/2dae9a42ff4cf95f5fe860e3cc3d319e.mp3?hdnea=exp=1786710720~acl=/api/1/1/2/d/a/0/2dae9a42ff4cf95f5fe860e3cc3d319e.mp3*~data=user_id=0,application_id=42~hmac=9d426e71d8354d21ed4830dbbd0a532abd512a843f998c2e6e297b95ebd3a5fb"
      },
      {
        "id": "lat-11",
        "title": "Tacones Rojos",
        "artist": "Sebastián Yatra",
        "year": 2021,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/5/0/805dfef30c1633fe159012644f3df5fd.mp3?hdnea=exp=1786710721~acl=/api/1/1/8/0/5/0/805dfef30c1633fe159012644f3df5fd.mp3*~data=user_id=0,application_id=42~hmac=e44ff9f38432e43b36f4b89d23fb3306bdb469f7884c21b62a1a50479c14063c"
      },
      {
        "id": "lat-12",
        "title": "Tusa",
        "artist": "KAROL G & Nicki Minaj",
        "year": 2019,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/9/5/0/295fb558a4b893d959b8a985d12a38b7.mp3?hdnea=exp=1786710721~acl=/api/1/1/2/9/5/0/295fb558a4b893d959b8a985d12a38b7.mp3*~data=user_id=0,application_id=42~hmac=e5a02ed4c6d09351583d1214d6c2b3ec42842409d3595900d0a6bf9092e0b0e9"
      },
      {
        "id": "lat-13",
        "title": "Hips Don't Lie",
        "artist": "Shakira",
        "year": 2006,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/0/a/0/b0a417d511b2eb577e53cae9f8657b23.mp3?hdnea=exp=1786710721~acl=/api/1/1/b/0/a/0/b0a417d511b2eb577e53cae9f8657b23.mp3*~data=user_id=0,application_id=42~hmac=88798ebffb440f3bc5d06d0ce2fc655d677002315dca0d744d1d04f82218261b"
      },
      {
        "id": "lat-14",
        "title": "Chantaje",
        "artist": "Shakira",
        "year": 2016,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/1/2/0/512b41d3e0539a12aaf8c8d60ad806f9.mp3?hdnea=exp=1786710720~acl=/api/1/1/5/1/2/0/512b41d3e0539a12aaf8c8d60ad806f9.mp3*~data=user_id=0,application_id=42~hmac=f22aab6c228a5120d6f5675aa89b391f035a2e9135560ba81760f212df538d2c"
      },
      {
        "id": "lat-15",
        "title": "Calma (Remix)",
        "artist": "Pedro Capó",
        "year": 2018,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/7/e/0/b7e58ebb1bbd96432385103d15ef981e.mp3?hdnea=exp=1786710720~acl=/api/1/1/b/7/e/0/b7e58ebb1bbd96432385103d15ef981e.mp3*~data=user_id=0,application_id=42~hmac=8a39f16d6b94220ef1ff41a8c0186eabde51c5bb90e81c0dc4e5950e1d982b20"
      },
      {
        "id": "lat-16",
        "title": "Con Calma",
        "artist": "Daddy Yankee",
        "year": 2019,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/3/0/9c3a959ce9280946af29956c76e1214e.mp3?hdnea=exp=1786710721~acl=/api/1/1/9/c/3/0/9c3a959ce9280946af29956c76e1214e.mp3*~data=user_id=0,application_id=42~hmac=7d2d51f9099fd7769833efb69521688b5037fa7020f8f6d29511f2f8845dc104"
      },
      {
        "id": "lat-17",
        "title": "Hawái",
        "artist": "Maluma",
        "year": 2020,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/a/2/0/4a279db1b065129bace7c95941dbcacc.mp3?hdnea=exp=1786710721~acl=/api/1/1/4/a/2/0/4a279db1b065129bace7c95941dbcacc.mp3*~data=user_id=0,application_id=42~hmac=ff8e3b527a5427159aeb90b7eb6418c05089da0bd0df11c20bf81ba636e01589"
      },
      {
        "id": "lat-18",
        "title": "Dakiti",
        "artist": "Bad Bunny",
        "year": 2020,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/a/5/0/ca53d105c0f8963a28ce1f04879e86be.mp3?hdnea=exp=1786710721~acl=/api/1/1/c/a/5/0/ca53d105c0f8963a28ce1f04879e86be.mp3*~data=user_id=0,application_id=42~hmac=7a06fccc9264e88fb70813f6e6a11f0711436077fbfd92c9f4006a41c93b1ba5"
      },
      {
        "id": "lat-19",
        "title": "Subeme la Radio",
        "artist": "Enrique Iglesias",
        "year": 2017,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/5/d/0/45d2096b221ae8d288d87882d8c1a1a8.mp3?hdnea=exp=1786710721~acl=/api/1/1/4/5/d/0/45d2096b221ae8d288d87882d8c1a1a8.mp3*~data=user_id=0,application_id=42~hmac=b230011256f7eb9a753cef0258be1cf24ba0c9d6d894bd759c005f52c41ff442"
      },
      {
        "id": "lat-20",
        "title": "Vivir Mi Vida",
        "artist": "Marc Anthony",
        "year": 2013,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/1/7/0/a17e9c508684123a451abeda10a5f734.mp3?hdnea=exp=1786710721~acl=/api/1/1/a/1/7/0/a17e9c508684123a451abeda10a5f734.mp3*~data=user_id=0,application_id=42~hmac=11106546feb0b45688155fa871373178277791f7c05c0a5e6108e827219c76d7"
      },
      {
        "id": "lat-21",
        "title": "La Camisa Negra",
        "artist": "Juanes",
        "year": 2004,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/2e/07/c92e0752-1277-e1a1-00fe-e1a48109bebd/mzaf_7014161681325572433.plus.aac.p.m4a"
      },
      {
        "id": "lat-22",
        "title": "Bailamos",
        "artist": "Enrique Iglesias",
        "year": 1999,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/82/e3/3a/82e33ab5-4ff6-94dc-d481-ba0bbb11473c/mzaf_10219054558487418363.plus.aac.p.m4a"
      },
      {
        "id": "lat-23",
        "title": "She Bangs",
        "artist": "Ricky Martin",
        "year": 2000,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ea/0a/f1/ea0af173-f882-9f62-5c33-012c31bcdbfd/mzaf_1858312097606919566.plus.aac.p.m4a"
      },
      {
        "id": "lat-24",
        "title": "Maria",
        "artist": "Ricky Martin",
        "year": 1995,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/01/b8/18/01b818ea-f24f-14a3-70bb-59f7bf38587b/mzaf_15108894054881284684.plus.aac.p.m4a"
      },
      {
        "id": "lat-25",
        "title": "La Tortura",
        "artist": "Shakira ft. Alejandro Sanz",
        "year": 2005,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/e3/97/75e39742-b8e3-3616-7a14-9d6a71f8eae1/mzaf_1115289710187553590.plus.aac.p.m4a"
      },
      {
        "id": "lat-26",
        "title": "Propuesta Indecente",
        "artist": "Romeo Santos",
        "year": 2013,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2c/4c/5d/2c4c5d8a-d3de-ede0-b0be-59e0705e1c4a/mzaf_248439796457250779.plus.aac.p.m4a"
      },
      {
        "id": "lat-27",
        "title": "Vente Pa' Ca",
        "artist": "Ricky Martin ft. Maluma",
        "year": 2016,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/60/e1/e2/60e1e2fc-931e-f0e6-2148-53d6e0a34eda/mzaf_15619592848108129174.plus.aac.p.m4a"
      },
      {
        "id": "lat-28",
        "title": "Chantaje",
        "artist": "Shakira",
        "year": 2016,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ce/25/45/ce254583-d1ac-db76-c02e-a4ceeab5e2de/mzaf_7277323164917214654.plus.aac.p.m4a"
      },
      {
        "id": "lat-29",
        "title": "Reggaeton Lento",
        "artist": "CNCO",
        "year": 2016,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ae/40/79/ae407966-54a7-d8fb-955b-b9b6c743990a/mzaf_6029216968134922458.plus.aac.p.m4a"
      },
      {
        "id": "lat-30",
        "title": "Provenza",
        "artist": "KAROL G",
        "year": 2022,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c8/02/c7/c802c7f5-6700-8d24-b429-a2ad609d3a4a/mzaf_16971361264385394488.plus.aac.p.m4a"
      },
      {
        "id": "lat-31",
        "title": "Dura",
        "artist": "Daddy Yankee",
        "year": 2018,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6452939ae7a063e167e5c25d91082af3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/7/0/17759ff864aceab9759ceda57e312b2d.mp3?hdnea=exp=1788639348~acl=/api/1/1/1/7/7/0/17759ff864aceab9759ceda57e312b2d.mp3*~data=user_id=0,application_id=42~hmac=9d566ff78359f6a14dcb4656970d5d1f2c69d0ee088325d0bb41b3ca67b3b056"
      },
      {
        "id": "lat-32",
        "title": "Rompe",
        "artist": "Daddy Yankee",
        "year": 2007,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4db783b9352e68b90c5c68fa7ba6af1b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/6/8/0/96845dce2c27a91a2b0eb96260eb8bef.mp3?hdnea=exp=1788639348~acl=/api/1/1/9/6/8/0/96845dce2c27a91a2b0eb96260eb8bef.mp3*~data=user_id=0,application_id=42~hmac=fb2f2eecbf19ea16c2a310627682f47333f3c7610e4b7cf24879c8c3c8c24d2b"
      },
      {
        "id": "lat-33",
        "title": "Échame La Culpa",
        "artist": "Luis Fonsi",
        "year": 2017,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3e8b9d9d878db36bd594c0347b61791d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/3/2/0/8323aa5513b36699735b20d2359d5ed1.mp3?hdnea=exp=1788639348~acl=/api/1/1/8/3/2/0/8323aa5513b36699735b20d2359d5ed1.mp3*~data=user_id=0,application_id=42~hmac=ba11aaa3ce36c6abaf449651c8b20a7a4d90ff9544e6a3b07a67afd3a2a10166"
      },
      {
        "id": "lat-34",
        "title": "Ginza",
        "artist": "J Balvin",
        "year": 2016,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fbd2bc7d9384674fb682e0df4c24d6ac/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/9/0/2d93edf81b59abacf524878c16de0029.mp3?hdnea=exp=1788639349~acl=/api/1/1/2/d/9/0/2d93edf81b59abacf524878c16de0029.mp3*~data=user_id=0,application_id=42~hmac=2d4f0e444bdee2b4ef402e653cbe5312193540775726f5ef54b08023edb74b93"
      },
      {
        "id": "lat-35",
        "title": "Felices los 4",
        "artist": "Maluma",
        "year": 2018,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8f7f531b2bcebeffef064d973dedb24a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/9/9/0/d998bebd057894d717953b9199997c7d.mp3?hdnea=exp=1788639349~acl=/api/1/1/d/9/9/0/d998bebd057894d717953b9199997c7d.mp3*~data=user_id=0,application_id=42~hmac=688f492777627e97cab8d3089a317a350fd37041f9abeb63d3e1b1031a52529b"
      },
      {
        "id": "lat-36",
        "title": "Tití Me Preguntó",
        "artist": "Bad Bunny",
        "year": 2022,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/d/0/c4d8eeec871548b83abe5458fff10fc3.mp3?hdnea=exp=1788639349~acl=/api/1/1/c/4/d/0/c4d8eeec871548b83abe5458fff10fc3.mp3*~data=user_id=0,application_id=42~hmac=62b82cdedf86b2bcf31e752aecfa9c58f5a8b8612fd79e6294666c117027ea74"
      },
      {
        "id": "lat-37",
        "title": "Me Porto Bonito",
        "artist": "Bad Bunny",
        "year": 2022,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/e/0/eee1f040af0d93c63ef745d3dfe5aa0d.mp3?hdnea=exp=1788639350~acl=/api/1/1/e/e/e/0/eee1f040af0d93c63ef745d3dfe5aa0d.mp3*~data=user_id=0,application_id=42~hmac=9b48c2c5b5d7f006c0a3e975f24d4063c0a971bc6ab075f269c45808ffa1f0e8"
      },
      {
        "id": "lat-38",
        "title": "Ojitos Lindos",
        "artist": "Bad Bunny",
        "year": 2022,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/a/a/0/3aa7fac0a99662098360da4e6fe79d12.mp3?hdnea=exp=1788639350~acl=/api/1/1/3/a/a/0/3aa7fac0a99662098360da4e6fe79d12.mp3*~data=user_id=0,application_id=42~hmac=78ffc7d3af734da0a38eede3ca6dc196c163481c7f18fb6d6d7e9dda2833468b"
      },
      {
        "id": "lat-39",
        "title": "Dale Don Dale",
        "artist": "Don Omar",
        "year": 2003,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c2671dbf906c83e7cf2b9597a5c0560c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/c/3/0/2c339f68d1502e5994d74eb8023da359.mp3?hdnea=exp=1788639350~acl=/api/1/1/2/c/3/0/2c339f68d1502e5994d74eb8023da359.mp3*~data=user_id=0,application_id=42~hmac=6491efa221d53f072013a084dad243dcec14eea1c17fc3955e7500086d2ed19d"
      },
      {
        "id": "lat-40",
        "title": "El Perdon",
        "artist": "Nicky Jam",
        "year": 2015,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9fe42fee53040826635365451d4233ba/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/e/3/0/3e30197f79811397244741abc6854ecc.mp3?hdnea=exp=1788639351~acl=/api/1/1/3/e/3/0/3e30197f79811397244741abc6854ecc.mp3*~data=user_id=0,application_id=42~hmac=1458c7d8f9ce5c8fab4634c8f2eec7bb284afc5d8cc5217bdf2b734c91d35155"
      },
      {
        "id": "lat-41",
        "title": "Hasta el Amanecer",
        "artist": "Nicky Jam",
        "year": 2017,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/68b6ebdd0514f16c57a87552a33d26d3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/d/1/0/ed1359fc67000bb0d0a779a6339be31a.mp3?hdnea=exp=1788639351~acl=/api/1/1/e/d/1/0/ed1359fc67000bb0d0a779a6339be31a.mp3*~data=user_id=0,application_id=42~hmac=8c65b10932cb3ac06ffda2726e999ec91d213458707405e1b46081e6a9126950"
      },
      {
        "id": "lat-42",
        "title": "DESPECHÁ",
        "artist": "ROSALÍA",
        "year": 2022,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b805ed7967bdc65386883cc3790459e7/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/2/3/0/b234d28fb77426a7e59c38f0ad7d7956.mp3?hdnea=exp=1788639351~acl=/api/1/1/b/2/3/0/b234d28fb77426a7e59c38f0ad7d7956.mp3*~data=user_id=0,application_id=42~hmac=a3acc2d030779ee9c1eb90989ff3f36238ad7f9dcef139b9a526bdd5b1fb04a7"
      },
      {
        "id": "lat-43",
        "title": "Con Altura (feat. El Guincho)",
        "artist": "ROSALÍA",
        "year": 2019,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0a6b457530fcf0bfa2eff233cb584e29/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/b/b/0/dbbdbd232510340846ccff942231b4fd.mp3?hdnea=exp=1788639352~acl=/api/1/1/d/b/b/0/dbbdbd232510340846ccff942231b4fd.mp3*~data=user_id=0,application_id=42~hmac=cfdcb6ace7451b7c063affa538bf813664aa005fda6f8d61426941fe401cbcf1"
      },
      {
        "id": "lat-44",
        "title": "Se Preparó",
        "artist": "Ozuna",
        "year": 2017,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/967a95a3f48cdad308c18057d2e55906/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/d/7/0/3d7dc6f2098c68395b75b533662f3eb5.mp3?hdnea=exp=1788639352~acl=/api/1/1/3/d/7/0/3d7dc6f2098c68395b75b533662f3eb5.mp3*~data=user_id=0,application_id=42~hmac=392624c1e6e5ec5ee6d1bbc8769fde3268d0d4cf99ad042b4379adf05c1ea0c0"
      },
      {
        "id": "lat-45",
        "title": "Baila Baila Baila",
        "artist": "Ozuna",
        "year": 2019,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/53a787af01844391a3f59f2dc1b59e9a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/e/5/0/ae5a76e49c5911c6b4e92d74d3f9c6e1.mp3?hdnea=exp=1788639352~acl=/api/1/1/a/e/5/0/ae5a76e49c5911c6b4e92d74d3f9c6e1.mp3*~data=user_id=0,application_id=42~hmac=7ab92a99fc4e7d2e656d9e2bd8b23a4486bed42ec13c44d01efdea9b04d490cb"
      },
      {
        "id": "lat-46",
        "title": "Todo De Ti",
        "artist": "Rauw Alejandro",
        "year": 2025,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7167a61f54a62c453f4d99ee59c151a4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/b/a/0/3ba5a4ddf058e58c87bb193fe73761a5.mp3?hdnea=exp=1788639353~acl=/api/1/1/3/b/a/0/3ba5a4ddf058e58c87bb193fe73761a5.mp3*~data=user_id=0,application_id=42~hmac=e69ae8ccedc2872aca98f86dba20bf094e9bf0f8c03ec82280e4b181e37124f5"
      },
      {
        "id": "lat-47",
        "title": "Rakata (Instrumental)",
        "artist": "Wisin & Yandel",
        "year": 2005,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/32c89f5b36374e24e65d501dbd95c673/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/c/6/0/ec6bd57bffc8eb360d715450225ea565.mp3?hdnea=exp=1788639353~acl=/api/1/1/e/c/6/0/ec6bd57bffc8eb360d715450225ea565.mp3*~data=user_id=0,application_id=42~hmac=850a4b0462f4f4900b38a29227afeec8cfcef5829cf47160ae2402f7d7b14a7e"
      },
      {
        "id": "lat-48",
        "title": "Sin Pijama",
        "artist": "Becky G",
        "year": 2018,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a15a7915a0d81e6a9dd07897f60c7157/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/4/8/0/7482592604e70f4bf3a9fec2881d21dc.mp3?hdnea=exp=1788639353~acl=/api/1/1/7/4/8/0/7482592604e70f4bf3a9fec2881d21dc.mp3*~data=user_id=0,application_id=42~hmac=59749d9f78d5984c70c680591ad3d2a42b6a974a16521e00fafdd2c57601c569"
      },
      {
        "id": "lat-49",
        "title": "Monotonía",
        "artist": "Shakira",
        "year": 2022,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/05ba08c8bc9de7e2e1b545916c7d1078/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/5/0/0/650ee581665a726cb1fd6fe2aa69211c.mp3?hdnea=exp=1788639354~acl=/api/1/1/6/5/0/0/650ee581665a726cb1fd6fe2aa69211c.mp3*~data=user_id=0,application_id=42~hmac=ed1ee39fc917cd599cf16f0814c2d46ddb751204bb9b0b5a0ded99d1e0475de8"
      },
      {
        "id": "lat-50",
        "title": "Fireball (feat. John Ryan)",
        "artist": "Pitbull",
        "year": 2021,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/93c1f995d12c6be774d4623693129f4e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/e/3/0/0e3e00685c062e0c0d0c9b4c7a140551.mp3?hdnea=exp=1788639354~acl=/api/1/1/0/e/3/0/0e3e00685c062e0c0d0c9b4c7a140551.mp3*~data=user_id=0,application_id=42~hmac=228028b3fd6cde611ba793ed0e615f5d29a9e5198c89049d923fe52dc7803738"
      }
    ]
  },
  {
    "id": "soundtracks-cinema",
    "title": "Colonne Sonore Cinema",
    "category": "artists",
    "description": "Ennio Morricone, Hans Zimmer, Queen e i temi epici dei film.",
    "badge": "Cinema",
    "unlockRequirement": {
      "minLevel": 5,
      "label": "Livello 5"
    },
    "cover": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "mov-1",
        "title": "The Good, the Bad and the Ugly",
        "artist": "Ennio Morricone",
        "year": 1966,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/84/d3/ca/84d3ca17-1855-2c91-1dd0-d698536a8991/mzaf_9643900716597219222.plus.aac.p.m4a"
      },
      {
        "id": "mov-2",
        "title": "Time (Inception)",
        "artist": "Hans Zimmer",
        "year": 2010,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/1d/a4/e01da4a2-a75f-7ebf-9971-3d49e17efc57/mzaf_10500078769097048384.plus.aac.p.m4a"
      },
      {
        "id": "mov-3",
        "title": "Eye of the Tiger",
        "artist": "Survivor",
        "year": 1982,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fe/fa/9e/fefa9edd-c023-4d1c-1012-08bfb0ec69e6/mzaf_4651653238471209843.plus.aac.p.m4a"
      },
      {
        "id": "mov-4",
        "title": "Ghostbusters",
        "artist": "Ray Parker Jr.",
        "year": 1984,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/50/6b/ee/506beefd-800d-ee66-543f-b5f18b56f67e/mzaf_4307548334315021038.plus.aac.p.m4a"
      },
      {
        "id": "mov-5",
        "title": "My Heart Will Go On",
        "artist": "Celine Dion",
        "year": 1997,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/b/d/0/fbd59f9121892eed1ed1671730f012bd.mp3?hdnea=exp=1786710723~acl=/api/1/1/f/b/d/0/fbd59f9121892eed1ed1671730f012bd.mp3*~data=user_id=0,application_id=42~hmac=8bc92d2be72f0d7a982138517a641108c1a72c90495b12d381f2e827958c038d"
      },
      {
        "id": "mov-6",
        "title": "Stayin' Alive",
        "artist": "Bee Gees",
        "year": 1977,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/1/9/0/319c89b68405e15329ed21a4139fff38.mp3?hdnea=exp=1786710723~acl=/api/1/1/3/1/9/0/319c89b68405e15329ed21a4139fff38.mp3*~data=user_id=0,application_id=42~hmac=55f34f4347c5928382943179cf8ea5de553898f85fd76bf15a19ed1ed1a2c95d"
      },
      {
        "id": "mov-7",
        "title": "Circle of Life",
        "artist": "Elton John",
        "year": 1994,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/a/e/0/eaef78c60b0676f66d978d6c8ac84eb0.mp3?hdnea=exp=1786710723~acl=/api/1/1/e/a/e/0/eaef78c60b0676f66d978d6c8ac84eb0.mp3*~data=user_id=0,application_id=42~hmac=8da589e7062ec45b62e395e8c92da328d87254db8aec86766f56fc670b998847"
      },
      {
        "id": "mov-8",
        "title": "Imperial March",
        "artist": "John Williams",
        "year": 1980,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/7/0/217b0ef00c81e9ed90ddda40b24fec5e.mp3?hdnea=exp=1786710723~acl=/api/1/1/2/1/7/0/217b0ef00c81e9ed90ddda40b24fec5e.mp3*~data=user_id=0,application_id=42~hmac=6c4037e5acb70364b5861f762816894b6a21d28b52098da748a4cc6bb83fd7db"
      },
      {
        "id": "mov-9",
        "title": "Mission: Impossible Theme",
        "artist": "Lalo Schifrin",
        "year": 1967,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/8/a/0/c8a3fdb32a8784ff308e0f9528a58e0c.mp3?hdnea=exp=1786710723~acl=/api/1/1/c/8/a/0/c8a3fdb32a8784ff308e0f9528a58e0c.mp3*~data=user_id=0,application_id=42~hmac=0fe6bda15e497b9702330ad76ef5862a4a1beedb474b92e4e2b6254e73c85fa2"
      },
      {
        "id": "mov-10",
        "title": "You're the One That I Want",
        "artist": "John Travolta & Olivia Newton-John",
        "year": 1978,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/a/6/0/9a6390ef737959b50dfbaf3a9bc808c9.mp3?hdnea=exp=1786710723~acl=/api/1/1/9/a/6/0/9a6390ef737959b50dfbaf3a9bc808c9.mp3*~data=user_id=0,application_id=42~hmac=b53211188d94f5d939a1bebe0fc14ef847452602123a6d19cc3c8879e224c396"
      },
      {
        "id": "mov-11",
        "title": "Danger Zone",
        "artist": "Kenny Loggins",
        "year": 1986,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/c/c/0/bcc0d5e2b54fc68c89a011a16752f2eb.mp3?hdnea=exp=1786710724~acl=/api/1/1/b/c/c/0/bcc0d5e2b54fc68c89a011a16752f2eb.mp3*~data=user_id=0,application_id=42~hmac=fae5b0834132a99d6b3d20700dfdf1ea73c6daa7fb6c6c2726be0bab4ced36ee"
      },
      {
        "id": "mov-12",
        "title": "Back in Time",
        "artist": "Huey Lewis and the News",
        "year": 1985,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/2/1/0/821889ad89f0571dd2fd06b517692036.mp3?hdnea=exp=1786710724~acl=/api/1/1/8/2/1/0/821889ad89f0571dd2fd06b517692036.mp3*~data=user_id=0,application_id=42~hmac=32438046155ac15095af12799cec54155d445189d8c241768f4bbbe8aaf69640"
      },
      {
        "id": "mov-13",
        "title": "He's a Pirate",
        "artist": "Hans Zimmer",
        "year": 2003,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/2/0/492ee9eea0a5883983ecae98d06b1133.mp3?hdnea=exp=1786710724~acl=/api/1/1/4/9/2/0/492ee9eea0a5883983ecae98d06b1133.mp3*~data=user_id=0,application_id=42~hmac=e864c1f4be40f421c57a9399ded4833821c24b63248ace9335495f7879136d99"
      },
      {
        "id": "mov-14",
        "title": "Jurassic Park Theme",
        "artist": "John Williams",
        "year": 1993,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/4/e/0/44ee8362a7da8bf7ccda6e42843174f2.mp3?hdnea=exp=1786710724~acl=/api/1/1/4/4/e/0/44ee8362a7da8bf7ccda6e42843174f2.mp3*~data=user_id=0,application_id=42~hmac=8895be1998b82c6d29a6a424888e015e31d96ebc0767c1e75d8414663265912c"
      },
      {
        "id": "mov-15",
        "title": "Hedwig's Theme",
        "artist": "John Williams",
        "year": 2001,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/a/9/0/3a9bba1cb69569b07482d4f11c0cd9f1.mp3?hdnea=exp=1786710724~acl=/api/1/1/3/a/9/0/3a9bba1cb69569b07482d4f11c0cd9f1.mp3*~data=user_id=0,application_id=42~hmac=f222644aee75084b5b922c5bf81e53c622e6411397fc6ca672e4d31c37b5b002"
      },
      {
        "id": "mov-16",
        "title": "Indiana Jones Theme",
        "artist": "John Williams",
        "year": 1981,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/0/0/0405962dfa0302f010bfb9f412cabe12.mp3?hdnea=exp=1786710724~acl=/api/1/1/0/4/0/0/0405962dfa0302f010bfb9f412cabe12.mp3*~data=user_id=0,application_id=42~hmac=70233e482ec1760b56eea46cdd92aa12829313d6b313ca17a9ee66ff7e11cf27"
      },
      {
        "id": "mov-17",
        "title": "Footloose",
        "artist": "Kenny Loggins",
        "year": 1984,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/4/7/0/947a7df828e2fd9c5be9083683efe572.mp3?hdnea=exp=1786710724~acl=/api/1/1/9/4/7/0/947a7df828e2fd9c5be9083683efe572.mp3*~data=user_id=0,application_id=42~hmac=30f2859e97023b865cf7d89986e8fd14d4c8afac9e76fe3a826348419f28597b"
      },
      {
        "id": "mov-18",
        "title": "Unchained Melody",
        "artist": "The Righteous Brothers",
        "year": 1965,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/9/6/0/69660980e35faa9143757580f4345b80.mp3?hdnea=exp=1786710724~acl=/api/1/1/6/9/6/0/69660980e35faa9143757580f4345b80.mp3*~data=user_id=0,application_id=42~hmac=e48588751320033a38bb26d8a5fd969fcdb8444142a82da35cd0d484c37a923b"
      },
      {
        "id": "mov-19",
        "title": "A Whole New World",
        "artist": "Alan Menken",
        "year": 1992,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/c/7/0/bc797d4c44d06cee0eb4d7a17970ab11.mp3?hdnea=exp=1786710724~acl=/api/1/1/b/c/7/0/bc797d4c44d06cee0eb4d7a17970ab11.mp3*~data=user_id=0,application_id=42~hmac=2289d41cc4a94c434b26ab6e88a6482b86f05a892b480977c5b96d4de651fad0"
      },
      {
        "id": "mov-20",
        "title": "Skyfall",
        "artist": "Adele",
        "year": 2012,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/2/6/0/e26bc2264f5f33f2587b0f5cc0b3b54e.mp3?hdnea=exp=1786710724~acl=/api/1/1/e/2/6/0/e26bc2264f5f33f2587b0f5cc0b3b54e.mp3*~data=user_id=0,application_id=42~hmac=d36ec4fe8309d5dfadb85e02eb0e11399388fc63a8f0f0f53aa09b782b99921b"
      },
      {
        "id": "mov-21",
        "title": "Shallow",
        "artist": "Lady Gaga & Bradley Cooper",
        "year": 2018,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/a/0/0/ea0a28596f5497ce95abc568bff9b6cd.mp3?hdnea=exp=1786710724~acl=/api/1/1/e/a/0/0/ea0a28596f5497ce95abc568bff9b6cd.mp3*~data=user_id=0,application_id=42~hmac=adfe3d40def89580e655bbd9918f6f71a27ef9e2df29c3d2357ed06e4c05b17d"
      },
      {
        "id": "mov-22",
        "title": "Happy",
        "artist": "Pharrell Williams",
        "year": 2013,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/0/5/0/90543b3c88fed677915d879fa4320288.mp3?hdnea=exp=1786710724~acl=/api/1/1/9/0/5/0/90543b3c88fed677915d879fa4320288.mp3*~data=user_id=0,application_id=42~hmac=c8fda7e73d0d1717d1e278903febbd9edb213894fd9f3ee54cd4875240f3dfa1"
      },
      {
        "id": "mov-23",
        "title": "Can't Stop the Feeling!",
        "artist": "Justin Timberlake",
        "year": 2016,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/4/b/0/94b08535e1d86650c891c720af3aa77a.mp3?hdnea=exp=1786710724~acl=/api/1/1/9/4/b/0/94b08535e1d86650c891c720af3aa77a.mp3*~data=user_id=0,application_id=42~hmac=69337dd18adfa1319bba2e3e92a486f1d4546094796dbd7bdd9daa116e3d29a7"
      },
      {
        "id": "mov-24",
        "title": "Let It Go",
        "artist": "Idina Menzel",
        "year": 2013,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/4/0/2d4146ff3ac7b7563b511cf15215a3b2.mp3?hdnea=exp=1786710724~acl=/api/1/1/2/d/4/0/2d4146ff3ac7b7563b511cf15215a3b2.mp3*~data=user_id=0,application_id=42~hmac=71504c00958cf82d85fa4d00685280ed3b5d6572462d459e548a23f987a98a19"
      },
      {
        "id": "mov-25",
        "title": "Love Me Like You Do",
        "artist": "Ellie Goulding",
        "year": 2015,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/8/c/0/b8ca9d3f1be186d32e32b0e93f5185cd.mp3?hdnea=exp=1786710724~acl=/api/1/1/b/8/c/0/b8ca9d3f1be186d32e32b0e93f5185cd.mp3*~data=user_id=0,application_id=42~hmac=26b95a5ab8ffe8ef2eb147d70593e570b970734ec8728cffa6ef64738718dc72"
      },
      {
        "id": "mov-26",
        "title": "A Thousand Years",
        "artist": "Christina Perri",
        "year": 2011,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/2/0/0825619c0e40ccbe0db06bd0c599b7b7.mp3?hdnea=exp=1786710725~acl=/api/1/1/0/8/2/0/0825619c0e40ccbe0db06bd0c599b7b7.mp3*~data=user_id=0,application_id=42~hmac=f63bc50ba9d55ebd92335a83b40322f7a9181c1a7e926c2b018ebdb7ac4480c6"
      },
      {
        "id": "mov-27",
        "title": "Take My Breath Away",
        "artist": "Berlin",
        "year": 1986,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/c/9/0/3c960fe30ef964a95f5d64a5e0bd4626.mp3?hdnea=exp=1786710725~acl=/api/1/1/3/c/9/0/3c960fe30ef964a95f5d64a5e0bd4626.mp3*~data=user_id=0,application_id=42~hmac=d3d5ceb248c5ef2cf88083a06bba3f1534cbf06cbc47fdf21a3ec8c945408967"
      },
      {
        "id": "mov-28",
        "title": "What a Feeling",
        "artist": "Irene Cara",
        "year": 1983,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/2/0/2128364f3c452b0a72646c60d9c7e642.mp3?hdnea=exp=1786710725~acl=/api/1/1/2/1/2/0/2128364f3c452b0a72646c60d9c7e642.mp3*~data=user_id=0,application_id=42~hmac=f66e8b406563afc84983bf25a683c8a67f400f0870ef40617ea05aa6fba0e90e"
      },
      {
        "id": "mov-29",
        "title": "Eye of the Tiger",
        "artist": "Survivor",
        "year": 1982,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/a/6/0/6a6cec63a2a62ad17c65c3706e216ce8.mp3?hdnea=exp=1786710725~acl=/api/1/1/6/a/6/0/6a6cec63a2a62ad17c65c3706e216ce8.mp3*~data=user_id=0,application_id=42~hmac=de264dde67ac4a151916f0c0f2fb95f8448724ac82c69a53637df8f508386d03"
      },
      {
        "id": "mov-30",
        "title": "Superheroes",
        "artist": "The Script",
        "year": 2014,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/8/d/0/28dd48d49ffb859d7d0505450247556d.mp3?hdnea=exp=1786710725~acl=/api/1/1/2/8/d/0/28dd48d49ffb859d7d0505450247556d.mp3*~data=user_id=0,application_id=42~hmac=27579e1fb717edc08a6149cd998557085700f0e4665be710923551d204abba53"
      },
      {
        "id": "mov-31",
        "title": "Star Wars : John Williams: Star Wars: Main Title",
        "artist": "Boston Pops Orchestra",
        "year": 2021,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/81d974a58f5a152f81dc8fff5fee74f3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/7/c/0/27ce701ba1c026179e8b715a35800979.mp3?hdnea=exp=1788639354~acl=/api/1/1/2/7/c/0/27ce701ba1c026179e8b715a35800979.mp3*~data=user_id=0,application_id=42~hmac=3df53ab92304fddb15674e8ad3a7081369ea67eea4bea0ffbb410a99fc84ab7b"
      },
      {
        "id": "mov-32",
        "title": "Raiders March (From \"Indiana Jones and the Raiders of the Lost Ark\")",
        "artist": "Berliner Philharmoniker",
        "year": 2022,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/28040b3a34c53eac62636bf297c2e2cd/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/4/d/0/44dcebd8bc9f2901af5a29fd0308e8ac.mp3?hdnea=exp=1788639355~acl=/api/1/1/4/4/d/0/44dcebd8bc9f2901af5a29fd0308e8ac.mp3*~data=user_id=0,application_id=42~hmac=b3c97b7bbbf0bd01379a7b7f49c632c7d5f597c751dc533c88f59835217e7ac1"
      },
      {
        "id": "mov-33",
        "title": "C'era una volta il west (Finale)",
        "artist": "Ennio Morricone",
        "year": 2012,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/52ded1abaf2bdf933069e31a34a8a809/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/1/5/0/b15107d60277c76502b41cfb87c84bff.mp3?hdnea=exp=1788639355~acl=/api/1/1/b/1/5/0/b15107d60277c76502b41cfb87c84bff.mp3*~data=user_id=0,application_id=42~hmac=70a331baddae50348013a1a8fe55bc944641aad818f0fab73795058d59d02eb6"
      },
      {
        "id": "mov-34",
        "title": "Gabriel's Oboe",
        "artist": "Ennio Morricone",
        "year": 2004,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6b782376a9af24a49b19e337ac4b2539/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/3/0/9c3253c70f64e71d8182f2185cbd1a75.mp3?hdnea=exp=1788639355~acl=/api/1/1/9/c/3/0/9c3253c70f64e71d8182f2185cbd1a75.mp3*~data=user_id=0,application_id=42~hmac=af32c3f1e2d23e20637025c28e1764c0e5b3bb18d542d830e500ccb1b595477c"
      },
      {
        "id": "mov-35",
        "title": "Now We Are Free (From \"Gladiator\")",
        "artist": "Hans Zimmer",
        "year": 2013,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e61b54e23a5b27c0e947d2720a0fd3a4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/2/d/0/32d78fa243e727e2ea39d4c4cc041c47.mp3?hdnea=exp=1788639356~acl=/api/1/1/3/2/d/0/32d78fa243e727e2ea39d4c4cc041c47.mp3*~data=user_id=0,application_id=42~hmac=69d555a1fc9a582c0620592abb6c79f133578c9baa9fe3b281117837b6d59837"
      },
      {
        "id": "mov-36",
        "title": "The Avengers",
        "artist": "Alan Silvestri",
        "year": 2012,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c49b7714e3c4b75e7604c5a86524ec27/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/8/7/0/987416a6aed6f7431e85ad7544d13f70.mp3?hdnea=exp=1788639356~acl=/api/1/1/9/8/7/0/987416a6aed6f7431e85ad7544d13f70.mp3*~data=user_id=0,application_id=42~hmac=9c458880e853fb7a9fe8a12d75c71548391b68a4c139027b5c7c33ed10ceeae8"
      },
      {
        "id": "mov-37",
        "title": "The Fellowship of the Ring: Lord of the Rings - Main Theme (From \"The Fellowship of the Ring: Lord of the Rings\")",
        "artist": "The City Of Prague Philharmonic Orchestra",
        "year": 2022,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/51e2e0b886c5b47e0a0cf6c8a3671caf/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/2/0/252749de159266b7fdcdea77e0856be4.mp3?hdnea=exp=1788639357~acl=/api/1/1/2/5/2/0/252749de159266b7fdcdea77e0856be4.mp3*~data=user_id=0,application_id=42~hmac=53d23339b94c67385549e385a9f954d35e10a15c975473e16328fa0948fd9666"
      },
      {
        "id": "mov-38",
        "title": "Batman Theme Reprise",
        "artist": "Danny Elfman",
        "year": 1989,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5646be50f9bd30b21d4d9b8cc2b406dd/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/6/c/0/66c03725cbf67fc63fe4873930b3a367.mp3?hdnea=exp=1788639357~acl=/api/1/1/6/6/c/0/66c03725cbf67fc63fe4873930b3a367.mp3*~data=user_id=0,application_id=42~hmac=0156f776911b477b9075e289ede72cc63d5cba5f3e7842fb061b0d447df93f33"
      },
      {
        "id": "mov-39",
        "title": "Gonna Fly Now (Theme From \"Rocky\")",
        "artist": "Bill Conti",
        "year": 2015,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a91857b1f8f6c4719f06613f2b08b1a1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/1/0/0/91044b3804c63458929c83b0415ece1d.mp3?hdnea=exp=1788639357~acl=/api/1/1/9/1/0/0/91044b3804c63458929c83b0415ece1d.mp3*~data=user_id=0,application_id=42~hmac=1fba110ce26dc70d13d5477492b2814180b400470566348336a7f5db7dfb96d1"
      },
      {
        "id": "mov-40",
        "title": "I Have Nothing",
        "artist": "Whitney Houston",
        "year": 1992,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d071ab8d81111be6434c2f2cf372ab13/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/f/7/0/5f7fc288a14c62f9cd2dab3ec42c445a.mp3?hdnea=exp=1788639358~acl=/api/1/1/5/f/7/0/5f7fc288a14c62f9cd2dab3ec42c445a.mp3*~data=user_id=0,application_id=42~hmac=3f475995047aa73c08302472afd7d2799fb6953e67025d22e1ed2bb6a242742e"
      },
      {
        "id": "mov-41",
        "title": "Born To Be Wild",
        "artist": "Steppenwolf",
        "year": 2018,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/164e4c358a1984b300a62de87cbd2948/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/1/b/0/71be944d3f7ae726e088e9af4f125ab1.mp3?hdnea=exp=1788639358~acl=/api/1/1/7/1/b/0/71be944d3f7ae726e088e9af4f125ab1.mp3*~data=user_id=0,application_id=42~hmac=be3cbfb6293b8c83556ff4fbfee48f4ba3e7fda8ed88961f32904bdeda304ca6"
      },
      {
        "id": "mov-42",
        "title": "Married Life",
        "artist": "Michael Giacchino",
        "year": 2009,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/31c161bbcda18efb550c1b620102ff56/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/f/9/0/0f990e36b911d2f5538fc8c65b96d509.mp3?hdnea=exp=1788639358~acl=/api/1/1/0/f/9/0/0f990e36b911d2f5538fc8c65b96d509.mp3*~data=user_id=0,application_id=42~hmac=6407191a2af5a227921c5d4c75e37adfe0ebb2904f4bca0baf79d7f020adab9a"
      },
      {
        "id": "mov-43",
        "title": "Harold's Despair",
        "artist": "Vangelis",
        "year": 2012,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a2e4de79f8470c371143241659cdb9b0/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/d/1/0/1d13cd90a34db2e322758879ef310efe.mp3?hdnea=exp=1788639359~acl=/api/1/1/1/d/1/0/1d13cd90a34db2e322758879ef310efe.mp3*~data=user_id=0,application_id=42~hmac=a24ac6336286c66075b8871e984e9e747123ce27baafcd0a0ff57168c485de21"
      },
      {
        "id": "mov-44",
        "title": "Blade Runner (End Titles)",
        "artist": "Vangelis",
        "year": 1994,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6d15927709b4f91db05b80f7d7ddee96/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/4/0/17477925950322de4b960daca918008d.mp3?hdnea=exp=1788639359~acl=/api/1/1/1/7/4/0/17477925950322de4b960daca918008d.mp3*~data=user_id=0,application_id=42~hmac=52fa23c7de53c0d66c4b6478301773ab6e58937e51b7f8dcf0fad90185627413"
      },
      {
        "id": "mov-45",
        "title": "The Godfather Waltz (Main Title)",
        "artist": "Nino Rota",
        "year": 2010,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/da97bd562a9b372bd3985990f7c1c24d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/b/4/0/1b456d4db5d19bd7e4602ad2e7257ad3.mp3?hdnea=exp=1788639359~acl=/api/1/1/1/b/4/0/1b456d4db5d19bd7e4602ad2e7257ad3.mp3*~data=user_id=0,application_id=42~hmac=83e00d0fa17fc296ae1688d5e104243f734e63ba977a346dbb78f93230f15566"
      },
      {
        "id": "mov-46",
        "title": "The Pink Panther Theme",
        "artist": "Henry Mancini",
        "year": 2009,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f53e6d8fa1360ed8b142b2b8a10a51c4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/1/9/0/919b6a3b739bd01357826e1ae57bb025.mp3?hdnea=exp=1788639360~acl=/api/1/1/9/1/9/0/919b6a3b739bd01357826e1ae57bb025.mp3*~data=user_id=0,application_id=42~hmac=27b766a6c7274e0fe3d22e6dc72708d7706ef1ef5d81fdace835680fd37e9e5d"
      },
      {
        "id": "mov-47",
        "title": "Misirlou",
        "artist": "Dick Dale and His Del-Tones",
        "year": 1959,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9bfea7805e4d25aab1387adcafc32402/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/c/0/0/5c00fb055b60f6205b8b99a9c315a11e.mp3?hdnea=exp=1788639360~acl=/api/1/1/5/c/0/0/5c00fb055b60f6205b8b99a9c315a11e.mp3*~data=user_id=0,application_id=42~hmac=dd7bdf9f846f21318cfa6c61d1bb042741de24f513807d20a7f0a070a16a9904"
      },
      {
        "id": "mov-48",
        "title": "Burning Heart (From \"Rocky IV\" Soundtrack)",
        "artist": "Survivor",
        "year": 2006,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e66b5d3a40f69690c1633afb73cc590c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/7/4/0/97415dee2c4b93aac66d60fc9b97e555.mp3?hdnea=exp=1788639361~acl=/api/1/1/9/7/4/0/97415dee2c4b93aac66d60fc9b97e555.mp3*~data=user_id=0,application_id=42~hmac=a6097ffbec579659d428090d1bae7815b9c667f81e6a0ff68811f03cb7a35e67"
      },
      {
        "id": "mov-49",
        "title": "Ghostbusters (from the \"Ghostbusters\" Original Motion Picture Soundtrack)",
        "artist": "Ray Parker Jr.",
        "year": 2000,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4201e26250029b62d4dfa76ad503a01b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/c/3/0/6c35804e11bcd387166deb0d946e1ffd.mp3?hdnea=exp=1788639361~acl=/api/1/1/6/c/3/0/6c35804e11bcd387166deb0d946e1ffd.mp3*~data=user_id=0,application_id=42~hmac=ed423e8a41d04f42d294a00eccb27dd11edfefb897c8376d63736c11f1fcb723"
      },
      {
        "id": "mov-50",
        "title": "Danger Zone (From \"Top Gun\" Original Soundtrack)",
        "artist": "Kenny Loggins",
        "year": 1999,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/021a1143e9f19493379b8cf01fa1c7c5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/c/c/0/bcc0d5e2b54fc68c89a011a16752f2eb.mp3?hdnea=exp=1788639361~acl=/api/1/1/b/c/c/0/bcc0d5e2b54fc68c89a011a16752f2eb.mp3*~data=user_id=0,application_id=42~hmac=8b36680b26f5cdcfeb74d28f0780f1f188f500f877ca3bf5e9e3be62d9ad79af"
      }
    ]
  },
  {
    "id": "trap-italia",
    "title": "Trap & Urban Italia 2020s",
    "category": "hiphop",
    "description": "Sfera Ebbasta, Lazza, Geolier, Blanco, Tedua, Shiva e i re della scena urban.",
    "badge": "Trend 🔥",
    "unlockRequirement": {
      "deathParadeRecord": 20,
      "label": "20 in Death Parade 💀"
    },
    "cover": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "tr-1",
        "title": "Cenere",
        "artist": "Lazza",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/d/3/0/8d3aeb88a1130cca7da578bee09f3690.mp3?hdnea=exp=1786710725~acl=/api/1/1/8/d/3/0/8d3aeb88a1130cca7da578bee09f3690.mp3*~data=user_id=0,application_id=42~hmac=83a9e5e885ad886019763751498e63815a25008704605ff267c89a5a06a71573"
      },
      {
        "id": "tr-2",
        "title": "I P' ME, TU P' TE",
        "artist": "Geolier",
        "year": 2024,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/2/0/9c2a411fa1a6503318a019e498a53dbb.mp3?hdnea=exp=1786710725~acl=/api/1/1/9/c/2/0/9c2a411fa1a6503318a019e498a53dbb.mp3*~data=user_id=0,application_id=42~hmac=6a7dcc21c53b8c57a1537392f546693c0e593620787813c9cdd1f0b05a3c88bd"
      },
      {
        "id": "tr-3",
        "title": "Mi Fai Impazzire",
        "artist": "Blanco & Sfera Ebbasta",
        "year": 2021,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/7/c/0/07c2011f85ee02fbc1103e24ab41e0a0.mp3?hdnea=exp=1786710725~acl=/api/1/1/0/7/c/0/07c2011f85ee02fbc1103e24ab41e0a0.mp3*~data=user_id=0,application_id=42~hmac=9bf3268c2c2339021e623ed2ebdf6133047b03028d278fc462e4a9d23d4d9208"
      },
      {
        "id": "tr-4",
        "title": "Hoe",
        "artist": "Tedua feat. Sfera Ebbasta",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/8/0/c78dbd6df86fac56c1b1b72812cd505f.mp3?hdnea=exp=1786710725~acl=/api/1/1/c/7/8/0/c78dbd6df86fac56c1b1b72812cd505f.mp3*~data=user_id=0,application_id=42~hmac=6ca065bb36e7089343c0fe99b8311cb8875085894dbaad8dee2b53d52748f1a1"
      },
      {
        "id": "tr-5",
        "title": "Bottiglie Privè",
        "artist": "Sfera Ebbasta",
        "year": 2020,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/3/0/9c3f88538364fbcab638a05d2918135d.mp3?hdnea=exp=1786710725~acl=/api/1/1/9/c/3/0/9c3f88538364fbcab638a05d2918135d.mp3*~data=user_id=0,application_id=42~hmac=89281f89bd8bf53305a2b33aa1d3fcb263bd8eb0dde374e135d6c8bd72b8f9c8"
      },
      {
        "id": "tr-6",
        "title": "Auto Blu",
        "artist": "Shiva & Eiffel 65",
        "year": 2020,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/0/2/0/2025d82e1d916d8f8b84254bedc3336c.mp3?hdnea=exp=1786710725~acl=/api/1/1/2/0/2/0/2025d82e1d916d8f8b84254bedc3336c.mp3*~data=user_id=0,application_id=42~hmac=a14b5452dbb02caf48e1e789f3dedc10a9581d918f95cb2d9a45bac1408c5b62"
      },
      {
        "id": "tr-7",
        "title": "Cara Italia",
        "artist": "Ghali",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/e/0/63e093003fb4cc662723b93edafd3040.mp3?hdnea=exp=1786710725~acl=/api/1/1/6/3/e/0/63e093003fb4cc662723b93edafd3040.mp3*~data=user_id=0,application_id=42~hmac=581e4fa8b1e6fd91eb35656ffb8dde1bdda52333ee9ebaea1213231feb3cf078"
      },
      {
        "id": "tr-8",
        "title": "Insuperabile",
        "artist": "Rkomi",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/8/c/0/c8cd0349c00a970164a5c5bab247e5d9.mp3?hdnea=exp=1786710725~acl=/api/1/1/c/8/c/0/c8cd0349c00a970164a5c5bab247e5d9.mp3*~data=user_id=0,application_id=42~hmac=c7dce67982fd9026bf7cad70809d3093b1fe31a5ed735958f823b9ce06e22d15"
      },
      {
        "id": "tr-9",
        "title": "Allenamento 3",
        "artist": "Capo Plaza",
        "year": 2021,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/6/4/0/6649a683f01643ca917b437da49103c9.mp3?hdnea=exp=1786710725~acl=/api/1/1/6/6/4/0/6649a683f01643ca917b437da49103c9.mp3*~data=user_id=0,application_id=42~hmac=b31eafdbeec5f1e732a796ddc84fe894703eac3102ea0ce2b514961997ab29b9"
      },
      {
        "id": "tr-10",
        "title": "Chiagne",
        "artist": "Geolier feat. Lazza & Takagi & Ketra",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/8/4/0/d8440a21fa02d532797391d5e9c16084.mp3?hdnea=exp=1786710725~acl=/api/1/1/d/8/4/0/d8440a21fa02d532797391d5e9c16084.mp3*~data=user_id=0,application_id=42~hmac=9b8c07c54173359b92ff1f7fe4b081f1958bc06d6ef64e5e45290031d08e2948"
      },
      {
        "id": "tr-11",
        "title": "Nostalgia",
        "artist": "Blanco",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/c/2/0/8c2f028a997f919d2d67bfc91bb2e430.mp3?hdnea=exp=1786710725~acl=/api/1/1/8/c/2/0/8c2f028a997f919d2d67bfc91bb2e430.mp3*~data=user_id=0,application_id=42~hmac=c525da62cbbc4968f635454f7d575cbce73d70375edd530d484905ef79e92bf1"
      },
      {
        "id": "tr-12",
        "title": "Molotov",
        "artist": "Lazza",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/8/6/0/3861b30e56681b8d4116051bffb707c0.mp3?hdnea=exp=1786710725~acl=/api/1/1/3/8/6/0/3861b30e56681b8d4116051bffb707c0.mp3*~data=user_id=0,application_id=42~hmac=0f71742c9479789e4b4f39d1f40232fda9cebf09febebcd75e3badf59ee1ae81"
      },
      {
        "id": "tr-13",
        "title": "Shakerando",
        "artist": "Rhove",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/b/3/0/3b35ee56d02af66e07c9389ccac48471.mp3?hdnea=exp=1786710725~acl=/api/1/1/3/b/3/0/3b35ee56d02af66e07c9389ccac48471.mp3*~data=user_id=0,application_id=42~hmac=fd86f6f1f90cc64b6455cff7548c83243c7e65baead04f35d74dd188c1f765c3"
      },
      {
        "id": "tr-14",
        "title": "Pammuglia",
        "artist": "Tony Effe",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/2/d/0/d2db7b5d6ede5a0a68189edd7f41f758.mp3?hdnea=exp=1786710726~acl=/api/1/1/d/2/d/0/d2db7b5d6ede5a0a68189edd7f41f758.mp3*~data=user_id=0,application_id=42~hmac=3834f45cf8e38e17fcb84f529851ef5dd4ff07090558bea71557ae9ce611f9be"
      },
      {
        "id": "tr-15",
        "title": "Sirio",
        "artist": "Lazza",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/8/b/0/18bf6b2171d6ae0c02adcfd16d1cd9a0.mp3?hdnea=exp=1786710725~acl=/api/1/1/1/8/b/0/18bf6b2171d6ae0c02adcfd16d1cd9a0.mp3*~data=user_id=0,application_id=42~hmac=4a1c5b7d57c104c08143062b050dad925abd0edbf8b54f3761c948bb85d7c55f"
      },
      {
        "id": "tr-16",
        "title": "Baby",
        "artist": "Sfera Ebbasta feat. J Balvin",
        "year": 2020,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/b/f/0/ebfa82674d5c150683542756e86a65bc.mp3?hdnea=exp=1786710727~acl=/api/1/1/e/b/f/0/ebfa82674d5c150683542756e86a65bc.mp3*~data=user_id=0,application_id=42~hmac=5b27058c30e645e240bcb91a91a9174b0581fbfab9adfc8e369739f8f9079902"
      },
      {
        "id": "tr-17",
        "title": "Mon Amour",
        "artist": "Annalisa",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/3/d/0/43df0b3704594c19119d3cdea750a348.mp3?hdnea=exp=1786710726~acl=/api/1/1/4/3/d/0/43df0b3704594c19119d3cdea750a348.mp3*~data=user_id=0,application_id=42~hmac=44defd84bd926a5e999ec6f3ae21962ceefa0c671556622c8ef8c08a11d9e9ba"
      },
      {
        "id": "tr-18",
        "title": "Sinceramente",
        "artist": "Annalisa",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/c/d/0/acdfe1ec57feb9accdfb8d0ef854db8f.mp3?hdnea=exp=1786710726~acl=/api/1/1/a/c/d/0/acdfe1ec57feb9accdfb8d0ef854db8f.mp3*~data=user_id=0,application_id=42~hmac=a2f8d5dcd8941a3abd479883ede43c4b7e1cf3900ce0d015ce8e705da0879851"
      },
      {
        "id": "tr-19",
        "title": "Casa Mia",
        "artist": "Ghali",
        "year": 2024,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/0/0/2d084a8bb1aac8eb1a04aef7511c3ed0.mp3?hdnea=exp=1786710726~acl=/api/1/1/2/d/0/0/2d084a8bb1aac8eb1a04aef7511c3ed0.mp3*~data=user_id=0,application_id=42~hmac=f851f13c067883aefd8e90f00bd1f5f59082381ac6d28867ec37ba4090060fa5"
      },
      {
        "id": "tr-20",
        "title": "Tuta Gold",
        "artist": "Mahmood",
        "year": 2024,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/0/8/0/308f8b432ddca14815f7554889306271.mp3?hdnea=exp=1786710727~acl=/api/1/1/3/0/8/0/308f8b432ddca14815f7554889306271.mp3*~data=user_id=0,application_id=42~hmac=e4e4b1c6cf333d0a96b6f46c5013e6a6a12a03d78c5df412f6513d25a8412811"
      },
      {
        "id": "tr-21",
        "title": "100 Messaggi",
        "artist": "Lazza",
        "year": 2024,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/1/3/0/3133d76188876245b1f264b885ef57ff.mp3?hdnea=exp=1786710727~acl=/api/1/1/3/1/3/0/3133d76188876245b1f264b885ef57ff.mp3*~data=user_id=0,application_id=42~hmac=c51cc2566c7cc974aa0acf5198394fe607720c88da5b1f822bdaa49e863c9905"
      },
      {
        "id": "tr-22",
        "title": "Gelosa",
        "artist": "Finesse feat. Shiva, Sfera Ebbasta & Guè",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/2/d/0/12dd2855525a8e09a416b9e9b7daf09e.mp3?hdnea=exp=1786710727~acl=/api/1/1/1/2/d/0/12dd2855525a8e09a416b9e9b7daf09e.mp3*~data=user_id=0,application_id=42~hmac=cdc5b0e10096f1fe8febc3ef0129c3e0775375a23ee3305b1e0eb4d243eb428b"
      },
      {
        "id": "tr-23",
        "title": "La Dolce Vita",
        "artist": "Fedez, Tananai, Mara Sattei",
        "year": 2022,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/d/a/0/8daa08fa398bbbad7dd8ae7dad4171b8.mp3?hdnea=exp=1786710727~acl=/api/1/1/8/d/a/0/8daa08fa398bbbad7dd8ae7dad4171b8.mp3*~data=user_id=0,application_id=42~hmac=0d495b110dfbaff4281052c8be1287fa8432e5171fb4c6afa0e8b8d0e20e987e"
      },
      {
        "id": "tr-24",
        "title": "Italodisco",
        "artist": "The Kolors",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/1/c/0/11c270cc3cc555e92d662516a5a81c31.mp3?hdnea=exp=1786710727~acl=/api/1/1/1/1/c/0/11c270cc3cc555e92d662516a5a81c31.mp3*~data=user_id=0,application_id=42~hmac=3a806105b7a47984c6df0b8af9e8d740db4ba7b6a528db4af68a402617aa385c"
      },
      {
        "id": "tr-25",
        "title": "Un Ragazzo Una Ragazza",
        "artist": "The Kolors",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/6/0/ee6d4d4c8f87dcab05d4003a8936aed9.mp3?hdnea=exp=1786710727~acl=/api/1/1/e/e/6/0/ee6d4d4c8f87dcab05d4003a8936aed9.mp3*~data=user_id=0,application_id=42~hmac=483ff3d0c23be12e034dcdc83183108bc10578d8956c9a82ae0446e34fc252b2"
      },
      {
        "id": "tr-26",
        "title": "Click Boom!",
        "artist": "Rose Villain",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/b/0/2db789a7fd7f5ced94716a7a55b0606d.mp3?hdnea=exp=1786710727~acl=/api/1/1/2/d/b/0/2db789a7fd7f5ced94716a7a55b0606d.mp3*~data=user_id=0,application_id=42~hmac=47c85fb9b65879bc46695a5a5227ac4dd4aa4baa59ae60e3fbaf66073d0bb862"
      },
      {
        "id": "tr-27",
        "title": "Vai!",
        "artist": "Alfa",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/b/e/0/7be807e257e0cbbe24104214e7372adc.mp3?hdnea=exp=1786710728~acl=/api/1/1/7/b/e/0/7be807e257e0cbbe24104214e7372adc.mp3*~data=user_id=0,application_id=42~hmac=2e7f99b18733f253a216f79dc95a67eabcd266d5c7f80a7bb2b17e01c836e993"
      },
      {
        "id": "tr-28",
        "title": "Bellissimissima",
        "artist": "Alfa",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/d/2/0/dd23d1ef2d27d04cb0c71648f0ba4322.mp3?hdnea=exp=1786710728~acl=/api/1/1/d/d/2/0/dd23d1ef2d27d04cb0c71648f0ba4322.mp3*~data=user_id=0,application_id=42~hmac=53fa785f5bb23d9c574104619383089dc1859830f11397da870d58409cb574d1"
      },
      {
        "id": "tr-29",
        "title": "Tango",
        "artist": "Tananai",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/56/f5/7b/56f57b47-216e-c78b-55d0-4a6abdd6f08d/mzaf_736437645252082334.plus.aac.p.m4a"
      },
      {
        "id": "tr-30",
        "title": "Due Vite",
        "artist": "Marco Mengoni",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/b/3/0/2b34d2b79b82ec62626ae42638f3b056.mp3?hdnea=exp=1786710728~acl=/api/1/1/2/b/3/0/2b34d2b79b82ec62626ae42638f3b056.mp3*~data=user_id=0,application_id=42~hmac=6f59642039d5c1a2ed14faabf7e5f73a8cb21b8086873d547207aea746c452e8"
      },
      {
        "id": "tr-31",
        "title": "Tran Tran",
        "artist": "Sfera Ebbasta",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0a215b86a6301e35f87f1930006f3db9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/c/e/0/ace4e20111a89d1698b4dc1f9ec37ffc.mp3?hdnea=exp=1788639361~acl=/api/1/1/a/c/e/0/ace4e20111a89d1698b4dc1f9ec37ffc.mp3*~data=user_id=0,application_id=42~hmac=fc23741aeacbb604bc13bcbaf4f26c6111224e564b40e6a4195437a25e5c1d5b"
      },
      {
        "id": "tr-32",
        "title": "Cupido",
        "artist": "Sfera Ebbasta",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/826e62844ffbb89ca158272918cfd959/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/4/d/0/14dff38944c3527ae1261f6487eb8bba.mp3?hdnea=exp=1788639362~acl=/api/1/1/1/4/d/0/14dff38944c3527ae1261f6487eb8bba.mp3*~data=user_id=0,application_id=42~hmac=0194d0aecf5e00e6e76e0011bb6cbec37298fa1beefaa7d6e953c2ec598aa7f3"
      },
      {
        "id": "tr-33",
        "title": "Rockstar",
        "artist": "Sfera Ebbasta",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/826e62844ffbb89ca158272918cfd959/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/f/0/fffd56753941bcbee4aeb0e56788b420.mp3?hdnea=exp=1788639362~acl=/api/1/1/f/f/f/0/fffd56753941bcbee4aeb0e56788b420.mp3*~data=user_id=0,application_id=42~hmac=6b8c137be6f95400e6ab0a3f0f02f2a2f1c3f32558026cfefb05b8a789b5c681"
      },
      {
        "id": "tr-34",
        "title": "Habibi",
        "artist": "Ghali",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9cf233d901be7db2e6bd25f53828ed37/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/0/b/0/40b623e769b7757614096dd2cdf2df76.mp3?hdnea=exp=1788639362~acl=/api/1/1/4/0/b/0/40b623e769b7757614096dd2cdf2df76.mp3*~data=user_id=0,application_id=42~hmac=981fdf36f2bc874d454efe2ba99e64dbb1bf7f12da56aa0f941a901ae7fa08bd"
      },
      {
        "id": "tr-35",
        "title": "Happy Days",
        "artist": "Ghali",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9cf233d901be7db2e6bd25f53828ed37/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/c/b/0/ecb23f547fcb3801fc61ea8ec1a2a38b.mp3?hdnea=exp=1788639363~acl=/api/1/1/e/c/b/0/ecb23f547fcb3801fc61ea8ec1a2a38b.mp3*~data=user_id=0,application_id=42~hmac=86715f6fb500df0d7f3e337940f7bd2b3a8a7e58552293b0c2c0e4df08a74853"
      },
      {
        "id": "tr-36",
        "title": "Ninna Nanna",
        "artist": "Ghali",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9cf233d901be7db2e6bd25f53828ed37/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/6/7/0/a678e2cb5a17e08ac09c7f116b56e77e.mp3?hdnea=exp=1788639363~acl=/api/1/1/a/6/7/0/a678e2cb5a17e08ac09c7f116b56e77e.mp3*~data=user_id=0,application_id=42~hmac=d9446b5c17d74ef730facd8a8b5cc7afd20a696768469d43aab9591fdd93aed1"
      },
      {
        "id": "tr-37",
        "title": "Tesla (feat. Sfera Ebbasta & DrefGold)",
        "artist": "Capo Plaza",
        "year": 2018,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5b99a04cd6a6d82b8916bad5dad2d7fb/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/c/4/0/bc4abcc2799ec6321cb1a79020802663.mp3?hdnea=exp=1788639363~acl=/api/1/1/b/c/4/0/bc4abcc2799ec6321cb1a79020802663.mp3*~data=user_id=0,application_id=42~hmac=3fff1029c6f5b18868a285cbed1dc4b797fa73a932a1d72e13684a17c2d7d556"
      },
      {
        "id": "tr-38",
        "title": "Giovane Fuoriclasse",
        "artist": "Capo Plaza",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0f48a885c84e314ce91b951728722886/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/1/0/801d387b95f514b6731f2ee9decc9b78.mp3?hdnea=exp=1788639364~acl=/api/1/1/8/0/1/0/801d387b95f514b6731f2ee9decc9b78.mp3*~data=user_id=0,application_id=42~hmac=a141eeaebc0a7acea85f385e80cc8c5efa6a2008b74fe37ca1cbbb266e879c76"
      },
      {
        "id": "tr-39",
        "title": "Wasabi 2.0",
        "artist": "Tedua",
        "year": 2017,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/88bc8a11721ad88be70d75431c541b44/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/9/b/0/59b850171c001db5128295f02cdab8d4.mp3?hdnea=exp=1788639364~acl=/api/1/1/5/9/b/0/59b850171c001db5128295f02cdab8d4.mp3*~data=user_id=0,application_id=42~hmac=d8429b21cf82a714ceac829cb935334a8f09529a915beda7fa570f30c178c274"
      },
      {
        "id": "tr-40",
        "title": "Malamente",
        "artist": "Tedua",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a78a97f8dc8f5224f1ae06c133e5f524/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/0/d/0/40dd60e8b307af2396f392f5dd779160.mp3?hdnea=exp=1788639364~acl=/api/1/1/4/0/d/0/40dd60e8b307af2396f392f5dd779160.mp3*~data=user_id=0,application_id=42~hmac=11a5060e234620ab097e20386775aefebecb93691c7bfec37766358534de5364"
      },
      {
        "id": "tr-41",
        "title": "PANICO",
        "artist": "Lazza",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c748c99417202bc8c323e705269849d9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/a/7/0/9a7862c1ab3cbd7af6d60319c441a834.mp3?hdnea=exp=1788639365~acl=/api/1/1/9/a/7/0/9a7862c1ab3cbd7af6d60319c441a834.mp3*~data=user_id=0,application_id=42~hmac=78bbb8d5915cc47a361489dabbd9e43979676afe5864a48e77b5bf2ede3f4d89"
      },
      {
        "id": "tr-42",
        "title": "PIOVE",
        "artist": "Lazza",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c748c99417202bc8c323e705269849d9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/0/3/0/203a7a3fe2fb23f3e4154ff4ac14acf8.mp3?hdnea=exp=1788639365~acl=/api/1/1/2/0/3/0/203a7a3fe2fb23f3e4154ff4ac14acf8.mp3*~data=user_id=0,application_id=42~hmac=0ee112a941ea00727adccc21d3782d5901b3ae7adf5e2e990094a6810af110b9"
      },
      {
        "id": "tr-43",
        "title": "PARTIRE DA TE",
        "artist": "Rkomi",
        "year": 2021,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d8fe7873f67a0a0713af465620311d26/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/c/a/0/aca0fb484df098c3b74517286e641aa2.mp3?hdnea=exp=1788639365~acl=/api/1/1/a/c/a/0/aca0fb484df098c3b74517286e641aa2.mp3*~data=user_id=0,application_id=42~hmac=6bdf0ac99f8b7d25d394d231675decf29a2e2572048181b25121537ae0525a41"
      },
      {
        "id": "tr-44",
        "title": "Notti In Bianco",
        "artist": "Blanco",
        "year": 2020,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/1d81e4c4cecbb141f9cc7ef1544ea6ea/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/a/5/0/ea5f287e52ce57fc00318af8b3f2b5fa.mp3?hdnea=exp=1788639366~acl=/api/1/1/e/a/5/0/ea5f287e52ce57fc00318af8b3f2b5fa.mp3*~data=user_id=0,application_id=42~hmac=5069acb84668dde8d52d81766894593bbbe44b28bac17e13100187298880506f"
      },
      {
        "id": "tr-45",
        "title": "Soldi Puliti",
        "artist": "Shiva",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7c94dddf8cd8eb20baa35577f6916586/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/0/5/0/00584a45273c410c01185ead3b8a9c99.mp3?hdnea=exp=1788639366~acl=/api/1/1/0/0/5/0/00584a45273c410c01185ead3b8a9c99.mp3*~data=user_id=0,application_id=42~hmac=0865ec418369224f0c8544d252a539c67bbf2393d41913d0d5ce813ac90e8454"
      },
      {
        "id": "tr-46",
        "title": "MIU MIU",
        "artist": "Tony Effe",
        "year": 2024,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/92f5b8c7ab047e8af5b9b413dd21cfef/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/e/9/0/1e936f5811fb7b2a9963f74f9d8afba5.mp3?hdnea=exp=1788639366~acl=/api/1/1/1/e/9/0/1e936f5811fb7b2a9963f74f9d8afba5.mp3*~data=user_id=0,application_id=42~hmac=ca46c5cfddcccdb79826729958ff9ac26f1a3354ef67b409d7f3f24057b48d33"
      },
      {
        "id": "tr-47",
        "title": "BOSS",
        "artist": "Tony Effe",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3dcc65ce7a96c661d23fcc652ea514f3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/0/4/0/e045660aa3914b688c644002e96c9506.mp3?hdnea=exp=1788639366~acl=/api/1/1/e/0/4/0/e045660aa3914b688c644002e96c9506.mp3*~data=user_id=0,application_id=42~hmac=94a2e25231e82fb9553355ccf1e5277eacf7f364dca96e57a0cf1e3671d865ad"
      },
      {
        "id": "tr-48",
        "title": "COME VUOI",
        "artist": "Geolier",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5429e172c302c2a76a0455fe0fcc5ea7/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/5/b/0/05b07808fd7a3a8b0514df709b7b2f72.mp3?hdnea=exp=1788639367~acl=/api/1/1/0/5/b/0/05b07808fd7a3a8b0514df709b7b2f72.mp3*~data=user_id=0,application_id=42~hmac=0ef47ac509975cfa499a7e0b427a93b078cc153f0fd2e05e20ef5fd044f3db82"
      },
      {
        "id": "tr-49",
        "title": "MONEY",
        "artist": "Geolier",
        "year": 2023,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5429e172c302c2a76a0455fe0fcc5ea7/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/5/e/0/c5ec6f38b693cb1744fb71e907167529.mp3?hdnea=exp=1788639367~acl=/api/1/1/c/5/e/0/c5ec6f38b693cb1744fb71e907167529.mp3*~data=user_id=0,application_id=42~hmac=0c6cd878c9edd0c761ad84abd8b70fb7f3739d49dc59c0039e1942a07eca595e"
      },
      {
        "id": "tr-50",
        "title": "Mentalité",
        "artist": "Baby Gang",
        "year": 2022,
        "genre": "Hip-Hop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4824cfef08951c8d974f268209e2fe8f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/b/8/0/5b82ff675b1ba367f97616948764f30d.mp3?hdnea=exp=1788639367~acl=/api/1/1/5/b/8/0/5b82ff675b1ba367f97616948764f30d.mp3*~data=user_id=0,application_id=42~hmac=ed557ef3180e7e0d5a655c5f71f02ea298f1900d4ad74ef5d116833f59f2450a"
      }
    ]
  },
  {
    "id": "tormentoni-estivi",
    "title": "Tormentoni Estivi",
    "category": "italian",
    "description": "Baby K, Boomdabash, Annalisa, Fedez, Elodie e i tormentoni sotto l'ombrellone.",
    "badge": "Estate ☀️",
    "cover": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "te-1",
        "title": "Roma - Bangkok",
        "artist": "Baby K feat. Giusy Ferreri",
        "year": 2015,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/c/0/04c921a524076ff9af7cca13da32978c.mp3?hdnea=exp=1786710729~acl=/api/1/1/0/4/c/0/04c921a524076ff9af7cca13da32978c.mp3*~data=user_id=0,application_id=42~hmac=243cbb46858ccfc9075064631049d614d5f0341002bafdbe69242106db25b70a"
      },
      {
        "id": "te-2",
        "title": "Karaoke",
        "artist": "Boomdabash & Alessandra Amoroso",
        "year": 2020,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/2/1/0/021a8846fd9e009666dbd11a68ce42b9.mp3?hdnea=exp=1786710729~acl=/api/1/1/0/2/1/0/021a8846fd9e009666dbd11a68ce42b9.mp3*~data=user_id=0,application_id=42~hmac=2bec8cc3a1d1642c1088063a582af40f3624e9331798890070f3e4611d5c04b0"
      },
      {
        "id": "te-3",
        "title": "Mambo Salentino",
        "artist": "Boomdabash feat. Alessandra Amoroso",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/0/c/0/00c659bf02ab9434b21dc0e0b7645dfe.mp3?hdnea=exp=1786710728~acl=/api/1/1/0/0/c/0/00c659bf02ab9434b21dc0e0b7645dfe.mp3*~data=user_id=0,application_id=42~hmac=542b9364c51729ead44c4e38a15a9bf21a27647495eb22b69ad035bbd83377c8"
      },
      {
        "id": "te-4",
        "title": "Margarita",
        "artist": "Elodie & Marracash",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/b/d/0/0bd8207f00fa4fefa1aa1ac19b4564fc.mp3?hdnea=exp=1786710728~acl=/api/1/1/0/b/d/0/0bd8207f00fa4fefa1aa1ac19b4564fc.mp3*~data=user_id=0,application_id=42~hmac=498f833313ab9e339f013fb2d7c45230d70000b804050cb9e697f8db192e705c"
      },
      {
        "id": "te-5",
        "title": "Mille",
        "artist": "Fedez, Achille Lauro & Orietta Berti",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/d/6/0/dd6bf76e0224d60603ced8d1ad3dd6fe.mp3?hdnea=exp=1786710728~acl=/api/1/1/d/d/6/0/dd6bf76e0224d60603ced8d1ad3dd6fe.mp3*~data=user_id=0,application_id=42~hmac=348ade8d0add641f080ccef0cc21c0593861686cbcd5291aaf225935033a7ad8"
      },
      {
        "id": "te-6",
        "title": "Samba della Rosa",
        "artist": "Baby K",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/c/5/0/ac59dffe21b0383f600e62ffc0c08a0b.mp3?hdnea=exp=1786710730~acl=/api/1/1/a/c/5/0/ac59dffe21b0383f600e62ffc0c08a0b.mp3*~data=user_id=0,application_id=42~hmac=122106fdf2ea440418cb6d459352fc993588405d7cc5ed382650ada07847a166"
      },
      {
        "id": "te-7",
        "title": "Disco Paradise",
        "artist": "Fedez, Annalisa & Articolo 31",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/e/d/0/fed20cc0a3a96a3b1d0351931349b7ee.mp3?hdnea=exp=1786710729~acl=/api/1/1/f/e/d/0/fed20cc0a3a96a3b1d0351931349b7ee.mp3*~data=user_id=0,application_id=42~hmac=aa065a296950e30bddd7d5daec3244ce419f1d469a64a4abfba115d5458d593e"
      },
      {
        "id": "te-8",
        "title": "Pazza Musica",
        "artist": "Marco Mengoni & Elodie",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/6/8/0/068939e83fdfa917084fa48c0031409c.mp3?hdnea=exp=1786710729~acl=/api/1/1/0/6/8/0/068939e83fdfa917084fa48c0031409c.mp3*~data=user_id=0,application_id=42~hmac=3a5fe388b36332cc6069aec87ba4e4cc0b9de87183ef387b9f72c9aafa3d911b"
      },
      {
        "id": "te-9",
        "title": "Rubami la Notte",
        "artist": "Pinguini Tattici Nucleari",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/e/1/0/be1b5e696bf9d6c0c975ab637e439b66.mp3?hdnea=exp=1786710729~acl=/api/1/1/b/e/1/0/be1b5e696bf9d6c0c975ab637e439b66.mp3*~data=user_id=0,application_id=42~hmac=064b68f7dac75e2c8b2bca065518ff4c50c4fe07ff75d54ee1469be161da3ba5"
      },
      {
        "id": "te-10",
        "title": "Vorrei ma non posto",
        "artist": "J-AX & Fedez",
        "year": 2016,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/f/c/0/afcb02bb53305dfef099363c2ca0aa24.mp3?hdnea=exp=1786710729~acl=/api/1/1/a/f/c/0/afcb02bb53305dfef099363c2ca0aa24.mp3*~data=user_id=0,application_id=42~hmac=8a0fd2fac11c4149100d3f8fdb8b217f245af16a177a6d3606a99060ea1a7ee8"
      },
      {
        "id": "te-11",
        "title": "Senza Pagare",
        "artist": "J-AX & Fedez",
        "year": 2017,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/4/2/0/e42a0f1c2516ce7175a4396fe0b1aa00.mp3?hdnea=exp=1786710730~acl=/api/1/1/e/4/2/0/e42a0f1c2516ce7175a4396fe0b1aa00.mp3*~data=user_id=0,application_id=42~hmac=d1a4dbb93a355fddc46556d300981ca570acec6dc71b096aa39d7baef6ecf60d"
      },
      {
        "id": "te-12",
        "title": "Amore e Capoeira",
        "artist": "Takagi & Ketra feat. Giusy Ferreri",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/d/0/f6d272ada00d5db0e3e5440dd5c73c23.mp3?hdnea=exp=1786710730~acl=/api/1/1/f/6/d/0/f6d272ada00d5db0e3e5440dd5c73c23.mp3*~data=user_id=0,application_id=42~hmac=c127c07c2505fceee0b7b555d42fe84708fbd8bd05ffffe44a363907ac0e67ea"
      },
      {
        "id": "te-13",
        "title": "Jambo",
        "artist": "Takagi & Ketra feat. OMI & Giusy Ferreri",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/a/6/0/8a624dfa65e2ee8e9afa72e6b6ec8dea.mp3?hdnea=exp=1786710730~acl=/api/1/1/8/a/6/0/8a624dfa65e2ee8e9afa72e6b6ec8dea.mp3*~data=user_id=0,application_id=42~hmac=9ee4b4664b3a31196184575b0189cfad6fc14aa717eb31257a34d5f14c97f606"
      },
      {
        "id": "te-14",
        "title": "Ciclone",
        "artist": "Takagi & Ketra feat. Elodie & Mariah",
        "year": 2020,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/4/8/0/248bd5671bea0a6700dad5554edb01bf.mp3?hdnea=exp=1786710730~acl=/api/1/1/2/4/8/0/248bd5671bea0a6700dad5554edb01bf.mp3*~data=user_id=0,application_id=42~hmac=1f3beda0f7890a6f6eeab41e64ded0464ece20029b44f602cc90f505cafe95d2"
      },
      {
        "id": "te-15",
        "title": "Tribale",
        "artist": "Elodie",
        "year": 2022,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/7/c/0/47cba3478895625db4e4bd5b7d94bdbc.mp3?hdnea=exp=1786710730~acl=/api/1/1/4/7/c/0/47cba3478895625db4e4bd5b7d94bdbc.mp3*~data=user_id=0,application_id=42~hmac=1c98fd36f822dcd618f5a38d5077803dcdb79f35cd52344fe5b4c2f37577f95a"
      },
      {
        "id": "te-16",
        "title": "Makumba",
        "artist": "Noemi & Carl Brave",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/2/6/0/4261f13f348e648f2f77779202930b0c.mp3?hdnea=exp=1786710730~acl=/api/1/1/4/2/6/0/4261f13f348e648f2f77779202930b0c.mp3*~data=user_id=0,application_id=42~hmac=ab2c8c2649ce9da4f87cb4193f4e293e0f96b1b9168ccea5c3b2ef4f8c9e8c70"
      },
      {
        "id": "te-17",
        "title": "Movimento Lento",
        "artist": "Annalisa feat. Federico Rossi",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/1/5/0/f1520fcdb288c097bbf156010c13fe00.mp3?hdnea=exp=1786710730~acl=/api/1/1/f/1/5/0/f1520fcdb288c097bbf156010c13fe00.mp3*~data=user_id=0,application_id=42~hmac=a220f4634b331f6c1712303e78d2f04ac8cd37ff5e3def9a908af3a12c6a0812"
      },
      {
        "id": "te-18",
        "title": "Tropicana",
        "artist": "Boomdabash & Annalisa",
        "year": 2022,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/9/0/649244e0481df715ba81dc10161ff46e.mp3?hdnea=exp=1786710730~acl=/api/1/1/6/4/9/0/649244e0481df715ba81dc10161ff46e.mp3*~data=user_id=0,application_id=42~hmac=5003d2056fafaa2539b11bcdd12e83572846e0ed3daa441d6eb77b736518b439"
      },
      {
        "id": "te-19",
        "title": "L-OMOBONO",
        "artist": "Rocco Hunt feat. Ana Mena",
        "year": 2020,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/1/8/0/51879708eb844a7dc1b44720797e6ba3.mp3?hdnea=exp=1786710731~acl=/api/1/1/5/1/8/0/51879708eb844a7dc1b44720797e6ba3.mp3*~data=user_id=0,application_id=42~hmac=7c18134f74fc2a841b01fb70982ab6223c5cda33ad98041080ac573c3ab467e3"
      },
      {
        "id": "te-20",
        "title": "Un bacio all'improvviso",
        "artist": "Rocco Hunt & Ana Mena",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/6/6/0/c66cb77b9e219cbd8be09bc7bb4eda04.mp3?hdnea=exp=1786710730~acl=/api/1/1/c/6/6/0/c66cb77b9e219cbd8be09bc7bb4eda04.mp3*~data=user_id=0,application_id=42~hmac=20f8c2a08b945621e7c8383de35d92b0659f928a977f80a0fa7ed25facc8c8ba"
      },
      {
        "id": "te-21",
        "title": "D'estate non vale",
        "artist": "Fred De Palma feat. Ana Mena",
        "year": 2018,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/3/e/0/f3e32a3042815d0d446f410246779c31.mp3?hdnea=exp=1786710732~acl=/api/1/1/f/3/e/0/f3e32a3042815d0d446f410246779c31.mp3*~data=user_id=0,application_id=42~hmac=dcc0abe2e2af818835f8f143c4c94eb6bd21f6e7d598f032b40fc3699e5d8744"
      },
      {
        "id": "te-22",
        "title": "Una volta ancora",
        "artist": "Fred De Palma feat. Ana Mena",
        "year": 2019,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/2/7/0/d27e863692288d62870ebaef25290453.mp3?hdnea=exp=1786710732~acl=/api/1/1/d/2/7/0/d27e863692288d62870ebaef25290453.mp3*~data=user_id=0,application_id=42~hmac=c9c53bae458a01d7ea98adfc7e1219617d016cd19478175cfe3efc014221041a"
      },
      {
        "id": "te-23",
        "title": "Paloma",
        "artist": "Fred De Palma feat. Anitta",
        "year": 2020,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/f/a/0/4fa0ddeeb04664cd2d88902e2908f95c.mp3?hdnea=exp=1786710732~acl=/api/1/1/4/f/a/0/4fa0ddeeb04664cd2d88902e2908f95c.mp3*~data=user_id=0,application_id=42~hmac=002164cd7878485bc2583e027f425b4e05116dffc8c8c2441cfaf96d264eb269"
      },
      {
        "id": "te-24",
        "title": "Nera",
        "artist": "Irama",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/b/c/0/6bcb4a6bb24d1517b1bf512af932df0a.mp3?hdnea=exp=1786710732~acl=/api/1/1/6/b/c/0/6bcb4a6bb24d1517b1bf512af932df0a.mp3*~data=user_id=0,application_id=42~hmac=8e92c5877c16993399eb6a4f86410efa851bd0e9acd37411c5efe3f7b026a3d8"
      },
      {
        "id": "te-25",
        "title": "Arrogante",
        "artist": "Irama",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/7/8/0/278ad49c0c1b4a0076bf8722c0b491d8.mp3?hdnea=exp=1786710732~acl=/api/1/1/2/7/8/0/278ad49c0c1b4a0076bf8722c0b491d8.mp3*~data=user_id=0,application_id=42~hmac=5de4419c2bed85bcf6bb8704e03651c7099179102c837fec67eb7b9fb1dc2069"
      },
      {
        "id": "te-26",
        "title": "Mediterranea",
        "artist": "Irama",
        "year": 2020,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/d/d/0/bdd27cd050690d1b4a915c2dc48063e9.mp3?hdnea=exp=1786710732~acl=/api/1/1/b/d/d/0/bdd27cd050690d1b4a915c2dc48063e9.mp3*~data=user_id=0,application_id=42~hmac=245cfa72fd6aae3bd42dc4c9971bcfd48b6c2363eeca0b53971fc87c809291e7"
      },
      {
        "id": "te-27",
        "title": "Pamplona",
        "artist": "Fabri Fibra feat. Thegiornalisti",
        "year": 2017,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/9/0/049bd5ba916a94d6723478fcbc1d90af.mp3?hdnea=exp=1786710732~acl=/api/1/1/0/4/9/0/049bd5ba916a94d6723478fcbc1d90af.mp3*~data=user_id=0,application_id=42~hmac=b9839beee37ecf594cafb43aec7be950c9ac3ecabbfd7dd92ab0857cac136ab6"
      },
      {
        "id": "te-28",
        "title": "Riccione",
        "artist": "Thegiornalisti",
        "year": 2017,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/5/9/0/0593b8d4dde995772aa53bcd52e7e53f.mp3?hdnea=exp=1786710732~acl=/api/1/1/0/5/9/0/0593b8d4dde995772aa53bcd52e7e53f.mp3*~data=user_id=0,application_id=42~hmac=f369b97a9491a3df8c6c4efe4e88c06e09e610b41612a7d32ccfe292cf8cb2b6"
      },
      {
        "id": "te-29",
        "title": "Felicità puttana",
        "artist": "Thegiornalisti",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/c/2/0/fc2530e2172689dc1679d0e9c728581c.mp3?hdnea=exp=1786710732~acl=/api/1/1/f/c/2/0/fc2530e2172689dc1679d0e9c728581c.mp3*~data=user_id=0,application_id=42~hmac=111fb58df9706bca4fd37b7152d7eb94a916d811f1cef0a56be6f560db9913ee"
      },
      {
        "id": "te-30",
        "title": "Maradona y Pelé",
        "artist": "Thegiornalisti",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/6/b/0/86bb93862979748e015061ed52dec575.mp3?hdnea=exp=1786710732~acl=/api/1/1/8/6/b/0/86bb93862979748e015061ed52dec575.mp3*~data=user_id=0,application_id=42~hmac=826b443a9bc122539295ea8797401ac5bd9c2982f17f119255ee1e66759d74bb"
      },
      {
        "id": "te-31",
        "title": "Vamos a la Playa",
        "artist": "Righeira",
        "year": 2017,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/852ec740a8e97c2386da53c6c21c7ee6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/2/2/0/722ce3dfaeaa2dd117c4d239a035fe7c.mp3?hdnea=exp=1788639368~acl=/api/1/1/7/2/2/0/722ce3dfaeaa2dd117c4d239a035fe7c.mp3*~data=user_id=0,application_id=42~hmac=19379326ac21802a619878e6a1398d4acdac85856cc8b5630d596ed3adf0ff1b"
      },
      {
        "id": "te-32",
        "title": "L'estate stà finendo",
        "artist": "Righeira",
        "year": 2007,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/68f88bcbe6e32b092642ac0ba0257a45/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/d/2/0/fd25af1ac8641b30d878ce89115761f6.mp3?hdnea=exp=1788639368~acl=/api/1/1/f/d/2/0/fd25af1ac8641b30d878ce89115761f6.mp3*~data=user_id=0,application_id=42~hmac=d00b16d315dbf2244b73f7c944a115eb954ac4a045eecbff74fbd535813a4200"
      },
      {
        "id": "te-33",
        "title": "Macarena",
        "artist": "Los Del Río",
        "year": 1996,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/472a63e73ad7e23165f6945be2b0eee2/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/c/3/0/2c3ec1e51332c8c9f9e17e684a4e50b6.mp3?hdnea=exp=1788639368~acl=/api/1/1/2/c/3/0/2c3ec1e51332c8c9f9e17e684a4e50b6.mp3*~data=user_id=0,application_id=42~hmac=726f00d3d2728b147f1de75c7fe6c83d89ed40a110e87029e7b40e23ff030cc7"
      },
      {
        "id": "te-34",
        "title": "The Ketchup Song (Aserejé) (Spanish Version)",
        "artist": "Las Ketchup",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/be45674dc35c8f974a934dc3779c7b59/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/d/2/0/5d2f18d9385c83c13862d6ab13d4821c.mp3?hdnea=exp=1788639369~acl=/api/1/1/5/d/2/0/5d2f18d9385c83c13862d6ab13d4821c.mp3*~data=user_id=0,application_id=42~hmac=ced667ce3d387d5113be7b5dbdb3d217a21b8129e849217187d7584677c1aca3"
      },
      {
        "id": "te-35",
        "title": "Lambada",
        "artist": "Kaoma",
        "year": 1989,
        "genre": "Latin",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fd4d708dc127726804135ff1b80b7a73/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/b/4/0/8b4739a689fc58286aefe90571daee4b.mp3?hdnea=exp=1788639369~acl=/api/1/1/8/b/4/0/8b4739a689fc58286aefe90571daee4b.mp3*~data=user_id=0,application_id=42~hmac=8dd2e1b5cc1ebb2c5b2f62af8c9a5d977e95ed2be4ab4511ccaf58737e7766fd"
      },
      {
        "id": "te-36",
        "title": "Da zero a cento",
        "artist": "Baby K",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/94eed2b266dbb8236b3b7fd706abb221/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/f/5/0/8f5d68270f14752377ee623154a2e0c0.mp3?hdnea=exp=1788639370~acl=/api/1/1/8/f/5/0/8f5d68270f14752377ee623154a2e0c0.mp3*~data=user_id=0,application_id=42~hmac=8a2f270f87043b388da580eab0ca4bb7920a48bc194af309ce769e4fd1900b5f"
      },
      {
        "id": "te-37",
        "title": "Playa",
        "artist": "Baby K",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6cde4a8dc9ed8d2ff0fdc501e24661de/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/a/8/0/fa836b3bff2b45d56e2b607959309d49.mp3?hdnea=exp=1788639370~acl=/api/1/1/f/a/8/0/fa836b3bff2b45d56e2b607959309d49.mp3*~data=user_id=0,application_id=42~hmac=76408c98a1fd5bd68a3d6cefb9d6daedc658d97b464c98a8ca2bbf36626263d3"
      },
      {
        "id": "te-38",
        "title": "L'esercito del selfie (feat. Lorenzo Fragola & Arisa)",
        "artist": "Takagi & Ketra",
        "year": 2017,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/46ecf28198a3719eada86c3fd645c73f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/5/1/0/0510aba2e64ccf220614293a7774769d.mp3?hdnea=exp=1788639370~acl=/api/1/1/0/5/1/0/0510aba2e64ccf220614293a7774769d.mp3*~data=user_id=0,application_id=42~hmac=00a08f66235143bf9567aeac6f7d0d5316056c99b10149d0ea9aa1091d2d454e"
      },
      {
        "id": "te-39",
        "title": "Non Ti Dico No",
        "artist": "BoomDaBash",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/552bf1e483999ff2a2eaf91bdc66b619/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/7/5/0/6756a77b5e0c74191f541fbc3ef5950b.mp3?hdnea=exp=1788639371~acl=/api/1/1/6/7/5/0/6756a77b5e0c74191f541fbc3ef5950b.mp3*~data=user_id=0,application_id=42~hmac=ad232a869f86146d0e5d0e6e6eb5baa45f50df120bb03d94067e888c36674dd8"
      },
      {
        "id": "te-40",
        "title": "A Un Passo Dalla Luna",
        "artist": "Rocco Hunt",
        "year": 2020,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c3e36a878820aff1376d48ae553d4633/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/9/d/0/89dc712fb56a9617909e11f2e8447764.mp3?hdnea=exp=1788639371~acl=/api/1/1/8/9/d/0/89dc712fb56a9617909e11f2e8447764.mp3*~data=user_id=0,application_id=42~hmac=703e6ec0377137a6807c84bac4fd665597e0a76ee313814cca17cb920f2bea75"
      },
      {
        "id": "te-41",
        "title": "Ti raggiungerò",
        "artist": "Fred De Palma",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7c10d370b964fa66bf414b9fb9ae31d0/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/9/f/0/b9f57fa9bf4af80a009aef9dc724fab8.mp3?hdnea=exp=1788639371~acl=/api/1/1/b/9/f/0/b9f57fa9bf4af80a009aef9dc724fab8.mp3*~data=user_id=0,application_id=42~hmac=93c5c72019a7730a8f9bfc28693d923137e247d245df79d78108ea1c5f535e50"
      },
      {
        "id": "te-42",
        "title": "Pistolero",
        "artist": "Elettra Lamborghini",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/50981947faede9cd5e87b2c7b6c7b908/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/2/b/0/32b597a258c4ca03ce484d8b54d420a2.mp3?hdnea=exp=1788639372~acl=/api/1/1/3/2/b/0/32b597a258c4ca03ce484d8b54d420a2.mp3*~data=user_id=0,application_id=42~hmac=f55a58238a7c307f6a4107d5609d2a3e3b18005e78be9b17189ced778dc2fb16"
      },
      {
        "id": "te-43",
        "title": "Pem Pem",
        "artist": "Elettra Lamborghini",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7a7b74d10b6080f5c1be9cc79f97ec41/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/d/f/0/ddfcefc02ec2f9e9eda01949fd0e818c.mp3?hdnea=exp=1788639372~acl=/api/1/1/d/d/f/0/ddfcefc02ec2f9e9eda01949fd0e818c.mp3*~data=user_id=0,application_id=42~hmac=ed307400953512f488374da41099f3fe7438327cb4463e36688e2f5c3c187968"
      },
      {
        "id": "te-44",
        "title": "Bellissima",
        "artist": "Annalisa",
        "year": 2022,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/67896125f66972e214648e454a8966cb/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/2/0/502dfb872d8fff0fb9fd77e49ba17713.mp3?hdnea=exp=1788639372~acl=/api/1/1/5/0/2/0/502dfb872d8fff0fb9fd77e49ba17713.mp3*~data=user_id=0,application_id=42~hmac=3f8b07d1fa91daf540c57d8f87186df766c72d32b237ce6288ecc3bb7ac2ba76"
      },
      {
        "id": "te-45",
        "title": "malibu",
        "artist": "Sangiovanni",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d3fd51f1653bf3af596171294ae342c8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/c/4/0/6c436d63bcd6517be8773786310b20a4.mp3?hdnea=exp=1788639373~acl=/api/1/1/6/c/4/0/6c436d63bcd6517be8773786310b20a4.mp3*~data=user_id=0,application_id=42~hmac=abbd15677fe917ffeda1b413fa838656df57baf56b78f6c814991222be470aee"
      },
      {
        "id": "te-46",
        "title": "Musica leggerissima",
        "artist": "Colapesce",
        "year": 2021,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/87d0cebf45ad16526091582769121c97/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/c/f/0/7cf395d406c906c43335c8229411f883.mp3?hdnea=exp=1788639373~acl=/api/1/1/7/c/f/0/7cf395d406c906c43335c8229411f883.mp3*~data=user_id=0,application_id=42~hmac=9bea4628f8f720d5b4bb0a82b3a3f4b6857b76ab25ae7398abac62906e23451f"
      },
      {
        "id": "te-47",
        "title": "Italiana",
        "artist": "J-AX",
        "year": 2018,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/484b20968fca68f994fbde625e1eefd0/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/c/7/0/2c7d486dc3b439dbd2de9a92bd1d3a06.mp3?hdnea=exp=1788639373~acl=/api/1/1/2/c/7/0/2c7d486dc3b439dbd2de9a92bd1d3a06.mp3*~data=user_id=0,application_id=42~hmac=1066292cd958d0f89ab965178ca8f4b13e9783400d3dd754ceee09313e037b0e"
      },
      {
        "id": "te-48",
        "title": "Partiti adesso",
        "artist": "Giusy Ferreri",
        "year": 2017,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/083d765d510f65ced22cec39911457a1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/3/0/e9321596a87e1acbda1eeaba856e779f.mp3?hdnea=exp=1788639374~acl=/api/1/1/e/9/3/0/e9321596a87e1acbda1eeaba856e779f.mp3*~data=user_id=0,application_id=42~hmac=50804b8e10b220db5ec6f8ad06dcad92b98d313fc8615bc559b9dffaef8fa186"
      },
      {
        "id": "te-49",
        "title": "D'estate non vale (feat. Ana Mena)",
        "artist": "Fred De Palma",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a3d38f0ab83992d461bc9148c12f51a3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/3/e/0/f3e32a3042815d0d446f410246779c31.mp3?hdnea=exp=1788639374~acl=/api/1/1/f/3/e/0/f3e32a3042815d0d446f410246779c31.mp3*~data=user_id=0,application_id=42~hmac=3c62e64742fc8854e3ec95394291a4493a47ac58ab3e9f142131ab7949907aa9"
      },
      {
        "id": "te-50",
        "title": "Per Un Milione",
        "artist": "BoomDaBash",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8ffa0c3abb857efe43233f3a7192b2d0/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/6/2/0/c62c1dd4416bc330d7cf2b0765537cc2.mp3?hdnea=exp=1788639375~acl=/api/1/1/c/6/2/0/c62c1dd4416bc330d7cf2b0765537cc2.mp3*~data=user_id=0,application_id=42~hmac=cd5581c3892d6834926a116cfc652941dd1db823a47fee6795edc23450c6c450"
      }
    ]
  },
  {
    "id": "rock-classics",
    "title": "Rock Classics & Hard Rock",
    "category": "genres",
    "description": "AC/DC, Guns N' Roses, Queen, Led Zeppelin, Metallica e le leggende del rock.",
    "badge": "Omaggio PRO 👑",
    "isProGift": true,
    "unlockRequirement": {
      "minLevel": 3,
      "label": "Livello 3 (Gratis con PRO 👑)"
    },
    "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "rc-1",
        "title": "Back in Black",
        "artist": "AC/DC",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/2/b/0/82be918b42c3d26093b20d01e97e4a03.mp3?hdnea=exp=1786710733~acl=/api/1/1/8/2/b/0/82be918b42c3d26093b20d01e97e4a03.mp3*~data=user_id=0,application_id=42~hmac=5b7837dcdda35e0ba723bf4e75ec83341f24dc143e703ec87fd3bbc7b317a901"
      },
      {
        "id": "rc-2",
        "title": "Sweet Child O' Mine",
        "artist": "Guns N' Roses",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/9/1/0/59115eec88ea0bc7742eaba93facf49b.mp3?hdnea=exp=1786710733~acl=/api/1/1/5/9/1/0/59115eec88ea0bc7742eaba93facf49b.mp3*~data=user_id=0,application_id=42~hmac=b83ee830fb569f4e4f12037aaf8955eedbd3ba1b79ed4d0eff853df574e651e9"
      },
      {
        "id": "rc-3",
        "title": "Bohemian Rhapsody",
        "artist": "Queen",
        "year": 1975,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/f/9/0/5f9a6a2ea1876e6d07c4b7feefa99951.mp3?hdnea=exp=1786710733~acl=/api/1/1/5/f/9/0/5f9a6a2ea1876e6d07c4b7feefa99951.mp3*~data=user_id=0,application_id=42~hmac=b2c6fbc99b74aab3e695d90e949f8f757dddc90e4e6effa36dbbd27721464dc0"
      },
      {
        "id": "rc-4",
        "title": "Stairway to Heaven",
        "artist": "Led Zeppelin",
        "year": 1971,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/6/6/0/26692783366247f9e456227bc4eb9550.mp3?hdnea=exp=1786710733~acl=/api/1/1/2/6/6/0/26692783366247f9e456227bc4eb9550.mp3*~data=user_id=0,application_id=42~hmac=51937b5996543e63c0dd464754b4b8fd2c7a4de4b3109ca79defb16abe95244f"
      },
      {
        "id": "rc-5",
        "title": "Highway to Hell",
        "artist": "AC/DC",
        "year": 1979,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/7/1/0/d7183d3dd28d85289690100ef5d7c78e.mp3?hdnea=exp=1786710733~acl=/api/1/1/d/7/1/0/d7183d3dd28d85289690100ef5d7c78e.mp3*~data=user_id=0,application_id=42~hmac=3d7213bd7cd75b3ec80a2ead962c4a5927c8b0d2c7cbeedfb695c8a154ad5db4"
      },
      {
        "id": "rc-6",
        "title": "Welcome to the Jungle",
        "artist": "Guns N' Roses",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/3/b/0/e3bdd797ec36df3068f8288688889ef2.mp3?hdnea=exp=1786710733~acl=/api/1/1/e/3/b/0/e3bdd797ec36df3068f8288688889ef2.mp3*~data=user_id=0,application_id=42~hmac=9906a523b9cfce22b2861b313b05d96f32f82e75502d7ac47e77fb790d978817"
      },
      {
        "id": "rc-7",
        "title": "Livin' on a Prayer",
        "artist": "Bon Jovi",
        "year": 1986,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/c/1/0/7c1d95d2fe6ad479f66d912db049df50.mp3?hdnea=exp=1786710733~acl=/api/1/1/7/c/1/0/7c1d95d2fe6ad479f66d912db049df50.mp3*~data=user_id=0,application_id=42~hmac=a7dc6dec7920bea64b1be5f633b351d1073a4a959b9b9b098530b28b2992344a"
      },
      {
        "id": "rc-8",
        "title": "Dream On",
        "artist": "Aerosmith",
        "year": 1973,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/d/4/0/4d48fb562972ca6f4e22b71e91ee56d0.mp3?hdnea=exp=1786710733~acl=/api/1/1/4/d/4/0/4d48fb562972ca6f4e22b71e91ee56d0.mp3*~data=user_id=0,application_id=42~hmac=412144193046eefdf39f91ed8edc811c370e48f9043f359b7ccd8f53fb17e286"
      },
      {
        "id": "rc-9",
        "title": "Smoke on the Water",
        "artist": "Deep Purple",
        "year": 1972,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/c/9/0/bc9848c20aeee8c5e31eca4df45921d9.mp3?hdnea=exp=1786710733~acl=/api/1/1/b/c/9/0/bc9848c20aeee8c5e31eca4df45921d9.mp3*~data=user_id=0,application_id=42~hmac=412298a811dc89c31e453a2b48727b6bb62381125ee75d1bee54d2aadf9bda9b"
      },
      {
        "id": "rc-10",
        "title": "Paranoid",
        "artist": "Black Sabbath",
        "year": 1970,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/f/a/0/2fae3cdf8b3dddd5cc6487572b160277.mp3?hdnea=exp=1786710733~acl=/api/1/1/2/f/a/0/2fae3cdf8b3dddd5cc6487572b160277.mp3*~data=user_id=0,application_id=42~hmac=2419a3efbf20399c81f38d18febdba183f14431af816f73b2202d850de965bd0"
      },
      {
        "id": "rc-11",
        "title": "Rock You Like a Hurricane",
        "artist": "Scorpions",
        "year": 1984,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/a/5/0/fa55ffe7ef454ead73733a739e192f23.mp3?hdnea=exp=1786710733~acl=/api/1/1/f/a/5/0/fa55ffe7ef454ead73733a739e192f23.mp3*~data=user_id=0,application_id=42~hmac=c06f4f6ae1c14cb60a3d53cebb5ab192b83de0252add0113a1c5dd846bb16d43"
      },
      {
        "id": "rc-12",
        "title": "I Love Rock 'N Roll",
        "artist": "Joan Jett & the Blackhearts",
        "year": 1981,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/9/0/509853cb718536aa41689abb1b63d16c.mp3?hdnea=exp=1786710733~acl=/api/1/1/5/0/9/0/509853cb718536aa41689abb1b63d16c.mp3*~data=user_id=0,application_id=42~hmac=b8f7f34b6fa7a02ddc4cdaf6e4073343893f48ef41d3fdebb7edafc4872cd6e1"
      },
      {
        "id": "rc-13",
        "title": "Thunderstruck",
        "artist": "AC/DC",
        "year": 1990,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/1/1/0/1117489d36f3a1a80c8815c1137747a9.mp3?hdnea=exp=1786710733~acl=/api/1/1/1/1/1/0/1117489d36f3a1a80c8815c1137747a9.mp3*~data=user_id=0,application_id=42~hmac=9b6607413aa70d8b9d8d13df9483b18ca5e849bbef1f76a3f123f39f0b00b1c1"
      },
      {
        "id": "rc-14",
        "title": "Paradise City",
        "artist": "Guns N' Roses",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/8/0/9c8ef7fd15bb502b764c0551a3c9306f.mp3?hdnea=exp=1786710733~acl=/api/1/1/9/c/8/0/9c8ef7fd15bb502b764c0551a3c9306f.mp3*~data=user_id=0,application_id=42~hmac=5d5318d8077e5b17c596525028b6c729ea72df71c9d94af8e7109a595f32298c"
      },
      {
        "id": "rc-15",
        "title": "We Will Rock You",
        "artist": "Queen",
        "year": 1977,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/f/0/63f78a766de3da2a4e41bd2bd17dea09.mp3?hdnea=exp=1786710733~acl=/api/1/1/6/3/f/0/63f78a766de3da2a4e41bd2bd17dea09.mp3*~data=user_id=0,application_id=42~hmac=b82192f859ac052974e50bbae357ffe1e51033864b5e48409822f8ffc3ebd50e"
      },
      {
        "id": "rc-16",
        "title": "Kashmir",
        "artist": "Led Zeppelin",
        "year": 1975,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/d/0/0/8d03f9a22b39f3801189ca58b476f0ca.mp3?hdnea=exp=1786710733~acl=/api/1/1/8/d/0/0/8d03f9a22b39f3801189ca58b476f0ca.mp3*~data=user_id=0,application_id=42~hmac=af610061b427691bcb1ac5f0ccc34288dea9c36b46999a4a8f1b5d705085d223"
      },
      {
        "id": "rc-17",
        "title": "You Give Love a Bad Name",
        "artist": "Bon Jovi",
        "year": 1986,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/b/f/0/1bf7aa2754a2b8c2bdb2d9630f6c3213.mp3?hdnea=exp=1786710733~acl=/api/1/1/1/b/f/0/1bf7aa2754a2b8c2bdb2d9630f6c3213.mp3*~data=user_id=0,application_id=42~hmac=5a463a6a2de56f8a108c920eaca52b6bc44eb6ae90cf296f842d1cad86e07b98"
      },
      {
        "id": "rc-18",
        "title": "Walk This Way",
        "artist": "Aerosmith",
        "year": 1975,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/b/f/0/bbfc8dc5a9cd13e168177c0df75477b0.mp3?hdnea=exp=1786710733~acl=/api/1/1/b/b/f/0/bbfc8dc5a9cd13e168177c0df75477b0.mp3*~data=user_id=0,application_id=42~hmac=34639c9269485e3a8c8fdae61abcabe97c156b8b44da2241b8b39d1f09667dbc"
      },
      {
        "id": "rc-19",
        "title": "Born to Be Wild",
        "artist": "Steppenwolf",
        "year": 1968,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/1/b/0/71be944d3f7ae726e088e9af4f125ab1.mp3?hdnea=exp=1786710733~acl=/api/1/1/7/1/b/0/71be944d3f7ae726e088e9af4f125ab1.mp3*~data=user_id=0,application_id=42~hmac=7c64b669ecbdfc0de789a8be4adf77a0cc659e998b3fc5859fccd1a6b04a6d96"
      },
      {
        "id": "rc-20",
        "title": "Iron Man",
        "artist": "Black Sabbath",
        "year": 1970,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/c/0/c4cd297f98da3085a01d0a9da110043e.mp3?hdnea=exp=1786710733~acl=/api/1/1/c/4/c/0/c4cd297f98da3085a01d0a9da110043e.mp3*~data=user_id=0,application_id=42~hmac=fef75903e6a0ce6ae57dfb46cdb38ce837928e4e6b2d13bfb62df1fbfe929e18"
      },
      {
        "id": "rc-21",
        "title": "Wind of Change",
        "artist": "Scorpions",
        "year": 1990,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/1/a/0/e1a1bb337e5c11cf2deb4fd1009bb075.mp3?hdnea=exp=1786710734~acl=/api/1/1/e/1/a/0/e1a1bb337e5c11cf2deb4fd1009bb075.mp3*~data=user_id=0,application_id=42~hmac=3c221a71cd36d7fe540e573138b7ab892afda8308eac72a57227b22bcbc8f8e3"
      },
      {
        "id": "rc-22",
        "title": "Master of Puppets",
        "artist": "Metallica",
        "year": 1986,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/d/e/0/7dee9f3fe45b02061a324bc8f3904d1b.mp3?hdnea=exp=1786710734~acl=/api/1/1/7/d/e/0/7dee9f3fe45b02061a324bc8f3904d1b.mp3*~data=user_id=0,application_id=42~hmac=c79194621731d25ee819ed51504998f9143b14056ce382f364715ec5b3d2fde6"
      },
      {
        "id": "rc-23",
        "title": "Nothing Else Matters",
        "artist": "Metallica",
        "year": 1991,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/8/9/0/d897487b8b86e39b13d94a5ad5996cbc.mp3?hdnea=exp=1786710734~acl=/api/1/1/d/8/9/0/d897487b8b86e39b13d94a5ad5996cbc.mp3*~data=user_id=0,application_id=42~hmac=5a7d94ca7fe7f88297c5ec5d910fe1ccd3364d36c9f9f6426dc12a7c631b47c8"
      },
      {
        "id": "rc-24",
        "title": "Crazy Train",
        "artist": "Ozzy Osbourne",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/8/0/048b6f79ce257b2f4aaefd150a2914ef.mp3?hdnea=exp=1786710734~acl=/api/1/1/0/4/8/0/048b6f79ce257b2f4aaefd150a2914ef.mp3*~data=user_id=0,application_id=42~hmac=c5d9e8c7165151a4573e64f76de465aa48fdb3376645246359666e7424b4682d"
      },
      {
        "id": "rc-25",
        "title": "Ace of Spades",
        "artist": "Motörhead",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/6/5/0/a65c77192ab58439c7c8ee07522eb2ab.mp3?hdnea=exp=1786710734~acl=/api/1/1/a/6/5/0/a65c77192ab58439c7c8ee07522eb2ab.mp3*~data=user_id=0,application_id=42~hmac=170e1596c13c2e63d26a5681191b3362d559cf8e8f86209b8519c875eb0dd8f3"
      },
      {
        "id": "rc-26",
        "title": "Rock and Roll All Nite",
        "artist": "KISS",
        "year": 1975,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/d/5/0/6d5473dd6180b4b3911cd49c58e49449.mp3?hdnea=exp=1786710734~acl=/api/1/1/6/d/5/0/6d5473dd6180b4b3911cd49c58e49449.mp3*~data=user_id=0,application_id=42~hmac=fa004d76aa6603ad7b124f1074929b2b61b7dfff84022ae4802926bafcc7d41c"
      },
      {
        "id": "rc-27",
        "title": "I Was Made for Lovin' You",
        "artist": "KISS",
        "year": 1979,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/f/d/0/0fd26e6272d663165335751997f58d25.mp3?hdnea=exp=1786710734~acl=/api/1/1/0/f/d/0/0fd26e6272d663165335751997f58d25.mp3*~data=user_id=0,application_id=42~hmac=c86d124071162e8bb3d3a985c54735c8563c40c29433d1435d8a2c688ab3c51e"
      },
      {
        "id": "rc-28",
        "title": "Poison",
        "artist": "Alice Cooper",
        "year": 1989,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/d/2/0/4d267f5e208ba289fdaa8c3d55dacb03.mp3?hdnea=exp=1786710734~acl=/api/1/1/4/d/2/0/4d267f5e208ba289fdaa8c3d55dacb03.mp3*~data=user_id=0,application_id=42~hmac=12de8d4a9d71aa9ef02a2b391c010af93be12f522a365110ef0019b7a9045649"
      },
      {
        "id": "rc-29",
        "title": "Free Bird",
        "artist": "Lynyrd Skynyrd",
        "year": 1973,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/f/4/0/cf4e8e2367a761314bb5955286f23ebf.mp3?hdnea=exp=1786710734~acl=/api/1/1/c/f/4/0/cf4e8e2367a761314bb5955286f23ebf.mp3*~data=user_id=0,application_id=42~hmac=d52240e2b54e75217671ff28118078a524af24fbb427e075f969d53bc68aa05e"
      },
      {
        "id": "rc-30",
        "title": "Sweet Home Alabama",
        "artist": "Lynyrd Skynyrd",
        "year": 1974,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/0/8/0/908367b8d697a174034bce8c338339f6.mp3?hdnea=exp=1786710734~acl=/api/1/1/9/0/8/0/908367b8d697a174034bce8c338339f6.mp3*~data=user_id=0,application_id=42~hmac=9b3634d4d9370a3943198d32a8d55885f635967c81481259547fe1b4159aa766"
      },
      {
        "id": "rc-31",
        "title": "Don't Stop Me Now",
        "artist": "Queen",
        "year": 1978,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4b8ab9c1f112b63c07e3983b98e98006/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/b/3/0/0b3d23def8a9fe0b0a861a17fd7dda61.mp3?hdnea=exp=1788639375~acl=/api/1/1/0/b/3/0/0b3d23def8a9fe0b0a861a17fd7dda61.mp3*~data=user_id=0,application_id=42~hmac=7c48426d13f802fca76ef047eefa6f37e11fc4aba216736f2367cb4adb3de901"
      },
      {
        "id": "rc-32",
        "title": "Another One Bites The Dust",
        "artist": "Queen",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/156c197582a4d4b40e17d72b79d3df62/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/d/0/70dfc1ad79bdd6e1d69d16e1a37c06eb.mp3?hdnea=exp=1788639375~acl=/api/1/1/7/0/d/0/70dfc1ad79bdd6e1d69d16e1a37c06eb.mp3*~data=user_id=0,application_id=42~hmac=f4a5efe3cd21e65e4166016e8cc04d4616120633d52388a6e7be262ccb468fcd"
      },
      {
        "id": "rc-33",
        "title": "Whole Lotta Love",
        "artist": "Led Zeppelin",
        "year": 1969,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a5fdd04471cb7d6ec8a663621bdd9bee/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/d/2/0/dd23df0f86f086c25c38defe367417f9.mp3?hdnea=exp=1788639376~acl=/api/1/1/d/d/2/0/dd23df0f86f086c25c38defe367417f9.mp3*~data=user_id=0,application_id=42~hmac=caa68cffb40d256fe57f7a9f842d5ee1ea184344a6666eccba31404995d80ce5"
      },
      {
        "id": "rc-34",
        "title": "Highway Star",
        "artist": "Deep Purple",
        "year": 2012,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/dc8cb2cafee167b6dfec80763407c78b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/c/0/2dcc04624c7cdcc95521a4d12011f92b.mp3?hdnea=exp=1788639376~acl=/api/1/1/2/d/c/0/2dcc04624c7cdcc95521a4d12011f92b.mp3*~data=user_id=0,application_id=42~hmac=fe04f7490f656691bacd863a5fdd487c047cf760f01520d76b0506cda5ab429b"
      },
      {
        "id": "rc-35",
        "title": "Another Brick in the Wall, Pt. 2",
        "artist": "Pink Floyd",
        "year": 1979,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2bea643b92a8fc6b19a23756f718cbd4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/3/7/0/c37d8715fca706e00188039c717d1c9f.mp3?hdnea=exp=1788639377~acl=/api/1/1/c/3/7/0/c37d8715fca706e00188039c717d1c9f.mp3*~data=user_id=0,application_id=42~hmac=8ea840e56c49de03d59fff2b2729225c0bef7e0fb1fc0a7609d8eec2695d6410"
      },
      {
        "id": "rc-36",
        "title": "Wish You Were Here",
        "artist": "Pink Floyd",
        "year": 1975,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cb029c785b8d0cd624ddee9d4127ceff/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/0/d/0/40d1318ab60207bb3a025b7df23ea7ef.mp3?hdnea=exp=1788639377~acl=/api/1/1/4/0/d/0/40d1318ab60207bb3a025b7df23ea7ef.mp3*~data=user_id=0,application_id=42~hmac=b92f761fcbc85fea4d72533fa9d36a29de377a2345385a3e9476848dede003e5"
      },
      {
        "id": "rc-37",
        "title": "Comfortably Numb",
        "artist": "Pink Floyd",
        "year": 1979,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2bea643b92a8fc6b19a23756f718cbd4/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/3/6/0/436032ec967e0282f468e9aaf8f1062b.mp3?hdnea=exp=1788639377~acl=/api/1/1/4/3/6/0/436032ec967e0282f468e9aaf8f1062b.mp3*~data=user_id=0,application_id=42~hmac=7a5fccab27dfd8077cedcfeece220ca2f4b1fb619ff5578310348a23c42c98ee"
      },
      {
        "id": "rc-38",
        "title": "Paint It Black",
        "artist": "The Rolling Stones",
        "year": 2009,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/47e0cabe651ab1c3519b0634c93bab75/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/2/5/0/b2525f092577defb7ef9324e3f122315.mp3?hdnea=exp=1788639378~acl=/api/1/1/b/2/5/0/b2525f092577defb7ef9324e3f122315.mp3*~data=user_id=0,application_id=42~hmac=dfeb4d68f6df8557e8c359eb0548feeaa7099b46516c25ae4395fc087880ffe9"
      },
      {
        "id": "rc-39",
        "title": "Satisfaction Skank",
        "artist": "Fatboy Slim",
        "year": 2025,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d59c812f6ea86613050fd59b9e3307e8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/9/6/0/f96862eb60d5c9e7690f6cb49ce8fe82.mp3?hdnea=exp=1788639378~acl=/api/1/1/f/9/6/0/f96862eb60d5c9e7690f6cb49ce8fe82.mp3*~data=user_id=0,application_id=42~hmac=806685fe57fd9d3738884704d75bbda9eb20e614f749ea4863f533094e2cc0f5"
      },
      {
        "id": "rc-40",
        "title": "Start Me Up",
        "artist": "The Rolling Stones",
        "year": 2009,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b30759c8c8163d3f25aa10e27d873607/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/b/6/0/4b6b0bc274cb58262f60c72c55d87e7e.mp3?hdnea=exp=1788639378~acl=/api/1/1/4/b/6/0/4b6b0bc274cb58262f60c72c55d87e7e.mp3*~data=user_id=0,application_id=42~hmac=d3b898fb43cb44b5b9666a9fab4eff937c4b8c4537d9be89c3fd55fc440b76fc"
      },
      {
        "id": "rc-41",
        "title": "Baba O'Riley",
        "artist": "The Who",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/077c3e89663134e653f97a6e85be7662/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/a/4/0/1a4104cbd4b8fb263cfae79dbd21a00e.mp3?hdnea=exp=1788639379~acl=/api/1/1/1/a/4/0/1a4104cbd4b8fb263cfae79dbd21a00e.mp3*~data=user_id=0,application_id=42~hmac=9f91ce70af4a247f8da95e14fff852433a936423d01f1ac704401e9281e511fe"
      },
      {
        "id": "rc-42",
        "title": "Won't Get Fooled Again (Original Album Version)",
        "artist": "The Who",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/077c3e89663134e653f97a6e85be7662/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/7/9/0/f79e311b88a382995d8ff9e5ff05a1bb.mp3?hdnea=exp=1788639379~acl=/api/1/1/f/7/9/0/f79e311b88a382995d8ff9e5ff05a1bb.mp3*~data=user_id=0,application_id=42~hmac=c8b5dc15e23f55f5c72bd9ddc228db3d2df1ef3cd18acce8f706bf5f9b6e5d08"
      },
      {
        "id": "rc-43",
        "title": "Purple Haze",
        "artist": "Jimi Hendrix",
        "year": 2010,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/021ddfb48a222859aa12da805116ca8d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/e/7/0/8e702ddb35a5e966dcb7ed2801a1fc5c.mp3?hdnea=exp=1788639380~acl=/api/1/1/8/e/7/0/8e702ddb35a5e966dcb7ed2801a1fc5c.mp3*~data=user_id=0,application_id=42~hmac=02dde7dca3a3da128eefa1eca09f86e77f0f6a61c8995a40c00a5f1134142b01"
      },
      {
        "id": "rc-44",
        "title": "All Along the Watchtower",
        "artist": "Jimi Hendrix",
        "year": 2010,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/021ddfb48a222859aa12da805116ca8d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/1/1/0/011e7fc17750e0d9eeebac359b320609.mp3?hdnea=exp=1788639380~acl=/api/1/1/0/1/1/0/011e7fc17750e0d9eeebac359b320609.mp3*~data=user_id=0,application_id=42~hmac=3a161c849c751eca6bf7230422a368ec1236c5969c47d0221703308d08fb5aa4"
      },
      {
        "id": "rc-45",
        "title": "Layla (Acoustic; Live at MTV Unplugged, Bray Film Studios, Windsor, England, UK, 1/16/1992; 1999 Remaster)",
        "artist": "Eric Clapton",
        "year": 1999,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ec784e20f09d844d4f297560c341049b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/7/5/0/a7506bb1e20d381bd75db4d2ea770ed7.mp3?hdnea=exp=1788639381~acl=/api/1/1/a/7/5/0/a7506bb1e20d381bd75db4d2ea770ed7.mp3*~data=user_id=0,application_id=42~hmac=d074e5f061e51d791ececae3d0f91d3e6ae5ef3daaa79eccfaa4003882c25fd7"
      },
      {
        "id": "rc-46",
        "title": "Fortunate Son",
        "artist": "Creedence Clearwater Revival",
        "year": 2011,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/236aacbb246ef0f6ff6a9e494a7fe9ac/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/3/f/0/53f8f9b3fa586362999409fcb17b8c5e.mp3?hdnea=exp=1788639381~acl=/api/1/1/5/3/f/0/53f8f9b3fa586362999409fcb17b8c5e.mp3*~data=user_id=0,application_id=42~hmac=794ee4c48a1426bb51b62298ace387b284c48ecce8d09de88b5dcd029dc0c707"
      },
      {
        "id": "rc-47",
        "title": "Have You Ever Seen The Rain",
        "artist": "Creedence Clearwater Revival",
        "year": 2011,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/236aacbb246ef0f6ff6a9e494a7fe9ac/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/3/d/0/23df468fb3381548ed504e33bd60e0e8.mp3?hdnea=exp=1788639381~acl=/api/1/1/2/3/d/0/23df468fb3381548ed504e33bd60e0e8.mp3*~data=user_id=0,application_id=42~hmac=66ae9ace241b361b699b66072a8005c8c17b72260e8c5b9a3b751ad0743cb066"
      },
      {
        "id": "rc-48",
        "title": "Light My Fire",
        "artist": "The Doors",
        "year": 1967,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a58f4c70b9c51b8902be3f2e875155fe/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/b/7/0/1b7e93199cdcdc16f3731be54e26e5a8.mp3?hdnea=exp=1788639382~acl=/api/1/1/1/b/7/0/1b7e93199cdcdc16f3731be54e26e5a8.mp3*~data=user_id=0,application_id=42~hmac=8ec3ba477ebe514d2e79d086db1fffd57abb4461aca65afc5ca8f9d3c56f3998"
      },
      {
        "id": "rc-49",
        "title": "Hotel California",
        "artist": "Eagles",
        "year": 2017,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7a6c7b49cfdaf4ee233f66c3070d2f40/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/e/0/0/de0b52925103149e94a7123d0c0cb6c4.mp3?hdnea=exp=1788639382~acl=/api/1/1/d/e/0/0/de0b52925103149e94a7123d0c0cb6c4.mp3*~data=user_id=0,application_id=42~hmac=3ef1c4c3b03c5118fff46de4eae7eae80afffccda0224baf3cbdb49b366e3eae"
      },
      {
        "id": "rc-50",
        "title": "More Than a Feeling",
        "artist": "Boston",
        "year": 1996,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a25d41d718d5b81ba26cabe333049e6f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/3/1/0/031c0f7a6534316f217616fdb6e28b98.mp3?hdnea=exp=1788639382~acl=/api/1/1/0/3/1/0/031c0f7a6534316f217616fdb6e28b98.mp3*~data=user_id=0,application_id=42~hmac=83e1c27c96a45f99169603b22f2a10f78f1e6b77faad4d24e210c6c8d016ee68"
      }
    ]
  },
  {
    "id": "edm-festivals",
    "title": "EDM & Electronic Festivals",
    "category": "genres",
    "description": "Avicii, David Guetta, Calvin Harris, Martin Garrix e i più grandi inni da festival.",
    "badge": "Party 🎉",
    "unlockRequirement": {
      "deathParadeRecord": 30,
      "label": "30 in Death Parade 💀"
    },
    "cover": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "edm-1",
        "title": "Wake Me Up",
        "artist": "Avicii",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/3/a/0/93a023759118ca2f5bc17c7c0c07ba1b.mp3?hdnea=exp=1786710734~acl=/api/1/1/9/3/a/0/93a023759118ca2f5bc17c7c0c07ba1b.mp3*~data=user_id=0,application_id=42~hmac=a097aa1b112eaa7efa8666e4cf14b8fd00df462e78cea216041add0331fe98d6"
      },
      {
        "id": "edm-2",
        "title": "Titanium",
        "artist": "David Guetta feat. Sia",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/5/a/0/b5af23610701bdcd4531222cd1abb53d.mp3?hdnea=exp=1786710734~acl=/api/1/1/b/5/a/0/b5af23610701bdcd4531222cd1abb53d.mp3*~data=user_id=0,application_id=42~hmac=453796b6f2cc64cb8524e98671540316e9df56c9a38721516084c8816b0dfbae"
      },
      {
        "id": "edm-3",
        "title": "Summer",
        "artist": "Calvin Harris",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/e/3/0/7e3fa54179108b453a9b360bf1976177.mp3?hdnea=exp=1786710734~acl=/api/1/1/7/e/3/0/7e3fa54179108b453a9b360bf1976177.mp3*~data=user_id=0,application_id=42~hmac=ce6262d8b40c30ef37d8426b9560164b6a0835209b377c78d6bc09c308db05ce"
      },
      {
        "id": "edm-4",
        "title": "Animals",
        "artist": "Martin Garrix",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/b/e/0/9bef660c3cf0ec4d85159a083ae81bf5.mp3?hdnea=exp=1786710734~acl=/api/1/1/9/b/e/0/9bef660c3cf0ec4d85159a083ae81bf5.mp3*~data=user_id=0,application_id=42~hmac=7e0d75d9e5c8743dd0562259d46a9a2577864d9a66c3580a16d53e60ebf35e39"
      },
      {
        "id": "edm-5",
        "title": "Don't You Worry Child",
        "artist": "Swedish House Mafia",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/8/0/2184ae5bfff6b4af12135560d359abe9.mp3?hdnea=exp=1786710734~acl=/api/1/1/2/1/8/0/2184ae5bfff6b4af12135560d359abe9.mp3*~data=user_id=0,application_id=42~hmac=22f9468377f9669e9258358a4b26395dae87451b02e34013fa82fb55ce8f1247"
      },
      {
        "id": "edm-6",
        "title": "Levels",
        "artist": "Avicii",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/d/9/0/0d9d5592d4169f2d6772234f5198662d.mp3?hdnea=exp=1786710735~acl=/api/1/1/0/d/9/0/0d9d5592d4169f2d6772234f5198662d.mp3*~data=user_id=0,application_id=42~hmac=e363c7e4c94b5917145deb8b5dfac069a3284bc11f2f8b940d26064a0d774731"
      },
      {
        "id": "edm-7",
        "title": "Clarity",
        "artist": "Zedd feat. Foxes",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/3/0/e9361dad0bf958c5bccb53ed096be917.mp3?hdnea=exp=1786710734~acl=/api/1/1/e/9/3/0/e9361dad0bf958c5bccb53ed096be917.mp3*~data=user_id=0,application_id=42~hmac=1564880ff3dc5b98e390ac0b4ead53d00bc6df43c239a6e8a554ca5a0717543c"
      },
      {
        "id": "edm-8",
        "title": "Heroes (we could be)",
        "artist": "Alesso feat. Tove Lo",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/3/f/0/43ff34ceb8755a59ef3a045e4b191213.mp3?hdnea=exp=1786710734~acl=/api/1/1/4/3/f/0/43ff34ceb8755a59ef3a045e4b191213.mp3*~data=user_id=0,application_id=42~hmac=ccb36daa3ed9bce0e021bb15384ad27113356a0cf811fcb740fb121d3bec0c89"
      },
      {
        "id": "edm-9",
        "title": "Lean On",
        "artist": "Major Lazer & DJ Snake",
        "year": 2015,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/4/3/0/543e2ee2447d48ed00e96e510a4a9202.mp3?hdnea=exp=1786710735~acl=/api/1/1/5/4/3/0/543e2ee2447d48ed00e96e510a4a9202.mp3*~data=user_id=0,application_id=42~hmac=ab1521edbf5a2cc7b1ddebe2f0d6888e3dd40fd105627ec1cf62b4e86079f692"
      },
      {
        "id": "edm-10",
        "title": "Faded",
        "artist": "Alan Walker",
        "year": 2015,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/5/2/0/35298490e5d17d74eefdb1b285f94dfd.mp3?hdnea=exp=1786710735~acl=/api/1/1/3/5/2/0/35298490e5d17d74eefdb1b285f94dfd.mp3*~data=user_id=0,application_id=42~hmac=982ec947b143494be3964e658cd125c43a62468284d53c81d288dc0560370191"
      },
      {
        "id": "edm-11",
        "title": "Bangarang",
        "artist": "Skrillex",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/7/c/0/f7c4c40890cf027d6e0e02a2ba006329.mp3?hdnea=exp=1786710735~acl=/api/1/1/f/7/c/0/f7c4c40890cf027d6e0e02a2ba006329.mp3*~data=user_id=0,application_id=42~hmac=fe1236cab4656fd10bc67551f7cc82c0f8ad833527325fbb2e6fb57f44e673d8"
      },
      {
        "id": "edm-12",
        "title": "Happier",
        "artist": "Marshmello ft. Bastille",
        "year": 2018,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/3/9/0/c3987d791da5efff1bd4fcf8a3a0b5da.mp3?hdnea=exp=1786710735~acl=/api/1/1/c/3/9/0/c3987d791da5efff1bd4fcf8a3a0b5da.mp3*~data=user_id=0,application_id=42~hmac=4c84b7ffc24b60c4e46f12ffea01928ad6963250fe41a9f0d924340687c66159"
      },
      {
        "id": "edm-13",
        "title": "The Business",
        "artist": "Tiësto",
        "year": 2020,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/7/9/0/3799a4356729c41cdd6d160e82e0caa4.mp3?hdnea=exp=1786710735~acl=/api/1/1/3/7/9/0/3799a4356729c41cdd6d160e82e0caa4.mp3*~data=user_id=0,application_id=42~hmac=942b670fc6c959780d76723c8a8051851fb744f357711a7f2044d8a2b92cb51f"
      },
      {
        "id": "edm-14",
        "title": "One (Your Name)",
        "artist": "Swedish House Mafia",
        "year": 2010,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/f/e/0/2fe4ffd87f5aaa7b4c7f729aa90e01d5.mp3?hdnea=exp=1786710735~acl=/api/1/1/2/f/e/0/2fe4ffd87f5aaa7b4c7f729aa90e01d5.mp3*~data=user_id=0,application_id=42~hmac=6d242a2155b71970b89fa5c29c05fcabef9aaf9f4c3d37aa4138fc7b88fc86af"
      },
      {
        "id": "edm-15",
        "title": "Hey Brother",
        "artist": "Avicii",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/6/1/0/e61d5d580b8629fba97c35de7b9db5be.mp3?hdnea=exp=1786710735~acl=/api/1/1/e/6/1/0/e61d5d580b8629fba97c35de7b9db5be.mp3*~data=user_id=0,application_id=42~hmac=5209ee59d25d958a26003cb772bf76a51b6dcbd7e1aea432ea80c5178c714e95"
      },
      {
        "id": "edm-16",
        "title": "Without You",
        "artist": "Avicii feat. Sandro Cavazza",
        "year": 2017,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/7/0/0/5704edb4795838db220a8e31661c4c3d.mp3?hdnea=exp=1786710735~acl=/api/1/1/5/7/0/0/5704edb4795838db220a8e31661c4c3d.mp3*~data=user_id=0,application_id=42~hmac=dde7a7fa4e07c0ab9cca21cf97f383b56ea3ef03452d27e03f8d178b88654c9b"
      },
      {
        "id": "edm-17",
        "title": "This Is What It Feels Like",
        "artist": "Armin van Buuren",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/f/2/0/bf2b7dca99d8ef28707b192251da210b.mp3?hdnea=exp=1786710735~acl=/api/1/1/b/f/2/0/bf2b7dca99d8ef28707b192251da210b.mp3*~data=user_id=0,application_id=42~hmac=0239291445e74927c9415b9ccf6c2fedf1bc1871a78a4de8655ceebc32843c4c"
      },
      {
        "id": "edm-18",
        "title": "Feel So Close",
        "artist": "Calvin Harris",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/3/2/0/e32ccdaea23d6c132f169d9828b8cf39.mp3?hdnea=exp=1786710735~acl=/api/1/1/e/3/2/0/e32ccdaea23d6c132f169d9828b8cf39.mp3*~data=user_id=0,application_id=42~hmac=1fe6825e26ceb348d3529c76a53cfed1742d2a6ea8ed7c9ca36fdb3cb4085283"
      },
      {
        "id": "edm-19",
        "title": "Blame",
        "artist": "Calvin Harris feat. John Newman",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/a/9/0/7a9fc2ff346a82a9101eb53a9a7e40f0.mp3?hdnea=exp=1786710735~acl=/api/1/1/7/a/9/0/7a9fc2ff346a82a9101eb53a9a7e40f0.mp3*~data=user_id=0,application_id=42~hmac=a91c5f842ffe1020b8e0524ad2ffa2eb10b1aa3561ff9b8ee9c60f1009807e35"
      },
      {
        "id": "edm-20",
        "title": "This Is What You Came For",
        "artist": "Calvin Harris feat. Rihanna",
        "year": 2016,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/9/0/ee9343b8c6302f49270fd6e96321276c.mp3?hdnea=exp=1786710735~acl=/api/1/1/e/e/9/0/ee9343b8c6302f49270fd6e96321276c.mp3*~data=user_id=0,application_id=42~hmac=53de4b5f77e2d80cf5b688f8bd987fa4ff3ca92d2663b9ddad52e346ca93f043"
      },
      {
        "id": "edm-21",
        "title": "Turn Up The Speakers",
        "artist": "Afrojack",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/64/46/a5/6446a51d-b657-3f36-3b2d-f6825dfa2d1d/8718522079046.jpg/600x600bb.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/9/d/0/29d61226867639fa96466bf163fd4d30.mp3?hdnea=exp=1786710921~acl=/api/1/1/2/9/d/0/29d61226867639fa96466bf163fd4d30.mp3*~data=user_id=0,application_id=42~hmac=b92078edcb850757bfa32fcde1e4119301af22e516abaa1b56982c98f1ea3de0"
      },
      {
        "id": "edm-22",
        "title": "Tremor",
        "artist": "Dimitri Vegas & Like Mike vs Martin Garrix",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/bc5867617c7f4ecc7370624f9ddefcae/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/7/0/047a2faf58441af8d0d88776e37fdd6a.mp3?hdnea=exp=1786710912~acl=/api/1/1/0/4/7/0/047a2faf58441af8d0d88776e37fdd6a.mp3*~data=user_id=0,application_id=42~hmac=969c4040fc02cc0a12733505e1a13867e8a72f6f10fcd835abfa72dc1a341487"
      },
      {
        "id": "edm-23",
        "title": "Tsunami",
        "artist": "DVBBS & Borgeous",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a2a7d093b6d408a169fa26788e84206c/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/4/0/494c2384890b966ef32293b85b1c4060.mp3?hdnea=exp=1786710912~acl=/api/1/1/4/9/4/0/494c2384890b966ef32293b85b1c4060.mp3*~data=user_id=0,application_id=42~hmac=b5de774c79cf333a227701105c6ce2848c8a0019201ecd3f960a045b6037d913"
      },
      {
        "id": "edm-24",
        "title": "Epic",
        "artist": "Sandro Silva & Quintino",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6b5b9d69a4575e05ece47323f8cc1b9f/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/7/b/0/d7b1b7858603ec57a1b79f7bad3ec720.mp3?hdnea=exp=1786710911~acl=/api/1/1/d/7/b/0/d7b1b7858603ec57a1b79f7bad3ec720.mp3*~data=user_id=0,application_id=42~hmac=134f1547642fda7880d03592c8b5561172f1542bb626eb395d4ec2fce87b4882"
      },
      {
        "id": "edm-25",
        "title": "Astronomia",
        "artist": "Vicetone & Tony Igy",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/2/d/0/a2df7eb6f380e840109f37bc8acf8645.mp3?hdnea=exp=1786710735~acl=/api/1/1/a/2/d/0/a2df7eb6f380e840109f37bc8acf8645.mp3*~data=user_id=0,application_id=42~hmac=faa17c724ccdb61f57b05a13447cd0974046b731b6d3a3151b0a97764cd4bb53"
      },
      {
        "id": "edm-26",
        "title": "Roses",
        "artist": "SAINt JHN (Imanbek Remix)",
        "year": 2019,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/6/0/2564cedb3b64680ea8861de87791d2b1.mp3?hdnea=exp=1786710738~acl=/api/1/1/2/5/6/0/2564cedb3b64680ea8861de87791d2b1.mp3*~data=user_id=0,application_id=42~hmac=e1999c98e1235c1b241e7b27e52ca009a20dcd10bdad6a8647eac1ee7d95fa85"
      },
      {
        "id": "edm-27",
        "title": "Piece of Your Heart",
        "artist": "Meduza feat. GOODBOYS",
        "year": 2019,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/a/0/daaf72f7f14dcf4b916199c7f4fd25ea.mp3?hdnea=exp=1786710738~acl=/api/1/1/d/a/a/0/daaf72f7f14dcf4b916199c7f4fd25ea.mp3*~data=user_id=0,application_id=42~hmac=7b9a0c3cf0eb33d9b4446f0ab730d6da71f085723844f17893c2bceb72c96c7a"
      },
      {
        "id": "edm-28",
        "title": "Lose Control",
        "artist": "Meduza, Becky Hill & GOODBOYS",
        "year": 2019,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/a/c/0/bac060c52788568fc01f5a1f5574b148.mp3?hdnea=exp=1786710738~acl=/api/1/1/b/a/c/0/bac060c52788568fc01f5a1f5574b148.mp3*~data=user_id=0,application_id=42~hmac=76caeb5f838f58c422fd3215ea5b033cfa99187ee12f95a2d7ff03978f4a198a"
      },
      {
        "id": "edm-29",
        "title": "Head & Heart",
        "artist": "Joel Corry feat. MNEK",
        "year": 2020,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/d/0/99dd2a12f9c85c4952285ee24fec244c.mp3?hdnea=exp=1786710738~acl=/api/1/1/9/9/d/0/99dd2a12f9c85c4952285ee24fec244c.mp3*~data=user_id=0,application_id=42~hmac=401d826723e79de0819e6eabb11bcac5a1d1bb721d549741d6f3e9db845429c8"
      },
      {
        "id": "edm-30",
        "title": "I'm Good (Blue)",
        "artist": "David Guetta & Bebe Rexha",
        "year": 2022,
        "genre": "Dance",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/b/c/0/0bc3b3dce7e62bec0454a8d8a025a828.mp3?hdnea=exp=1786710738~acl=/api/1/1/0/b/c/0/0bc3b3dce7e62bec0454a8d8a025a828.mp3*~data=user_id=0,application_id=42~hmac=f91d9bdd0dc96cc936ca54848b649439a73bfd3d53f7b3f604ceb64a33caed3f"
      },
      {
        "id": "edm-31",
        "title": "The Nights",
        "artist": "Avicii",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6e58a99f59a150e9b4aefbeb2d6fc856/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/a/e/0/3ae5fb480503d638518abe677daf616c.mp3?hdnea=exp=1788639383~acl=/api/1/1/3/a/e/0/3ae5fb480503d638518abe677daf616c.mp3*~data=user_id=0,application_id=42~hmac=1474324f8d1cba7a3bd9b40ac828675b86489564731db61e0cf2d72c8029946e"
      },
      {
        "id": "edm-32",
        "title": "Save The World",
        "artist": "Swedish House Mafia",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2dffc54e9c1765a556deb5485c885d74/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/b/1/0/fb181cd07c8dea9306667003c22652a3.mp3?hdnea=exp=1788639383~acl=/api/1/1/f/b/1/0/fb181cd07c8dea9306667003c22652a3.mp3*~data=user_id=0,application_id=42~hmac=2cc48a17338e85713713a593ff69c5f5a882aa2525dff27733405e9dc4aa5f0a"
      },
      {
        "id": "edm-33",
        "title": "Scared to Be Lonely",
        "artist": "Martin Garrix",
        "year": 2017,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8e6e0c8973442986572a2e8a5492fdd9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/3/f/0/a3ff12704287b970d52f5b19ab308a31.mp3?hdnea=exp=1788639384~acl=/api/1/1/a/3/f/0/a3ff12704287b970d52f5b19ab308a31.mp3*~data=user_id=0,application_id=42~hmac=6ad2c1b681d1c719e528469669c89284920f91f12742e6c5befc106628dd77a7"
      },
      {
        "id": "edm-34",
        "title": "In the Name of Love",
        "artist": "Martin Garrix",
        "year": 2016,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/eed47f7aa8765df6c4e8891a4a70d298/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/f/0/e9f810d14e97f241541cc7fc40cb695f.mp3?hdnea=exp=1788639384~acl=/api/1/1/e/9/f/0/e9f810d14e97f241541cc7fc40cb695f.mp3*~data=user_id=0,application_id=42~hmac=9ddca0590a8fd168876a2d2506c572564a686f80ceac43c19489481caf73e332"
      },
      {
        "id": "edm-35",
        "title": "I Need Your Love (feat. Ellie Goulding)",
        "artist": "Calvin Harris",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3cd154b7ee332e7fb0dc3e8bd4085f6b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/6/9/0/e69182e05dc1d2cc7ba705439c743c91.mp3?hdnea=exp=1788639384~acl=/api/1/1/e/6/9/0/e69182e05dc1d2cc7ba705439c743c91.mp3*~data=user_id=0,application_id=42~hmac=742f801dbdd53af18cfde0b2efdc9384fc6cbeae7e6eba76d935bc1abefed7e5"
      },
      {
        "id": "edm-36",
        "title": "Play Hard (feat. Ne-Yo & Akon)",
        "artist": "David Guetta",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/52330286cb5008805253fd77c7111d3f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/1/9/0/81926596f6d0f4acfc92c65f3a2a7eb1.mp3?hdnea=exp=1788639385~acl=/api/1/1/8/1/9/0/81926596f6d0f4acfc92c65f3a2a7eb1.mp3*~data=user_id=0,application_id=42~hmac=5592f4e765fa95f3fe135e6653c2cca512393d6c0e7542f20957d82dd5f4e09f"
      },
      {
        "id": "edm-37",
        "title": "Red Lights",
        "artist": "Tiësto",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b76482d47ddaad4466f8de588958b56f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/c/0/80c980bde038e405cce51f47fba46a82.mp3?hdnea=exp=1788639385~acl=/api/1/1/8/0/c/0/80c980bde038e405cce51f47fba46a82.mp3*~data=user_id=0,application_id=42~hmac=e90ad64c7b8834686f2082340bf11da7daf114891725f18901b857948cbb7758"
      },
      {
        "id": "edm-38",
        "title": "Scary Monsters and Nice Sprites (The Juggernaut Remix)",
        "artist": "Skrillex",
        "year": 2011,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6f2e21fc97d9235e61dce67a37e62d7e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/a/9/0/ba91513111da4ade4e9f870d263cca9d.mp3?hdnea=exp=1788639386~acl=/api/1/1/b/a/9/0/ba91513111da4ade4e9f870d263cca9d.mp3*~data=user_id=0,application_id=42~hmac=3658ad5b6674b5036e256144285998599ec32442a17d98f4b9fb8038566517bf"
      },
      {
        "id": "edm-39",
        "title": "Closer",
        "artist": "The Chainsmokers",
        "year": 2016,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0a7b86a0e2f2bd3e41515adb83e3322b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/d/6/0/0d63bac2a2dcdf064fc9987bf363cb76.mp3?hdnea=exp=1788639386~acl=/api/1/1/0/d/6/0/0d63bac2a2dcdf064fc9987bf363cb76.mp3*~data=user_id=0,application_id=42~hmac=c4519a7792aae2d28e021ed33284a593a41858df3b9ae6782a1d5ed2608a0f77"
      },
      {
        "id": "edm-40",
        "title": "Don't Let Me Down",
        "artist": "The Chainsmokers",
        "year": 2016,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/900c088fb241de8000b5ed849eba8536/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/a/0/17a2091d2386ccc3e613b3984180b153.mp3?hdnea=exp=1788639386~acl=/api/1/1/1/7/a/0/17a2091d2386ccc3e613b3984180b153.mp3*~data=user_id=0,application_id=42~hmac=af03621e62d9f53e9168d63831d71d0ada5c835cb51e7d28eb64af9a002cad9b"
      },
      {
        "id": "edm-41",
        "title": "Alone",
        "artist": "Marshmello",
        "year": 2016,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/77a8c32224ca500eca79ba7692555970/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/e/4/0/de4e4e050004dff3b11600decc7835ef.mp3?hdnea=exp=1788639387~acl=/api/1/1/d/e/4/0/de4e4e050004dff3b11600decc7835ef.mp3*~data=user_id=0,application_id=42~hmac=39c9d31619e18c1ca193e2ada5ad035d41565c9d5dbe53b70d680f9f5eceefae"
      },
      {
        "id": "edm-42",
        "title": "Let Me Love You",
        "artist": "DJ Snake",
        "year": 2016,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6a52e1bbddc750c996a66b0ccfa4370c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/1/e/0/41ef13d965b718f0ca98b7a9a32c0100.mp3?hdnea=exp=1788639387~acl=/api/1/1/4/1/e/0/41ef13d965b718f0ca98b7a9a32c0100.mp3*~data=user_id=0,application_id=42~hmac=293de390014b9bb17eb21fbed4d760082d66ab48fbdceb392d2349a92b25c388"
      },
      {
        "id": "edm-43",
        "title": "Turn Down for What",
        "artist": "DJ Snake",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/82c139e154a40073542914dfed468474/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/2/4/0/e24d6cbfc49469f06e5814b9b26359ab.mp3?hdnea=exp=1788639388~acl=/api/1/1/e/2/4/0/e24d6cbfc49469f06e5814b9b26359ab.mp3*~data=user_id=0,application_id=42~hmac=932617e22d26090c8b30fe1a2ea8963656287474e80180bc5c502289b9bdfe92"
      },
      {
        "id": "edm-44",
        "title": "Calling (Lose My Mind)",
        "artist": "Sebastian Ingrosso",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3239b68e3c2c3fe431aa235b2f94c418/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/7/5/0/375d2a914214abc762eaf45cfb5cb0b8.mp3?hdnea=exp=1788639388~acl=/api/1/1/3/7/5/0/375d2a914214abc762eaf45cfb5cb0b8.mp3*~data=user_id=0,application_id=42~hmac=1a3ee35cb900381fa7d3ed4ce4a52493f4ecf5951a9bd0f00bf19220ccff1db1"
      },
      {
        "id": "edm-45",
        "title": "Spaceman (Extended Mix)",
        "artist": "Hardwell",
        "year": 2012,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6557d669736063b655fab4d69594062f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/2/5/0/7256393374aa32b86a63bd58fc592dc8.mp3?hdnea=exp=1788639389~acl=/api/1/1/7/2/5/0/7256393374aa32b86a63bd58fc592dc8.mp3*~data=user_id=0,application_id=42~hmac=f22b2cd6c9c087d58d32cb42130e0b8d32a98de6959b3693f42f988496972d2b"
      },
      {
        "id": "edm-46",
        "title": "Blah Blah Blah",
        "artist": "Armin van Buuren",
        "year": 2019,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c1826a294b4aea4102a3187459e2190f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/1/6/0/5169cb7f74e54b5e84fe5dcbdfd9222d.mp3?hdnea=exp=1788639389~acl=/api/1/1/5/1/6/0/5169cb7f74e54b5e84fe5dcbdfd9222d.mp3*~data=user_id=0,application_id=42~hmac=08ffa6a0c42487db712af4a97b368ea30ccb70c12885d90854bf6aac830c923e"
      },
      {
        "id": "edm-47",
        "title": "Ghosts N Stuff",
        "artist": "Deadmau5",
        "year": 2009,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/68a6b6b64c47f13873ee275585ed8c82/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/5/8/0/9580222ca91180796636510c39c74c1d.mp3?hdnea=exp=1788639390~acl=/api/1/1/9/5/8/0/9580222ca91180796636510c39c74c1d.mp3*~data=user_id=0,application_id=42~hmac=26b52dc7753a3526d823cccefaa6c9472294bed3731dfd439f86822edc5ee191"
      },
      {
        "id": "edm-48",
        "title": "Firestone",
        "artist": "Kygo",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/28a8beab24b92bcbbd1e80df83c4bd24/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/3/5/0/135503829a79bb3d2870c940ba13c9b0.mp3?hdnea=exp=1788639390~acl=/api/1/1/1/3/5/0/135503829a79bb3d2870c940ba13c9b0.mp3*~data=user_id=0,application_id=42~hmac=53da6786dfcd6f3facabc76ae7c4f46e5f7267932f54095fce51d1ab93c5e81b"
      },
      {
        "id": "edm-49",
        "title": "Runaway (U & I)",
        "artist": "Galantis",
        "year": 2014,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e26d05cc4a80b07bcb4182bb598eae9d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/6/2/0/b629c34eaf0878bef1b72f16ee027ec8.mp3?hdnea=exp=1788639390~acl=/api/1/1/b/6/2/0/b629c34eaf0878bef1b72f16ee027ec8.mp3*~data=user_id=0,application_id=42~hmac=9d004925ce7d813b21bc2811ed3e2a692c8dd406a3d61c3de532b0e55326b41b"
      },
      {
        "id": "edm-50",
        "title": "Mammoth",
        "artist": "Dimitri Vegas",
        "year": 2013,
        "genre": "Dance",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7522299e7dbf797d73ccde4dcb80ae53/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/d/f/0/3df6537cc5dcdf332987c696bd6db82e.mp3?hdnea=exp=1788639391~acl=/api/1/1/3/d/f/0/3df6537cc5dcdf332987c696bd6db82e.mp3*~data=user_id=0,application_id=42~hmac=4feb81be3fc130c6052193161102d4634ed87b70421e2c223cdf9cd12f13ace4"
      }
    ]
  },
  {
    "id": "indie-italia",
    "title": "Indie & Cantautori Pop Italia",
    "category": "italian",
    "description": "Calcutta, Coez, Pinguini Tattici Nucleari, Gazzelle, Thegiornalisti e Franco126.",
    "badge": "Indie 🎸",
    "unlockRequirement": {
      "minLevel": 7,
      "label": "Livello 7"
    },
    "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "indi-1",
        "title": "Paracetamolo",
        "artist": "Calcutta",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/5/0/e953e2f2f71ed0c3d3ee6d1d1e7d7ac7.mp3?hdnea=exp=1786710738~acl=/api/1/1/e/9/5/0/e953e2f2f71ed0c3d3ee6d1d1e7d7ac7.mp3*~data=user_id=0,application_id=42~hmac=e3741fa26d5bfd3a7fd0f16aba5a1591a514b057a487a30994cab733325bb17e"
      },
      {
        "id": "indi-2",
        "title": "La musica non c'è",
        "artist": "Coez",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/6/7/0/667a6b46b68bff7824d638d51dc5e758.mp3?hdnea=exp=1786710738~acl=/api/1/1/6/6/7/0/667a6b46b68bff7824d638d51dc5e758.mp3*~data=user_id=0,application_id=42~hmac=ad16fe26b4f17ca7f362ab5a7bb6c1c70ea741dbe9382d41f0ce560cbb403813"
      },
      {
        "id": "indi-3",
        "title": "Ringo Starr",
        "artist": "Pinguini Tattici Nucleari",
        "year": 2020,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/4/f/0/24fc157e3dc1f50074841e046aef7c1d.mp3?hdnea=exp=1786710738~acl=/api/1/1/2/4/f/0/24fc157e3dc1f50074841e046aef7c1d.mp3*~data=user_id=0,application_id=42~hmac=dde2aa4071051ef352ce207d1ee72b9f2799d72dd4a289d03da160408b2571dc"
      },
      {
        "id": "indi-4",
        "title": "Gazzelle - Non sei tu",
        "artist": "Gazzelle",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/5/0/0/e50c609732897a3e1b662d9c6bf7bca4.mp3?hdnea=exp=1786710738~acl=/api/1/1/e/5/0/0/e50c609732897a3e1b662d9c6bf7bca4.mp3*~data=user_id=0,application_id=42~hmac=0ad67301a51c03af5013dcbcd8b77d5cc814bbf88113878cfa0fbfa5136deda8"
      },
      {
        "id": "indi-5",
        "title": "Completamente",
        "artist": "Thegiornalisti",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/a/6/0/3a675e131ba5d3cf2906112614bb59e7.mp3?hdnea=exp=1786710738~acl=/api/1/1/3/a/6/0/3a675e131ba5d3cf2906112614bb59e7.mp3*~data=user_id=0,application_id=42~hmac=1ee5b5372af9a251b854ae12307835a10dd8c4764f6296295e4d6b2eab179622"
      },
      {
        "id": "indi-6",
        "title": "Pesto",
        "artist": "Calcutta",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/f/1/0/8f16bd83d72211f7f5d9492b106d8353.mp3?hdnea=exp=1786710738~acl=/api/1/1/8/f/1/0/8f16bd83d72211f7f5d9492b106d8353.mp3*~data=user_id=0,application_id=42~hmac=6158066a480481fd57e3ed7280f41f374981ca0c63a628e5741751db2812e517"
      },
      {
        "id": "indi-7",
        "title": "Oroscopo",
        "artist": "Calcutta",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/2/9/0/829a7729a72f288b3c4e29c3aec622f0.mp3?hdnea=exp=1786710738~acl=/api/1/1/8/2/9/0/829a7729a72f288b3c4e29c3aec622f0.mp3*~data=user_id=0,application_id=42~hmac=57d811b0cb2c818feaf8c5fb9f59cd8f5b3ed430373bce409d20f73453bcb323"
      },
      {
        "id": "indi-8",
        "title": "Fiamme negli occhi",
        "artist": "Coma_Cose",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/f/7/0/3f79154bcdcd416c993bfe0e548873b9.mp3?hdnea=exp=1786710738~acl=/api/1/1/3/f/7/0/3f79154bcdcd416c993bfe0e548873b9.mp3*~data=user_id=0,application_id=42~hmac=61f7670062e7deb8d6decb9acd74ef6fcf5c4294653cadffe5b80ab20ae00329"
      },
      {
        "id": "indi-9",
        "title": "L'Addio",
        "artist": "Coma_Cose",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/0/c/0/60c152a2ea4207a0040ac0e7d69e038b.mp3?hdnea=exp=1786710738~acl=/api/1/1/6/0/c/0/60c152a2ea4207a0040ac0e7d69e038b.mp3*~data=user_id=0,application_id=42~hmac=ff132b06993da12fa7b2a77fe3dbda17908a3566958e458899d49bc4edf3478a"
      },
      {
        "id": "indi-10",
        "title": "Pastello Bianco",
        "artist": "Pinguini Tattici Nucleari",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/4/0/08446ca97b8ddbc763d716ae96eea545.mp3?hdnea=exp=1786710738~acl=/api/1/1/0/8/4/0/08446ca97b8ddbc763d716ae96eea545.mp3*~data=user_id=0,application_id=42~hmac=8cfe7cc10b892d3ea982d9901332ea7dd1537f815992da1cbf0c8582ed7e5ad5"
      },
      {
        "id": "indi-11",
        "title": "Giovovani Popolari",
        "artist": "Pinguini Tattici Nucleari",
        "year": 2022,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/7/3/0/a73383c56e0d41934466436f7ea3e236.mp3?hdnea=exp=1786710739~acl=/api/1/1/a/7/3/0/a73383c56e0d41934466436f7ea3e236.mp3*~data=user_id=0,application_id=42~hmac=3fb43770716a0a762b0ad3a5fc4f7baa36d3faa69b71f0d496a823d5e701b197"
      },
      {
        "id": "indi-12",
        "title": "È sempre bello",
        "artist": "Coez",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/b/b/0/abb6814a7d3801e36d27ae20d67006c1.mp3?hdnea=exp=1786710739~acl=/api/1/1/a/b/b/0/abb6814a7d3801e36d27ae20d67006c1.mp3*~data=user_id=0,application_id=42~hmac=c2977bad2cb338cc03c6679b4b14203316686c402385a8a0336c54a936da9edb"
      },
      {
        "id": "indi-13",
        "title": "Domenica",
        "artist": "Coez",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/e/6/0/ae68515c1e31b826c44c0bf531ca50b5.mp3?hdnea=exp=1786710739~acl=/api/1/1/a/e/6/0/ae68515c1e31b826c44c0bf531ca50b5.mp3*~data=user_id=0,application_id=42~hmac=9030b935a27fc03cb526b87ff7a0a8cb735db2ccd6bdd8013fa03560b8bcc69c"
      },
      {
        "id": "indi-14",
        "title": "Destri",
        "artist": "Gazzelle",
        "year": 2020,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/c/9/0/2c9d2dd88aa4f85f45c1d368c035b48f.mp3?hdnea=exp=1786710739~acl=/api/1/1/2/c/9/0/2c9d2dd88aa4f85f45c1d368c035b48f.mp3*~data=user_id=0,application_id=42~hmac=7958883c9cce299ec27bedb43cdb9d4be5399ecfcc641fda51e3e80c57d998c7"
      },
      {
        "id": "indi-15",
        "title": "Tutto qui",
        "artist": "Gazzelle",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/2/1/0/a21887a9ee383ecf5d93c15be00cfe6b.mp3?hdnea=exp=1786710739~acl=/api/1/1/a/2/1/0/a21887a9ee383ecf5d93c15be00cfe6b.mp3*~data=user_id=0,application_id=42~hmac=07c2843b7e6dbc3d8e6cd14ccb6bac59d78d44fcc73310cd8cf9fb694332bbdc"
      },
      {
        "id": "indi-16",
        "title": "Stressed Out",
        "artist": "Franco126",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/3/9/0/039205494378011a773a49f8929ff032.mp3?hdnea=exp=1786710741~acl=/api/1/1/0/3/9/0/039205494378011a773a49f8929ff032.mp3*~data=user_id=0,application_id=42~hmac=40714df792fda1196f9e17939a7b67e841e5f1e7cc3cc2d49827275fd9e1a336"
      },
      {
        "id": "indi-17",
        "title": "Blue Jeans",
        "artist": "Franco126 & Calcutta",
        "year": 2020,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/0/6/0/106f98628dd8cda35be949bf6e868091.mp3?hdnea=exp=1786710740~acl=/api/1/1/1/0/6/0/106f98628dd8cda35be949bf6e868091.mp3*~data=user_id=0,application_id=42~hmac=a25787f52a3c54819797adc2458594475d1cebf5611e532f4e0802d0fc4ad6dd"
      },
      {
        "id": "indi-18",
        "title": "Santa Marinella",
        "artist": "Fulminacci",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/e/1/0/2e1097e44be05d6319e8d913c47c69bf.mp3?hdnea=exp=1786710740~acl=/api/1/1/2/e/1/0/2e1097e44be05d6319e8d913c47c69bf.mp3*~data=user_id=0,application_id=42~hmac=b24078a6fbbe06beea24161d4f32d9b9c130287fd2fd42925c298615261a2983"
      },
      {
        "id": "indi-19",
        "title": "Borghese in Borghesia",
        "artist": "Fulminacci",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/5/0/805a20db1d8c5a765cc648db4ebd12a0.mp3?hdnea=exp=1786710740~acl=/api/1/1/8/0/5/0/805a20db1d8c5a765cc648db4ebd12a0.mp3*~data=user_id=0,application_id=42~hmac=8c1c039cfa09788a91b1afcde40e548aa41723baddf6bedd9b19b5a986c50cf3"
      },
      {
        "id": "indi-20",
        "title": "Mare di Guai",
        "artist": "Ariete",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/4/1/0/141d39ba8b0a57a65dcaeefaf3cd8e28.mp3?hdnea=exp=1786710740~acl=/api/1/1/1/4/1/0/141d39ba8b0a57a65dcaeefaf3cd8e28.mp3*~data=user_id=0,application_id=42~hmac=ef856b5324f2939a6222aea01df82bfc6b33c2223664584938719e9eac00db9a"
      },
      {
        "id": "indi-21",
        "title": "L'ultima notte",
        "artist": "Ariete",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/d/e/0/8deb735857b1be8d7d0698f2e0290a40.mp3?hdnea=exp=1786710741~acl=/api/1/1/8/d/e/0/8deb735857b1be8d7d0698f2e0290a40.mp3*~data=user_id=0,application_id=42~hmac=87f67ae35ac488eab3a5afc9e413538c62f4024e5be16daebf0a3c27cff24629"
      },
      {
        "id": "indi-22",
        "title": "Manzanas",
        "artist": "Canova",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/d/1/0/0d128f31f44211d72c9dfbbcbb9475c7.mp3?hdnea=exp=1786710741~acl=/api/1/1/0/d/1/0/0d128f31f44211d72c9dfbbcbb9475c7.mp3*~data=user_id=0,application_id=42~hmac=8686f92bf461c78fad238baaedbb2eea6aee4ac77b15177388a3c8d3aa93be55"
      },
      {
        "id": "indi-23",
        "title": "Vita Sociale",
        "artist": "Canova",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/6/c/0/16c73d9af251c2bf4619834b54e1cddb.mp3?hdnea=exp=1786710741~acl=/api/1/1/1/6/c/0/16c73d9af251c2bf4619834b54e1cddb.mp3*~data=user_id=0,application_id=42~hmac=b602a4402fba01d62a57a1635c2a7146927f80dc7e516207fb5348f3c356cfeb"
      },
      {
        "id": "indi-24",
        "title": "Istruzioni per l'uso",
        "artist": "Brunori Sas",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/d/4/0/8d4f16c64adfa27fbc8d6d8093f62bae.mp3?hdnea=exp=1786710742~acl=/api/1/1/8/d/4/0/8d4f16c64adfa27fbc8d6d8093f62bae.mp3*~data=user_id=0,application_id=42~hmac=1b044518a37c95e5e754c97b5142ae823ba3ba4867de651ecd820575345bb585"
      },
      {
        "id": "indi-25",
        "title": "2000EP",
        "artist": "Psicologi",
        "year": 2020,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/d/0/0/7d00b9447410931a85a566f6a48946bc.mp3?hdnea=exp=1786710742~acl=/api/1/1/7/d/0/0/7d00b9447410931a85a566f6a48946bc.mp3*~data=user_id=0,application_id=42~hmac=ff8c9d1dcc869985e077dac86ee4a2d19d5d48a9cfe0cd42493535a429ad1af1"
      },
      {
        "id": "indi-26",
        "title": "Spiderman",
        "artist": "Psicologi",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/8/9/0/9898aa5b11c123be044c22d7d5a37787.mp3?hdnea=exp=1786710743~acl=/api/1/1/9/8/9/0/9898aa5b11c123be044c22d7d5a37787.mp3*~data=user_id=0,application_id=42~hmac=3e3b921b4ad2db9b898caacc699d23800be59cd0ff93b2cc30573455056ada20"
      },
      {
        "id": "indi-27",
        "title": "Cosa mi manchi a fare",
        "artist": "Calcutta",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/47a6b748aed1b61df7aa3716513de816/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/b/6/0/bb6a6ae02f2d7e43c8ef876d46debdff.mp3?hdnea=exp=1788639391~acl=/api/1/1/b/b/6/0/bb6a6ae02f2d7e43c8ef876d46debdff.mp3*~data=user_id=0,application_id=42~hmac=f84d737f112ad66b6869da4c772087dae58d035f4d3bb0b0413d8e34d7381a57"
      },
      {
        "id": "indi-28",
        "title": "Gaetano",
        "artist": "Calcutta",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/47a6b748aed1b61df7aa3716513de816/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/9/c/0/e9c20ba457e6f0219676692c5c0a6b13.mp3?hdnea=exp=1788639391~acl=/api/1/1/e/9/c/0/e9c20ba457e6f0219676692c5c0a6b13.mp3*~data=user_id=0,application_id=42~hmac=f476c048bc88b8584c4230dc1ff2fb039a09e086fdec7c858a8e8c41c8c9565a"
      },
      {
        "id": "indi-29",
        "title": "Promiscuità",
        "artist": "Thegiornalisti",
        "year": 2014,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/59994749eab00e57833dc819fe8e8c36/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/a/7/0/6a766dc06cabfdcfec6fbd02d581f949.mp3?hdnea=exp=1788639392~acl=/api/1/1/6/a/7/0/6a766dc06cabfdcfec6fbd02d581f949.mp3*~data=user_id=0,application_id=42~hmac=6c5046029d29d21c6efd951ef8a9faba01cf6b45537fc3c77b3583466fdf8a57"
      },
      {
        "id": "indi-30",
        "title": "Tra la strada e le stelle",
        "artist": "Thegiornalisti",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/47dd268cfb663e0fbda5ffd8a6677b1e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/7/b/0/57b77aeb84668c9d6b3dd7c8813a16d5.mp3?hdnea=exp=1788639392~acl=/api/1/1/5/7/b/0/57b77aeb84668c9d6b3dd7c8813a16d5.mp3*~data=user_id=0,application_id=42~hmac=125c00bef4b281e5ea5d8c442885ab4a517381eba4369bfbb13794b804980892"
      },
      {
        "id": "indi-31",
        "title": "Faccio un casino",
        "artist": "Coez",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f5a3ceebd3d9df879aeaef4bdbffddc5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/7/0/ff796623146966cf3929bcc483347200.mp3?hdnea=exp=1788639393~acl=/api/1/1/f/f/7/0/ff796623146966cf3929bcc483347200.mp3*~data=user_id=0,application_id=42~hmac=614872487e0d6d1ccaea6221727e2c1822b019b9818c7bb16ddebc9635183489"
      },
      {
        "id": "indi-32",
        "title": "Le luci della città",
        "artist": "Coez",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f5a3ceebd3d9df879aeaef4bdbffddc5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/2/0/4e2f3191e751e56d2f26bfc36066083e.mp3?hdnea=exp=1788639393~acl=/api/1/1/4/e/2/0/4e2f3191e751e56d2f26bfc36066083e.mp3*~data=user_id=0,application_id=42~hmac=6181a485187242074723f1b70712503e198366962cd63821c8e6ae39a5238ad7"
      },
      {
        "id": "indi-33",
        "title": "Sayonara",
        "artist": "Gazzelle",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e9d4eae99b8844fc72ddb7a67773d56a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/a/7/0/1a727b9c05956ef4df06e5b68d62a2c2.mp3?hdnea=exp=1788639394~acl=/api/1/1/1/a/7/0/1a727b9c05956ef4df06e5b68d62a2c2.mp3*~data=user_id=0,application_id=42~hmac=c5b82b8729d4392518714381012fa0f3b13ae48e59891bf66af8fb727b80c6a0"
      },
      {
        "id": "indi-34",
        "title": "Sopra",
        "artist": "Gazzelle",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e12d1a8e4f48bb556f0af5768aeac909/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/6/6/0/666b899ca0544d4181a80e5dc3819b51.mp3?hdnea=exp=1788639394~acl=/api/1/1/6/6/6/0/666b899ca0544d4181a80e5dc3819b51.mp3*~data=user_id=0,application_id=42~hmac=138f37c85fee95a7ae6f93b4127e06852365364a0d39d4c326ec1d2e93f81f11"
      },
      {
        "id": "indi-35",
        "title": "Scintille",
        "artist": "Gazzelle",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5314739887d73f74e423711cab65391b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/2/3/0/0238d2967b513dc435cc678c1cd332a9.mp3?hdnea=exp=1788639394~acl=/api/1/1/0/2/3/0/0238d2967b513dc435cc678c1cd332a9.mp3*~data=user_id=0,application_id=42~hmac=e03927743b0dc87e9cd826d49c01c351643c1253c49dbdbeda625f5be738d264"
      },
      {
        "id": "indi-36",
        "title": "Santamaria",
        "artist": "Canova",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f239011d214188186b6ad50194532e42/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/5/0/c45b69f1ec9cc1e88074318dff6aebec.mp3?hdnea=exp=1788639395~acl=/api/1/1/c/4/5/0/c45b69f1ec9cc1e88074318dff6aebec.mp3*~data=user_id=0,application_id=42~hmac=eae9525a0ac42e05a6fe051abf75ea6d9e40560762fe37d0a0bea00d0f874491"
      },
      {
        "id": "indi-37",
        "title": "Threesome",
        "artist": "Canova",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5220a74c32e37d9a399c26fa4613d090/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/2/b/0/d2b95114abd432bf02de6f2aed296ad2.mp3?hdnea=exp=1788639395~acl=/api/1/1/d/2/b/0/d2b95114abd432bf02de6f2aed296ad2.mp3*~data=user_id=0,application_id=42~hmac=cee450be6d7f9d1c577265921b418f425ed81d5d5445262a3013d3bfb234666e"
      },
      {
        "id": "indi-38",
        "title": "Niente Di Strano",
        "artist": "Giorgio Poi",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4c96ec9e643831f668034d83d6918aa3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/9/6/0/7969e96e054cf44b256c2580bb5147a0.mp3?hdnea=exp=1788639396~acl=/api/1/1/7/9/6/0/7969e96e054cf44b256c2580bb5147a0.mp3*~data=user_id=0,application_id=42~hmac=83730fb29f651d3a325cb347a01fd48ebf7265b69ed54c645634d6c424d5c316"
      },
      {
        "id": "indi-39",
        "title": "Tubature",
        "artist": "Giorgio Poi",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4c96ec9e643831f668034d83d6918aa3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/e/8/0/ce88dafed9f2cbca354dd743a7e4d4eb.mp3?hdnea=exp=1788639396~acl=/api/1/1/c/e/8/0/ce88dafed9f2cbca354dd743a7e4d4eb.mp3*~data=user_id=0,application_id=42~hmac=dc11d17c960ffcdac40de4f778021615b0093e621438f1d2817dcd6e324f8a53"
      },
      {
        "id": "indi-40",
        "title": "Tommaso",
        "artist": "Fulminacci",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8e478ccbb785e67ad880df5d9f3d7a1a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/0/9/0/c0933667a3f7b5b4407b9cadf9860039.mp3?hdnea=exp=1788639396~acl=/api/1/1/c/0/9/0/c0933667a3f7b5b4407b9cadf9860039.mp3*~data=user_id=0,application_id=42~hmac=a98096401f0b3b07fe5fc0e2e995cf7e153a56ff7a8d7b172f5e5026f792c047"
      },
      {
        "id": "indi-41",
        "title": "La Fine Dei Vent'anni",
        "artist": "Motta",
        "year": 2020,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/afe1878a0eb8e20d64e6e78fb7a5a799/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/b/1/0/9b1299e202c17d6b429ebf9fa6ac9369.mp3?hdnea=exp=1788639397~acl=/api/1/1/9/b/1/0/9b1299e202c17d6b429ebf9fa6ac9369.mp3*~data=user_id=0,application_id=42~hmac=721db93c7722f8168c8e328bf81d289bd3a8e9ebc7ae92eccf47a14d76170dfb"
      },
      {
        "id": "indi-42",
        "title": "L'ultima festa",
        "artist": "Cosmo",
        "year": 2016,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c3f13efbfcfb32bbef819cffcae0c4ec/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/f/8/0/ef81aa6e8f228cae358ac4da06de838e.mp3?hdnea=exp=1788639398~acl=/api/1/1/e/f/8/0/ef81aa6e8f228cae358ac4da06de838e.mp3*~data=user_id=0,application_id=42~hmac=643d1aab5d5fd791e052c9aad0dc891da154988a6a35afa19ea717894bcb98f1"
      },
      {
        "id": "indi-43",
        "title": "Suite Española, OP. 47 - Leyenda",
        "artist": "Thomas Cosmo",
        "year": 2013,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cc21f4197e08932bb38fc284c8a90032/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/b/7/0/3b727a3d2467fc5ed11c66e5e7c643a0.mp3?hdnea=exp=1788639398~acl=/api/1/1/3/b/7/0/3b727a3d2467fc5ed11c66e5e7c643a0.mp3*~data=user_id=0,application_id=42~hmac=4987466fb4db2ae93f406bc93481bb238e6ac79af858e4e9c64e9f9c51c671c2"
      },
      {
        "id": "indi-44",
        "title": "Cratere",
        "artist": "Frah Quintale",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c43dbb59ebd5a16aff13305bbea6838b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/3/5/0/835f785a22cf744b2259d1f85a2c5c7b.mp3?hdnea=exp=1788639398~acl=/api/1/1/8/3/5/0/835f785a22cf744b2259d1f85a2c5c7b.mp3*~data=user_id=0,application_id=42~hmac=6a45eb4070262310342a52ceebc741e47346da17d2fd0fc19184a5ccf1cb9d27"
      },
      {
        "id": "indi-45",
        "title": "Nei treni la notte",
        "artist": "Frah Quintale",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c43dbb59ebd5a16aff13305bbea6838b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/a/0/17a5473ddc250e93e54ef037fbcd0a21.mp3?hdnea=exp=1788639399~acl=/api/1/1/1/7/a/0/17a5473ddc250e93e54ef037fbcd0a21.mp3*~data=user_id=0,application_id=42~hmac=4b5b4a85366646ae667ecd3e9e24928b77862c32fbd21ae729391371f9e28dd5"
      },
      {
        "id": "indi-46",
        "title": "Si, ah",
        "artist": "Frah Quintale",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c43dbb59ebd5a16aff13305bbea6838b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/a/9/0/5a97a3c5fdacbc0118c8c835ce848aa4.mp3?hdnea=exp=1788639399~acl=/api/1/1/5/a/9/0/5a97a3c5fdacbc0118c8c835ce848aa4.mp3*~data=user_id=0,application_id=42~hmac=4a80f2ba0e4fbac8671d805222851fae505eb3e91354a1eaa8ab0b7cdc275655"
      },
      {
        "id": "indi-47",
        "title": "Frigobar",
        "artist": "Franco126",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/94d5ea2343650b92671a5cddb7d67846/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/a/0/4eab4ba87f81187f937159becc34d132.mp3?hdnea=exp=1788639400~acl=/api/1/1/4/e/a/0/4eab4ba87f81187f937159becc34d132.mp3*~data=user_id=0,application_id=42~hmac=e269fce2420422cf0f8c76fe0481f586adab0c95e6671b7d7e0d608721ce4348"
      },
      {
        "id": "indi-48",
        "title": "Ieri L'Altro",
        "artist": "Franco126",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4fc36e17e87e426a8586ed9b653b3cb7/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/2/3/0/c23aad993bde4812ac24107e6c5a0030.mp3?hdnea=exp=1788639400~acl=/api/1/1/c/2/3/0/c23aad993bde4812ac24107e6c5a0030.mp3*~data=user_id=0,application_id=42~hmac=9b2cd9a64bd03b3da582344235834016a4f20cae221ce65494106bbf2c217f54"
      },
      {
        "id": "indi-49",
        "title": "Sempre In Due",
        "artist": "Carl Brave x Franco126",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4e6c5bfe7d1a314ee2697e3406ced98c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/3/0/0/930383a3de0ead4b1f3da10d6b7147d2.mp3?hdnea=exp=1788639400~acl=/api/1/1/9/3/0/0/930383a3de0ead4b1f3da10d6b7147d2.mp3*~data=user_id=0,application_id=42~hmac=84bb6cbf29881c338bacb06b8a8a6f1e017260f4c0dee80c134c5adc23db7273"
      },
      {
        "id": "indi-50",
        "title": "Polaroid",
        "artist": "Carl Brave x Franco126",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4e6c5bfe7d1a314ee2697e3406ced98c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/3/1/0/531d52a3cf231d7b28793ee57b206264.mp3?hdnea=exp=1788639401~acl=/api/1/1/5/3/1/0/531d52a3cf231d7b28793ee57b206264.mp3*~data=user_id=0,application_id=42~hmac=10bb37b113925a6471f3a8a94563aef4f730c7385974d6143b76d118aa9d4e89"
      }
    ]
  },
  {
    "id": "pop-divas",
    "title": "Pop Divas & Queens",
    "category": "artists",
    "description": "Whitney Houston, Mariah Carey, Celine Dion, Beyoncé, Madonna, Christina Aguilera, Aretha Franklin, Tina Turner, Shakira, Lady Gaga, Cher, Amy Winehouse, Britney Spears, Janis Joplin, Gwen Stefani, Pink, Sia, Rihanna, Dua Lipa, Ariana Grande, Adele.",
    "badge": "Iconico ✨",
    "unlockRequirement": {
      "deathParadeRecord": 40,
      "minLevel": 10,
      "minDailyStreak": 240,
      "label": "Livello 10 o 40 in Death Parade 💀 o 240 gg Streak 🔥"
    },
    "cover": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "div-1",
        "title": "I Will Always Love You",
        "artist": "Whitney Houston",
        "year": 1992,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/9/8/0/8986cdb54dad14b36f42fbc2c966d83b.mp3?hdnea=exp=1786710744~acl=/api/1/1/8/9/8/0/8986cdb54dad14b36f42fbc2c966d83b.mp3*~data=user_id=0,application_id=42~hmac=7cc79f9a66a6b678055a16acc8e1d6a80fac7ff8d8fff90788d561a2a495d36e"
      },
      {
        "id": "div-2",
        "title": "I Wanna Dance with Somebody",
        "artist": "Whitney Houston",
        "year": 1987,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/b/0/ffbaa0dbc8eb4b09e015a5b92d497425.mp3?hdnea=exp=1786710744~acl=/api/1/1/f/f/b/0/ffbaa0dbc8eb4b09e015a5b92d497425.mp3*~data=user_id=0,application_id=42~hmac=dc83f95a2f1fa661cd3035589f25f9889793f1aa403ed32962c63363583d3ae3"
      },
      {
        "id": "div-3",
        "title": "Hero",
        "artist": "Mariah Carey",
        "year": 1993,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/b/0/f6bfb3fc7b37fcaf5d0dc603c2253502.mp3?hdnea=exp=1786710744~acl=/api/1/1/f/6/b/0/f6bfb3fc7b37fcaf5d0dc603c2253502.mp3*~data=user_id=0,application_id=42~hmac=551a420206af8dc7f3d2264121d3efe099cb643e1c9dedef1d50766809044db6"
      },
      {
        "id": "div-4",
        "title": "Without You",
        "artist": "Mariah Carey",
        "year": 1993,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/6/0/0/e6002789b09fd2740a65eac6cfefdc06.mp3?hdnea=exp=1786710744~acl=/api/1/1/e/6/0/0/e6002789b09fd2740a65eac6cfefdc06.mp3*~data=user_id=0,application_id=42~hmac=92e8603bf295ea720410653ce2dfd96e657220cf096e691255fffad79efe3672"
      },
      {
        "id": "div-5",
        "title": "All I Want for Christmas Is You",
        "artist": "Mariah Carey",
        "year": 1994,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/3/a/0/33a49805b18ab6839be984c716925c97.mp3?hdnea=exp=1786710744~acl=/api/1/1/3/3/a/0/33a49805b18ab6839be984c716925c97.mp3*~data=user_id=0,application_id=42~hmac=46c132fb819754525bdb85ca139cfbc859d0d83a0783f657ac9f3f7329705483"
      },
      {
        "id": "div-6",
        "title": "My Heart Will Go On",
        "artist": "Celine Dion",
        "year": 1997,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/b/c/0/cbcbe00dd0d860634c0778a2fb100249.mp3?hdnea=exp=1786710744~acl=/api/1/1/c/b/c/0/cbcbe00dd0d860634c0778a2fb100249.mp3*~data=user_id=0,application_id=42~hmac=5fc63b57091bf612190be920a9105c365d7733a031500df686616e71a58055f5"
      },
      {
        "id": "div-7",
        "title": "Because You Loved Me",
        "artist": "Celine Dion",
        "year": 1996,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/9/e/0/19eb8f5c639fee10ce3481069540a0ad.mp3?hdnea=exp=1786710744~acl=/api/1/1/1/9/e/0/19eb8f5c639fee10ce3481069540a0ad.mp3*~data=user_id=0,application_id=42~hmac=5af88b4da515a6dbf5cda12127c9192641b3d41be8a369f2e813395cb2683274"
      },
      {
        "id": "div-8",
        "title": "Crazy in Love",
        "artist": "Beyoncé",
        "year": 2003,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/d/a/0/9da6dc6e093d7afe9aba7868644fda2a.mp3?hdnea=exp=1786710744~acl=/api/1/1/9/d/a/0/9da6dc6e093d7afe9aba7868644fda2a.mp3*~data=user_id=0,application_id=42~hmac=bcaca2ecc286f16c672a913f4fee97249409e9935f5f5b390a13a35104bf9a30"
      },
      {
        "id": "div-9",
        "title": "Halo",
        "artist": "Beyoncé",
        "year": 2008,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/d/0/f6db083c41261c5814502cd3c25ec41f.mp3?hdnea=exp=1786710744~acl=/api/1/1/f/6/d/0/f6db083c41261c5814502cd3c25ec41f.mp3*~data=user_id=0,application_id=42~hmac=ee377419bbe0612b7def3c16b4e9bc2d98cfd5908c76d812c9190de4344b36a1"
      },
      {
        "id": "div-10",
        "title": "Single Ladies (Put a Ring on It)",
        "artist": "Beyoncé",
        "year": 2008,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/c/9/0/0c9cc0beae938bd297f288ff142133f4.mp3?hdnea=exp=1786710744~acl=/api/1/1/0/c/9/0/0c9cc0beae938bd297f288ff142133f4.mp3*~data=user_id=0,application_id=42~hmac=91705f8f921dce1a472bd1abf482e4b6fdd089506fc0270272ae3e29d6329324"
      },
      {
        "id": "div-11",
        "title": "Like a Prayer",
        "artist": "Madonna",
        "year": 1989,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/3/5/0/83568d6e8eab5d7d29effe9bf3a473ce.mp3?hdnea=exp=1786710744~acl=/api/1/1/8/3/5/0/83568d6e8eab5d7d29effe9bf3a473ce.mp3*~data=user_id=0,application_id=42~hmac=0eb07b7d7b069d84979c55db82bdcc9d562c44b8a57d2749f5ea7ebf7868d492"
      },
      {
        "id": "div-12",
        "title": "Vogue",
        "artist": "Madonna",
        "year": 1990,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/1/f/0/c1fb5f5ef77403b79869be7f24d917c7.mp3?hdnea=exp=1786710744~acl=/api/1/1/c/1/f/0/c1fb5f5ef77403b79869be7f24d917c7.mp3*~data=user_id=0,application_id=42~hmac=6404c5e2f959fea1ca8ad78cd8e335095f08d4551e09137a21b3d50751a431e1"
      },
      {
        "id": "div-13",
        "title": "Genie in a Bottle",
        "artist": "Christina Aguilera",
        "year": 1999,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/e/2/0/8e22266bd0ab3e16cf5df4208f1ff06d.mp3?hdnea=exp=1786710744~acl=/api/1/1/8/e/2/0/8e22266bd0ab3e16cf5df4208f1ff06d.mp3*~data=user_id=0,application_id=42~hmac=5051f127c51ce0842f22abd7a2a4efd8907300c5de59b4d742cf266384c408c7"
      },
      {
        "id": "div-14",
        "title": "Beautiful",
        "artist": "Christina Aguilera",
        "year": 2002,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/b/6/0/5b64e9ac89b6edfc4adbc8e568bb18dd.mp3?hdnea=exp=1786710744~acl=/api/1/1/5/b/6/0/5b64e9ac89b6edfc4adbc8e568bb18dd.mp3*~data=user_id=0,application_id=42~hmac=56bc4fbfa1887f876db0b451f45b61984109cbe366f3b140100ce6269b949737"
      },
      {
        "id": "div-15",
        "title": "Respect",
        "artist": "Aretha Franklin",
        "year": 1967,
        "genre": "Soul",
        "artworkUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/6/d/0/c6d3bd91c4f68ccb74adbec3f74cb7e4.mp3?hdnea=exp=1786710744~acl=/api/1/1/c/6/d/0/c6d3bd91c4f68ccb74adbec3f74cb7e4.mp3*~data=user_id=0,application_id=42~hmac=cc6a32aac97e7308e2b58bc0ba8b2b06d73d8c23d61c7d50008887cbd16b60a5"
      },
      {
        "id": "div-16",
        "title": "I Say a Little Prayer",
        "artist": "Aretha Franklin",
        "year": 1968,
        "genre": "Soul",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/2/0/0/820c54613cde143967e777dd1f59c364.mp3?hdnea=exp=1786710744~acl=/api/1/1/8/2/0/0/820c54613cde143967e777dd1f59c364.mp3*~data=user_id=0,application_id=42~hmac=c90804b65905cb73b57fcb4bb734734f470b3607d74621597ff4999a31d1307a"
      },
      {
        "id": "div-17",
        "title": "The Best",
        "artist": "Tina Turner",
        "year": 1989,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/5/f/0/05f1d27c201e3a70166ff29de70138bc.mp3?hdnea=exp=1786710744~acl=/api/1/1/0/5/f/0/05f1d27c201e3a70166ff29de70138bc.mp3*~data=user_id=0,application_id=42~hmac=98feb4b48e64c4752b6e316d5f64457142a5b561a364027aa56bdee0842fe273"
      },
      {
        "id": "div-18",
        "title": "What's Love Got to Do with It",
        "artist": "Tina Turner",
        "year": 1984,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/7/f/0/d7f3dcc2603b93d06d1df72fb3a6edc0.mp3?hdnea=exp=1786710744~acl=/api/1/1/d/7/f/0/d7f3dcc2603b93d06d1df72fb3a6edc0.mp3*~data=user_id=0,application_id=42~hmac=39f4f7c8583f0a56c5d8a3bec60b92a55f09509f0f9338b73d7dc895ba82d318"
      },
      {
        "id": "div-19",
        "title": "Hips Don't Lie",
        "artist": "Shakira",
        "year": 2006,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/0/a/0/b0a417d511b2eb577e53cae9f8657b23.mp3?hdnea=exp=1786710744~acl=/api/1/1/b/0/a/0/b0a417d511b2eb577e53cae9f8657b23.mp3*~data=user_id=0,application_id=42~hmac=a83afc8901d78cc77e85e3a89b168cc389f098c9922909f518e8c6b882f9c3ed"
      },
      {
        "id": "div-20",
        "title": "Whenever, Wherever",
        "artist": "Shakira",
        "year": 2001,
        "genre": "Latin",
        "artworkUrl": "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/9/4/0/79489cb58c16f1e07a1c841b910e4f1f.mp3?hdnea=exp=1786710744~acl=/api/1/1/7/9/4/0/79489cb58c16f1e07a1c841b910e4f1f.mp3*~data=user_id=0,application_id=42~hmac=74c17155c7ce645ab0ff3381bd6e88c255130fce7780bb451659901f3d9e0b03"
      },
      {
        "id": "div-21",
        "title": "Bad Romance",
        "artist": "Lady Gaga",
        "year": 2009,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/3/b/0/33b5dc7d2b62c0c1fc8a0402adf0c719.mp3?hdnea=exp=1786710745~acl=/api/1/1/3/3/b/0/33b5dc7d2b62c0c1fc8a0402adf0c719.mp3*~data=user_id=0,application_id=42~hmac=33c7d00a575e3f184cc3c0a7685c63603e780873788794f120fdb60865fbf3f0"
      },
      {
        "id": "div-22",
        "title": "Poker Face",
        "artist": "Lady Gaga",
        "year": 2008,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3?hdnea=exp=1786710745~acl=/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3*~data=user_id=0,application_id=42~hmac=7ce9989da11c08a259b119fa392ab05e6f7b14c72890b3837279cbd5764ec8c2"
      },
      {
        "id": "div-23",
        "title": "Believe",
        "artist": "Cher",
        "year": 1998,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/f/e/0/cfe5600eb3b0f8b50ff351ae46129e07.mp3?hdnea=exp=1786710745~acl=/api/1/1/c/f/e/0/cfe5600eb3b0f8b50ff351ae46129e07.mp3*~data=user_id=0,application_id=42~hmac=89f9971259f0d73162ef030f44e8ea6bed664df8022c9bc4dbd2bd7d5749ed06"
      },
      {
        "id": "div-24",
        "title": "Rehab",
        "artist": "Amy Winehouse",
        "year": 2006,
        "genre": "Soul",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/d/0/21dd455c62dd8ecfbb94a879455fce82.mp3?hdnea=exp=1786710745~acl=/api/1/1/2/1/d/0/21dd455c62dd8ecfbb94a879455fce82.mp3*~data=user_id=0,application_id=42~hmac=5315b82fb7084aaa9fba38ab9cb994e401b04b99087cf9d976fa17afb01a7903"
      },
      {
        "id": "div-25",
        "title": "Back to Black",
        "artist": "Amy Winehouse",
        "year": 2006,
        "genre": "Soul",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/c/5/0/8c51a0c8941f72ee783a7b2798cff8c8.mp3?hdnea=exp=1786710745~acl=/api/1/1/8/c/5/0/8c51a0c8941f72ee783a7b2798cff8c8.mp3*~data=user_id=0,application_id=42~hmac=be39f12261495d0c4609e5ec03a624b0c5105ac2566bb23ca7e6d2cc7a62f6e3"
      },
      {
        "id": "div-26",
        "title": "...Baby One More Time",
        "artist": "Britney Spears",
        "year": 1998,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/1/7/0/b17b241965ce5ad2fa504f46a8684da8.mp3?hdnea=exp=1786710745~acl=/api/1/1/b/1/7/0/b17b241965ce5ad2fa504f46a8684da8.mp3*~data=user_id=0,application_id=42~hmac=35c1d93fcec85c96465ca4e4a3af38abdcdfad34d43536ef70830814fcc0e3ae"
      },
      {
        "id": "div-27",
        "title": "Toxic",
        "artist": "Britney Spears",
        "year": 2003,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/d/3/0/9d34e72ceb70f4d8e347d3e21e245531.mp3?hdnea=exp=1786710745~acl=/api/1/1/9/d/3/0/9d34e72ceb70f4d8e347d3e21e245531.mp3*~data=user_id=0,application_id=42~hmac=304c6ae923328877d9b827a5a540a5a8d797e078e0a5a84f879815300e5424b9"
      },
      {
        "id": "div-28",
        "title": "Piece of My Heart",
        "artist": "Janis Joplin",
        "year": 1968,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/e/0/ffe4c770a391d8e90ef15a349bd1a1ea.mp3?hdnea=exp=1786710745~acl=/api/1/1/f/f/e/0/ffe4c770a391d8e90ef15a349bd1a1ea.mp3*~data=user_id=0,application_id=42~hmac=80446ec4ead7930e69541ea98b0b129c39f9e35b0e7b22fcfd412808cd1ded4b"
      },
      {
        "id": "div-29",
        "title": "Hollaback Girl",
        "artist": "Gwen Stefani",
        "year": 2004,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/9/7/0/59792905dcec7086972c2b1455532baa.mp3?hdnea=exp=1786710745~acl=/api/1/1/5/9/7/0/59792905dcec7086972c2b1455532baa.mp3*~data=user_id=0,application_id=42~hmac=a92e47288eda6f7771f6cbc5adf8b7749cf66ac250ba470f7b37e62bd2b75bfc"
      },
      {
        "id": "div-30",
        "title": "Just Give Me a Reason",
        "artist": "Pink",
        "year": 2012,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/3/c/0/33c14aad4bcbeffda720292f5b1db798.mp3?hdnea=exp=1786710745~acl=/api/1/1/3/3/c/0/33c14aad4bcbeffda720292f5b1db798.mp3*~data=user_id=0,application_id=42~hmac=c146c19bf759057de3552daa559fe6073e3cdb5192eee16999b7a11e8539dae5"
      },
      {
        "id": "div-31",
        "title": "Chandelier",
        "artist": "Sia",
        "year": 2014,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/7/3/0/8732a4eb0fbbcfaf4f163b79cfff29ea.mp3?hdnea=exp=1786710745~acl=/api/1/1/8/7/3/0/8732a4eb0fbbcfaf4f163b79cfff29ea.mp3*~data=user_id=0,application_id=42~hmac=459a018ab64a062d8c7093c1ade5d2295bd4d8389ce9b93a05c2d08e2e76def0"
      },
      {
        "id": "div-32",
        "title": "Diamonds",
        "artist": "Rihanna",
        "year": 2012,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/9/a/0/d9a6e59bc4f67c830ab1df243e976e55.mp3?hdnea=exp=1786710745~acl=/api/1/1/d/9/a/0/d9a6e59bc4f67c830ab1df243e976e55.mp3*~data=user_id=0,application_id=42~hmac=d0d610a642edadd06a389a013a6a0743f80f15afe2c492cc3e5789083166fe37"
      },
      {
        "id": "div-33",
        "title": "Umbrella",
        "artist": "Rihanna",
        "year": 2007,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/6/2/0/c62231a4abced1c3e3ba03b5effb9aa9.mp3?hdnea=exp=1786710745~acl=/api/1/1/c/6/2/0/c62231a4abced1c3e3ba03b5effb9aa9.mp3*~data=user_id=0,application_id=42~hmac=3f1aa1aaf984a092c8faee67e7878c7767836cacc17b5eb16fbfb1736f4fb75c"
      },
      {
        "id": "div-34",
        "title": "Levitating",
        "artist": "Dua Lipa",
        "year": 2020,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/5/0/9c570bc806fc277bb73ba024e956d057.mp3?hdnea=exp=1786710745~acl=/api/1/1/9/c/5/0/9c570bc806fc277bb73ba024e956d057.mp3*~data=user_id=0,application_id=42~hmac=c4bffcc368d6f8f38df1489673e689fbd02160838766de9d1ee2ba548ab0301c"
      },
      {
        "id": "div-35",
        "title": "7 rings",
        "artist": "Ariana Grande",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/2/2/0/e2210dc9ffd5633719e4f695d42e4554.mp3?hdnea=exp=1786710745~acl=/api/1/1/e/2/2/0/e2210dc9ffd5633719e4f695d42e4554.mp3*~data=user_id=0,application_id=42~hmac=0b94915a083e1b7078645e6f4902c004e1b6840632d4a3164805f628acb8cedd"
      },
      {
        "id": "div-36",
        "title": "Rolling in the Deep",
        "artist": "Adele",
        "year": 2011,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/8/7/0/d87d2d1789c1b4d96992d8079a29360b.mp3?hdnea=exp=1786710745~acl=/api/1/1/d/8/7/0/d87d2d1789c1b4d96992d8079a29360b.mp3*~data=user_id=0,application_id=42~hmac=f2deb22e0c17d4d2cbb6877071e6f976aa771cedfb64467849d19cc1fb1996e9"
      },
      {
        "id": "div-37",
        "title": "Someone Like You",
        "artist": "Adele",
        "year": 2011,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/f/6/0/cf61cfa01f653ad6b8696a81c6e4d747.mp3?hdnea=exp=1786710745~acl=/api/1/1/c/f/6/0/cf61cfa01f653ad6b8696a81c6e4d747.mp3*~data=user_id=0,application_id=42~hmac=1f4c20ad290daeeefc1e537c2a44118f1c98a4da4571e8929a4510a6afd79fc7"
      },
      {
        "id": "div-38",
        "title": "Hung Up",
        "artist": "Madonna",
        "year": 2005,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8e499d7b0e9be5b77eb6c2697e179fe3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/9/6/0/096286ef9836241cf1f34c03713f0222.mp3?hdnea=exp=1788639401~acl=/api/1/1/0/9/6/0/096286ef9836241cf1f34c03713f0222.mp3*~data=user_id=0,application_id=42~hmac=2bcc84b64e47e4b199ddc8db9c3f207303cd1a92e5603c5ad1f6d7f258469eb0"
      },
      {
        "id": "div-39",
        "title": "It's All Coming Back to Me Now",
        "artist": "Céline Dion",
        "year": 1996,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/c/4/0/dc44e7db4623a82b09687f7f72d98e51.mp3?hdnea=exp=1788639402~acl=/api/1/1/d/c/4/0/dc44e7db4623a82b09687f7f72d98e51.mp3*~data=user_id=0,application_id=42~hmac=906a4ae35791f00ebd26224eb4d424c861573379cc34ecb0a7840da78eee983b"
      },
      {
        "id": "div-40",
        "title": "Oops!...I Did It Again",
        "artist": "Britney Spears",
        "year": 2000,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2ee378abaa92e28306850b4b0efe2f03/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/2/0/da215cd110d2e9a8b72f180669f004a5.mp3?hdnea=exp=1788639402~acl=/api/1/1/d/a/2/0/da215cd110d2e9a8b72f180669f004a5.mp3*~data=user_id=0,application_id=42~hmac=0606a3c91b624ee87051c06d24d8a3a50a724d75a152923463d1ea65c6eb87bf"
      },
      {
        "id": "div-41",
        "title": "Run the World (Girls)",
        "artist": "Beyoncé",
        "year": 2011,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b9ffe6c9d8a81bfa273378f45b06deee/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/5/0/9958c7a250b18c3a950dbab276fe6b47.mp3?hdnea=exp=1788639402~acl=/api/1/1/9/9/5/0/9958c7a250b18c3a950dbab276fe6b47.mp3*~data=user_id=0,application_id=42~hmac=0fb5a29cd08cc046d945ee262db04c7e6bbde7eea4fb389cefe8543503bd7e04"
      },
      {
        "id": "div-42",
        "title": "We Found Love (Album Version)",
        "artist": "Rihanna",
        "year": 2011,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5199f89d5113a83b5086463d5d0c9415/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/5/7/0/f572de0695aa9bcbfd2f04b771cdcf9c.mp3?hdnea=exp=1788639403~acl=/api/1/1/f/5/7/0/f572de0695aa9bcbfd2f04b771cdcf9c.mp3*~data=user_id=0,application_id=42~hmac=f0521599c401d6e46802d891e6d7cd6e035d24a5aca4fd52590f154feaedc8af"
      },
      {
        "id": "div-43",
        "title": "Born This Way",
        "artist": "Lady Gaga",
        "year": 2011,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0f256c4bebac58a7c4122e0e639303a8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/6/2/0/5627de841bea48ee30cd40ed971b4bbb.mp3?hdnea=exp=1788639403~acl=/api/1/1/5/6/2/0/5627de841bea48ee30cd40ed971b4bbb.mp3*~data=user_id=0,application_id=42~hmac=6d16a9930846b52ca42d04a8ee7cc543be0ffd4e1edbc3296c5517eb316762a2"
      },
      {
        "id": "div-44",
        "title": "Hello",
        "artist": "Adele",
        "year": 2015,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/f/0/99f3f9045f87708fcc0518dea2a60ac9.mp3?hdnea=exp=1788639403~acl=/api/1/1/9/9/f/0/99f3f9045f87708fcc0518dea2a60ac9.mp3*~data=user_id=0,application_id=42~hmac=e7674e4015101d8b3e496816403d62bd79c88681bc7205a412d4428fa0cda744"
      },
      {
        "id": "div-45",
        "title": "Set Fire to the Rain",
        "artist": "Adele",
        "year": 2011,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/dc1ce848d830ecc93521be5a78350364/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/9/d/0/89d33940ac8fd32e481a6f7ac7fa891a.mp3?hdnea=exp=1788639404~acl=/api/1/1/8/9/d/0/89d33940ac8fd32e481a6f7ac7fa891a.mp3*~data=user_id=0,application_id=42~hmac=103c3d6aae9edcdb9cb24c5d203c0f50a2fd4dd5d9af6454898d00a02480d4a5"
      },
      {
        "id": "div-46",
        "title": "Blank Space",
        "artist": "Taylor Swift",
        "year": 2014,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/b/7/0/bb7f65683e286ea3014c0fbd26bfaa5b.mp3?hdnea=exp=1788639404~acl=/api/1/1/b/b/7/0/bb7f65683e286ea3014c0fbd26bfaa5b.mp3*~data=user_id=0,application_id=42~hmac=beb9a620e51e0e8bead38abf7c6fc73e3708d3616ebc8d0f9bd6b018aa860ad2"
      },
      {
        "id": "div-47",
        "title": "Shake It Off",
        "artist": "Taylor Swift",
        "year": 2014,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/9/0/2d9810a9179e50e255861f3980d310df.mp3?hdnea=exp=1788639404~acl=/api/1/1/2/d/9/0/2d9810a9179e50e255861f3980d310df.mp3*~data=user_id=0,application_id=42~hmac=df75d1a4e674bc628f3fdb6b4db7958477ef2a282a5dd34b441722a4fc44a669"
      },
      {
        "id": "div-48",
        "title": "Katy Perry - Firework (Instrumental Version)",
        "artist": "Party Machine",
        "year": 2015,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/53e4937e369f87b92d23d588632f81f9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/4/6/0/f46f30924cfd888f268769eea9439af9.mp3?hdnea=exp=1788639405~acl=/api/1/1/f/4/6/0/f46f30924cfd888f268769eea9439af9.mp3*~data=user_id=0,application_id=42~hmac=4ef105d139864984310731b8f25c2b6bbd9cc35a8821fd02b1087515cc329320"
      },
      {
        "id": "div-49",
        "title": "Roar",
        "artist": "Katy Perry",
        "year": 2013,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fe781ecd9879a82beed80f6d3e80745b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/0/4/0/90438e4ff23b991843b4bdfd73a52584.mp3?hdnea=exp=1788639405~acl=/api/1/1/9/0/4/0/90438e4ff23b991843b4bdfd73a52584.mp3*~data=user_id=0,application_id=42~hmac=6109a14176002a084a04a2202218b8cb07605360c5ae3e1b7dca3ec4b2788fdc"
      },
      {
        "id": "div-50",
        "title": "thank u, next",
        "artist": "Ariana Grande",
        "year": 2019,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/f/0/eefa4d026d664cfa4fdc8c74a3d6edf4.mp3?hdnea=exp=1788639405~acl=/api/1/1/e/e/f/0/eefa4d026d664cfa4fdc8c74a3d6edf4.mp3*~data=user_id=0,application_id=42~hmac=3e1b6ee7525da48e19786b531187bb2b606ed85e0c84a27e85e11679d9530bdd"
      }
    ]
  },
  {
    "id": "rock-2000s",
    "title": "Rock 2000s & Alt-Rock",
    "category": "genres",
    "description": "Linkin Park, Green Day, Evanescence, Muse, The Offspring, Blink-182, System of a Down, Foo Fighters e Nickelback.",
    "badge": "Nostalgia 🎸",
    "unlockRequirement": {
      "minDailyStreak": 7,
      "minLevel": 4,
      "label": "7 giorni Sfida Quotidiana 🔥 o Livello 4"
    },
    "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "r2k-1",
        "title": "In the End",
        "artist": "Linkin Park",
        "year": 2000,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/b/3/0/9b3b33fa47f00eb43729de30e8027afa.mp3?hdnea=exp=1786710746~acl=/api/1/1/9/b/3/0/9b3b33fa47f00eb43729de30e8027afa.mp3*~data=user_id=0,application_id=42~hmac=1a85061f1a89dbb066df38bd6dcd9c673ba2053b2dc8e2ecea1c63b9554e3662"
      },
      {
        "id": "r2k-2",
        "title": "Numb",
        "artist": "Linkin Park",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/2/b/0/42b05e42e6f684b6a2de860831cfa91a.mp3?hdnea=exp=1786710746~acl=/api/1/1/4/2/b/0/42b05e42e6f684b6a2de860831cfa91a.mp3*~data=user_id=0,application_id=42~hmac=ef90ce823aa85ef193af00538c15a03d6aba1c5152d515a6332bb3b251f425d9"
      },
      {
        "id": "r2k-3",
        "title": "American Idiot",
        "artist": "Green Day",
        "year": 2004,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/b/2/0/6b20f0ea0464d874e0dc5bc77b581c21.mp3?hdnea=exp=1786710746~acl=/api/1/1/6/b/2/0/6b20f0ea0464d874e0dc5bc77b581c21.mp3*~data=user_id=0,application_id=42~hmac=f00ccb265d773a890600f461b1b76c6b8ef674711e388cce72752db29c6af93f"
      },
      {
        "id": "r2k-4",
        "title": "Boulevard of Broken Dreams",
        "artist": "Green Day",
        "year": 2004,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/c/0/49c71c37f91c8280512ba6c5cef9d328.mp3?hdnea=exp=1786710746~acl=/api/1/1/4/9/c/0/49c71c37f91c8280512ba6c5cef9d328.mp3*~data=user_id=0,application_id=42~hmac=47da863fb0f1060c5f2ee5b0cd19ccb1ae1089d6c551decaebc89e673e235111"
      },
      {
        "id": "r2k-5",
        "title": "Bring Me to Life",
        "artist": "Evanescence",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/e/0/0/5e09a4a0e73681c2f28f724a4e41ce74.mp3?hdnea=exp=1786710746~acl=/api/1/1/5/e/0/0/5e09a4a0e73681c2f28f724a4e41ce74.mp3*~data=user_id=0,application_id=42~hmac=48955644add6378aabd1928d81a27bfe4f134906ae17b8d291c35503a77643a0"
      },
      {
        "id": "r2k-6",
        "title": "My Immortal",
        "artist": "Evanescence",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/f/c/0/8fc38ba8c805528809008319acbc1c06.mp3?hdnea=exp=1786710746~acl=/api/1/1/8/f/c/0/8fc38ba8c805528809008319acbc1c06.mp3*~data=user_id=0,application_id=42~hmac=e9b76acd53e02094b44cb7423c97e4acb4f37737b4a25cbdd85e52dab82579ac"
      },
      {
        "id": "r2k-7",
        "title": "Uprising",
        "artist": "Muse",
        "year": 2009,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/c/4/0/4c4abba6f024a3bc7bd1e122fd8da88c.mp3?hdnea=exp=1786710746~acl=/api/1/1/4/c/4/0/4c4abba6f024a3bc7bd1e122fd8da88c.mp3*~data=user_id=0,application_id=42~hmac=4a8fb576bbde63bb198f6974ea24f99cd9603d58dcb76b0df93109e829625e44"
      },
      {
        "id": "r2k-8",
        "title": "Supermassive Black Hole",
        "artist": "Muse",
        "year": 2006,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/5/8/0/4589367276d77cfeb3e1257e7006dd37.mp3?hdnea=exp=1786710746~acl=/api/1/1/4/5/8/0/4589367276d77cfeb3e1257e7006dd37.mp3*~data=user_id=0,application_id=42~hmac=d8bfce8ce95c55d1cb7ec23bb6dcd9bf45bda2a4199700f8697bdb09cb8686b3"
      },
      {
        "id": "r2k-9",
        "title": "The Pretender",
        "artist": "Foo Fighters",
        "year": 2007,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/5/6/0/0563ec4e57aeb9c730d2fa983d76c6b2.mp3?hdnea=exp=1786710746~acl=/api/1/1/0/5/6/0/0563ec4e57aeb9c730d2fa983d76c6b2.mp3*~data=user_id=0,application_id=42~hmac=f5463e22deb2efe34df23e30f6afc2a0810a50fb76981aa03f05166f70d12559"
      },
      {
        "id": "r2k-10",
        "title": "Best of You",
        "artist": "Foo Fighters",
        "year": 2005,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/1/9/0/1198dbb77e401fb8d3f4deb749f63485.mp3?hdnea=exp=1786710746~acl=/api/1/1/1/1/9/0/1198dbb77e401fb8d3f4deb749f63485.mp3*~data=user_id=0,application_id=42~hmac=b995cdeb9f688a51997ae2fe26fb0d4b011b16c577679b2c4ba17dd0cce7373b"
      },
      {
        "id": "r2k-11",
        "title": "All the Small Things",
        "artist": "Blink-182",
        "year": 2000,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/a/4/0/aa45181e0e0f93f03704205b5543ab88.mp3?hdnea=exp=1786710746~acl=/api/1/1/a/a/4/0/aa45181e0e0f93f03704205b5543ab88.mp3*~data=user_id=0,application_id=42~hmac=009190dd07055c899174cca16842cf4bbdc5a58054db1fb161f0e9127c5f9ab1"
      },
      {
        "id": "r2k-12",
        "title": "I Miss You",
        "artist": "Blink-182",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/f/0/0/7f072cdec829e7ee0f74d73f685bbc92.mp3?hdnea=exp=1786710746~acl=/api/1/1/7/f/0/0/7f072cdec829e7ee0f74d73f685bbc92.mp3*~data=user_id=0,application_id=42~hmac=e39c30453cef813d0333cf4d4903b9ba111b095f352c3eba753adc3296b070fa"
      },
      {
        "id": "r2k-13",
        "title": "Chop Suey!",
        "artist": "System of a Down",
        "year": 2001,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/6/e/0/d6e21047dfd33e0c1f8206940445779c.mp3?hdnea=exp=1786710746~acl=/api/1/1/d/6/e/0/d6e21047dfd33e0c1f8206940445779c.mp3*~data=user_id=0,application_id=42~hmac=ad7043db20409d03c1794e7c338f78f4bab09f5b62fe22ab276cde4a8bcf749d"
      },
      {
        "id": "r2k-14",
        "title": "Toxicity",
        "artist": "System of a Down",
        "year": 2001,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/8/2/0/682240371ed8bd7757aebc61fa11f274.mp3?hdnea=exp=1786710746~acl=/api/1/1/6/8/2/0/682240371ed8bd7757aebc61fa11f274.mp3*~data=user_id=0,application_id=42~hmac=52ab2f86c053a962eeb291fddce2b805cfd6ff7e729cfd26d77db9be4f03118b"
      },
      {
        "id": "r2k-15",
        "title": "How You Remind Me",
        "artist": "Nickelback",
        "year": 2001,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/bc844f574c47ba2f0db583115916472f/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/7/0/f671cd1a0852ac1cd328124ecb922ede.mp3?hdnea=exp=1786710913~acl=/api/1/1/f/6/7/0/f671cd1a0852ac1cd328124ecb922ede.mp3*~data=user_id=0,application_id=42~hmac=200efa4f17121d801166bea59fc074f157c1ed895b30a1e01139eac2dd98e63d"
      },
      {
        "id": "r2k-16",
        "title": "Last Resort",
        "artist": "Papa Roach",
        "year": 2000,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/f/1/0/df18bc3feb6e47fc695b0b3910fb6db4.mp3?hdnea=exp=1786710748~acl=/api/1/1/d/f/1/0/df18bc3feb6e47fc695b0b3910fb6db4.mp3*~data=user_id=0,application_id=42~hmac=cf2029c9190d6afa12aed073307577a83f71686dc4ad914c2c30d56754c9ca02"
      },
      {
        "id": "r2k-17",
        "title": "It's My Life",
        "artist": "Bon Jovi",
        "year": 2000,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/6/0/f667e54de16c003d2862fd1d84978b0f.mp3?hdnea=exp=1786710748~acl=/api/1/1/f/6/6/0/f667e54de16c003d2862fd1d84978b0f.mp3*~data=user_id=0,application_id=42~hmac=dfbd53224358fd6d1705f6303458e0ef0f8bd0c97fd46109ba2f84e2475a5ac6"
      },
      {
        "id": "r2k-18",
        "title": "Crawling",
        "artist": "Linkin Park",
        "year": 2000,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/0/5/0/1055fb11b6c86f15f2391db91ba20117.mp3?hdnea=exp=1786710748~acl=/api/1/1/1/0/5/0/1055fb11b6c86f15f2391db91ba20117.mp3*~data=user_id=0,application_id=42~hmac=13da99d99a828d55c946a91e2e28e7f8258f8c6b5874667b7c81c6fdd4a16aa7"
      },
      {
        "id": "r2k-19",
        "title": "Wake Me Up When September Ends",
        "artist": "Green Day",
        "year": 2004,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/8/3/0/9837dd113ea0fa2c6b022319fa291ecf.mp3?hdnea=exp=1786710748~acl=/api/1/1/9/8/3/0/9837dd113ea0fa2c6b022319fa291ecf.mp3*~data=user_id=0,application_id=42~hmac=716fc9c0227c1d6fdbe3832a33f88dfe564c7cd33929e2ec952b6adfafdd6f3b"
      },
      {
        "id": "r2k-20",
        "title": "You're Gonna Go Far, Kid",
        "artist": "The Offspring",
        "year": 2008,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/f/0/25f9d22e1f669664aab0e47e698b2c78.mp3?hdnea=exp=1786710748~acl=/api/1/1/2/5/f/0/25f9d22e1f669664aab0e47e698b2c78.mp3*~data=user_id=0,application_id=42~hmac=56dbd891512cfc0bbf56fc4d8c3b0809ac90902ba7a200768d4eda64e115b604"
      },
      {
        "id": "r2k-21",
        "title": "Seven Nation Army",
        "artist": "The White Stripes",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/d/e/0/7de8805c1993e802810d7ca37a615f81.mp3?hdnea=exp=1786710748~acl=/api/1/1/7/d/e/0/7de8805c1993e802810d7ca37a615f81.mp3*~data=user_id=0,application_id=42~hmac=11b8f3313d4324f062604aa477c712dfe16cd35c56794a2ed5ffc2aea71910a3"
      },
      {
        "id": "r2k-22",
        "title": "I Hate Everything About You",
        "artist": "Three Days Grace",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/f/6/0/ff6d51f374d0d2443efc4460db54a74f.mp3?hdnea=exp=1786710748~acl=/api/1/1/f/f/6/0/ff6d51f374d0d2443efc4460db54a74f.mp3*~data=user_id=0,application_id=42~hmac=ce9ef1e1cefa495a8d25383c7d28e48f33763dc94046b75dfb3552fc87d3a869"
      },
      {
        "id": "r2k-23",
        "title": "Animal I Have Become",
        "artist": "Three Days Grace",
        "year": 2006,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/d/0/63d0024de74cabf4a18f29cc9d82043b.mp3?hdnea=exp=1786710748~acl=/api/1/1/6/3/d/0/63d0024de74cabf4a18f29cc9d82043b.mp3*~data=user_id=0,application_id=42~hmac=02cf81661f5b66f9c05a6a1dc1e338c2280bf320eabdadbeafd5623f309ca4e8"
      },
      {
        "id": "r2k-24",
        "title": "The Kill (Bury Me)",
        "artist": "30 Seconds to Mars",
        "year": 2005,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/b/b/0/dbb09e45324aead96fb4f25e7a063819.mp3?hdnea=exp=1786710748~acl=/api/1/1/d/b/b/0/dbb09e45324aead96fb4f25e7a063819.mp3*~data=user_id=0,application_id=42~hmac=a098c08d1a8cd2566156c34631fd5384d81bd157d7e7e67e9d364dc527897735"
      },
      {
        "id": "r2k-25",
        "title": "Closer to the Edge",
        "artist": "30 Seconds to Mars",
        "year": 2009,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/5/0/d456728f245b94fdeeed4440c23916ea.mp3?hdnea=exp=1786710748~acl=/api/1/1/d/4/5/0/d456728f245b94fdeeed4440c23916ea.mp3*~data=user_id=0,application_id=42~hmac=b9c76b8f660b8463ad03b5bae33b212f04675323af3be7c2764129c1081155e8"
      },
      {
        "id": "r2k-26",
        "title": "Misery Business",
        "artist": "Paramore",
        "year": 2007,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/0/2/0/3025b7b2163764b922e8e0e1c950f1c5.mp3?hdnea=exp=1786710748~acl=/api/1/1/3/0/2/0/3025b7b2163764b922e8e0e1c950f1c5.mp3*~data=user_id=0,application_id=42~hmac=6e4fca6c1f1f85068699e0a496907721acd0443820dae9516fcc27d07120ba0d"
      },
      {
        "id": "r2k-27",
        "title": "Sugar, We're Goin Down",
        "artist": "Fall Out Boy",
        "year": 2005,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/3/8/0/938605b5b099a3e2a05b3eb6d8c822cb.mp3?hdnea=exp=1786710748~acl=/api/1/1/9/3/8/0/938605b5b099a3e2a05b3eb6d8c822cb.mp3*~data=user_id=0,application_id=42~hmac=4f88bd888518a58f9cacabc2215a579ab396528e14cb3e9952773addb700aaea"
      },
      {
        "id": "r2k-28",
        "title": "Thnks fr th Mmrs",
        "artist": "Fall Out Boy",
        "year": 2007,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/b/5/0/2b55e4f4ee7e4251acd369d4bd1206f2.mp3?hdnea=exp=1786710748~acl=/api/1/1/2/b/5/0/2b55e4f4ee7e4251acd369d4bd1206f2.mp3*~data=user_id=0,application_id=42~hmac=8e0b8050b4b791c026dbf9060feb0c1611f6eb97180bbdc2f63dcbfa6a4d6767"
      },
      {
        "id": "r2k-29",
        "title": "Decode",
        "artist": "Paramore",
        "year": 2008,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/2/0/c727658d808ea41e689dec9cc322a341.mp3?hdnea=exp=1786710748~acl=/api/1/1/c/7/2/0/c727658d808ea41e689dec9cc322a341.mp3*~data=user_id=0,application_id=42~hmac=a010a4ac16fea4db6e285e09325208c1ff9c1dc1c90840c275919d4616d89f98"
      },
      {
        "id": "r2k-30",
        "title": "Learn to Fly",
        "artist": "Foo Fighters",
        "year": 1999,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/c/0/2dc3c7e79faaf5cff45c4b797dc95807.mp3?hdnea=exp=1786710748~acl=/api/1/1/2/d/c/0/2dc3c7e79faaf5cff45c4b797dc95807.mp3*~data=user_id=0,application_id=42~hmac=aaa0c0d044d401eba039c007fe7e335737184b34bd72e777057d22aaf6fbc250"
      },
      {
        "id": "r2k-31",
        "title": "Faint",
        "artist": "Linkin Park",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/882448ab63952aa16e502c82db2df160/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/3/7/0/0377f1a5f8b1dd2dbd4aa7b3c0803f05.mp3?hdnea=exp=1788639406~acl=/api/1/1/0/3/7/0/0377f1a5f8b1dd2dbd4aa7b3c0803f05.mp3*~data=user_id=0,application_id=42~hmac=c151bc0dfb77ec698961a5bfda69a0aae58ce9f7934f4dfb51558ecd083f6ef4"
      },
      {
        "id": "r2k-32",
        "title": "Somewhere I Belong",
        "artist": "Linkin Park",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/882448ab63952aa16e502c82db2df160/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/7/0/70748cd9030247f2f9063820bc1e5017.mp3?hdnea=exp=1788639406~acl=/api/1/1/7/0/7/0/70748cd9030247f2f9063820bc1e5017.mp3*~data=user_id=0,application_id=42~hmac=66e26055245207a5ae98239a974743aa2f68d8c525c2d814517258f9697347b6"
      },
      {
        "id": "r2k-33",
        "title": "Holiday",
        "artist": "Green Day",
        "year": 2005,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cee32dee76dea2c67a13764457fbac48/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/c/8/0/3c8e633869eabb73dd15a17c2c4d2d99.mp3?hdnea=exp=1788639406~acl=/api/1/1/3/c/8/0/3c8e633869eabb73dd15a17c2c4d2d99.mp3*~data=user_id=0,application_id=42~hmac=8120fa6eec54255f58a38a85145137d3ee8febff81fc17385ab9c21d843a4bf8"
      },
      {
        "id": "r2k-34",
        "title": "When You Were Young",
        "artist": "The Killers",
        "year": 2006,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/daaf443d20af3ec952c2504a02032e49/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/f/c/0/2fcb1743e48221c1b63377a4faf593aa.mp3?hdnea=exp=1788639407~acl=/api/1/1/2/f/c/0/2fcb1743e48221c1b63377a4faf593aa.mp3*~data=user_id=0,application_id=42~hmac=e381f2c83fee7e964214c585459096301ae4cb354aebeb1ba6b419c394f6d2e8"
      },
      {
        "id": "r2k-35",
        "title": "Starlight",
        "artist": "Muse",
        "year": 2006,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fc457d27a8c0b7fc6f9b56fb94e22a0d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/1/0/a910a2b3b12919401f374e55be48a2e3.mp3?hdnea=exp=1788639407~acl=/api/1/1/a/9/1/0/a910a2b3b12919401f374e55be48a2e3.mp3*~data=user_id=0,application_id=42~hmac=c61a6c1d23c3898f729c34ca61a0b98216efb4050b210c24cc73dad16a5f946b"
      },
      {
        "id": "r2k-36",
        "title": "Hysteria",
        "artist": "Muse",
        "year": 2023,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fc1237878aab62be8ff624f575961e68/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/4/8/0/5487e4818d19839dd842bf54717f340a.mp3?hdnea=exp=1788639407~acl=/api/1/1/5/4/8/0/5487e4818d19839dd842bf54717f340a.mp3*~data=user_id=0,application_id=42~hmac=9517d91de1b177878e2270e928cbb7790f99996b904a64633206621ccc0a197c"
      },
      {
        "id": "r2k-37",
        "title": "Yellow",
        "artist": "Coldplay",
        "year": 2000,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/970dce98eeea6729244c0ae71707a83d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/f/0/64f36083ad5a11e6803ef7ddbcdaf898.mp3?hdnea=exp=1788639408~acl=/api/1/1/6/4/f/0/64f36083ad5a11e6803ef7ddbcdaf898.mp3*~data=user_id=0,application_id=42~hmac=a81332b802abed96bd524f58b9c0de867c32c24253d90e0fc6e540a5f1a6c175"
      },
      {
        "id": "r2k-38",
        "title": "The Scientist",
        "artist": "Coldplay",
        "year": 2002,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5ba1787e1ec36dbbca38ff01fea8fb21/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/2/2/0/f2294668b615f9c8ab79782a5bdaf46d.mp3?hdnea=exp=1788639408~acl=/api/1/1/f/2/2/0/f2294668b615f9c8ab79782a5bdaf46d.mp3*~data=user_id=0,application_id=42~hmac=29a49930e5753d28d7cb532d7f6618fa4db388a761ec37ec5487b7a487580649"
      },
      {
        "id": "r2k-39",
        "title": "Coldplay - Viva La Vida (Instrumental Version)",
        "artist": "Party Machine",
        "year": 2015,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4f22a956c22207674d303ea302294e6e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/d/0/70dca6d515dd6ba3c97c2a80664727e9.mp3?hdnea=exp=1788639408~acl=/api/1/1/7/0/d/0/70dca6d515dd6ba3c97c2a80664727e9.mp3*~data=user_id=0,application_id=42~hmac=1f36a8b45d471144db575b843adf9a1111541e88e15a2f0eebf1fc8b2b6df7a2"
      },
      {
        "id": "r2k-40",
        "title": "Clocks",
        "artist": "Coldplay",
        "year": 2002,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5ba1787e1ec36dbbca38ff01fea8fb21/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/a/b/0/aab462f45130dd661898605b8573b1e2.mp3?hdnea=exp=1788639409~acl=/api/1/1/a/a/b/0/aab462f45130dd661898605b8573b1e2.mp3*~data=user_id=0,application_id=42~hmac=204afcc0e6ddb68b4598df91ca948ef118c631ee447618d78e36717e5eac3fa5"
      },
      {
        "id": "r2k-41",
        "title": "Going Under",
        "artist": "Evanescence",
        "year": 2026,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/56c02d3764f5a078ceecd27b64b7d789/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/a/c/0/0acaa322a301b0797d190c88b0b758c8.mp3?hdnea=exp=1788639409~acl=/api/1/1/0/a/c/0/0acaa322a301b0797d190c88b0b758c8.mp3*~data=user_id=0,application_id=42~hmac=f92ca028bf03fa81f38a9eb80f6eaedb19d7e7c00952e27e268c67d130900407"
      },
      {
        "id": "r2k-42",
        "title": "Times Like These",
        "artist": "Foo Fighters",
        "year": 2002,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/106f595f32552192b5af96fde11317c1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/a/8/0/6a8dc943d56051485896ca4c6d82040f.mp3?hdnea=exp=1788639410~acl=/api/1/1/6/a/8/0/6a8dc943d56051485896ca4c6d82040f.mp3*~data=user_id=0,application_id=42~hmac=e5969639c035cb78c7abd860255fc2039e2c113674686a6fc377a9e6cf47a2db"
      },
      {
        "id": "r2k-43",
        "title": "Photograph",
        "artist": "Nickelback",
        "year": 2013,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/bc844f574c47ba2f0db583115916472f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/4/3/0/9432689fe8f551a2c469f0a7a1c87649.mp3?hdnea=exp=1788639410~acl=/api/1/1/9/4/3/0/9432689fe8f551a2c469f0a7a1c87649.mp3*~data=user_id=0,application_id=42~hmac=35363cf8ded6b6cac9ce060b953d7eed99e72d9379bf9b0192b6591e52b1d42e"
      },
      {
        "id": "r2k-44",
        "title": "From Yesterday",
        "artist": "Thirty Seconds to Mars",
        "year": 2007,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b3f2e0f5260be982342bfa08317d1356/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/a/b/0/7ab529b4cd6ba8967f92831927b3fda3.mp3?hdnea=exp=1788639410~acl=/api/1/1/7/a/b/0/7ab529b4cd6ba8967f92831927b3fda3.mp3*~data=user_id=0,application_id=42~hmac=e4b557745975580138dadae142f2aa7e8193826a9888974142c348d44bd488f3"
      },
      {
        "id": "r2k-45",
        "title": "Like a Stone",
        "artist": "Audioslave",
        "year": 2002,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/66997a3babcd76fced42425e063a0b55/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/8/6/0/686255b1a32679574a923e449c860416.mp3?hdnea=exp=1788639411~acl=/api/1/1/6/8/6/0/686255b1a32679574a923e449c860416.mp3*~data=user_id=0,application_id=42~hmac=69c0c4d165a084495ce78f2af96040addb208a0908327d045ce08d7ec6d4f859"
      },
      {
        "id": "r2k-46",
        "title": "Dance, Dance",
        "artist": "Fall Out Boy",
        "year": 2005,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c11ee620979e5e6f99bfd08470876ecd/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/d/0/0/fd0bc72c69346a5bc2810af9bbf2948d.mp3?hdnea=exp=1788639411~acl=/api/1/1/f/d/0/0/fd0bc72c69346a5bc2810af9bbf2948d.mp3*~data=user_id=0,application_id=42~hmac=49f04cb1298b3c68134b1a9aa20fdaba2d96b8ae95e3629cd9e9ca749c184cc0"
      },
      {
        "id": "r2k-47",
        "title": "Welcome to the Black Parade",
        "artist": "My Chemical Romance",
        "year": 2006,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0f23ab7de2b53c5298044ef1de148c50/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/4/0/6345c2ae4a80adf6c11e50ee66bd62bb.mp3?hdnea=exp=1788639412~acl=/api/1/1/6/3/4/0/6345c2ae4a80adf6c11e50ee66bd62bb.mp3*~data=user_id=0,application_id=42~hmac=7f41f9febfdec3d505a0dc719a28676dede43a42b2ca7b833d48829f0eef98fa"
      },
      {
        "id": "r2k-48",
        "title": "Helena",
        "artist": "My Chemical Romance",
        "year": 2004,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9aba5b418a311c0bbefb6699ebc58a4b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/8/1/0/d814b1850bb92c860c77ab7a7dac1455.mp3?hdnea=exp=1788639412~acl=/api/1/1/d/8/1/0/d814b1850bb92c860c77ab7a7dac1455.mp3*~data=user_id=0,application_id=42~hmac=56ddf140e7907ad4d6c378024960990dd2ce04828e0797e2c5ba54a9eae7ec55"
      },
      {
        "id": "r2k-49",
        "title": "Scars",
        "artist": "Papa Roach",
        "year": 2010,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/70328b4823ca8bd1975a04c2c21327d7/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/8/9/0/589a4a72121ae501738e444717551ee8.mp3?hdnea=exp=1788639412~acl=/api/1/1/5/8/9/0/589a4a72121ae501738e444717551ee8.mp3*~data=user_id=0,application_id=42~hmac=73657e3c0744e0604699caedf40b9c6d5084226c06778335380fa3458dc35bda"
      },
      {
        "id": "r2k-50",
        "title": "No One Knows",
        "artist": "Queens of the Stone Age",
        "year": 2002,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ace9490e8fe0c7468b102aa5145fb766/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/a/9/0/9a9a927b756615ee1275931323782359.mp3?hdnea=exp=1788639413~acl=/api/1/1/9/a/9/0/9a9a927b756615ee1275931323782359.mp3*~data=user_id=0,application_id=42~hmac=88a94b99fb47bacc7c067e6f8189ddf9e30d4b1b4471de8a782e952339c36e42"
      }
    ]
  },
  {
    "id": "rock-80s",
    "title": "Rock Anni '80 & Glam Rock",
    "category": "decades",
    "description": "Bon Jovi, Guns N' Roses, Def Leppard, Van Halen, Europe, Journey, Whitesnake e Scorpions.",
    "badge": "Hair Metal ⚡",
    "unlockRequirement": {
      "minDailyStreak": 15,
      "minLevel": 8,
      "label": "15 giorni Sfida Quotidiana 🔥 o Livello 8"
    },
    "cover": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "r80-1",
        "title": "Livin' on a Prayer",
        "artist": "Bon Jovi",
        "year": 1986,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/c/1/0/7c1d95d2fe6ad479f66d912db049df50.mp3?hdnea=exp=1786710749~acl=/api/1/1/7/c/1/0/7c1d95d2fe6ad479f66d912db049df50.mp3*~data=user_id=0,application_id=42~hmac=8ef97c6303cf2e7c088ecdb92731cac62175073eabcd82670db50bf5173bb3cb"
      },
      {
        "id": "r80-2",
        "title": "You Give Love a Bad Name",
        "artist": "Bon Jovi",
        "year": 1986,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/b/f/0/1bf7aa2754a2b8c2bdb2d9630f6c3213.mp3?hdnea=exp=1786710749~acl=/api/1/1/1/b/f/0/1bf7aa2754a2b8c2bdb2d9630f6c3213.mp3*~data=user_id=0,application_id=42~hmac=f2edaa0f4f2eb791940a12038eac7a72f2d4ea20ad5ab09285b1cb61cdfb1dd2"
      },
      {
        "id": "r80-3",
        "title": "Sweet Child O' Mine",
        "artist": "Guns N' Roses",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/9/1/0/59115eec88ea0bc7742eaba93facf49b.mp3?hdnea=exp=1786710749~acl=/api/1/1/5/9/1/0/59115eec88ea0bc7742eaba93facf49b.mp3*~data=user_id=0,application_id=42~hmac=e7c85969394cbb7dc9a8709fb7b6496576f4ab49480bfa00e48dd3b038c47b1b"
      },
      {
        "id": "r80-4",
        "title": "Welcome to the Jungle",
        "artist": "Guns N' Roses",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/3/b/0/e3bdd797ec36df3068f8288688889ef2.mp3?hdnea=exp=1786710749~acl=/api/1/1/e/3/b/0/e3bdd797ec36df3068f8288688889ef2.mp3*~data=user_id=0,application_id=42~hmac=b6e060965dcd1493e583e0da4aa01b2c21a689f7eb55705800b720f61e40d41e"
      },
      {
        "id": "r80-5",
        "title": "Paradise City",
        "artist": "Guns N' Roses",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/8/0/9c8ef7fd15bb502b764c0551a3c9306f.mp3?hdnea=exp=1786710749~acl=/api/1/1/9/c/8/0/9c8ef7fd15bb502b764c0551a3c9306f.mp3*~data=user_id=0,application_id=42~hmac=2e8ab3f1bb9bf0bc469a405432e2024f07c390372ed27fad115cfe01b5551602"
      },
      {
        "id": "r80-6",
        "title": "Pour Some Sugar on Me",
        "artist": "Def Leppard",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/b/8/0/5b87fbdb6487f201b23d37e7e2adea41.mp3?hdnea=exp=1786710749~acl=/api/1/1/5/b/8/0/5b87fbdb6487f201b23d37e7e2adea41.mp3*~data=user_id=0,application_id=42~hmac=fe480a1e9b00ef44ea6c4c1f759af37d4d91c551368e314b9e844ce604e4f24e"
      },
      {
        "id": "r80-7",
        "title": "Jump",
        "artist": "Van Halen",
        "year": 1984,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/5/6/0/4564585fd721c9bf1df04fbf95f2ba9a.mp3?hdnea=exp=1786710749~acl=/api/1/1/4/5/6/0/4564585fd721c9bf1df04fbf95f2ba9a.mp3*~data=user_id=0,application_id=42~hmac=5fef5d7f9521bb407e34a2b83596476521c8ade94b70dbe2e624ae19c03e436a"
      },
      {
        "id": "r80-8",
        "title": "Panama",
        "artist": "Van Halen",
        "year": 1984,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/5/0/0/3500ceffbfe9b3200471e8c67e80f8db.mp3?hdnea=exp=1786710749~acl=/api/1/1/3/5/0/0/3500ceffbfe9b3200471e8c67e80f8db.mp3*~data=user_id=0,application_id=42~hmac=4845de7d608cd0b3ae25bd7675051c7877a817943c6f1be33288b737d765f52c"
      },
      {
        "id": "r80-9",
        "title": "The Final Countdown",
        "artist": "Europe",
        "year": 1986,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/0/0/040685eaaa8099482ac9079bbd08a318.mp3?hdnea=exp=1786710749~acl=/api/1/1/0/4/0/0/040685eaaa8099482ac9079bbd08a318.mp3*~data=user_id=0,application_id=42~hmac=399ec9096bfaf43f50f506c9ec7ecc9df8dd427ea38f0a361c982287d5d83f59"
      },
      {
        "id": "r80-10",
        "title": "Carrie",
        "artist": "Europe",
        "year": 1986,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/a/8/0/7a8c78809f0fb40bdd2d4256c869d15b.mp3?hdnea=exp=1786710749~acl=/api/1/1/7/a/8/0/7a8c78809f0fb40bdd2d4256c869d15b.mp3*~data=user_id=0,application_id=42~hmac=dd42d2a58b01aef7beeea570eed74cf4f8beecfd20da257466ca4ac6b051b9a3"
      },
      {
        "id": "r80-11",
        "title": "Don't Stop Believin'",
        "artist": "Journey",
        "year": 1981,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/2/0/0/d2075fdf5e55ef0a8f8383cefd6fc51b.mp3?hdnea=exp=1786710749~acl=/api/1/1/d/2/0/0/d2075fdf5e55ef0a8f8383cefd6fc51b.mp3*~data=user_id=0,application_id=42~hmac=3bb40322d568d636e9ba59b9a6255310cc49171e7ad55ad575fc1d997b72d048"
      },
      {
        "id": "r80-12",
        "title": "Here I Go Again",
        "artist": "Whitesnake",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/3/0/0/730600a628c24728415ee6239eb50004.mp3?hdnea=exp=1786710749~acl=/api/1/1/7/3/0/0/730600a628c24728415ee6239eb50004.mp3*~data=user_id=0,application_id=42~hmac=3cbe63159d9fc25fe6ff3a0c4d9fddb58853b04c17c9719386de5240d4e2c878"
      },
      {
        "id": "r80-13",
        "title": "Is This Love",
        "artist": "Whitesnake",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/2/2/0/7225b63eea9b4c1536d358cabe3c9859.mp3?hdnea=exp=1786710749~acl=/api/1/1/7/2/2/0/7225b63eea9b4c1536d358cabe3c9859.mp3*~data=user_id=0,application_id=42~hmac=a34547d41bee870ddbcd909b424f5dc7cec0b5badc92eb73f0f04558f4269c38"
      },
      {
        "id": "r80-14",
        "title": "Rock You Like a Hurricane",
        "artist": "Scorpions",
        "year": 1984,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/a/5/0/fa55ffe7ef454ead73733a739e192f23.mp3?hdnea=exp=1786710749~acl=/api/1/1/f/a/5/0/fa55ffe7ef454ead73733a739e192f23.mp3*~data=user_id=0,application_id=42~hmac=063de7918fa2ec9523a3041cde52e3d1b97b43cc04203a6fdf941065206b850c"
      },
      {
        "id": "r80-15",
        "title": "Back in Black",
        "artist": "AC/DC",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/2/b/0/82be918b42c3d26093b20d01e97e4a03.mp3?hdnea=exp=1786710749~acl=/api/1/1/8/2/b/0/82be918b42c3d26093b20d01e97e4a03.mp3*~data=user_id=0,application_id=42~hmac=9bfde8a32d3321e1660ed99a7dbf0a7de0fb84364057899bd0c60ac169bafe94"
      },
      {
        "id": "r80-16",
        "title": "You Shook Me All Night Long",
        "artist": "AC/DC",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/a/0/21af9bde7aacee934f02c9df8c931bdf.mp3?hdnea=exp=1786710750~acl=/api/1/1/2/1/a/0/21af9bde7aacee934f02c9df8c931bdf.mp3*~data=user_id=0,application_id=42~hmac=593c2f7442487da567242135c9bf183ddac969897bff73dc78197a15294e92c4"
      },
      {
        "id": "r80-17",
        "title": "Hells Bells",
        "artist": "AC/DC",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/8/b/0/f8b4a04d91b5736c17265e681687fe52.mp3?hdnea=exp=1786710750~acl=/api/1/1/f/8/b/0/f8b4a04d91b5736c17265e681687fe52.mp3*~data=user_id=0,application_id=42~hmac=ec38db4485635155fce905eea84431a3e5ac87f4c013007b1aff69e060609536"
      },
      {
        "id": "r80-18",
        "title": "Love Bites",
        "artist": "Def Leppard",
        "year": 1987,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/6/a/0/26ab40564028d9b2176d8b52631765cb.mp3?hdnea=exp=1786710750~acl=/api/1/1/2/6/a/0/26ab40564028d9b2176d8b52631765cb.mp3*~data=user_id=0,application_id=42~hmac=b39c0050253c9cef8805227e762900241326d03d983203b0670796a407d81856"
      },
      {
        "id": "r80-19",
        "title": "Crazy Train",
        "artist": "Ozzy Osbourne",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/8/0/048b6f79ce257b2f4aaefd150a2914ef.mp3?hdnea=exp=1786710750~acl=/api/1/1/0/4/8/0/048b6f79ce257b2f4aaefd150a2914ef.mp3*~data=user_id=0,application_id=42~hmac=ae2883cd9b2ed707d35d7d0db49a80008edba2e661a71728e377696f0bb53248"
      },
      {
        "id": "r80-20",
        "title": "Kickstart My Heart",
        "artist": "Mötley Crüe",
        "year": 1989,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/4/a/0/04a63f1d4fa182f9b3f8bd0230ba07dd.mp3?hdnea=exp=1786710750~acl=/api/1/1/0/4/a/0/04a63f1d4fa182f9b3f8bd0230ba07dd.mp3*~data=user_id=0,application_id=42~hmac=0ab4ae55da6965d201f84a9b21b23cdcfa552dcfdb2f84056f632ef214b1e858"
      },
      {
        "id": "r80-21",
        "title": "Dr. Feelgood",
        "artist": "Mötley Crüe",
        "year": 1989,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/0/4/0/1046ea68db995a8ae108a3d373b54caa.mp3?hdnea=exp=1786710750~acl=/api/1/1/1/0/4/0/1046ea68db995a8ae108a3d373b54caa.mp3*~data=user_id=0,application_id=42~hmac=762bfb303fcf8d995ee901139314dc75703973aa9d44b75ce8b0333b4303e2ab"
      },
      {
        "id": "r80-22",
        "title": "Poison",
        "artist": "Alice Cooper",
        "year": 1989,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/d/2/0/4d267f5e208ba289fdaa8c3d55dacb03.mp3?hdnea=exp=1786710750~acl=/api/1/1/4/d/2/0/4d267f5e208ba289fdaa8c3d55dacb03.mp3*~data=user_id=0,application_id=42~hmac=12570344d58dbc099ee6d6807e52097614ef3387d0496deeb0b8b980631ce101"
      },
      {
        "id": "r80-23",
        "title": "Every Rose Has Its Thorn",
        "artist": "Poison",
        "year": 1988,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/6/0/9c6680632db15297414bcb85b5551bf2.mp3?hdnea=exp=1786710750~acl=/api/1/1/9/c/6/0/9c6680632db15297414bcb85b5551bf2.mp3*~data=user_id=0,application_id=42~hmac=47c0d3dd024f0daea89a4f2d88a5392dc4bee662780707f9afc1b7816bdcf8e2"
      },
      {
        "id": "r80-24",
        "title": "I Love Rock 'N Roll",
        "artist": "Joan Jett & the Blackhearts",
        "year": 1981,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/9/0/509853cb718536aa41689abb1b63d16c.mp3?hdnea=exp=1786710750~acl=/api/1/1/5/0/9/0/509853cb718536aa41689abb1b63d16c.mp3*~data=user_id=0,application_id=42~hmac=10fec52d0730c13dc6556187bbffe81c28aa9e0adde890905610fb9fda4ccef2"
      },
      {
        "id": "r80-25",
        "title": "White Wedding",
        "artist": "Billy Idol",
        "year": 1982,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/0/e/0/e0e68a64d5476614d91426d026dd2e32.mp3?hdnea=exp=1786710750~acl=/api/1/1/e/0/e/0/e0e68a64d5476614d91426d026dd2e32.mp3*~data=user_id=0,application_id=42~hmac=7ea56b09a200a65ea84beb4ef908f6760d9de7b9da3999646bc9bea3e4009e71"
      },
      {
        "id": "r80-26",
        "title": "Rebel Yell",
        "artist": "Billy Idol",
        "year": 1983,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/f/5/0/9f58aa2a4e56e909199c392db704efa1.mp3?hdnea=exp=1786710750~acl=/api/1/1/9/f/5/0/9f58aa2a4e56e909199c392db704efa1.mp3*~data=user_id=0,application_id=42~hmac=8a041de413081ea32c59253d471d3cb18f39cc9a80583cb0892cd65265e3f823"
      },
      {
        "id": "r80-27",
        "title": "Run to the Hills",
        "artist": "Iron Maiden",
        "year": 1982,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/0/0/d405877daa528a9fd5a2c3134a84d3bd.mp3?hdnea=exp=1786710750~acl=/api/1/1/d/4/0/0/d405877daa528a9fd5a2c3134a84d3bd.mp3*~data=user_id=0,application_id=42~hmac=38ca22080908487b7f23d0126880dc247abb3eccea5f05268f004a4e27c910a8"
      },
      {
        "id": "r80-28",
        "title": "The Trooper",
        "artist": "Iron Maiden",
        "year": 1983,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/2/7/0/4272d737754f446ba683534fd6b19502.mp3?hdnea=exp=1786710750~acl=/api/1/1/4/2/7/0/4272d737754f446ba683534fd6b19502.mp3*~data=user_id=0,application_id=42~hmac=773ec521f4d14dac6c3b97091de5fd1c7bfc10f675ef1c932b5ced8b677c5b32"
      },
      {
        "id": "r80-29",
        "title": "Summer of '69",
        "artist": "Bryan Adams",
        "year": 1984,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/f/6/0/8f6d63c5bb2e96183a1087dac69baddd.mp3?hdnea=exp=1786710750~acl=/api/1/1/8/f/6/0/8f6d63c5bb2e96183a1087dac69baddd.mp3*~data=user_id=0,application_id=42~hmac=1ed1aa585c58547fa7dee7df9ecf0b2a9205f420b20bdcb1fb4ed06d2416c035"
      },
      {
        "id": "r80-30",
        "title": "I Was Made for Lovin' You",
        "artist": "KISS",
        "year": 1979,
        "genre": "Rock",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/f/d/0/0fd26e6272d663165335751997f58d25.mp3?hdnea=exp=1786710750~acl=/api/1/1/0/f/d/0/0fd26e6272d663165335751997f58d25.mp3*~data=user_id=0,application_id=42~hmac=567e0bdfa703e1ee1ac56955e3707e10275cc43658ee818cf1cdc04edef36a3e"
      },
      {
        "id": "r80-31",
        "title": "Shoot to Thrill",
        "artist": "AC/DC",
        "year": 1980,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/41041b14873956eff0459c8ea2c296a8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/c/d/0/fcda6193906653a30f049954af475eb1.mp3?hdnea=exp=1788639413~acl=/api/1/1/f/c/d/0/fcda6193906653a30f049954af475eb1.mp3*~data=user_id=0,application_id=42~hmac=922d131c8fd01e4cb8e4d1f8896049b7cf11a378db1738c0fe1c7c46a5b9f14e"
      },
      {
        "id": "r80-32",
        "title": "Photograph",
        "artist": "Def Leppard",
        "year": 2018,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/41d9eec944f1241f1b341fb2563e46ee/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/7/4/0/774dfc4e43e997b2d1eb0ed465c5e23c.mp3?hdnea=exp=1788639413~acl=/api/1/1/7/7/4/0/774dfc4e43e997b2d1eb0ed465c5e23c.mp3*~data=user_id=0,application_id=42~hmac=6b39864543922b8c3eea1304aa6418e216cacaa882d69e4420937216736a98ca"
      },
      {
        "id": "r80-33",
        "title": "Girls, Girls, Girls",
        "artist": "Mötley Crüe",
        "year": 2009,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/1385390bb0df1f06e3c21322c777936e/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/1/3/0/113eb7201a24fb9b4ca7b93daa5b989a.mp3?hdnea=exp=1788639414~acl=/api/1/1/1/1/3/0/113eb7201a24fb9b4ca7b93daa5b989a.mp3*~data=user_id=0,application_id=42~hmac=642ecf7d52937b2617b59a32b60e4b8bd50b482d2838a19d319e597fa4c58363"
      },
      {
        "id": "r80-34",
        "title": "Rock the Night",
        "artist": "Europe",
        "year": 1988,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f27265df605c4bce229b0623e18f179a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/1/3/0/413204a1d881373c9478cc6564780648.mp3?hdnea=exp=1788639414~acl=/api/1/1/4/1/3/0/413204a1d881373c9478cc6564780648.mp3*~data=user_id=0,application_id=42~hmac=624c5ff44ce79ac9c2b0e08e1b084a926ec380148e4484eaa541bbf62e5e65d4"
      },
      {
        "id": "r80-35",
        "title": "Hot for Teacher",
        "artist": "Van Halen",
        "year": 1984,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0649448bcdeeeb48c25edc0e83653711/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/8/f/0/a8f11f02bf899e1151203bbe48ceffb3.mp3?hdnea=exp=1788639415~acl=/api/1/1/a/8/f/0/a8f11f02bf899e1151203bbe48ceffb3.mp3*~data=user_id=0,application_id=42~hmac=6643bcb1c17b07e99d6c618f4a5e9a5ed53ed90ec8b13b8cb5c1d70df7890a5b"
      },
      {
        "id": "r80-36",
        "title": "Fool for Your Loving",
        "artist": "Whitesnake",
        "year": 2008,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/83063802a97d2c6277d7fff0baa0ff26/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/7/4/0/4740f4e814abdbdbb756f3a5dd637e76.mp3?hdnea=exp=1788639415~acl=/api/1/1/4/7/4/0/4740f4e814abdbdbb756f3a5dd637e76.mp3*~data=user_id=0,application_id=42~hmac=1a9e3cea8b02fc2bc74296b13b26e6e997a3f89f1a210684ae0c2c93b307d27d"
      },
      {
        "id": "r80-37",
        "title": "Still Loving You",
        "artist": "Scorpions",
        "year": 2026,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b692893d2ffa185fd62cdc8f9260a5d8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/a/0/daa4626eeb7c258e0059db59d7b17072.mp3?hdnea=exp=1788639415~acl=/api/1/1/d/a/a/0/daa4626eeb7c258e0059db59d7b17072.mp3*~data=user_id=0,application_id=42~hmac=13de7a83b9d899ac799e6162280ef06c2b9966f72018056cba608ee32beed2c5"
      },
      {
        "id": "r80-38",
        "title": "Dude (Looks Like A Lady)",
        "artist": "Aerosmith",
        "year": 2007,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/807fdcea57e5c1c0324ee76157fba51c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/9/5/0/d95ef6c73f8693df076985a23049dc64.mp3?hdnea=exp=1788639416~acl=/api/1/1/d/9/5/0/d95ef6c73f8693df076985a23049dc64.mp3*~data=user_id=0,application_id=42~hmac=ff3d9fb9b97e5641f4a41f209723c3c4124d0e85c0f317eec6f5eb6f996f41db"
      },
      {
        "id": "r80-39",
        "title": "Love In An Elevator (Single Version)",
        "artist": "Aerosmith",
        "year": 2011,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0b2e656a22a9a2e73b28262dfc6b9620/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/1/b/0/11bc61c199aae7c9c1e9f9cfce94cf1d.mp3?hdnea=exp=1788639416~acl=/api/1/1/1/1/b/0/11bc61c199aae7c9c1e9f9cfce94cf1d.mp3*~data=user_id=0,application_id=42~hmac=d5841c5d45ad4943ba7e63b805b98286d77d07bbe7a9139b2204404d116319bf"
      },
      {
        "id": "r80-40",
        "title": "Talk Dirty To Me",
        "artist": "Poison",
        "year": 2003,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c31dd9e661236bdef1c26608557ee832/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/9/8/0/b98c481b8a1258ede396dd570bb9e435.mp3?hdnea=exp=1788639417~acl=/api/1/1/b/9/8/0/b98c481b8a1258ede396dd570bb9e435.mp3*~data=user_id=0,application_id=42~hmac=64a8945666044e5a46c7ca37a219a04f7172e0cef724571c9aa1e8b975b03da9"
      },
      {
        "id": "r80-41",
        "title": "We're Not Gonna Take It",
        "artist": "Twisted Sister",
        "year": 2026,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/321fb7cf825b4b4bebb3650d8537bc76/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/c/d/0/ccd2d723c3249085c17ca4e3442bcec1.mp3?hdnea=exp=1788639417~acl=/api/1/1/c/c/d/0/ccd2d723c3249085c17ca4e3442bcec1.mp3*~data=user_id=0,application_id=42~hmac=13ab66cb70da6dd0e10a328756b0085fbdb65cdc65ee97c2bc0fa5aa16d2bf7b"
      },
      {
        "id": "r80-42",
        "title": "I Wanna Rock",
        "artist": "Twisted Sister",
        "year": 2026,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/321fb7cf825b4b4bebb3650d8537bc76/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/7/7/0/d776813dccea1ec755bac0c9fa7869b2.mp3?hdnea=exp=1788639417~acl=/api/1/1/d/7/7/0/d776813dccea1ec755bac0c9fa7869b2.mp3*~data=user_id=0,application_id=42~hmac=21b579e9ece80ddc61eebd69d6b30079c6b02e5e82253602d8a885fa59223469"
      },
      {
        "id": "r80-43",
        "title": "Bark at the Moon",
        "artist": "Ozzy Osbourne",
        "year": 1992,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/041d7858634ce9ca7c92d27d8a9dd274/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/7/0/497fe29f6e0ee965c82b92ab39d58f7b.mp3?hdnea=exp=1788639418~acl=/api/1/1/4/9/7/0/497fe29f6e0ee965c82b92ab39d58f7b.mp3*~data=user_id=0,application_id=42~hmac=a04071def645700092fc835ed52b54b5a5910d567548429dbbf98d15203cdccc"
      },
      {
        "id": "r80-44",
        "title": "Run To You",
        "artist": "Bryan Adams",
        "year": 2014,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f5c062034dbbf74f9c158c51ba783871/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/7/0/0/b70aeca529460e68afafd8cc44f2ef76.mp3?hdnea=exp=1788639418~acl=/api/1/1/b/7/0/0/b70aeca529460e68afafd8cc44f2ef76.mp3*~data=user_id=0,application_id=42~hmac=c2c784c7feb9bb2be9c0ebe93914d8a023000431e72550fce8898c3357d15886"
      },
      {
        "id": "r80-45",
        "title": "Eyes Without A Face",
        "artist": "Billy Idol",
        "year": 2017,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/eb0d342c982a77d5e1c106112dcd01c1/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/b/a/0/8ba13a79e692421c9ae575c7dd7d55d2.mp3?hdnea=exp=1788639419~acl=/api/1/1/8/b/a/0/8ba13a79e692421c9ae575c7dd7d55d2.mp3*~data=user_id=0,application_id=42~hmac=d992983bb57e718ce377cb5ce7367a0499279ba0e6d35d12eae03adf5c237ec0"
      },
      {
        "id": "r80-46",
        "title": "Bad Medicine",
        "artist": "Bon Jovi",
        "year": 2014,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ae062209da6c897f5670963ae99985f3/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/d/5/0/3d59f20a87b7efebe44e7199de89367d.mp3?hdnea=exp=1788639419~acl=/api/1/1/3/d/5/0/3d59f20a87b7efebe44e7199de89367d.mp3*~data=user_id=0,application_id=42~hmac=b16c0c9f54c6edffbac1936179f51cb817d8bf38034a41c9fe10cce5be6416d9"
      },
      {
        "id": "r80-47",
        "title": "I Want to Know What Love Is (Extended Version)",
        "artist": "Foreigner",
        "year": 2025,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/637a8487c7096efa04daae1667487c9d/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/2/0/da2cd07f7b3cb9a32fa2edceb245b044.mp3?hdnea=exp=1788639419~acl=/api/1/1/d/a/2/0/da2cd07f7b3cb9a32fa2edceb245b044.mp3*~data=user_id=0,application_id=42~hmac=1b23b7da78c27a86e92c63a7aa44ec226d13c98fce0c9bdeab7e7dfae6efbd5f"
      },
      {
        "id": "r80-48",
        "title": "Burning Heart (From \"Rocky IV\" Soundtrack)",
        "artist": "Survivor",
        "year": 2006,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e66b5d3a40f69690c1633afb73cc590c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/7/4/0/97415dee2c4b93aac66d60fc9b97e555.mp3?hdnea=exp=1788639420~acl=/api/1/1/9/7/4/0/97415dee2c4b93aac66d60fc9b97e555.mp3*~data=user_id=0,application_id=42~hmac=bda50181df8dea116dbb2a79bd9137fdfd17d0dee087c5b8cf77d86c609d0597"
      },
      {
        "id": "r80-49",
        "title": "Crimson and Clover",
        "artist": "Joan Jett and the Blackhearts",
        "year": 2018,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ad9d421e21e913593de553d00c4d4359/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/8/e/0/f8e8da7cbd0ebafac4cd271a6df60e04.mp3?hdnea=exp=1788639420~acl=/api/1/1/f/8/e/0/f8e8da7cbd0ebafac4cd271a6df60e04.mp3*~data=user_id=0,application_id=42~hmac=63654ff0dac0f7c2c9412351db3df148a3e510bdbcaf55e2662b02305eb3e55c"
      },
      {
        "id": "r80-50",
        "title": "Heaven's On Fire",
        "artist": "KISS",
        "year": 1994,
        "genre": "Rock",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/17082d3f48142ac3242885a1b7125b05/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/3/e/0/53eb9fe21ac1bd2c91fbaeb9bd312ff4.mp3?hdnea=exp=1788639420~acl=/api/1/1/5/3/e/0/53eb9fe21ac1bd2c91fbaeb9bd312ff4.mp3*~data=user_id=0,application_id=42~hmac=1b80e2f8c3848ea518b77130268091de41b62c15c9f740d3afb415ab160a9579"
      }
    ]
  },
  {
    "id": "alta-rotazione",
    "title": "Alta Rotazione (Hit in Classifica)",
    "category": "genres",
    "description": "I brani più ascoltati del momento: Shaboozey, Sabrina Carpenter, Billie Eilish, Mahmood, Annalisa, Lazza, Geolier e Taylor Swift.",
    "badge": "Top Hit 🔥",
    "unlockRequirement": {
      "minDailyStreak": 30,
      "minLevel": 6,
      "label": "30 giorni Sfida Quotidiana 🔥 o Livello 6"
    },
    "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "hit-1",
        "title": "A Bar Song (Tipsy)",
        "artist": "Shaboozey",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/5/c/0/e5c9f000eecf7738ff4e3a4e4e9f42b8.mp3?hdnea=exp=1786710751~acl=/api/1/1/e/5/c/0/e5c9f000eecf7738ff4e3a4e4e9f42b8.mp3*~data=user_id=0,application_id=42~hmac=53069740892f418506401f7e46466868c97676ededa238c2b33b20bbe9e4c39c"
      },
      {
        "id": "hit-2",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/a/0/17a21c40ce4af3ac9514aac756403188.mp3?hdnea=exp=1786710751~acl=/api/1/1/1/7/a/0/17a21c40ce4af3ac9514aac756403188.mp3*~data=user_id=0,application_id=42~hmac=545fe6187a491223bd3c70611eae5c0a6abf2aa4eb18a87ef257d58d840cd11e"
      },
      {
        "id": "hit-3",
        "title": "Please Please Please",
        "artist": "Sabrina Carpenter",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/8/a/0/68a841cd6df6a619d8b7cd1b2622391b.mp3?hdnea=exp=1786710751~acl=/api/1/1/6/8/a/0/68a841cd6df6a619d8b7cd1b2622391b.mp3*~data=user_id=0,application_id=42~hmac=9591741a7bf74c333f72cccfd169d4fb20b413d56261997f182e3253b9024534"
      },
      {
        "id": "hit-4",
        "title": "Birds of a Feather",
        "artist": "Billie Eilish",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/e/0/0/5e0fb99f6f1e0f18ab70a4c0d18efa5c.mp3?hdnea=exp=1786710751~acl=/api/1/1/5/e/0/0/5e0fb99f6f1e0f18ab70a4c0d18efa5c.mp3*~data=user_id=0,application_id=42~hmac=d36fb4c761beed990ee536eef27e00bdad4358f959f4b93b722ae27c7e710c51"
      },
      {
        "id": "hit-5",
        "title": "Lunch",
        "artist": "Billie Eilish",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/7/0/64794bd2d788edb12e44b11e09548d10.mp3?hdnea=exp=1786710751~acl=/api/1/1/6/4/7/0/64794bd2d788edb12e44b11e09548d10.mp3*~data=user_id=0,application_id=42~hmac=3d389726ab768800ef150597fba90a2a3ab53d561777316fe7d08e6ffd05702a"
      },
      {
        "id": "hit-6",
        "title": "Good Luck, Babe!",
        "artist": "Chappell Roan",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/c/7/0/cc78d370bc3fb2028ac03eb1e18e7022.mp3?hdnea=exp=1786710751~acl=/api/1/1/c/c/7/0/cc78d370bc3fb2028ac03eb1e18e7022.mp3*~data=user_id=0,application_id=42~hmac=64313c43d67a33314cec62d2ce2026b888412eaa598886d3bc5435e3806f9579"
      },
      {
        "id": "hit-7",
        "title": "Beautiful Things",
        "artist": "Benson Boone",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/71ca8c4c88fdb45381c4291bd4233ff6/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/4/7/0/1473eec25d81e5a9eaa41c63bf9242b1.mp3?hdnea=exp=1786710913~acl=/api/1/1/1/4/7/0/1473eec25d81e5a9eaa41c63bf9242b1.mp3*~data=user_id=0,application_id=42~hmac=852a17bd5f8a6a36580a2d8486d77fcc4a867645c8bb7b7c696b53d4f1b0f556"
      },
      {
        "id": "hit-8",
        "title": "I Had Some Help",
        "artist": "Post Malone ft. Morgan Wallen",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b9c8cc4fd597a9bc516445e6573501cf/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/5/a/0/45ad068f03b8fcb7d858ea657f6cdaf8.mp3?hdnea=exp=1786710913~acl=/api/1/1/4/5/a/0/45ad068f03b8fcb7d858ea657f6cdaf8.mp3*~data=user_id=0,application_id=42~hmac=f07652652074d20ec049e68aab74e9f46afd6590c59b1461b7c43b051e68f625"
      },
      {
        "id": "hit-9",
        "title": "Fortnight",
        "artist": "Taylor Swift ft. Post Malone",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/bfabb6f70db5842a2c42d0d431ab65ef/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/c/2/0/fc2e000c7c125102fc326023834bcbd9.mp3?hdnea=exp=1786710913~acl=/api/1/1/f/c/2/0/fc2e000c7c125102fc326023834bcbd9.mp3*~data=user_id=0,application_id=42~hmac=65ef4f2b3577afa3569d1cd9a9319edcc814dc31fd901d421fa446fc7fd41a08"
      },
      {
        "id": "hit-10",
        "title": "Cruel Summer",
        "artist": "Taylor Swift",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/d/2/0/cd2322270b4d6a7f34448c642123b257.mp3?hdnea=exp=1786710751~acl=/api/1/1/c/d/2/0/cd2322270b4d6a7f34448c642123b257.mp3*~data=user_id=0,application_id=42~hmac=4b21bf940184266a18410da7e8610835d9ec9f0c15ac0ef063ded6c9a7037364"
      },
      {
        "id": "hit-11",
        "title": "Tuta Gold",
        "artist": "Mahmood",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/0/8/0/308f8b432ddca14815f7554889306271.mp3?hdnea=exp=1786710753~acl=/api/1/1/3/0/8/0/308f8b432ddca14815f7554889306271.mp3*~data=user_id=0,application_id=42~hmac=5ffe6ead7eefb2f2127bb4c89465a80d41dc6363146244e2104fc540f775eb82"
      },
      {
        "id": "hit-12",
        "title": "Sinceramente",
        "artist": "Annalisa",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/3/0/0/63070dd14900a365bcb25044dfeb40ee.mp3?hdnea=exp=1786710753~acl=/api/1/1/6/3/0/0/63070dd14900a365bcb25044dfeb40ee.mp3*~data=user_id=0,application_id=42~hmac=960a0cd51e67ec5a24891583e05fb14d82e0a0393548faef74756ca543d4597b"
      },
      {
        "id": "hit-13",
        "title": "I P' ME, TU P' TE",
        "artist": "Geolier",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/2/0/9c2a411fa1a6503318a019e498a53dbb.mp3?hdnea=exp=1786710753~acl=/api/1/1/9/c/2/0/9c2a411fa1a6503318a019e498a53dbb.mp3*~data=user_id=0,application_id=42~hmac=5e59027f88a66677852c0f802738f86655455b43ad762176ddf2859abf17bb96"
      },
      {
        "id": "hit-14",
        "title": "100 Messaggi",
        "artist": "Lazza",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/1/3/0/3133d76188876245b1f264b885ef57ff.mp3?hdnea=exp=1786710753~acl=/api/1/1/3/1/3/0/3133d76188876245b1f264b885ef57ff.mp3*~data=user_id=0,application_id=42~hmac=8fa917b7a206b8bab0b2388df44fa02de1c7b1b8c68e4de6478074641b08f3da"
      },
      {
        "id": "hit-15",
        "title": "Click Boom!",
        "artist": "Rose Villain",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/b/0/2db789a7fd7f5ced94716a7a55b0606d.mp3?hdnea=exp=1786710753~acl=/api/1/1/2/d/b/0/2db789a7fd7f5ced94716a7a55b0606d.mp3*~data=user_id=0,application_id=42~hmac=ff73f70978d56414d037bf4f462cc6db87c4e0cfaee7a2c8c8dd7753be32ef77"
      },
      {
        "id": "hit-16",
        "title": "Come un Tuono",
        "artist": "Rose Villain ft. Guè",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/4/f/0/24f2fadcb64e2c40d03fc30c8762787e.mp3?hdnea=exp=1786710753~acl=/api/1/1/2/4/f/0/24f2fadcb64e2c40d03fc30c8762787e.mp3*~data=user_id=0,application_id=42~hmac=c69149054715798dc4437b144f5a69fc507a099b45934804d3652bf0335f5e60"
      },
      {
        "id": "hit-17",
        "title": "Vai!",
        "artist": "Alfa",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/b/e/0/7be807e257e0cbbe24104214e7372adc.mp3?hdnea=exp=1786710753~acl=/api/1/1/7/b/e/0/7be807e257e0cbbe24104214e7372adc.mp3*~data=user_id=0,application_id=42~hmac=8ffec14baeb9ce13197f9d10e1f5be02d713a252858a5fb7f0e8fdce182553fd"
      },
      {
        "id": "hit-18",
        "title": "Casa Mia",
        "artist": "Ghali",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/0/0/2d084a8bb1aac8eb1a04aef7511c3ed0.mp3?hdnea=exp=1786710753~acl=/api/1/1/2/d/0/0/2d084a8bb1aac8eb1a04aef7511c3ed0.mp3*~data=user_id=0,application_id=42~hmac=6fb1ea185973985a0c924fd563bdec364d7dc3c50385ea022ed2a5c5605580d0"
      },
      {
        "id": "hit-19",
        "title": "Un Ragazzo Una Ragazza",
        "artist": "The Kolors",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/6/0/ee6d4d4c8f87dcab05d4003a8936aed9.mp3?hdnea=exp=1786710753~acl=/api/1/1/e/e/6/0/ee6d4d4c8f87dcab05d4003a8936aed9.mp3*~data=user_id=0,application_id=42~hmac=599373c2e42ab7c5cf578f051ce8330d9ef6dbe7ff2f1df1eb18292ccb2ca68e"
      },
      {
        "id": "hit-20",
        "title": "Paprika",
        "artist": "Ghali",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/f/0/eef7e717d19de32856c0601b2525ae26.mp3?hdnea=exp=1786710753~acl=/api/1/1/e/e/f/0/eef7e717d19de32856c0601b2525ae26.mp3*~data=user_id=0,application_id=42~hmac=1677807f846c8de227a5ddddfb00ab06217bf982c46a48649482c886664969c1"
      },
      {
        "id": "hit-21",
        "title": "Sesso e Samba",
        "artist": "Tony Effe & Gaia",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/2/0/7020ccb4fd22da54611b236c7c88a22a.mp3?hdnea=exp=1786710753~acl=/api/1/1/7/0/2/0/7020ccb4fd22da54611b236c7c88a22a.mp3*~data=user_id=0,application_id=42~hmac=4b1f5c3998c1bb6124621543cf8860ca5c7d274c7e67a0318261e4d467cccdd9"
      },
      {
        "id": "hit-22",
        "title": "30°C",
        "artist": "Anna",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/0/d/0/90db96cb50b245b429fca959df207f1a.mp3?hdnea=exp=1786710754~acl=/api/1/1/9/0/d/0/90db96cb50b245b429fca959df207f1a.mp3*~data=user_id=0,application_id=42~hmac=0a663d92fad23677ee7069c67aefade7eb5b5212b7f1fcdbaa2a84b88969af7c"
      },
      {
        "id": "hit-23",
        "title": "BBE",
        "artist": "Anna ft. Lazza",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/2/5/0/1259b564cf299c0666a444fe5f1a3636.mp3?hdnea=exp=1786710754~acl=/api/1/1/1/2/5/0/1259b564cf299c0666a444fe5f1a3636.mp3*~data=user_id=0,application_id=42~hmac=4147405ab7e8c9000172b02f7ebdbff73822fcdf0bdf192d1d311cd8ef584087"
      },
      {
        "id": "hit-24",
        "title": "Stargazing",
        "artist": "Myles Smith",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/3/b/0/53b080b7cc52b2376bac4e860f748dfe.mp3?hdnea=exp=1786710754~acl=/api/1/1/5/3/b/0/53b080b7cc52b2376bac4e860f748dfe.mp3*~data=user_id=0,application_id=42~hmac=7a74d4c24eab784cfebcb627200387f145098aaf0aedc77edca546f34b7b8de8"
      },
      {
        "id": "hit-25",
        "title": "Too Sweet",
        "artist": "Hozier",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/c/4/0/ac4097bdcb716e55282570ca08c09b58.mp3?hdnea=exp=1786710754~acl=/api/1/1/a/c/4/0/ac4097bdcb716e55282570ca08c09b58.mp3*~data=user_id=0,application_id=42~hmac=0f23fa74bba047fec61582d3521b34170097ce27bf78b0c89b9ddf11e47429b2"
      },
      {
        "id": "hit-26",
        "title": "Greedy",
        "artist": "Tate McRae",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/2/c/0/b2c0972841d7abdb3856b996dc864a8e.mp3?hdnea=exp=1786710754~acl=/api/1/1/b/2/c/0/b2c0972841d7abdb3856b996dc864a8e.mp3*~data=user_id=0,application_id=42~hmac=eff2c90c19692c7feeb8fc3a7bf2eaef90306c445164d9fc563f8524b5d804f6"
      },
      {
        "id": "hit-27",
        "title": "Lose Control",
        "artist": "Teddy Swims",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/a/c/0/bac060c52788568fc01f5a1f5574b148.mp3?hdnea=exp=1786710754~acl=/api/1/1/b/a/c/0/bac060c52788568fc01f5a1f5574b148.mp3*~data=user_id=0,application_id=42~hmac=0417b3a27a9a46803b5f0d42bf3e676848340d3fe2a96520155dfc2f078c26f6"
      },
      {
        "id": "hit-28",
        "title": "Houdini",
        "artist": "Dua Lipa",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/6/7/0/367e45ecbf07a341e248b400f51fc544.mp3?hdnea=exp=1786710754~acl=/api/1/1/3/6/7/0/367e45ecbf07a341e248b400f51fc544.mp3*~data=user_id=0,application_id=42~hmac=34a57724f0b03aeaf8c45c049e967c0d30d9a2b6b0d9ed5e2f00491468bc2337"
      },
      {
        "id": "hit-29",
        "title": "Texas Hold 'Em",
        "artist": "Beyoncé",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/8/0/0885b31006caf52814a00ddfa612e998.mp3?hdnea=exp=1786710754~acl=/api/1/1/0/8/8/0/0885b31006caf52814a00ddfa612e998.mp3*~data=user_id=0,application_id=42~hmac=60c6cbbc2c06e239e345ff11cd439740d8d278b56829707756ae843729103546"
      },
      {
        "id": "hit-30",
        "title": "Mon Amour",
        "artist": "Annalisa",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/3/d/0/43df0b3704594c19119d3cdea750a348.mp3?hdnea=exp=1786710754~acl=/api/1/1/4/3/d/0/43df0b3704594c19119d3cdea750a348.mp3*~data=user_id=0,application_id=42~hmac=a7bf6aed5a64bbcd7eed54e4c7435945bfe267b17c08ca18766830bcb0690641"
      },
      {
        "id": "hit-31",
        "title": "Soldi",
        "artist": "Mahmood",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/07f341e51429ca12d6f9d3008b989985/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/d/a/0/eda502d2b3dde52adb4e7707f17cb1bf.mp3?hdnea=exp=1788639421~acl=/api/1/1/e/d/a/0/eda502d2b3dde52adb4e7707f17cb1bf.mp3*~data=user_id=0,application_id=42~hmac=8c8d8754de067beaf2a818c959ae1fbb8c7cd7e188d6a952dfa791e8ec694e2b"
      },
      {
        "id": "hit-32",
        "title": "la noia",
        "artist": "Angelina Mango",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2eaa4b21f8eda41a2c354f526634b71f/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/5/4/0/d54215f33f60ca44fc059faa51163ae6.mp3?hdnea=exp=1788639421~acl=/api/1/1/d/5/4/0/d54215f33f60ca44fc059faa51163ae6.mp3*~data=user_id=0,application_id=42~hmac=752ec646df05f8ac05078f21c31fd6dd1919ad7cef28a5f7fe12d90e6e014721"
      },
      {
        "id": "hit-33",
        "title": "che t'o dico a fa'",
        "artist": "Angelina Mango",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4cc85fae523e93c0ed3a8f1177946409/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/a/0/daad826283b7dd42d8e44ece80e32e8b.mp3?hdnea=exp=1788639422~acl=/api/1/1/d/a/a/0/daad826283b7dd42d8e44ece80e32e8b.mp3*~data=user_id=0,application_id=42~hmac=a0f80fefe9c7ba906b7492f0cbe3c6ca66ef89c50c0ae840d9c9f9c59ab4408e"
      },
      {
        "id": "hit-34",
        "title": "KARMA",
        "artist": "The Kolors",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5076231c5b7f43abe9293f33076b6179/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/d/1/0/ed1c15365d35f3083f0c7fcbb7a4faff.mp3?hdnea=exp=1788639422~acl=/api/1/1/e/d/1/0/ed1c15365d35f3083f0c7fcbb7a4faff.mp3*~data=user_id=0,application_id=42~hmac=48c1518f0b2d6f02e064687f00675043fbb1633df41ff3f6dfe1865fc78d8d11"
      },
      {
        "id": "hit-35",
        "title": "APNEA",
        "artist": "Emma",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9e14afbe75b74a3c0e0efed09e4b7231/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/5/f/0/25fec8e0ec20aac14645a4d2131d69ae.mp3?hdnea=exp=1788639422~acl=/api/1/1/2/5/f/0/25fec8e0ec20aac14645a4d2131d69ae.mp3*~data=user_id=0,application_id=42~hmac=080d6240ad35a25519063d96561ad09e34b86efae0bdf1af4011989ec76a5449"
      },
      {
        "id": "hit-36",
        "title": "TAXI SULLA LUNA",
        "artist": "Tony Effe",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ece1c71b6c7d7dffabcfb175e81c34f5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/8/6/0/386df5bd7f9973dea74150489dea54b2.mp3?hdnea=exp=1788639423~acl=/api/1/1/3/8/6/0/386df5bd7f9973dea74150489dea54b2.mp3*~data=user_id=0,application_id=42~hmac=fcd1c64dd7e97ee81cba87bb4a75565ef231f4c05661a6382b898339ec32604c"
      },
      {
        "id": "hit-37",
        "title": "DIAMANTI GREZZI",
        "artist": "Clara",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e194f230fa61232cbf9a3d82fcc97ba2/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/7/a/0/d7a77d112eeed60bfee22e7f7a23d6f6.mp3?hdnea=exp=1788639423~acl=/api/1/1/d/7/a/0/d7a77d112eeed60bfee22e7f7a23d6f6.mp3*~data=user_id=0,application_id=42~hmac=fee857edd817f48ba973f8faf0ccdf403d80fca7592323e8c276f66b6e38b889"
      },
      {
        "id": "hit-38",
        "title": "Ma non tutta la vita",
        "artist": "Ricchi E Poveri",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5964c8e95f100c3a4d796e65d0fde6e6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/8/5/0/285ab18448025d2a9f21c4e1c827051a.mp3?hdnea=exp=1788639423~acl=/api/1/1/2/8/5/0/285ab18448025d2a9f21c4e1c827051a.mp3*~data=user_id=0,application_id=42~hmac=9b72e885db2161ab3fac137244173f450830c16f2e5aab5d08d647700a2b2bda"
      },
      {
        "id": "hit-39",
        "title": "Ti muovi",
        "artist": "Diodato",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ba81e6bd3725f6fe3451fd7cdb2b5224/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/a/0/21a76c31b757f54d012852ac906a4e75.mp3?hdnea=exp=1788639424~acl=/api/1/1/2/1/a/0/21a76c31b757f54d012852ac906a4e75.mp3*~data=user_id=0,application_id=42~hmac=fd2e79a1b4ed62673c0c8030ab599582ecf3d10c443fdad8589fe5184af8c023"
      },
      {
        "id": "hit-40",
        "title": "SUPEREROI",
        "artist": "Mr.Rain",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cd128545756a8edecc82bcedbb1b33c5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/7/6/0/f76f14d30a126fff6bf22d27252878c2.mp3?hdnea=exp=1788639424~acl=/api/1/1/f/7/6/0/f76f14d30a126fff6bf22d27252878c2.mp3*~data=user_id=0,application_id=42~hmac=62facafdd1a6cedd233db1f7f85f6b775872ad6da9dd854a20f9c2593bb79732"
      },
      {
        "id": "hit-41",
        "title": "PANICO",
        "artist": "Lazza",
        "year": 2022,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c748c99417202bc8c323e705269849d9/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/a/7/0/9a7862c1ab3cbd7af6d60319c441a834.mp3?hdnea=exp=1788639424~acl=/api/1/1/9/a/7/0/9a7862c1ab3cbd7af6d60319c441a834.mp3*~data=user_id=0,application_id=42~hmac=feec03b21ef796a7af4be69dd4485d0e4e182fbb9f0809f8bcaf92963c81d82b"
      },
      {
        "id": "hit-42",
        "title": "MIU MIU",
        "artist": "Tony Effe",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/92f5b8c7ab047e8af5b9b413dd21cfef/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/e/9/0/1e936f5811fb7b2a9963f74f9d8afba5.mp3?hdnea=exp=1788639425~acl=/api/1/1/1/e/9/0/1e936f5811fb7b2a9963f74f9d8afba5.mp3*~data=user_id=0,application_id=42~hmac=ec8bb128cca13f4807a453f6023741362f107f712ec29148412b320d1ace7667"
      },
      {
        "id": "hit-43",
        "title": "SEXY SHOP",
        "artist": "Fedez",
        "year": 2024,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/122dd14199459b55322a54ccf5e96d46/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/8/5/0/685aad87bf070e243f60b2cfd3e137ca.mp3?hdnea=exp=1788639425~acl=/api/1/1/6/8/5/0/685aad87bf070e243f60b2cfd3e137ca.mp3*~data=user_id=0,application_id=42~hmac=7d3902b235c5202af9292b5289d3602aa23fa6d290285c8b6ce1ffc38c9121e3"
      },
      {
        "id": "hit-44",
        "title": "Taste",
        "artist": "Sabrina Carpenter",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0fd6e3b346b959a8781ccfa89b63607a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/1/3/0/813c2b264c2898a448de65eb10e2e1a2.mp3?hdnea=exp=1788639425~acl=/api/1/1/8/1/3/0/813c2b264c2898a448de65eb10e2e1a2.mp3*~data=user_id=0,application_id=42~hmac=67e8903e84c0fb3084a25b0cbf13b3ed93f9ee0462458f7faca06119428310ff"
      },
      {
        "id": "hit-45",
        "title": "What Was I Made For? [From The Motion Picture \"Barbie\"]",
        "artist": "Billie Eilish",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2562b8d68b75635bb2d4b92dc7ed9ab5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/0/c/0/80ce163046226da27191c2abf5f5517c.mp3?hdnea=exp=1788639426~acl=/api/1/1/8/0/c/0/80ce163046226da27191c2abf5f5517c.mp3*~data=user_id=0,application_id=42~hmac=375c793de18a0cab6b918cb1348e8eb684275ca2664264c9939177c23c92f351"
      },
      {
        "id": "hit-46",
        "title": "Training Season",
        "artist": "Dua Lipa",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/512ac88bf6636663303b73c3860d915b/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/5/a/0/95abdfed4742597bf534f78a5af598c9.mp3?hdnea=exp=1788639426~acl=/api/1/1/9/5/a/0/95abdfed4742597bf534f78a5af598c9.mp3*~data=user_id=0,application_id=42~hmac=b92eb665a8df89cca4e7b11ee2a4fb57a7f88ba93434cd22c812287c22c6ab25"
      },
      {
        "id": "hit-47",
        "title": "I Can Do It With a Broken Heart",
        "artist": "Taylor Swift",
        "year": 2024,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/73bee9f48378d4c95139e693fd997569/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/e/7/0/de7e2eb98077ba265169e55aedf096ec.mp3?hdnea=exp=1788639426~acl=/api/1/1/d/e/7/0/de7e2eb98077ba265169e55aedf096ec.mp3*~data=user_id=0,application_id=42~hmac=7e72acbfc6b25a1c314744777a821cdfdba6ca0ddce8cdae7264fc4dc926b108"
      },
      {
        "id": "hit-48",
        "title": "Red Wine Supernova",
        "artist": "Chappell Roan",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/71486ce8b24f612c4887efa0f79a9f66/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/f/4/0/df45280c339d3a6b001cfb328e50acad.mp3?hdnea=exp=1788639427~acl=/api/1/1/d/f/4/0/df45280c339d3a6b001cfb328e50acad.mp3*~data=user_id=0,application_id=42~hmac=2e2022f260f71e3e0e6f38e1c44ed0602589b24009adbdcae493bd65ce1fc5f5"
      },
      {
        "id": "hit-49",
        "title": "Chemical",
        "artist": "Post Malone",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0fd4fd4af4831835ab92a6f49ee35311/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/4/0/9948a65ac4363d00847d07733289c622.mp3?hdnea=exp=1788639427~acl=/api/1/1/9/9/4/0/9948a65ac4363d00847d07733289c622.mp3*~data=user_id=0,application_id=42~hmac=20e4731bb26a1a1b58e478dc65ba106137895b305422a00269865ca210a9c45a"
      },
      {
        "id": "hit-50",
        "title": "vampire",
        "artist": "Olivia Rodrigo",
        "year": 2023,
        "genre": "Pop",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4bb79214365c0049e031f5e2caae4752/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/b/2/0/7b224890fd56400faddeadf5bcdb748c.mp3?hdnea=exp=1788639427~acl=/api/1/1/7/b/2/0/7b224890fd56400faddeadf5bcdb748c.mp3*~data=user_id=0,application_id=42~hmac=d13e4b4c020c7dcddd0565d06425e92e7959b2152e2962769a66e5f414bc078c"
      }
    ]
  },
  {
    "id": "anime-ost",
    "title": "Anime OST & Sigle Cult",
    "category": "artists",
    "description": "Dragon Ball, Evangelion, Attack on Titan, Naruto, Demon Slayer, One Piece, Giorgio Vanni e Cristina D'Avena.",
    "badge": "Omaggio PRO 👑",
    "isProGift": true,
    "unlockRequirement": {
      "minDailyStreak": 60,
      "deathParadeRecord": 25,
      "label": "60 gg Streak 🔥 o 25 Death Parade 💀 (Gratis con PRO 👑)"
    },
    "cover": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "tracks": [
      {
        "id": "ani-1",
        "title": "A Cruel Angel's Thesis",
        "artist": "Yoko Takahashi",
        "year": 1995,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/b/9/0/7b96f6c1f3fb4a61a18af47648d94dee.mp3?hdnea=exp=1786710754~acl=/api/1/1/7/b/9/0/7b96f6c1f3fb4a61a18af47648d94dee.mp3*~data=user_id=0,application_id=42~hmac=188e80356ad5397cefddb90a03baf99020853647bd9e5c7db96e61f815a1dfd3"
      },
      {
        "id": "ani-2",
        "title": "Guren no Yumiya",
        "artist": "Linked Horizon",
        "year": 2013,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/1/e/0/d1ee31795bbfe384561e743d6fdfb227.mp3?hdnea=exp=1786710754~acl=/api/1/1/d/1/e/0/d1ee31795bbfe384561e743d6fdfb227.mp3*~data=user_id=0,application_id=42~hmac=da6e543b515fb95449c8bee68b97e98c7826f9f0ffe52ccd2867985a33f8a680"
      },
      {
        "id": "ani-3",
        "title": "Shinzo wo Sasageyo!",
        "artist": "Linked Horizon",
        "year": 2017,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/d/8/0/5d8c7649f595e6abf978ab2b86e3fabc.mp3?hdnea=exp=1786710754~acl=/api/1/1/5/d/8/0/5d8c7649f595e6abf978ab2b86e3fabc.mp3*~data=user_id=0,application_id=42~hmac=3205abc1f2db47307ca13c495ba23fd772a29b96851057f13ad9e43063729468"
      },
      {
        "id": "ani-4",
        "title": "Gurenge",
        "artist": "LiSA",
        "year": 2019,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/2/5/0/c25bf0b2387c039da059cbb982b1784d.mp3?hdnea=exp=1786710754~acl=/api/1/1/c/2/5/0/c25bf0b2387c039da059cbb982b1784d.mp3*~data=user_id=0,application_id=42~hmac=72027388500f3568eee9e87796eecb8282f14c44eaaab71ccbad132c0bbb2065"
      },
      {
        "id": "ani-5",
        "title": "Silhouette",
        "artist": "KANA-BOON",
        "year": 2014,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/3/d/0/53d49e5c17c9d9b0b0640cc95ed8a1da.mp3?hdnea=exp=1786710754~acl=/api/1/1/5/3/d/0/53d49e5c17c9d9b0b0640cc95ed8a1da.mp3*~data=user_id=0,application_id=42~hmac=4de0aeaa555c19e1c0a79c4c6aa2ed36c20f8eb95e0a71ea70ac15beaec45b03"
      },
      {
        "id": "ani-6",
        "title": "Blue Bird",
        "artist": "Ikimonogakari",
        "year": 2008,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/d/0/0/3d0039970c329b9a16ffc1240a3be0ab.mp3?hdnea=exp=1786710754~acl=/api/1/1/3/d/0/0/3d0039970c329b9a16ffc1240a3be0ab.mp3*~data=user_id=0,application_id=42~hmac=30c56356686fbfc04b4435528271c807fdd95b6b708aefdeebe16e7e038baa48"
      },
      {
        "id": "ani-7",
        "title": "Unravel",
        "artist": "TK from Ling Tosite Sigure",
        "year": 2014,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/7/0/a97dfb5909dac71eb634dc1d29972f84.mp3?hdnea=exp=1786710754~acl=/api/1/1/a/9/7/0/a97dfb5909dac71eb634dc1d29972f84.mp3*~data=user_id=0,application_id=42~hmac=ad824c8142a9b2ea63ab2c42309fe8f6f56e923a5ead2aed0aa5ba62df3646dd"
      },
      {
        "id": "ani-8",
        "title": "We Are!",
        "artist": "Hiroshi Kitadani",
        "year": 1999,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/0/0/640c9d4554d5b2e66aeb2054b9e022b3.mp3?hdnea=exp=1786710754~acl=/api/1/1/6/4/0/0/640c9d4554d5b2e66aeb2054b9e022b3.mp3*~data=user_id=0,application_id=42~hmac=b186e0190ece18d494603cf92c03f45e0cb0effc5149c57e945aced4ce0caf57"
      },
      {
        "id": "ani-9",
        "title": "Cha-La Head-Cha-La",
        "artist": "Hironobu Kageyama",
        "year": 1989,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/4/0/d445a5bfadff23695327c0e90238a3f1.mp3?hdnea=exp=1786710754~acl=/api/1/1/d/4/4/0/d445a5bfadff23695327c0e90238a3f1.mp3*~data=user_id=0,application_id=42~hmac=f46d16221cda23b1395ffbb3983282d6e8886f1e87b0df98bacc16e26ef374dd"
      },
      {
        "id": "ani-10",
        "title": "Dan Dan Kokoro Hikareteku",
        "artist": "Field of View",
        "year": 1996,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/8/8/0/0886f9f278bf73e2ece0e171fd066fca.mp3?hdnea=exp=1786710754~acl=/api/1/1/0/8/8/0/0886f9f278bf73e2ece0e171fd066fca.mp3*~data=user_id=0,application_id=42~hmac=8a6ef4582b3574db2c27b9f64a9d10d2f84a7ec76b7e478f27dfbe4d79a0ab00"
      },
      {
        "id": "ani-11",
        "title": "Kaikai Kitan",
        "artist": "Eve",
        "year": 2020,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/6/c/0/96c06b7cb864e0ec0db6e9bd56329842.mp3?hdnea=exp=1786710755~acl=/api/1/1/9/6/c/0/96c06b7cb864e0ec0db6e9bd56329842.mp3*~data=user_id=0,application_id=42~hmac=e83d4d5afa39ec4c39599e838dfe68feab64b0f92d514b7d5aa23aefc51e5880"
      },
      {
        "id": "ani-12",
        "title": "The Rumbling",
        "artist": "SiM",
        "year": 2022,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/f/6/0/2f62ae160baf77abe3a2f9b22ce5305d.mp3?hdnea=exp=1786710755~acl=/api/1/1/2/f/6/0/2f62ae160baf77abe3a2f9b22ce5305d.mp3*~data=user_id=0,application_id=42~hmac=4a7000f8706e5ebb140ebcbb3d3119e9f8dc80c145760b16d2a708e5d4de67ef"
      },
      {
        "id": "ani-13",
        "title": "Again",
        "artist": "YUI",
        "year": 2009,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/0/8/0/0088db7ca55f96d4e9c9cc4dfab3d161.mp3?hdnea=exp=1786710755~acl=/api/1/1/0/0/8/0/0088db7ca55f96d4e9c9cc4dfab3d161.mp3*~data=user_id=0,application_id=42~hmac=3bbf26a4f9c69de55d0908e32effa213d019a4af4598e937899872e9aa45195f"
      },
      {
        "id": "ani-14",
        "title": "Tank!",
        "artist": "SEATBELTS",
        "year": 1998,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/0/2/0/e029f8b0a06155970dd9bd4cac39c70f.mp3?hdnea=exp=1786710755~acl=/api/1/1/e/0/2/0/e029f8b0a06155970dd9bd4cac39c70f.mp3*~data=user_id=0,application_id=42~hmac=1a0c438b25cf9a52a5ba3d7fcfc65f0138b4e05b3604c34e0fefaf0d4da52bf1"
      },
      {
        "id": "ani-15",
        "title": "The World",
        "artist": "Nightmare",
        "year": 2006,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/4/8/0/a48d87a74d2b47b2e9fc49d1ac29ba8a.mp3?hdnea=exp=1786710755~acl=/api/1/1/a/4/8/0/a48d87a74d2b47b2e9fc49d1ac29ba8a.mp3*~data=user_id=0,application_id=42~hmac=87b5b85f0a788da36a9eab44a02e32503b1e0288c1f81f5186482548f686ba70"
      },
      {
        "id": "ani-16",
        "title": "What's Up, People?!",
        "artist": "Maximum the Hormone",
        "year": 2007,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/1/6/0/616a2bd520b126c22326820967007ff5.mp3?hdnea=exp=1786710755~acl=/api/1/1/6/1/6/0/616a2bd520b126c22326820967007ff5.mp3*~data=user_id=0,application_id=42~hmac=e74198f3f2a296798555afa2a5219a0e30c029fe9e7b3e3e37e0bb93615febe3"
      },
      {
        "id": "ani-17",
        "title": "Kick Back",
        "artist": "Kenshi Yonezu",
        "year": 2022,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/4/5/0/8458385a640b0f2eacc512d61ed3a753.mp3?hdnea=exp=1786710755~acl=/api/1/1/8/4/5/0/8458385a640b0f2eacc512d61ed3a753.mp3*~data=user_id=0,application_id=42~hmac=2bab3a48b9302154653369d250e3daef9d38c8c4c532a071118ce651e57533ab"
      },
      {
        "id": "ani-18",
        "title": "Idol",
        "artist": "YOASOBI",
        "year": 2023,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/4/2/0/b42b6697242ccde70d91c69e6ed6f454.mp3?hdnea=exp=1786710755~acl=/api/1/1/b/4/2/0/b42b6697242ccde70d91c69e6ed6f454.mp3*~data=user_id=0,application_id=42~hmac=ec085318585cb9fb2b4b24793950562217018d95350279b11fdd85969249e28a"
      },
      {
        "id": "ani-19",
        "title": "Specialz",
        "artist": "King Gnu",
        "year": 2023,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/c/0/2dc916d85200d0824ca2e47d368eabc3.mp3?hdnea=exp=1786710755~acl=/api/1/1/2/d/c/0/2dc916d85200d0824ca2e47d368eabc3.mp3*~data=user_id=0,application_id=42~hmac=b071362dc4eb44abca57786b5a4e6e6200a02e2c6bf3d8e49bf15236b483b9b0"
      },
      {
        "id": "ani-20",
        "title": "Bling-Bang-Bang-Born",
        "artist": "Creepy Nuts",
        "year": 2024,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/c/f/0/8cfa769660977c679e49d7567c6fc768.mp3?hdnea=exp=1786710755~acl=/api/1/1/8/c/f/0/8cfa769660977c679e49d7567c6fc768.mp3*~data=user_id=0,application_id=42~hmac=c9b61f610abd8946fc6f65678f0aaa190728e28137309718047139cf9ed8cdb3"
      },
      {
        "id": "ani-21",
        "title": "What's My Destiny Dragon Ball",
        "artist": "Giorgio Vanni",
        "year": 2000,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/f/2/0/5f2fff0564c04940615675ca9182c688.mp3?hdnea=exp=1786710755~acl=/api/1/1/5/f/2/0/5f2fff0564c04940615675ca9182c688.mp3*~data=user_id=0,application_id=42~hmac=550440a79d2a67738421304685ed03fea6df6159a78916e5814ca5831c78c757"
      },
      {
        "id": "ani-22",
        "title": "Dragon Ball GT",
        "artist": "Giorgio Vanni",
        "year": 2001,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/6/e/0/06ee2fa73eb8ca001c24e3a465774454.mp3?hdnea=exp=1786710755~acl=/api/1/1/0/6/e/0/06ee2fa73eb8ca001c24e3a465774454.mp3*~data=user_id=0,application_id=42~hmac=1fd32132d94c2f11f8f4a2a09b1053aa7e8bbd049c8c59855fca5e29e468eea0"
      },
      {
        "id": "ani-23",
        "title": "Pokemon Theme",
        "artist": "Jason Paige",
        "year": 1998,
        "genre": "Soundtrack",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/d/0/f6d199df59e45047b14cb046833eddc0.mp3?hdnea=exp=1786710755~acl=/api/1/1/f/6/d/0/f6d199df59e45047b14cb046833eddc0.mp3*~data=user_id=0,application_id=42~hmac=0a8d59c18f9eb861da0481ba38236745a8b5ff121a1b0bec744ac82a3f27999d"
      },
      {
        "id": "ani-24",
        "title": "Pokemon: Oltre i Cieli dell'Avventura",
        "artist": "Giorgio Vanni & Cristina D'Avena",
        "year": 2000,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/f/0/17fddee39c9ca812869fccd93f0f000d.mp3?hdnea=exp=1786710755~acl=/api/1/1/1/7/f/0/17fddee39c9ca812869fccd93f0f000d.mp3*~data=user_id=0,application_id=42~hmac=3439d1bf4dca69cecad9926163a323ea97599be36b3de16074d89ee60bb117c3"
      },
      {
        "id": "ani-25",
        "title": "Detective Conan",
        "artist": "Giorgio Vanni",
        "year": 2002,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/b/4/0/db47d45596924dd2f3780784f71a43f1.mp3?hdnea=exp=1786710755~acl=/api/1/1/d/b/4/0/db47d45596924dd2f3780784f71a43f1.mp3*~data=user_id=0,application_id=42~hmac=48bfd002f65e0e89639f31fd801b0eb7daab04686338e384e36dacfe0e7e68af"
      },
      {
        "id": "ani-26",
        "title": "All'Arrembaggio! (One Piece)",
        "artist": "Cristina D'Avena & Giorgio Vanni",
        "year": 2001,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d8ef167f70578f52bcea58c2b3e01898/500x500-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/b/0/c7b0b8c6598a876a1bbbbcd2594064e2.mp3?hdnea=exp=1786710914~acl=/api/1/1/c/7/b/0/c7b0b8c6598a876a1bbbbcd2594064e2.mp3*~data=user_id=0,application_id=42~hmac=07a2c31898fb634a374e44be08c9aa4ff2c2d193daa5170edb95aa1c296fbcbb"
      },
      {
        "id": "ani-27",
        "title": "Yu-Gi-Oh!",
        "artist": "Giorgio Vanni",
        "year": 2003,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/2/0/d425e3312c429ba1be9b3a7323f55890.mp3?hdnea=exp=1786710756~acl=/api/1/1/d/4/2/0/d425e3312c429ba1be9b3a7323f55890.mp3*~data=user_id=0,application_id=42~hmac=57afa801037831c591a52fec00df136ddf504727b393196994466c9c3ca48baf"
      },
      {
        "id": "ani-28",
        "title": "Sailor Moon",
        "artist": "Cristina D'Avena",
        "year": 1995,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/1/c/0/01ca0e1acff58bce3568ff60028ce15c.mp3?hdnea=exp=1786710756~acl=/api/1/1/0/1/c/0/01ca0e1acff58bce3568ff60028ce15c.mp3*~data=user_id=0,application_id=42~hmac=8b70e86dbed8af3878c5c8de946779c3c3af176af66e66d061531af01078e381"
      },
      {
        "id": "ani-29",
        "title": "Kiss Me Licia",
        "artist": "Cristina D'Avena",
        "year": 1985,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/0/c/0/20cc25e497d6ad4b54bbff358ba5b0cd.mp3?hdnea=exp=1786710756~acl=/api/1/1/2/0/c/0/20cc25e497d6ad4b54bbff358ba5b0cd.mp3*~data=user_id=0,application_id=42~hmac=3c380c27386678cd8638e85b7db202a98773a260d21efd7a49678ae9c1f6ec00"
      },
      {
        "id": "ani-30",
        "title": "Occhi di Gatto",
        "artist": "Cristina D'Avena",
        "year": 1985,
        "genre": "Italian",
        "artworkUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/8/2/0/982a4692b32a1f12da19acc4843a5755.mp3?hdnea=exp=1786710756~acl=/api/1/1/9/8/2/0/982a4692b32a1f12da19acc4843a5755.mp3*~data=user_id=0,application_id=42~hmac=f029aeae8019980b7123bc200e018f07b4b08051588658c9650f1a67947fa246"
      },
      {
        "id": "ani-31",
        "title": "Mila e Shiro due cuori nella pallavolo",
        "artist": "Cristina D'Avena",
        "year": 2018,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/df748ba163af076ca1d033faf9571784/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/9/e/0/49ec7f6830d3474aed54188547f4ed1d.mp3?hdnea=exp=1788639428~acl=/api/1/1/4/9/e/0/49ec7f6830d3474aed54188547f4ed1d.mp3*~data=user_id=0,application_id=42~hmac=454fc2a6081f12a2baf3c0881547f288451ce82ca07579479bef4a9ea68db3ff"
      },
      {
        "id": "ani-32",
        "title": "Holly e Benji 2 fuoriclasse",
        "artist": "Cristina D'Avena",
        "year": 2021,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5a17c0a9e23fa16d4061ff9b14a31922/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/6/f/0/56f464ac6bb013cb26ae3e1ae1f0293e.mp3?hdnea=exp=1788639428~acl=/api/1/1/5/6/f/0/56f464ac6bb013cb26ae3e1ae1f0293e.mp3*~data=user_id=0,application_id=42~hmac=a49faf4d5dbfe2a7a5232fcb4d9085551ecabb6d2b730c1334a39ffa2ffc25c1"
      },
      {
        "id": "ani-33",
        "title": "Pollon, Pollon combinaguai (feat. J-AX)",
        "artist": "Cristina D'Avena",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/33aeb854830461422f28ec4c780c5b73/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/3/c/0/03c73622b3e2297e9ef190221088d6c9.mp3?hdnea=exp=1788639429~acl=/api/1/1/0/3/c/0/03c73622b3e2297e9ef190221088d6c9.mp3*~data=user_id=0,application_id=42~hmac=e341c9f4f7672f223a0081ef34296666a0d4a336eda874eccd2cc63d41178c53"
      },
      {
        "id": "ani-34",
        "title": "Piccoli problemi di cuore",
        "artist": "Cristina D'Avena",
        "year": 2019,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b6917f102c35d61d4edb959180dc2855/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/8/3/0/283d92f6c2a78c31905d6d5173f611f1.mp3?hdnea=exp=1788639429~acl=/api/1/1/2/8/3/0/283d92f6c2a78c31905d6d5173f611f1.mp3*~data=user_id=0,application_id=42~hmac=5fc90368b12d783590e625608d5fbb5518ad8cfb41bbe02116d9e2276c2bbaec"
      },
      {
        "id": "ani-35",
        "title": "È quasi magia, Johnny! (feat. La Rua)",
        "artist": "Cristina D'Avena",
        "year": 2017,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/33aeb854830461422f28ec4c780c5b73/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/e/3/0/5e34f0028e4ad5735e9f66f7c61707d4.mp3?hdnea=exp=1788639430~acl=/api/1/1/5/e/3/0/5e34f0028e4ad5735e9f66f7c61707d4.mp3*~data=user_id=0,application_id=42~hmac=8846c3358b25e887bee1b5a1ba22e91fd246f6311ff788cd7619b9fbad0deeb2"
      },
      {
        "id": "ani-36",
        "title": "Magica Doremì (feat. Lorella Cuccarini)",
        "artist": "Cristina D'Avena",
        "year": 2022,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0f722d7c8314d8d15042f2a32bc4015c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/4/7/0/447c317cc38bb91c33edc1bf78faad61.mp3?hdnea=exp=1788639430~acl=/api/1/1/4/4/7/0/447c317cc38bb91c33edc1bf78faad61.mp3*~data=user_id=0,application_id=42~hmac=1837d366ec1ee1a4453c2946555a4064e359e5b66467c8b7c8f9face13a674d2"
      },
      {
        "id": "ani-37",
        "title": "I Puffi sanno",
        "artist": "Cristina D'Avena",
        "year": 2014,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d5be7492f8c98dd269f116d88c703dc8/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/b/0/0/4b01830dc89bc38ae5dd55b191b7f269.mp3?hdnea=exp=1788639430~acl=/api/1/1/4/b/0/0/4b01830dc89bc38ae5dd55b191b7f269.mp3*~data=user_id=0,application_id=42~hmac=cbab0c0a8c590447763d1d5153554ccc9adacd5891562a22c2840858bab69dd5"
      },
      {
        "id": "ani-38",
        "title": "Il Grande Mazinger",
        "artist": "Superobots",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/26c74e10143cfba7ab158f2c7cba5e03/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/a/6/0/ca60d7aa786059297923217e9ae7c691.mp3?hdnea=exp=1788639431~acl=/api/1/1/c/a/6/0/ca60d7aa786059297923217e9ae7c691.mp3*~data=user_id=0,application_id=42~hmac=76f015c6c6c9651acc052dd5e0ec7c485de73ea55250c5268fc84ac52663e1fc"
      },
      {
        "id": "ani-39",
        "title": "Ufo Robot",
        "artist": "Actarus",
        "year": 2011,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/876057bb2ea34cd1fe2642942746724a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/7/0/ee7fced6132376812597512dabbd9217.mp3?hdnea=exp=1788639432~acl=/api/1/1/e/e/7/0/ee7fced6132376812597512dabbd9217.mp3*~data=user_id=0,application_id=42~hmac=f304b7104a0541a6ee8ea463c6c67a65c95392270961c71397fb90c43a65bd7e"
      },
      {
        "id": "ani-40",
        "title": "Shooting Stars",
        "artist": "Arcturus",
        "year": 2022,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f193081e0e26960396125fc37346381a/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/0/7/0/907964682abbcf6b728fed25b7f41f25.mp3?hdnea=exp=1788639433~acl=/api/1/1/9/0/7/0/907964682abbcf6b728fed25b7f41f25.mp3*~data=user_id=0,application_id=42~hmac=a607fe7550738777fb9b5ad7ed9f0e979019fdb99542c2343025b6398482bd73"
      },
      {
        "id": "ani-41",
        "title": "Lady Oscar",
        "artist": "I Cavalieri Del Re",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/26c74e10143cfba7ab158f2c7cba5e03/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/2/e/0/d2e361ee8ca7eca096b588c13d35a0b2.mp3?hdnea=exp=1788639433~acl=/api/1/1/d/2/e/0/d2e361ee8ca7eca096b588c13d35a0b2.mp3*~data=user_id=0,application_id=42~hmac=2d6299d8db71b5c8f02493cb943c4f0d89349e2c52f6f7371e53915c7922e2ff"
      },
      {
        "id": "ani-42",
        "title": "L'uomo tigre [feat. I cavalieri del Re]",
        "artist": "La Mente di Tetsuya",
        "year": 2006,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/515bb612d327f18d6f8e188d565025fa/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/7/1/0/671b764dd9b0b0a7bef16d2d29104bce.mp3?hdnea=exp=1788639433~acl=/api/1/1/6/7/1/0/671b764dd9b0b0a7bef16d2d29104bce.mp3*~data=user_id=0,application_id=42~hmac=c8732c5f8061e23886bb5ccc646c8d9797711d7eaad4615aff1256be7f53d3b9"
      },
      {
        "id": "ani-43",
        "title": "Yattaman",
        "artist": "I Cavalieri Del Re",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/26c74e10143cfba7ab158f2c7cba5e03/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/3/c/0/43cf896b5b7c836605e31e85e8f93055.mp3?hdnea=exp=1788639434~acl=/api/1/1/4/3/c/0/43cf896b5b7c836605e31e85e8f93055.mp3*~data=user_id=0,application_id=42~hmac=bb2f771e2edacd91ddf1af0c39149743b0ff0e7113b4e04c3b8a39cb36b82b5a"
      },
      {
        "id": "ani-44",
        "title": "Lupin l'incorreggibile Lupin",
        "artist": "Enzo Draghi",
        "year": 2004,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/75ebb5701c7e71122f5c73bb187b7245/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/f/d/0/6fd5a88187feedb783ef43ffe2add596.mp3?hdnea=exp=1788639435~acl=/api/1/1/6/f/d/0/6fd5a88187feedb783ef43ffe2add596.mp3*~data=user_id=0,application_id=42~hmac=f771cd54d0626ab040249e5ccad153946dc89f8fa54b71c772b9888b92d0364b"
      },
      {
        "id": "ani-45",
        "title": "Ken il guerriero",
        "artist": "Spectra",
        "year": 2023,
        "genre": "Italian",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/26c74e10143cfba7ab158f2c7cba5e03/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/6/0/da6f26f3a5922f5ecfb60c328f39c0d7.mp3?hdnea=exp=1788639435~acl=/api/1/1/d/a/6/0/da6f26f3a5922f5ecfb60c328f39c0d7.mp3*~data=user_id=0,application_id=42~hmac=eacfebff2275ce2dd410cdd7cc6efc0106f19856ffed0e29a24369e5008433b5"
      },
      {
        "id": "ani-46",
        "title": "Haruka Kanata",
        "artist": "ASIAN KUNG-FU GENERATION",
        "year": 2003,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d47be963feec05c26ec419a075aedfce/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/e/3/0/1e398e56a4b723f657f81acb706c85db.mp3?hdnea=exp=1788639435~acl=/api/1/1/1/e/3/0/1e398e56a4b723f657f81acb706c85db.mp3*~data=user_id=0,application_id=42~hmac=b39a7888a224a4c743cce7eaa4dbb1bc72d3a25b304f24ac401d05c850ed051e"
      },
      {
        "id": "ani-47",
        "title": "Go!!!",
        "artist": "FLOW",
        "year": 2012,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3d16dc3a1f030e0303c8f1d965012e3c/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/2/c/0/92c991b489bd8981392547ffccf2f92b.mp3?hdnea=exp=1788639436~acl=/api/1/1/9/2/c/0/92c991b489bd8981392547ffccf2f92b.mp3*~data=user_id=0,application_id=42~hmac=a4c0f4e839d0690d0cfe76f55fe96127b1941084f065b783c345ef064185a49a"
      },
      {
        "id": "ani-48",
        "title": "homura",
        "artist": "LiSA",
        "year": 2020,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cac21ed7442ee24c4f434ca873b855b6/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/2/d/0/02d8b9a373609e547e109055ed2d0613.mp3?hdnea=exp=1788639436~acl=/api/1/1/0/2/d/0/02d8b9a373609e547e109055ed2d0613.mp3*~data=user_id=0,application_id=42~hmac=7ffa15e0b3045549b95e8762c3e88917960ef5660f348564af5213c614b3b321"
      },
      {
        "id": "ani-49",
        "title": "Peace Sign",
        "artist": "Kenshi Yonezu",
        "year": 2017,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/43486e7f1e15648bfe233f5f94baf5f0/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/e/5/0/2e587bf3b7f20b39112a64ca802cbe80.mp3?hdnea=exp=1788639436~acl=/api/1/1/2/e/5/0/2e587bf3b7f20b39112a64ca802cbe80.mp3*~data=user_id=0,application_id=42~hmac=817a6829ccdd771bd1fdaa2a7a89893ca5c78df9e2fdd0b20a2c9f5352e0b1f6"
      },
      {
        "id": "ani-50",
        "title": "Zetsubou Billy",
        "artist": "Maximum The Hormone",
        "year": 2007,
        "genre": "Soundtrack",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ff78706136050d75f4d60809420e25e5/1000x1000-000000-80-0-0.jpg",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/4/0/0/24024004b1efae6fc6e3b8e0c79c93bb.mp3?hdnea=exp=1788639437~acl=/api/1/1/2/4/0/0/24024004b1efae6fc6e3b8e0c79c93bb.mp3*~data=user_id=0,application_id=42~hmac=9069d76b0c7468ef9b441a456f5330ae50b72c5a081743bb4e358eb1f41875a6"
      }
    ]
  }
];

/**
 * Universal Master Track Vault (All 1,000 tracks pooled together)
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
  if (!targetTrack) return [];
  const choices = [targetTrack];

  const isItalian = (t) => (
    t.genre === 'Italian' || 
    t.id?.startsWith('ita-') || 
    t.id?.startsWith('cnt-') ||
    t.id?.startsWith('cant-') ||
    t.id?.startsWith('indi-')
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
  const shuffled = [...uniqueTracks].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}

export function getPlaylistById(id) {
  return PLAYLISTS.find(p => p.id === id) || null;
}

export function getPlaylistsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return PLAYLISTS;
  return PLAYLISTS.filter(p => p.category === categoryId);
}

export function getAllTracks() {
  return ALL_MASTER_TRACKS;
}

/**
 * Check if a playlist is unlocked for the current player based on Level, Death Parade record, Daily Streak, or PRO gift.
 */
export function isPlaylistUnlocked(playlist, user, userRankLevel = 1) {
  if (!playlist) return true;
  if (!playlist.unlockRequirement && !playlist.isProGift) return true;

  // Se l'utente è PRO e la playlist è inclusa come omaggio PRO (es. Anime OST & Rock Classics) -> Sbloccata!
  if (user?.isPro && playlist.isProGift) return true;
  
  // Per tutte le altre playlist (e per utenti free su playlist pro): verificare requisiti di scalata
  const { minLevel, deathParadeRecord, minDailyStreak } = playlist.unlockRequirement || {};
  const userDeathRecord = user?.deathParadeRecord || user?.personalBests?.deathParade || 0;
  const userDailyStreak = user?.noteStreak || user?.dailyStreak || 0;
  const effectiveLevel = typeof userRankLevel === 'number' ? userRankLevel : (user?.rankLevel || 1);
  
  if (minLevel && effectiveLevel >= minLevel) return true;
  if (deathParadeRecord && userDeathRecord >= deathParadeRecord) return true;
  if (minDailyStreak && userDailyStreak >= minDailyStreak) return true;
  
  return false;
}

/**
 * Get unlock progress and requirement details for display.
 */
export function getPlaylistUnlockDetails(playlist, user, userRankLevel = 1) {
  if (!playlist || (!playlist.unlockRequirement && !playlist.isProGift)) {
    return { isUnlocked: true, unlocked: true, progress: 100, label: 'Sbloccata' };
  }
  
  const isUnlocked = isPlaylistUnlocked(playlist, user, userRankLevel);
  const { minLevel, deathParadeRecord, minDailyStreak, label } = playlist.unlockRequirement || {};
  const userDeathRecord = user?.deathParadeRecord || user?.personalBests?.deathParade || 0;
  const userDailyStreak = user?.noteStreak || user?.dailyStreak || 0;
  const effectiveLevel = typeof userRankLevel === 'number' ? userRankLevel : (user?.rankLevel || 1);
  
  const levelProgress = minLevel ? Math.min(100, Math.round((effectiveLevel / minLevel) * 100)) : 0;
  const deathProgress = deathParadeRecord ? Math.min(100, Math.round((userDeathRecord / deathParadeRecord) * 100)) : 0;
  const streakProgress = minDailyStreak ? Math.min(100, Math.round((userDailyStreak / minDailyStreak) * 100)) : 0;
  const maxProgress = Math.max(levelProgress, deathProgress, streakProgress);
  
  let dynamicLabel = label;
  if (!dynamicLabel) {
    const parts = [];
    if (minLevel) parts.push(`Livello ${minLevel}`);
    if (deathParadeRecord) parts.push(`${deathParadeRecord} in Death Parade 💀`);
    if (minDailyStreak) parts.push(`${minDailyStreak} gg Streak 🔥`);
    if (playlist.isProGift) parts.push(`Incluso con PRO 👑`);
    dynamicLabel = parts.join(' o ');
  }

  const finalLabel = isUnlocked && user?.isPro && playlist.isProGift 
    ? 'Sbloccata con PRO 👑 (Omaggio)' 
    : dynamicLabel;

  return {
    isUnlocked,
    unlocked: isUnlocked,
    progress: isUnlocked ? 100 : maxProgress,
    minLevel,
    deathParadeRecord,
    minDailyStreak,
    label: finalLabel,
    currentDeathRecord: userDeathRecord,
    currentDailyStreak: userDailyStreak,
    currentLevel: effectiveLevel
  };
}

