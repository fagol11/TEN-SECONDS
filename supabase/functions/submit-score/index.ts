import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Massimo teorico di punti ottenibili in una singola partita
const MAX_THEORETICAL_SCORE = 35000;
const VALID_MODES = [
  "CLASSIC",
  "DAILY",
  "DEATH_PARADE",
  "TOURNAMENT",
  "CHALLENGE",
  "CALIBRATION",
  "CUSTOM",
  "SURVIVAL",
];

serve(async (req) => {
  // Handle CORS Preflight
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

    // 1. Validazione token JWT dell'utente chiamante
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

    // 2. Lettura e validazione dei parametri della sessione di gioco
    const body = await req.json().catch(() => ({}));
    const {
      modalita = "CLASSIC",
      correct = 0,
      wrong = 0,
      correctTimeMs = 0,
      totalTimeMs = 0,
      maxStreak = 0,
      songCount = 10,
      isWon = false,
      punteggio = null, // Fallback legacy opzionale
      totalScore = null,
      clientDate = null, // Data locale utente YYYY-MM-DD per calcolo streak accurato
    } = body;

    const modeStr = String(modalita || "CLASSIC").toUpperCase().trim();
    if (!VALID_MODES.includes(modeStr)) {
      return new Response(
        JSON.stringify({ error: `Modalità '${modalita}' non valida.` }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const numCorrect = Math.max(0, Math.floor(Number(correct) || 0));
    const numWrong = Math.max(0, Math.floor(Number(wrong) || 0));
    const numCorrectTimeMs = Math.max(0, Number(correctTimeMs) || 0);
    const numMaxStreak = Math.max(0, Math.floor(Number(maxStreak) || 0));
    const numSongCount = Math.max(1, Math.floor(Number(songCount) || 10));

    // 3. Calcolo Punteggio Server-Side (Autoritativo Anti-Cheat)
    let calculatedScore = 0;
    const pointsPerCorrect = modeStr === "DEATH_PARADE" ? 100 : 200;
    const basePoints = numCorrect * pointsPerCorrect;

    const avgCorrectTimeSec = numCorrect > 0
      ? Number((numCorrectTimeMs / 1000 / numCorrect).toFixed(2))
      : 10.0;

    const rawMultiplier = 1.0 + Math.max(0, (10.0 - avgCorrectTimeSec) / 10.0) * 0.8;
    const speedMultiplier = Number(rawMultiplier.toFixed(2));
    const speedBonus = Math.round(basePoints * (speedMultiplier - 1.0));
    const streakBonus = numMaxStreak * 20;
    const dailyBonus = (modeStr === "DAILY" && numCorrect >= 10) ? 5000 : 0;

    calculatedScore = basePoints + speedBonus + streakBonus + dailyBonus;

    // Se fornito un punteggio precalcolato dal client, verifica la plausibilità
    if (punteggio !== null && punteggio !== undefined) {
      const clientScore = Number(punteggio);
      if (!isNaN(clientScore) && clientScore > 0 && Math.abs(clientScore - calculatedScore) <= 250) {
        calculatedScore = clientScore;
      }
    }

    const finalScore = Math.max(0, Math.min(Math.round(calculatedScore), MAX_THEORETICAL_SCORE));

    // 4. Connessione con Client Service Role per operazioni atomiche nel database
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    // Assicurati che esista la riga in public.profiles
    const { data: profileCheck } = await supabaseAdmin
      .from("profiles")
      .select("id, email, display_name, avatar_url")
      .eq("id", user.id)
      .maybeSingle();

    if (!profileCheck) {
      const vName =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.user_metadata?.displayName ||
        (user.email ? user.email.split("@")[0] : "Giocatore");
      const vAvatar =
        user.user_metadata?.avatar_url ||
        user.user_metadata?.picture ||
        null;

      await supabaseAdmin.from("profiles").upsert(
        {
          id: user.id,
          email: user.email || `${user.id}@player.tenseconds`,
          display_name: vName,
          avatar_url: vAvatar,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );
    }

    // 5. Inserimento del record nella tabella public.scores
    const { data: insertedScore, error: insertError } = await supabaseAdmin
      .from("scores")
      .insert([
        {
          user_id: user.id,
          punteggio: finalScore,
          modalita: modeStr,
          creato_il: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("[submit-score] Error inserting score:", insertError);
      return new Response(
        JSON.stringify({ error: `Errore database scores: ${insertError.message}` }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 6. Aggiornamento Atomico di public.user_stats
    const { data: existingStats } = await supabaseAdmin
      .from("user_stats")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    const currentStats = existingStats || {
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
      total_correct_time_ms: 0,
      total_wrong_answers: 0,
      measured_correct_answers: 0,
    };

    // Calcolo incrementi e aggiornamenti
    const updatedGamesPlayed = (currentStats.total_games_played || 0) + 1;
    const updatedSongsGuessed = (currentStats.total_songs_guessed || 0) + numCorrect;
    const updatedWrongAnswers = (Number(currentStats.total_wrong_answers) || 0) + numWrong;
    const updatedCorrectTimeMs = (Number(currentStats.total_correct_time_ms) || 0) + numCorrectTimeMs;
    const updatedMeasuredCorrect = (Number(currentStats.measured_correct_answers) || 0) + numCorrect;

    const isPerfect = numWrong === 0 && numCorrect > 0 && numCorrect >= numSongCount;
    const updatedPerfectGames = isPerfect
      ? (currentStats.perfect_games_count || 0) + 1
      : (currentStats.perfect_games_count || 0);

    // Death parade records
    let updatedDeathRecord = currentStats.death_parade_record || 0;
    let updatedDeathPointsRecord = currentStats.death_parade_points_record || 0;
    if (modeStr === "DEATH_PARADE") {
      if (numCorrect > updatedDeathRecord) {
        updatedDeathRecord = numCorrect;
      }
      if (finalScore > updatedDeathPointsRecord) {
        updatedDeathPointsRecord = finalScore;
      }
    }

    // Note streak (Daily challenge) — calcolo basato sulla data del client o fallback UTC
    const todayStr = (clientDate && typeof clientDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(clientDate))
      ? clientDate
      : new Date().toISOString().split("T")[0];

    let updatedStreak = currentStats.note_streak || 0;
    let updatedLastDaily = currentStats.last_daily_date;

    if (modeStr === "DAILY") {
      if (!currentStats.last_daily_date) {
        updatedStreak = 1;
      } else {
        const lastDate = new Date(currentStats.last_daily_date);
        const todayDate = new Date(todayStr);
        const diffDays = Math.round(
          (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (diffDays === 1) {
          updatedStreak = (currentStats.note_streak || 0) + 1;
        } else if (diffDays > 1) {
          updatedStreak = 1;
        }
        // Se diffDays === 0 (stesso giorno), updatedStreak resta invariato
      }
      updatedLastDaily = todayStr;
    }

    // Challenges / Tournaments won
    // submit-score NON gestisce l'esito di sfide o tornei (di competenza esclusiva di submit-challenge-score).
    // Preserva fedelmente i valori già presenti nel DB senza mai calcolarli, manipolarli o azzerarli.
    const preservedChallengesWon = Number(currentStats.challenges_won || 0);
    const preservedTournamentsWon = Number(currentStats.tournaments_won || 0);

    const clientTotalScore = (totalScore !== null && !isNaN(Number(totalScore))) ? Number(totalScore) : 0;
    const currentTotalScore = Number(currentStats.total_score || 0);
    const updatedTotalScore = Math.max(clientTotalScore, currentTotalScore + finalScore);

    const statsPayload = {
      user_id: user.id,
      total_score: updatedTotalScore,
      death_parade_record: updatedDeathRecord,
      death_parade_points_record: updatedDeathPointsRecord,
      note_streak: updatedStreak,
      last_daily_date: updatedLastDaily,
      perfect_games_count: updatedPerfectGames,
      challenges_won: preservedChallengesWon,
      tournaments_won: preservedTournamentsWon,
      total_games_played: updatedGamesPlayed,
      total_songs_guessed: updatedSongsGuessed,
      total_correct_time_ms: updatedCorrectTimeMs,
      total_wrong_answers: updatedWrongAnswers,
      measured_correct_answers: updatedMeasuredCorrect,
      updated_at: new Date().toISOString(),
    };

    const { data: savedStats, error: statsError } = await supabaseAdmin
      .from("user_stats")
      .upsert(statsPayload, { onConflict: "user_id" })
      .select()
      .single();

    if (statsError) {
      console.warn("[submit-score] Notice on user_stats upsert:", statsError);
    }

    // Ometti challenges_won e tournaments_won dalla risposta stats per proteggere
    // l'ownership esclusiva di submit-challenge-score
    const {
      challenges_won: _cw,
      tournaments_won: _tw,
      ...safeStatsResponse
    } = savedStats || statsPayload || {};

    return new Response(
      JSON.stringify({
        success: true,
        score: finalScore,
        scoreRow: insertedScore,
        stats: safeStatsResponse,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : "Errore interno del server";
    console.error("[submit-score] Unexpected exception:", errMsg);
    return new Response(
      JSON.stringify({ error: errMsg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
