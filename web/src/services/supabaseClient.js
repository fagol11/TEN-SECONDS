import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://rddntjxqbqwrcdvhuaxi.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_3Z6TY-lCTZAbhi6GsX4QyA_AmW0ctpq';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

export function extractUserProfileFromAuth(supabaseUser, googleUser = null) {
  const meta = supabaseUser?.user_metadata || {};
  const email = supabaseUser?.email || googleUser?.email || meta.email || null;

  // Extract Name
  const name =
    meta.full_name ||
    meta.name ||
    googleUser?.name ||
    googleUser?.displayName ||
    (googleUser?.givenName ? `${googleUser.givenName} ${googleUser.familyName || ''}`.trim() : null) ||
    meta.user_name ||
    (email ? email.split('@')[0] : 'Giocatore');

  // Extract Avatar URL
  const avatar =
    meta.avatar_url ||
    meta.picture ||
    googleUser?.imageUrl ||
    googleUser?.picture ||
    null;

  const id = supabaseUser?.id || googleUser?.id || null;

  return { email, name, avatar, id };
}

export async function signInWithGoogleIdToken(idToken) {
  try {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken,
    });
    if (error) {
      console.warn('[Supabase Auth] ID Token Auth error:', error.message);
      return { error: error.message };
    }
    return { data };
  } catch (err) {
    console.warn('[Supabase Auth] Exception during ID Token Auth:', err?.message || err);
    return { error: err?.message || 'ID token auth error' };
  }
}

// --- GOOGLE OAUTH LOGIN (WEB) ---
export async function signInWithGoogle() {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    if (sessionData?.session?.user) {
      return { user: sessionData.session.user };
    }

    const redirectUri = window.location.origin;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUri,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account',
        },
      }
    });

    if (error) {
      console.warn('[Supabase Auth] Google OAuth error:', error.message);
      return { error: error.message };
    }

    return { data };
  } catch (err) {
    console.warn('[Supabase Auth] Exception during Google Auth:', err?.message || err);
    return { error: err?.message || 'OAuth error' };
  }
}

// --- LOGOUT ---
export async function signOutSupabase() {
  try {
    await supabase.auth.signOut();
  } catch (err) {
    console.warn('Supabase SignOut error:', err);
  }
}

// --- DELETE ACCOUNT (GDPR COMPLIANCE) ---
export async function deleteUserAccountFromSupabase(user) {
  if (!user) return { success: false };
  try {
    const userIdentifiers = [
      user.id ? String(user.id) : null,
      user.email,
      user.name && user.name !== 'Ospite' ? user.name : null,
    ].filter(Boolean);

    if (user.id) {
      await supabase.from('profiles').delete().eq('id', user.id);
    }
    if (user.email) {
      await supabase.from('profiles').delete().eq('email', user.email);
    }

    for (const id of userIdentifiers) {
      await supabase.from('friend_requests').delete().or(`sender_email.eq.${id},sender_name.eq.${id},target_identifier.eq.${id}`);
    }

    for (const id of userIdentifiers) {
      await supabase.from('async_challenges').delete().or(`challenged.eq.${id}`);
    }

    await supabase.auth.signOut();

    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }

    return { success: true };
  } catch (err) {
    console.warn('[Supabase] Delete account notice:', err);
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    return { success: true };
  }
}

// --- SAVE / UPDATE USER PROFILE ---
export async function saveUserProfileToSupabase(user) {
  if (!user) return null;
  try {
    let userId = user.id;
    if (!userId) {
      const { data: sessionData } = await supabase.auth.getSession();
      userId = sessionData?.session?.user?.id;
    }
    if (!userId) {
      return null;
    }

    const payload = {
      display_name: user.name || user.displayName || 'Giocatore',
      avatar_url: user.avatar || user.avatarUrl || null,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('profiles')
      .update(payload)
      .eq('id', userId);

    if (error) {
      console.warn('[Supabase Profile] Update notice:', error.message);
    }

    try {
      if (user.name || user.avatar) {
        const authData = {};
        if (user.name) {
          authData.full_name = user.name;
          authData.name = user.name;
        }
        const avatarStr = user.avatar || user.avatarUrl;
        if (avatarStr && !avatarStr.startsWith('data:') && avatarStr.length < 500) {
          authData.avatar_url = avatarStr;
          authData.picture = avatarStr;
        }
        if (Object.keys(authData).length > 0) {
          await supabase.auth.updateUser({ data: authData });
        }
      }
    } catch (_) {}

    return data;
  } catch (err) {
    console.warn('[Supabase Profile] Save error:', err?.message);
    return null;
  }
}

export async function saveUserFcmToken(fcmToken) {
  if (!fcmToken) return;
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ten_seconds_fcm_token', fcmToken);
    }

    // Call secure Postgres RPC (strictly relies on auth.uid() server-side)
    const { data, error } = await supabase.rpc('save_user_fcm_token', {
      p_fcm_token: fcmToken
    });

    if (error) {
      console.warn('[Supabase FCM] RPC save_user_fcm_token notice:', error.message || error);
    }
  } catch (err) {
    console.warn('[Supabase FCM] Token save notice:', err);
  }
}

// --- SUBMIT SCORE VIA SERVER-SIDE EDGE FUNCTION ---
export async function saveScoreToSupabase(scoreData) {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData?.session?.access_token;
    if (!token) {
      return null;
    }

    const clientDate = typeof window !== 'undefined'
      ? new Date().toLocaleDateString('sv')
      : new Date().toISOString().split('T')[0];

    const payload = typeof scoreData === 'number'
      ? { punteggio: scoreData, modalita: 'CLASSIC', clientDate }
      : {
          modalita: String(scoreData?.modalita || scoreData?.mode || scoreData?.gameMode || 'CLASSIC').toUpperCase(),
          correct: Number(scoreData?.correct || 0),
          wrong: Number(scoreData?.wrong || 0),
          correctTimeMs: Number(scoreData?.correctTimeMs || 0),
          totalTimeMs: Number(scoreData?.totalTimeMs || 0),
          maxStreak: Number(scoreData?.maxStreak || 0),
          songCount: Number(scoreData?.songCount || 10),
          isWon: Boolean(scoreData?.isWon || false),
          punteggio: scoreData?.punteggio !== undefined ? Number(scoreData.punteggio) : undefined,
          totalScore: scoreData?.totalScore !== undefined ? Number(scoreData.totalScore) : undefined,
          clientDate: scoreData?.clientDate || clientDate,
        };

    const { data, error } = await supabase.functions.invoke('submit-score', {
      body: payload
    });

    if (error) {
      console.warn('[Supabase submit-score notice]:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('[Supabase submit-score exception]:', err?.message || err);
    return null;
  }
}

// --- RESET USER STATS VIA SERVER-SIDE EDGE FUNCTION ---
export async function resetUserStatsInSupabase() {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData?.session?.access_token;
    if (!token) return { success: false, error: 'Not authenticated' };

    const { data, error } = await supabase.functions.invoke('reset-user-stats', {
      body: {}
    });

    if (error) {
      console.warn('[Supabase reset-user-stats notice]:', error.message);
      return { success: false, error: error.message };
    }
    return data;
  } catch (err) {
    console.warn('[Supabase reset-user-stats exception]:', err);
    return { success: false, error: err?.message || 'Errore reset' };
  }
}

export function getDeterministicPlayerCode(emailOrId) {
  if (!emailOrId) return 'TS-PLAYER';
  const clean = String(emailOrId).trim().toLowerCase();
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let hash = 5381;
  for (let i = 0; i < clean.length; i++) {
    hash = ((hash << 5) + hash) + clean.charCodeAt(i);
    hash = hash & hash;
  }
  hash = Math.abs(hash);
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt((hash + i * 7) % chars.length);
    hash = Math.floor(hash / chars.length) + (clean.charCodeAt(i % clean.length) * 31);
  }
  return `TS-${code}`;
}

// --- FETCH REALTIME GLOBAL LEADERBOARD ---
export async function getLeaderboardFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('leaderboard_view')
      .select('*')
      .order('total_score', { ascending: false })
      .limit(100);

    if (!error && data) {
      return data.map(item => {
        const rawName = item.display_name || '';
        const cleanDisplayName = (rawName && !rawName.includes('@'))
          ? rawName
          : (item.email ? item.email.split('@')[0] : 'Giocatore');

        return {
          user_id:                    item.user_id,
          user_email:                 item.email,
          user_name:                  cleanDisplayName,
          display_name:               cleanDisplayName,
          avatar_url:                 item.avatar_url,
          total_score:                Number(item.total_score || item.max_punteggio || 0),
          max_punteggio:              Number(item.max_punteggio || 0),
          total_games_played:         Number(item.partite_giocate || 0),
          partite_giocate:            Number(item.partite_giocate || 0),
          death_parade_record:        Number(item.death_parade_record || 0),
          death_parade_points_record: Number(item.death_parade_points_record || 0),
          note_streak:                Number(item.note_streak || 0),
          challenges_won:             Number(item.challenges_won || 0),
          tournaments_won:            Number(item.tournaments_won || 0),
          perfect_games_count:        Number(item.perfect_games_count || 0),
          total_songs_guessed:        Number(item.total_songs_guessed || 0),
          total_wrong_answers:        Number(item.total_wrong_answers || 0),
          total_correct_time_ms:      Number(item.total_correct_time_ms || 0),
          measured_correct_answers:   Number(item.measured_correct_answers || 0),
          measuredCorrectAnswers:     Number(item.measured_correct_answers || 0),
          accuracy_percent:           item.accuracy_percent !== undefined && item.accuracy_percent !== null ? Number(item.accuracy_percent) : null,
          avg_response_time_seconds:  item.avg_response_time_seconds !== undefined && item.avg_response_time_seconds !== null ? Number(item.avg_response_time_seconds) : null,
          updated_at:                 item.ultimo_punteggio_il,
        };
      });
    }

    const { data: profData, error: profErr } = await supabase
      .from('profiles')
      .select('id, email, display_name, avatar_url, updated_at');

    if (!profErr && profData) {
      return profData.map(p => {
        const rawName = p.display_name || '';
        const cleanDisplayName = (rawName && !rawName.includes('@'))
          ? rawName
          : (p.email ? p.email.split('@')[0] : 'Giocatore');

        return {
          user_id: p.id,
          user_email: p.email,
          user_name: cleanDisplayName,
          display_name: cleanDisplayName,
          avatar_url: p.avatar_url,
          total_score: 0,
          max_punteggio: 0,
          total_games_played: 0,
          partite_giocate: 0,
          death_parade_record: 0,
          death_parade_points_record: 0,
          note_streak: 0,
          challenges_won: 0,
          tournaments_won: 0,
          perfect_games_count: 0,
          total_songs_guessed: 0,
          total_wrong_answers: 0,
          total_correct_time_ms: 0,
          accuracy_percent: null,
          avg_response_time_seconds: null,
          updated_at: p.updated_at,
        };
      });
    }

    return null;
  } catch (err) {
    console.warn('Supabase Leaderboard fetch error:', err);
    return null;
  }
}

// --- FETCH INDIVIDUAL USER PROFILE ---
export async function fetchUserProfileFromSupabase(identifier) {
  if (!identifier || typeof identifier !== 'string' || identifier.trim() === '' || identifier === 'Ospite') return null;
  const cleanId = identifier.trim().toLowerCase();
  try {
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(cleanId);
    let query = supabase.from('profiles').select('id, email, display_name, avatar_url, fcm_token, created_at, updated_at, user_stats(*)');
    
    if (isUUID) {
      query = query.eq('id', cleanId);
    } else if (cleanId.includes('@')) {
      query = query.ilike('email', cleanId);
    } else {
      query = query.ilike('display_name', identifier.trim());
    }

    const { data: profileRow, error } = await query.limit(1).maybeSingle();

    if (!error && profileRow) {
      const statsObj = Array.isArray(profileRow.user_stats) ? profileRow.user_stats[0] : profileRow.user_stats;

      let cloudTotalScore = Number(statsObj?.total_score || 0);
      let sumScores = 0;
      let maxScore = 0;
      let totalGames = Number(statsObj?.total_games_played || 0);

      try {
        const { data: scoreRows } = await supabase
          .from('scores')
          .select('punteggio')
          .eq('user_id', profileRow.id);

        if (scoreRows && scoreRows.length > 0) {
          totalGames = Math.max(totalGames, scoreRows.length);
          sumScores = scoreRows.reduce((acc, s) => acc + Number(s.punteggio || 0), 0);
          maxScore = Math.max(...scoreRows.map(s => Number(s.punteggio || 0)));
        }
      } catch (_) {}

      const computedTotalScore = Math.max(cloudTotalScore, sumScores, maxScore);
      const totalGuessed = Number(statsObj?.total_songs_guessed || 0);
      const totalWrong = Number(statsObj?.total_wrong_answers || 0);
      const measuredCorrect = Number(statsObj?.measured_correct_answers || 0);
      const totalCorrectTimeMs = Number(statsObj?.total_correct_time_ms || 0);

      const measuredTotalAnswers = measuredCorrect + totalWrong;
      const accuracyPercent = (measuredCorrect > 0 && measuredTotalAnswers > 0)
        ? Number(((measuredCorrect / measuredTotalAnswers) * 100).toFixed(1))
        : null;

      const avgResponseTimeSec = (measuredCorrect > 0 && totalCorrectTimeMs > 0)
        ? Number((totalCorrectTimeMs / 1000 / measuredCorrect).toFixed(2))
        : null;

      const rawName = profileRow.display_name || '';
      const cleanDisplayName = (rawName && !rawName.includes('@'))
        ? rawName
        : (profileRow.email ? profileRow.email.split('@')[0] : 'Giocatore');

      return {
        id: profileRow.id,
        name: cleanDisplayName,
        email: profileRow.email,
        avatar: profileRow.avatar_url,
        fcmToken: profileRow.fcm_token || null,
        playerCode: getDeterministicPlayerCode(profileRow.id || profileRow.email),
        flag: '🇮🇹',
        nationality: 'Italia',
        totalScore: computedTotalScore,
        totalGamesPlayed: totalGames,
        deathParadeRecord: Number(statsObj?.death_parade_record || 0),
        deathParadePointsRecord: Number(statsObj?.death_parade_points_record || 0),
        noteStreak: Number(statsObj?.note_streak || 0),
        lastDailyDate: statsObj?.last_daily_date || null,
        perfectGamesCount: Number(statsObj?.perfect_games_count || 0),
        challengesWon: Number(statsObj?.challenges_won || 0),
        tournamentsWon: Number(statsObj?.tournaments_won || 0),
        totalSongsGuessed: totalGuessed,
        totalWrongAnswers: totalWrong,
        measuredCorrectAnswers: measuredCorrect,
        totalCorrectTimeMs: totalCorrectTimeMs,
        accuracyPercent,
        avgResponseTimeSec,
        hasCompletedCalibration: true,
      };
    }

    return null;
  } catch (err) {
    console.warn('[Supabase Profile] Fetch error:', err);
    return null;
  }
}

// --- NORMALIZZAZIONE CENTRALIZZATA DEI RECORD SFIDA (DATABASE -> CLIENT) ---
export function normalizeChallengeFromDb(raw) {
  if (!raw) return null;
  return {
    id: String(raw.id),
    challenger: raw.challenger || {},
    challenged: typeof raw.challenged === 'string' ? raw.challenged : (raw.challenged?.email || raw.challenged?.name || '__RANDOM_OPPONENT__'),
    playlist: raw.playlist || null,
    tracks: Array.isArray(raw.tracks) ? raw.tracks : [],
    songCount: Number(raw.song_count ?? raw.songCount ?? 10),
    challengerScore: raw.challenger_score !== undefined && raw.challenger_score !== null
      ? Number(raw.challenger_score)
      : (raw.challengerScore !== undefined && raw.challengerScore !== null ? Number(raw.challengerScore) : null),
    challengerCorrect: raw.challenger_correct !== undefined && raw.challenger_correct !== null
      ? Number(raw.challenger_correct)
      : (raw.challengerCorrect !== undefined && raw.challengerCorrect !== null ? Number(raw.challengerCorrect) : null),
    challengerTotalTime: raw.challenger_total_time_ms !== undefined && raw.challenger_total_time_ms !== null
      ? Number(raw.challenger_total_time_ms)
      : (raw.challengerTotalTime !== undefined && raw.challengerTotalTime !== null ? Number(raw.challengerTotalTime) : null),
    challengedScore: raw.challenged_score !== undefined && raw.challenged_score !== null
      ? Number(raw.challenged_score)
      : (raw.challengedScore !== undefined && raw.challengedScore !== null ? Number(raw.challengedScore) : null),
    challengedCorrect: raw.challenged_correct !== undefined && raw.challenged_correct !== null
      ? Number(raw.challenged_correct)
      : (raw.challengedCorrect !== undefined && raw.challengedCorrect !== null ? Number(raw.challengedCorrect) : null),
    challengedTotalTime: raw.challenged_total_time_ms !== undefined && raw.challenged_total_time_ms !== null
      ? Number(raw.challenged_total_time_ms)
      : (raw.challengedTotalTime !== undefined && raw.challengedTotalTime !== null ? Number(raw.challengedTotalTime) : null),
    status: raw.status || 'pending',
    winner: raw.winner || null,
    createdAt: Number(raw.created_at ?? raw.createdAt ?? Date.now()),
    expiresAt: Number(raw.expires_at ?? raw.expiresAt ?? (Date.now() + 48 * 3600 * 1000)),
    completedAt: raw.completed_at ? Number(raw.completed_at) : (raw.completedAt ? Number(raw.completedAt) : null),
  };
}

// --- NORMALIZZAZIONE CENTRALIZZATA DEI RECORD TORNEO (DATABASE -> CLIENT) ---
export function normalizeTournamentFromDb(raw) {
  if (!raw) return null;
  return {
    id: String(raw.id),
    name: raw.name || 'Torneo Musicale',
    creator: raw.creator || {},
    invited_identifiers: Array.isArray(raw.invited_identifiers) ? raw.invited_identifiers : (Array.isArray(raw.invitedIdentifiers) ? raw.invitedIdentifiers : []),
    invitedIdentifiers: Array.isArray(raw.invited_identifiers) ? raw.invited_identifiers : (Array.isArray(raw.invitedIdentifiers) ? raw.invitedIdentifiers : []),
    playlist: raw.playlist || null,
    tracks: Array.isArray(raw.tracks) ? raw.tracks : [],
    songCount: Number(raw.song_count ?? raw.songCount ?? 10),
    participants: Array.isArray(raw.participants) ? raw.participants.map(p => ({
      ...p,
      userId: p.userId || p.user_id || (p.id && String(p.id).length > 20 ? p.id : null),
      email: p.email ? p.email.trim().toLowerCase() : null,
      hasPlayed: Boolean(p.hasPlayed),
      score: p.score !== undefined && p.score !== null ? Number(p.score) : 0,
      correct: p.correct !== undefined && p.correct !== null ? Number(p.correct) : 0,
      totalTimeMs: p.totalTimeMs !== undefined && p.totalTimeMs !== null ? Number(p.totalTimeMs) : 0,
      playedAt: p.playedAt ? Number(p.playedAt) : null,
    })) : [],
    status: raw.status || 'pending',
    winner: raw.winner || null,
    createdAt: Number(raw.created_at ?? raw.createdAt ?? Date.now()),
    expiresAt: Number(raw.expires_at ?? raw.expiresAt ?? (Date.now() + 48 * 3600 * 1000)),
    completedAt: raw.completed_at ? Number(raw.completed_at) : (raw.completedAt ? Number(raw.completedAt) : null),
  };
}

// --- REALTIME MULTIPLAYER MATCH CHANNEL ---
export function subscribeToMatchChannel(matchCode, onPayloadReceived) {
  const channel = supabase.channel(`match_${matchCode}`, {
    config: {
      broadcast: { self: false }
    }
  });

  channel
    .on('broadcast', { event: 'score_update' }, (payload) => {
      if (onPayloadReceived) onPayloadReceived(payload.payload);
    })
    .subscribe();

  return {
    sendScoreUpdate: (data) => {
      channel.send({
        type: 'broadcast',
        event: 'score_update',
        payload: data
      });
    },
    unsubscribe: () => {
      supabase.removeChannel(channel);
    }
  };
}

// --- REAL FRIEND REQUESTS SYSTEM (SUPABASE & REALTIME) ---
export async function sendFriendRequestToSupabase({ sender, targetIdentifier }) {
  if (!sender || !targetIdentifier) return { error: 'Dati mancanti' };
  const cleanTarget = targetIdentifier.trim().toLowerCase();
  const cleanSenderName = sender.name || 'Amico';
  const cleanSenderEmail = sender.email || '';

  let resolvedTarget = cleanTarget;
  try {
    const targetProfile = await fetchUserProfileFromSupabase(cleanTarget);
    if (targetProfile?.email) {
      resolvedTarget = targetProfile.email.toLowerCase();
    }
  } catch (_) {}

  const requestId = `fr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const requestPayload = {
    id: requestId,
    sender_name: cleanSenderName,
    sender_email: cleanSenderEmail,
    sender_avatar: sender.avatar || null,
    target_identifier: resolvedTarget,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  try {
    await supabase.from('friend_requests').insert([requestPayload]);
  } catch (e) {
    console.warn('[Supabase FriendRequest] Insert error:', e);
  }

  fetchUserProfileFromSupabase(cleanTarget).then(targetProfile => {
    const targetsToNotify = new Set([cleanTarget.replace(/[^a-zA-Z0-9]/g, '_')]);
    if (resolvedTarget !== cleanTarget) {
      targetsToNotify.add(resolvedTarget.replace(/[^a-zA-Z0-9]/g, '_'));
    }
    if (targetProfile) {
      if (targetProfile.email) targetsToNotify.add(targetProfile.email.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      if (targetProfile.name) targetsToNotify.add(targetProfile.name.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      if (targetProfile.playerCode) targetsToNotify.add(targetProfile.playerCode.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
    }

    targetsToNotify.forEach((tKey) => {
      try {
        const userChannel = supabase.channel(`user_inbox_${tKey}`);
        userChannel.subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            userChannel.send({
              type: 'broadcast',
              event: 'friend_request_received',
              payload: requestPayload,
            });
            setTimeout(() => {
              try { supabase.removeChannel(userChannel); } catch(_) {}
            }, 3500);
          }
        });
      } catch (_) {}
    });

    if (targetProfile?.fcmToken) {
      sendPushNotification({
        token: targetProfile.fcmToken,
        title: '👥 Nuova Richiesta di Amicizia!',
        message: `${cleanSenderName} vuole aggiungerti come amico su Ten Seconds!`,
        data: { type: 'friend_request', requestId: requestPayload.id }
      }).catch(() => {});
    }
  }).catch(() => {});

  return { success: true, request: requestPayload };
}

export async function fetchIncomingFriendRequestsFromSupabase(user) {
  if (!user || user.name === 'Ospite') return [];
  const userCode = getDeterministicPlayerCode(user.email || user.id);
  const identifiers = [
    user.name?.trim(),
    user.name?.trim().toLowerCase(),
    user.email?.trim(),
    user.email?.trim().toLowerCase(),
    user.playerCode?.trim(),
    user.playerCode?.trim().toLowerCase(),
    userCode.trim(),
    userCode.trim().toLowerCase(),
    user.id ? String(user.id).trim() : null,
    user.id ? String(user.id).trim().toLowerCase() : null
  ].filter(Boolean);

  const uniqueIdentifiers = Array.from(new Set(identifiers));
  if (uniqueIdentifiers.length === 0) return [];

  try {
    const orFilters = uniqueIdentifiers.map(id => `target_identifier.ilike.${id}`);
    const { data, error } = await supabase
      .from('friend_requests')
      .select('*')
      .or(orFilters.join(','))
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (!error && data) return data;
  } catch (e) {
    console.warn('[Supabase FriendRequests] Fetch error:', e);
  }

  return [];
}

export async function fetchOutgoingFriendRequestsFromSupabase(user) {
  if (!user || user.name === 'Ospite') return [];
  const senderFilters = [];
  if (user.email) senderFilters.push(`sender_email.ilike.${user.email.trim()}`);
  if (user.name && user.name !== 'Ospite') senderFilters.push(`sender_name.ilike.${user.name.trim()}`);

  if (senderFilters.length === 0) return [];
  try {
    const { data, error } = await supabase
      .from('friend_requests')
      .select('*')
      .or(senderFilters.join(','))
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (!error && data) return data;
  } catch (e) {
    console.warn('[Supabase Outgoing FriendRequests] Fetch error:', e);
  }
  return [];
}

export async function fetchUserFriendsFromSupabase(user) {
  if (!user || user.name === 'Ospite') return [];
  const userCode = getDeterministicPlayerCode(user.email || user.id);
  const identifiers = [
    user.name && user.name !== 'Ospite' ? user.name.trim().toLowerCase() : null,
    user.email ? user.email.trim().toLowerCase() : null,
    user.playerCode ? user.playerCode.trim().toLowerCase() : null,
    userCode.trim().toLowerCase()
  ].filter(Boolean);

  if (identifiers.length === 0) return [];

  try {
    const friendSet = new Set();

    const targetFilters = identifiers.map(id => `target_identifier.ilike.${id}`);
    const { data: acceptedReceived } = await supabase
      .from('friend_requests')
      .select('sender_name, sender_email')
      .or(targetFilters.join(','))
      .eq('status', 'accepted');

    if (acceptedReceived) {
      acceptedReceived.forEach(r => {
        const id = r.sender_email || r.sender_name;
        if (id && id !== 'Ospite') friendSet.add(id);
      });
    }

    const senderFilters = [];
    if (user.email) senderFilters.push(`sender_email.ilike.${user.email.trim()}`);
    if (user.name && user.name !== 'Ospite') senderFilters.push(`sender_name.ilike.${user.name.trim()}`);

    if (senderFilters.length > 0) {
      const { data: acceptedSent } = await supabase
        .from('friend_requests')
        .select('target_identifier')
        .or(senderFilters.join(','))
        .eq('status', 'accepted');

      if (acceptedSent) {
        acceptedSent.forEach(r => {
          if (r.target_identifier && r.target_identifier !== 'Ospite') {
            friendSet.add(r.target_identifier);
          }
        });
      }
    }

    const resolvedNames = new Set();
    const leaderboardData = await getLeaderboardFromSupabase();
    for (const f of Array.from(friendSet)) {
      const cleanF = f.toLowerCase().trim();
      const match = (leaderboardData || []).find(p => 
        (p.user_email && p.user_email.toLowerCase() === cleanF) ||
        (p.user_name && p.user_name.toLowerCase() === cleanF) ||
        (p.user_id && p.user_id.toLowerCase() === cleanF) ||
        (getDeterministicPlayerCode(p.user_email || p.user_id).toLowerCase() === cleanF)
      );
      if (match) {
        resolvedNames.add(match.user_name || match.user_email.split('@')[0]);
      } else if (!cleanF.startsWith('ts-') && !cleanF.includes('@')) {
        resolvedNames.add(f);
      }
    }

    return Array.from(resolvedNames);
  } catch (e) {
    console.warn('[Supabase] Fetch friends exception:', e);
    return [];
  }
}

export async function removeFriendFromSupabase(currentUser, friendIdentifier) {
  if (!currentUser || !friendIdentifier) return { success: false };
  try {
    const userIds = [
      currentUser.email?.trim().toLowerCase(),
      currentUser.name && currentUser.name !== 'Ospite' ? currentUser.name.trim().toLowerCase() : null,
      currentUser.playerCode ? currentUser.playerCode.trim().toLowerCase() : null,
      currentUser.id ? String(currentUser.id).trim().toLowerCase() : null
    ].filter(Boolean);

    const cleanFriend = typeof friendIdentifier === 'string' ? friendIdentifier.trim().toLowerCase() : '';
    const friendObj = typeof friendIdentifier === 'object' ? friendIdentifier : null;
    const friendIds = [
      cleanFriend || null,
      friendObj?.email?.trim().toLowerCase(),
      friendObj?.name?.trim().toLowerCase(),
      friendObj?.playerCode?.trim().toLowerCase()
    ].filter(Boolean);

    for (const uId of userIds) {
      for (const fId of friendIds) {
        await supabase
          .from('friend_requests')
          .delete()
          .or(`and(sender_email.ilike.${uId},target_identifier.ilike.${fId}),and(sender_name.ilike.${uId},target_identifier.ilike.${fId}),and(sender_email.ilike.${fId},target_identifier.ilike.${uId}),and(sender_name.ilike.${fId},target_identifier.ilike.${uId}),and(target_identifier.ilike.${uId},target_identifier.ilike.${fId})`);
      }
    }
    return { success: true };
  } catch (err) {
    console.warn('[Supabase Friend Removal] Error:', err);
    return { success: false, error: err?.message };
  }
}

export async function respondToFriendRequestInSupabase(requestId, status, senderInfo, currentUser) {
  try {
    await supabase
      .from('friend_requests')
      .update({ status, responded_at: new Date().toISOString() })
      .eq('id', requestId);
  } catch (_) {}

  const senderIdentifier = senderInfo?.sender_email || senderInfo?.sender_name || '';
  if (senderIdentifier) {
    fetchUserProfileFromSupabase(senderIdentifier).then(senderProfile => {
      const targetsToNotify = new Set([senderIdentifier.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_')]);
      if (senderProfile) {
        if (senderProfile.email) targetsToNotify.add(senderProfile.email.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
        if (senderProfile.name) targetsToNotify.add(senderProfile.name.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
        if (senderProfile.playerCode) targetsToNotify.add(senderProfile.playerCode.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      }

      targetsToNotify.forEach((targetKey) => {
        try {
          const respChannel = supabase.channel(`user_inbox_${targetKey}`);
          respChannel.subscribe((st) => {
            if (st === 'SUBSCRIBED') {
              respChannel.send({
                type: 'broadcast',
                event: 'friend_request_response',
                payload: {
                  requestId,
                  status,
                  responder: {
                    name: currentUser?.name || 'Amico',
                    email: currentUser?.email,
                    playerCode: currentUser?.playerCode,
                    avatar: currentUser?.avatar
                  }
                }
              });
              setTimeout(() => {
                try { supabase.removeChannel(respChannel); } catch(_) {}
              }, 3500);
            }
          });
        } catch (_) {}
      });

      if (status === 'accepted' && senderProfile?.fcmToken) {
        sendPushNotification({
          token: senderProfile.fcmToken,
          title: '✨ Richiesta di Amicizia Accettata!',
          message: `${currentUser?.name || 'Un amico'} ha accettato la tua richiesta di amicizia!`,
          data: { type: 'friend_accepted' }
        }).catch(() => {});
      }
    }).catch(() => {});
  }
}

// --- SOTTOSCRIZIONE PERSISTENTE REALTIME (POSTGRES_CHANGES + BROADCAST HYBRID) ---
export function subscribeToUserInbox(user, { onFriendRequestReceived, onFriendRequestResponse, onChallengeReceived, onChallengeCompleted, onTournamentReceived, onTournamentUpdated } = {}) {
  if (!user || user.name === 'Ospite') return { unsubscribe: () => {} };
  
  const rawKeys = [
    user.email ? user.email.trim().toLowerCase() : null,
    user.name ? user.name.trim().toLowerCase() : null,
    user.playerCode ? user.playerCode.trim().toLowerCase() : null,
    user.id ? String(user.id).trim().toLowerCase() : null
  ].filter(Boolean);

  const uniqueKeys = Array.from(new Set(rawKeys.map(k => k.replace(/[^a-zA-Z0-9]/g, '_'))));
  if (uniqueKeys.length === 0) uniqueKeys.push('guest');

  const broadcastChannels = uniqueKeys.map(userKey => {
    const channel = supabase.channel(`user_inbox_${userKey}`, {
      config: { broadcast: { self: false } }
    });

    channel
      .on('broadcast', { event: 'friend_request_received' }, ({ payload }) => {
        if (onFriendRequestReceived) onFriendRequestReceived(payload);
      })
      .on('broadcast', { event: 'friend_request_response' }, ({ payload }) => {
        if (onFriendRequestResponse) onFriendRequestResponse(payload);
      })
      .on('broadcast', { event: 'challenge_received' }, ({ payload }) => {
        if (onChallengeReceived) onChallengeReceived(normalizeChallengeFromDb(payload));
      })
      .on('broadcast', { event: 'challenge_completed' }, ({ payload }) => {
        if (onChallengeCompleted) onChallengeCompleted(payload);
      })
      .on('broadcast', { event: 'tournament_received' }, ({ payload }) => {
        if (onTournamentReceived) onTournamentReceived(normalizeTournamentFromDb(payload));
      })
      .on('broadcast', { event: 'tournament_updated' }, ({ payload }) => {
        if (onTournamentUpdated) onTournamentUpdated(normalizeTournamentFromDb(payload));
      })
      .subscribe();

    return channel;
  });

  const userIdentifiers = [
    user.name?.trim().toLowerCase(),
    user.email?.trim().toLowerCase(),
    user.playerCode?.trim().toLowerCase(),
    user.id ? String(user.id).trim().toLowerCase() : null
  ].filter(Boolean);

  const realtimeDbChannel = supabase
    .channel(`realtime_db_inbox_${user.id || user.email || 'user'}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'async_challenges' }, (payload) => {
      const row = payload.new || payload.old;
      if (!row) return;
      const normalized = normalizeChallengeFromDb(row);
      if (!normalized) return;

      const challengerEmail = normalized.challenger?.email?.toLowerCase();
      const challengerName = normalized.challenger?.name?.toLowerCase();
      const challengedTarget = String(normalized.challenged || '').toLowerCase();

      const isForMe = userIdentifiers.some(id => id === challengedTarget) || challengedTarget === '__random_opponent__';
      const isFromMe = userIdentifiers.some(id => id === challengerEmail || id === challengerName);

      if (payload.eventType === 'INSERT') {
        if (isForMe && !isFromMe && onChallengeReceived) {
          onChallengeReceived(normalized);
        }
      } else if (payload.eventType === 'UPDATE') {
        if (normalized.status === 'completed' && onChallengeCompleted && (isForMe || isFromMe)) {
          const opponentIdentifier = isFromMe 
            ? normalized.challenged 
            : (normalized.challenger?.name || normalized.challenger?.email || 'Avversario');
          onChallengeCompleted({
            challengeId: normalized.id,
            winner: normalized.winner,
            status: normalized.status,
            challengedScore: normalized.challengedScore,
            challengedCorrect: normalized.challengedCorrect,
            challengedName: opponentIdentifier,
            challenged: opponentIdentifier
          });
        }
      }
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'async_tournaments' }, (payload) => {
      const row = payload.new || payload.old;
      if (!row) return;
      const normalized = normalizeTournamentFromDb(row);
      if (!normalized) return;

      const invited = (normalized.invited_identifiers || []).map(i => String(i).toLowerCase());
      const isInvited = userIdentifiers.some(id => invited.includes(id));
      const isCreator = user.email && normalized.creator?.email && user.email.toLowerCase() === normalized.creator.email.toLowerCase();

      if (payload.eventType === 'INSERT') {
        if (isInvited && !isCreator && onTournamentReceived) {
          onTournamentReceived(normalized);
        }
      } else if (payload.eventType === 'UPDATE') {
        if (onTournamentUpdated) {
          onTournamentUpdated(normalized);
        }
      }
    })
    .subscribe();

  return {
    unsubscribe: () => {
      broadcastChannels.forEach(ch => {
        try { supabase.removeChannel(ch); } catch(_) {}
      });
      try { supabase.removeChannel(realtimeDbChannel); } catch(_) {}
    }
  };
}

// --- ASYNC 1VS1 CHALLENGE SYSTEM ---
export const RANDOM_OPPONENT_SENTINEL = '__RANDOM_OPPONENT__';

export async function sendAsyncChallengeToSupabase(challengePayload) {
  const isRandom = String(challengePayload.challenged || '').toUpperCase() === RANDOM_OPPONENT_SENTINEL;
  
  let targetProfile = null;
  let targetEmailOrIdentifier = challengePayload.challenged;

  if (!isRandom && challengePayload.challenged) {
    const rawTarget = typeof challengePayload.challenged === 'string'
      ? challengePayload.challenged
      : (challengePayload.challenged?.email || challengePayload.challenged?.name || '');
    if (rawTarget) {
      try {
        targetProfile = await fetchUserProfileFromSupabase(rawTarget);
        if (targetProfile?.email) {
          targetEmailOrIdentifier = targetProfile.email;
        }
      } catch (_) {}
    }
  }

  const normalizedPayload = {
    ...challengePayload,
    challenged: isRandom ? RANDOM_OPPONENT_SENTINEL : targetEmailOrIdentifier,
    challengerScore: undefined,
    challengedScore: undefined,
    winner: undefined,
  };

  try {
    const { error } = await supabase.from('async_challenges').insert([{
      id: normalizedPayload.id,
      challenger: normalizedPayload.challenger,
      challenged: normalizedPayload.challenged,
      playlist: normalizedPayload.playlist || null,
      tracks: normalizedPayload.tracks || null,
      song_count: normalizedPayload.songCount || normalizedPayload.song_count || 10,
      status: 'pending',
      created_at: normalizedPayload.createdAt || Date.now(),
      expires_at: normalizedPayload.expiresAt || null,
    }]);
    if (error) {
      console.warn('[Supabase Challenges] Insert error:', error.message);
      return { success: false, error };
    }
  } catch (e) {
    console.warn('[Supabase Challenges] Insert exception:', e);
    return { success: false, error: e };
  }

  const targetIdentifier = normalizedPayload.challenged === RANDOM_OPPONENT_SENTINEL
    ? ''
    : (typeof normalizedPayload.challenged === 'string'
        ? normalizedPayload.challenged
        : (normalizedPayload.challenged?.email || normalizedPayload.challenged?.playerCode || normalizedPayload.challenged?.name || ''));

  const processNotifications = (profile) => {
    const targetsToNotify = new Set();
    const cleanRawTarget = String(targetIdentifier).trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
    if (cleanRawTarget) targetsToNotify.add(cleanRawTarget);

    const originalTarget = typeof challengePayload.challenged === 'string' ? challengePayload.challenged.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_') : '';
    if (originalTarget) targetsToNotify.add(originalTarget);

    if (profile) {
      if (profile.email) targetsToNotify.add(profile.email.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      if (profile.name) targetsToNotify.add(profile.name.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      if (profile.playerCode) targetsToNotify.add(profile.playerCode.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
    }

    targetsToNotify.forEach((targetKey) => {
      try {
        const channel = supabase.channel(`user_inbox_${targetKey}`);
        channel.subscribe((st) => {
          if (st === 'SUBSCRIBED') {
            channel.send({
              type: 'broadcast',
              event: 'challenge_received',
              payload: normalizedPayload,
            });
            setTimeout(() => {
              try { supabase.removeChannel(channel); } catch(_) {}
            }, 3500);
          }
        });
      } catch (_) {}
    });
  };

  if (targetIdentifier) {
    if (targetProfile) {
      processNotifications(targetProfile);
    } else {
      fetchUserProfileFromSupabase(targetIdentifier).then(p => processNotifications(p)).catch(() => {});
    }
  }

  return { success: true };
}

export async function fetchAllUserChallengesFromSupabase(user) {
  if (!user || user.name === 'Ospite') return [];

  const rawIdentifiers = [
    user.name?.trim(),
    user.name?.trim().toLowerCase(),
    user.email?.trim(),
    user.email?.trim().toLowerCase(),
    user.id ? String(user.id).trim() : null,
    user.id ? String(user.id).trim().toLowerCase() : null
  ].filter(Boolean);

  const uniqueIdentifiers = Array.from(new Set(rawIdentifiers));
  if (uniqueIdentifiers.length === 0) return [];

  try {
    const challengedFilters = uniqueIdentifiers.map(id => `challenged.eq.${id}`);
    challengedFilters.push(`challenged.eq.${RANDOM_OPPONENT_SENTINEL}`);

    const challengerFilters = [];
    if (user.email) challengerFilters.push(`challenger->>email.ilike.${user.email.trim()}`);
    if (user.name && user.name !== 'Ospite') challengerFilters.push(`challenger->>name.ilike.${user.name.trim()}`);

    const allOr = [...challengedFilters, ...challengerFilters];

    const { data, error } = await supabase
      .from('async_challenges')
      .select('*')
      .or(allOr.join(','))
      .order('created_at', { ascending: false })
      .limit(50);

    if (!error && data) {
      return data.map(normalizeChallengeFromDb);
    }
    if (error) {
      console.warn('[Supabase Challenges] Fetch all error:', error.message);
      return null;
    }
  } catch (e) {
    console.warn('[Supabase Challenges] Fetch all exception:', e);
    return null;
  }
  return null;
}

export async function fetchIncomingChallengesFromSupabase(user) {
  return await fetchAllUserChallengesFromSupabase(user);
}

export async function notifyChallengeCompletedInSupabase(challengeId, resultPayload, challengerInfo) {
  const challengerIdentifier = challengerInfo?.email || challengerInfo?.name || '';
  if (challengerIdentifier) {
    fetchUserProfileFromSupabase(challengerIdentifier).then(challengerProfile => {
      const targetsToNotify = new Set();
      const rawKey = challengerIdentifier.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
      if (rawKey) targetsToNotify.add(rawKey);

      if (challengerProfile) {
        if (challengerProfile.email) targetsToNotify.add(challengerProfile.email.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
        if (challengerProfile.name) targetsToNotify.add(challengerProfile.name.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      }

      targetsToNotify.forEach((challengerKey) => {
        try {
          const channel = supabase.channel(`user_inbox_${challengerKey}`);
          channel.subscribe((st) => {
            if (st === 'SUBSCRIBED') {
              channel.send({
                type: 'broadcast',
                event: 'challenge_completed',
                payload: { challengeId, ...resultPayload },
              });
              setTimeout(() => {
                try { supabase.removeChannel(channel); } catch(_) {}
              }, 3500);
            }
          });
        } catch (_) {}
      });
    // La notifica di completamento sfida viene inviata direttamente dal trigger
    // database PostgreSQL (trigger_async_challenges_webhook su UPDATE status='completed').
    }).catch(() => {});
  }
}

// --- ASYNC MULTI-USER TOURNAMENT SYSTEM ---
export async function sendAsyncTournamentToSupabase(tournamentPayload) {
  const creatorEmail = tournamentPayload.creator?.email ? tournamentPayload.creator.email.trim().toLowerCase() : '';
  const creatorUserId = (tournamentPayload.creator?.userId || tournamentPayload.creator?.id) ? String(tournamentPayload.creator.userId || tournamentPayload.creator.id).trim().toLowerCase() : '';
  const creatorName = tournamentPayload.creator?.name ? tournamentPayload.creator.name.trim().toLowerCase() : '';
  const creatorCode = tournamentPayload.creator?.playerCode ? tournamentPayload.creator.playerCode.trim().toLowerCase() : '';

  const isCreatorId = (val) => {
    if (!val) return false;
    const clean = String(val).trim().toLowerCase();
    return clean === creatorEmail || clean === creatorUserId || clean === creatorName || clean === creatorCode;
  };

  // 1. Risolvi gli identificatori dei partecipanti (Codici Giocatore, Username) alle rispettive email (escludendo categoricamente il creatore)
  const rawInvited = (tournamentPayload.invited_identifiers || tournamentPayload.invitedFriends || [])
    .filter(item => !isCreatorId(item));
  const resolvedEmails = new Set();
  const resolvedUserIds = new Set();

  for (const item of rawInvited) {
    const raw = typeof item === 'string' ? item.trim() : (item?.email || item?.identifier || item?.name || '');
    if (!raw || isCreatorId(raw)) continue;
    if (raw.includes('@')) {
      if (!isCreatorId(raw)) resolvedEmails.add(raw.toLowerCase());
    } else {
      try {
        const prof = await fetchUserProfileFromSupabase(raw);
        if (prof?.id && !isCreatorId(prof.id)) resolvedUserIds.add(String(prof.id).toLowerCase());
        if (prof?.email && !isCreatorId(prof.email)) resolvedEmails.add(prof.email.trim().toLowerCase());
      } catch (_) {}
    }
  }

  // NOTA BENE: Il creatore NON deve comparire in allInvitedLower né in invited_identifiers
  const allInvitedLower = Array.from(new Set([
    ...(tournamentPayload.invited_identifiers || []).map(i => String(i).trim().toLowerCase()),
    ...resolvedEmails,
    ...resolvedUserIds
  ])).filter(id => id && !isCreatorId(id));

  // Aggiorna participants assegnando userId e email risolte ove mancanti
  const updatedParticipants = await Promise.all((tournamentPayload.participants || []).map(async p => {
    let email = p.email ? p.email.trim().toLowerCase() : null;
    let userId = p.userId || p.user_id || (p.id && String(p.id).length > 20 ? p.id : null);
    const ident = String(p.identifier || p.name || '').trim();
    if (!email && ident.includes('@')) email = ident.toLowerCase();

    if ((!userId || !email) && ident) {
      try {
        const prof = await fetchUserProfileFromSupabase(ident);
        if (prof?.id && !userId) userId = prof.id;
        if (prof?.email && !email) email = prof.email.trim().toLowerCase();
      } catch (_) {}
    }

    return {
      ...p,
      userId: userId || null,
      email: email || null,
      identifier: p.identifier || email || userId || p.name,
    };
  }));

  // 2. Prepara il record Postgres conforme allo schema DB e alla policy RLS (status: 'pending')
  const dbPayload = {
    id: tournamentPayload.id,
    name: tournamentPayload.name || 'Torneo Musicale',
    creator: tournamentPayload.creator || {},
    invited_identifiers: allInvitedLower,
    playlist: tournamentPayload.playlist || null,
    tracks: tournamentPayload.tracks || [],
    song_count: Number(tournamentPayload.songCount || tournamentPayload.song_count || 10),
    participants: updatedParticipants,
    status: 'pending',
    winner: null,
    created_at: Number(tournamentPayload.createdAt || tournamentPayload.created_at || Date.now()),
    expires_at: Number(tournamentPayload.expiresAt || tournamentPayload.expires_at || (Date.now() + 48 * 3600 * 1000)),
  };

  try {
    const { error } = await supabase.from('async_tournaments').insert([dbPayload]);
    if (error) {
      console.warn('[Supabase Tournaments] Insert error:', error.message);
      return { success: false, error };
    }
  } catch (err) {
    console.warn('[Supabase Tournaments] Insert exception:', err);
    return { success: false, error: err };
  }

  // 3. Notifiche broadcast agli invitati (escluso tassativamente il creatore per evitare re-sync a vuoto o notifiche spurie)
  allInvitedLower.forEach((targetIdentifier) => {
    if (isCreatorId(targetIdentifier)) return;

    fetchUserProfileFromSupabase(targetIdentifier).then((profile) => {
      const targetsToNotify = new Set();
      const rawKey = String(targetIdentifier).trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
      if (rawKey) targetsToNotify.add(rawKey);

      if (profile?.email && !isCreatorId(profile.email)) targetsToNotify.add(profile.email.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      if (profile?.name && !isCreatorId(profile.name)) targetsToNotify.add(profile.name.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));

      targetsToNotify.forEach((targetKey) => {
        try {
          const channel = supabase.channel(`user_inbox_${targetKey}`);
          channel.subscribe((st) => {
            if (st === 'SUBSCRIBED') {
              channel.send({
                type: 'broadcast',
                event: 'tournament_received',
                payload: { ...tournamentPayload, participants: updatedParticipants, invited_identifiers: allInvitedLower },
              });
              setTimeout(() => {
                try { supabase.removeChannel(channel); } catch(_) {}
              }, 3500);
            }
          });
        } catch (_) {}
      });
    }).catch(() => {});
  });

  return { success: true, dbRow: dbPayload };
}

export async function fetchIncomingTournamentsFromSupabase(user) {
  if (!user || user.name === 'Ospite') return [];
  const userEmail = user.email ? user.email.trim().toLowerCase() : '';
  const userId = user.id ? String(user.id).trim().toLowerCase() : '';
  const userName = user.name ? user.name.trim().toLowerCase() : '';
  const userCode = user.playerCode ? user.playerCode.trim().toLowerCase() : '';

  const identifiers = [userEmail, userId, userName, userCode].filter(Boolean);

  try {
    const { data, error } = await supabase
      .from('async_tournaments')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(30);

    if (!error && data) {
      const filtered = data.filter((t) => {
        // 1. Accesso garantito al creatore tramite userId, email o name (senza dipendere da invited_identifiers)
        if (t.creator?.userId && userId && String(t.creator.userId).trim().toLowerCase() === userId) return true;
        if (t.creator?.email && userEmail && t.creator.email.toLowerCase() === userEmail) return true;
        if (t.creator?.name && userName && t.creator.name.toLowerCase() === userName) return true;

        // 2. Accesso garantito se presente tra i participants
        if (Array.isArray(t.participants) && t.participants.some(p => {
          const pUserId = p.userId ? String(p.userId).trim().toLowerCase() : '';
          const pEmail = p.email ? String(p.email).trim().toLowerCase() : '';
          const pIdent = p.identifier ? String(p.identifier).trim().toLowerCase() : '';
          return (userId && pUserId === userId) || (userEmail && pEmail === userEmail) || (pIdent && identifiers.includes(pIdent));
        })) return true;

        // 3. Utente invitato presente in invited_identifiers
        const invited = (t.invited_identifiers || []).map(i => String(i).toLowerCase());
        return identifiers.some((id) => invited.includes(id));
      });
      return filtered.map(normalizeTournamentFromDb);
    }
    if (error) {
      console.warn('[Supabase Tournaments] Fetch error:', error.message);
      return null;
    }
  } catch (e) {
    console.warn('[Supabase Tournaments] Fetch exception:', e);
    return null;
  }

  return null;
}

export async function submitTournamentScoreToSupabase(tournamentId, updatedTournament, participantInfo) {
  const invitedList = updatedTournament.invited_identifiers || [];
  invitedList.forEach((targetIdentifier) => {
    fetchUserProfileFromSupabase(targetIdentifier).then((profile) => {
      const targetsToNotify = new Set();
      const rawKey = String(targetIdentifier).trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
      if (rawKey) targetsToNotify.add(rawKey);
      if (profile?.email) targetsToNotify.add(profile.email.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));
      if (profile?.name) targetsToNotify.add(profile.name.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'));

      targetsToNotify.forEach((targetKey) => {
        try {
          const channel = supabase.channel(`user_inbox_${targetKey}`);
          channel.subscribe((st) => {
            if (st === 'SUBSCRIBED') {
              channel.send({
                type: 'broadcast',
                event: 'tournament_updated',
                payload: updatedTournament,
              });
              setTimeout(() => {
                try { supabase.removeChannel(channel); } catch(_) {}
              }, 3500);
            }
          });
        } catch (_) {}
      });

      if (updatedTournament.status === 'completed' && updatedTournament.winner?.name && profile?.fcmToken) {
        sendPushNotification({
          token: profile.fcmToken,
          title: '👑 Torneo Concluso!',
          message: `Il torneo "${updatedTournament.name}" è terminato! Vincitore: ${updatedTournament.winner.name} con ${updatedTournament.winner.score?.toLocaleString('it-IT')} PT!`,
          data: { type: 'tournament_completed', tournamentId }
        }).catch(() => {});
      }
    }).catch(() => {});
  });
}

// --- SEND PUSH NOTIFICATIONS VIA SUPABASE EDGE FUNCTION ---
export async function sendPushNotification({ token, tokens, topic, title, message, body, data, imageUrl }) {
  try {
    const { data: responseData, error } = await supabase.functions.invoke('send-fcm-notification', {
      body: {
        token,
        tokens,
        topic,
        title,
        message: message || body,
        imageUrl,
        data,
      },
    });

    if (error) {
      console.warn('[FCM Push] Edge function invocation notice:', error);
      return { success: false, error: error.message };
    }

    return responseData || { success: true };
  } catch (err) {
    console.warn('[FCM Push] Notification dispatch error:', err);
    return { success: false, error: err?.message || 'Push notification error' };
  }
}
