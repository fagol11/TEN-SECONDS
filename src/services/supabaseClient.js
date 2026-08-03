import { createClient } from '@supabase/supabase-js';

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

// --- GOOGLE OAUTH LOGIN (WEB REDIRECT FALLBACK) ---
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

// --- SAVE / UPSERT SCORE TO SUPABASE LEADERBOARD ---
export async function saveScoreToSupabase(user) {
  if (!user || !user.name) return null;
  try {
    const userId = user.email || user.id || `user_${user.name.toLowerCase().replace(/\s+/g, '_')}`;
    const payload = {
      user_id: userId,
      user_email: user.email || null,
      user_name: user.name,
      avatar_url: user.avatar || null,
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
