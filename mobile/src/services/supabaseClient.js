import { createClient } from '@supabase/supabase-js';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://rddntjxqbqwrcdvhuaxi.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_3Z6TY-lCTZAbhi6GsX4QyA_AmW0ctpq';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

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

// --- GOOGLE OAUTH LOGIN (NATIVE ACCOUNT CHOOSER + WEB FALLBACK) ---
export async function signInWithGoogle() {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    if (sessionData?.session?.user) {
      return { user: sessionData.session.user };
    }

    // 1. Native Android Google Account Chooser (1-tap account selector from phone memory)
    if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform()) {
      try {
        await GoogleAuth.initialize({
          clientId: '217514904934-ehk4cpst4votpe25ntjdp6k4fr80j4o3.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
          grantOfflineAccess: true,
        });
        const googleUser = await GoogleAuth.signIn();
        const idToken = googleUser?.authentication?.idToken || googleUser?.idToken;
        if (idToken) {
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: idToken,
          });
          if (!error && data?.session?.user) {
            return { user: data.session.user };
          }
          if (error) {
            console.warn('[Supabase Auth] ID Token sign-in warning:', error.message);
          }
        }
        return { user: googleUser };
      } catch (nativeErr) {
        console.warn('[Native GoogleAuth] Native account chooser notice:', nativeErr);
        // On native Android, do not redirect to external browser if user canceled or if native auth completed
        return { error: nativeErr?.message || 'Login nativo annullato' };
      }
    }

    // 2. Web OAuth Account Selector Fallback
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

// --- DELETE ACCOUNT (GOOGLE PLAY POLICY & GDPR COMPLIANCE) ---
export async function deleteUserAccountFromSupabase(user) {
  if (!user) return { success: false };
  try {
    const userIdentifiers = [
      user.email,
      user.name,
      user.id ? String(user.id) : null
    ].filter(Boolean);

    // 1. Delete user from public leaderboard
    if (user.email) {
      await supabase.from('leaderboard').delete().eq('user_email', user.email);
    }
    if (user.name) {
      await supabase.from('leaderboard').delete().eq('user_name', user.name);
    }

    // 2. Delete user friend requests
    for (const id of userIdentifiers) {
      await supabase.from('friend_requests').delete().or(`sender_email.eq.${id},sender_name.eq.${id},target_identifier.eq.${id}`);
    }

    // 3. Delete user async challenges
    for (const id of userIdentifiers) {
      await supabase.from('async_challenges').delete().or(`challenged.eq.${id}`);
    }

    // 4. Sign out
    await supabase.auth.signOut();

    // 5. Clear all local storage
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

// --- SAVE / UPSERT SCORE TO SUPABASE LEADERBOARD ---
export async function saveScoreToSupabase(user) {
  if (!user || !user.name) return null;
  try {
    const userId = user.email || user.id || `user_${user.name.toLowerCase().replace(/[^a-z0-9_]/g, '')}`;
    // Omit base64 data URLs for public Supabase payload to prevent payload overflow
    const avatarForSupabase = (user.avatar && user.avatar.length > 500) ? null : (user.avatar || null);

    const payload = {
      user_id: userId,
      user_email: user.email || null,
      user_name: user.name,
      avatar_url: avatarForSupabase,
      flag: user.flag || '🇮🇹',
      nationality: user.nationality || 'Italia',
      total_score: user.totalScore || 0,
      total_games_played: user.totalGamesPlayed || 0,
      perfect_games_count: user.perfectGamesCount || 0,
      challenges_won: user.challengesWon || 0,
      tournaments_won: user.tournamentsWon || 0,
      note_streak: user.noteStreak || 0,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('leaderboard')
      .upsert(payload, { onConflict: 'user_id' });

    if (error) {
      console.warn('[Supabase Leaderboard] Upsert warning:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('[Supabase Leaderboard] Save error:', err?.message);
    return null;
  }
}

// --- FETCH REALTIME GLOBAL LEADERBOARD ---
export async function getLeaderboardFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .order('total_score', { ascending: false })
      .limit(20);

    if (error || !data) return null;
    return data;
  } catch (err) {
    console.warn('Supabase Leaderboard fetch error (using fallback local data):', err);
    return null;
  }
}

// --- FETCH INDIVIDUAL USER PROFILE FROM SUPABASE ---
export async function fetchUserProfileFromSupabase(identifier) {
  if (!identifier) return null;
  try {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .or(`user_email.eq.${identifier},user_name.eq.${identifier},user_id.eq.${identifier}`)
      .limit(1)
      .maybeSingle();

    if (error || !data) return null;
    return {
      name: data.user_name,
      email: data.user_email,
      avatar: data.avatar_url,
      flag: data.flag || '🇮🇹',
      nationality: data.nationality || 'Italia',
      totalScore: data.total_score || 0,
      tournamentsWon: data.tournaments_won || 0,
      challengesWon: data.challenges_won || 0,
      noteStreak: data.note_streak || 0,
      deathParadeRecord: Number(data.death_parade_record || 0),
      deathParadePointsRecord: Number(data.death_parade_points_record || 0),
      hasCompletedCalibration: true
    };
  } catch (err) {
    console.warn('[Supabase Profile] Fetch error:', err);
    return null;
  }
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

  const requestId = `fr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const requestPayload = {
    id: requestId,
    sender_name: cleanSenderName,
    sender_email: cleanSenderEmail,
    sender_avatar: sender.avatar || null,
    target_identifier: cleanTarget,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  try {
    await supabase.from('friend_requests').insert([requestPayload]);
  } catch (e) {}

  try {
    const userChannel = supabase.channel(`user_inbox_${cleanTarget.replace(/[^a-zA-Z0-9]/g, '_')}`);
    userChannel.subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        userChannel.send({
          type: 'broadcast',
          event: 'friend_request_received',
          payload: requestPayload,
        });
        setTimeout(() => supabase.removeChannel(userChannel), 1500);
      }
    });
  } catch (e) {}

  return { success: true, request: requestPayload };
}

export async function fetchIncomingFriendRequestsFromSupabase(user) {
  if (!user) return [];
  const identifiers = [
    user.name?.trim().toLowerCase(),
    user.email?.trim().toLowerCase()
  ].filter(Boolean);

  try {
    const { data, error } = await supabase
      .from('friend_requests')
      .select('*')
      .in('target_identifier', identifiers)
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (!error && data) return data;
  } catch (e) {}

  return [];
}

export async function respondToFriendRequestInSupabase(requestId, status, senderInfo, currentUser) {
  try {
    await supabase
      .from('friend_requests')
      .update({ status, responded_at: new Date().toISOString() })
      .eq('id', requestId);
  } catch (e) {}

  if (senderInfo?.sender_name || senderInfo?.sender_email) {
    const targetKey = (senderInfo.sender_email || senderInfo.sender_name).trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
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
                avatar: currentUser?.avatar
              }
            }
          });
          setTimeout(() => supabase.removeChannel(respChannel), 1500);
        }
      });
    } catch (e) {}
  }
}

export function subscribeToUserInbox(user, { onFriendRequestReceived, onFriendRequestResponse, onChallengeReceived, onChallengeCompleted } = {}) {
  if (!user) return { unsubscribe: () => {} };
  
  const rawKeys = [
    user.email ? user.email.trim().toLowerCase() : null,
    user.name ? user.name.trim().toLowerCase() : null,
    user.id ? String(user.id).trim().toLowerCase() : null
  ].filter(Boolean);

  const uniqueKeys = Array.from(new Set(rawKeys.map(k => k.replace(/[^a-zA-Z0-9]/g, '_'))));
  if (uniqueKeys.length === 0) uniqueKeys.push('guest');

  const channels = uniqueKeys.map(userKey => {
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
        if (onChallengeReceived) onChallengeReceived(payload);
      })
      .on('broadcast', { event: 'challenge_completed' }, ({ payload }) => {
        if (onChallengeCompleted) onChallengeCompleted(payload);
      })
      .subscribe();

    return channel;
  });

  return {
    unsubscribe: () => {
      channels.forEach(ch => {
        try { supabase.removeChannel(ch); } catch(e) {}
      });
    }
  };
}

// --- ASYNC 1VS1 CHALLENGE SYSTEM (TURN-BASED WITH 48H TIMEOUT) ---
export async function sendAsyncChallengeToSupabase(challengePayload) {
  try {
    await supabase.from('async_challenges').upsert([challengePayload]);
  } catch (e) {}

  const targetIdentifier = typeof challengePayload.challenged === 'string'
    ? challengePayload.challenged
    : (challengePayload.challenged?.email || challengePayload.challenged?.name || '');

  const targetKey = targetIdentifier.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
  if (targetKey) {
    try {
      const channel = supabase.channel(`user_inbox_${targetKey}`);
      channel.subscribe((st) => {
        if (st === 'SUBSCRIBED') {
          channel.send({
            type: 'broadcast',
            event: 'challenge_received',
            payload: challengePayload,
          });
          setTimeout(() => supabase.removeChannel(channel), 1500);
        }
      });
    } catch (e) {}
  }
}

export async function fetchIncomingChallengesFromSupabase(user) {
  if (!user) return [];
  const identifiers = [
    user.name?.trim().toLowerCase(),
    user.email?.trim().toLowerCase(),
    user.id ? String(user.id).trim().toLowerCase() : null
  ].filter(Boolean);

  try {
    const { data, error } = await supabase
      .from('async_challenges')
      .select('*')
      .in('challenged', identifiers)
      .eq('status', 'pending')
      .order('createdAt', { ascending: false });

    if (!error && data) return data;
  } catch (e) {}

  return [];
}

export async function notifyChallengeCompletedInSupabase(challengeId, resultPayload, challengerInfo) {
  try {
    await supabase
      .from('async_challenges')
      .update(resultPayload)
      .eq('id', challengeId);
  } catch (e) {}

  const challengerKey = (challengerInfo?.email || challengerInfo?.name || '').trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
  if (challengerKey) {
    try {
      const channel = supabase.channel(`user_inbox_${challengerKey}`);
      channel.subscribe((st) => {
        if (st === 'SUBSCRIBED') {
          channel.send({
            type: 'broadcast',
            event: 'challenge_completed',
            payload: { challengeId, ...resultPayload },
          });
          setTimeout(() => supabase.removeChannel(channel), 1500);
        }
      });
    } catch (e) {}
  }
}
