import React, { useState } from 'react';
import { useGame, getUserRankAndClasse } from '../context/GameContext';
import { PLAYLISTS, CATEGORIES, isPlaylistUnlocked, getPlaylistUnlockDetails } from '../services/curatedCatalog';
import { importSpotifyPlaylist } from '../services/spotifyService';
import { downloadPlaylistForOffline } from '../services/offlineStorage';
import { Play, Sparkles, Clock, Disc, UserCheck, Flag, Download, Check, Link, Music, Music2, Award, Calendar, RefreshCw, Trash2, Flame, Skull, Trophy, Zap, Lock, ArrowRight, Star, Crown } from 'lucide-react';
import DeathParadeIntroModal from './DeathParadeIntroModal';

// --- STYLIZED MINIMAL ICONICA NOTE (SFIDA DEL GIORNO) ---
function DailyNoteIcon() {
  return (
    <svg className="w-7 h-7 shrink-0 drop-shadow-[0_2px_8px_rgba(34,211,238,0.4)]" viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="noteGradMinimal" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.6" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <path
        d="M 12 24 C 12 28.4 8.4 32 4 32 C -0.4 32 -4 28.4 -4 24 C -4 19.6 -0.4 16 4 16 C 6.5 16 8.7 17.1 10.2 18.9 L 10.2 6 C 10.2 4.3 11.6 3 13.3 3.3 L 26.5 5.5 C 28.4 5.8 29.8 7.4 29.8 9.3 L 29.8 11.5 C 29.8 12.8 28.5 13.7 27.2 13.3 L 14.8 9.8 L 14.8 24 Z"
        transform="translate(8, 0)"
        fill="url(#noteGradMinimal)"
        stroke="#020617"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx="12" cy="22" rx="2.5" ry="1.5" fill="white" fillOpacity="0.4" transform="rotate(-25 12 22)" />
    </svg>
  );
}

// --- STYLIZED MINIMAL ICONICA SKULL (DEATH PARADE) ---
function DeathParadeSkullIcon() {
  return (
    <svg className="w-7 h-7 shrink-0 drop-shadow-[0_2px_8px_rgba(244,63,94,0.45)]" viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="skullGradMinimal" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fb7185" />
          <stop offset="0.5" stopColor="#e11d48" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <path
        d="M 18 3 C 10 3 4 9 4 17 C 4 22 7 26 11 28.5 L 11 31 C 11 32.5 12.5 33.5 14 33.5 L 22 33.5 C 23.5 33.5 25 32.5 25 31 L 25 28.5 C 29 26 32 22 32 17 C 32 9 26 3 18 3 Z"
        fill="url(#skullGradMinimal)"
        stroke="#020617"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="12.5" cy="16" r="3.6" fill="#020617" />
      <circle cx="23.5" cy="16" r="3.6" fill="#020617" />
      <polygon points="18,20 16,23.5 20,23.5" fill="#020617" />
      <line x1="14.5" y1="29.5" x2="14.5" y2="33.5" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="29.5" x2="18" y2="33.5" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
      <line x1="21.5" y1="29.5" x2="21.5" y2="33.5" stroke="#020617" strokeWidth="2" strokeLinecap="round" />
      <path d="M 12 7 C 14 5.5 22 5.5 24 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.45" />
    </svg>
  );
}

export default function CatalogScreen() {
  const { startGame, startDailyChallenge, startDeathParade, isOfflineMode, user, setUser, setIsRanksLadderOpen, setIsLivesModalOpen } = useGame();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [spotifyUrlInput, setSpotifyUrlInput] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const [isSpotifyModalOpen, setIsSpotifyModalOpen] = useState(false);
  const [isDeathParadeIntroOpen, setIsDeathParadeIntroOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [playlistToDelete, setPlaylistToDelete] = useState(null);
  const [lockedPlaylistModal, setLockedPlaylistModal] = useState(null);

  const rankInfo = getUserRankAndClasse(user.totalScore || 0);
  const userRankLevel = rankInfo.level || 1;

  const todayStr = new Date().toISOString().split('T')[0];
  const maxScoreTodayDaily = user.todayDailyScore || (user.dailyScoresByDate && user.dailyScoresByDate[todayStr]) || 0;
  const maxScoreTodayDeath = user.todayDeathScore || (user.deathParadeScoresByDate && user.deathParadeScoresByDate[todayStr]) || 0;

  // Track catalog modal states for hardware back button handler
  React.useEffect(() => {
    const isAnyModalOpen = isSpotifyModalOpen || isDeathParadeIntroOpen || !!lockedPlaylistModal || !!playlistToDelete;
    window.__tenSecondsCatalogModalOpen = isAnyModalOpen;
    window.__tenSecondsCloseCatalogModal = () => {
      if (isSpotifyModalOpen) setIsSpotifyModalOpen(false);
      if (isDeathParadeIntroOpen) setIsDeathParadeIntroOpen(false);
      if (lockedPlaylistModal) setLockedPlaylistModal(null);
      if (playlistToDelete) setPlaylistToDelete(null);
    };
    return () => {
      window.__tenSecondsCatalogModalOpen = false;
      window.__tenSecondsCloseCatalogModal = null;
    };
  }, [isSpotifyModalOpen, isDeathParadeIntroOpen, lockedPlaylistModal, playlistToDelete]);

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

  const handlePlaylistClick = (playlist, isImported) => {
    const unlockInfo = getPlaylistUnlockDetails(playlist, user, userRankLevel);
    if (!unlockInfo.isUnlocked) {
      setLockedPlaylistModal({ playlist, unlockInfo });
      return;
    }
    startGame(playlist, 'STANDARD', isImported ? playlist.tracks : null);
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

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 relative">
      
      {/* Toast floating feedback */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-2xl shadow-xl border border-emerald-300 text-xs animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* DAILY CHALLENGE Hero Banner */}
      <div className="relative glass-panel p-4 sm:p-5 rounded-2xl border-2 border-cyan-500/40 overflow-hidden bg-gradient-to-r from-cyan-950/70 via-teal-950/50 to-slate-900 shadow-xl shadow-cyan-950/50">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-8 -top-8 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          
          <div className="space-y-1.5 flex-1 min-w-0 w-full">
            <div className="flex items-center justify-between gap-2.5 flex-wrap">
              
              {/* Titolo + Icona Stilizzata Nota Piena a Destra */}
              <div className="flex items-center gap-2.5">
                <h2 className="font-display font-black text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-white via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
                  SFIDA DEL GIORNO
                </h2>
                <DailyNoteIcon />
              </div>

              {/* Riquadro Evidenziato Allineato a Destra: Pillola Max Oggi, Serie Giorni Consecutivi & Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Pillola con Punteggio Massimo di Oggi */}
                <div 
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 shadow-md shadow-emerald-500/20 font-mono text-xs" 
                  title="Punteggio record ottenuto oggi nella Sfida del Giorno"
                >
                  <span className="text-slate-300 text-[10px] uppercase font-bold">Max Oggi:</span>
                  <strong className="text-emerald-300 font-black">
                    {maxScoreTodayDaily > 0 ? `${maxScoreTodayDaily.toLocaleString('it-IT')} pt` : '—'}
                  </strong>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500/15 border border-cyan-400/30 shadow-md shadow-cyan-500/20 font-mono font-black text-xs text-cyan-300" title="Giorni consecutivi di sfida completati">
                  <span>{user.noteStreak !== undefined ? user.noteStreak : 0} {user.noteStreak === 1 ? 'giorno' : 'giorni'}</span>
                </div>
                {user.dailyCompletedToday && (
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 rounded-xl text-xs font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Completata
                  </span>
                )}
              </div>

            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Gioca con costanza per salire di livello
            </p>
          </div>

          <button
            onClick={startDailyChallenge}
            className={`w-full md:w-40 py-3.5 rounded-xl font-black font-display text-sm flex items-center justify-center gap-2 transition-all shadow-xl active:scale-[0.98] shrink-0 cursor-pointer ${
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
      <div className="relative glass-panel p-4 sm:p-5 rounded-2xl border-2 border-rose-500/40 overflow-hidden bg-gradient-to-r from-rose-950/70 via-purple-950/50 to-slate-900 shadow-xl shadow-rose-950/50">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-8 -top-8 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          
          <div className="space-y-1.5 flex-1 min-w-0 w-full">
            <div className="flex items-center justify-between gap-2.5 flex-wrap">
              
              {/* Titolo + Icona Stilizzata Teschio Piena a Destra */}
              <div className="flex items-center gap-2.5">
                <h2 className="font-display font-black text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-white via-rose-200 to-amber-300 bg-clip-text text-transparent">
                  DEATH PARADE
                </h2>
                <DeathParadeSkullIcon />
              </div>

              {/* Riquadro Evidenziato Allineato a Destra: Oggi & Record Assoluto */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Record di Oggi Death Parade */}
                <div 
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-500/20 border border-purple-400/30 font-mono text-xs shadow-md shadow-purple-500/15" 
                  title="Punteggio record ottenuto oggi nella Death Parade"
                >
                  <span className="text-slate-300 text-[10px] uppercase font-bold">Max Oggi:</span>
                  <strong className="text-purple-300 font-black">
                    {maxScoreTodayDeath > 0 ? `${maxScoreTodayDeath.toLocaleString('it-IT')} pt` : '—'}
                  </strong>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-500/15 border border-rose-400/30 shadow-md shadow-rose-500/20 font-mono text-xs" title="Record assoluto Death Parade">
                  <span className="text-rose-300 flex items-center gap-1.5">
                    <strong className="text-white font-black">{user.deathParadeRecord || user.personalBests?.deathParade || 0}</strong>
                    <span className="text-rose-300 font-mono text-sm leading-none" title="Record Death Parade">♫ —</span>
                    <strong className="text-white font-black">{(user.deathParadePointsRecord || user.personalBests?.deathParadePoints || 0).toLocaleString('it-IT')}</strong>
                    <span className="text-rose-300 font-mono">pt</span>
                  </span>
                </div>
              </div>

            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Quante canzoni di fila riuscirai a indovinare senza sbagliare?
            </p>
          </div>

          <button
            onClick={() => setIsDeathParadeIntroOpen(true)}
            className="w-full md:w-40 py-3.5 rounded-xl font-black font-display text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-rose-600/30 active:scale-[0.98] shrink-0 bg-gradient-to-r from-rose-600 via-purple-600 to-amber-500 hover:brightness-110 text-white cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>AVVIA</span>
          </button>
        </div>
      </div>

      {/* Category Tabs & Spotify Import Action */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            const isImportedCat = cat.id === 'imported';

            if (isImportedCat) {
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 border-2 border-[#1DB954] shadow-md shadow-[#1DB954]/30 cursor-pointer ${
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
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
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

        {/* Dedicated Import Button */}
        <button
          onClick={() => setIsSpotifyModalOpen(true)}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#1DB954]/20 transition-all shrink-0 active:scale-95 whitespace-nowrap sm:ml-auto cursor-pointer"
        >
          <Link className="w-4 h-4 stroke-[2.5]" />
          <span>Importa Playlist</span>
        </button>
      </div>

      {/* Locked Playlist Info Modal */}
      {lockedPlaylistModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0c0d14] border border-amber-500/40 rounded-3xl p-6 max-w-sm w-full space-y-5 relative shadow-2xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-black font-display text-white uppercase tracking-tight">
                PLAYLIST BLOCCATA
              </h3>
              <p className="text-sm font-bold text-amber-300">
                "{lockedPlaylistModal.playlist?.title}"
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Per sbloccare questa playlist devi raggiungere:
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-bold text-xs text-emerald-400">
                {lockedPlaylistModal.unlockInfo?.label}
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1 text-left">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Progresso Sblocco</span>
                <span className="text-emerald-400 font-bold">{lockedPlaylistModal.unlockInfo?.progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                  style={{ width: `${lockedPlaylistModal.unlockInfo?.progress}%` }}
                />
              </div>
            </div>

            {/* Special PRO Gift Callout */}
            {lockedPlaylistModal.playlist?.isProGift && (
              <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/15 via-purple-500/15 to-amber-500/10 border border-amber-400/40 text-left space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
                  <Crown className="w-4 h-4 fill-current text-amber-400 shrink-0" />
                  <span>INCLUSA SUBITO IN OMAGGIO CON PRO!</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Gli utenti <strong>Ten Seconds PRO</strong> sbloccano all'istante questa playlist + vite illimitate e no-ads.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setLockedPlaylistModal(null);
                    setIsLivesModalOpen(true);
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <Crown className="w-3.5 h-3.5 fill-current" />
                  <span>PASSA A PRO PER SBLOCCARLA ORA</span>
                </button>
              </div>
            )}

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setLockedPlaylistModal(null);
                  setIsRanksLadderOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <Trophy className="w-4 h-4" />
                <span>VEDI SCALATA DEI LIVELLI</span>
              </button>

              <button
                type="button"
                onClick={() => setLockedPlaylistModal(null)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-bold text-xs transition-colors cursor-pointer"
              >
                CHIUDI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spotify Import Modal Screen */}
      {isSpotifyModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-[#1DB954]/40 rounded-3xl p-6 max-w-md w-full space-y-5 relative shadow-2xl">
            <button
              onClick={() => setIsSpotifyModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/40 flex items-center justify-center shrink-0">
                <Link className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black font-display text-white">IMPORTA PLAYLIST</h3>
                <p className="text-xs text-slate-400">Incolla il link della playlist da importare</p>
              </div>
            </div>

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
                  className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
                >
                  ANNULLA
                </button>
                <button
                  type="submit"
                  disabled={isImporting}
                  className="flex-1 py-3 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-black text-xs shadow-lg shadow-[#1DB954]/20 transition-all cursor-pointer"
                >
                  {isImporting ? 'IMPORTAZIONE IN CORSO...' : 'IMPORTA E GIOCA 🚀'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
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
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer"
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
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs shadow-lg shadow-rose-600/30 transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" /> ELIMINA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Playlist Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredPlaylists.map(playlist => {
          const isDownloaded = user.downloadedPlaylists?.includes(playlist.id);
          const isDownloading = downloadingId === playlist.id;
          const isImported = playlist.category === 'imported' || playlist.badge === 'Spotify' || (playlist.id && playlist.id.startsWith('spotify-'));
          const unlockInfo = getPlaylistUnlockDetails(playlist, user, userRankLevel);
          const isLocked = !unlockInfo.isUnlocked;

          return (
            <div
              key={playlist.id}
              onClick={() => handlePlaylistClick(playlist, isImported)}
              className={`group rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between relative ${
                isLocked
                  ? 'bg-slate-950/80 border border-amber-500/30 opacity-80 hover:opacity-100 hover:border-amber-400/60'
                  : isImported
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
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      isLocked ? 'grayscale-[50%] brightness-75' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent" />
                  
                  {/* Badge or Lock Tag */}
                  {isLocked ? (
                    <span className="absolute top-2 left-2 backdrop-blur-md rounded-lg border px-2 py-0.5 bg-slate-950/90 text-amber-300 border-amber-400/40 text-[9px] font-black flex items-center gap-1 shadow-md">
                      <Lock className="w-2.5 h-2.5" />
                      <span>{unlockInfo.label}</span>
                    </span>
                  ) : (
                    <span className={`absolute top-2 left-2 backdrop-blur-md rounded-lg border flex items-center justify-center ${
                      isImported
                        ? 'p-1.5 bg-[#1DB954] text-black border-white/30 shadow-md'
                        : playlist.isProGift
                        ? 'px-2 py-0.5 bg-gradient-to-r from-amber-500/90 to-purple-600/90 text-white border-amber-300/50 text-[9px] font-black shadow-md shadow-amber-500/20'
                        : 'px-2 py-0.5 bg-slate-950/80 text-emerald-400 border-emerald-500/30 text-[9px] font-extrabold'
                    }`}>
                      {isImported ? (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-1.32-.42-.18-.6.42-1.2.6-1.32 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.66-1.5.36z" />
                        </svg>
                      ) : playlist.isProGift && user.isPro ? (
                        <span className="flex items-center gap-1">
                          <Crown className="w-2.5 h-2.5 fill-current text-amber-300" />
                          <span>OMAGGIO PRO</span>
                        </span>
                      ) : (
                        playlist.badge
                      )}
                    </span>
                  )}

                  {/* Offline Download or Delete Button (Only for unlocked) */}
                  {!isLocked && (
                    isImported ? (
                      <button
                        onClick={(e) => handleDeletePrompt(e, playlist)}
                        title="Elimina Playlist Importata"
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 border border-rose-500/40 text-rose-300 backdrop-blur-md text-[10px] font-bold transition-all z-10 active:scale-90 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleDownloadOffline(e, playlist)}
                        disabled={isDownloaded || isDownloading}
                        className={`absolute top-2 right-2 p-1.5 rounded-lg backdrop-blur-md border text-[10px] font-bold transition-all cursor-pointer ${
                          isDownloaded
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                            : isDownloading
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 animate-pulse'
                            : 'bg-slate-950/60 border-white/20 text-slate-200 hover:bg-white/20'
                        }`}
                      >
                        {isDownloaded ? <Check className="w-3.5 h-3.5" /> : isDownloading ? `${downloadProgress}%` : <Download className="w-3.5 h-3.5" />}
                      </button>
                    )
                  )}
                </div>

                {/* Playlist details */}
                <div className="p-2.5">
                  <h3 className={`font-display font-black text-sm transition-colors line-clamp-1 ${
                    isLocked
                      ? 'text-amber-200'
                      : isImported 
                      ? 'text-white group-hover:text-[#1DB954]' 
                      : 'text-white group-hover:text-emerald-400'
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
                isLocked ? 'border-amber-500/20' : isImported ? 'border-[#1DB954]/20' : 'border-white/5'
              }`}>
                <span className="text-slate-400 font-mono text-[10px]">
                  {playlist.tracks.length} Brani
                </span>
                {isLocked ? (
                  <span className="font-bold font-display flex items-center gap-1 text-amber-400 text-[11px]">
                    <Lock className="w-3 h-3" /> BLOCCATA
                  </span>
                ) : (
                  <span className={`font-bold font-display flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px] ${
                    isImported ? 'text-[#1DB954]' : 'text-emerald-400'
                  }`}>
                    <Play className="w-3 h-3 fill-current" /> GIOCA
                  </span>
                )}
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
