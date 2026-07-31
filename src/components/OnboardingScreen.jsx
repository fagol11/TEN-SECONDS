import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Zap, Play, CheckCircle2, Music, ShieldCheck, Sparkles, Radio, LogIn } from 'lucide-react';
import { signInWithGoogle } from '../services/supabaseClient';

const GOOGLE_CLIENT_ID = '806365470000-uig4d8po2rt82chnhok0ik6s324mod8p.apps.googleusercontent.com';

export default function OnboardingScreen() {
  const { setUser, setActiveScreen } = useGame();
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);
  const [googleEmailInput, setGoogleEmailInput] = useState('');

  const handleDemoLogin = () => {
    setUser(prev => ({
      ...prev,
      name: 'Giocatore Demo',
      hasCompletedCalibration: true,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    }));
    setActiveScreen('CATALOG');
  };

  const handleGoogleLogin = () => {
    // Open in-app branded Google Login sheet directly (prevents exiting app or browser connection errors)
    setIsGoogleModalOpen(true);
  };

  const handleConfirmGoogleProfile = (e) => {
    e?.preventDefault();
    const rawInput = googleEmailInput.trim() || 'fabrizio.gosce@gmail.com';
    
    // Extract name from email if needed (e.g. fabrizio.gosce@gmail.com -> Fabrizio)
    let extractedName = 'Fabrizio';
    if (rawInput.includes('@')) {
      const handle = rawInput.split('@')[0].split('.')[0];
      extractedName = handle.charAt(0).toUpperCase() + handle.slice(1);
    } else {
      extractedName = rawInput;
    }

    setUser(prev => ({
      ...prev,
      name: extractedName,
      email: rawInput.includes('@') ? rawInput : `${rawInput}@gmail.com`,
      hasCompletedCalibration: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }));
    setIsGoogleModalOpen(false);
    setActiveScreen('CATALOG');
  };

  // Listen for hash fragment token if returning from Google OAuth
  React.useEffect(() => {
    if (window.location.hash) {
      if (window.location.hash.includes('access_token')) {
        const params = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = params.get('access_token');
        if (accessToken) {
          fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
          })
            .then(res => res.json())
            .then(data => {
              if (data && (data.name || data.email)) {
                setUser(prev => ({
                  ...prev,
                  name: data.given_name || data.name || 'Fabrizio',
                  email: data.email || 'fabrizio.gosce@gmail.com',
                  avatar: data.picture || prev.avatar,
                  hasCompletedCalibration: true,
                }));
                window.history.replaceState(null, '', window.location.pathname);
                setActiveScreen('CATALOG');
              }
            })
            .catch(err => console.warn('Google UserInfo fetch error:', err));
        }
      } else if (window.location.hash.includes('error')) {
        // Clean URL if origin is not yet whitelisted in Google Cloud Console
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [setUser, setActiveScreen]);

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

      {/* Login Options Container */}
      <div className="w-full max-w-sm space-y-3 mb-8">
        
        {/* 1. Demo Login Button */}
        <button
          onClick={handleDemoLogin}
          className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black font-display text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 hover:brightness-110 active:scale-[0.98] transition-all"
        >
          <Zap className="w-5 h-5 fill-current" /> GIOCA LA DEMO
        </button>

        {/* 2. Google Login Option */}
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
          Accedi con il tuo account Google per salvare i punteggi e sfidare i tuoi amici.
        </p>
      </div>

      {/* Features preview bullets */}
      <div className="grid grid-cols-2 gap-3 w-full text-left text-xs text-slate-400">
        <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Estratti audio reali 30s sincronizzati con iTunes/Deezer</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
          <Radio className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Modalità offline con 15+ pacchetti scaricabili</span>
        </div>
      </div>

      {/* Branded Google Sign-In Sheet (In-App — Never exits game) */}
      {isGoogleModalOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-white/15 rounded-3xl p-6 max-w-sm w-full text-center space-y-5 shadow-2xl relative">
            
            <button
              onClick={() => setIsGoogleModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Brand Header */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
                <Zap className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                TEN <span className="text-emerald-400">SECONDS</span>
              </span>
            </div>

            {/* Google G Logo & Title */}
            <div className="space-y-1.5 pt-1">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mx-auto shadow-lg border border-white/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                  <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 13s.6 4.6 1.6 6.6l3.7-2.9z"/>
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z"/>
                </svg>
              </div>

              <h3 className="text-lg font-black text-white font-display">Accedi con Google</h3>
              <p className="text-xs text-slate-400">
                Inserisci la tua email Google o il tuo Nome per accedere:
              </p>
            </div>

            <form onSubmit={handleConfirmGoogleProfile} className="space-y-3 pt-1">
              <input
                type="text"
                placeholder="es. fabrizio.gosce@gmail.com"
                value={googleEmailInput}
                onChange={(e) => setGoogleEmailInput(e.target.value)}
                autoFocus
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm font-bold text-center focus:outline-none focus:border-emerald-400 transition-all"
              />

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black font-display text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4 stroke-[2.5]" />
                CONFERMA E GIOCA
              </button>
            </form>

            <p className="text-[11px] text-slate-500 leading-tight">
              L'accesso in-app conserva i tuoi dati di gioco, trofei e posizioni in classifica in modo sicuro senza uscire dal gioco.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
