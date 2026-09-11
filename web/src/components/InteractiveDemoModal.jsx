import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Volume2, Sparkles, CheckCircle2, XCircle, Zap, Trophy, X, Music, Disc3, Flame, Award } from 'lucide-react';
import { PLAYLISTS, generateChoicesForTrack } from '../services/curatedCatalog';
import { resolveAudioPreview } from '../services/audioResolver';
import confetti from 'canvas-confetti';

const DEMO_TRACKS_COUNT = 5;

export default function InteractiveDemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoTrackList, setDemoTrackList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [choices, setChoices] = useState([]);
  const [remainingTime, setRemainingTime] = useState(10.0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [status, setStatus] = useState('IDLE'); // IDLE | DIGGING | COUNTDOWN | PLAYING | RESULT | SUMMARY
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [prepCountdown, setPrepCountdown] = useState(0); // 3 | 2 | 1 | 0
  const [streak, setStreak] = useState(0);
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });
  const [comboBanner, setComboBanner] = useState(null);

  const audioRef = useRef(new Audio());
  const timerRef = useRef(null);
  const autoAdvanceRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Cancellation and Lifecycle Refs
  const isOpenRef = useRef(isOpen);
  const activeRunIdRef = useRef(0);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Web Audio Synth Sound Effects
  const playSoundEffect = (type) => {
    if (!isOpenRef.current) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      const now = ctx.currentTime;

      if (type === 'correct') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, index) => {
          const startTime = now + index * 0.07;
          const osc1 = ctx.createOscillator();
          const gain1 = ctx.createGain();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(freq, startTime);
          gain1.gain.setValueAtTime(0.18, startTime);
          gain1.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
          osc1.connect(gain1);
          gain1.connect(ctx.destination);
          osc1.start(startTime);
          osc1.stop(startTime + 0.25);
        });
      } else if (type === 'wrong') {
        [329.63, 261.63].forEach((freq, idx) => {
          const t = now + idx * 0.11;
          const osc1 = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const gain1 = ctx.createGain();
          osc1.type = 'sawtooth';
          osc1.frequency.setValueAtTime(freq, t);
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(2400, t);
          filter.frequency.exponentialRampToValueAtTime(350, t + 0.15);
          gain1.gain.setValueAtTime(0.6, t);
          gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
          osc1.connect(filter);
          filter.connect(gain1);
          gain1.connect(ctx.destination);
          osc1.start(t);
          osc1.stop(t + 0.16);
        });
      } else if (type === 'prep_tick') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now);
        gain.gain.setValueAtTime(0.24, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.10);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.11);
      }
    } catch (e) {}
  };

  // Complete Bulletproof Audio Teardown
  const stopAudio = () => {
    activeRunIdRef.current++;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
      } catch (e) {}
    }
    setIsPlaying(false);
  };

  const handleClose = () => {
    isOpenRef.current = false;
    stopAudio();
    onClose();
  };

  // Initialize a fresh 5-track demo playlist with background preloading
  const initDemoPlaylist = async () => {
    stopAudio();
    const currentRun = activeRunIdRef.current;

    const allTracks = [];
    PLAYLISTS.forEach(pl => {
      if (pl.tracks?.length) {
        allTracks.push(...pl.tracks);
      }
    });

    const shuffled = [...allTracks].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, DEMO_TRACKS_COUNT);

    setDemoTrackList(selected);
    setTrackIndex(0);
    setScore(0);
    setStreak(0);
    setStats({ correct: 0, wrong: 0 });
    setSelectedChoice(null);
    setComboBanner(null);
    setRemainingTime(10.0);
    setPrepCountdown(0);
    setIsAudioLoading(false);
    setStatus('IDLE');

    // PRELOAD ALL 5 DEMO TRACKS IN BACKGROUND INSTANTLY
    try {
      const resolvedList = await Promise.all(selected.map(async (t) => {
        const res = await resolveAudioPreview(t.artist, t.title);
        return {
          ...t,
          previewUrl: res?.previewUrl || t.previewUrl || null,
          artworkUrl: res?.artworkUrl || t.artworkUrl || null
        };
      }));

      if (isOpenRef.current && currentRun === activeRunIdRef.current) {
        setDemoTrackList(resolvedList);
      }
    } catch (e) {}
  };

  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) {
      initDemoPlaylist();
    } else {
      stopAudio();
    }
    return () => {
      isOpenRef.current = false;
      stopAudio();
    };
  }, [isOpen]);

  // Start sequence for a specific track index with strict cancellation checks
  const startTrackSequence = async (idx, tracks = demoTrackList) => {
    if (!tracks || !tracks[idx]) return;

    stopAudio();
    const currentRun = activeRunIdRef.current;

    const track = tracks[idx];
    setCurrentTrack(track);

    const options = generateChoicesForTrack(track, PLAYLISTS);
    setChoices(options);
    setSelectedChoice(null);
    setComboBanner(null);
    setRemainingTime(10.0);

    // 1. DIGGING / FAST AUDIO PRELOAD RESOLUTION
    setIsAudioLoading(true);
    setStatus('DIGGING');

    try {
      const resolved = await resolveAudioPreview(track.artist, track.title);
      if (!isOpenRef.current || currentRun !== activeRunIdRef.current) return;

      const previewUrl = resolved?.previewUrl || track?.previewUrl;
      if (previewUrl && audioRef.current) {
        audioRef.current.src = previewUrl;
        audioRef.current.volume = 0.85;
        audioRef.current.load();
        setIsPlaying(true);
      }
    } catch (e) {}

    if (!isOpenRef.current || currentRun !== activeRunIdRef.current) return;
    setIsAudioLoading(false);

    // 2. PREP COUNTDOWN 3..2..1 (With cancellation check after every step)
    setStatus('COUNTDOWN');
    setPrepCountdown(3);
    playSoundEffect('prep_tick');
    await new Promise(res => setTimeout(res, 500));
    if (!isOpenRef.current || currentRun !== activeRunIdRef.current) return;

    setPrepCountdown(2);
    playSoundEffect('prep_tick');
    await new Promise(res => setTimeout(res, 500));
    if (!isOpenRef.current || currentRun !== activeRunIdRef.current) return;

    setPrepCountdown(1);
    playSoundEffect('prep_tick');
    await new Promise(res => setTimeout(res, 500));
    if (!isOpenRef.current || currentRun !== activeRunIdRef.current) return;

    setPrepCountdown(0);

    // 3. START PLAYBACK & 10S TIMER
    setStatus('PLAYING');
    if (audioRef.current && audioRef.current.src) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }

    const startTime = Date.now();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isOpenRef.current || currentRun !== activeRunIdRef.current) {
        stopAudio();
        return;
      }

      const elapsed = (Date.now() - startTime) / 1000;
      const left = Math.max(0, 10.0 - elapsed);
      setRemainingTime(left);

      if (left <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        handleAnswer(null, idx, tracks); // Timeout
      }
    }, 50);
  };

  const handleStartDemoGame = () => {
    startTrackSequence(0, demoTrackList);
  };

  const handleAnswer = (choice, currentIdx = trackIndex, tracks = demoTrackList) => {
    stopAudio();
    const currentRun = activeRunIdRef.current;
    setSelectedChoice(choice);
    setStatus('RESULT');

    const targetTrack = tracks[currentIdx] || currentTrack;
    const isCorrect = choice && choice.title === targetTrack.title && choice.artist === targetTrack.artist;

    if (isCorrect) {
      playSoundEffect('correct');
      const timeRemaining = remainingTime;
      const speedPoints = Math.round((timeRemaining / 10.0) * 150);
      const pointsEarned = 200 + speedPoints;
      const newStreak = streak + 1;
      setScore(prev => prev + pointsEarned);
      setStreak(newStreak);
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));

      if (timeRemaining >= 7.0) {
        setComboBanner(`⚡ REAZIONE FULMINEA (+${pointsEarned} PT)`);
      } else if (newStreak >= 2) {
        setComboBanner(`🔥 SERIE ${newStreak}X (+${pointsEarned} PT)`);
      } else {
        setComboBanner(`🎯 ESATTO! (+${pointsEarned} PT)`);
      }

      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 }
      });
    } else {
      playSoundEffect('wrong');
      setStreak(0);
      setComboBanner(null);
      setStats(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    // Auto-advance to next track or summary after 1.5s feedback
    autoAdvanceRef.current = setTimeout(() => {
      if (!isOpenRef.current || currentRun !== activeRunIdRef.current) return;

      const nextIdx = currentIdx + 1;
      if (nextIdx < tracks.length) {
        setTrackIndex(nextIdx);
        startTrackSequence(nextIdx, tracks);
      } else {
        setStatus('SUMMARY');
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.55 }
        });
      }
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn select-none" onClick={handleClose}>
      <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 max-w-md w-full relative shadow-2xl space-y-5 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Neon Ambient Glow */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-slate-300 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Demo Live Giocabile
          </div>
          <h2 className="text-2xl font-black font-display text-white">TEN SECONDS DEMO</h2>
          {status !== 'SUMMARY' && (
            <div className="text-xs text-slate-300 font-semibold">
              Brano <span className="text-emerald-400 font-extrabold">{trackIndex + 1}</span> / {DEMO_TRACKS_COUNT}
            </div>
          )}
        </div>

        {/* Score & Streak Header Bar */}
        {status !== 'SUMMARY' && (
          <div className="grid grid-cols-2 gap-3 font-mono text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Punteggio</div>
              <div className="text-xl font-black text-emerald-400">{score.toLocaleString('it-IT')} PT</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Serie (Streak)</div>
              <div className="text-xl font-black text-cyan-400 flex items-center justify-center gap-1">
                🔥 {streak}
              </div>
            </div>
          </div>
        )}

        {/* Main Interactive Screen */}
        <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-5 text-center space-y-4 relative overflow-hidden">
          
          {/* Arcade Floating Combo Banner Popup */}
          {comboBanner && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg animate-bounce">
              {comboBanner}
            </div>
          )}

          {/* INITIAL SCREEN */}
          {status === 'IDLE' && (
            <div className="space-y-4 py-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center text-emerald-400 shadow-lg animate-pulse">
                <Music className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Pronto per la Sfida da 5 Brani?</h3>
                <p className="text-xs text-slate-300 mt-1">Ascolta 10 secondi per ogni brano, rispondi e metti alla prova il tuo orecchio!</p>
              </div>
              <button
                onClick={handleStartDemoGame}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:brightness-110 text-slate-950 font-black text-base uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" /> AVVIA
              </button>
            </div>
          )}

          {/* DIGGING / BUFFERING PHASE OR 3..2..1 COUNTDOWN */}
          {(status === 'DIGGING' || status === 'COUNTDOWN' || isAudioLoading || prepCountdown > 0) && (
            <div className="space-y-4 py-6">
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" className="text-slate-800" fill="transparent" />
                  {isAudioLoading || status === 'DIGGING' ? (
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-cyan-400 origin-center animate-spin"
                      fill="transparent"
                      strokeDasharray="90 211.59"
                      strokeLinecap="round"
                    />
                  ) : (
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-amber-400 transition-all duration-300"
                      fill="transparent"
                      strokeDasharray={301.59}
                      strokeDashoffset={301.59 * (1 - prepCountdown / 3.0)}
                      strokeLinecap="round"
                    />
                  )}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {isAudioLoading || status === 'DIGGING' ? (
                    <div className="flex flex-col items-center justify-center gap-1 animate-pulse">
                      <Disc3 className="w-8 h-8 text-cyan-400 animate-spin" />
                      <div className="text-[11px] font-black tracking-widest text-cyan-400 uppercase flex items-center justify-center">
                        <span>DIGGING</span>
                        <span className="inline-flex tracking-tighter w-3.5 text-left ml-0.5 font-mono">
                          <span className="animate-pulse">.</span>
                          <span className="animate-pulse delay-150">.</span>
                          <span className="animate-pulse delay-300">.</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <span className="font-mono font-black text-4xl text-amber-300 animate-bounce">
                      {prepCountdown}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-300 animate-pulse">
                {isAudioLoading || status === 'DIGGING' ? `Caricamento brano ${trackIndex + 1}/${DEMO_TRACKS_COUNT}...` : 'Preparati! Il brano sta per partire...'}
              </div>
            </div>
          )}

          {/* PLAYING PHASE */}
          {status === 'PLAYING' && prepCountdown === 0 && (
            <div className="space-y-4 py-1">
              {/* Circular Countdown Timer */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" className="text-slate-800" fill="transparent" />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="currentColor"
                    strokeWidth="8"
                    className={`transition-all duration-75 ${remainingTime <= 3 ? 'text-rose-500' : remainingTime <= 5 ? 'text-amber-400' : 'text-emerald-400'}`}
                    fill="transparent"
                    strokeDasharray={301.59}
                    strokeDashoffset={301.59 * (1 - remainingTime / 10.0)}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute font-mono font-black text-3xl text-white">
                  {remainingTime.toFixed(1)}s
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-cyan-300 animate-pulse font-semibold">
                <Volume2 className="w-4 h-4" /> Riproduzione traccia in corso...
              </div>

              {/* Choices Buttons */}
              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {choices.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(choice)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-emerald-500/25 border border-white/20 hover:border-emerald-400/60 text-left transition-all transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-between group shadow-md"
                  >
                    <div className="flex flex-col min-w-0 pr-3">
                      <span className="text-sm sm:text-base font-extrabold text-white truncate leading-tight">
                        {choice.title}
                      </span>
                      <span className="text-xs font-semibold text-emerald-300/90 truncate mt-0.5">
                        {choice.artist}
                      </span>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-emerald-400 text-slate-200 group-hover:text-slate-950 font-black text-xs flex items-center justify-center shrink-0 border border-white/10">
                      {String.fromCharCode(65 + idx)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ANSWER FEEDBACK OVERLAY */}
          {status === 'RESULT' && (
            <div className="space-y-4 py-4 animate-fadeIn">
              {selectedChoice && currentTrack && selectedChoice.title === currentTrack.title ? (
                <div className="space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/40 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-black text-emerald-400">ESATTO! 🎯</h3>
                  <p className="text-xs sm:text-sm text-white font-bold">
                    {currentTrack.title} — <span className="text-emerald-300">{currentTrack.artist}</span>
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-400/40">
                    <XCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-black text-rose-400">TEMPO SCADUTO O ERRATO!</h3>
                  {currentTrack && (
                    <p className="text-xs sm:text-sm text-white font-bold">
                      Era: <strong className="text-amber-300">{currentTrack.title}</strong> — {currentTrack.artist}
                    </p>
                  )}
                </div>
              )}

              <div className="text-xs text-cyan-400 animate-pulse font-bold">
                Passaggio al brano successivo...
              </div>
            </div>
          )}

          {/* MATCH SUMMARY SCREEN */}
          {status === 'SUMMARY' && (
            <div className="space-y-4 py-2 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 font-black text-2xl">
                🏆
              </div>
              <div>
                <h3 className="text-2xl font-black text-white font-display">PARTITA COMPLETATA! 🎉</h3>
                <p className="text-xs text-slate-300">Hai completato la Sfida Demo di 5 brani.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 font-mono">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Punteggio Totale</div>
                <div className="text-3xl font-black text-emerald-400">{score.toLocaleString('it-IT')} PT</div>
                
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                  <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                    <span className="text-emerald-400 font-bold">{stats.correct} / {DEMO_TRACKS_COUNT}</span>
                    <div className="text-[10px] text-slate-400">Corrette</div>
                  </div>
                  <div className="bg-rose-500/10 p-2 rounded-xl border border-rose-500/20">
                    <span className="text-rose-400 font-bold">{stats.wrong} / {DEMO_TRACKS_COUNT}</span>
                    <div className="text-[10px] text-slate-400">Errate</div>
                  </div>
                </div>
              </div>

              <button
                onClick={initDemoPlaylist}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <RotateCcw className="w-4 h-4" /> GIOCA UN'ALTRA PARTITA DEMO
              </button>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="text-center text-[11px] text-slate-500">
          Provala senza installazione su <strong className="text-slate-300">ten-seconds.com</strong>
        </div>
      </div>
    </div>
  );
}
