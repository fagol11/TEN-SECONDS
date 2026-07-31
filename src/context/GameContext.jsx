import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { PLAYLISTS, generateChoicesForTrack, getCalibrationTracks, getRandomizedTrackPool, ALL_MASTER_TRACKS } from '../services/curatedCatalog';
import { saveOfflineScore, getOfflineAudioUrl } from '../services/offlineStorage';
import { resolveAudioPreview, preloadAudio, getFastAudioUrl } from '../services/audioResolver';
import { supabase, signInWithGoogle, signOutSupabase } from '../services/supabaseClient';
import { createMatchSession } from '../services/matchService';
import { showRewardedAdForLife } from '../services/admobService';
import PlayerProfileModal from '../components/PlayerProfileModal';
import confetti from 'canvas-confetti';

const GameContext = createContext(null);

export const LISTENER_RANKS = [
  { level: 1, name: 'Suonatore di Citofono', minScore: 0, color: 'text-slate-400', icon: '🔔' },
  { level: 2, name: 'Singer da Doccia', minScore: 5000, color: 'text-slate-300', icon: '🚿' },
  { level: 3, name: 'Singer da Luna Piena', minScore: 15000, color: 'text-cyan-400', icon: '🌕' },
  { level: 4, name: 'Cacciatore di Hit', minScore: 35000, color: 'text-teal-400', icon: '🎵' },
  { level: 5, name: 'DJ del Venerdì Sera', minScore: 70000, color: 'text-emerald-400', icon: '📻' },
  { level: 6, name: 'Ascoltatore da Bus', minScore: 120000, color: 'text-green-400', icon: '🎧' },
  { level: 7, name: 'Orecchio Fino', minScore: 180000, color: 'text-lime-400', icon: '⚡' },
  { level: 8, name: 'Chitarrista da Falò', minScore: 260000, color: 'text-yellow-400', icon: '🎸' },
  { level: 9, name: 'Urla-in-Macchina Pro', minScore: 350000, color: 'text-amber-400', icon: '🚗' },
  { level: 10, name: 'Music Buff', minScore: 460000, color: 'text-orange-400', icon: '🔥' },
  { level: 11, name: 'Re del Karaoke', minScore: 580000, color: 'text-rose-400', icon: '🎤' },
  { level: 12, name: 'Tamburellatore da Scrivania', minScore: 720000, color: 'text-pink-400', icon: '🥁' },
  { level: 13, name: 'Producer da Salotto', minScore: 880000, color: 'text-fuchsia-400', icon: '🎛️' },
  { level: 14, name: 'Vinyl Wizard', minScore: 1050000, color: 'text-purple-400', icon: '👑' },
  { level: 15, name: 'Enciclopedia Vivente', minScore: 1230000, color: 'text-violet-400', icon: '🔮' },
  { level: 16, name: 'Audio Virtuoso', minScore: 1420000, color: 'text-indigo-400', icon: '🌟' },
  { level: 17, name: 'Rockstar Prodigy', minScore: 1620000, color: 'text-blue-400', icon: '💫' },
  { level: 18, name: 'Sonic Maestro', minScore: 1830000, color: 'text-cyan-300', icon: '🚀' },
  { level: 19, name: 'Shazam Umano', minScore: 2050000, color: 'text-emerald-300', icon: '🌌' },
  { level: 20, name: 'Legend of Sound', minScore: 2300000, color: 'text-yellow-300', icon: '🏆' },
];

export function getUserRankAndClasse(score) {
  let rankObj = LISTENER_RANKS[0];
  for (const r of LISTENER_RANKS) {
    if (score >= r.minScore) rankObj = r;
  }

  let classe = 0;
  if (score > 2300000) {
    classe = Math.floor((score - 2300000) / 500000) + 1;
  }

  return { ...rankObj, classe };
}

export function GameProvider({ children }) {
  // --- USER STATE ---
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('ten_seconds_user');
    const todayStr = new Date().toISOString().split('T')[0];
    
    if (saved) {
      const parsed = JSON.parse(saved);
      const isToday = parsed.lastDailyDate === todayStr;
      return {
        ...parsed,
        dailyCompletedToday: isToday,
        noteStreak: (parsed.lastDailyDate && parsed.noteStreak) ? parsed.noteStreak : 0,
        lives: parsed.lives !== undefined ? parsed.lives : 3,
        isPro: parsed.isPro || false,
        age: parsed.age || 25,
        nationality: parsed.nationality || 'Italia',
        flag: parsed.flag || '🇮🇹'
      };
    }

    return {
      name: 'Ospite',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      totalScore: 0,
      calibrationScore: 0,
      hasCompletedCalibration: false,
      rank: 'Suonatore di Citofono',
      friends: ['Marco_90', 'Elena_Rock', 'Giuseppe_Bass'],
      downloadedPlaylists: [],
      noteStreak: 0, // Initial note streak 0
      lastDailyDate: null,
      dailyCompletedToday: false,
      streakBadges: [],
      lives: 3, // Max 3 vite per utenti free
      isPro: false, // Account PRO con vite illimitate
      age: 25,
      nationality: 'Italia',
      flag: '🇮🇹'
    };
  });

  const [isLivesModalOpen, setIsLivesModalOpen] = useState(false);
  const [profileModalPlayer, setProfileModalPlayer] = useState(null);

  const openPlayerProfile = (playerData) => {
    setProfileModalPlayer(playerData || user);
  };

  // --- SCREEN NAVIGATION STATE ---
  // Screen options: 'ONBOARDING', 'CALIBRATION', 'CATALOG', 'GAME', 'CHALLENGE', 'LEADERBOARD', 'OFFLINE'
  const [activeScreen, setActiveScreen] = useState(() => {
    return user.hasCompletedCalibration ? 'CATALOG' : 'ONBOARDING';
  });

  // --- ONLINE / OFFLINE STATE ---
  const [isOfflineMode, setIsOfflineMode] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOfflineMode(false);
    const handleOffline = () => setIsOfflineMode(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Ensure HTML element uses dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  // [FIX E] Resume AudioContext on iOS/Safari when app returns from background
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Save user changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('ten_seconds_user', JSON.stringify(user));
  }, [user]);

  // --- AUTH SESSION LISTENER (Supabase & Google OAuth) ---
  useEffect(() => {
    // 1. Supabase Auth listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        const meta = session.user.user_metadata || {};
        const fullName = meta.full_name || meta.name || session.user.email?.split('@')[0] || 'Utente Google';
        const avatarUrl = meta.avatar_url || meta.picture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80';
        
        setUser(prev => ({
          ...prev,
          name: fullName,
          email: session.user.email,
          avatar: avatarUrl,
          hasCompletedCalibration: true
        }));
        setActiveScreen('CATALOG');
      }
    });

    // 2. Direct OAuth URL Hash listener fallback (#access_token=...)
    if (window.location.hash.includes('access_token=')) {
      const hashStr = window.location.hash.startsWith('#') ? window.location.hash.substring(1) : window.location.hash;
      const params = new URLSearchParams(hashStr);
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');

      if (accessToken) {
        supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || ''
        }).then(({ data, error }) => {
          if (data?.session?.user) {
            const meta = data.session.user.user_metadata || {};
            const fullName = meta.full_name || meta.name || data.session.user.email?.split('@')[0] || 'Fabrizio Goscè';
            const avatarUrl = meta.avatar_url || meta.picture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80';

            setUser(prev => ({
              ...prev,
              name: fullName,
              email: data.session.user.email,
              avatar: avatarUrl,
              hasCompletedCalibration: true
            }));
            setActiveScreen('CATALOG');
            window.history.replaceState(null, '', window.location.pathname);
          }
        }).catch(err => console.warn('Supabase setSession notice:', err));
      }
    }

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  // --- GAMEPLAY STATE ---
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [gameMode, setGameMode] = useState('STANDARD'); // 'STANDARD' | 'CALIBRATION' | 'CHALLENGE' | 'DAILY'
  const [currentChallengeId, setCurrentChallengeId] = useState(null);
  const [trackList, setTrackList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);

  // --- REAL-TIME MATCH SESSION (1v1 Live Challenges) ---
  const [matchSession, setMatchSession] = useState(null);
  const matchSessionRef = useRef(null);

  const startMatchSession = (matchCode, playlist, mode, customTracks, challengeId, targetCount) => {
    // Tear down any existing session
    if (matchSessionRef.current) {
      matchSessionRef.current.unsubscribe();
    }
    const playerInfo = {
      name: user.name,
      avatar: user.avatar,
      flag: user.flag || '🇮🇹',
    };
    const session = createMatchSession(matchCode, playerInfo);
    matchSessionRef.current = session;
    setMatchSession(session);
    // Now start the actual game
    startGame(playlist, mode, customTracks, challengeId, targetCount);
  };
  const [currentChoices, setCurrentChoices] = useState([]);
  
  const [roundScore, setRoundScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, totalTimeMs: 0, correctTimeMs: 0 });

  const [remainingTime, setRemainingTime] = useState(10.0);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [prepCountdown, setPrepCountdown] = useState(0); // 3 | 2 | 1 | 0
  const [scoreDetails, setScoreDetails] = useState({
    correctCount: 0,
    wrongCount: 0,
    basePoints: 0,
    avgCorrectTimeSec: 0,
    speedMultiplier: 1.0,
    speedBonusPoints: 0,
    streakBonusPoints: 0,
    dailyBonus: 0,
    finalTotalScore: 0,
  });

  const [roundStatus, setRoundStatus] = useState('IDLE'); // 'IDLE' | 'PLAYING' | 'ANSWERED' | 'SUMMARY'
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [answerFeedback, setAnswerFeedback] = useState(null); // 'CORRECT' | 'WRONG' | 'TIMEOUT' | 'SKIPPED'

  // --- AUDIO PLAYER & TIMER REFS ---
  const audioRef = useRef(new Audio());
  const timerIntervalRef = useRef(null);
  const prepIntervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const clearPrepInterval = () => {
    if (prepIntervalRef.current) {
      clearInterval(prepIntervalRef.current);
      prepIntervalRef.current = null;
    }
  };

  // Helper formula calcolo punteggio globale
  const computeScoreDetails = (currentStats, maxStreakCount, mode) => {
    const correctCount = currentStats.correct;
    const basePoints = correctCount * 1000;
    const avgCorrectTimeSec = correctCount > 0 
      ? Number((currentStats.correctTimeMs / 1000 / correctCount).toFixed(1))
      : 10.0;
    const rawMultiplier = 1.0 + Math.max(0, (10.0 - avgCorrectTimeSec) / 10.0) * 0.8;
    const speedMultiplier = Number(rawMultiplier.toFixed(2));
    const speedBonusPoints = Math.round(basePoints * (speedMultiplier - 1.0));
    const streakBonusPoints = maxStreakCount * 100;
    const dailyBonus = (mode === 'DAILY' && correctCount >= 10) ? 5000 : 0;
    const finalTotalScore = basePoints + speedBonusPoints + streakBonusPoints + dailyBonus;

    return {
      correctCount,
      wrongCount: currentStats.wrong,
      basePoints,
      avgCorrectTimeSec,
      speedMultiplier,
      speedBonusPoints,
      streakBonusPoints,
      dailyBonus,
      finalTotalScore,
    };
  };

  // Shared AudioContext for rich synth sound effects
  const audioCtxRef = useRef(null);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  };

  // Catchy, Rich Arcade Sound Synth Effects using Web Audio API
  const playSoundEffect = (type) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      if (type === 'correct') {
        // Triumphant 4-note ascending arcade sequence: C5 (523Hz) -> E5 (659Hz) -> G5 (784Hz) -> C6 (1046Hz)
        const notes = [523.25, 659.25, 783.99, 1046.50];
        
        notes.forEach((freq, index) => {
          const startTime = now + index * 0.07;
          
          // Main Sine Oscillator
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

          // Shimmer Triangle Harmonic
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(freq * 2, startTime);
          
          gain2.gain.setValueAtTime(0.06, startTime);
          gain2.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);
          
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          
          osc2.start(startTime);
          osc2.stop(startTime + 0.2);
        });

      } else if (type === 'wrong') {
        // High-Volume, Punchy Arcade Double-Tone (E4 329.63Hz -> C4 261.63Hz)
        [329.63, 261.63].forEach((freq, idx) => {
          const t = now + idx * 0.11;

          // Main Crisp Wave (Sawtooth + Lowpass filter at Gain 0.75)
          const osc1 = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const gain1 = ctx.createGain();
          osc1.type = 'sawtooth';
          osc1.frequency.setValueAtTime(freq, t);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(2400, t);
          filter.frequency.exponentialRampToValueAtTime(350, t + 0.15);

          gain1.gain.setValueAtTime(0.75, t);
          gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

          osc1.connect(filter);
          filter.connect(gain1);
          gain1.connect(ctx.destination);

          osc1.start(t);
          osc1.stop(t + 0.16);

          // Deep Sine Bass Layer for Solid Body (Gain 0.50)
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(freq * 0.5, t);
          gain2.gain.setValueAtTime(0.5, t);
          gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

          osc2.connect(gain2);
          gain2.connect(ctx.destination);

          osc2.start(t);
          osc2.stop(t + 0.16);
        });
      } else if (type === 'prep_tick') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5 tick
        gain.gain.setValueAtTime(0.24, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.10);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.11);
      }
    } catch (e) {
      console.warn('Sound effect synth error:', e);
    }
  };

  // --- TIMER MANAGEMENT ---
  const stopTimer = () => {
    clearPrepInterval();
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  // Web Audio API buffer store, active node ref & playback GainNode
  const audioBufferMapRef = useRef(new Map());
  const activeSourceNodeRef = useRef(null);
  const playbackGainRef = useRef(null);

  // [FIX BUG2] Stops ONLY audio playback without touching the game timer
  const stopAudioPlayback = () => {
    if (activeSourceNodeRef.current) {
      try {
        activeSourceNodeRef.current.stop();
        activeSourceNodeRef.current.disconnect();
      } catch (e) {}
      activeSourceNodeRef.current = null;
    }
    if (playbackGainRef.current) {
      try { playbackGainRef.current.disconnect(); } catch (e) {}
      playbackGainRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Full stop: audio + timer + prep interval
  const stopAudio = () => {
    stopTimer();
    stopAudioPlayback();
  };

  // Web Audio API Preload Pipeline: In-memory AudioBuffer decoding
  const preloadTrackAudioBuffer = async (track) => {
    if (!track) return null;
    const ctx = getAudioContext();
    if (!ctx) return null;

    let src = track.previewUrl;
    try {
      if (track.localAudioKey) {
        const localUrl = await getOfflineAudioUrl(track.localAudioKey);
        if (localUrl) src = localUrl;
      }

      if (!src || !track.artworkUrl) {
        const resolved = await resolveAudioPreview(track.artist, track.title);
        if (resolved) {
          if (!src && resolved.previewUrl) src = resolved.previewUrl;
          if (!track.artworkUrl && resolved.artworkUrl) track.artworkUrl = resolved.artworkUrl;
        }
      }

      if (!src) return null;
      const fastSrc = getFastAudioUrl(src);

      if (audioBufferMapRef.current.has(fastSrc)) {
        return audioBufferMapRef.current.get(fastSrc);
      }

      const resp = await fetch(fastSrc);
      const arrayBuf = await resp.arrayBuffer();
      const audioBuf = await ctx.decodeAudioData(arrayBuf);
      audioBufferMapRef.current.set(fastSrc, audioBuf);
      if (track.id) audioBufferMapRef.current.set(track.id, audioBuf);
      return audioBuf;
    } catch (e) {
      console.warn('[WebAudio] Preload/decode error for:', track.title, e);
      return null;
    }
  };

  // [FIX A] Preload match pool with limited concurrency (max 3 parallel fetches)
  const preloadMatchPoolBuffers = async (pool) => {
    if (!pool || !Array.isArray(pool)) return;
    const CONCURRENCY = 3;
    for (let i = 0; i < pool.length; i += CONCURRENCY) {
      const batch = pool.slice(i, i + CONCURRENCY);
      await Promise.allSettled(batch.map(t => preloadTrackAudioBuffer(t)));
    }
  };

  // [FIX D + C] Instant Playback via Web Audio API (0ms Latency) with GainNode fade-in & onended cleanup
  const playTrackAudioBuffer = async (track) => {
    stopAudioPlayback(); // [FIX BUG2] Only stop audio, not the timer
    const ctx = getAudioContext();
    let src = track?.previewUrl;
    if (track?.localAudioKey) {
      const localUrl = await getOfflineAudioUrl(track.localAudioKey);
      if (localUrl) src = localUrl;
    }
    const fastSrc = src ? getFastAudioUrl(src) : null;

    let cachedBuffer = (fastSrc && audioBufferMapRef.current.get(fastSrc)) ||
                       (track?.id && audioBufferMapRef.current.get(track.id));

    if (!cachedBuffer && track) {
      cachedBuffer = await preloadTrackAudioBuffer(track);
    }

    if (cachedBuffer && ctx) {
      try {
        const source = ctx.createBufferSource();
        source.buffer = cachedBuffer;

        // [FIX D] GainNode for smooth 50ms fade-in (avoids audio click artifact)
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 0.05);
        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        playbackGainRef.current = gainNode;

        source.start(0);
        activeSourceNodeRef.current = source;

        // [FIX C] Auto-cleanup when preview naturally ends (~30s)
        source.onended = () => {
          if (activeSourceNodeRef.current === source) {
            activeSourceNodeRef.current = null;
          }
          if (playbackGainRef.current === gainNode) {
            playbackGainRef.current = null;
          }
        };

        return true;
      } catch (e) {
        console.warn('[WebAudio] BufferSource start error:', e);
      }
    }

    // Fallback to HTML5 audio if Web Audio API buffer wasn't preloaded
    if (fastSrc && audioRef.current) {
      audioRef.current.src = fastSrc;
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch(e => console.warn('[Audio] HTML5 fallback play error:', e));
    }
    return false;
  };

  const startRoundTimer = () => {
    stopTimer();
    setIsAudioLoading(false);
    setRemainingTime(10.0);
    const startMs = Date.now();
    startTimeRef.current = startMs;
    const DURATION_MS = 10000;

    timerIntervalRef.current = setInterval(() => {
      const elapsedMs = Date.now() - startMs;
      const remainingMs = Math.max(0, DURATION_MS - elapsedMs);
      const remainingSec = +(remainingMs / 1000).toFixed(1);
      
      setRemainingTime(remainingSec);

      if (remainingMs <= 0) {
        stopTimer();
        handleTimeout();
      }
    }, 40);
  };

  // --- REWARD AD & PRO ACTIONS ---
  const watchRewardAd = async () => {
    try {
      await showRewardedAdForLife();
    } catch (e) {
      console.warn('[AdMob] Ad watch notice:', e);
    }
    setUser(prev => ({
      ...prev,
      lives: (prev.lives || 0) + 1
    }));
  };

  const toggleProStatus = () => {
    setUser(prev => ({
      ...prev,
      isPro: !prev.isPro,
      lives: 3
    }));
  };

  // --- INVITE FRIEND & CLAIM 5 EXTRA LIVES REWARD ---
  const inviteFriend = (friendName = 'Nuovo Amico') => {
    setUser(prev => {
      const currentFriends = prev.friends || [];
      const updatedFriends = currentFriends.includes(friendName) ? currentFriends : [...currentFriends, friendName];
      const newInvitedCount = (prev.invitedFriendsCount || 0) + 1;
      
      return {
        ...prev,
        friends: updatedFriends,
        lives: (prev.lives || 0) + 5, // Reward: +5 Vite Extra ❤️
        invitedFriendsCount: newInvitedCount,
        invitedFriends: [...(prev.invitedFriends || []), { name: friendName, date: new Date().toLocaleDateString('it-IT') }]
      };
    });
  };

  // --- RECORD WIN FOR CHALLENGE / TOURNAMENT ---
  const recordWin = (winType) => {
    setUser(prev => ({
      ...prev,
      challengesWon: winType === 'CHALLENGE' ? (prev.challengesWon || 0) + 1 : (prev.challengesWon || 0),
      tournamentsWon: winType === 'TOURNAMENT' ? (prev.tournamentsWon || 0) + 1 : (prev.tournamentsWon || 0),
    }));
  };

  const playedTrackIdsRef = useRef(new Set());

  // --- START A NEW GAME ---
  const startGame = (playlist, mode = 'STANDARD', customTracks = null, challengeId = null, targetCount = 10) => {
    clearAutoNextTimer();
    getAudioContext(); // Resume Web Audio API context on user gesture

    // [FIX BUG3] Clear AudioBuffer cache from previous match to prevent memory leak
    audioBufferMapRef.current.clear();

    // Check lives for Free users
    if (!user.isPro && (user.lives === undefined || user.lives <= 0)) {
      setIsLivesModalOpen(true);
      return;
    }

    // Consume 1 life for free users
    if (!user.isPro) {
      setUser(prev => ({
        ...prev,
        lives: Math.max(0, (prev.lives || 1) - 1)
      }));
    }

    let pool;
    if (customTracks && customTracks.length > 0) {
      pool = [...customTracks].sort(() => Math.random() - 0.5).slice(0, targetCount);
    } else {
      pool = getRandomizedTrackPool(playlist || PLAYLISTS[0], targetCount, playedTrackIdsRef.current);
    }

    setCurrentPlaylist(playlist || PLAYLISTS[0]);
    setGameMode(mode);
    setCurrentChallengeId(challengeId);
    setTrackList(pool);
    setTrackIndex(0);
    setRoundScore(0);
    setStreak(0);
    setMaxStreak(0);
    setStats({ correct: 0, wrong: 0, totalTimeMs: 0, correctTimeMs: 0 });
    setScoreDetails({
      correctCount: 0,
      wrongCount: 0,
      basePoints: 0,
      avgCorrectTimeSec: 0,
      speedMultiplier: 1.0,
      speedBonusPoints: 0,
      streakBonusPoints: 0,
      dailyBonus: 0,
      finalTotalScore: 0,
    });

    setActiveScreen(mode === 'CALIBRATION' ? 'CALIBRATION' : 'GAME');
    setupRound(0, pool, ALL_MASTER_TRACKS);
  };

  // --- RESTART GAME IN PROGRESS (-1 Vita per i free users) ---
  const restartGame = () => {
    if (!currentPlaylist) return false;

    // Check lives for Free users before restarting
    if (!user.isPro && (user.lives === undefined || user.lives <= 0)) {
      setIsLivesModalOpen(true);
      return false;
    }

    // Consume 1 life for free users on restart
    if (!user.isPro) {
      setUser(prev => ({
        ...prev,
        lives: Math.max(0, (prev.lives || 1) - 1)
      }));
    }

    const basePool = currentPlaylist?.tracks || trackList;
    const pool = [...basePool].sort(() => Math.random() - 0.5);
    const allCatalogPool = PLAYLISTS.flatMap(p => p.tracks);

    setTrackIndex(0);
    setRoundScore(0);
    setStreak(0);
    setMaxStreak(0);
    setStats({ correct: 0, wrong: 0, totalTimeMs: 0, correctTimeMs: 0 });

    // [FIX BUG3] Clear AudioBuffer cache on restart to prevent memory leak
    audioBufferMapRef.current.clear();

    setupRound(0, pool, allCatalogPool);
    return true;
  };

  // --- QUIT GAME IN PROGRESS ---
  const quitGame = () => {
    stopAudio();
    setRoundStatus('IDLE');
    setActiveScreen('CATALOG');
  };

  // --- START DAILY CHALLENGE ---
  const startDailyChallenge = () => {
    const allTracks = PLAYLISTS.flatMap(p => p.tracks);
    const shuffled = [...allTracks].sort(() => Math.random() - 0.5);
    const dailyPool = shuffled.slice(0, 10);
    startGame({ id: 'daily-challenge', title: 'Sfida del Giorno' }, 'DAILY', dailyPool);
  };

  // --- START CALIBRATION TEST ---
  const startCalibration = () => {
    const calibrationPool = getCalibrationTracks();
    startGame({ id: 'calibration', title: 'Test di Calibrazione' }, 'CALIBRATION', calibrationPool);
  };

  // --- SETUP INDIVIDUAL ROUND WITH AUDIO FALLBACK & RETRY ---
  const setupRound = async (index, pool, allPool) => {
    stopAudio();
    clearPrepInterval();

    if (index >= pool.length) {
      endGame();
      return;
    }

    const track = pool[index];
    const choices = generateChoicesForTrack(track, allPool || PLAYLISTS.flatMap(p => p.tracks));

    setSelectedChoice(null);
    setAnswerFeedback(null);
    setRemainingTime(10.0);
    setRoundStatus('PLAYING');
    setCurrentChoices(choices);

    // PRIMO BRANO (index === 0): Esegue il conto alla rovescia di preparazione 3..2..1 SOLO alla prima canzone
    if (index === 0) {
      setIsAudioLoading(true);

      // Precarica l'intero pool di brani in memoria Web Audio API in sottofondo
      preloadMatchPoolBuffers(pool);

      // Assicura il caricamento immediato del brano 1
      await preloadTrackAudioBuffer(track);
      setIsAudioLoading(false);

      let currentCount = 3;
      setPrepCountdown(3);
      playSoundEffect('prep_tick');

      prepIntervalRef.current = setInterval(() => {
        currentCount -= 1;
        setPrepCountdown(currentCount);

        if (currentCount > 0) {
          playSoundEffect('prep_tick');
        } else {
          clearPrepInterval();
          setPrepCountdown(0);
          playTrackAudioBuffer(track);
          startRoundTimer();
        }
      }, 750);
    } else {
      // BRANI DA 2 A 10: RIPRODUZIONE ISTANTANEA 0MS SENZA COUNTDOWN!
      setIsAudioLoading(false);
      setPrepCountdown(0);
      playTrackAudioBuffer(track);
      startRoundTimer();
    }
  };

  // Explicit manual audio trigger function for user tap
  const playAudio = () => {
    getAudioContext();
    const currentTrack = trackList[trackIndex];
    if (currentTrack) {
      playTrackAudioBuffer(currentTrack);
    }
  };

  // --- AUTO ADVANCE MANAGEMENT ---
  const autoNextTimeoutRef = useRef(null);

  const clearAutoNextTimer = () => {
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
  };

  const scheduleNextRound = (delayMs = 750) => {
    clearAutoNextTimer();
    autoNextTimeoutRef.current = setTimeout(() => {
      nextRoundRef.current();
    }, delayMs);
  };

  const [isConfettiActive, setIsConfettiActive] = useState(false);

  // Safe 60FPS GPU-accelerated confetti burst
  const triggerConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 700);
  };

  const [comboEvent, setComboEvent] = useState(null);

  // --- HANDLE USER CHOICE ---
  const submitAnswer = (choice) => {
    if (roundStatus !== 'PLAYING' || prepCountdown > 0) return;

    stopAudio();
    setSelectedChoice(choice);
    const timeSpent = 10.0 - remainingTime;
    const currentTrack = trackList[trackIndex];

    const isCorrect = choice.title === currentTrack.title && choice.artist === currentTrack.artist;

    if (isCorrect) {
      const newStreak = streak + 1;
      const updatedMaxStreak = Math.max(newStreak, maxStreak);

      const newStats = {
        ...stats,
        correct: stats.correct + 1,
        totalTimeMs: stats.totalTimeMs + (timeSpent * 1000),
        correctTimeMs: stats.correctTimeMs + (timeSpent * 1000),
      };
      setStats(newStats);

      const details = computeScoreDetails(newStats, updatedMaxStreak, gameMode);
      setScoreDetails(details);
      setRoundScore(details.finalTotalScore);

      if (matchSessionRef.current) {
        matchSessionRef.current.sendScoreUpdate({
          score: details.finalTotalScore,
          trackIndex,
          streak: newStreak,
        });
      }

      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setAnswerFeedback('CORRECT');
      playSoundEffect('correct');

      let titleText = 'NICE!';
      if (newStreak === 1) {
        const praiseList = ['NICE! 🎵', 'GREAT! ⚡', 'GOOD! 🌟', 'EXCELLENT! 🎯'];
        titleText = praiseList[Math.floor(Math.random() * praiseList.length)];
      } else if (newStreak >= 2 && newStreak < 10) {
        titleText = `${newStreak} IN A ROW! 🔥`;
      } else if (newStreak >= 10) {
        titleText = `10 IN A ROW! PERFECT 🏆`;
      }

      setComboEvent({
        id: Date.now(),
        streak: newStreak,
        title: titleText,
        points: 1000
      });

      triggerConfetti();
    } else {
      const newStats = {
        ...stats,
        wrong: stats.wrong + 1,
        totalTimeMs: stats.totalTimeMs + (timeSpent * 1000),
      };
      setStats(newStats);

      const details = computeScoreDetails(newStats, maxStreak, gameMode);
      setScoreDetails(details);
      setRoundScore(details.finalTotalScore);

      setStreak(0);
      setAnswerFeedback('WRONG');
      playSoundEffect('wrong');
    }

    setRoundStatus('ANSWERED');
    scheduleNextRound(450);
  };

  // --- SKIP ROUND ---
  const skipRound = () => {
    if (roundStatus !== 'PLAYING' || prepCountdown > 0) return;
    stopAudio();
    setStreak(0);
    setAnswerFeedback('SKIPPED');
    setRoundStatus('ANSWERED');
    scheduleNextRound(150);
  };

  // --- TIMEOUT HANDLER ---
  const handleTimeout = () => {
    stopAudio();
    setStreak(0);
    const newStats = {
      ...stats,
      wrong: stats.wrong + 1,
      totalTimeMs: stats.totalTimeMs + 10000,
    };
    setStats(newStats);
    const details = computeScoreDetails(newStats, maxStreak, gameMode);
    setScoreDetails(details);
    setRoundScore(details.finalTotalScore);

    setAnswerFeedback('TIMEOUT');
    playSoundEffect('wrong');
    setRoundStatus('ANSWERED');
    scheduleNextRound(450);
  };

  // --- NEXT ROUND ---
  const nextRound = () => {
    clearAutoNextTimer();
    const nextIdx = trackIndex + 1;
    setTrackIndex(nextIdx);
    setupRound(nextIdx, trackList);
  };

  const nextRoundRef = useRef(nextRound);
  useEffect(() => {
    nextRoundRef.current = nextRound;
  });

  // --- END GAME & CALCULATE RESULTS ---
  const endGame = () => {
    stopAudio();
    setRoundStatus('SUMMARY');

    // Check for Daily Challenge Perfect 10 Bonus (Punteggio Maggiorato)
    let dailyBonusPoints = 0;
    const isDailyPerfect = gameMode === 'DAILY' && (stats.correct >= 10 || (trackList.length > 0 && stats.correct === trackList.length));
    if (isDailyPerfect) {
      dailyBonusPoints = 5000; // Punteggio maggiorato se indovinate 10 su 10
    }

    const finalGameScore = roundScore + dailyBonusPoints;

    // High Score Calculation: Do NOT sum replay scores. Only add the improvement diff over previous best score!
    const playlistKey = gameMode === 'DAILY' ? 'daily' : (currentPlaylist?.id || 'standard');
    const existingBestScores = user.bestScores || {};
    const previousBest = existingBestScores[playlistKey] || 0;
    
    let scoreIncrease = 0;
    let newBestScores = { ...existingBestScores };

    if (finalGameScore > previousBest) {
      scoreIncrease = finalGameScore - previousBest;
      newBestScores[playlistKey] = finalGameScore;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    let newNoteStreak = user.noteStreak || 0;
    let extraBonusPoints = 0;
    let newBadges = [...(user.streakBadges || [])];

    if (gameMode === 'DAILY' && !user.dailyCompletedToday) {
      if (!user.lastDailyDate) {
        newNoteStreak = 1;
      } else {
        const lastDate = new Date(user.lastDailyDate);
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          newNoteStreak += 1;
        } else if (diffDays > 1) {
          newNoteStreak = 1;
        }
      }

      // Check Streak della Nota Milestones (7, 14, 21, 30 days)
      if (newNoteStreak === 7) {
        extraBonusPoints += 5000;
        newBadges.push('🎵 Settimana In Nota');
      } else if (newNoteStreak === 14) {
        extraBonusPoints += 12000;
        newBadges.push('⚡ Ritmo Inarrestabile');
      } else if (newNoteStreak === 21) {
        extraBonusPoints += 25000;
        newBadges.push('🌌 Sinfonia Continua');
      } else if (newNoteStreak >= 30 && newNoteStreak % 30 === 0) {
        extraBonusPoints += 60000;
        newBadges.push('👑 Mese in Armonia');
      }
    }

    const finalTotalScore = user.totalScore + scoreIncrease + extraBonusPoints;
    const finalRankInfo = getUserRankAndClasse(finalTotalScore);

    const isPerfectGame = stats.correct >= 10 || (trackList.length > 0 && stats.correct === trackList.length);

    const updatedUser = {
      ...user,
      totalScore: finalTotalScore,
      bestScores: newBestScores,
      totalGamesPlayed: (user.totalGamesPlayed || 0) + 1,
      perfectGamesCount: isPerfectGame ? (user.perfectGamesCount || 0) + 1 : (user.perfectGamesCount || 0),
      completedChallenges: currentChallengeId ? [...(user.completedChallenges || []), currentChallengeId] : (user.completedChallenges || []),
      rank: finalRankInfo.name,
      hasCompletedCalibration: gameMode === 'CALIBRATION' ? true : user.hasCompletedCalibration,
      calibrationScore: gameMode === 'CALIBRATION' ? finalGameScore : user.calibrationScore,
      lastDailyDate: gameMode === 'DAILY' ? todayStr : user.lastDailyDate,
      dailyCompletedToday: gameMode === 'DAILY' ? true : user.dailyCompletedToday,
      noteStreak: newNoteStreak,
      streakBadges: newBadges
    };

    setCurrentChallengeId(null);
    setUser(updatedUser);

    // Broadcast game over to opponent
    if (matchSessionRef.current) {
      matchSessionRef.current.sendGameOver({
        score: finalGameScore,
        correctAnswers: stats.correct,
        totalTracks: trackList.length,
      });
      matchSessionRef.current.unsubscribe();
      matchSessionRef.current = null;
      setMatchSession(null);
    }

    if (isOfflineMode) {
      saveOfflineScore({
        playlistId: currentPlaylist?.id || 'unknown',
        score: finalGameScore,
        mode: gameMode
      });
    }
  };

  const logoutUser = () => {
    signOutSupabase();
    setUser({
      name: 'Ospite',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      totalScore: 0,
      calibrationScore: 0,
      hasCompletedCalibration: false,
      rank: 'Suonatore di Citofono',
      friends: ['Marco_90', 'Elena_Rock', 'Giuseppe_Bass'],
      downloadedPlaylists: [],
      noteStreak: 1,
      lastDailyDate: null,
      dailyCompletedToday: false,
      streakBadges: [],
      lives: 3,
      isPro: false,
      age: 25,
      nationality: 'Italia',
      flag: '🇮🇹'
    });
    setActiveScreen('ONBOARDING');
  };

  return (
    <GameContext.Provider
      value={{
        user,
        setUser,
        activeScreen,
        setActiveScreen,
        isOfflineMode,
        
        // Gameplay
        currentPlaylist,
        gameMode,
        trackList,
        trackIndex,
        currentTrack: trackList[trackIndex] || null,
        currentChoices,
        remainingTime,
        isAudioLoading,
        prepCountdown,
        scoreDetails,
        roundStatus,
        selectedChoice,
        answerFeedback,
        isConfettiActive,
        comboEvent,
        roundScore,
        streak,
        maxStreak,
        stats,

        // Actions
        startGame,
        restartGame,
        quitGame,
        startDailyChallenge,
        startCalibration,
        submitAnswer,
        skipRound,
        nextRound,
        stopAudio,
        playAudio,
        playSoundEffect,
        isLivesModalOpen,
        setIsLivesModalOpen,
        watchRewardAd,
        toggleProStatus,
        inviteFriend,
        recordWin,
        openPlayerProfile,
        loginWithGoogle: signInWithGoogle,
        logoutSupabase: signOutSupabase,
        logoutUser,

        // Real-time multiplayer
        matchSession,
        startMatchSession,
      }}
    >
      {children}

      <PlayerProfileModal
        player={profileModalPlayer}
        isOpen={!!profileModalPlayer}
        onClose={() => setProfileModalPlayer(null)}
      />
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
