import React from 'react';
import { X, Trophy, Crown, Swords, Gamepad2, CheckCircle2, Music2, Star, User, Globe, Calendar } from 'lucide-react';
import { getUserRankAndClasse } from '../context/GameContext';

export default function PlayerProfileModal({ player, isOpen, onClose }) {
  if (!isOpen || !player) return null;

  const rankInfo = getUserRankAndClasse(player.totalScore || 0);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-white/15 rounded-3xl p-6 max-w-sm w-full space-y-5 relative shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Avatar & Basic Info */}
        <div className="flex items-center gap-4 pt-1">
          <div className="relative shrink-0">
            <img
              src={player.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
              alt={player.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-lg"
            />
            {rankInfo.classe > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 p-1 rounded-full text-xs font-bold" title={`Classe ${rankInfo.classe}`}>
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black font-display text-white leading-tight">{player.name}</h3>
              <span className="text-base" title={player.nationality || 'Italia'}>{player.flag || '🇮🇹'}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="flex items-center gap-1 font-semibold">
                <Globe className="w-3.5 h-3.5 text-cyan-400" /> {player.nationality || 'Italia'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> {player.age || 25} anni
              </span>
            </div>

            <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px] font-mono font-bold">
              <span>Liv. {rankInfo.level} • {rankInfo.name}</span>
            </div>
          </div>
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
              <Music2 className="w-4 h-4 fill-current" /> {player.noteStreak || 1}
            </div>
          </div>
        </div>

        {/* Trophies & Stats Breakdown Grid */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-amber-400" /> Palmarès & Statistiche
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            
            {/* Partite Giocate */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-black text-sm font-mono">{player.totalGamesPlayed || player.totalGames || 0}</div>
                <div className="text-[10px] text-slate-400 font-semibold">Partite Giocate</div>
              </div>
            </div>

            {/* Partite Perfette */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-black text-sm font-mono">{player.perfectGamesCount || player.perfectGames || 0}</div>
                <div className="text-[10px] text-slate-400 font-semibold">Partite Perfette</div>
              </div>
            </div>

            {/* Sfide 1v1 Vinte */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                <Swords className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-black text-sm font-mono">{player.challengesWon || 0}</div>
                <div className="text-[10px] text-slate-400 font-semibold">Sfide 1v1 Vinte</div>
              </div>
            </div>

            {/* Tornei Vinti */}
            <div className="bg-white/5 p-3 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                <Crown className="w-4 h-4 text-amber-400 fill-current" />
              </div>
              <div>
                <div className="text-amber-300 font-black text-sm font-mono">{player.tournamentsWon || 0}</div>
                <div className="text-[10px] text-amber-400/80 font-bold">Tornei Vinti</div>
              </div>
            </div>

          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
        >
          CHIUDI PROFILO
        </button>

      </div>
    </div>
  );
}
