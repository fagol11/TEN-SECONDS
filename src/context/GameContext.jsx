import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { PLAYLISTS, generateChoicesForTrack, getCalibrationTracks } from '../services/curatedCatalog';
import { saveOfflineScore, getOfflineAudioUrl } from '../services/offlineStorage';
import { resolveAudioPreview } from '../services/audioResolver';
import { supabase, signInWithGoogle, signOutSupabase } from '../services/supabaseClient';
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

  // Save user changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('ten_seconds_user', JSON.stringify(user));
  }, [user]);

  // --- GAMEPLAY STATE ---
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [gameMode, setGameMode] = useState('STANDARD'); // 'STANDARD' | 'CALIBRATION' | 'CHALLENGE' | 'DAILY'
  const [currentChallengeId, setCurrentChallengeId] = useState(null);
  const [trackList, setTrackList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentChoices, setCurrentChoices] = useState([]);
  
  const [roundScore, setRoundScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, totalTimeMs: 0 });

  const [remainingTime, setRemainingTime] = useState(10.0);
  const [roundStatus, setRoundStatus] = useState('IDLE'); // 'IDLE' | 'PLAYING' | 'ANSWERED' | 'SUMMARY'
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [answerFeedback, setAnswerFeedback] = useState(null); // 'CORRECT' | 'WRONG' | 'TIMEOUT' | 'SKIPPED'

  // --- AUDIO PLAYER & TIMER REFS ---
  const audioRef = useRef(new Audio());
  const timerIntervalRef = useRef(null);
  const startTimeRef = useRef(null);

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
        // Punchy Arcade Fail Buzz with downward pitch sweep and dual thud
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.35); // Rapid pitch drop to E2
        
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.38);

        // Sub-bass thud
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(120, now);
        subOsc.frequency.linearRampToValueAtTime(40, now + 0.3);
        
        subGain.gain.setValueAtTime(0.35, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
        
        subOsc.connect(subGain);
        subGain.connect(ctx.destination);
        
        subOsc.start(now);
        subOsc.stop(now + 0.32);
      }
    } catch (e) {
      console.warn('Sound effect synth error:', e);
    }
  };

  // --- TIMER MANAGEMENT ---
  const stopTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const stopAudio = () => {
    stopTimer();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const startRoundTimer = () => {
    stopTimer();
    setRemainingTime(10.0);
    startTimeRef.current = Date.now();

    timerIntervalRef.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 0.1) {
          stopTimer();
          handleTimeout();
          return 0.0;
        }
        return Math.max(0, +(prev - 0.1).toFixed(1));
      });
    }, 100);
  };

  // --- REWARD AD & PRO ACTIONS ---
  const watchRewardAd = () => {
    setUser(prev => ({
      ...prev,
      lives: Math.min(3, (prev.lives || 0) + 1)
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

  // --- START A NEW GAME ---
  const startGame = (playlist, mode = 'STANDARD', customTracks = null, challengeId = null) => {
    clearAutoNextTimer();
    getAudioContext(); // Resume Web Audio API context on user gesture

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

    const pool = customTracks || playlist?.tracks || PLAYLISTS[0].tracks;
    const allCatalogPool = PLAYLISTS.flatMap(p => p.tracks);

    setCurrentPlaylist(playlist);
    setGameMode(mode);
    setCurrentChallengeId(challengeId);
    setTrackList(pool);
    setTrackIndex(0);
    setRoundScore(0);
    setStreak(0);
    setMaxStreak(0);
    setStats({ correct: 0, wrong: 0, totalTimeMs: 0 });

    setActiveScreen(mode === 'CALIBRATION' ? 'CALIBRATION' : 'GAME');
    setupRound(0, pool, allCatalogPool);
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

    const pool = trackList && trackList.length > 0 ? trackList : currentPlaylist.tracks;
    const allCatalogPool = PLAYLISTS.flatMap(p => p.tracks);

    setTrackIndex(0);
    setRoundScore(0);
    setStreak(0);
    setMaxStreak(0);
    setStats({ correct: 0, wrong: 0, totalTimeMs: 0 });

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
    if (index >= pool.length) {
      endGame();
      return;
    }

    const track = pool[index];
    const choices = generateChoicesForTrack(track, allPool || PLAYLISTS.flatMap(p => p.tracks));

    setSelectedChoice(null);
    setAnswerFeedback(null);
    setRoundStatus('PLAYING');
    setCurrentChoices(choices);

    // Audio & Artwork setup
    try {
      let src = track.previewUrl;
      if (track.localAudioKey) {
        const localUrl = await getOfflineAudioUrl(track.localAudioKey);
        if (localUrl) src = localUrl;
      }

      // Dynamic fallback if previewUrl or artwork is missing
      if (!src || !track.artworkUrl) {
        const resolved = await resolveAudioPreview(track.artist, track.title);
        if (resolved) {
          if (!src && resolved.previewUrl) src = resolved.previewUrl;
          if (!track.artworkUrl && resolved.artworkUrl) track.artworkUrl = resolved.artworkUrl;
        }
      }

      if (src) {
        audioRef.current.pause();
        audioRef.current.src = src;
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1.0;
        
        // Auto fallback if playback fails or errors out
        audioRef.current.onerror = async () => {
          console.warn('[Audio] Primary URL error, fetching dynamic fallback for:', track.title);
          const fallback = await resolveAudioPreview(track.artist, track.title);
          if (fallback && fallback.previewUrl && fallback.previewUrl !== src) {
            audioRef.current.src = fallback.previewUrl;
            audioRef.current.play().catch(e => console.warn('[Audio] Fallback play error:', e));
          }
        };

        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(async (err) => {
            console.warn('[Audio] Autoplay blocked or error, trying iTunes fallback:', err);
            const fallback = await resolveAudioPreview(track.artist, track.title);
            if (fallback && fallback.previewUrl && fallback.previewUrl !== src) {
              audioRef.current.src = fallback.previewUrl;
              audioRef.current.play().catch(e => console.warn('[Audio] Retry play failed:', e));
            }
          });
        }
      }
    } catch (e) {
      console.warn('Audio play failed:', e);
    }

    startRoundTimer();
  };

  // Explicit manual audio trigger function for user tap
  const playAudio = () => {
    getAudioContext();
    if (audioRef.current) {
      if (audioRef.current.src) {
        audioRef.current.play().catch(e => console.warn('Manual play failed:', e));
      } else if (currentTrack) {
        resolveAudioPreview(currentTrack.artist, currentTrack.title).then(resolved => {
          if (resolved && resolved.previewUrl) {
            audioRef.current.src = resolved.previewUrl;
            audioRef.current.play().catch(e => console.warn('Resolved manual play failed:', e));
          }
        });
      }
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

  // Safe non-blocking confetti trigger for modern mobile webviews (Android 15/16/17 fix)
  const triggerConfetti = () => {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      try {
        confetti({
          particleCount: 30,
          spread: 60,
          ticks: 120,
          origin: { y: 0.7 },
          disableForReducedMotion: true,
          useWorker: false // Disable web worker thread delegation to prevent Android WebView freezing
        });
      } catch (e) {
        console.warn('Confetti animation warning:', e);
      }
    });
  };

  // --- HANDLE USER CHOICE ---
  const submitAnswer = (choice) => {
    if (roundStatus !== 'PLAYING') return;

    stopAudio();
    setSelectedChoice(choice);
    const timeSpent = 10.0 - remainingTime;
    const currentTrack = trackList[trackIndex];

    const isCorrect = choice.title === currentTrack.title && choice.artist === currentTrack.artist;

    if (isCorrect) {
      // Base score logic: Daily challenge uses basic 1,000 PT per correct song
      let points = 1000;
      const newStreak = streak + 1;

      if (gameMode === 'DAILY') {
        points = 1000; // Punteggio basico per canzone
      } else {
        const speedMultiplier = 0.5 + 0.5 * (remainingTime / 10.0);
        const streakMultiplier = 1 + (newStreak - 1) * 0.15;
        points = Math.round(1000 * speedMultiplier * streakMultiplier);
      }

      setRoundScore(prev => prev + points);
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setStats(prev => ({ ...prev, correct: prev.correct + 1, totalTimeMs: prev.totalTimeMs + (timeSpent * 1000) }));
      setAnswerFeedback('CORRECT');
      playSoundEffect('correct');

      triggerConfetti();
    } else {
      setStreak(0);
      setStats(prev => ({ ...prev, wrong: prev.wrong + 1, totalTimeMs: prev.totalTimeMs + (timeSpent * 1000) }));
      setAnswerFeedback('WRONG');
      playSoundEffect('wrong');
    }

    setRoundStatus('ANSWERED');
    scheduleNextRound(750);
  };

  // --- SKIP ROUND ---
  const skipRound = () => {
    if (roundStatus !== 'PLAYING') return;
    stopAudio();
    setStreak(0);
    setAnswerFeedback('SKIPPED');
    setRoundStatus('ANSWERED');
    scheduleNextRound(250);
  };

  // --- TIMEOUT HANDLER ---
  const handleTimeout = () => {
    stopAudio();
    setStreak(0);
    setStats(prev => ({ ...prev, wrong: prev.wrong + 1, totalTimeMs: prev.totalTimeMs + 10000 }));
    setAnswerFeedback('TIMEOUT');
    playSoundEffect('wrong');
    setRoundStatus('ANSWERED');
    scheduleNextRound(750);
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
        roundStatus,
        selectedChoice,
        answerFeedback,
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
        isLivesModalOpen,
        setIsLivesModalOpen,
        watchRewardAd,
        toggleProStatus,
        inviteFriend,
        recordWin,
        openPlayerProfile,
        loginWithGoogle: signInWithGoogle,
        logoutSupabase: signOutSupabase,
        logoutUser
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
