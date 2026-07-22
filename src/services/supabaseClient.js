import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://rddntjxqbqwrcdvhuaxi.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_3Z6TY-lCTZAbhi6GsX4QyA_AmW0ctpq';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

// --- GOOGLE OAUTH LOGIN ---
export async function signInWithGoogle() {
  try {
    // Check if session already exists
    const { data: sessionData } = await supabase.auth.getSession();
    if (sessionData?.session?.user) {
      return sessionData.session.user;
    }

    // Try OAuth sign in
    const res = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        skipBrowserRedirect: true // Prevents browser crash if provider is disabled in Supabase dashboard
      }
    });

    if (res.error) {
      console.warn('Supabase Google Auth notice (Fallback to Local Google User):', res.error.message);
      return null;
    }

    if (res.data?.url) {
      window.location.href = res.data.url;
    }
    return res.data;
  } catch (err) {
    console.warn('Supabase Google Auth warning (Fallback to Local Session):', err.message);
    return null;
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

// --- FETCH REALTIME GLOBAL LEADERBOARD ---
export async function getLeaderboardFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .order('score', { ascending: false })
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
