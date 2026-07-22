import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { PLAYLISTS, CATEGORIES } from '../services/curatedCatalog';
import { importSpotifyPlaylist } from '../services/spotifyService';
import { downloadPlaylistForOffline } from '../services/offlineStorage';
import { Play, Sparkles, Clock, Disc, UserCheck, Flag, Download, Check, Link, Music2, Award, Calendar } from 'lucide-react';

export default function CatalogScreen() {
  const { startGame, startDailyChallenge, isOfflineMode, user, setUser } = useGame();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [spotifyUrlInput, setSpotifyUrlInput] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const filteredPlaylists = PLAYLISTS.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handleDownloadOffline = async (e, playlist) => {
    e.stopPropagation();
    try {
      setDownloadingId(playlist.id);
      setDownloadProgress(10);
      
      const downloadedPackage = await downloadPlaylistForOffline(playlist, (progress) => {
        setDownloadProgress(progress);
      });

      setUser(prev => ({
        ...prev,
        downloadedPlaylists: [...(prev.downloadedPlaylists || []), downloadedPackage.id]
      }));

      setDownloadingId(null);
    } catch (err) {
      alert('Errore durante il download offline della playlist');
      setDownloadingId(null);
    }
  };

  const handleSpotifyImportSubmit = async (e) => {
    e.preventDefault();
    if (!spotifyUrlInput.trim()) return;
    
    setIsImporting(true);
    const match = spotifyUrlInput.match(/playlist\/([a-zA-Z0-9]+)/);
    const playlistId = match ? match[1] : spotifyUrlInput.trim();

    const imported = await importSpotifyPlaylist(playlistId);
    setIsImporting(false);

    if (imported && imported.tracks.length > 0) {
      startGame(imported, 'STANDARD', imported.tracks);
    } else {
      alert('Impossibile caricare la playlist Spotify. Verifica l\'URL o il link fornito.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      
      {/* Daily Challenge Hero Banner (Duolingo style Daily Note Streak) */}
      <div className="relative glass-panel p-6 rounded-3xl border border-cyan-500/30 overflow-hidden bg-gradient-to-r from-cyan-950/40 via-teal-950/30 to-slate-900">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                <Music2 className="w-3.5 h-3.5 fill-current" /> SFIDA DELLA NOTA DEL GIORNO • 2X PUNTI
              </span>
              {user.dailyCompletedToday && (
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Completata
                </span>
              )}
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-white flex items-center gap-2 sm:gap-2.5 flex-wrap">
              <span>NOTE DI FILA</span>
              <Music2 className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-cyan-400 fill-current shrink-0" />
              <span className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full bg-cyan-500 text-white font-mono font-black text-xs sm:text-sm flex items-center justify-center shadow-md shadow-cyan-500/30 shrink-0">
                {user.noteStreak || 1}
              </span>
            </h2>
            
            <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
              Completa i 10 brani del giorno per mantenere attiva la tua streak. Prosegui per 7, 14, 21 o 30 per sbloccare Super Bonus Punti e avanzare di livello!
            </p>

            {/* Streak Milestone Progress bar */}
            <div className="flex items-center gap-3 pt-2">
              <div className="text-[11px] font-bold text-slate-400 font-mono">
                Prossimo Traguardo: {user.noteStreak < 7 ? '7 (+5.000 PT)' : user.noteStreak < 14 ? '14 (+12.000 PT)' : user.noteStreak < 21 ? '21 (+25.000 PT)' : '30 (+60.000 PT)'}
              </div>
            </div>
          </div>

          <button
            onClick={startDailyChallenge}
            className={`w-full md:w-auto px-6 py-4 rounded-2xl font-black font-display text-sm flex items-center justify-center gap-2 transition-all shadow-xl active:scale-[0.98] shrink-0 ${
              user.dailyCompletedToday
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/10'
                : 'bg-gradient-to-r from-cyan-500 to-teal-400 hover:brightness-110 text-slate-950 shadow-cyan-500/30'
            }`}
          >
            <Play className="w-5 h-5 fill-current" />
            {user.dailyCompletedToday ? 'RIGIOCA SFIDA GIORNALIERA' : 'GIOCA LA SFIDA DEL GIORNO 🎵'}
          </button>

        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-105'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Spotify Import Box */}
      <div className="glass-panel p-4 rounded-2xl border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-xl bg-[#1DB954]/20 text-[#1DB954] flex items-center justify-center shrink-0">
            <Link className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Importa Playlist da Spotify</h4>
            <p className="text-[11px] text-slate-400">Incolla link per abbinare le anteprime audio iTunes</p>
          </div>
        </div>

        <form onSubmit={handleSpotifyImportSubmit} className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="https://open.spotify.com/playlist/..."
            value={spotifyUrlInput}
            onChange={(e) => setSpotifyUrlInput(e.target.value)}
            className="bg-black/40 border border-white/10 px-3 py-2 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 flex-1 sm:w-64"
          />
          <button
            type="submit"
            disabled={isImporting}
            className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition-all shrink-0"
          >
            {isImporting ? 'Elaborazione...' : 'Gioca'}
          </button>
        </form>
      </div>

      {/* Playlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlaylists.map(playlist => {
          const isDownloaded = user.downloadedPlaylists?.includes(playlist.id);
          const isDownloading = downloadingId === playlist.id;

          return (
            <div
              key={playlist.id}
              onClick={() => startGame(playlist)}
              className="group glass-card rounded-2xl border border-white/10 overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Cover Image & Badge */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={playlist.cover}
                    alt={playlist.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                    {playlist.badge}
                  </span>

                  {/* Offline Download Button */}
                  <button
                    onClick={(e) => handleDownloadOffline(e, playlist)}
                    disabled={isDownloaded || isDownloading}
                    className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all ${
                      isDownloaded
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : isDownloading
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 animate-pulse'
                        : 'bg-slate-950/60 border-white/20 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    {isDownloaded ? <Check className="w-4 h-4" /> : isDownloading ? `${downloadProgress}%` : <Download className="w-4 h-4" />}
                  </button>
                </div>

                {/* Playlist details */}
                <div className="p-4">
                  <h3 className="font-display font-black text-lg text-white group-hover:text-emerald-400 transition-colors">
                    {playlist.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {playlist.description}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 pt-0 flex items-center justify-between text-xs border-t border-white/5 mt-2">
                <span className="text-slate-400 font-mono text-[11px]">
                  {playlist.tracks.length} Brani
                </span>
                <span className="text-emerald-400 font-bold font-display flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current" /> GIOCA
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
