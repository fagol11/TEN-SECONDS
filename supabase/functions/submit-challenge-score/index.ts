import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ============================================================
// Stessa formula anti-cheat di submit-score
// ============================================================
const MAX_THEORETICAL_SCORE = 35000;

function calculateScore(params: {
  correct: number;
  wrong: number;
  correctTimeMs: number;
  totalTimeMs: number;
  maxStreak: number;
  songCount: number;
  isDeathParade?: boolean;
}): number {
  const { correct, correctTimeMs, maxStreak, isDeathParade } = params;
  const numCorrect = Math.max(0, Math.floor(Number(correct) || 0));
  const numCorrectTimeMs = Math.max(0, Number(correctTimeMs) || 0);
  const numMaxStreak = Math.max(0, Math.floor(Number(maxStreak) || 0));

  const pointsPerCorrect = isDeathParade ? 100 : 200;
  const basePoints = numCorrect * pointsPerCorrect;
  const avgCorrectTimeSec = numCorrect > 0
    ? Number((numCorrectTimeMs / 1000 / numCorrect).toFixed(2))
    : 10.0;
  const rawMultiplier = 1.0 + Math.max(0, (10.0 - avgCorrectTimeSec) / 10.0) * 0.8;
  const speedMultiplier = Number(rawMultiplier.toFixed(2));
  const speedBonus = Math.round(basePoints * (speedMultiplier - 1.0));
  const streakBonus = numMaxStreak * 20;
  const calculated = basePoints + speedBonus + streakBonus;
  return Math.max(0, Math.min(Math.round(calculated), MAX_THEORETICAL_SCORE));
}

// Helper per aggiornare metriche generali in user_stats.
// Aggiorna anche death_parade_record/note_streak (preservandoli dal DB, mai azzerandoli)
// e il campo JSONB badges quando fornito in extraUpdates.
async function updateUserGameMetrics(
  supabaseAdmin: any,
  userId: string,
  numCorrect: number,
  numWrong: number,
  numCorrectTimeMs: number,
  extraUpdates: Record<string, any> = {}
) {
  try {
    const { data: stats } = await supabaseAdmin
      .from("user_stats")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    const currentStats = stats || {
      user_id: userId,
      total_games_played: 0,
      total_songs_guessed: 0,
      total_correct_time_ms: 0,
      total_wrong_answers: 0,
      measured_correct_answers: 0,
      death_parade_record: 0,
      death_parade_points_record: 0,
      note_streak: 0,
    };

    // Preserva sempre i campi non-incrementali già presenti nel DB.
    // Il death_parade_record viene aggiornato solo se extraUpdates lo supera.
    const currentDeathRecord = Number(currentStats.death_parade_record || 0);
    const currentDeathPoints = Number(currentStats.death_parade_points_record || 0);
    const incomingDeathRecord = Number(extraUpdates.death_parade_record || 0);
    const incomingDeathPoints = Number(extraUpdates.death_parade_points_record || 0);

    const finalDeathRecord = incomingDeathRecord > currentDeathRecord
      ? incomingDeathRecord
      : currentDeathRecord;
    const finalDeathPoints = incomingDeathPoints > currentDeathPoints
      ? incomingDeathPoints
      : currentDeathPoints;

    // note_streak: preservato dal DB. Non viene calcolato qui (richiede logica data DAILY),
    // ma viene portato avanti invariato per non azzerarlo su submit di sfide/tornei.
    // submit-score lo aggiorna correttamente per le partite DAILY.
    const preservedNoteStreak = Number(currentStats.note_streak || 0);

    // Rimuovi i campi che gestiamo separatamente da extraUpdates per evitare sovrascritture
    const { death_parade_record: _dr, death_parade_points_record: _dp, note_streak: _ns, ...restExtra } = extraUpdates;

    const payload = {
      user_id: userId,
      total_games_played: (Number(currentStats.total_games_played) || 0) + 1,
      total_songs_guessed: (Number(currentStats.total_songs_guessed) || 0) + numCorrect,
      total_correct_time_ms: (Number(currentStats.total_correct_time_ms) || 0) + numCorrectTimeMs,
      total_wrong_answers: (Number(currentStats.total_wrong_answers) || 0) + numWrong,
      measured_correct_answers: (Number(currentStats.measured_correct_answers) || 0) + numCorrect,
      death_parade_record: finalDeathRecord,
      death_parade_points_record: finalDeathPoints,
      note_streak: preservedNoteStreak,
      updated_at: new Date().toISOString(),
      ...restExtra,
    };

    await supabaseAdmin
      .from("user_stats")
      .upsert(payload, { onConflict: "user_id" });
  } catch (e) {
    console.warn("[submit-challenge-score] user_stats metric update notice:", e);
  }
}



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

    // 1. Verifica identità utente chiamante
    const supabaseUserClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });

    const { data: { user }, error: userError } = await supabaseUserClient.auth.getUser();
    if (userError || !user || !user.id) {
      return new Response(
        JSON.stringify({ error: "Sessione utente non valida o non autenticata" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const callerEmail = user.email || "";
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    // 2. Leggi parametri dal body
    const body = await req.json().catch(() => ({}));
    const {
      type = "challenge",   // "challenge" | "tournament"
      challengeId,
      tournamentId,
      role,                 // "challenger" | "challenged" (solo per sfide)
      correct = 0,
      wrong = 0,
      correctTimeMs = 0,
      totalTimeMs = 0,
      maxStreak = 0,
      songCount = 10,
      clientScore = null,   // score precalcolato dal client, verificato per plausibilità
    } = body;

    const numCorrect = Math.max(0, Math.floor(Number(correct) || 0));
    const numWrong = Math.max(0, Math.floor(Number(wrong) || 0));
    const numCorrectTimeMs = Math.max(0, Number(correctTimeMs) || 0);

    // 3. Calcolo score server-side autoritativo
    const calculatedScore = calculateScore({
      correct: numCorrect,
      wrong: numWrong,
      correctTimeMs: numCorrectTimeMs,
      totalTimeMs: Number(totalTimeMs) || 0,
      maxStreak: Number(maxStreak) || 0,
      songCount: Number(songCount) || 10,
    });

    // Accetta score del client se plausibile (margine ±250 per timing differenze)
    let finalScore = calculatedScore;
    if (clientScore !== null && clientScore !== undefined) {
      const cs = Number(clientScore);
      if (!isNaN(cs) && cs > 0 && Math.abs(cs - calculatedScore) <= 250) {
        finalScore = cs;
      }
    }
    finalScore = Math.max(0, Math.min(Math.round(finalScore), MAX_THEORETICAL_SCORE));

    // ============================================================
    // BRANCH CLAIM: ASSEGNAZIONE SFIDA CASUALE ALL'AVVERSARIO
    // ============================================================
    if (type === "claim" || type === "claim_challenge") {
      if (!challengeId) {
        return new Response(
          JSON.stringify({ error: "challengeId e' obbligatorio" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (!callerEmail) {
        return new Response(
          JSON.stringify({ error: "Email utente non disponibile nella sessione" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data: challenge, error: fetchErr } = await supabaseAdmin
        .from("async_challenges")
        .select("*")
        .eq("id", String(challengeId))
        .maybeSingle();

      if (fetchErr || !challenge) {
        return new Response(
          JSON.stringify({ error: `Sfida ${challengeId} non trovata` }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const challengerEmail = String(challenge.challenger?.email || "").toLowerCase();
      if (challengerEmail && challengerEmail === callerEmail.toLowerCase()) {
        return new Response(
          JSON.stringify({ error: "Non puoi accettare la tua stessa sfida casuale" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const currentChallenged = String(challenge.challenged || "");
      if (currentChallenged !== "__RANDOM_OPPONENT__" && currentChallenged.toLowerCase() !== callerEmail.toLowerCase()) {
        return new Response(
          JSON.stringify({
            error: "already_claimed",
            message: "Sfida gia' presa da un altro giocatore."
          }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (currentChallenged.toLowerCase() === callerEmail.toLowerCase()) {
        return new Response(
          JSON.stringify({ success: true, challenge }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Sostituisce la sentinella con l'email reale dell'avversario in modo atomico
      const { data: updatedRows, error: updateErr } = await supabaseAdmin
        .from("async_challenges")
        .update({ challenged: callerEmail.toLowerCase() })
        .eq("id", String(challengeId))
        .eq("challenged", "__RANDOM_OPPONENT__")
        .select();

      if (updateErr) {
        console.error("[submit-challenge-score] Errore update claim:", updateErr);
        return new Response(
          JSON.stringify({ error: "server_error", message: updateErr.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (!updatedRows || updatedRows.length === 0) {
        return new Response(
          JSON.stringify({
            error: "already_claimed",
            message: "Sfida gia' presa da un altro giocatore."
          }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const updatedChallenge = updatedRows[0];
      return new Response(
        JSON.stringify({ success: true, challenge: updatedChallenge }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ============================================================
    // BRANCH FORFEIT: VITTORIA A TAVOLINO / ACCETTAZIONE SCONFITTA
    // ============================================================
    if (type === "forfeit") {
      if (!challengeId) {
        return new Response(
          JSON.stringify({ error: "challengeId e' obbligatorio per type=forfeit" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data: challenge, error: fetchErr } = await supabaseAdmin
        .from("async_challenges")
        .select("*")
        .eq("id", String(challengeId))
        .maybeSingle();

      if (fetchErr || !challenge) {
        return new Response(
          JSON.stringify({ error: `Sfida ${challengeId} non trovata` }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const challengerEmail = String(challenge.challenger?.email || "").toLowerCase();
      const challengedEmail = String(challenge.challenged || "").toLowerCase();
      const isCallerChallenger = challengerEmail && challengerEmail === callerEmail.toLowerCase();
      const isCallerChallenged = challengedEmail && challengedEmail === callerEmail.toLowerCase();

      if (!isCallerChallenger && !isCallerChallenged) {
        return new Response(
          JSON.stringify({ error: "Non sei autorizzato a modificare questa sfida" }),
          { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const winnerName = challenge.challenger?.name || challenge.challenger?.email || "Challenger";
      const forfeitUpdatePayload = {
        status: "forfeited",
        winner: winnerName,
        completed_at: Date.now(),
      };

      const { data: updatedRows, error: updateErr } = await supabaseAdmin
        .from("async_challenges")
        .update(forfeitUpdatePayload)
        .eq("id", String(challengeId))
        .select();

      if (updateErr) {
        console.error("[submit-challenge-score] Errore update forfeit:", updateErr);
        return new Response(
          JSON.stringify({ error: updateErr.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Se l'azione era claim_win da parte del challenger, assegna la vittoria al challenger in user_stats
      if (isCallerChallenger) {
        try {
          const { data: currentStats } = await supabaseAdmin
            .from("user_stats")
            .select("challenges_won")
            .eq("user_id", user.id)
            .maybeSingle();
          const nextWon = (Number(currentStats?.challenges_won) || 0) + 1;
          await supabaseAdmin
            .from("user_stats")
            .upsert({ user_id: user.id, challenges_won: nextWon, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
        } catch (e) {
          console.warn("[submit-challenge-score] forfeit user_stats notice:", e);
        }
      }

      // Se il challenged accetta la sconfitta (accept_defeat), il challenger riceve la vittoria a tavolino.
      // In questo caso caller = challenged, quindi dobbiamo trovare l'user_id del challenger per email.
      if (isCallerChallenged) {
        const challengerEmail = String(challenge.challenger?.email || '').toLowerCase();
        if (challengerEmail) {
          try {
            const { data: challengerProfile } = await supabaseAdmin
              .from('profiles')
              .select('id')
              .ilike('email', challengerEmail)
              .limit(1)
              .maybeSingle();
            if (challengerProfile?.id) {
              const { data: cStats } = await supabaseAdmin
                .from('user_stats')
                .select('challenges_won')
                .eq('user_id', challengerProfile.id)
                .maybeSingle();
              const nextWon = (Number(cStats?.challenges_won) || 0) + 1;
              await supabaseAdmin
                .from('user_stats')
                .upsert(
                  { user_id: challengerProfile.id, challenges_won: nextWon, updated_at: new Date().toISOString() },
                  { onConflict: 'user_id' }
                );
              console.log(`[submit-challenge-score] forfeit: +1 challenges_won al challenger (${challengerEmail})`);
            }
          } catch (e) {
            console.warn('[submit-challenge-score] forfeit challenger stats notice:', e);
          }
        }
      }

      return new Response(
        JSON.stringify({ success: true, challenge: updatedRows?.[0] || challenge }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ============================================================
    // BRANCH A: SFIDA 1vs1
    // ============================================================
    if (type === "challenge") {
      if (!challengeId || !role) {
        return new Response(
          JSON.stringify({ error: "challengeId e role sono obbligatori per type=challenge" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (role !== "challenger" && role !== "challenged") {
        return new Response(
          JSON.stringify({ error: "role deve essere 'challenger' o 'challenged'" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Leggi la sfida con service_role
      const { data: challenge, error: fetchErr } = await supabaseAdmin
        .from("async_challenges")
        .select("*")
        .eq("id", String(challengeId))
        .maybeSingle();

      if (fetchErr || !challenge) {
        return new Response(
          JSON.stringify({ error: `Sfida ${challengeId} non trovata` }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Verifica che l'utente corrisponda al ruolo dichiarato
      if (role === "challenger") {
        const challengerEmail = challenge.challenger?.email || "";
        if (challengerEmail.toLowerCase() !== callerEmail.toLowerCase()) {
          return new Response(
            JSON.stringify({ error: "Non sei il challenger di questa sfida" }),
            { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        if (challenge.challenger_score !== null && challenge.challenger_score !== undefined) {
          return new Response(
            JSON.stringify({ error: "Punteggio challenger gia' registrato per questa sfida" }),
            { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      } else {
        // role === "challenged"
        const challengedEmail = String(challenge.challenged || "").toLowerCase();
        const isRandom = challengedEmail === "__random_opponent__";

        if (isRandom) {
          const challengerEmail = String(challenge.challenger?.email || "").toLowerCase();
          if (challengerEmail && challengerEmail === callerEmail.toLowerCase()) {
            return new Response(
              JSON.stringify({ error: "Non puoi rispondere alla tua stessa sfida" }),
              { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
          }
        } else if (challengedEmail !== callerEmail.toLowerCase()) {
          return new Response(
            JSON.stringify({ error: "Non sei il destinatario di questa sfida" }),
            { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        if (challenge.challenged_score !== null && challenge.challenged_score !== undefined) {
          return new Response(
            JSON.stringify({ error: "Punteggio challenged gia' registrato per questa sfida" }),
            { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }

      // Costruisci il payload di aggiornamento
      let updatePayload: Record<string, unknown> = {};
      if (role === "challenger") {
        updatePayload = {
          challenger_score: finalScore,
          challenger_correct: numCorrect,
          challenger_total_time_ms: Math.max(0, Number(totalTimeMs) || 0),
          status: "pending",
        };
      } else {
        const challengerScore = Number(challenge.challenger_score || 0);
        let winnerName: string;
        if (finalScore > challengerScore) {
          winnerName = callerEmail;
        } else if (finalScore < challengerScore) {
          winnerName = challenge.challenger?.email || "challenger";
        } else {
          winnerName = "tie";
        }

        updatePayload = {
          challenged: callerEmail.toLowerCase(),
          challenged_score: finalScore,
          challenged_correct: numCorrect,
          challenged_total_time_ms: Math.max(0, Number(totalTimeMs) || 0),
          status: "completed",
          winner: winnerName,
          completed_at: Date.now(),
        };
      }

      // UPDATE atomica con condizione WHERE precisa
      let updateQuery = supabaseAdmin
        .from("async_challenges")
        .update(updatePayload)
        .eq("id", String(challengeId));

      if (role === "challenger") {
        updateQuery = updateQuery.is("challenger_score", null);
      } else {
        updateQuery = updateQuery
          .is("challenged_score", null)
          .or(`challenged.eq.${callerEmail.toLowerCase()},challenged.eq.__RANDOM_OPPONENT__`);
      }

      const { data: updatedRows, error: updateErr } = await updateQuery.select();

      if (updateErr) {
        console.error("[submit-challenge-score] Challenge update error:", updateErr);
        return new Response(
          JSON.stringify({ error: `Errore aggiornamento sfida: ${updateErr.message}` }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (!updatedRows || updatedRows.length === 0) {
        return new Response(
          JSON.stringify({
            error: "already_claimed_or_completed",
            message: "La sfida e' gia' stata completata o assegnata ad un altro giocatore."
          }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const updatedChallenge = updatedRows[0];

      // Aggiorna metriche di velocità e accuratezza per il caller in user_stats
      const extraStats: Record<string, any> = {};

      let callerChallengesWon: number | undefined = undefined;

      if (role === 'challenged' && updatedChallenge.status === 'completed') {
        // Il vincitore è noto. Lo aggiorniamo per email (email unica su profiles),
        // indipendentemente da chi sia: challenger o challenged.
        const winnerEmail = String(updatedChallenge.winner || '').toLowerCase();
        const isTie = winnerEmail === 'tie' || winnerEmail === '';

        if (!isTie && winnerEmail) {
          try {
            // Risolvi l'user_id del vincitore tramite email
            const { data: winnerProfile } = await supabaseAdmin
              .from('profiles')
              .select('id')
              .ilike('email', winnerEmail)
              .limit(1)
              .maybeSingle();

            if (winnerProfile?.id) {
              const { data: wStats } = await supabaseAdmin
                .from('user_stats')
                .select('challenges_won')
                .eq('user_id', winnerProfile.id)
                .maybeSingle();
              const nextWon = (Number(wStats?.challenges_won) || 0) + 1;
              await supabaseAdmin
                .from('user_stats')
                .upsert(
                  { user_id: winnerProfile.id, challenges_won: nextWon, updated_at: new Date().toISOString() },
                  { onConflict: 'user_id' }
                );
              if (winnerProfile.id === user.id) {
                callerChallengesWon = nextWon;
              }
              console.log(
                `[submit-challenge-score] challenge completed: +1 challenges_won al vincitore (${winnerEmail})`
              );
            }
          } catch (e) {
            console.warn('[submit-challenge-score] challenges_won update notice:', e);
          }
        }
      }
      await updateUserGameMetrics(supabaseAdmin, user.id, numCorrect, numWrong, numCorrectTimeMs, extraStats);

      return new Response(
        JSON.stringify({
          success: true,
          challenge: updatedChallenge,
          score: finalScore,
          challengesWon: callerChallengesWon,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ============================================================
    // BRANCH B: TORNEO
    // ============================================================
    if (type === "tournament") {
      if (!tournamentId) {
        return new Response(
          JSON.stringify({ error: "tournamentId e' obbligatorio per type=tournament" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data: tournament, error: fetchErr } = await supabaseAdmin
        .from("async_tournaments")
        .select("*")
        .eq("id", String(tournamentId))
        .maybeSingle();

      if (fetchErr || !tournament) {
        return new Response(
          JSON.stringify({ error: `Torneo ${tournamentId} non trovato` }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Risolvi il profilo del caller per ottenere email canonica e id
      const { data: callerProfile } = await supabaseAdmin
        .from("profiles")
        .select("id, email, display_name")
        .eq("id", user.id)
        .maybeSingle();

      const normalizedCallerEmail = (callerEmail || "").trim().toLowerCase();
      const normalizedProfileEmail = String(callerProfile?.email || "").trim().toLowerCase();

      // Trova il partecipante corrispondente al caller:
      // 1. Priorità: userId stabile (UUID auth.users / profiles.id)
      // 2. Fallback per record legacy: solo ed esclusivamente email canonica normalizzata ed esatta
      // 3. NESSUN matching fuzzy basato su display_name o name
      const participants: Record<string, unknown>[] = Array.isArray(tournament.participants)
        ? tournament.participants
        : [];

      const participantIdx = participants.findIndex((p) => {
        // Regola 1: userId stabile
        const pUserId = String(p.userId || p.user_id || "").trim();
        if (pUserId && pUserId === user.id) return true;

        if (p.isCreator) {
          const creatorUserId = String(tournament.creator?.id || tournament.creator?.userId || "").trim();
          if (creatorUserId && creatorUserId === user.id) return true;
        }

        // Regola 2: Legacy fallback - SOLO email normalizzata ed esatta (MAI display_name/name)
        const pEmail = String(p.email || "").trim().toLowerCase();
        if (pEmail) {
          if (normalizedCallerEmail && pEmail === normalizedCallerEmail) return true;
          if (normalizedProfileEmail && pEmail === normalizedProfileEmail) return true;
        }

        const pIdentifier = String(p.identifier || "").trim().toLowerCase();
        if (pIdentifier && pIdentifier.includes("@")) {
          if (normalizedCallerEmail && pIdentifier === normalizedCallerEmail) return true;
          if (normalizedProfileEmail && pIdentifier === normalizedProfileEmail) return true;
        }

        if (p.isCreator) {
          const creatorEmail = String(tournament.creator?.email || "").trim().toLowerCase();
          if (creatorEmail) {
            if (normalizedCallerEmail && creatorEmail === normalizedCallerEmail) return true;
            if (normalizedProfileEmail && creatorEmail === normalizedProfileEmail) return true;
          }
        }

        return false;
      });

      if (participantIdx === -1) {
        console.warn("[submit-challenge-score] [tournament] Participant not found:", JSON.stringify({
          tournamentId,
          userId: user.id,
          callerEmail: normalizedCallerEmail,
          participantsCount: participants.length,
          participantsSummary: participants.map((p, idx) => ({
            idx,
            userId: p.userId || p.user_id || null,
            email: p.email || null,
            isCreator: Boolean(p.isCreator)
          }))
        }));
        return new Response(
          JSON.stringify({
            error: `Non sei un partecipante autorizzato di questo torneo (Utente: ${normalizedCallerEmail || user.id}).`,
            code: "PARTICIPANT_NOT_FOUND"
          }),
          { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("[submit-challenge-score] [tournament] Participant identified:", JSON.stringify({
        tournamentId,
        userId: user.id,
        callerEmail: normalizedCallerEmail,
        participantIndex: participantIdx,
        matchedBy: participants[participantIdx]?.userId ? "userId" : "exact_email"
      }));

      // Verifica no double-submit
      if (participants[participantIdx].hasPlayed) {
        return new Response(
          JSON.stringify({ error: "Hai gia' inviato il tuo punteggio per questo torneo" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Aggiorna il sotto-oggetto del partecipante, registrando anche userId e email stabile
      const updatedParticipants = [...participants];
      updatedParticipants[participantIdx] = {
        ...updatedParticipants[participantIdx],
        userId: user.id,
        email: updatedParticipants[participantIdx].email || normalizedCallerEmail || normalizedProfileEmail || null,
        hasPlayed: true,
        score: finalScore,
        correct: numCorrect,
        totalTimeMs: Math.max(0, Number(totalTimeMs) || 0),
        playedAt: Date.now(),
      };

      // Calcola classifica e winner se tutti hanno giocato
      const allPlayed = updatedParticipants.every((p) => p.hasPlayed);
      let winnerObj: Record<string, unknown> | null = null;
      let newStatus = tournament.status === "pending" ? "active" : tournament.status;

      if (allPlayed) {
        const sorted = [...updatedParticipants].sort((a, b) => {
          const scoreDiff = Number(b.score || 0) - Number(a.score || 0);
          if (scoreDiff !== 0) return scoreDiff;
          const correctDiff = Number(b.correct || 0) - Number(a.correct || 0);
          if (correctDiff !== 0) return correctDiff;
          return Number(a.totalTimeMs || 0) - Number(b.totalTimeMs || 0);
        });
        winnerObj = sorted[0];
        newStatus = "completed";
      }

      const tournamentUpdatePayload: Record<string, unknown> = {
        participants: updatedParticipants,
        status: newStatus,
      };
      if (allPlayed) {
        tournamentUpdatePayload.winner = winnerObj;
        tournamentUpdatePayload.completed_at = Date.now();
      }

      const { data: updatedTournament, error: updateErr } = await supabaseAdmin
        .from("async_tournaments")
        .update(tournamentUpdatePayload)
        .eq("id", String(tournamentId))
        .select()
        .single();

      if (updateErr) {
        console.error("[submit-challenge-score] [tournament] DB update error:", JSON.stringify({
          tournamentId,
          userId: user.id,
          error: updateErr
        }));
        return new Response(
          JSON.stringify({ error: `Errore aggiornamento torneo: ${updateErr.message}` }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("[submit-challenge-score] [tournament] Success:", JSON.stringify({
        tournamentId,
        userId: user.id,
        score: finalScore,
        allPlayed,
        status: newStatus
      }));

      // Aggiorna metriche utente per il caller (always)
      await updateUserGameMetrics(supabaseAdmin, user.id, numCorrect, numWrong, numCorrectTimeMs, {});

      // Se il torneo è completato, incrementa tournaments_won per il vincitore REALE
      // verificando prima winnerObj.userId, poi fallback email
      if (allPlayed && winnerObj) {
        const winnerUserId = String(winnerObj.userId || winnerObj.user_id || "").trim();
        const winnerEmail = String(winnerObj.email || winnerObj.identifier || "").toLowerCase();

        try {
          let resolvedWinnerId = winnerUserId || null;
          if (!resolvedWinnerId && winnerEmail) {
            const { data: winnerProfile } = await supabaseAdmin
              .from("profiles")
              .select("id")
              .ilike("email", winnerEmail)
              .limit(1)
              .maybeSingle();
            if (winnerProfile?.id) resolvedWinnerId = winnerProfile.id;
          }

          if (resolvedWinnerId) {
            const { data: wStats } = await supabaseAdmin
              .from("user_stats")
              .select("tournaments_won")
              .eq("user_id", resolvedWinnerId)
              .maybeSingle();
            const nextWon = (Number(wStats?.tournaments_won) || 0) + 1;
            await supabaseAdmin
              .from("user_stats")
              .upsert(
                { user_id: resolvedWinnerId, tournaments_won: nextWon, updated_at: new Date().toISOString() },
                { onConflict: "user_id" }
              );
            console.log(
              `[submit-challenge-score] [tournament] Completed: +1 tournaments_won al vincitore (${resolvedWinnerId})`
            );
          }
        } catch (e) {
          console.warn("[submit-challenge-score] [tournament] tournaments_won update notice:", e);
        }
      }

      return new Response(
        JSON.stringify({ success: true, tournament: updatedTournament, score: finalScore }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: `type '${type}' non valido. Usa 'challenge', 'tournament', 'claim', o 'forfeit'.` }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : "Errore interno del server";
    console.error("[submit-challenge-score] Unexpected exception:", errMsg);
    return new Response(
      JSON.stringify({ error: errMsg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
