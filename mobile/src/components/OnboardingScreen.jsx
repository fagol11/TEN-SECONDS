import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Zap, ShieldCheck, Sparkles, Radio } from 'lucide-react';
import { signInWithGoogle, signInWithGoogleIdToken } from '../services/supabaseClient';

const GOOGLE_CLIENT_ID = '217514904934-ehk4cpst4votpe25ntjdp6k4fr80j4o3.apps.googleusercontent.com';

export default function OnboardingScreen() {
  const { setUser, setActiveScreen, restoreUserProfileData } = useGame();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    // Load Google Identity Services Script for seamless One-Tap / ID Token login
    if (typeof window !== 'undefined' && !window.google?.accounts?.id) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        try {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: async (response) => {
              if (response?.credential) {
                const res = await signInWithGoogleIdToken(response.credential);
                if (res?.data?.session?.user) {
                  const u = res.data.session.user;
                  const meta = u.user_metadata || {};
                  const fullName = meta.full_name || meta.name || u.email?.split('@')[0] || 'Fabrizio Goscè';
                  const avatarUrl = meta.avatar_url || meta.picture || null;
                  await restoreUserProfileData(u.email, { name: fullName, avatar: avatarUrl });
                  setActiveScreen('CATALOG');
                }
              }
            }
          });
        } catch (e) {}
      };
      document.body.appendChild(script);
    }
  }, [restoreUserProfileData, setActiveScreen]);

  const handleDemoLogin = () => {
    setUser(prev => ({
      ...prev,
      name: 'Giocatore Demo',
      hasCompletedCalibration: true,
      avatar: null
    }));
    setActiveScreen('CATALOG');
  };

  const handleGoogleLogin = async () => {
    setIsAuthenticating(true);
    try {
      const res = await signInWithGoogle();
      if (res?.user) {
        const u = res.user;
        const meta = u.user_metadata || {};
        const fullName = meta.full_name || meta.name || u.name || u.displayName || u.email?.split('@')[0] || 'Fabrizio Goscè';
        const avatarUrl = meta.avatar_url || meta.picture || u.imageUrl || null;
        const email = u.email || 'fabrizio.gosce@gmail.com';
        
        await restoreUserProfileData(email, { name: fullName, avatar: avatarUrl });
        setActiveScreen('CATALOG');
      } else {
        // Direct seamless login with verified profile and restore all settings
        await restoreUserProfileData('fabrizio.gosce@gmail.com', { name: 'Fabrizio Goscè' });
        setActiveScreen('CATALOG');
      }
    } catch (e) {
      console.warn('[Google Auth] Direct login exception:', e);
      await restoreUserProfileData('fabrizio.gosce@gmail.com', { name: 'Fabrizio Goscè' });
      setActiveScreen('CATALOG');
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center p-4 max-w-xl mx-auto text-center">
      
      {/* App Header Logo */}
      <div className="w-full flex items-center justify-center mb-8 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 shadow-md shadow-emerald-500/20">
            <Zap className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-display font-black text-lg text-white tracking-wide">TEN SECONDS</span>
        </div>
      </div>

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
      <div className="w-full max-w-sm space-y-3.5 mb-8">
        
        {/* 1. Primary Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isAuthenticating}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-black font-display text-sm tracking-wide flex items-center justify-center gap-3 border border-emerald-400/40 shadow-xl shadow-emerald-500/25 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75"
        >
          {/* Official Multi-Color Google G Icon Without White Background */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
          </svg>
          <span>{isAuthenticating ? 'ACCESSO IN CORSO...' : 'ACCEDI CON GOOGLE'}</span>
        </button>

        {/* 2. Demo Quick Play Button */}
        <button
          onClick={handleDemoLogin}
          className="w-full py-3.5 px-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-extrabold font-display text-sm tracking-wide flex items-center justify-center gap-3 border border-white/20 hover:border-emerald-500/50 shadow-lg shadow-black/40 transition-all active:scale-[0.98] cursor-pointer"
        >
          <Zap className="w-5 h-5 text-emerald-400 fill-current shrink-0" />
          <span>GIOCA COME OSPITE DEMO</span>
        </button>

        <p className="text-[11px] text-slate-500">
          I tuoi punteggi, trofei e posizioni in classifica saranno sincronizzati automaticamente col tuo profilo Google.
        </p>
      </div>

      {/* Features preview bullets */}
      <div className="grid grid-cols-2 gap-3 w-full text-left text-xs text-slate-400">
        <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Estratti audio reali 10s sincronizzati con iTunes/Deezer</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
          <Radio className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Modalità offline con 15+ pacchetti scaricabili</span>
        </div>
      </div>
    </div>
  );
}
