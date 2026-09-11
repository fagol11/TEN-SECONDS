import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { PLAYLISTS, generateChoicesForTrack, getCalibrationTracks, getRandomizedTrackPool, ALL_MASTER_TRACKS } from '../services/curatedCatalog';
import { saveOfflineScore, getOfflineAudioUrl, syncOfflineScores } from '../services/offlineStorage';
import { resolveAudioPreview, preloadAudio, getFastAudioUrl, isDeezerUrlExpired } from '../services/audioResolver';
import { 
  supabase, 
  signInWithGoogle, 
  signOutSupabase, 
  deleteUserAccountFromSupabase,
  saveScoreToSupabase, 
  saveUserProfileToSupabase,
  extractUserProfileFromAuth,
  sendFriendRequestToSupabase, 
  fetchIncomingFriendRequestsFromSupabase,
  fetchOutgoingFriendRequestsFromSupabase,
  fetchUserFriendsFromSupabase,
  removeFriendFromSupabase,
  respondToFriendRequestInSupabase, 
  subscribeToUserInbox,
  sendAsyncChallengeToSupabase,
  fetchAllUserChallengesFromSupabase,
  fetchIncomingChallengesFromSupabase,
  notifyChallengeCompletedInSupabase,
  sendAsyncTournamentToSupabase,
  fetchIncomingTournamentsFromSupabase,
  submitTournamentScoreToSupabase,
  fetchUserProfileFromSupabase,
  resetUserStatsInSupabase,
  getDeterministicPlayerCode,
  normalizeTournamentFromDb
} from '../services/supabaseClient';
import { createMatchSession } from '../services/matchService';
import { showRewardedAdForLife } from '../services/admobService';
import { refreshDailyCatalog, getTracksForPlaylistSession } from '../services/dynamicCatalogService';
import PlayerProfileModal from '../components/PlayerProfileModal';
import { initPushNotifications, showSystemNotification, syncFcmTokenToUser, getActiveFcmToken } from '../services/notificationService';
import confetti from 'canvas-confetti';

export function generatePlayerCode(emailOrId = null) {
  if (emailOrId) {
    return getDeterministicPlayerCode(emailOrId);
  }
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `TS-${code}`;
}

export const DEFAULT_USER = {
  name: 'Ospite',
  email: null,
  avatar: null,
  playerCode: null,
  totalScore: 0,
  calibrationScore: 0,
  hasCompletedCalibration: false,
  rank: 'Suonatore di Citofono',
  friends: [],
  downloadedPlaylists: [],
  noteStreak: 0,
  lastDailyDate: null,
  dailyCompletedToday: false,
  dailyScoresByDate: {},
  deathParadeScoresByDate: {},
  todayDailyScore: 0,
  todayDeathScore: 0,
  streakBadges: [],
  unlockedBadges: [],
  lives: 3,
  lastLifeRegenTime: Date.now(),
  isPro: false,
  age: 25,
  nationality: 'Italia',
  flag: '🇮🇹',
  personalBests: {},
  bestScores: {},
  totalGamesPlayed: 0,
  totalSongsGuessed: 0,
  totalWrongAnswers: 0,
  measuredCorrectAnswers: 0,
  totalCorrectTimeMs: 0,
  accuracyPercent: null,
  avgResponseTimeSec: null,
  perfectGamesCount: 0,
  challengesWon: 0,
  tournamentsWon: 0,
  deathParadeRecord: 0,
  deathParadePointsRecord: 0
};

const GameContext = createContext(null);

export const LISTENER_RANKS = [
  { level: 1, name: 'Suonatore di Citofono', minScore: 0, color: 'text-slate-400', icon: '🔔' },
  { level: 2, name: 'Singer da Doccia', minScore: 5000, color: 'text-slate-300', icon: '🚿' },
  { level: 3, name: 'Singer da Luna Piena', minScore: 15000, color: 'text-cyan-400', icon: '🌕' },
  { level: 4, name: 'Cacciatore di Hit', minScore: 30000, color: 'text-teal-400', icon: '🎵' },
  { level: 5, name: 'DJ del Venerdì Sera', minScore: 55000, color: 'text-emerald-400', icon: '📻' },
  { level: 6, name: 'Ascoltatore da Bus', minScore: 90000, color: 'text-green-400', icon: '🎧' },
  { level: 7, name: 'Orecchio Fino', minScore: 140000, color: 'text-lime-400', icon: '⚡' },
  { level: 8, name: 'Chitarrista da Falò', minScore: 210000, color: 'text-yellow-400', icon: '🎸' },
  { level: 9, name: 'Urla-in-Macchina Pro', minScore: 300000, color: 'text-amber-400', icon: '🚗' },
  { level: 10, name: 'Music Buff', minScore: 420000, color: 'text-orange-400', icon: '🔥' },
  { level: 11, name: 'Re del Karaoke', minScore: 570000, color: 'text-rose-400', icon: '🎤' },
  { level: 12, name: 'Tamburellatore da Scrivania', minScore: 750000, color: 'text-pink-400', icon: '🥁' },
  { level: 13, name: 'Producer da Salotto', minScore: 980000, color: 'text-fuchsia-400', icon: '🎛️' },
  { level: 14, name: 'Vinyl Wizard', minScore: 1280000, color: 'text-purple-400', icon: '👑' },
  { level: 15, name: 'Enciclopedia Vivente', minScore: 1650000, color: 'text-violet-400', icon: '🔮' },
  { level: 16, name: 'Audio Virtuoso', minScore: 2100000, color: 'text-indigo-400', icon: '🌟' },
  { level: 17, name: 'Rockstar Prodigy', minScore: 2650000, color: 'text-blue-400', icon: '💫' },
  { level: 18, name: 'Sonic Maestro', minScore: 3300000, color: 'text-cyan-300', icon: '🚀' },
  { level: 19, name: 'Cosmic Composer', minScore: 4100000, color: 'text-teal-300', icon: '🌌' },
  { level: 20, name: 'Dio della Musica', minScore: 5000000, color: 'text-amber-300', icon: '⚡' },
];

export function getUserRankAndClasse(score) {
  let rankObj = LISTENER_RANKS[0];
  for (const r of LISTENER_RANKS) {
    if (score >= r.minScore) rankObj = r;
  }

  let classe = 0;
  if (score > 5000000) {
    classe = Math.floor((score - 5000000) / 1000000) + 1;
  }

  return { ...rankObj, classe };
}

export function GameProvider({ children }) {
  // --- USER STATE ---
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('ten_seconds_user');
    const todayStr = new Date().toISOString().split('T')[0];
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const isToday = parsed.lastDailyDate === todayStr;
        let currentLives = parsed.lives !== undefined ? parsed.lives : 3;
        let lastRegen = parsed.lastLifeRegenTime || Date.now();
        
        // Calculate offline regenerated lives (+1 life every 30 mins up to max 3 for free users)
        if (!parsed.isPro && currentLives < 3) {
          const elapsedMinutes = (Date.now() - lastRegen) / 60000;
          if (elapsedMinutes >= 30) {
            const addedLives = Math.floor(elapsedMinutes / 30);
            currentLives = Math.min(3, currentLives + addedLives);
            lastRegen = Date.now();
          }
        }

        const isRealUser = Boolean(parsed.email && parsed.email !== '');
        const cleanFriends = Array.isArray(parsed.friends)
          ? parsed.friends.filter(f => !['Marco_90', 'Elena_Rock', 'Giuseppe_Bass'].includes(f) && (!isRealUser || !['Marco Rossi', 'Giulia Bianchi', 'Luca Beatmaster', 'Elena Sound'].includes(f)))
          : (isRealUser ? [] : ['Marco Rossi', 'Giulia Bianchi', 'Luca Beatmaster', 'Elena Sound']);

        const playerCode = parsed.playerCode || generatePlayerCode();
        const dailyScoresByDate = parsed.dailyScoresByDate || {};
        const deathParadeScoresByDate = parsed.deathParadeScoresByDate || {};
        const todayDailyScore = dailyScoresByDate[todayStr] || 0;
        const todayDeathScore = deathParadeScoresByDate[todayStr] || 0;

        return {
          ...DEFAULT_USER,
          ...parsed,
          playerCode,
          dailyCompletedToday: isToday || Boolean(todayDailyScore > 0),
          dailyScoresByDate,
          deathParadeScoresByDate,
          todayDailyScore,
          todayDeathScore,
          noteStreak: (parsed.lastDailyDate && parsed.noteStreak) ? parsed.noteStreak : 0,
          lives: currentLives,
          lastLifeRegenTime: lastRegen,
          isPro: parsed.isPro || false,
          age: parsed.age || 25,
          nationality: parsed.nationality || 'Italia',
          flag: parsed.flag || '🇮🇹',
          friends: cleanFriends,
          personalBests: parsed.personalBests || {},
          deathParadeRecord: parsed.deathParadeRecord || parsed.personalBests?.deathParade || 0,
          deathParadePointsRecord: parsed.deathParadePointsRecord || parsed.personalBests?.deathParadePoints || 0
        };
      } catch(e) {}
    }

    return { ...DEFAULT_USER, playerCode: generatePlayerCode() };
  });

  const [isLivesModalOpen, setIsLivesModalOpen] = useState(false);
  const [profileModalPlayer, setProfileModalPlayer] = useState(null);

  const openPlayerProfile = async (playerData) => {
    const targetPlayer = playerData || user;

    // Apri subito il modal con i dati disponibili + flag di caricamento
    setProfileModalPlayer({ ...targetPlayer, _isLoadingStats: true });

    // Se e' l'utente corrente, i dati sono gia' completi nello stato user
    const isCurrentUser = (
      (targetPlayer?.email && user?.email &&
        targetPlayer.email.toLowerCase() === user.email.toLowerCase()) ||
      (targetPlayer?.playerCode && user?.playerCode &&
        targetPlayer.playerCode === user.playerCode) ||
      (!targetPlayer?.email && !playerData)
    );

    if (isCurrentUser) {
      setProfileModalPlayer({ ...user, _isLoadingStats: false });
      return;
    }

    // Per altri giocatori: query reale a profiles + user_stats
    const identifier = targetPlayer.user_id || targetPlayer.id ||
                       targetPlayer.user_email || targetPlayer.email ||
                       targetPlayer.user_name || targetPlayer.name;
    try {
      const richProfile = await fetchUserProfileFromSupabase(String(identifier || ''));
      if (richProfile) {
        setProfileModalPlayer(prev => ({
          ...prev,
          totalScore:              richProfile.totalScore,
          totalSongsGuessed:       richProfile.totalSongsGuessed,
          totalWrongAnswers:       richProfile.totalWrongAnswers,
          measuredCorrectAnswers:  richProfile.measuredCorrectAnswers,
          totalCorrectTimeMs:      richProfile.totalCorrectTimeMs,
          accuracyPercent:         richProfile.accuracyPercent,
          avgResponseTimeSec:      richProfile.avgResponseTimeSec,
          gamesPlayed:             richProfile.totalGamesPlayed,
          noteStreak:              richProfile.noteStreak,
          deathParadeRecord:       richProfile.deathParadeRecord,
          deathParadePointsRecord: richProfile.deathParadePointsRecord,
          challengesWon:           richProfile.challengesWon,
          tournamentsWon:          richProfile.tournamentsWon,
          perfectGamesCount:       richProfile.perfectGamesCount,
          _isLoadingStats:         false,
        }));
      } else {
        setProfileModalPlayer(prev => ({ ...prev, _isLoadingStats: false }));
      }
    } catch (e) {
      setProfileModalPlayer(prev => ({ ...prev, _isLoadingStats: false }));
    }
  };

  // Mobile Active Screen: Show ONBOARDING (Login choice: Google or Demo) unless user is already authenticated with an email!
  const [activeScreen, setActiveScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash && (window.location.hash.includes('access_token=') || window.location.hash.includes('refresh_token='))) {
        return 'CATALOG';
      }
    }
    return (user?.email && user?.hasCompletedCalibration) ? 'CATALOG' : 'ONBOARDING';
  });

  // --- RESTORE PROFILE & SAVED SETTINGS FROM LOCAL CACHE OR CLOUD ---
  const restoreUserProfileData = async (email, initialMeta = {}) => {
    if (!email) return;
    let savedLocal = null;
    try {
      const cached = localStorage.getItem(`ten_seconds_profile_${email}`);
      if (cached) savedLocal = JSON.parse(cached);
    } catch(e) {}

    const cloud = await fetchUserProfileFromSupabase(email);
    const deterministicCode = getDeterministicPlayerCode(email);
    const authUuid = initialMeta.id || cloud?.id || null;

    // Clean base starting state (do NOT inherit random leftover state from previous users)
    const base = {
      ...DEFAULT_USER,
      id: authUuid,
      email: email,
      playerCode: deterministicCode,
      name: initialMeta.name || email.split('@')[0] || 'Giocatore',
      avatar: initialMeta.avatar || null,
      googleAvatar: initialMeta.googleAvatar || initialMeta.avatar || null,
      hasCompletedCalibration: true
    };

    // Merge savedLocal on top of base
    const withLocal = {
      ...base,
      ...(savedLocal || {}),
      id: authUuid || savedLocal?.id || null,
      email: email,
    };

    const todayStr = new Date().toISOString().split('T')[0];
    const mergedDailyScores = { ...(withLocal.dailyScoresByDate || {}), ...(cloud?.dailyScoresByDate || {}) };
    const mergedDeathScores = { ...(withLocal.deathParadeScoresByDate || {}), ...(cloud?.deathParadeScoresByDate || {}) };
    const todayDaily = mergedDailyScores[todayStr] || 0;
    const todayDeath = mergedDeathScores[todayStr] || 0;

    // Merge cloud on top of withLocal (preserve max values so local scores are never wiped by empty cloud records)
    const finalScore = Math.max(Number(cloud?.totalScore || 0), Number(withLocal.totalScore || 0));
    const finalGames = Math.max(Number(cloud?.totalGamesPlayed || 0), Number(withLocal.totalGamesPlayed || 0));
    const finalSongsGuessed = Math.max(Number(cloud?.totalSongsGuessed || 0), Number(withLocal.totalSongsGuessed || 0));
    const finalWrongAnswers = Number(cloud?.totalWrongAnswers ?? withLocal.totalWrongAnswers ?? 0);
    const finalMeasuredCorrect = Number(cloud?.measuredCorrectAnswers ?? withLocal.measuredCorrectAnswers ?? 0);
    const finalCorrectTimeMs = Number(cloud?.totalCorrectTimeMs ?? withLocal.totalCorrectTimeMs ?? 0);
    const finalAccuracy = cloud?.accuracyPercent ?? withLocal.accuracyPercent ?? (
      (finalMeasuredCorrect > 0 && finalMeasuredCorrect + finalWrongAnswers > 0)
        ? Number(((finalMeasuredCorrect / (finalMeasuredCorrect + finalWrongAnswers)) * 100).toFixed(1))
        : null
    );
    const finalAvgResponseTime = cloud?.avgResponseTimeSec ?? withLocal.avgResponseTimeSec ?? (
      (finalMeasuredCorrect > 0 && finalCorrectTimeMs > 0)
        ? Number((finalCorrectTimeMs / 1000 / finalMeasuredCorrect).toFixed(2))
        : null
    );
    const finalPerfect = Math.max(Number(cloud?.perfectGamesCount || 0), Number(withLocal.perfectGamesCount || 0));
    const finalChallenges = Math.max(Number(cloud?.challengesWon || 0), Number(withLocal.challengesWon || 0));
    const finalTournaments = Math.max(Number(cloud?.tournamentsWon || 0), Number(withLocal.tournamentsWon || 0));
    const finalDeathRecord = Math.max(Number(cloud?.deathParadeRecord || 0), Number(withLocal.deathParadeRecord || 0));
    const finalDeathPoints = Math.max(Number(cloud?.deathParadePointsRecord || 0), Number(withLocal.deathParadePointsRecord || 0));
    const finalNoteStreak = Math.max(Number(cloud?.noteStreak || 0), Number(withLocal.noteStreak || 0));
    const finalLastDaily = cloud?.lastDailyDate || withLocal.lastDailyDate || null;
    const finalAvatar = cloud?.avatar || savedLocal?.avatar || initialMeta.avatar || withLocal.avatar || null;
    const finalGoogleAvatar = initialMeta.googleAvatar || initialMeta.avatar || cloud?.avatar || null;
    const isDailyCompleted = (finalLastDaily === todayStr) || (todayDaily > 0);

    const finalUser = {
      ...withLocal,
      ...(cloud || {}),
      id: authUuid || cloud?.id || withLocal.id || null,
      email: email,
      playerCode: deterministicCode,
      name: cloud?.name || savedLocal?.name || initialMeta.name || withLocal.name,
      avatar: finalAvatar,
      googleAvatar: finalGoogleAvatar,
      totalScore: finalScore,
      totalGamesPlayed: finalGames,
      totalSongsGuessed: finalSongsGuessed,
      totalWrongAnswers: finalWrongAnswers,
      measuredCorrectAnswers: finalMeasuredCorrect,
      totalCorrectTimeMs: finalCorrectTimeMs,
      accuracyPercent: finalAccuracy,
      avgResponseTimeSec: finalAvgResponseTime,
      perfectGamesCount: finalPerfect,
      challengesWon: finalChallenges,
      tournamentsWon: finalTournaments,
      deathParadeRecord: finalDeathRecord,
      deathParadePointsRecord: finalDeathPoints,
      noteStreak: finalNoteStreak,
      lastDailyDate: finalLastDaily,
      dailyCompletedToday: isDailyCompleted,
      dailyScoresByDate: mergedDailyScores,
      deathParadeScoresByDate: mergedDeathScores,
      todayDailyScore: todayDaily,
      todayDeathScore: todayDeath,
      hasCompletedCalibration: true
    };

    setUser(finalUser);
    try {
      localStorage.setItem('ten_seconds_user', JSON.stringify(finalUser));
      localStorage.setItem(`ten_seconds_profile_${email}`, JSON.stringify(finalUser));
    } catch(e) {}

    // Ensure user row exists in Supabase so new users are indexed immediately
    saveUserProfileToSupabase(finalUser).catch(() => {});
    syncFcmTokenToUser().catch(() => {});
    syncSocialData(finalUser).catch(() => {});

    return finalUser;
  };

  // --- UPDATE USER PROFILE IN-APP (PERSISTS TO LOCAL STORAGE + SUPABASE PROFILES) ---
  const updateUserProfile = async (fields = {}) => {
    const updated = {
      ...user,
      ...fields,
      playerCode: user.email ? getDeterministicPlayerCode(user.email) : (user.playerCode || generatePlayerCode()),
      name: fields.name !== undefined ? fields.name : user.name,
      avatar: fields.avatar !== undefined ? fields.avatar : user.avatar,
      nationality: fields.nationality !== undefined ? fields.nationality : user.nationality,
      flag: fields.flag !== undefined ? fields.flag : user.flag,
    };
    setUser(updated);

    try {
      localStorage.setItem('ten_seconds_user', JSON.stringify(updated));
      if (updated.email) {
        localStorage.setItem(`ten_seconds_profile_${updated.email}`, JSON.stringify(updated));
      }
    } catch(e) {}

    // Persist display_name and avatar_url to Supabase profiles
    await saveUserProfileToSupabase(updated);
    syncFcmTokenToUser().catch(() => {});
    syncSocialData(updated).catch(() => {});
    return updated;
  };

  // --- RESET ALL STATS TO ZERO (FRESH START) ---
  const resetAllUserStats = async () => {
    const freshUser = {
      ...user,
      totalScore: 0,
      totalGamesPlayed: 0,
      totalSongsGuessed: 0,
      perfectGamesCount: 0,
      challengesWon: 0,
      tournamentsWon: 0,
      noteStreak: 0,
      lastDailyDate: null,
      deathParadeRecord: 0,
      deathParadePointsRecord: 0,
      dailyScoresByDate: {},
      deathParadeScoresByDate: {},
      todayDailyScore: 0,
      todayDeathScore: 0,
      personalBests: {},
      bestScores: {},
      unlockedBadges: [],
      streakBadges: [],
      lives: 3
    };
    setUser(freshUser);
    try {
      localStorage.setItem('ten_seconds_user', JSON.stringify(freshUser));
      if (freshUser.email) {
        localStorage.setItem(`ten_seconds_profile_${freshUser.email}`, JSON.stringify(freshUser));
      }
    } catch(e) {}

    // Reset stats server-side via Edge Function
    await resetUserStatsInSupabase();
    syncSocialData(freshUser).catch(() => {});
    return freshUser;
  };

  // --- ONLINE / OFFLINE STATE ---
  const [isOfflineMode, setIsOfflineMode] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOfflineMode(false);
      // Sync any scores accumulated while offline
      syncOfflineScores().then(count => {
        if (count > 0) console.log(`[Sync] ${count} offline scores synced`);
      }).catch(() => {});
    };
    const handleOffline = () => setIsOfflineMode(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Ensure HTML element uses dark mode & initialize daily dynamic catalog refresh
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    refreshDailyCatalog().catch(() => {});
  }, []);

  // Stop audio and timers whenever activeScreen leaves GAME or CALIBRATION
  useEffect(() => {
    if (activeScreen !== 'GAME' && activeScreen !== 'CALIBRATION') {
      stopAudio();
    }
  }, [activeScreen]);

  // Initialize Native Push Notifications & Handle Notification Tap Navigation
  useEffect(() => {
    initPushNotifications({
      onTokenReceived: (fcmToken) => {
        setUser(prev => {
          const updated = { ...prev, fcmToken };
          syncFcmTokenToUser().catch(() => {});
          return updated;
        });
      },
      onNotificationReceived: (notification) => {
        triggerInAppNotification({
          type: notification.data?.type || 'general',
          title: notification.title || 'Ten Seconds 🎵',
          message: notification.body || '',
          actionLabel: 'VISUALIZZA',
          onAction: () => setActiveScreen('CHALLENGE')
        });
      },
      onNotificationActionPerformed: (notification) => {
        setActiveScreen('CHALLENGE');
      }
    }).catch(() => {});
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

  // Save user changes to LocalStorage and per-account profile cache
  useEffect(() => {
    try {
      localStorage.setItem('ten_seconds_user', JSON.stringify(user));
      if (user?.email) {
        localStorage.setItem(`ten_seconds_profile_${user.email}`, JSON.stringify(user));
      }
    } catch(e) {}
  }, [user]);

  // --- AUTH SESSION LISTENER (Supabase & Google OAuth) ---
  useEffect(() => {
    const cleanUrlParams = () => {
      if (typeof window !== 'undefined') {
        const hasHashParams = window.location.hash && (window.location.hash.includes('access_token=') || window.location.hash.includes('error='));
        const hasSearchParams = window.location.search && (window.location.search.includes('error=') || window.location.search.includes('error_code=') || window.location.search.includes('code='));
        
        if (hasHashParams || hasSearchParams) {
          try {
            window.history.replaceState(null, '', window.location.pathname);
          } catch (e) {}
        }
      }
    };
    cleanUrlParams();

    // 0. Immediate local-to-cloud profile restore on app start
    const savedUserStr = typeof localStorage !== 'undefined' ? localStorage.getItem('ten_seconds_user') : null;
    if (savedUserStr) {
      try {
        const parsed = JSON.parse(savedUserStr);
        if (parsed?.email) {
          restoreUserProfileData(parsed.email, { name: parsed.name, avatar: parsed.avatar });
        } else if (parsed?.name && parsed.name !== 'Ospite' && parsed.name !== 'Giocatore Demo') {
          // If email was not stored locally, attempt cloud restore by username or playerCode
          fetchUserProfileFromSupabase(parsed.playerCode || parsed.name).then(cloudUser => {
            if (cloudUser && cloudUser.email) {
              restoreUserProfileData(cloudUser.email, { name: cloudUser.name, avatar: cloudUser.avatar });
            }
          }).catch(() => {});
        }
      } catch (e) {}
    }

    // 1. Initial Session Check on Mount (handles existing sessions & OAuth redirects)
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        const u = data.session.user;
        const { email, name, avatar, id } = extractUserProfileFromAuth(u);
        if (email) {
          restoreUserProfileData(email, { id, name, avatar });
          setActiveScreen('CATALOG');
        }
      }
      setTimeout(cleanUrlParams, 300);
    }).catch(err => console.warn('[Supabase Auth] Session check notice:', err));

    // 2. Realtime Auth State Listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        const { email, name, avatar, id } = extractUserProfileFromAuth(session.user);
        if (email) {
          restoreUserProfileData(email, { id, name, avatar });
          if (event === 'SIGNED_IN') {
            setActiveScreen('CATALOG');
          }
        }
      } else if (event === 'SIGNED_OUT') {
        setUser({ ...DEFAULT_USER });
        setActiveScreen('ONBOARDING');
      }

      setTimeout(cleanUrlParams, 300);
    });

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
  const roundRunIdRef = useRef(0);
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
    // In Death Parade: 100 pt base per risposta corretta; in altre modalità: 200 pt
    const pointsPerCorrect = mode === 'DEATH_PARADE' ? 100 : 200;
    const basePoints = correctCount * pointsPerCorrect;
    const avgCorrectTimeSec = correctCount > 0 
      ? Number((currentStats.correctTimeMs / 1000 / correctCount).toFixed(1))
      : 10.0;
    const rawMultiplier = 1.0 + Math.max(0, (10.0 - avgCorrectTimeSec) / 10.0) * 0.8;
    const speedMultiplier = Number(rawMultiplier.toFixed(2));
    const speedBonusPoints = Math.round(basePoints * (speedMultiplier - 1.0));
    const streakBonusPoints = maxStreakCount * 20;
    const dailyBonus = (mode === 'DAILY' && correctCount >= 10) ? 1000 : 0;
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

  // Web Audio API Preload Pipeline: In-memory AudioBuffer decoding with safety timeout & auto-refresh
  const preloadTrackAudioBuffer = async (track) => {
    if (!track) return null;
    const ctx = getAudioContext();
    if (!ctx) return null;

    const cacheKey = track.id || `${track.artist}::${track.title}`;
    if (audioBufferMapRef.current.has(cacheKey)) {
      return audioBufferMapRef.current.get(cacheKey);
    }

    let src = track.previewUrl;
    try {
      if (track.localAudioKey) {
        const localUrl = await getOfflineAudioUrl(track.localAudioKey);
        if (localUrl) src = localUrl;
      }

      // If no src, Deezer token expired, or missing artwork, resolve freshly
      if (!src || isDeezerUrlExpired(src) || !track.artworkUrl) {
        try {
          const resolved = await resolveAudioPreview(track.artist, track.title);
          if (resolved) {
            if (resolved.previewUrl) {
              src = resolved.previewUrl;
              track.previewUrl = resolved.previewUrl;
            }
            if (resolved.artworkUrl && !track.artworkUrl) {
              track.artworkUrl = resolved.artworkUrl;
            }
          }
        } catch (err) {}
      }

      if (!src) return null;

      const fetchAndDecode = async (targetUrl) => {
        const fastTarget = getFastAudioUrl(targetUrl);
        if (audioBufferMapRef.current.has(fastTarget)) {
          return audioBufferMapRef.current.get(fastTarget);
        }
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);
        try {
          const resp = await fetch(fastTarget, { signal: controller.signal });
          clearTimeout(timeoutId);
          if (!resp.ok) return null;
          const arrayBuf = await resp.arrayBuffer();
          if (!arrayBuf || arrayBuf.byteLength < 5000) return null;
          return await ctx.decodeAudioData(arrayBuf);
        } catch (e) {
          clearTimeout(timeoutId);
          return null;
        }
      };

      let audioBuf = await fetchAndDecode(src);

      // If fetch failed (e.g. 403 or network issue), re-resolve with fallback provider (iTunes/Deezer) and decode
      if (!audioBuf) {
        const fresh = await resolveAudioPreview(track.artist, track.title);
        if (fresh?.previewUrl && fresh.previewUrl !== src) {
          track.previewUrl = fresh.previewUrl;
          if (fresh.artworkUrl) track.artworkUrl = fresh.artworkUrl;
          audioBuf = await fetchAndDecode(fresh.previewUrl);
        }
      }

      if (audioBuf) {
        audioBufferMapRef.current.set(cacheKey, audioBuf);
        if (track.previewUrl) audioBufferMapRef.current.set(getFastAudioUrl(track.previewUrl), audioBuf);
        return audioBuf;
      }

      return null;
    } catch (e) {
      console.warn('[WebAudio] Preload/decode notice for:', track?.title, e);
      return null;
    }
  };

  // Look-ahead background preloader for upcoming tracks
  const preloadUpcomingTracks = (pool, startIndex = 0, count = 4) => {
    if (!pool || !Array.isArray(pool)) return;
    const upcoming = pool.slice(startIndex, startIndex + count);
    upcoming.forEach(t => {
      preloadTrackAudioBuffer(t).catch(() => {});
    });
  };

  // Instant Playback via Web Audio API (0ms Latency) with GainNode fade-in & onended cleanup + HTML5 fallback
  const playTrackAudioBuffer = async (track) => {
    stopAudioPlayback(); // Only stop audio, not the timer
    const ctx = getAudioContext();
    let src = track?.previewUrl;
    if (track?.localAudioKey) {
      const localUrl = await getOfflineAudioUrl(track.localAudioKey);
      if (localUrl) src = localUrl;
    }
    const cacheKey = track?.id || `${track?.artist}::${track?.title}`;
    let fastSrc = src ? getFastAudioUrl(src) : null;

    let cachedBuffer = (cacheKey && audioBufferMapRef.current.get(cacheKey)) ||
                       (fastSrc && audioBufferMapRef.current.get(fastSrc));

    if (!cachedBuffer && track) {
      cachedBuffer = await preloadTrackAudioBuffer(track);
      if (!fastSrc && track.previewUrl) {
        fastSrc = getFastAudioUrl(track.previewUrl);
      }
    }

    if (cachedBuffer && ctx) {
      try {
        const source = ctx.createBufferSource();
        source.buffer = cachedBuffer;

        // GainNode for smooth 50ms fade-in
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 0.05);
        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        playbackGainRef.current = gainNode;

        source.start(0);
        activeSourceNodeRef.current = source;

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

    // Fallback to HTML5 audio if Web Audio API buffer wasn't preloaded or decode failed
    if (fastSrc && audioRef.current) {
      try {
        audioRef.current.src = fastSrc;
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1.0;
        await audioRef.current.play();
        return true;
      } catch (e) {
        console.warn('[Audio] HTML5 fallback play error:', e);
      }
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
      const rewardEarned = await showRewardedAdForLife();
      if (rewardEarned) {
        setUser(prev => ({
          ...prev,
          lives: (prev.lives || 0) + 1
        }));
      }
    } catch (e) {
      console.warn('[AdMob] Ad watch failed — no reward granted:', e);
    }
  };

  // TEMPORANEO — rimuovere o disabilitare prima della release pubblica, sostituire con vera integrazione Google Play Billing
  const toggleProStatus = () => {
    setUser(prev => ({
      ...prev,
      isPro: !prev.isPro,
      lives: 3
    }));
  };

  // --- RANKS PROGRESSION MODAL STATE ---
  const [isRanksLadderOpen, setIsRanksLadderOpen] = useState(false);

  // --- IN-APP NOTIFICATION TOAST STATE ---
  const [inAppNotification, setInAppNotification] = useState(null);

  const triggerInAppNotification = (notif) => {
    setInAppNotification(notif);
  };

  const dismissInAppNotification = () => {
    setInAppNotification(null);
  };

  // --- ADD / REMOVE FRIEND MANAGEMENT, ASYNC CHALLENGES & TOURNAMENTS ---
  const [friendRequests, setFriendRequests] = useState([]);
  const [sentFriendRequests, setSentFriendRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('ten_seconds_sent_friend_requests');
      return saved ? JSON.parse(saved) : [];
    } catch(e) {
      return [];
    }
  });

  const [asyncChallenges, setAsyncChallenges] = useState(() => {
    try {
      const saved = localStorage.getItem('ten_seconds_async_challenges');
      return saved ? JSON.parse(saved) : [];
    } catch(e) {
      return [];
    }
  });
  const [asyncTournaments, setAsyncTournaments] = useState(() => {
    try {
      const saved = localStorage.getItem('ten_seconds_async_tournaments');
      return saved ? JSON.parse(saved) : [];
    } catch(e) {
      return [];
    }
  });

  const pendingOutboxChallengeRef = useRef(null);
  const pendingInboxResponseChallengeRef = useRef(null);
  const pendingTournamentMatchRef = useRef(null);

  // Sync sent friend requests to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ten_seconds_sent_friend_requests', JSON.stringify(sentFriendRequests));
    } catch(e) {}
  }, [sentFriendRequests]);

  // Sync challenges to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ten_seconds_async_challenges', JSON.stringify(asyncChallenges));
    } catch(e) {}
  }, [asyncChallenges]);

  // Sync tournaments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ten_seconds_async_tournaments', JSON.stringify(asyncTournaments));
    } catch(e) {}
  }, [asyncTournaments]);

  // Tracciamento locale degli inviti ai tornei letti dall'utente
  const [readTournamentInvites, setReadTournamentInvites] = useState(() => {
    try {
      const saved = localStorage.getItem('ten_seconds_read_tournament_invites');
      return saved ? JSON.parse(saved) : [];
    } catch(e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ten_seconds_read_tournament_invites', JSON.stringify(readTournamentInvites));
    } catch(e) {}
  }, [readTournamentInvites]);

  const markTournamentInviteAsRead = (tournamentId) => {
    if (!tournamentId) return;
    const tId = String(tournamentId);
    setReadTournamentInvites(prev => {
      if (prev.includes(tId)) return prev;
      return [...prev, tId];
    });
  };

  const markAllTournamentInvitesAsRead = (tournamentIds = null) => {
    setReadTournamentInvites(prev => {
      const targetIds = Array.isArray(tournamentIds) && tournamentIds.length > 0
        ? tournamentIds.map(String)
        : asyncTournaments.map(t => String(t.id));
      const combined = new Set([...prev, ...targetIds]);
      return Array.from(combined);
    });
  };

  // Calcolo del badge: compare SOLO se esiste almeno un invito non letto per un torneo attivo in cui l'utente non ha ancora giocato
  const hasUnreadTournamentInvites = useMemo(() => {
    if (!user || user.name === 'Ospite') return false;
    const myUserId = user.id ? String(user.id).toLowerCase() : null;
    const myEmail = user.email ? user.email.toLowerCase() : null;
    const myName = user.name ? user.name.toLowerCase() : null;
    const myCode = user.playerCode ? user.playerCode.toLowerCase() : null;

    return (asyncTournaments || []).some(t => {
      // 1. Solo tornei pendenti e non scaduti
      if (t.status !== 'pending') return false;
      if (t.expiresAt && Number(t.expiresAt) < Date.now()) return false;
      if (t.expires_at && Number(t.expires_at) < Date.now()) return false;

      // 2. Il creatore NON riceve il badge di invito per il proprio torneo
      const isCreator = (t.creator?.userId && myUserId && String(t.creator.userId).toLowerCase() === myUserId) ||
                        (t.creator?.email && myEmail && t.creator.email.toLowerCase() === myEmail) ||
                        (t.creator?.name && myName && t.creator.name.toLowerCase() === myName);
      if (isCreator) return false;

      // 3. Trova la partecipazione dell'utente corrente
      const myParticipant = Array.isArray(t.participants) ? t.participants.find(p => {
        const pUserId = p.userId ? String(p.userId).toLowerCase() : '';
        const pEmail = p.email ? String(p.email).toLowerCase() : '';
        const pIdent = p.identifier ? String(p.identifier).toLowerCase() : '';
        return (myUserId && pUserId === myUserId) ||
               (myEmail && pEmail === myEmail) ||
               (myCode && pIdent === myCode) ||
               (myName && pIdent === myName);
      }) : null;

      // 4. Se l'utente ha già giocato la manche, nessun badge
      if (myParticipant?.hasPlayed) return false;

      // 5. Verifica che l'utente sia un partecipante o tra gli invitati
      const invitedList = (t.invited_identifiers || t.invitedIdentifiers || []).map(i => String(i).toLowerCase());
      const isInvited = !!myParticipant || invitedList.some(id => 
        (myEmail && id === myEmail) || (myUserId && id === myUserId) || (myCode && id === myCode) || (myName && id === myName)
      );
      if (!isInvited) return false;

      // 6. Se l'invito è già stato aperto/letto dall'utente, nessun badge
      if (readTournamentInvites.includes(String(t.id))) return false;

      return true;
    });
  }, [asyncTournaments, readTournamentInvites, user]);

  const addFriend = (friendName) => {
    if (!friendName || !friendName.trim() || friendName === 'Ospite') return;
    const cleanName = friendName.trim();
    setUser(prev => {
      const currentFriends = prev.friends || [];
      if (currentFriends.includes(cleanName)) return prev;
      const updated = {
        ...prev,
        friends: [...currentFriends, cleanName]
      };
      try { localStorage.setItem('ten_seconds_user', JSON.stringify(updated)); } catch(e) {}
      return updated;
    });
  };

  const removeFriend = async (friendName) => {
    if (!friendName) return;
    setUser(prev => {
      const updated = {
        ...prev,
        friends: (prev.friends || []).filter(f => f !== friendName)
      };
      try { localStorage.setItem('ten_seconds_user', JSON.stringify(updated)); } catch(e) {}
      return updated;
    });
    try {
      await removeFriendFromSupabase(user, friendName);
    } catch(e) {}
  };

  // Flag to avoid overlapping sync calls
  const isSyncingSocialRef = useRef(false);

  // Unified sync function for friend requests, cloud friends, challenges, and tournaments
  const syncSocialData = async (activeUser = user) => {
    if (!activeUser || activeUser.name === 'Ospite' || isSyncingSocialRef.current) return;
    isSyncingSocialRef.current = true;

    try {
      // 1. Incoming & Outgoing Friend Requests
      const reqs = await fetchIncomingFriendRequestsFromSupabase(activeUser);
      if (reqs) {
        setFriendRequests(reqs);
      }
      const outgoing = await fetchOutgoingFriendRequestsFromSupabase(activeUser);
      if (outgoing) {
        setSentFriendRequests(outgoing);
      }

      // 2. Refresh Cloud User Profile & Score
      if (activeUser.email) {
        const cloudProfile = await fetchUserProfileFromSupabase(activeUser.email);
        if (cloudProfile && cloudProfile.totalScore !== undefined) {
          setUser(prev => {
            const mergedScore = Math.max(Number(cloudProfile.totalScore || 0), Number(prev.totalScore || 0));
            const mergedGames = Math.max(Number(cloudProfile.totalGamesPlayed || 0), Number(prev.totalGamesPlayed || 0));
            const mergedDeath = Math.max(Number(cloudProfile.deathParadeRecord || 0), Number(prev.deathParadeRecord || 0));
            const mergedDeathPoints = Math.max(Number(cloudProfile.deathParadePointsRecord || 0), Number(prev.deathParadePointsRecord || 0));
            if (mergedScore !== prev.totalScore || cloudProfile.name !== prev.name || cloudProfile.avatar !== prev.avatar) {
              const synced = {
                ...prev,
                totalScore: mergedScore,
                totalGamesPlayed: mergedGames,
                deathParadeRecord: mergedDeath,
                deathParadePointsRecord: mergedDeathPoints,
                name: cloudProfile.name || prev.name,
                avatar: cloudProfile.avatar || prev.avatar,
              };
              try { localStorage.setItem('ten_seconds_user', JSON.stringify(synced)); } catch(e) {}
              return synced;
            }
            return prev;
          });
        }
      }

      // 3. Friends list (resolved names, deduplicated)
      if (activeUser.email) {
        const cloudFriends = await fetchUserFriendsFromSupabase(activeUser);
        if (cloudFriends) {
          setUser(prev => {
            const updated = { ...prev, friends: cloudFriends };
            try { localStorage.setItem('ten_seconds_user', JSON.stringify(updated)); } catch(e) {}
            return updated;
          });
        }
      }

      // 4. All Challenges (Received, Sent, Completed) from Supabase
      // 4. Turn-Based Asynchronous Challenges (48h)
      const allChallenges = await fetchAllUserChallengesFromSupabase(activeUser);
      if (allChallenges !== null) {
        const deletedKey = `ten_seconds_deleted_challenges_${activeUser.email || activeUser.name || 'guest'}`;
        let deletedIds = new Set();
        try {
          const savedDeleted = localStorage.getItem(deletedKey);
          if (savedDeleted) deletedIds = new Set(JSON.parse(savedDeleted));
        } catch (_) {}

        if (allChallenges.length === 0) {
          // Risposta valida con 0 sfide: il server ha autorità, svuota stato e cache locale
          setAsyncChallenges([]);
          try {
            localStorage.removeItem('ten_seconds_async_challenges');
          } catch (_) {}
        } else {
          setAsyncChallenges(prev => {
            const map = new Map();

            // (a) Base autoritativa: inserisci solo le sfide presenti nella risposta del server non cancellate
            allChallenges.forEach(c => {
              if (!deletedIds.has(c.id)) {
                map.set(c.id, c);
              }
            });

            // (b) Preserva solo sfide locali con status 'forfeited' o 'completed' più recenti del server
            // (es. forfait appena riscosso o vittoria appena registrata in locale prima del prossimo sync)
            prev.forEach(local => {
              if (deletedIds.has(local.id)) return;
              if (local.status === 'forfeited' || local.status === 'completed') {
                const serverItem = map.get(local.id);
                if (!serverItem || serverItem.status === 'pending') {
                  map.set(local.id, local);
                }
              }
              // NOTA: Qualsiasi sfida locale con status 'pending' che NON compare in allChallenges
              // viene automaticamente scartata ed esclusa, liberando la cache dalle sfide obsolete.
            });

            const merged = Array.from(map.values()).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
            try { localStorage.setItem('ten_seconds_async_challenges', JSON.stringify(merged)); } catch(e) {}
            return merged;
          });
        }
      }
      // Se allChallenges === null (errore di rete), la cache locale resta intatta

      // 5. Tournaments
      const allTournaments = await fetchIncomingTournamentsFromSupabase(activeUser);
      if (allTournaments !== null) {
        if (allTournaments.length === 0) {
          // Risposta valida con 0 tornei: svuota stato e cache locale
          setAsyncTournaments([]);
          setReadTournamentInvites([]);
          try {
            localStorage.removeItem('ten_seconds_async_tournaments');
            localStorage.removeItem('ten_seconds_read_tournament_invites');
          } catch (_) {}
        } else {
          // Pulizia notifiche locali/inviti riferiti a tornei cancellati, conclusi o già giocati
          setReadTournamentInvites(prev => {
            return prev.filter(id => {
              const serverTourn = allTournaments.find(t => String(t.id) === id);
              if (!serverTourn) return false; // Torneo cancellato su Supabase
              if (serverTourn.status === 'completed' || serverTourn.status === 'cancelled') return false; // Concluso
              const myP = Array.isArray(serverTourn.participants) ? serverTourn.participants.find(p => {
                const pUserId = p.userId ? String(p.userId).toLowerCase() : '';
                const pEmail = p.email ? String(p.email).toLowerCase() : '';
                return (activeUser.id && pUserId === String(activeUser.id).toLowerCase()) ||
                       (activeUser.email && pEmail === activeUser.email.toLowerCase());
              }) : null;
              if (myP?.hasPlayed) return false; // Già giocato dall'utente
              return true;
            });
          });

          setAsyncTournaments(prev => {
            const map = new Map();
            // (a) Base autoritativa: inserisci solo i tornei restituiti dal server
            allTournaments.forEach(t => map.set(t.id, t));

            // (b) Preserva solo tornei locali completati se il server li vede ancora in corso
            prev.forEach(local => {
              if (local.status === 'completed') {
                const serverItem = map.get(local.id);
                if (!serverItem || serverItem.status === 'pending' || serverItem.status === 'in_progress') {
                  map.set(local.id, local);
                }
              }
              // Qualsiasi torneo locale pending/obsoleto non presente sul server viene scartato
            });

            const merged = Array.from(map.values()).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
            try { localStorage.setItem('ten_seconds_async_tournaments', JSON.stringify(merged)); } catch(e) {}
            return merged;
          });
        }
      }
      // Se allTournaments === null (errore di rete), la cache locale resta intatta
    } catch (e) {
      console.warn('[GameContext] syncSocialData notice:', e);
    } finally {
      isSyncingSocialRef.current = false;
    }
  };

  // Sync social data immediately when user opens CHALLENGE screen
  useEffect(() => {
    if (activeScreen === 'CHALLENGE' && user && user.name !== 'Ospite') {
      syncSocialData(user);
    }
  }, [activeScreen]);

  // Sync real friend requests, challenges & tournaments, interval polling and listen for real-time notifications
  useEffect(() => {
    if (!user || user.name === 'Ospite') return;

    // Initial sync
    syncSocialData(user);

    // Periodic sync every 12 seconds when online and page is visible
    const syncInterval = setInterval(() => {
      if (navigator.onLine && document.visibilityState === 'visible') {
        syncSocialData(user);
      }
    }, 12000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && navigator.onLine) {
        syncSocialData(user);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const inboxSub = subscribeToUserInbox(user, {
      onFriendRequestReceived: (newReq) => {
        setFriendRequests(prev => {
          if (prev.some(r => r.id === newReq.id)) return prev;
          return [newReq, ...prev];
        });
        triggerInAppNotification({
          type: 'friend_request',
          title: '👥 Nuova Richiesta di Amicizia',
          message: `${newReq.sender_name || 'Un utente'} desidera aggiungerti agli amici!`,
          actionLabel: 'GESTISCI',
          onAction: () => setActiveScreen('CHALLENGE')
        });
        syncSocialData(user);
      },
      onFriendRequestResponse: ({ status, responder }) => {
        if (status === 'accepted' && responder?.name) {
          addFriend(responder.name);
          setSentFriendRequests(prev => prev.filter(r => 
            r.target_identifier?.toLowerCase() !== (responder.email || responder.name || '').toLowerCase()
          ));
          triggerInAppNotification({
            type: 'friend_accepted',
            title: '✨ Amicizia Accettata!',
            message: `${responder.name} è ora tra i tuoi amici. Puoi sfidarlo subito!`,
            actionLabel: 'SFIDA 1VS1',
            onAction: () => setActiveScreen('CHALLENGE')
          });
          syncSocialData(user);
        }
      },
      onChallengeReceived: (newChallenge) => {
        setAsyncChallenges(prev => {
          if (prev.some(c => c.id === newChallenge.id)) return prev;
          return [newChallenge, ...prev];
        });
        triggerInAppNotification({
          type: 'challenge_received',
          title: '🔥 Nuova Sfida 1vs1 Ricevuta!',
          message: `${newChallenge.challenger?.name || 'Un amico'} ti sfida su "${newChallenge.playlist?.title || 'una playlist'}" (${newChallenge.songCount || 10} brani)!`,
          actionLabel: 'GIOCA ORA',
          onAction: () => setActiveScreen('CHALLENGE')
        });
        syncSocialData(user);
      },
      onChallengeCompleted: (resultPayload) => {
        setAsyncChallenges(prev => prev.map(c => {
          if (c.id === resultPayload.challengeId) {
            return {
              ...c,
              status: 'completed',
              challengedScore: resultPayload.challengedScore,
              challengedCorrect: resultPayload.challengedCorrect,
              winner: resultPayload.winner,
              completedAt: Date.now()
            };
          }
          return c;
        }));

        // Notifica in-app pulita (nessuna notifica di sistema duplicata qui)
        const rawOpp = resultPayload.challengedName || resultPayload.challenged || '';
        let cleanOpp = 'un amico';
        if (rawOpp) {
          if (rawOpp.includes('@')) {
            const words = rawOpp.split('@')[0].replace(/[._+-]+/g, ' ').split(' ').filter(Boolean);
            cleanOpp = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
          } else {
            cleanOpp = rawOpp;
          }
        }
        const myName = (user?.name || '').toLowerCase();
        const myEmail = (user?.email || '').toLowerCase();
        const winnerStr = String(resultPayload.winner || '').toLowerCase();
        const isTie = winnerStr === 'tie';
        const isMeWinner = !isTie && (winnerStr === myName || (myEmail && winnerStr === myEmail));

        triggerInAppNotification({
          type: 'challenge_completed',
          title: '🏆 Esito Sfida 1vs1!',
          message: isTie
            ? `La sfida con ${cleanOpp} è finita in pareggio.`
            : (isMeWinner
                ? `Hai vinto la sfida 1vs1 contro ${cleanOpp}!`
                : `Hai perso la sfida 1vs1 contro ${cleanOpp}.`),
          actionLabel: 'VEDI RISULTATO',
          onAction: () => setActiveScreen('CHALLENGE')
        });
        syncSocialData(user);
      },
      onTournamentReceived: (newTourn) => {
        // Protezione difensiva: il creatore non deve MAI ricevere notifica di invito al proprio torneo
        const isCreator = (user.email && newTourn.creator?.email && user.email.toLowerCase() === newTourn.creator.email.toLowerCase()) ||
                          (user.id && newTourn.creator?.userId && user.id === newTourn.creator.userId);

        setAsyncTournaments(prev => {
          if (prev.some(t => t.id === newTourn.id)) return prev;
          return [newTourn, ...prev];
        });

        if (isCreator) return;

        const tId = newTourn?.id ? String(newTourn.id) : null;
        if (tId) {
          // L'invitato ha ricevuto un nuovo torneo: impostalo come non letto per far accendere il badge
          setReadTournamentInvites(prev => prev.filter(id => id !== tId));
        }

        triggerInAppNotification({
          type: 'tournament_received',
          title: '👑 Sei stato invitato a un Torneo!',
          message: `${newTourn.creator?.name || 'Un amico'} ti ha invitato al torneo "${newTourn.name}"!`,
          actionLabel: 'GIOCA MANCHE',
          onAction: () => setActiveScreen('CHALLENGE')
        });
        syncSocialData(user);
      },
      onTournamentUpdated: (updatedTourn) => {
        setAsyncTournaments(prev => prev.map(t => t.id === updatedTourn.id ? updatedTourn : t));
        if (updatedTourn.status === 'completed' && updatedTourn.winner?.name) {
          triggerInAppNotification({
            type: 'tournament_completed',
            title: '👑 Torneo Concluso!',
            message: `Il vincitore del torneo "${updatedTourn.name}" è ${updatedTourn.winner.name}!`,
            actionLabel: 'VEDI PODIO',
            onAction: () => setActiveScreen('CHALLENGE')
          });
        }
        syncSocialData(user);
      }
    });

    return () => {
      clearInterval(syncInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      inboxSub.unsubscribe();
    };
  }, [user?.name, user?.email]);

  const sendFriendRequest = async (targetIdentifier) => {
    if (!targetIdentifier || !targetIdentifier.trim()) return { error: 'Inserisci un indirizzo email o Codice Giocatore valido' };
    const cleanTarget = targetIdentifier.trim();

    if (user.email && user.email.toLowerCase() === cleanTarget.toLowerCase()) {
      return { error: 'Non puoi inviare una richiesta alla tua stessa email' };
    }
    if (user.playerCode && user.playerCode.toLowerCase() === cleanTarget.toLowerCase()) {
      return { error: 'Non puoi inviare una richiesta al tuo stesso Codice Giocatore' };
    }
    if (user.name && user.name.toLowerCase() === cleanTarget.toLowerCase()) {
      return { error: 'Non puoi inviare una richiesta al tuo stesso profilo' };
    }

    const res = await sendFriendRequestToSupabase({ sender: user, targetIdentifier: cleanTarget });
    if (!res?.error) {
      const newSent = {
        id: res.request?.id || res.id || `sent_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        target_identifier: cleanTarget,
        sent_at: Date.now(),
        status: 'pending'
      };
      setSentFriendRequests(prev => [
        newSent,
        ...prev.filter(r => r.target_identifier?.toLowerCase() !== cleanTarget.toLowerCase())
      ]);
    }
    return res;
  };

  const cancelFriendRequest = (requestId, targetIdentifier) => {
    setSentFriendRequests(prev => prev.filter(r => 
      r.id !== requestId && r.target_identifier?.toLowerCase() !== targetIdentifier?.toLowerCase()
    ));
  };

  const acceptFriendRequest = async (request) => {
    await respondToFriendRequestInSupabase(request.id, 'accepted', request, user);
    addFriend(request.sender_name);
    setFriendRequests(prev => prev.filter(r => r.id !== request.id));
  };

  const rejectFriendRequest = async (requestId) => {
    await respondToFriendRequestInSupabase(requestId, 'rejected', null, user);
    setFriendRequests(prev => prev.filter(r => r.id !== requestId));
  };

  // Launch a new challenge against an friend or random player
  const createAndStartAsyncChallenge = ({ targetFriend, playlist, songCount = 10, customTracks = null }) => {
    const baseTracks = customTracks || (playlist?.tracks || PLAYLISTS[0].tracks);
    const pool = [...baseTracks].sort(() => Math.random() - 0.5).slice(0, songCount);

    const challengeId = `ch_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const expiresAt = Date.now() + 48 * 3600 * 1000; // 48 Hours Expiration Window

    pendingOutboxChallengeRef.current = {
      challengeId,
      targetFriend: targetFriend || 'Giocatore Casuale',
      playlist,
      tracks: pool,
      songCount,
      expiresAt,
    };
    pendingInboxResponseChallengeRef.current = null;
    pendingTournamentMatchRef.current = null;

    startGame(playlist, 'CHALLENGE', pool, challengeId, songCount);
  };

  // Accept and play a received challenge from a friend or random opponent
  const respondToAsyncChallenge = async (challenge) => {
    if (challenge.expiresAt && Date.now() > challenge.expiresAt) {
      alert('Questa sfida è scaduta e non può più essere giocata. Puoi accettare la sconfitta per archiviarla.');
      return;
    }

    let activeChallenge = challenge;
    // Se la sfida ha avversario casuale (__RANDOM_OPPONENT__), assegna la sfida all'utente reale tramite Edge Function
    const isRandom = String(challenge.challenged || '').toUpperCase() === '__RANDOM_OPPONENT__';

    if (isRandom && user?.email) {
      try {
        const { data, error } = await supabase.functions.invoke('submit-challenge-score', {
          body: {
            type: 'claim',
            challengeId: challenge.id
          }
        });

        // Estrai l'errore dal body della risposta anche su status HTTP non-2xx (dove data è null)
        let errorBody = null;
        if (error && error.context && typeof error.context.json === 'function') {
          try {
            errorBody = await error.context.json();
          } catch (_) {}
        } else if (data) {
          errorBody = data;
        }

        // Se la chiamata fallisce o la sfida e' gia' stata presa, interrompi il gameplay SUBITO
        if (error || !data?.success) {
          const isAlreadyClaimed = errorBody?.error === 'already_claimed' ||
                                   errorBody?.error === 'already_claimed_or_completed' ||
                                   errorBody?.message?.toLowerCase().includes('già presa') ||
                                   errorBody?.message?.toLowerCase().includes('già accettata');

          const errMsg = isAlreadyClaimed
            ? 'Sfida già presa da un altro giocatore.'
            : (errorBody?.message || 'Sfida non più disponibile.');

          // Rimuovi la sfida dalla lista locale
          setAsyncChallenges(prev => prev.filter(c => c.id !== challenge.id));

          if (typeof window !== 'undefined' && window.alert) {
            window.alert(errMsg);
          }
          return;
        }

        if (data?.challenge) {
          activeChallenge = { ...challenge, ...data.challenge, challenged: user.email };
          setAsyncChallenges(prev => prev.map(c => c.id === challenge.id ? { ...c, challenged: user.email } : c));
        }
      } catch (err) {
        console.warn('[Challenge] Exception assegnazione sfida casuale:', err);
        setAsyncChallenges(prev => prev.filter(c => c.id !== challenge.id));
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Sfida già presa da un altro giocatore o non disponibile.');
        }
        return;
      }
    }

    pendingInboxResponseChallengeRef.current = activeChallenge;
    pendingOutboxChallengeRef.current = null;
    pendingTournamentMatchRef.current = null;

    startGame(activeChallenge.playlist, 'CHALLENGE', activeChallenge.tracks, activeChallenge.id, activeChallenge.songCount || activeChallenge.tracks.length);
  };

  // Create a new multi-user async tournament (48h expiration)
  const createAsyncTournament = async ({ name, playlist, songCount = 10, customTracks = null, invitedFriends = [] }) => {
    const baseTracks = customTracks || (playlist?.tracks || PLAYLISTS[0].tracks);
    const pool = [...baseTracks].sort(() => Math.random() - 0.5).slice(0, songCount);

    const tournamentId = `tourn_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const now = Date.now();
    const expiresAt = now + 48 * 3600 * 1000; // 48 Hours

    const creatorEmail = (user.email ? user.email.trim().toLowerCase() : null) || 'creator@tenseconds.app';
    const creatorName = user.name || 'Creatore';
    const creatorUserId = user.id || null;
    const creatorPlayerCode = user.playerCode ? user.playerCode.trim().toLowerCase() : null;

    const creatorParticipant = {
      userId: creatorUserId,
      identifier: creatorEmail || creatorUserId || creatorName,
      name: creatorName,
      email: creatorEmail,
      avatar: user.avatar || null,
      flag: user.flag || '🇮🇹',
      hasPlayed: false,
      score: 0,
      correct: 0,
      totalTimeMs: 0,
      playedAt: null,
      isCreator: true
    };

    // Filtra invitedFriends per rimuovere fin da subito eventuali riferimenti al creatore stesso
    const validInvitedFriends = (invitedFriends || []).filter(friend => {
      if (!friend) return false;
      const clean = typeof friend === 'string' ? friend.trim().toLowerCase() : '';
      if (creatorEmail && clean === creatorEmail) return false;
      if (creatorUserId && clean === String(creatorUserId).toLowerCase()) return false;
      if (creatorName && clean === creatorName.toLowerCase()) return false;
      if (creatorPlayerCode && clean === creatorPlayerCode) return false;
      return true;
    });

    const friendParticipants = (await Promise.all(validInvitedFriends.map(async (friend) => {
      const isEmail = typeof friend === 'string' && friend.includes('@');
      let name = isEmail ? friend.split('@')[0] : String(friend);
      let email = isEmail ? friend.trim().toLowerCase() : null;
      let userId = null;
      let avatar = null;

      try {
        const prof = await fetchUserProfileFromSupabase(friend);
        if (prof) {
          if (prof.id) userId = prof.id;
          if (prof.email) email = prof.email.trim().toLowerCase();
          if (prof.display_name || prof.name) name = prof.display_name || prof.name;
          if (prof.avatar || prof.avatar_url) avatar = prof.avatar || prof.avatar_url;
        }
      } catch (_) {}

      // Non includere tra i friendParticipants se corrisponde al creatore
      if (creatorUserId && userId && String(userId).toLowerCase() === String(creatorUserId).toLowerCase()) return null;
      if (creatorEmail && email && email === creatorEmail) return null;

      return {
        userId,
        identifier: email || userId || friend,
        name,
        email,
        avatar,
        flag: '🇮🇹',
        hasPlayed: false,
        score: 0,
        correct: 0,
        totalTimeMs: 0,
        playedAt: null,
        isCreator: false
      };
    }))).filter(Boolean);

    const allParticipants = [creatorParticipant, ...friendParticipants];

    // invited_identifiers deve contenere ESCLUSIVAMENTE gli invitati diversi dal creatore
    const invitedIdentifiers = Array.from(new Set([
      ...validInvitedFriends.map(f => typeof f === 'string' ? f.trim().toLowerCase() : null),
      ...friendParticipants.map(fp => fp.email ? fp.email.toLowerCase() : null),
      ...friendParticipants.map(fp => fp.userId ? String(fp.userId).toLowerCase() : null),
      ...friendParticipants.map(fp => fp.identifier ? String(fp.identifier).toLowerCase() : null)
    ])).filter(id => {
      if (!id) return false;
      const cleanId = String(id).trim().toLowerCase();
      if (creatorEmail && cleanId === creatorEmail) return false;
      if (creatorUserId && cleanId === String(creatorUserId).toLowerCase()) return false;
      if (creatorName && cleanId === creatorName.toLowerCase()) return false;
      if (creatorPlayerCode && cleanId === creatorPlayerCode) return false;
      return true;
    });

    const tournamentPayload = {
      id: tournamentId,
      name: name || `Torneo di ${creatorName}`,
      creator: {
        userId: creatorUserId,
        name: creatorName,
        email: creatorEmail,
        avatar: user.avatar || null,
        flag: user.flag || '🇮🇹',
        playerCode: user.playerCode || null
      },
      playlist: {
        id: playlist?.id || 'rock-90s',
        title: playlist?.title || 'Playlist',
        cover: playlist?.cover || null,
        badge: playlist?.badge || null,
        isSpotify: !!playlist?.isSpotify
      },
      tracks: pool,
      songCount,
      song_count: songCount,
      participants: allParticipants,
      invited_identifiers: invitedIdentifiers,
      createdAt: now,
      created_at: now,
      expiresAt,
      expires_at: expiresAt,
      status: 'pending',
      winner: null
    };

    // Sequenza garantita (identica a quella delle sfide 1vs1):
    // 1. Aspetta che sendAsyncTournamentToSupabase confermi l'INSERT su Supabase
    const insertResult = await sendAsyncTournamentToSupabase(tournamentPayload);

    if (insertResult?.success) {
      const finalTournament = normalizeTournamentFromDb(insertResult.dbRow || tournamentPayload) || tournamentPayload;
      setAsyncTournaments(prev => [finalTournament, ...prev.filter(t => t.id !== finalTournament.id)]);
      try {
        const saved = JSON.parse(localStorage.getItem('ten_seconds_async_tournaments') || '[]');
        const updated = [finalTournament, ...saved.filter(t => t.id !== finalTournament.id)];
        localStorage.setItem('ten_seconds_async_tournaments', JSON.stringify(updated));
      } catch (_) {}
      return { success: true, tournament: finalTournament };
    } else {
      console.warn('[Tournament] Errore inserimento torneo su Supabase:', insertResult?.error);
      return { success: false, error: insertResult?.error };
    }
  };

  // Launch and play a tournament match from the dedicated "AVVIA" button
  const startTournamentMatch = (tournament) => {
    pendingTournamentMatchRef.current = tournament;
    pendingOutboxChallengeRef.current = null;
    pendingInboxResponseChallengeRef.current = null;

    startGame(tournament.playlist, 'TOURNAMENT', tournament.tracks, tournament.id, tournament.songCount || tournament.tracks.length);
  };

  // Claim forfeit victory if friend didn't respond within 48h
  const claimForfeitVictory = async (challengeId) => {
    let targetCh = null;
    setAsyncChallenges(prev => {
      const updated = prev.map(c => {
        if (c.id === challengeId) {
          targetCh = c;
          return {
            ...c,
            status: 'forfeited',
            winner: user.name || user.email || 'Tu',
            completedAt: Date.now()
          };
        }
        return c;
      });
      try { localStorage.setItem('ten_seconds_async_challenges', JSON.stringify(updated)); } catch(e) {}
      return updated;
    });

    recordWin('CHALLENGE');

    // Persist to Supabase
    if (user?.email) {
      try {
        await supabase.functions.invoke('submit-challenge-score', {
          body: {
            type: 'forfeit',
            challengeId,
            action: 'claim_win'
          }
        });
      } catch (e) {
        console.warn('[GameContext] claimForfeitVictory edge invoke notice:', e);
      }
    }

    // Broadcast & FCM notify opponent
    if (targetCh) {
      const opponentIdentifier = typeof targetCh.challenged === 'string'
        ? targetCh.challenged
        : (targetCh.challenged?.email || targetCh.challenged?.name || '');
      if (opponentIdentifier && opponentIdentifier !== '__RANDOM_OPPONENT__') {
        notifyChallengeCompletedInSupabase(
          challengeId,
          { winner: user.name || user.email || 'Tu', status: 'forfeited' },
          { email: opponentIdentifier, name: opponentIdentifier }
        );
      }
    }
  };

  // Accept forfeit defeat on expired received challenge
  const acceptForfeitDefeat = async (challengeId) => {
    let targetCh = null;
    setAsyncChallenges(prev => {
      const updated = prev.map(c => {
        if (c.id === challengeId) {
          targetCh = c;
          const challengerName = c.challenger?.name || c.challenger?.email || 'Avversario';
          return {
            ...c,
            status: 'forfeited',
            winner: challengerName,
            completedAt: Date.now()
          };
        }
        return c;
      });
      try { localStorage.setItem('ten_seconds_async_challenges', JSON.stringify(updated)); } catch(e) {}
      return updated;
    });

    // Persist to Supabase
    if (user?.email) {
      try {
        const res = await supabase.functions.invoke('submit-challenge-score', {
          body: {
            type: 'forfeit',
            challengeId,
            action: 'accept_defeat'
          }
        });
        if (res.error) {
          // Fallback to role: 'challenged' with 0 score for deployed edge function
          await supabase.functions.invoke('submit-challenge-score', {
            body: {
              type: 'challenge',
              challengeId,
              role: 'challenged',
              correct: 0,
              wrong: targetCh?.songCount || 10,
              correctTimeMs: 0,
              totalTimeMs: 0,
              clientScore: 0
            }
          });
        }
      } catch (e) {
        console.warn('[GameContext] acceptForfeitDefeat edge invoke notice:', e);
      }
    }

    if (targetCh?.challenger) {
      notifyChallengeCompletedInSupabase(
        challengeId,
        { winner: targetCh.challenger?.name || targetCh.challenger?.email || 'Avversario', status: 'forfeited' },
        targetCh.challenger
      );
    }
  };

  // Delete / Hide Obsolete or Old Challenges from user list (no impact on personal stats)
  const deleteAsyncChallenge = (challengeId) => {
    if (!challengeId) return;
    const deletedKey = `ten_seconds_deleted_challenges_${user?.email || user?.name || 'guest'}`;
    try {
      const saved = JSON.parse(localStorage.getItem(deletedKey) || '[]');
      if (!saved.includes(challengeId)) {
        saved.push(challengeId);
        localStorage.setItem(deletedKey, JSON.stringify(saved));
      }
    } catch (_) {}

    setAsyncChallenges(prev => {
      const filtered = prev.filter(c => c.id !== challengeId);
      try { localStorage.setItem('ten_seconds_async_challenges', JSON.stringify(filtered)); } catch (_) {}
      return filtered;
    });
  };

  // --- RESET LEADERBOARD & RECORD TRACKING ---
  const resetLocalLeaderboard = () => {
    setUser(prev => ({
      ...prev,
      totalScore: 0,
      tournamentsWon: 0,
      challengesWon: 0,
      noteStreak: 0,
      personalBests: {}
    }));
    try {
      localStorage.removeItem('ten_seconds_offline_scores');
    } catch(e) {}
  };

  // --- LOGOUT & ACCOUNT DELETION (GOOGLE PLAY & GDPR POLICY COMPLIANT) ---
  const logoutUser = async () => {
    try {
      await signOutSupabase();
    } catch(e) {}
    
    setUser({ ...DEFAULT_USER });
    setAsyncTournaments([]);
    try {
      localStorage.removeItem('ten_seconds_user');
      localStorage.removeItem('ten_seconds_user_state');
      localStorage.removeItem('ten_seconds_offline_scores');
      localStorage.removeItem('ten_seconds_async_tournaments');
    } catch(e) {}
    setActiveScreen('ONBOARDING');
  };

  const deleteUserAccount = async () => {
    try {
      await deleteUserAccountFromSupabase(user);
    } catch(e) {}
    
    setUser({ ...DEFAULT_USER });
    setAsyncTournaments([]);
    try {
      localStorage.removeItem('ten_seconds_user');
      localStorage.removeItem('ten_seconds_user_state');
      localStorage.removeItem('ten_seconds_offline_scores');
      localStorage.removeItem('ten_seconds_async_tournaments');
      if (user?.email) {
        localStorage.removeItem(`ten_seconds_profile_${user.email}`);
      }
    } catch(e) {}
    setActiveScreen('ONBOARDING');
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
      pool = (mode === 'TOURNAMENT' || mode === 'CHALLENGE')
        ? [...customTracks].slice(0, targetCount)
        : [...customTracks].sort(() => Math.random() - 0.5).slice(0, targetCount);
    } else {
      const plId = (playlist || PLAYLISTS[0])?.id || 'rock-90s';
      pool = getTracksForPlaylistSession(plId, targetCount, Array.from(playedTrackIdsRef.current));
      if (!pool || pool.length === 0) {
        pool = getRandomizedTrackPool(playlist || PLAYLISTS[0], targetCount, playedTrackIdsRef.current);
      }
    }

    // Record played tracks to Anti-Repeat history
    pool.forEach(t => playedTrackIdsRef.current.add(t.id || t.title));

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

    // Set immediate Digging & Buffer state so initial render of GAME screen shows DIGGING...
    setIsAudioLoading(true);
    setPrepCountdown(0);
    setRemainingTime(10.0);
    setRoundStatus('PLAYING');

    // Use customTracks or playlist tracks as distractor pool for choices
    const distractorPool = (customTracks && customTracks.length >= 4)
      ? customTracks
      : (playlist?.tracks && playlist.tracks.length >= 4 ? playlist.tracks : ALL_MASTER_TRACKS);

    setActiveScreen(mode === 'CALIBRATION' ? 'CALIBRATION' : 'GAME');
    setupRound(0, pool, distractorPool, mode);
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

    setIsAudioLoading(true);
    setPrepCountdown(0);
    setRemainingTime(10.0);
    setRoundStatus('PLAYING');

    setupRound(0, pool, allCatalogPool, gameMode);
    return true;
  };

  // --- QUIT GAME IN PROGRESS ---
  const quitGame = () => {
    roundRunIdRef.current++;
    stopAudio();
    clearPrepInterval();
    setPrepCountdown(0);
    setIsAudioLoading(false);
    // [FIX BUG3] Clear AudioBuffer cache on quit to prevent memory leak
    audioBufferMapRef.current.clear();
    setRoundStatus('IDLE');
    if (gameMode === 'CHALLENGE' || gameMode === 'TOURNAMENT') {
      setActiveScreen('CHALLENGE');
    } else {
      setActiveScreen('CATALOG');
    }
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

  // --- START DEATH PARADE (ENDLESS SUDDEN DEATH) ---
  const startDeathParade = () => {
    const allTracks = [
      ...PLAYLISTS.flatMap(p => p.tracks || []),
      ...(user.importedPlaylists || []).flatMap(p => p.tracks || [])
    ];
    // Endless pool of randomized tracks
    const endlessPool = [...allTracks].sort(() => Math.random() - 0.5);
    startGame(
      { 
        id: 'death-parade', 
        title: 'Death Parade 💀', 
        badge: 'Sudden Death',
        cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80' 
      }, 
      'DEATH_PARADE', 
      endlessPool, 
      null, 
      endlessPool.length
    );
  };

  // --- SETUP INDIVIDUAL ROUND WITH AUDIO FALLBACK & RETRY ---
  const setupRound = async (index, pool, allPool, currentMode = gameMode) => {
    stopAudio();
    clearPrepInterval();
    const currentRunId = ++roundRunIdRef.current;

    if (index >= pool.length) {
      endGame();
      return;
    }

    const track = pool[index];
    const choices = generateChoicesForTrack(track, allPool || PLAYLISTS.flatMap(p => p.tracks), pool);

    setSelectedChoice(null);
    setAnswerFeedback(null);
    setRemainingTime(10.0);
    setRoundStatus('PLAYING');
    setCurrentChoices(choices);

    // INIZIO BLOCCO DI 10 CANZONI (index === 0 oppure per Death Parade ogni 10 brani: index % 10 === 0)
    const isBlockStart = index === 0 || (currentMode === 'DEATH_PARADE' && index % 10 === 0);

    if (isBlockStart) {
      // 1. FASE DIGGING / PRECARICAMENTO AUDIO BRANI
      setIsAudioLoading(true);
      setPrepCountdown(0);

      // Precarica brani del blocco in background
      preloadUpcomingTracks(pool, index, 5);

      // Precarica e decodifica il primo brano PRIMA di avviare il countdown
      try {
        await Promise.all([
          preloadTrackAudioBuffer(track),
          new Promise((resolve) => setTimeout(resolve, 650))
        ]);
      } catch(e) {}

      if (roundRunIdRef.current !== currentRunId) return;
      setIsAudioLoading(false);

      // 2. FASE CONTO ALLA ROVESCIA (3..2..1) per far preparare il giocatore
      let currentCount = 3;
      setPrepCountdown(3);
      playSoundEffect('prep_tick');

      prepIntervalRef.current = setInterval(async () => {
        if (roundRunIdRef.current !== currentRunId) {
          clearPrepInterval();
          return;
        }

        currentCount -= 1;
        setPrepCountdown(currentCount);

        if (currentCount > 0) {
          playSoundEffect('prep_tick');
        } else {
          clearPrepInterval();
          setPrepCountdown(0);

          if (roundRunIdRef.current !== currentRunId) return;

          // 3. FASE GIOCO: RIPRODUZIONE ISTANTANEA E TIMER 10S
          await playTrackAudioBuffer(track);
          startRoundTimer();
        }
      }, 800);
    } else {
      // BRANI ALL'INTERNO DEL BLOCCO (2-10, 12-20, ecc.): RIPRODUZIONE ISTANTANEA!
      preloadUpcomingTracks(pool, index, 4);

      const cacheKey = track?.id || `${track?.artist}::${track?.title}`;
      const isBuffered = audioBufferMapRef.current.has(cacheKey) ||
                         (track?.previewUrl && audioBufferMapRef.current.has(getFastAudioUrl(track.previewUrl)));

      if (!isBuffered) {
        setIsAudioLoading(true);
        try {
          await Promise.race([
            preloadTrackAudioBuffer(track),
            new Promise((resolve) => setTimeout(resolve, 2000))
          ]);
        } catch (err) {}
        if (roundRunIdRef.current !== currentRunId) return;
        setIsAudioLoading(false);
      }

      setPrepCountdown(0);
      if (roundRunIdRef.current !== currentRunId) return;
      await playTrackAudioBuffer(track);
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
    if (roundStatus !== 'PLAYING' || prepCountdown > 0 || isAudioLoading) return;

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

      // Increment overall total songs guessed by user
      setUser(prev => ({
        ...prev,
        totalSongsGuessed: (prev.totalSongsGuessed || 0) + 1
      }));

      // Calculate dynamic points for this track: base + reaction speed bonus + streak bonus
      const timeRemaining = Math.max(0, remainingTime);
      const basePts = gameMode === 'DEATH_PARADE' ? 100 : 200;
      const speedPoints = Math.round((timeRemaining / 10.0) * (gameMode === 'DEATH_PARADE' ? 80 : 150));
      const streakBonus = (newStreak - 1) * 20;
      const pointsEarned = basePts + speedPoints + streakBonus;

      let titleText = 'PERFETTO! 🎵';
      if (timeRemaining >= 8.5) {
        titleText = '⚡ REAZIONE FULMINEA!';
      } else if (timeRemaining >= 6.5) {
        titleText = '🔥 SUPER REATTIVO!';
      } else if (newStreak >= 10) {
        titleText = '🏆 10 DI FILA! IMPECCABILE';
      } else if (newStreak >= 5) {
        titleText = `🔥 ${newStreak} DI FILA! IMBATTIBILE`;
      } else if (newStreak >= 2) {
        titleText = `✨ ${newStreak} IN FILA! OTTIMO`;
      } else {
        const praiseList = ['ESATTO! 🎯', 'BRAVO! ⚡', 'OTTIMO! 🌟', 'COLPITO! 🎵'];
        titleText = praiseList[Math.floor(Math.random() * praiseList.length)];
      }

      setComboEvent({
        id: Date.now(),
        streak: newStreak,
        title: titleText,
        points: pointsEarned,
        timeRemaining: timeRemaining.toFixed(1)
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

    if (gameMode === 'DEATH_PARADE' && !isCorrect) {
      setTimeout(() => {
        endGame();
      }, 550);
      return;
    }

    scheduleNextRound(450);
  };

  // --- SKIP ROUND ---
  const skipRound = () => {
    if (roundStatus !== 'PLAYING' || prepCountdown > 0 || isAudioLoading) return;
    stopAudio();
    setStreak(0);
    setAnswerFeedback('SKIPPED');
    setRoundStatus('ANSWERED');

    if (gameMode === 'DEATH_PARADE') {
      setTimeout(() => {
        endGame();
      }, 550);
      return;
    }

    scheduleNextRound(150);
  };

  // --- TIMEOUT HANDLER (uses functional setState to avoid stale closure) ---
  const handleTimeout = () => {
    stopAudio();
    setStreak(0);
    setStats(prev => {
      const newStats = {
        ...prev,
        wrong: prev.wrong + 1,
        totalTimeMs: prev.totalTimeMs + 10000,
      };
      const details = computeScoreDetails(newStats, maxStreak, gameMode);
      setScoreDetails(details);
      setRoundScore(details.finalTotalScore);
      return newStats;
    });

    setAnswerFeedback('TIMEOUT');
    playSoundEffect('wrong');
    setRoundStatus('ANSWERED');

    if (gameMode === 'DEATH_PARADE') {
      setTimeout(() => {
        endGame();
      }, 550);
      return;
    }

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

  // --- HARDWARE / GESTURE BACK BUTTON MANAGER ---
  const lastBackPressRef = useRef(0);
  const [exitToast, setExitToast] = useState(false);

  const handleHardwareBackAction = () => {
    // 1. If any global modal is open, close it
    if (profileModalPlayer) {
      setProfileModalPlayer(null);
      return true;
    }
    if (isLivesModalOpen) {
      setIsLivesModalOpen(false);
      return true;
    }
    if (isRanksLadderOpen) {
      setIsRanksLadderOpen(false);
      return true;
    }

    // 2. If in GAME or CALIBRATION screen
    if (activeScreen === 'GAME' || activeScreen === 'CALIBRATION') {
      if (roundStatus === 'SUMMARY') {
        quitGame();
      } else {
        window.dispatchEvent(new CustomEvent('ten_seconds_game_back_press'));
      }
      return true;
    }

    // 3. If in another secondary screen, return to CATALOG
    if (activeScreen !== 'CATALOG' && activeScreen !== 'ONBOARDING') {
      setActiveScreen('CATALOG');
      return true;
    }

    // 4. If in CATALOG screen (Main home screen)
    if (activeScreen === 'CATALOG') {
      if (window.__tenSecondsCatalogModalOpen && typeof window.__tenSecondsCloseCatalogModal === 'function') {
        window.__tenSecondsCloseCatalogModal();
        return true;
      }

      const now = Date.now();
      if (now - lastBackPressRef.current < 2000) {
        import('@capacitor/app').then(({ App: CapApp }) => {
          CapApp.exitApp().catch(() => {});
        }).catch(() => {
          if (window.navigator?.app?.exitApp) {
            window.navigator.app.exitApp();
          }
        });
        return false;
      } else {
        lastBackPressRef.current = now;
        setExitToast(true);
        setTimeout(() => setExitToast(false), 2000);
        return true;
      }
    }

    return true;
  };

  // --- END GAME & CALCULATE RESULTS ---
  const endGame = async () => {
    roundRunIdRef.current++;
    stopAudio();
    clearPrepInterval();
    setPrepCountdown(0);
    setIsAudioLoading(false);
    setRoundStatus('SUMMARY');

    const isPerfectGame = stats.wrong === 0 && stats.correct > 0 && (trackList.length > 0 && stats.correct === trackList.length);
    const finalGameScore = scoreDetails?.finalTotalScore || roundScore;
    const todayStr = new Date().toISOString().split('T')[0];

    const existingBestScores = user.bestScores || {};
    let newBestScores = { ...existingBestScores };
    let newDailyScoresByDate = { ...(user.dailyScoresByDate || {}) };
    let newDeathParadeScoresByDate = { ...(user.deathParadeScoresByDate || {}) };
    let newTodayDailyScore = user.todayDailyScore || newDailyScoresByDate[todayStr] || 0;
    let newTodayDeathScore = user.todayDeathScore || newDeathParadeScoresByDate[todayStr] || 0;
    let scoreIncrease = 0;

    let currentDeathRecord = user.deathParadeRecord || user.personalBests?.deathParade || 0;
    let currentDeathPointsRecord = user.deathParadePointsRecord || user.personalBests?.deathParadePoints || 0;

    if (gameMode === 'DAILY') {
      const prevDailyToday = newDailyScoresByDate[todayStr] || 0;
      if (finalGameScore > prevDailyToday) {
        scoreIncrease = finalGameScore - prevDailyToday;
        newDailyScoresByDate[todayStr] = finalGameScore;
        newTodayDailyScore = finalGameScore;
        newBestScores['daily'] = finalGameScore;
      }
    } else if (gameMode === 'DEATH_PARADE') {
      const prevDeathToday = newDeathParadeScoresByDate[todayStr] || 0;
      if (finalGameScore > prevDeathToday) {
        scoreIncrease = finalGameScore - prevDeathToday;
        newDeathParadeScoresByDate[todayStr] = finalGameScore;
        newTodayDeathScore = finalGameScore;
      }
      if (stats.correct > currentDeathRecord || finalGameScore > currentDeathPointsRecord) {
        if (stats.correct > currentDeathRecord) currentDeathRecord = stats.correct;
        if (finalGameScore > currentDeathPointsRecord) currentDeathPointsRecord = finalGameScore;
        triggerConfetti();
      }
    } else {
      // STANDARD / CUSTOM / CHALLENGE playlist mode
      const playlistKey = currentPlaylist?.id || 'standard';
      const previousBest = existingBestScores[playlistKey] || 0;
      if (finalGameScore > previousBest) {
        scoreIncrease = finalGameScore - previousBest;
        newBestScores[playlistKey] = finalGameScore;
      }
    }

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

    const finalTotalScore = (user.totalScore || 0) + scoreIncrease + extraBonusPoints;
    const finalRankInfo = getUserRankAndClasse(finalTotalScore);

    const updatedUser = {
      ...user,
      totalScore: finalTotalScore,
      bestScores: newBestScores,
      dailyScoresByDate: newDailyScoresByDate,
      deathParadeScoresByDate: newDeathParadeScoresByDate,
      todayDailyScore: newTodayDailyScore,
      todayDeathScore: newTodayDeathScore,
      totalGamesPlayed: (user.totalGamesPlayed || 0) + 1,
      totalSongsGuessed: (user.totalSongsGuessed || 0) + stats.correct,
      perfectGamesCount: isPerfectGame ? (user.perfectGamesCount || 0) + 1 : (user.perfectGamesCount || 0),
      completedChallenges: currentChallengeId ? [...(user.completedChallenges || []), currentChallengeId] : (user.completedChallenges || []),
      rank: finalRankInfo.name,
      hasCompletedCalibration: gameMode === 'CALIBRATION' ? true : user.hasCompletedCalibration,
      calibrationScore: gameMode === 'CALIBRATION' ? finalGameScore : user.calibrationScore,
      lastDailyDate: gameMode === 'DAILY' ? todayStr : user.lastDailyDate,
      dailyCompletedToday: gameMode === 'DAILY' ? true : user.dailyCompletedToday,
      noteStreak: newNoteStreak,
      streakBadges: newBadges,
      deathParadeRecord: currentDeathRecord,
      deathParadePointsRecord: currentDeathPointsRecord,
      personalBests: {
        ...(user.personalBests || {}),
        deathParade: currentDeathRecord,
        deathParadePoints: currentDeathPointsRecord
      }
    };

    const prevRankLevel = getUserRankAndClasse(user.totalScore || 0).level || 1;
    const newRankLevel = finalRankInfo.level || 1;
    if (newRankLevel > prevRankLevel) {
      triggerInAppNotification({
        type: 'rank_up',
        title: `🎉 LIVELLO ${newRankLevel} SBLOCCATO!`,
        message: `Complimenti! Hai raggiunto il rango "${finalRankInfo.name}"!`,
        actionLabel: 'VEDI SCALATA',
        onAction: () => setIsRanksLadderOpen(true)
      });
    }

    setCurrentChallengeId(null);
    setUser(updatedUser);
    try {
      localStorage.setItem('ten_seconds_user', JSON.stringify(updatedUser));
      if (updatedUser.email) {
        localStorage.setItem(`ten_seconds_profile_${updatedUser.email}`, JSON.stringify(updatedUser));
      }
    } catch(e) {}

    // Handle Async 1vs1 Outbox Challenge creation
    if (pendingOutboxChallengeRef.current) {
      const outbox = pendingOutboxChallengeRef.current;
      const challengePayload = {
        id: outbox.challengeId,
        challenger: {
          name: user.name || 'Ospite',
          email: user.email || null,
          avatar: user.avatar || null,
          flag: user.flag || '🇮🇹',
        },
        challenged: outbox.targetFriend,
        playlist: {
          id: outbox.playlist?.id || 'pop-divas',
          title: outbox.playlist?.title || 'Playlist',
          cover: outbox.playlist?.cover || null,
          badge: outbox.playlist?.badge || null,
        },
        tracks: outbox.tracks,
        songCount: outbox.songCount,
        challengerScore: finalGameScore,
        challengerCorrect: stats.correct,
        challengerTotalTime: stats.totalTimeMs,
        createdAt: Date.now(),
        expiresAt: outbox.expiresAt,
        status: 'pending',
        challengedScore: null,
        winner: null,
      };

      setAsyncChallenges(prev => [challengePayload, ...prev.filter(c => c.id !== challengePayload.id)]);
      pendingOutboxChallengeRef.current = null;

      // Sequenza garantita:
      // 1. Aspetta che sendAsyncChallengeToSupabase confermi l'INSERT su Supabase
      const insertResult = await sendAsyncChallengeToSupabase(challengePayload);

      // 2. Solo DOPO che la sfida esiste fisicamente nel DB, invia il punteggio con submit-challenge-score
      if (insertResult?.success) {
        try {
          const { error: edgeErr } = await supabase.functions.invoke('submit-challenge-score', {
            body: {
              type: 'challenge',
              challengeId: outbox.challengeId,
              role: 'challenger',
              correct: stats.correct,
              wrong: stats.wrong,
              correctTimeMs: stats.correctTimeMs || 0,
              totalTimeMs: stats.totalTimeMs,
              maxStreak: maxStreak || 0,
              songCount: outbox.songCount || 10,
              clientScore: finalGameScore,
            }
          });
          if (edgeErr) {
            console.warn('[Challenge] submit-challenge-score error:', edgeErr.message);
          }
        } catch (e) {
          console.warn('[Challenge] submit-challenge-score exception:', e);
        }
      } else {
        console.error('[Challenge] Creazione sfida su Supabase fallita, score challenger non inviato:', insertResult?.error);
      }
    }

    // Handle Async 1vs1 Response to a received challenge
    if (pendingInboxResponseChallengeRef.current) {
      const respCh = pendingInboxResponseChallengeRef.current;
      const challengerScore = respCh.challengerScore || 0;
      let winnerName = 'tie';
      if (finalGameScore > challengerScore) {
        winnerName = user.name || 'Tu';
        recordWin('CHALLENGE');
      } else if (finalGameScore < challengerScore) {
        winnerName = respCh.challenger?.name || 'Avversario';
      }

      const resultPayload = {
        challengedScore: finalGameScore,
        challengedCorrect: stats.correct,
        challengedTotalTime: stats.totalTimeMs,
        status: 'completed',
        winner: winnerName,
        completedAt: Date.now()
      };

      setAsyncChallenges(prev => prev.map(c => {
        if (c.id === respCh.id) {
          return {
            ...c,
            challengedScore: finalGameScore,
            challengedCorrect: stats.correct,
            challengedTotalTime: stats.totalTimeMs,
            status: 'completed',
            winner: winnerName,
            completedAt: Date.now(),
          };
        }
        return c;
      }));

      // Registra il punteggio challenged via Edge Function anti-cheat
      supabase.functions.invoke('submit-challenge-score', {
        body: {
          type: 'challenge',
          challengeId: respCh.id,
          role: 'challenged',
          correct: stats.correct,
          wrong: stats.wrong,
          correctTimeMs: stats.correctTimeMs || 0,
          totalTimeMs: stats.totalTimeMs,
          maxStreak: maxStreak || 0,
          songCount: respCh.song_count || respCh.songCount || 10,
          clientScore: finalGameScore,
        }
      }).then(({ data: edgeData, error: edgeErr }) => {
        if (edgeErr) {
          console.warn('[Challenge] submit-challenge-score responded error:', edgeErr.message);
        } else if (edgeData?.challenge) {
          if (edgeData.challengesWon !== undefined) {
            setUser(prev => {
              const up = { ...prev, challengesWon: Number(edgeData.challengesWon) };
              try { localStorage.setItem('ten_seconds_user', JSON.stringify(up)); } catch(_) {}
              return up;
            });
          }
          // Notifica broadcast al challenger con il risultato finale
          notifyChallengeCompletedInSupabase(
            respCh.id,
            { winner: edgeData.challenge.winner, status: edgeData.challenge.status },
            respCh.challenger
          );
        }
      }).catch(e => console.warn('[Challenge] submit-challenge-score exception:', e));
      pendingInboxResponseChallengeRef.current = null;
    }

    // Handle Tournament Match completion
    if (pendingTournamentMatchRef.current || gameMode === 'TOURNAMENT') {
      const activeTourn = pendingTournamentMatchRef.current;
      if (activeTourn) {
        const payloadBody = {
          type: 'tournament',
          tournamentId: activeTourn.id,
          correct: stats.correct,
          wrong: stats.wrong,
          correctTimeMs: stats.correctTimeMs || 0,
          totalTimeMs: stats.totalTimeMs,
          maxStreak: maxStreak || 0,
          songCount: activeTourn.song_count || activeTourn.songCount || 10,
          clientScore: finalGameScore,
        };

        // Funzione di invio e retry del punteggio torneo
        const executeSubmitTournament = async () => {
          try {
            const { data: edgeData, error: edgeErr } = await supabase.functions.invoke('submit-challenge-score', {
              body: payloadBody
            });

            if (edgeErr || !edgeData?.success || !edgeData?.tournament) {
              let errorDetail = edgeErr?.message || 'Risposta del server non valida';
              if (edgeErr?.context) {
                try {
                  const parsedContext = await edgeErr.context.json();
                  errorDetail = parsedContext?.error || parsedContext?.message || JSON.stringify(parsedContext);
                } catch (_) {
                  try {
                    const textContext = await edgeErr.context.text();
                    if (textContext) errorDetail = textContext;
                  } catch (__) {}
                }
              } else if (edgeData?.error) {
                errorDetail = edgeData.error;
              }

              console.error('[Tournament] submit-challenge-score failed:', errorDetail);

              triggerInAppNotification({
                type: 'tournament',
                title: '⚠️ Errore Salvataggio Torneo',
                message: `Impossibile salvare il risultato del torneo (${errorDetail}). Controlla la connessione e riprova.`,
                actionLabel: 'RIPROVA SALVATAGGIO',
                onAction: () => {
                  executeSubmitTournament();
                }
              });
              // Non azzerare pendingTournamentMatchRef.current e non aggiornare localmente la manche come completata
              return;
            }

            // Solo DOPO successo server con success === true e edgeData.tournament:
            const updatedTournament = normalizeTournamentFromDb(edgeData.tournament) || edgeData.tournament;

            // Se il torneo è completato e l'utente ha vinto, registra la vittoria
            if (updatedTournament.status === 'completed' && updatedTournament.winner) {
              const winnerIdent = String(updatedTournament.winner.userId || updatedTournament.winner.email || updatedTournament.winner.name || '').toLowerCase();
              const myIdent = String(user.id || user.email || user.name || '').toLowerCase();
              if (winnerIdent && myIdent && (winnerIdent === myIdent || winnerIdent === user.id || winnerIdent === user.email?.toLowerCase())) {
                recordWin('TOURNAMENT');
              }
            }

            // Sostituisci il torneo locale con quello validato dal server
            setAsyncTournaments(prev =>
              prev.map(t => t.id === activeTourn.id ? updatedTournament : t)
            );
            try {
              const saved = JSON.parse(localStorage.getItem('ten_seconds_async_tournaments') || '[]');
              const updated = saved.map(t => t.id === activeTourn.id ? updatedTournament : t);
              localStorage.setItem('ten_seconds_async_tournaments', JSON.stringify(updated));
            } catch (_) {}

            // Broadcast aggiornamento torneo ai partecipanti
            submitTournamentScoreToSupabase(activeTourn.id, updatedTournament, user);

            // Marca come letto l'invito del relativo tournamentId dopo il salvataggio della manche
            markTournamentInviteAsRead(activeTourn.id);

            // Solo ora azzera pendingTournamentMatchRef.current
            pendingTournamentMatchRef.current = null;

          } catch (err) {
            console.error('[Tournament] submit-challenge-score exception:', err);
            triggerInAppNotification({
              type: 'tournament',
              title: '⚠️ Errore Salvataggio Torneo',
              message: 'Impossibile salvare il risultato del torneo. Controlla la connessione e riprova.',
              actionLabel: 'RIPROVA SALVATAGGIO',
              onAction: () => {
                executeSubmitTournament();
              }
            });
            // Non azzerare pendingTournamentMatchRef.current
          }
        };

        // Esegui la chiamata server-authoritative con await
        await executeSubmitTournament();
      }
    }

    // Broadcast game over to opponent in live session
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
        playlistId: currentPlaylist?.id,
        score: finalGameScore,
        correct: stats.correct,
      });
    } else {
      // Sync score & stats to Supabase via server-side Edge Function (atomic database update)
      saveScoreToSupabase({
        modalita: gameMode,
        correct: stats.correct,
        wrong: stats.wrong,
        correctTimeMs: stats.correctTimeMs,
        totalTimeMs: stats.totalTimeMs,
        maxStreak: maxStreak,
        songCount: trackList.length || 10,
        punteggio: finalGameScore,
        totalScore: finalTotalScore,
        clientDate: todayStr,
      }).then(res => {
        if (res?.stats) {
          setUser(prev => {
            const newSongsGuessed = res.stats.total_songs_guessed ?? prev.totalSongsGuessed;
            const newWrongAnswers = res.stats.total_wrong_answers ?? prev.totalWrongAnswers;
            const newCorrectTime = res.stats.total_correct_time_ms ?? prev.totalCorrectTimeMs;
            const newMeasuredCorrect = res.stats.measured_correct_answers ?? prev.measuredCorrectAnswers ?? 0;
            const measuredTotalAnswers = newMeasuredCorrect + newWrongAnswers;
            const computedAccuracy = (newMeasuredCorrect > 0 && measuredTotalAnswers > 0)
              ? Number(((newMeasuredCorrect / measuredTotalAnswers) * 100).toFixed(1))
              : null;
            const computedAvgTime = (newMeasuredCorrect > 0 && newCorrectTime > 0)
              ? Number((newCorrectTime / 1000 / newMeasuredCorrect).toFixed(2))
              : null;

            const updated = {
              ...prev,
              totalScore: Math.max(Number(res.stats.total_score || 0), Number(prev.totalScore || 0)),
              totalGamesPlayed: res.stats.total_games_played ?? prev.totalGamesPlayed,
              totalSongsGuessed: newSongsGuessed,
              totalWrongAnswers: newWrongAnswers,
              measuredCorrectAnswers: newMeasuredCorrect,
              totalCorrectTimeMs: newCorrectTime,
              accuracyPercent: computedAccuracy,
              avgResponseTimeSec: computedAvgTime,
              deathParadeRecord: res.stats.death_parade_record ?? prev.deathParadeRecord,
              deathParadePointsRecord: res.stats.death_parade_points_record ?? prev.deathParadePointsRecord,
              noteStreak: res.stats.note_streak ?? prev.noteStreak,
              lastDailyDate: res.stats.last_daily_date ?? prev.lastDailyDate,
              perfectGamesCount: res.stats.perfect_games_count ?? prev.perfectGamesCount,
              // challengesWon e tournamentsWon sono gestiti SOLO da submit-challenge-score / recordWin
              challengesWon: prev.challengesWon,
              tournamentsWon: prev.tournamentsWon,
            };
            try { localStorage.setItem('ten_seconds_user', JSON.stringify(updated)); } catch(e) {}
            return updated;
          });
        }
      }).catch(() => {});
    }
  };

  return (
    <GameContext.Provider
      value={{
        user,
        setUser,
        activeScreen,
        setActiveScreen,
        isOfflineMode,
        setIsOfflineMode,
        isMuted,
        setIsMuted,
        audioVolume,
        setAudioVolume,
        hapticsEnabled,
        setHapticsEnabled,
        handleHardwareBackAction,
        exitToast,
        setExitToast,
        
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
        startDeathParade,
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
        addFriend,
        removeFriend,
        resetLocalLeaderboard,
        recordWin,
        openPlayerProfile,
        restoreUserProfileData,
        updateUserProfile,
        resetAllUserStats,
        loginWithGoogle: signInWithGoogle,
        logoutSupabase: signOutSupabase,
        logoutUser,
        deleteUserAccount,

        // Real Friend Requests
        friendRequests,
        sentFriendRequests,
        sendFriendRequest,
        cancelFriendRequest,
        acceptFriendRequest,
        rejectFriendRequest,

        // Ranks Ladder & In-App Notifications
        isRanksLadderOpen,
        setIsRanksLadderOpen,
        inAppNotification,
        triggerInAppNotification,
        dismissInAppNotification,
        showSystemNotification,

        // Turn-Based Asynchronous 1vs1 Challenges (48h)
        asyncChallenges,
        createAndStartAsyncChallenge,
        respondToAsyncChallenge,
        claimForfeitVictory,
        acceptForfeitDefeat,
        deleteAsyncChallenge,
        syncSocialData,

        // Multi-User Asynchronous Tournaments (48h)
        asyncTournaments,
        createAsyncTournament,
        startTournamentMatch,
        hasUnreadTournamentInvites,
        readTournamentInvites,
        markTournamentInviteAsRead,
        markAllTournamentInvitesAsRead,

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
