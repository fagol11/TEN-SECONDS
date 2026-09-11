import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Intestazione di autorizzazione mancante" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ error: "Configurazione server Supabase non valida" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 1. Validazione token JWT dell'utente chiamante (solo il proprietario dell'account può azzerare le proprie stats)
    const supabaseUserClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });

    const {
      data: { user },
      error: userError,
    } = await supabaseUserClient.auth.getUser();

    if (userError || !user || !user.id) {
      return new Response(
        JSON.stringify({ error: "Sessione utente non valida o non autenticata" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Client Admin con Service Role per cancellazione e azzeramento
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    // 3. Cancella tutti i record scores dell'utente
    await supabaseAdmin
      .from("scores")
      .delete()
      .eq("user_id", user.id);

    // 4. Azzera la riga user_stats dell'utente
    const resetStatsPayload = {
      user_id: user.id,
      death_parade_record: 0,
      death_parade_points_record: 0,
      note_streak: 0,
      last_daily_date: null,
      perfect_games_count: 0,
      challenges_won: 0,
      tournaments_won: 0,
      total_games_played: 0,
      total_songs_guessed: 0,
      updated_at: new Date().toISOString(),
    };

    const { data: updatedStats, error: statsErr } = await supabaseAdmin
      .from("user_stats")
      .upsert(resetStatsPayload, { onConflict: "user_id" })
      .select()
      .single();

    if (statsErr) {
      console.error("[reset-user-stats] Error resetting stats:", statsErr);
      return new Response(
        JSON.stringify({ error: `Errore reset: ${statsErr.message}` }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Statistiche e punteggi azzerati con successo.",
        stats: updatedStats || resetStatsPayload,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("[reset-user-stats] Unexpected exception:", err);
    return new Response(
      JSON.stringify({ error: err?.message || "Errore interno del server" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
