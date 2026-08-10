import React, { useState } from 'react';
import { Play, Download, Sparkles, Trophy, Zap, Swords, Calendar, Music, ShieldCheck, Globe, ChevronRight, CheckCircle2, Star, ArrowRight, Smartphone, Layers, Server, Database, Lock, Cpu, Flame, Disc, Radio, Heart, Crown, Award, RefreshCw, Volume2, ExternalLink } from 'lucide-react';
import { LISTENER_RANKS, useGame } from '../context/GameContext';
import InteractiveDemoModal from './InteractiveDemoModal';

export default function PresentationPage() {
  const { setActiveScreen, user } = useGame();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const GAME_MODES_DOCS = [
    {
      id: 'catalog',
      title: 'A. Catalogo Standard (10 Brani Randomizzati)',
      icon: Disc,
      color: 'from-emerald-500 to-teal-700',
      badge: 'Archivio Sconfinato',
      desc: 'Scegli una playlist tematica e il sistema estrae 10 brani casuali da un catalogo ricchissimo in costante aggiornamento.',
      detail: 'Algoritmo Anti-Ripetizione: L\'app traccia lo storico di sessione garantendo la scoperta continua di nuovi brani ed artisti.'
    },
    {
      id: 'daily',
      title: 'B. Sfida del Giorno & Note Streak',
      icon: Calendar,
      color: 'from-amber-500 to-orange-700',
      badge: 'Bonus +1000 PT',
      desc: 'Una playlist speciale giornaliera da 10 brani disponibile ogni giorno per tutti i giocatori con punteggio maggiorato.',
      detail: 'Note Streak (Serie in Nota): Giocare ogni giorno incrementa il contatore consecutivo. Raggiungendo 7, 14, 21 o 30 giorni si sbloccano badge e bonus esclusivi.'
    },
    {
      id: 'pvp',
      title: 'C. Sfide 1v1 & Matchmaking Online',
      icon: Swords,
      color: 'from-purple-500 to-indigo-700',
      badge: 'Realtime Supabase',
      desc: 'Sfida diretta ad amici tramite codice stanza monouso (es. TEN-ROCK90-8820) o abbinamento istantaneo con avversari casuali online.',
      detail: 'Profilo Avversario: Scheda informativa in tempo reale con nazionalità, livello ed età dell\'avversario.'
    },
    {
      id: 'tournament',
      title: 'D. Modalità Torneo Multi-Giocatore',
      icon: Crown,
      color: 'from-fuchsia-500 to-pink-700',
      badge: '10, 15 o 20 Brani',
      desc: 'Durata della partita personalizzabile tra 10, 15 o 20 canzoni con invito diretto agli amici tramite codice dedicato.',
      detail: 'Premio Vincitore: Assegnazione della corona dorata del vincitore (+1 Crown Tag) nel palmarès del profilo.'
    },
    {
      id: 'offline',
      title: 'E. Modalità Offline (IndexedDB)',
      icon: Server,
      color: 'from-slate-600 to-slate-800',
      badge: 'Senza Connessione',
      desc: 'Riproduzione delle anteprime salvate in locale tramite IndexedDB per giocare anche in aereo o in assenza di rete internet.',
      detail: 'Sincronizzazione Differita: I punteggi ottenuti offline vengono automaticamente inviati ai server non appena torna la rete.'
    }
  ];

  const PLAYLISTS_MASTER = [
    { name: "Rock Anni '90", artists: "Nirvana, Radiohead, Oasis, Pearl Jam, Soundgarden..." },
    { name: "Pop Anni '80", artists: "Michael Jackson, Madonna, Prince, Wham!, Eurythmics..." },
    { name: "Grandi Successi Italiani", artists: "Vasco Rossi, Ligabue, Lucio Battisti, Måneskin, Cremonini..." },
    { name: "Dance Anni 2000", artists: "Eiffel 65, Gigi D'Agostino, Gabry Ponte, Daft Punk, Avicii..." },
    { name: "Hip Hop & Rap Legends", artists: "Eminem, 50 Cent, Caparezza, Fabri Fibra, Marracash..." },
    { name: "Disco & Funk Anni '70", artists: "Bee Gees, ABBA, Earth Wind & Fire, Donna Summer..." },
    { name: "Indie & Alternative Rock", artists: "Arctic Monkeys, The Killers, Franz Ferdinand, The Strokes..." },
    { name: "Cantautori Italiani", artists: "Fabrizio De André, Lucio Dalla, Rino Gaetano, De Gregori..." },
    { name: "Reggaeton & Hit Latine", artists: "Daddy Yankee, Bad Bunny, Don Omar, Shakira, J Balvin..." },
    { name: "Colonne Sonore Cinema", artists: "Ennio Morricone, Hans Zimmer, Queen, John Williams..." }
  ];

  return (
    <div className="min-h-screen bg-[#09090d] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden relative">
      
      {/* Dynamic Background Blurs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Glass Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
            <Zap className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-display font-black text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              TEN SECONDS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveScreen('CATALOG')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            ENTRA NELL'APP <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. PRESENTAZIONE HERO */}
        {/* ========================================================================= */}
        <section className="text-center space-y-8 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4" /> ⚡ IL QUIZ MUSICALE ARCADE DEFINITIVO
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-none">
              TEN SECONDS.<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                THE ULTIMATE MUSIC QUIZ
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Un'applicazione mobile e web quiz musicale arcade ad alto tasso di coinvolgimento, progettata per sfidare l'orecchio musicale dei giocatori in <strong className="text-emerald-400 font-semibold">sessioni rapide e serrate da 10 secondi per brano</strong>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:brightness-110 text-slate-950 font-black text-base uppercase tracking-wider shadow-2xl shadow-emerald-500/25 transition-all transform hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" /> PROVA LA DEMO
            </button>

            <a
              href="/TEN_SECONDS_DEMO.apk"
              download="TEN_SECONDS_DEMO.apk"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-white/15 text-white font-bold text-base transition-all transform hover:scale-105 flex items-center justify-center gap-2.5"
            >
              <Smartphone className="w-5 h-5 text-cyan-400" /> SCARICA APK ANDROID
            </a>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-4">
            
            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xl">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-white">Il gioco</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ascolta solo 10 secondi di una canzone e indovina il titolo o l'artista corretto scegliendo tra 4 opzioni prima che il timer circolare scada.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-xl">
                🎧
              </div>
              <h3 className="text-lg font-bold text-white">Un Archivio Sconfinato</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Un catalogo immenso in continua espansione ricco di hit e classici immortali: da <em>Nirvana, Michael Jackson, Vasco Rossi, Daft Punk, Eminem, Queen</em> e tantissimi altri.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xl">
                📱
              </div>
              <h3 className="text-lg font-bold text-white">Architettura Multi-Piattaforma</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Web App progressiva e App Nativa Android (APK/AAB per Google Play Store) costruita con tecnologia <strong>React 19 + Capacitor 8</strong>.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MODALITÀ DI GIOCO */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">🎮 LE MODALITÀ DI GIOCO</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Ogni modalità è pensata per adattarsi alle diverse esigenze di gioco: dal single player rapido al torneo multiplayer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAME_MODES_DOCS.map((m) => {
              const IconComp = m.icon;
              return (
                <div key={m.id} className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent space-y-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${m.color} text-white flex items-center justify-center shadow-md`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white leading-snug">{m.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                    💡 <strong className="text-slate-200">Dettaglio:</strong> {m.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. GAMIFICATION, 20 RANGHI & CLASSI PRO */}
        {/* ========================================================================= */}
        <section className="space-y-8 bg-slate-950/80 p-6 sm:p-10 rounded-3xl border border-white/10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" /> GAMIFICATION & PROGRESSIONE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">🏆 I 20 RANGHI DI ASCOLTO & CLASSI PRO</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Guadagna punti in ogni partita. Superati i 20 livelli ufficiali, sblocchi le <strong className="text-amber-300">Classi Pro</strong> (1 Classe Pro extra ogni 500.000 PT).
            </p>
          </div>

          {/* Ranks 20 Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {LISTENER_RANKS.map((r) => (
              <div key={r.level} className="bg-slate-900/90 p-3.5 rounded-2xl border border-white/10 text-center space-y-1 hover:border-amber-400/50 transition-all group">
                <div className="text-3xl group-hover:scale-110 transition-transform">{r.icon}</div>
                <div className="text-xs font-bold text-white truncate">{r.name}</div>
                <div className="text-[10px] font-mono text-emerald-400 font-bold">
                  {r.minScore.toLocaleString('it-IT')} PT
                </div>
                <div className="text-[9px] text-slate-500 font-mono">Livello {r.level}</div>
              </div>
            ))}
          </div>

          {/* Classi Pro Banner */}
          <div className="bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-amber-500/10 p-5 rounded-2xl border border-amber-400/30 flex items-center justify-between flex-wrap gap-4 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-300 uppercase">Classi Pro (Endgame)</div>
                <div className="text-xs text-slate-300">Oltre 2.000.000 PT sblocchi le Stelle delle Classi Pro per ogni 500.000 PT extra.</div>
              </div>
            </div>
            <div className="text-xs text-amber-400 font-bold bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/30">
              STAR ICON • CLASSE PRO 1+
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. DESIGN AESTHETICS & ESPERIENZA GRAFICA */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> DESIGN & INTERFACCIA
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">🎨 ESTETICA DARK NEON & ANIMAZIONI 120 FPS</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Un'esperienza visiva studiata per catturare l'attenzione fin dal primo secondo, costruita secondo le linee guida delle web app di alta gamma:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Dark Mode Cyberpunk (#09090d):</strong> Sfondi scuri rilassanti arricchiti da pannelli in Glassmorphism trasparente e sfocatura di sfondo.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Palette Colori Tailored:</strong> Emerald per il successo, Cyan per i match ed il timer, Gold per i tornei e i trofei, Rose per l'azione immediata.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Animazioni Arcade Hardware-Accelerated:</strong> Banner dinamici di Combo Popup (PERFETTO! 🎯, REAZIONE FULMINEA ⚡, 10 DI FILA! 🏆) fluidi a 60/120 FPS.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
            <div className="text-xs uppercase font-bold text-slate-400 flex items-center justify-between border-b border-white/10 pb-3">
              <span>Esempio Feedback In-Game</span>
              <span className="text-emerald-400 font-mono">120 FPS GPU</span>
            </div>

            <div className="space-y-3 font-mono">
              <div className="bg-emerald-500/20 border border-emerald-400/40 p-3 rounded-xl text-emerald-300 font-bold text-xs flex items-center justify-between">
                <span>⚡ REAZIONE FULMINEA!</span>
                <span>+350 PT</span>
              </div>
              <div className="bg-amber-500/20 border border-amber-400/40 p-3 rounded-xl text-amber-300 font-bold text-xs flex items-center justify-between">
                <span>🔥 5 DI FILA! IMBATTIBILE</span>
                <span>+100 PT BONUS</span>
              </div>
              <div className="bg-cyan-500/20 border border-cyan-400/40 p-3 rounded-xl text-cyan-300 font-bold text-xs flex items-center justify-between">
                <span>🏆 10 DI FILA! IMPECCABILE</span>
                <span>PERFECT!</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CATALOGO MUSICALE MASTER */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">🎧 CATALOGO UNIVERSE</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Un archivio ricchissimo suddiviso in playlist tematiche con risolutore Deezer e iTunes API.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PLAYLISTS_MASTER.map((pl, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">Playlist #{idx + 1}</div>
                <div className="text-sm font-bold text-white">{pl.name}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{pl.artists}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. MODELLO DI BUSINESS & MONETIZZAZIONE */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Piano Free & Vite */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-2xl font-black text-white">Piano Free & Sistema Vite ❤️</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Gli utenti Free ricevono **3 Vite** per giocare. Ogni partita consuma 1 Vita. Ricarica delle vite flessibile:
            </p>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Ricarica temporizzata automatica nel tempo.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Video Pubblicitari Rewarded (AdMob): +1 Vita Extra per spot.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Invita un Amico: +5 Vite Extra inviando un link.
              </li>
            </ul>
          </div>

          {/* Piano PRO */}
          <div className="glass-panel p-8 rounded-3xl border border-amber-400/40 bg-gradient-to-b from-amber-500/10 via-purple-500/10 to-transparent space-y-4 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-3 py-1 rounded-full">
              Consigliato
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Crown className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-2xl font-black text-amber-300">Abbonamento TEN SECONDS PRO ⚡</h3>
            <div className="text-3xl font-black font-mono text-white">
              2,90 € <span className="text-xs font-normal text-slate-400">/ mese (o 29,90 € / anno)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Vite illimitate senza alcuna attesa.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Zero annunci pubblicitari.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Accesso a tutte le playlist esclusive e Badge PRO sul profilo.
              </li>
            </ul>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 7. ARCHITETTURA TECNOLOGICA */}
        {/* ========================================================================= */}
        <section className="space-y-6 bg-slate-950 p-8 rounded-3xl border border-white/10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" /> STACK TECNOLOGICO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">🛠️ ARCHITETTURA TECNOLOGICA</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="text-emerald-400 font-bold uppercase">Frontend</div>
              <div className="text-white font-semibold text-sm">React 19 + Vite</div>
              <div className="text-slate-400 text-[11px]">Tailwind CSS, Lucide Icons, Canvas Confetti, Web Audio Synth.</div>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="text-cyan-400 font-bold uppercase">Backend & Realtime</div>
              <div className="text-white font-semibold text-sm">Supabase Backend</div>
              <div className="text-slate-400 text-[11px]">PostgreSQL Database, Realtime Channels per 1v1 e Google OAuth.</div>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="text-amber-400 font-bold uppercase">Mobile Framework</div>
              <div className="text-white font-semibold text-sm">Capacitor 8</div>
              <div className="text-slate-400 text-[11px]">Native Android Plugin, AdMob SDK, Native Google Auth Chooser.</div>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="text-purple-400 font-bold uppercase">Audio Resolver</div>
              <div className="text-white font-semibold text-sm">Deezer + iTunes API</div>
              <div className="text-slate-400 text-[11px]">Risolutore audio doppio per anteprime MP3 universali a 10s.</div>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950/90 py-8 px-4 text-center text-xs text-slate-500 space-y-4 relative z-10">
        <div className="flex items-center justify-center gap-2 text-slate-300 font-bold">
          <span>⚡ TEN SECONDS</span>
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
          © 2026 TEN SECONDS. Tutti i diritti riservati.
        </div>
      </footer>

      {/* Interactive Demo Modal */}
      <InteractiveDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
