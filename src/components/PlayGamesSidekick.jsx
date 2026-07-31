import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { PLAY_GAMES_ACHIEVEMENTS, checkPlayGamesAchievements } from '../services/playGamesService';
import { Gamepad2, Trophy, Star, ShieldCheck, X, CheckCircle2, ChevronRight, Award, Zap } from 'lucide-react';

export default function PlayGamesSidekick() {
  const { user, setActiveScreen } = useGame();
  const [showWelcomeToast, setShowWelcomeToast] = useState(true);
  const [isSidekickOpen, setIsSidekickOpen] = useState(false);
  const [achievementsState, setAchievementsState] = useState({ unlockedCount: 0, totalCount: 5, totalXp: 0, unlockedList: [] });

  useEffect(() => {
    checkPlayGamesAchievements(user).then(res => setAchievementsState(res));
  }, [user]);

  // Auto-hide top welcome toast after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeToast(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Official Google Play Games Welcome Banner Toast */}
      {showWelcomeToast && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 animate-bounce cursor-pointer max-w-sm w-[92%]" onClick={() => setIsSidekickOpen(true)}>
          <div className="bg-slate-900/95 border border-emerald-500/40 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                <Gamepad2 className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1">
                  <span>Google Play Games</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono text-[9px]">Online</span>
                </div>
                <div className="font-black text-xs text-white truncate">
                  Benvenuto/a, {user.name || 'Fabrizio Goscè'}!
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  XP: {achievementsState.totalXp} • {achievementsState.unlockedCount}/{achievementsState.totalCount} Obiettivi
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0" />
          </div>
        </div>
      )}

      {/* 2. Floating Play Games Sidekick Trigger Button */}
      {!isSidekickOpen && (
        <button
          onClick={() => setIsSidekickOpen(true)}
          title="Apri Google Play Games Sidekick & Obiettivi"
          className="fixed bottom-20 right-4 z-40 w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all border border-emerald-300/40"
        >
          <Gamepad2 className="w-6 h-6 stroke-[2.2]" />
        </button>
      )}

      {/* 3. Google Play Games Sidekick Drawer / Modal */}
      {isSidekickOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass-panel w-full max-w-md p-6 rounded-3xl border border-emerald-500/30 text-center relative overflow-hidden space-y-5 bg-slate-950/90 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setIsSidekickOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Gamepad2 className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest leading-none">
                  GOOGLE PLAY GAMES SIDEKICK
                </div>
                <div className="font-display font-black text-lg text-white leading-tight mt-0.5">
                  {user.name || 'Fabrizio Goscè'}
                </div>
              </div>
            </div>

            {/* Gamer Progress Stats Bar */}
            <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
              <div>
                <div className="text-[9px] uppercase font-bold text-slate-400">Punti XP</div>
                <div className="font-black text-amber-400 font-mono text-sm mt-0.5">{achievementsState.totalXp} XP</div>
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold text-slate-400">Obiettivi</div>
                <div className="font-black text-emerald-400 font-mono text-sm mt-0.5">{achievementsState.unlockedCount}/{achievementsState.totalCount}</div>
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold text-slate-400">Salvataggio</div>
                <div className="font-black text-cyan-400 text-[11px] mt-0.5 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Cloud Sync
                </div>
              </div>
            </div>

            {/* Achievements List */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Obiettivi Google Play Games 🏆</span>
                <span className="text-[10px] text-emerald-400 font-mono font-normal">Sbloccati: {Math.round((achievementsState.unlockedCount / achievementsState.totalCount) * 100)}%</span>
              </h4>

              <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {PLAY_GAMES_ACHIEVEMENTS.map(ach => {
                  const unlocked = ach.isUnlocked(user);
                  return (
                    <div
                      key={ach.id}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                        unlocked
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                          : 'bg-white/5 border-white/5 text-slate-500 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl shrink-0">{ach.icon}</span>
                        <div>
                          <div className="font-bold text-xs flex items-center gap-1.5">
                            <span>{ach.title}</span>
                            {unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                            {ach.description}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-amber-300 shrink-0">
                        +{ach.xp} XP
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setIsSidekickOpen(false);
                  setActiveScreen('LEADERBOARD');
                }}
                className="py-2.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Trophy className="w-4 h-4" /> Classifiche Play Games
              </button>

              <button
                onClick={() => setIsSidekickOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 font-bold text-xs transition-all"
              >
                Chiudi Sidekick
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
