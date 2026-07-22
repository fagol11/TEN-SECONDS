import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Zap, Play, CheckCircle2, Music, ShieldCheck, Sparkles, Radio, LogIn } from 'lucide-react';

export default function OnboardingScreen() {
  const { user, setUser, setActiveScreen } = useGame();

  const handleDirectBetaLogin = () => {
    setUser(prev => ({
      ...prev,
      name: 'Giocatore Beta',
      hasCompletedCalibration: true,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    }));
    setActiveScreen('CATALOG');
  };

  const handleGoogleLogin = () => {
    setUser(prev => ({
      ...prev,
      name: 'Utente Google',
      hasCompletedCalibration: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }));
    setActiveScreen('CATALOG');
  };

  return (
    <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center p-4 max-w-xl mx-auto text-center">
      
      {/* Glow Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 animate-pulse">
        <Sparkles className="w-3.5 h-3.5" /> 10 Secondi per Indovinare. Zero Esitazioni.
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-none mb-4 text-white">
        HAI <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">ORECCHIO?</span>
      </h1>

      <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-md">
        Hai 10 secondi di tempo per indovinare il titolo della canzone, ci riuscirai? Sfida i tuoi amici, crea tornei, più veloce sarai, più punti guadagnerai.
      </p>

      {/* Login Options */}
      <div className="w-full space-y-3 mb-8">
        {/* Direct Beta Test Login Button */}
        <button
          onClick={handleDirectBetaLogin}
          className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black font-display text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 hover:brightness-110 active:scale-[0.98] transition-all"
        >
          <Zap className="w-5 h-5 fill-current" /> ENTRA IN MODALITÀ PROVA (SENZA CREDENZIALI)
        </button>

        {/* Google Login Option */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 font-semibold text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"/>
            <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
            <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 13s.6 4.6 1.6 6.6l3.7-2.9z"/>
            <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z"/>
          </svg>
          Accedi con Google
        </button>

        <p className="text-xs text-slate-500">
          Accedi istantaneamente per sfidare i tuoi amici ed esplorare tutte le playlist.
        </p>
      </div>

      {/* Features preview bullets */}
      <div className="grid grid-cols-2 gap-3 w-full text-left text-xs text-slate-400">
        <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Estratti audio reali 30s scontrati con iTunes/Deezer</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
          <Radio className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Modalità offline con 15+ pacchetti scaricabili</span>
        </div>
      </div>

    </div>
  );
}
