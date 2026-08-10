import React from 'react';
import { Skull, Flame, Play, Trophy, X, ShieldAlert, Zap, AlertTriangle } from 'lucide-react';

export default function DeathParadeIntroModal({ isOpen, onClose, onStart, personalRecord = 0, personalPointsRecord = 0 }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn select-none">
      <div className="relative w-full max-w-md p-6 rounded-3xl bg-gradient-to-b from-purple-950/80 via-slate-900 to-black border-2 border-rose-500/50 text-center space-y-5 shadow-2xl shadow-rose-950/60 overflow-hidden">
        
        {/* Glow ambient background circles */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-rose-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Skull Hero Icon */}
        <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-600 via-purple-600 to-amber-500 p-0.5 shadow-2xl shadow-rose-600/40 animate-pulse">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
            <span className="text-4xl animate-bounce">💀</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="space-y-1">
          <div className="text-[11px] font-black uppercase tracking-widest text-rose-400 flex items-center justify-center gap-1.5 font-mono">
            <Flame className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
            <span>MODALITÀ MORTE IMPROVVISA</span>
            <Flame className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight leading-tight">
            WELCOME TO THE <br />
            <span className="bg-gradient-to-r from-rose-500 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              DEATH PARADE
            </span>
          </h2>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            La Hit Parade senza fine. Canzoni casuali da tutto il catalogo: quanto a lungo riuscirai a sopravvivere?
          </p>
        </div>

        {/* Rules Card */}
        <div className="p-4 rounded-2xl bg-black/60 border border-rose-500/20 text-left space-y-2.5 text-xs text-slate-300">
          <div className="flex items-center gap-2 text-rose-400 font-bold">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>1 Singolo Errore = Eliminazione Immediata</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Zap className="w-4 h-4 shrink-0 text-amber-400" />
            <span>10 secondi a brano per indovinare al volo</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold border-t border-white/10 pt-2">
            <Trophy className="w-4 h-4 shrink-0 text-amber-400 fill-current" />
            <span>Tuo Record: <strong className="text-white font-mono font-black">{personalRecord}</strong> Canzoni — <strong className="text-white font-mono font-black">{personalPointsRecord.toLocaleString('it-IT')}</strong> Punti</span>
          </div>
        </div>

        {/* Start CTA Button */}
        <button
          onClick={() => {
            onClose();
            onStart();
          }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-purple-600 to-amber-500 hover:brightness-110 text-white font-black font-display text-base tracking-wide shadow-2xl shadow-rose-600/40 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>INIZIA LA PARATA 🔥</span>
        </button>

      </div>
    </div>
  );
}
