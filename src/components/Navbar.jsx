import React from 'react';
import { useGame, getUserRankAndClasse } from '../context/GameContext';
import { Zap, WifiOff, Disc, Trophy, Users, Download, Music2, Star, Heart, Crown } from 'lucide-react';

export default function Navbar() {
  const { user, activeScreen, setActiveScreen, isOfflineMode, setIsLivesModalOpen, openPlayerProfile } = useGame();

  const rankInfo = getUserRankAndClasse(user.totalScore);

  const UserPillsContent = () => (
    <>
      {/* Lives ❤️ Pill */}
      <button
        onClick={() => setIsLivesModalOpen(true)}
        className={`h-10 sm:h-11 px-2.5 sm:px-3 rounded-xl border text-xs font-bold font-mono flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105 shrink-0 ${
          user.isPro
            ? 'bg-gradient-to-r from-amber-500/20 to-purple-500/20 border-amber-400/40 text-amber-300'
            : user.lives > 0
            ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            : 'bg-rose-600/30 border-rose-500 text-rose-300 animate-pulse'
        }`}
        title={user.isPro ? 'Account PRO: Vite Illimitate ❤️' : `Vite rimanenti: ${user.lives}/3 (Clicca per ricaricare)`}
      >
        {user.isPro ? (
          <>
            <Crown className="w-4 h-4 fill-current text-amber-400" />
            <span>PRO</span>
          </>
        ) : (
          <>
            <Heart className={`w-4 h-4 fill-current ${user.lives === 0 ? 'text-rose-500 animate-bounce' : 'text-rose-400'}`} />
            <span className="font-black">{user.lives}/3</span>
          </>
        )}
      </button>

      {/* Note di Fila 🎵 Pill (Identico a Badge Vite per font, dimensione e struttura) */}
      <div
        className="h-10 sm:h-11 px-2.5 sm:px-3 rounded-xl border text-xs font-bold font-mono flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
        title="Note di Fila 🎵"
      >
        <Music2 className="w-4 h-4 fill-current text-cyan-400 shrink-0" />
        <span className="font-black">{user.noteStreak || 1}</span>
      </div>

      {/* Rank Level & Score Pill */}
      <div className="h-10 sm:h-11 px-2.5 sm:px-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 sm:gap-2.5 shrink-0">
        <span className="text-base sm:text-lg leading-none">{rankInfo.icon}</span>
        <div className="flex flex-col justify-center text-left leading-none">
          <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1 leading-tight">
            <span>Liv. {rankInfo.level || 1}</span>
            {rankInfo.classe > 0 && (
              <span className="text-amber-400 flex items-center gap-0.5">
                • <Star className="w-3 h-3 fill-current" /> Cl. {rankInfo.classe}
              </span>
            )}
            <span>• PT</span>
          </div>
          <div className="text-xs font-black text-emerald-400 font-mono leading-tight mt-0.5">
            {user.totalScore.toLocaleString('it-IT')}
          </div>
        </div>
      </div>

      {/* Avatar Image */}
      <img
        src={user.avatar}
        alt={user.name}
        onClick={() => openPlayerProfile(user)}
        title="Clicca per visualizzare il tuo Profilo e i tuoi Trofei"
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover shrink-0 cursor-pointer hover:scale-105 transition-transform ${
          rankInfo.classe > 0 ? 'border-2 border-amber-400 shadow-md shadow-amber-400/30' : 'border border-white/20'
        }`}
      />
    </>
  );

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 px-4 py-3 space-y-2 sm:space-y-0">
      
      {/* Desktop Main Header Row / Mobile Top Row */}
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand & Logo */}
        <div 
          onClick={() => setActiveScreen(user.hasCompletedCalibration ? 'CATALOG' : 'ONBOARDING')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-display font-black text-xl tracking-tight text-white flex items-center gap-1">
              TEN <span className="text-emerald-400">SECONDS</span>
            </span>
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <span>Music Quiz</span>
              {isOfflineMode && (
                <span className="flex items-center gap-1 text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">
                  <WifiOff className="w-3 h-3" /> Offline
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        {user.hasCompletedCalibration && (
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveScreen('CATALOG')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeScreen === 'CATALOG' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Disc className="w-3.5 h-3.5" /> Collezione
            </button>
            <button
              onClick={() => setActiveScreen('CHALLENGE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeScreen === 'CHALLENGE' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-3.5 h-3.5" /> Sfide
            </button>
            <button
              onClick={() => setActiveScreen('LEADERBOARD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeScreen === 'LEADERBOARD' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" /> Classifiche
            </button>
            <button
              onClick={() => setActiveScreen('OFFLINE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeScreen === 'OFFLINE' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Download className="w-3.5 h-3.5" /> Offline
            </button>
          </nav>
        )}

        {/* Desktop User Pills Container */}
        <div className="hidden md:flex items-center gap-2 sm:gap-2.5">
          <UserPillsContent />
        </div>

      </div>

      {/* Mobile Sub-row 1: User Stats Pills (Aligned 4-column Grid) */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:hidden pt-2 border-t border-white/5 w-full items-center">
        {/* Vite ❤️ */}
        <button
          onClick={() => setIsLivesModalOpen(true)}
          className={`h-10 px-1.5 sm:px-2 rounded-xl border text-[11px] font-bold font-mono flex items-center justify-center gap-1 transition-all hover:scale-105 w-full overflow-hidden ${
            user.isPro
              ? 'bg-gradient-to-r from-amber-500/20 to-purple-500/20 border-amber-400/40 text-amber-300'
              : user.lives > 0
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              : 'bg-rose-600/30 border-rose-500 text-rose-300 animate-pulse'
          }`}
          title={user.isPro ? 'Account PRO: Vite Illimitate ❤️' : `Vite rimanenti: ${user.lives}/3`}
        >
          {user.isPro ? (
            <>
              <Crown className="w-3.5 h-3.5 fill-current text-amber-400 shrink-0" />
              <span className="truncate">PRO</span>
            </>
          ) : (
            <>
              <Heart className={`w-3.5 h-3.5 fill-current shrink-0 ${user.lives === 0 ? 'text-rose-500 animate-bounce' : 'text-rose-400'}`} />
              <span className="font-black truncate">{user.lives}/3</span>
            </>
          )}
        </button>

        {/* Note di Fila 🎵 Pill Mobile (Identico a Badge Vite per font, dimensione e struttura) */}
        <div
          className="h-10 px-1.5 sm:px-2 rounded-xl border text-xs font-bold font-mono flex items-center justify-center gap-1.5 w-full overflow-hidden shrink-0 bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
          title="Note di Fila 🎵"
        >
          <Music2 className="w-3.5 h-3.5 fill-current text-cyan-400 shrink-0" />
          <span className="font-black truncate">{user.noteStreak || 1}</span>
        </div>

        {/* Rank Level & Score */}
        <div className="h-10 px-1.5 sm:px-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1 w-full overflow-hidden">
          <span className="text-sm leading-none shrink-0">{rankInfo.icon}</span>
          <div className="flex flex-col justify-center text-left leading-none truncate">
            <div className="text-[8px] uppercase font-bold text-slate-400 leading-tight truncate">
              Liv. {rankInfo.level || 1}
            </div>
            <div className="text-[11px] font-black text-emerald-400 font-mono leading-tight mt-0.5 truncate">
              {user.totalScore.toLocaleString('it-IT')}
            </div>
          </div>
        </div>

        {/* Avatar Container */}
        <div className="h-10 flex items-center justify-center w-full">
          <img
            src={user.avatar}
            alt={user.name}
            onClick={() => openPlayerProfile(user)}
            title="Clicca per visualizzare il tuo Profilo"
            className={`w-10 h-10 rounded-xl object-cover cursor-pointer active:scale-95 transition-transform ${
              rankInfo.classe > 0 ? 'border-2 border-amber-400 shadow-md shadow-amber-400/30' : 'border border-white/20'
            }`}
          />
        </div>
      </div>

      {/* Mobile Sub-row 2: Navigation Menu (Aligned 4-column Grid) */}
      {user.hasCompletedCalibration && (
        <div className="grid grid-cols-4 gap-1 md:hidden pt-2 border-t border-white/5 text-[11px] w-full text-center">
          <button
            onClick={() => setActiveScreen('CATALOG')}
            className={`flex flex-col items-center justify-center gap-1 py-1 px-0.5 rounded-lg transition-colors ${
              activeScreen === 'CATALOG' ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Disc className="w-4 h-4" />
            <span className="truncate w-full text-center">Collezione</span>
          </button>
          <button
            onClick={() => setActiveScreen('CHALLENGE')}
            className={`flex flex-col items-center justify-center gap-1 py-1 px-0.5 rounded-lg transition-colors ${
              activeScreen === 'CHALLENGE' ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="truncate w-full text-center">Sfide</span>
          </button>
          <button
            onClick={() => setActiveScreen('LEADERBOARD')}
            className={`flex flex-col items-center justify-center gap-1 py-1 px-0.5 rounded-lg transition-colors ${
              activeScreen === 'LEADERBOARD' ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span className="truncate w-full text-center">Classifiche</span>
          </button>
          <button
            onClick={() => setActiveScreen('OFFLINE')}
            className={`flex flex-col items-center justify-center gap-1 py-1 px-0.5 rounded-lg transition-colors ${
              activeScreen === 'OFFLINE' ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-4 h-4" />
            <span className="truncate w-full text-center">Offline</span>
          </button>
        </div>
      )}

    </header>
  );
}
