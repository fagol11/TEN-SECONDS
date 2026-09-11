import React, { useState } from 'react';
import { X, Trophy, Crown, Swords, Gamepad2, CheckCircle2, Music2, Star, User, Globe, Calendar, LogOut, Camera, Upload, Check, Copy, Trash2, Skull, Flame, ShieldCheck, Target, Clock, Award } from 'lucide-react';
import { useGame, getUserRankAndClasse } from '../context/GameContext';

const DEATH_PARADE_MILESTONES = [
  { songs: 10, title: 'Orecchio Rapido', icon: '👂', desc: '10 Canzoni di fila' },
  { songs: 20, title: 'Sopravvissuto Urban', icon: '💀', desc: '20 Canzoni di fila' },
  { songs: 25, title: 'Super Sayan Musicale', icon: '💥', desc: '25 Canzoni di fila' },
  { songs: 30, title: 'Immisericorde', icon: '⚡', desc: '30 Canzoni di fila' },
  { songs: 40, title: 'Divinità Death Parade', icon: '🌌', desc: '40 Canzoni di fila' },
  { songs: 50, title: 'Campione Assoluto', icon: '🏆', desc: '50+ Canzoni di fila' },
];

async function resizeImageToThumbnail(file, maxWidth = 160, maxHeight = 160) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        resolve(dataUrl);
      };
      img.onerror = () => resolve(null);
      img.src = e.target.result;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

export default function PlayerProfileModal({ player, isOpen, onClose }) {
  const { user, updateUserProfile, logoutUser, deleteUserAccount, resetAllUserStats, setIsRanksLadderOpen } = useGame();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user.name || '');
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isConfirmResetOpen, setIsConfirmResetOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSaveName = async () => {
    if (nameInput.trim()) {
      const cleanName = nameInput.trim();
      setIsUpdating(true);
      try {
        await updateUserProfile({ name: cleanName });
      } finally {
        setIsUpdating(false);
      }
    }
    setIsEditingName(false);
  };

  if (!isOpen || !player) return null;

  const isCurrentUser = (player?.email && user?.email && player.email.toLowerCase() === user.email.toLowerCase()) ||
                        (player?.playerCode && user?.playerCode && player.playerCode.toLowerCase() === user.playerCode.toLowerCase()) ||
                        (player?.name === user?.name);
  const currentAvatar = isCurrentUser ? (user.avatar || user.googleAvatar) : (player.avatar || player.googleAvatar);
  const rankInfo = getUserRankAndClasse(player.totalScore || 0);
  const displayPlayerCode = (isCurrentUser ? user.playerCode : player.playerCode) || 'TS-PLAYER';

  const deathRecord = player.deathParadeRecord || player.personalBests?.deathParade || (isCurrentUser ? (user.deathParadeRecord || 0) : 0);
  const deathPoints = player.deathParadePointsRecord || player.personalBests?.deathParadePoints || (isCurrentUser ? (user.deathParadePointsRecord || 0) : 0);
  const highestDeathBadge = [...DEATH_PARADE_MILESTONES].reverse().find(m => deathRecord >= m.songs);

  const rawPlayerName = (player.name || '').trim();
  const sanitizedPlayerName = (rawPlayerName && !rawPlayerName.includes('@'))
    ? rawPlayerName
    : (rawPlayerName.includes('@') ? rawPlayerName.split('@')[0] : (displayPlayerCode || 'Giocatore'));

  const handleCopyPlayerCode = async () => {
    try {
      await navigator.clipboard.writeText(displayPlayerCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch (e) {}
  };

  const handleLogoutClick = () => {
    onClose();
    logoutUser();
  };

  const handleSelectAvatar = async (url) => {
    setIsUpdating(true);
    try {
      await updateUserProfile({ avatar: url });
    } finally {
      setIsUpdating(false);
      setIsPickerOpen(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUpdating(true);
      try {
        const resized = await resizeImageToThumbnail(file, 160, 160);
        if (resized) {
          await updateUserProfile({ avatar: resized });
        }
      } catch (err) {
        console.warn('[Avatar Upload] Error resizing image:', err);
      } finally {
        setIsUpdating(false);
        setIsPickerOpen(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-white/15 rounded-3xl p-6 max-w-sm w-full space-y-5 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors z-10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Avatar & Basic Info */}
        <div className="flex items-center gap-4 pt-1">
          <div className="relative shrink-0 group">
            {currentAvatar ? (
              <img
                src={currentAvatar}
                alt={player.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-lg"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border-2 border-emerald-400/40 shadow-lg flex items-center justify-center text-emerald-400 shrink-0">
                <User className="w-8 h-8" />
              </div>
            )}
            
            {isCurrentUser && (
              <button
                onClick={() => setIsPickerOpen(!isPickerOpen)}
                className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                title="Modifica Foto Profilo"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            )}

            {rankInfo.classe > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 p-1 rounded-full text-xs font-bold" title={`Classe ${rankInfo.classe}`}>
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
            )}
          </div>

          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {isCurrentUser && isEditingName ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    className="bg-white/10 border border-emerald-400/50 rounded-lg px-2 py-0.5 text-sm font-bold text-white focus:outline-none w-32"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-xs font-bold cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 min-w-0">
                  <h3 className="text-xl font-black font-display text-white leading-tight truncate">{sanitizedPlayerName}</h3>
                  {isCurrentUser && (
                    <button
                      onClick={() => { setNameInput(user.name); setIsEditingName(true); }}
                      className="text-slate-400 hover:text-emerald-400 text-xs font-bold shrink-0 cursor-pointer"
                      title="Modifica Nome Profilo"
                    >
                      ✏️
                    </button>
                  )}
                  <span className="text-base shrink-0" title={player.flag || 'Bandiera'}>{player.flag || '🇮🇹'}</span>
                </div>
              )}
            </div>

            {/* Livello / Rango & Badge Death Parade */}
            <div className="flex items-center gap-1.5 flex-wrap text-xs text-slate-300">
              <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px] font-mono font-bold">
                <span>Liv. {rankInfo.level} • {rankInfo.name}</span>
              </div>
              {highestDeathBadge && (
                <div className="inline-flex items-center gap-1 bg-rose-500/15 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded text-[11px] font-bold" title={`Record Death Parade: ${highestDeathBadge.title} (${highestDeathBadge.songs}+ canzoni)`}>
                  <span>{highestDeathBadge.icon}</span>
                  <span>{highestDeathBadge.title}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AVATAR UPLOAD & MANAGEMENT SECTION */}
        {isCurrentUser && isPickerOpen && (
          <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" /> Foto Profilo
              </span>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="text-[10px] text-slate-400 hover:text-white cursor-pointer"
              >
                Annulla
              </button>
            </div>

            <div className="space-y-2 pt-1">
              <label
                htmlFor="avatar-file-input"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <Upload className="w-4 h-4" /> Carica foto da dispositivo
              </label>
              <input
                id="avatar-file-input"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              {user.avatar && (
                <button
                  onClick={() => handleSelectAvatar(null)}
                  className="w-full py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Rimuovi foto personalizzata
                </button>
              )}
            </div>
          </div>
        )}

        {/* Codice Giocatore Univoco (senza cancelletto # e senza scritta secondaria) */}
        <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 p-3 rounded-2xl border border-cyan-500/30 flex items-center justify-between gap-3 shadow-md">
          <div className="min-w-0 space-y-0.5">
            <div className="text-[10px] uppercase font-bold text-cyan-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-400" /> Codice Giocatore Univoco
            </div>
            <div className="font-mono font-black text-sm text-white tracking-wider truncate">
              {displayPlayerCode}
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyPlayerCode}
            className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shrink-0"
            title="Copia codice giocatore"
          >
            {copiedCode ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-[11px]">Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px]">Copia</span>
              </>
            )}
          </button>
        </div>

        {/* Total Score Banner */}
        <div className="glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center justify-between font-mono">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Punteggio Totale</div>
            <div className="text-2xl font-black text-emerald-400">{(player.totalScore || 0).toLocaleString('it-IT')} PT</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-slate-400">Streak Note</div>
            <div className="text-base font-black text-cyan-300 flex items-center justify-end gap-1">
              <Music2 className="w-4 h-4 fill-current" />
              {player._isLoadingStats ? (
                <span className="inline-block w-6 h-4 bg-white/10 rounded animate-pulse" />
              ) : (
                player.noteStreak ?? (isCurrentUser ? (user.noteStreak || 0) : 0)
              )}
            </div>
          </div>
        </div>

        {/* Trophies & Stats Breakdown Grid */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-amber-400" /> Palmarès & Statistiche
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            
            {/* Serie Death Parade (Morte Improvvisa) - Versione Compatta */}
            <div className="col-span-2 bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-slate-900 p-3 rounded-2xl border border-rose-500/40 shadow-lg shadow-rose-950/30">
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-rose-300 font-bold flex items-center gap-1.5">
                  <Skull className="w-3.5 h-3.5 text-rose-400" /> Serie Death Parade
                </div>
                <span className="text-[9px] bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-mono font-bold uppercase">
                  Morte Improvvisa
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1.5">
                <div className="text-lg font-black text-white font-mono flex items-center gap-1.5">
                  <span>{deathRecord}</span>
                  <span className="text-rose-300 font-mono text-sm leading-none" title="Record Death Parade">♫ —</span>
                  <span>{deathPoints.toLocaleString('it-IT')}</span>
                  <span className="text-xs text-slate-400 font-normal">pt</span>
                </div>
                <div className="text-[10px] text-amber-400 font-mono font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400 fill-current" /> Record
                </div>
              </div>
            </div>

            {/* Canzoni Indovinate */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Music2 className="w-3 h-3 text-emerald-400" /> Canzoni Indovinate
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player._isLoadingStats ? (
                  <span className="inline-block w-10 h-4 bg-white/10 rounded animate-pulse" />
                ) : (
                  player.totalSongsGuessed ?? (isCurrentUser ? (user.totalSongsGuessed || 0) : 0)
                )}
              </div>
            </div>

            {/* Partite Giocate */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Gamepad2 className="w-3 h-3 text-emerald-400" /> Partite
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player._isLoadingStats ? (
                  <span className="inline-block w-10 h-4 bg-white/10 rounded animate-pulse" />
                ) : (
                  player.gamesPlayed ?? (player.total_games_played || (isCurrentUser ? (user.totalGamesPlayed || 0) : 0))
                )}
              </div>
            </div>

            {/* Sfide Vinte */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Swords className="w-3 h-3 text-purple-400" /> Sfide Vinte
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player._isLoadingStats ? (
                  <span className="inline-block w-6 h-4 bg-white/10 rounded animate-pulse" />
                ) : (
                  player.challengesWon ?? (isCurrentUser ? (user.challengesWon || 0) : 0)
                )}
              </div>
            </div>

            {/* Tornei Vinti */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Crown className="w-3 h-3 text-amber-400" /> Tornei Vinti
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player._isLoadingStats ? (
                  <span className="inline-block w-6 h-4 bg-white/10 rounded animate-pulse" />
                ) : (
                  player.tournamentsWon ?? (isCurrentUser ? (user.tournamentsWon || 0) : 0)
                )}
              </div>
            </div>

            {/* Accuratezza Risposte */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Target className="w-3 h-3 text-cyan-400" /> Accuratezza
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player._isLoadingStats ? (
                  <span className="inline-block w-10 h-4 bg-white/10 rounded animate-pulse" />
                ) : (
                  (() => {
                    const acc = player.accuracyPercent ?? (isCurrentUser ? user.accuracyPercent : null);
                    if (acc != null) return `${acc}%`;
                    const measured = player.measuredCorrectAnswers ?? player.measured_correct_answers ?? (isCurrentUser ? user.measuredCorrectAnswers || 0 : 0);
                    const wrong = player.totalWrongAnswers ?? player.total_wrong_answers ?? (isCurrentUser ? user.totalWrongAnswers || 0 : 0);
                    if (measured > 0 && (measured + wrong > 0)) {
                      return `${((measured / (measured + wrong)) * 100).toFixed(1)}%`;
                    }
                    return '—';
                  })()
                )}
              </div>
            </div>

            {/* Tempo Medio Risposta */}
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-teal-400" /> Tempo Medio
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {player._isLoadingStats ? (
                  <span className="inline-block w-10 h-4 bg-white/10 rounded animate-pulse" />
                ) : (
                  (() => {
                    const avgT = player.avgResponseTimeSec ?? (isCurrentUser ? user.avgResponseTimeSec : null);
                    if (avgT != null) return `${avgT}s`;
                    const measured = player.measuredCorrectAnswers ?? player.measured_correct_answers ?? (isCurrentUser ? user.measuredCorrectAnswers || 0 : 0);
                    const timeMs = player.totalCorrectTimeMs ?? player.total_correct_time_ms ?? (isCurrentUser ? user.totalCorrectTimeMs || 0 : 0);
                    if (measured > 0 && timeMs > 0) {
                      return `${(timeMs / 1000 / measured).toFixed(2)}s`;
                    }
                    return '—';
                  })()
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons: Privacy Policy, Logout & Delete Account if current user */}
        {isCurrentUser && (
          <div className="pt-2 border-t border-white/10 space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Informativa Privacy
              </button>

              <button
                onClick={handleLogoutClick}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" /> Disconnetti
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsConfirmResetOpen(true)}
                className="flex-1 py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                title="Azzera punteggi e statistiche per ripartire da zero mantenendo l'account"
              >
                <Flame className="w-3.5 h-3.5" /> Azzera Statistiche
              </button>

              <button
                onClick={() => setIsConfirmDeleteOpen(true)}
                className="flex-1 py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                title="Eliminazione definitiva account conforme alle policy Google Play"
              >
                <Trash2 className="w-3.5 h-3.5" /> Elimina Account
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Confirmation Modal for Resetting Stats */}
      {isConfirmResetOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Azzerare tutte le statistiche?</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Il tuo punteggio, le partite giocate e i record verranno azzerati a 0 PT sia su questo dispositivo che nella classifica globale Supabase.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsConfirmResetOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
              >
                Annulla
              </button>
              <button
                onClick={async () => {
                  setIsConfirmResetOpen(false);
                  onClose();
                  await resetAllUserStats();
                }}
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/30"
              >
                Sì, Azzera a 0
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal for Account Deletion (Google Play Compliance) */}
      {isConfirmDeleteOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border-2 border-rose-500/50 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Eliminare definitivamente l'account?</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Tutti i tuoi punteggi, classifiche, record e dati personali verranno eliminati permanentemente dal database cloud e da questo dispositivo.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsConfirmDeleteOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
              >
                Annulla
              </button>
              <button
                onClick={async () => {
                  setIsConfirmDeleteOpen(false);
                  onClose();
                  await deleteUserAccount();
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs shadow-lg shadow-rose-600/30"
              >
                Sì, Elimina Tutto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy & GDPR Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-white/20 rounded-3xl p-6 max-w-md w-full text-left space-y-4 max-h-[85vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Informativa sulla Privacy & Dati</span>
              </div>
              <button onClick={() => setIsPrivacyOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p>
                <strong>Ten Seconds</strong> rispetta la tua privacy e protegge i tuoi dati personali in piena conformità con il GDPR europeo e le policy di Google Play:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-400">
                <li><strong>Account & Profilo</strong>: L'accesso tramite Google raccoglie unicamente nome, email e avatar per consentire le classifiche globali e le sfide con amici.</li>
                <li><strong>Pubblicità (Google AdMob)</strong>: Gli annunci video rewarded utilizzano l'SDK ufficiale AdMob di Google. Nessun dato sensibile viene venduto a terzi.</li>
                <li><strong>Cloud Database (Supabase)</strong>: I punteggi e le classifiche sono protetti da connessioni cifrate SSL/TLS.</li>
                <li><strong>Diritto all'Oblio</strong>: Puoi cancellare istantaneamente ogni traccia del tuo profilo e punteggi premendo <em>"Elimina Dati"</em> in questa schermata.</li>
              </ul>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-white/10">
                Versione 1.0.47 • © 2026 Ten Seconds Team. Tutti i diritti riservati.
              </p>
            </div>
            <button
              onClick={() => setIsPrivacyOpen(false)}
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs"
            >
              Ho Capito
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
