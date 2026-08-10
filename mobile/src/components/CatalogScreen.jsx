import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { PLAYLISTS, CATEGORIES } from '../services/curatedCatalog';
import { importSpotifyPlaylist } from '../services/spotifyService';
import { downloadPlaylistForOffline } from '../services/offlineStorage';
import { Play, Sparkles, Clock, Disc, UserCheck, Flag, Download, Check, Link, Music, Music2, Award, Calendar, RefreshCw, Trash2, Flame, Skull, Trophy, Zap } from 'lucide-react';
import DeathParadeIntroModal from './DeathParadeIntroModal';

export default function CatalogScreen() {
  const { startGame, startDailyChallenge, startDeathParade, isOfflineMode, user, setUser } = useGame();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [spotifyUrlInput, setSpotifyUrlInput] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const [isSpotifyModalOpen, setIsSpotifyModalOpen] = useState(false);
  const [isDeathParadeIntroOpen, setIsDeathParadeIntroOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [playlistToDelete, setPlaylistToDelete] = useState(null);

  const allAvailablePlaylists = [...(user.importedPlaylists || []), ...PLAYLISTS];

  const filteredPlaylists = allAvailablePlaylists.filter(p => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ten_seconds') return p.category !== 'imported' && !p.id?.startsWith('spotify-');
    if (selectedCategory === 'imported') return p.category === 'imported' || p.id?.startsWith('spotify-');
    return true;
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

  const handleDeletePrompt = (e, playlist) => {
    e.stopPropagation();
    setPlaylistToDelete(playlist);
  };

  const handleSpotifyImportSubmit = async (e) => {
    e.preventDefault();
    if (!spotifyUrlInput.trim()) return;
    
    setIsImporting(true);
    const imported = await importSpotifyPlaylist(spotifyUrlInput.trim());
    setIsImporting(false);
    setIsSpotifyModalOpen(false);

    if (imported && imported.tracks && imported.tracks.length > 0) {
      setUser(prev => ({
        ...prev,
        importedPlaylists: [imported, ...(prev.importedPlaylists || []).filter(p => p.id !== imported.id)]
      }));
      setSpotifyUrlInput('');
      setSelectedCategory('imported');
      setToastMessage(`✨ Playlist "${imported.title}" (${imported.tracks.length} brani) salvata nella tua Collezione!`);
      setTimeout(() => setToastMessage(null), 4000);
    } else {
      alert('Impossibile caricare la playlist Spotify. Verifica il link fornito.');
    }
  };

  const handlePasteDemoSpotify = () => {
    setSpotifyUrlInput('https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 relative">
      
      {/* Toast Success Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1DB954] text-black font-extrabold text-xs px-5 py-3 rounded-2xl shadow-2xl shadow-[#1DB954]/40 flex items-center gap-2 animate-bounce border border-white/20">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Daily Challenge Hero Banner */}
      <div className="relative glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-500/30 overflow-hidden bg-gradient-to-r from-cyan-950/50 via-teal-950/30 to-slate-900 shadow-lg shadow-cyan-950/40">
        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 relative z-10">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="font-display font-black text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <span>SFIDA DEL GIORNO</span>
              </h2>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500/20 border border-cyan-400/40 shadow-md shadow-cyan-500/25" title="Giorni consecutivi di sfida completati">
                <Music className="w-4 h-4 text-cyan-300 fill-current" />
                <span className="text-cyan-300 font-mono font-black text-xs">
                  {user.noteStreak !== undefined ? user.noteStreak : 0} {user.noteStreak === 1 ? 'giorno' : 'giorni'}
                </span>
              </div>
              {user.dailyCompletedToday && (
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Completata
                </span>
              )}
            </div>
            
            <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
              Gioca con costanza per guadagnare bonus punti e avanzare di livello.
            </p>
          </div>

          <button
            onClick={startDailyChallenge}
            className={`w-full md:w-44 py-3.5 rounded-xl font-black font-display text-sm flex items-center justify-center gap-2 transition-all shadow-xl active:scale-[0.98] shrink-0 cursor-pointer ${
              user.dailyCompletedToday
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/10'
                : 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:brightness-110 text-slate-950 shadow-cyan-500/30'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>AVVIA</span>
          </button>
        </div>
      </div>

      {/* DEATH PARADE Hero Banner (Sudden Death Mode) */}
      <div className="relative glass-panel p-4 sm:p-5 rounded-2xl border-2 border-rose-500/40 overflow-hidden bg-gradient-to-r from-rose-950/50 via-purple-950/40 to-slate-900 shadow-lg shadow-rose-950/40">
        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-rose-600/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-8 -top-8 w-36 h-36 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 relative z-10">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="font-display font-black text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-white via-rose-200 to-amber-300 bg-clip-text text-transparent flex items-center gap-2.5">
                <span>DEATH PARADE</span>
                <svg className="w-6 h-6 shrink-0 drop-shadow-md" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 3.24 1.54 6.11 3.92 7.94.16.12.26.32.27.52l.14 2.04c.06.82.72 1.5 1.54 1.5h8.26c.82 0 1.48-.68 1.54-1.5l.14-2.04c.01-.2.11-.4.27-.52C20.46 18.11 22 15.24 22 12c0-5.52-4.48-10-10-10z" fill="url(#skullGradMobile)" />
                  <ellipse cx="8.5" cy="11.5" rx="2.5" ry="3" fill="#0f111a" />
                  <ellipse cx="15.5" cy="11.5" rx="2.5" ry="3" fill="#0f111a" />
                  <polygon points="12,14.5 10.8,17 13.2,17" fill="#0f111a" />
                  <line x1="9" y1="20.5" x2="9" y2="23" stroke="#0f111a" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="20.5" x2="12" y2="23" stroke="#0f111a" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="15" y1="20.5" x2="15" y2="23" stroke="#0f111a" strokeWidth="1.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="skullGradMobile" x1="2" y1="2" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fb7185" />
                      <stop offset="0.5" stopColor="#e11d48" />
                      <stop offset="1" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </h2>
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 font-mono">
                <Trophy className="w-3.5 h-3.5 text-amber-400 fill-current" />
                Record: <strong className="text-white font-black">{user.deathParadeRecord || user.personalBests?.deathParade || 0}</strong> canzoni — <strong className="text-white font-black">{(user.deathParadePointsRecord || user.personalBests?.deathParadePoints || 0).toLocaleString('it-IT')}</strong> pt
              </span>
            </div>
            
            <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
              <strong>1 solo errore e sei eliminato!</strong> Quante canzoni di fila riuscirai a indovinare?
            </p>
          </div>

          <button
            onClick={() => setIsDeathParadeIntroOpen(true)}
            className="w-full md:w-44 py-3.5 rounded-xl font-black font-display text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-rose-600/30 active:scale-[0.98] shrink-0 bg-gradient-to-r from-rose-600 via-purple-600 to-amber-500 hover:brightness-110 text-white cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>AVVIA</span>
          </button>
        </div>
      </div>

      {/* Action Row: Categories on the LEFT, Import Spotify Button justified to the RIGHT */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
        {/* Category Filter Pills (Tutte, Ten Seconds, Importate) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            const isImportedCat = cat.id === 'imported';

            if (isImportedCat) {
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 border-2 border-[#1DB954] shadow-md shadow-[#1DB954]/30 ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-105 font-black'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Importate ({user.importedPlaylists?.length || 0})
                </button>
              );
            }

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-105 font-black'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Dedicated Import Spotify Button (Justified Right) */}
        <button
          onClick={() => setIsSpotifyModalOpen(true)}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#1DB954]/20 transition-all shrink-0 active:scale-95 whitespace-nowrap sm:ml-auto"
        >
          <Link className="w-4 h-4 stroke-[2.5]" />
          <span>Importa Playlist Spotify</span>
        </button>
      </div>

      {/* Spotify Import Modal Screen */}
      {isSpotifyModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-[#1DB954]/40 rounded-3xl p-6 max-w-md w-full space-y-5 relative shadow-2xl">
            
            <button
              onClick={() => setIsSpotifyModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/40 flex items-center justify-center shrink-0">
                <Link className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black font-display text-white">IMPORTA PLAYLIST SPOTIFY</h3>
                <p className="text-xs text-slate-400">Incolla il link della tua playlist preferita</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Copia il link di qualsiasi playlist da Spotify ed incollalo qui sotto per abbinare le anteprime musicali e sfidare i tuoi amici!
            </p>

            <form onSubmit={handleSpotifyImportSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase">Link o URL Playlist Spotify</label>
                <input
                  type="text"
                  placeholder="https://open.spotify.com/playlist/..."
                  value={spotifyUrlInput}
                  onChange={(e) => setSpotifyUrlInput(e.target.value)}
                  className="w-full bg-black/50 border border-white/15 px-3.5 py-3 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#1DB954]"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsSpotifyModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                >
                  ANNULLA
                </button>
                <button
                  type="submit"
                  disabled={isImporting}
                  className="flex-1 py-3 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-black text-xs shadow-lg shadow-[#1DB954]/20 transition-all"
                >
                  {isImporting ? 'IMPORTAZIONE IN CORSO...' : 'IMPORTA E GIOCA 🚀'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contextual In-App Delete Confirmation Modal */}
      {playlistToDelete && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-6 max-w-sm w-full space-y-5 relative shadow-2xl text-center">
            
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
              <Trash2 className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-black font-display text-white uppercase tracking-tight">ELIMINA PLAYLIST IMPORTATA</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sei sicuro di voler rimuovere <strong className="text-rose-300 font-bold">"{playlistToDelete.title}"</strong> dalla tua collezione?
              </p>
            </div>

            <div className="flex gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setPlaylistToDelete(null)}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
              >
                ANNULLA
              </button>
              <button
                type="button"
                onClick={() => {
                  setUser(prev => ({
                    ...prev,
                    importedPlaylists: (prev.importedPlaylists || []).filter(p => p.id !== playlistToDelete.id)
                  }));
                  setToastMessage(`🗑️ Playlist "${playlistToDelete.title}" eliminata!`);
                  setPlaylistToDelete(null);
                  setTimeout(() => setToastMessage(null), 3000);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs shadow-lg shadow-rose-600/30 transition-all active:scale-95 flex items-center justify-center gap-1"
              >
                <Trash2 className="w-4 h-4" /> ELIMINA
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Playlist Grid - Compact cards fitting multiple playlists on screen */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredPlaylists.map(playlist => {
          const isDownloaded = user.downloadedPlaylists?.includes(playlist.id);
          const isDownloading = downloadingId === playlist.id;
          const isImported = playlist.category === 'imported' || playlist.badge === 'Spotify' || (playlist.id && playlist.id.startsWith('spotify-'));

          return (
            <div
              key={playlist.id}
              onClick={() => startGame(playlist, 'STANDARD', isImported ? playlist.tracks : null)}
              className={`group rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between ${
                isImported
                  ? 'bg-gradient-to-b from-[#1DB954]/20 via-[#1DB954]/10 to-emerald-950/40 border-2 border-[#1DB954]/60 hover:border-[#1DB954] shadow-lg shadow-[#1DB954]/20 scale-[1.01]'
                  : 'glass-card border border-white/10 hover:border-emerald-500/50'
              }`}
            >
              <div>
                {/* Cover Image & Badge */}
                <div className="relative h-28 sm:h-32 overflow-hidden">
                  <img
                    src={playlist.cover}
                    alt={playlist.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent" />
                  
                  <span className={`absolute top-2 left-2 backdrop-blur-md rounded-lg border flex items-center justify-center ${
                    isImported
                      ? 'p-1.5 bg-[#1DB954] text-black border-white/30 shadow-md'
                      : 'px-2 py-0.5 bg-slate-950/80 text-emerald-400 border-emerald-500/30 text-[9px] font-extrabold'
                  }`}>
                    {isImported ? (
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-1.32-.42-.18-.6.42-1.2.6-1.32 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.66-1.5.36z" />
                      </svg>
                    ) : playlist.badge}
                  </span>

                  {/* Offline Download or Delete Button */}
                  {isImported ? (
                    <button
                      onClick={(e) => handleDeletePrompt(e, playlist)}
                      title="Elimina Playlist Importata"
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 border border-rose-500/40 text-rose-300 backdrop-blur-md text-[10px] font-bold transition-all z-10 active:scale-90"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleDownloadOffline(e, playlist)}
                      disabled={isDownloaded || isDownloading}
                      className={`absolute top-2 right-2 p-1.5 rounded-lg backdrop-blur-md border text-[10px] font-bold transition-all ${
                        isDownloaded
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                          : isDownloading
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 animate-pulse'
                          : 'bg-slate-950/60 border-white/20 text-slate-200 hover:bg-white/20'
                      }`}
                    >
                      {isDownloaded ? <Check className="w-3.5 h-3.5" /> : isDownloading ? `${downloadProgress}%` : <Download className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>

                {/* Playlist details */}
                <div className="p-2.5">
                  <h3 className={`font-display font-black text-sm transition-colors line-clamp-1 ${
                    isImported ? 'text-white group-hover:text-[#1DB954]' : 'text-white group-hover:text-emerald-400'
                  }`}>
                    {playlist.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight mt-0.5">
                    {playlist.description}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className={`p-2.5 pt-0 flex items-center justify-between text-[11px] border-t mt-1 ${
                isImported ? 'border-[#1DB954]/20' : 'border-white/5'
              }`}>
                <span className="text-slate-400 font-mono text-[10px]">
                  {playlist.tracks.length} Brani
                </span>
                <span className={`font-bold font-display flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px] ${
                  isImported ? 'text-[#1DB954]' : 'text-emerald-400'
                }`}>
                  <Play className="w-3 h-3 fill-current" /> GIOCA
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Welcome to Death Parade Intro Modal */}
      <DeathParadeIntroModal
        isOpen={isDeathParadeIntroOpen}
        onClose={() => setIsDeathParadeIntroOpen(false)}
        onStart={startDeathParade}
        personalRecord={user.deathParadeRecord || user.personalBests?.deathParade || 0}
        personalPointsRecord={user.deathParadePointsRecord || user.personalBests?.deathParadePoints || 0}
      />

    </div>
  );
}
