import React, { useState } from 'react';
import { useGame, LISTENER_RANKS, getUserRankAndClasse } from '../context/GameContext';
import { Trophy, Star, Lock, CheckCircle2, X, Play, Sparkles, Award, Music2, ShieldAlert, Flame, Skull, Calendar, Check, Zap } from 'lucide-react';

// Perks / Rewards mapping for specific rank levels
const RANK_REWARDS = {
  2: { label: 'Badge "Singer da Doccia" 🚿' },
  3: { label: 'Sblocca Playlist "Rock Classics & Hard Rock" 🎸 (In Omaggio con PRO 👑)' },
  4: { label: 'Badge "Cacciatore di Hit" 🎵 + Sblocca Playlist "Rock 2000s" (se Liv. 4)' },
  5: { label: 'Sblocca Playlist "Colonne Sonore Cinema" 🎬' },
  6: { label: 'Badge "Ascoltatore da Bus" 🎧 + Sblocca Playlist "Alta Rotazione" (se Liv. 6)' },
  7: { label: 'Sblocca Playlist "Indie & Cantautori Pop Italia" 🎸' },
  8: { label: 'Badge "Chitarrista da Falò" 🎸 + Sblocca Playlist "Rock Anni \'80" (se Liv. 8)' },
  9: { label: 'Badge "Urla-in-Macchina Pro" 🚗' },
  10: { label: 'Sblocca Playlist "Pop Divas & Queens" 👑 + Badge "Music Buff"' },
  11: { label: 'Badge "Re del Karaoke" 🎤' },
  14: { label: 'Badge "Vinyl Wizard" 🧙‍♂️' },
  15: { label: 'Badge "Enciclopedia Vivente" 🔮' },
  17: { label: 'Badge "Rockstar Prodigy" 💫' },
  20: { label: 'Badge Supremo "Dio della Musica" ⚡ + Corona d\'Oro' },
};

// Daily Streak Milestones (7, 15, 30, 60, 120, 240, 360 days)
const STREAK_MILESTONES = [
  { days: 7, title: 'Settimana di Fuoco', icon: '🔥', reward: 'Sblocca Playlist "Rock 2000s & Alt-Rock" 🎸', badge: 'Badge Settimana di Fuoco' },
  { days: 15, title: 'Costanza di Ferro', icon: '🛡️', reward: 'Sblocca Playlist "Rock Anni \'80 & Glam Rock" ⚡', badge: 'Badge Costanza di Ferro' },
  { days: 30, title: 'Maestro della Routine', icon: '🌙', reward: 'Sblocca Playlist "Alta Rotazione (Hit in Classifica)" 🔥', badge: 'Badge Maestro della Routine' },
  { days: 60, title: 'Veterano Inarrestabile', icon: '⚔️', reward: 'Sblocca Playlist "Anime OST & Sigle Cult" ⚡ (In Omaggio con PRO 👑)', badge: 'Badge Veterano Inarrestabile' },
  { days: 120, title: 'Titano Musicale', icon: '💎', reward: 'Sblocca Playlist "EDM & Electronic Festivals" 🎉 + Titolo Speciale', badge: 'Badge Titano Musicale' },
  { days: 240, title: 'Leggenda Quotidiana', icon: '👑', reward: 'Sblocca Playlist "Pop Divas & Queens" 👑 + Corona di Rubino', badge: 'Badge Leggenda Quotidiana' },
  { days: 360, title: 'Anno Perfetto', icon: '🌟', reward: 'Badge Supremo "Anno Perfetto" + Calice d\'Oro & Gloria Eterna', badge: 'Badge Supremo Anno Perfetto' },
];

// Death Parade Streak Milestones
const DEATH_PARADE_MILESTONES = [
  { songs: 10, title: 'Orecchio Rapido', icon: '👂', reward: 'Sblocca Playlist "Cantautori Italiani" 🇮🇹', badge: 'Badge Orecchio Rapido' },
  { songs: 20, title: 'Sopravvissuto Urban', icon: '💀', reward: 'Sblocca Playlist "Trap & Urban Italia 2020s" 🔥', badge: 'Badge Sopravvissuto' },
  { songs: 25, title: 'Super Sayan Musicale', icon: '💥', reward: 'Sblocca Playlist "Anime OST & Sigle Cult" ⚡ (In Omaggio con PRO 👑)', badge: 'Badge Super Sayan' },
  { songs: 30, title: 'Immisericorde', icon: '⚡', reward: 'Sblocca Playlist "EDM & Electronic Festivals" 🎉', badge: 'Badge Immisericorde' },
  { songs: 40, title: 'Divinità Death Parade', icon: '🌌', reward: 'Sblocca Playlist "Pop Divas & Queens" 👑', badge: 'Badge Divinità Death Parade' },
  { songs: 50, title: 'Campione Assoluto', icon: '🏆', reward: 'Badge Supremo "Campione Assoluto Death Parade" + Calice di Platino', badge: 'Badge Campione Assoluto' },
];

export default function RanksProgressionModal({ isOpen, onClose }) {
  const { user, setActiveScreen } = useGame();
  const [activeTab, setActiveTab] = useState('ranks'); // 'ranks' | 'streak' | 'death_parade'

  if (!isOpen) return null;

  const currentScore = user.totalScore || 0;
  const currentRankInfo = getUserRankAndClasse(currentScore);
  const currentLevel = currentRankInfo.level || 1;
  const currentStreak = user.noteStreak || user.dailyStreak || 0;
  const currentDeathRecord = user.deathParadeRecord || user.personalBests?.deathParade || 0;

  // Find next rank threshold
  const nextRank = LISTENER_RANKS.find(r => r.level === currentLevel + 1);
  const currentRankObj = LISTENER_RANKS.find(r => r.level === currentLevel) || LISTENER_RANKS[0];
  
  const currentLevelMin = currentRankObj.minScore;
  const nextLevelMin = nextRank ? nextRank.minScore : currentLevelMin + 1000000;
  const pointsInCurrentLevel = Math.max(0, currentScore - currentLevelMin);
  const pointsForNextLevel = Math.max(1, nextLevelMin - currentLevelMin);
  const progressPercent = Math.min(100, Math.round((pointsInCurrentLevel / pointsForNextLevel) * 100));
  const pointsNeeded = Math.max(0, nextLevelMin - currentScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl max-h-[90vh] bg-[#0c0d14] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header pulito */}
        <div className="relative p-4 sm:p-5 border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-md shadow-amber-500/20">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-black font-display text-lg sm:text-xl text-white tracking-wide">
              SCALATA & SBLOCCHI
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-Tabs: In alto solo i 3 simboli (Coppa PT, Nota Quotidiana, Teschio Death Parade) */}
        <div className="flex p-2.5 gap-2 bg-slate-950/90 border-b border-white/10 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('ranks')}
            title="Livelli & Punteggio"
            aria-label="Livelli e Punteggio"
            className={`flex-1 py-3 px-4 rounded-2xl transition-all flex items-center justify-center cursor-pointer relative ${
              activeTab === 'ranks'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50 shadow-lg shadow-amber-500/20 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Trophy className="w-6 h-6 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            {activeTab === 'ranks' && (
              <span className="absolute bottom-1 w-6 h-1 rounded-full bg-amber-400" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('streak')}
            title="Striscia Quotidiana"
            aria-label="Striscia Quotidiana"
            className={`flex-1 py-3 px-4 rounded-2xl transition-all flex items-center justify-center cursor-pointer relative ${
              activeTab === 'streak'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Music2 className="w-6 h-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            {activeTab === 'streak' && (
              <span className="absolute bottom-1 w-6 h-1 rounded-full bg-cyan-400" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('death_parade')}
            title="Death Parade"
            aria-label="Death Parade"
            className={`flex-1 py-3 px-4 rounded-2xl transition-all flex items-center justify-center cursor-pointer relative ${
              activeTab === 'death_parade'
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50 shadow-lg shadow-rose-500/20 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Skull className="w-6 h-6 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
            {activeTab === 'death_parade' && (
              <span className="absolute bottom-1 w-6 h-1 rounded-full bg-rose-400" />
            )}
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: LIVELLI PT */}
        {/* ============================================================== */}
        {activeTab === 'ranks' && (
          <>
            {/* Current Progression Status Hero Card */}
            <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/80 border-b border-white/10 shrink-0 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">Livello Attuale</div>
                  <div className="font-display font-black text-lg text-emerald-400 flex items-center gap-2">
                    <span>{currentRankObj.icon}</span>
                    <span>Liv. {currentLevel} • {currentRankObj.name}</span>
                    {currentRankInfo.classe > 0 && (
                      <span className="text-amber-300 text-xs flex items-center gap-0.5">
                        • <Star className="w-3 h-3 fill-current" /> Cl. {currentRankInfo.classe}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] uppercase font-bold text-slate-400">Punteggio Totale</div>
                  <div className="font-mono font-black text-lg text-white">
                    {currentScore.toLocaleString('it-IT')} <span className="text-emerald-400 text-sm">PT</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar to next level */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400 font-sans">
                    {nextRank ? `Verso Liv. ${nextRank.level} (${nextRank.name})` : 'Massimo Livello Raggiunto!'}
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {nextRank ? `Mancano ${pointsNeeded.toLocaleString('it-IT')} PT (${progressPercent}%)` : 'MAX'}
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 border border-white/10 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-md shadow-emerald-500/50 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Levels Ladder */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 custom-scrollbar">
              {LISTENER_RANKS.map((rank) => {
                const isCompleted = currentScore >= (rank.minScore + (LISTENER_RANKS[rank.level]?.minScore ? (LISTENER_RANKS[rank.level].minScore - rank.minScore) : 0)) || currentLevel > rank.level;
                const isCurrent = currentLevel === rank.level;
                const isLocked = currentScore < rank.minScore;
                const reward = RANK_REWARDS[rank.level];

                return (
                  <div
                    key={rank.level}
                    className={`relative p-4 rounded-2xl border transition-all ${
                      isCurrent
                        ? 'bg-gradient-to-r from-amber-500/15 via-emerald-500/10 to-slate-900 border-amber-400/60 shadow-xl shadow-amber-500/15 ring-2 ring-amber-400/30'
                        : isCompleted
                        ? 'bg-slate-900/60 border-emerald-500/30 opacity-90'
                        : 'bg-black/40 border-white/10 opacity-60'
                    }`}
                  >
                    {isCurrent && (
                      <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                        ★ In Corso
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 border ${
                          isCurrent
                            ? 'bg-amber-500/20 border-amber-400/40 text-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                            : isCompleted
                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                            : 'bg-white/5 border-white/10 text-slate-500'
                        }`}>
                          {rank.icon}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold text-slate-400">Livello {rank.level}</span>
                            {isCompleted && (
                              <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-0.5">
                                <CheckCircle2 className="w-3 h-3" /> Sbloccato
                              </span>
                            )}
                            {isLocked && (
                              <span className="text-slate-500 text-[10px] font-bold flex items-center gap-0.5">
                                <Lock className="w-3 h-3" /> Bloccato
                              </span>
                            )}
                          </div>
                          <h4 className={`font-display font-black text-sm sm:text-base ${isCurrent ? 'text-amber-300' : isCompleted ? 'text-white' : 'text-slate-400'}`}>
                            {rank.name}
                          </h4>
                          <div className="font-mono text-xs text-slate-400 mt-0.5">
                            Richiede: <strong className="text-white">{rank.minScore.toLocaleString('it-IT')} PT</strong>
                          </div>
                        </div>
                      </div>

                      {/* Level status badge */}
                      <div className="shrink-0 text-right">
                        {isCurrent ? (
                          <span className="px-3 py-1 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black font-display">
                            ATTUALE
                          </span>
                        ) : isCompleted ? (
                          <span className="px-2.5 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-display">
                            ✓ RAGGIUNTO
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-500 text-xs font-bold font-mono">
                            -{Math.max(0, rank.minScore - currentScore).toLocaleString('it-IT')} PT
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Reward perk if any */}
                    {reward && (
                      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="text-slate-300 font-medium">
                          Ricompensa: <strong className="text-amber-300">{reward.label}</strong>
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ============================================================== */}
        {/* TAB 2: STREAK SFIDA DEL GIORNO (7, 15, 30, 60, 120, 240, 360) */}
        {/* ============================================================== */}
        {activeTab === 'streak' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scrollbar">
            
            {/* Streak Status Header Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-teal-950/40 border border-cyan-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <span className="font-display font-black text-sm text-white">Serie Sfida del Giorno Attuale</span>
                </div>
                <span className="px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono font-black text-sm">
                  {currentStreak} Giorni Consecutivi 🔥
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Completa la Sfida del Giorno ogni giorno senza interrompere la serie per sbloccare playlist esclusive e badge speciali.
              </p>
            </div>

            {/* Streak Milestones List */}
            <div className="space-y-3">
              {STREAK_MILESTONES.map((m) => {
                const isUnlocked = currentStreak >= m.days;
                const progress = Math.min(100, Math.round((currentStreak / m.days) * 100));

                return (
                  <div
                    key={m.days}
                    className={`p-4 rounded-2xl border transition-all ${
                      isUnlocked
                        ? 'bg-gradient-to-r from-cyan-950/30 to-slate-900 border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                        : 'bg-black/40 border-white/10 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border ${
                          isUnlocked
                            ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300 shadow-md shadow-cyan-500/20'
                            : 'bg-white/5 border-white/10 text-slate-500'
                        }`}>
                          {m.icon}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold text-cyan-400">{m.days} Giorni Consecutivi</span>
                            {isUnlocked ? (
                              <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-0.5">
                                <CheckCircle2 className="w-3 h-3" /> Sbloccato
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[10px] font-bold flex items-center gap-0.5">
                                <Lock className="w-3 h-3" /> In corso ({currentStreak}/{m.days})
                              </span>
                            )}
                          </div>
                          <h4 className={`font-display font-black text-sm sm:text-base ${isUnlocked ? 'text-white' : 'text-slate-300'}`}>
                            {m.title}
                          </h4>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        {isUnlocked ? (
                          <span className="px-2.5 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                            ✓ RAGGIUNTO
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">
                            -{Math.max(0, m.days - currentStreak)} gg
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Reward description */}
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-slate-300">
                        Sblocca: <strong className="text-cyan-300">{m.reward}</strong>
                      </span>
                    </div>

                    {!isUnlocked && (
                      <div className="mt-2.5 space-y-1">
                        <div className="w-full h-1.5 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: RECORD DEATH PARADE (10, 20, 25, 30, 40, 50) */}
        {/* ============================================================== */}
        {activeTab === 'death_parade' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scrollbar">
            
            {/* Death Parade Status Header Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/50 via-slate-900 to-purple-950/40 border border-rose-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skull className="w-5 h-5 text-rose-400 animate-pulse" />
                  <span className="font-display font-black text-sm text-white">Record Death Parade Personale</span>
                </div>
                <span className="px-3 py-1 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 font-mono font-black text-sm">
                  {currentDeathRecord} ♫ Consecutivi
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Indovina quante più canzoni possibili di fila in Morte Improvvisa per scalare questi traguardi e sbloccare playlist epiche.
              </p>
            </div>

            {/* Death Parade Milestones List */}
            <div className="space-y-3">
              {DEATH_PARADE_MILESTONES.map((m) => {
                const isUnlocked = currentDeathRecord >= m.songs;
                const progress = Math.min(100, Math.round((currentDeathRecord / m.songs) * 100));

                return (
                  <div
                    key={m.songs}
                    className={`p-4 rounded-2xl border transition-all ${
                      isUnlocked
                        ? 'bg-gradient-to-r from-rose-950/30 to-slate-900 border-rose-400/50 shadow-lg shadow-rose-500/10'
                        : 'bg-black/40 border-white/10 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border ${
                          isUnlocked
                            ? 'bg-rose-500/20 border-rose-400/40 text-rose-300 shadow-md shadow-rose-500/20'
                            : 'bg-white/5 border-white/10 text-slate-500'
                        }`}>
                          {m.icon}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold text-rose-400">{m.songs} Canzoni Consecutivi (♫)</span>
                            {isUnlocked ? (
                              <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-0.5">
                                <CheckCircle2 className="w-3 h-3" /> Sbloccato
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[10px] font-bold flex items-center gap-0.5">
                                <Lock className="w-3 h-3" /> Record: {currentDeathRecord}/{m.songs}
                              </span>
                            )}
                          </div>
                          <h4 className={`font-display font-black text-sm sm:text-base ${isUnlocked ? 'text-white' : 'text-slate-300'}`}>
                            {m.title}
                          </h4>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        {isUnlocked ? (
                          <span className="px-2.5 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                            ✓ RAGGIUNTO
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">
                            -{Math.max(0, m.songs - currentDeathRecord)} ♫
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Reward description */}
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span className="text-slate-300">
                        Sblocca: <strong className="text-rose-300">{m.reward}</strong>
                      </span>
                    </div>

                    {!isUnlocked && (
                      <div className="mt-2.5 space-y-1">
                        <div className="w-full h-1.5 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950/90 shrink-0 flex gap-3">
          <button
            onClick={() => {
              onClose();
              setActiveScreen('CATALOG');
            }}
            className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black font-display text-sm tracking-wide shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>GIOCA SUBITO PER SBLOCCARE LE PLAYLIST</span>
          </button>
        </div>

      </div>
    </div>
  );
}
