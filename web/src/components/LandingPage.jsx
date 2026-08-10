import React, { useState } from 'react';
import { Play, Download, Sparkles, Trophy, Zap, Swords, Calendar, Music, ShieldCheck, Globe, ChevronRight, CheckCircle2, Star, ArrowRight, Smartphone } from 'lucide-react';
import { LISTENER_RANKS, useGame } from '../context/GameContext';
import InteractiveDemoModal from './InteractiveDemoModal';

export default function LandingPage() {
  const { setActiveScreen, user } = useGame();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('FEATURES');

  return (
    <div className="min-h-screen bg-[#09090d] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden relative">
      
      {/* Background Animated Neon Particles & Blurs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Top Floating Glass Header */}
      <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-0.5 shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-emerald-400 font-black text-lg">
              🎵
            </div>
          </div>
          <div>
            <span className="font-display font-black text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              TEN SECONDS
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full ml-2">
              Official Web & Mobile
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-slate-200 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 text-cyan-400 fill-current" /> <span className="hidden xs:inline">Demo Live</span>
          </button>
          
          <button
            onClick={() => setActiveScreen(user?.hasCompletedCalibration ? 'CATALOG' : 'ONBOARDING')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-1.5"
          >
            GIOCA SUBITO <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-8 pt-4">
          
          {/* Animated Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide animate-bounce">
            <Sparkles className="w-4 h-4" /> ⚡ IL QUIZ MUSICALE PIÙ REATTIVO D'ITALIA
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-none">
              10 SECONDI.<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                1 BRANO.
              </span><br />
              DIMOSTRA IL TUO ORECCHIO!
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
              Ascolta l'anteprima, trova il titolo prima dello scadere del timer e scala la classifica dei <strong className="text-slate-200">20 Gradi di Ascoltatore</strong> in sfide singole e 1v1 in tempo reale!
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:brightness-110 text-slate-950 font-black text-base uppercase tracking-wider shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
            >
              <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" /> PROVA LA DEMO GIOCABILE
            </button>

            <a
              href="/TenSeconds_Beta_13.apk"
              download
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-white/15 text-white font-bold text-base transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
            >
              <Smartphone className="w-5 h-5 text-cyan-400" /> SCARICA APK ANDROID
            </a>
          </div>

          {/* Floating Glass Showcase Card */}
          <div className="pt-8 max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-emerald-500/20 to-transparent shadow-2xl overflow-hidden group">
              <div className="bg-slate-950/90 backdrop-blur-2xl rounded-[22px] p-6 sm:p-10 border border-white/10 space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> REAZIONE FULMINEA (10.0s)
                  </div>
                </div>

                {/* Simulated Game Board Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Punteggio Partita</span>
                    <div className="text-2xl font-black font-mono text-emerald-400">2.450 PT</div>
                    <div className="text-xs text-slate-400">Coeff. Rapidità <strong className="text-cyan-300">x1.65</strong></div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Grado Utente</span>
                    <div className="text-lg font-bold text-amber-300 flex items-center gap-1.5">
                      📻 DJ del Venerdì Sera
                    </div>
                    <div className="text-xs text-slate-400">Livello <strong className="text-white">5 / 20</strong></div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Streak Note</span>
                    <div className="text-2xl font-black font-mono text-cyan-400 flex items-center gap-1">
                      🔥 8 DI FILA
                    </div>
                    <div className="text-xs text-slate-400">Bonus Combo <strong className="text-emerald-400">+160 PT</strong></div>
                  </div>
                </div>

                {/* Animated Equalizer Waveform */}
                <div className="flex items-center justify-center gap-1.5 h-12 pt-2">
                  {[40, 70, 30, 90, 60, 100, 50, 80, 45, 95, 65, 35].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-full animate-pulse"
                      style={{ height: `${h}%`, animationDuration: `${0.4 + (i % 5) * 0.2}s` }}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* STATS HIGHLIGHT COUNTER */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Brani nel Catalogo', val: '300+', color: 'text-emerald-400' },
            { label: 'Gradi di Ascoltatore', val: '20', color: 'text-cyan-400' },
            { label: 'Tempo per Risposta', val: '10.0s', color: 'text-amber-400' },
            { label: 'Sfide Multiplayer 1v1', val: 'LIVE', color: 'text-purple-400' },
          ].map((st, i) => (
            <div key={i} className="glass-panel p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className={`text-3xl sm:text-4xl font-black font-mono ${st.color}`}>{st.val}</div>
              <div className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </section>

        {/* FEATURES GRID */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">PERCHÉ GIOCARE A TEN SECONDS?</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Un'esperienza arcade musicale progettata per sfidare i tuoi riflessi e la tua cultura musicale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Coeff. Rapidità & Bonus Tempo</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Non conta solo indovinare la canzone, ma quanto sei veloce! Rispondi in meno di 2 secondi per attivare il moltiplicatore di rapidità fino a <strong className="text-emerald-400">x1.80</strong>.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent space-y-3 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">20 Gradi di Ascoltatore</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Scala la vetta partendo da <em>Suonatore di Citofono</em> fino a raggiungere il titolo leggendario di <strong className="text-cyan-300">Legend of Sound</strong> e sblocca le Classi di Prestigio!
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent space-y-3 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Swords className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Sfide 1v1 & Tornei Realtime</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Crea una stanza privata o entra in coda globale per sfidare i tuoi amici in duelli testa a testa con sincronizzazione dei punti in tempo reale tramite Supabase.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent space-y-3 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Sfida del Giorno (Daily Bonus)</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ogni giorno una nuova selezione di 10 brani esclusivi. Rispondi esattamente a tutti i pezzi per conquistare il bonus secco da <strong className="text-amber-300">+1000 PT</strong>.
              </p>
            </div>

          </div>
        </section>

        {/* RANKS CAROUSEL SHOWCASE */}
        <section className="space-y-6 bg-white/[0.02] p-8 rounded-3xl border border-white/10">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">SBLOCCA TUTTI I 20 GRADI</h2>
            <p className="text-xs text-slate-400">Guadagna punti in ogni partita e dimostra di essere il n.1</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
            {LISTENER_RANKS.map((r) => (
              <div key={r.level} className="bg-slate-900/80 p-3 rounded-2xl border border-white/10 text-center space-y-1 hover:border-emerald-500/40 transition-all">
                <div className="text-2xl">{r.icon}</div>
                <div className="text-xs font-bold text-white truncate">{r.name}</div>
                <div className="text-[10px] font-mono text-emerald-400">{r.minScore.toLocaleString('it-IT')} PT</div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="text-center bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 p-8 sm:p-12 rounded-3xl border border-emerald-500/30 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">SEI PRONTO A GIOCARE?</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Avvia la demo live senza installazione oppure gioca l'applicazione completa dal tuo browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-105"
            >
              🎮 PROVA DEMO LIVE
            </button>
            <button
              onClick={() => setActiveScreen(user?.hasCompletedCalibration ? 'CATALOG' : 'ONBOARDING')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 border border-white/20 text-white font-bold text-base hover:bg-slate-800 transition-all transform hover:scale-105"
            >
              🚀 APRI WEB APP COMPLETA
            </button>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950/80 py-8 px-4 text-center text-xs text-slate-500 space-y-4">
        <div className="flex items-center justify-center gap-2 text-slate-300 font-bold">
          <span>🎵 TEN SECONDS</span>
          <span>•</span>
          <span className="text-emerald-400 font-mono">ten-seconds.com</span>
        </div>

        <div className="flex items-center justify-center gap-4 text-slate-400 flex-wrap">
          <a href="/privacy.html" target="_blank" className="hover:text-emerald-400 transition-colors">Norme sulla Privacy</a>
          <span>•</span>
          <a href="/terms.html" target="_blank" className="hover:text-emerald-400 transition-colors">Termini di Servizio</a>
          <span>•</span>
          <a href="/google7b791d0cebe59e04.html" target="_blank" className="hover:text-emerald-400 transition-colors">Verifica Google Cloud OAuth</a>
        </div>

        <div className="text-[11px] text-slate-600">
          © 2026 TEN SECONDS. Tutti i diritti riservati. Autenticazione protetta tramite Google OAuth e Supabase.
        </div>
      </footer>

      {/* Interactive Demo Modal */}
      <InteractiveDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
