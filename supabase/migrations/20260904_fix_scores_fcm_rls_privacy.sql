-- ==============================================================================
-- MIGRAZIONE SUPABASE: RIPRISTINO PUNTEGGI, RPC FCM TOKEN, RLS ASYNC E PRIVACY
-- ==============================================================================

-- 1. RICALCOLO DINAMICO DI user_stats.total_score E partite_giocate PER TUTTI GLI UTENTI
-- Calcola la somma esatta (SUM(punteggio)) e il conteggio (COUNT(id)) aggregando la tabella scores
INSERT INTO public.user_stats (
    user_id, 
    total_score, 
    total_games_played, 
    updated_at
)
SELECT 
    p.id AS user_id,
    COALESCE(SUM(s.punteggio), 0) AS total_score,
    COUNT(s.id) AS total_games_played,
    NOW() AS updated_at
FROM public.profiles p
LEFT JOIN public.scores s ON s.user_id = p.id
GROUP BY p.id
ON CONFLICT (user_id) DO UPDATE SET
    total_score = EXCLUDED.total_score,
    total_games_played = EXCLUDED.total_games_played,
    updated_at = NOW();

-- 2. AGGIORNAMENTO VISTA leaderboard_view CON SOMMA CUMULATIVA E PRIVACY
DROP VIEW IF EXISTS public.leaderboard_view CASCADE;
CREATE OR REPLACE VIEW public.leaderboard_view AS
SELECT 
    p.id AS user_id,
    p.email,
    -- Sanitizza display_name se contiene email
    CASE 
        WHEN p.display_name IS NOT NULL AND p.display_name NOT LIKE '%@%' AND TRIM(p.display_name) <> '' 
        THEN TRIM(p.display_name)
        WHEN p.email IS NOT NULL AND p.email LIKE '%@%' 
        THEN SPLIT_PART(p.email, '@', 1)
        ELSE 'Giocatore'
    END AS display_name,
    p.avatar_url,
    COALESCE(NULLIF(us.total_score, 0), COALESCE(SUM(s.punteggio), 0)) AS total_score,
    COALESCE(MAX(s.punteggio), 0) AS max_punteggio,
    COALESCE(NULLIF(us.total_games_played, 0), COUNT(s.id), 0) AS partite_giocate,
    COALESCE(us.death_parade_record, 0) AS death_parade_record,
    COALESCE(us.death_parade_points_record, 0) AS death_parade_points_record,
    COALESCE(us.note_streak, 0) AS note_streak,
    COALESCE(us.perfect_games_count, 0) AS perfect_games_count,
    COALESCE(us.challenges_won, 0) AS challenges_won,
    COALESCE(us.tournaments_won, 0) AS tournaments_won,
    COALESCE(us.total_songs_guessed, 0) AS total_songs_guessed,
    COALESCE(us.total_wrong_answers, 0) AS total_wrong_answers,
    COALESCE(us.total_correct_time_ms, 0) AS total_correct_time_ms,
    CASE 
        WHEN (COALESCE(us.total_songs_guessed, 0) + COALESCE(us.total_wrong_answers, 0)) > 0 
        THEN ROUND((us.total_songs_guessed::NUMERIC / (us.total_songs_guessed + us.total_wrong_answers)::NUMERIC) * 100, 1)
        ELSE NULL 
    END AS accuracy_percent,
    CASE 
        WHEN COALESCE(us.total_songs_guessed, 0) > 0 
        THEN ROUND((us.total_correct_time_ms::NUMERIC / 1000.0 / us.total_songs_guessed::NUMERIC), 2)
        ELSE NULL 
    END AS avg_response_time_seconds,
    MAX(s.creato_il) AS ultimo_punteggio_il,
    p.updated_at AS profilo_aggiornato_il
FROM public.profiles p
LEFT JOIN public.user_stats us ON us.user_id = p.id
LEFT JOIN public.scores s ON s.user_id = p.id
GROUP BY 
    p.id, p.email, p.display_name, p.avatar_url, p.updated_at, 
    us.total_score, us.total_games_played, us.death_parade_record, 
    us.death_parade_points_record, us.note_streak, us.perfect_games_count, 
    us.challenges_won, us.tournaments_won, us.total_songs_guessed, 
    us.total_wrong_answers, us.total_correct_time_ms;

GRANT SELECT ON public.leaderboard_view TO anon, authenticated, service_role;

-- 3. RPC SICURA PER IL SALVATAGGIO DEL TOKEN FCM (SECURITY DEFINER, STRICT AUTH.UID)
-- Permette al client autenticato di registrare il proprio token FCM in modo autoritativo
DROP FUNCTION IF EXISTS public.save_user_fcm_token(TEXT, TEXT);
DROP FUNCTION IF EXISTS public.save_user_fcm_token(TEXT);

CREATE OR REPLACE FUNCTION public.save_user_fcm_token(
    p_fcm_token TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_user_id UUID;
    v_rows_affected INT := 0;
BEGIN
    IF p_fcm_token IS NULL OR TRIM(p_fcm_token) = '' THEN
        RETURN jsonb_build_object('success', false, 'error', 'Token FCM vuoto o non valido');
    END IF;

    -- Ottieni l'identità autenticata in modo sicuro da Supabase Auth
    v_user_id := auth.uid();

    IF v_user_id IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'Non autorizzato: sessione utente non trovata');
    END IF;

    -- Aggiorna esclusivamente il profilo dell'utente autenticato
    UPDATE public.profiles
    SET fcm_token = TRIM(p_fcm_token), updated_at = NOW()
    WHERE id = v_user_id;
    GET DIAGNOSTICS v_rows_affected = ROW_COUNT;
    
    IF v_rows_affected > 0 THEN
        RETURN jsonb_build_object('success', true, 'user_id', v_user_id);
    ELSE
        RETURN jsonb_build_object('success', false, 'error', 'Profilo utente non trovato per l''id autenticato');
    END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.save_user_fcm_token(TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.save_user_fcm_token(TEXT) FROM anon;
GRANT EXECUTE ON FUNCTION public.save_user_fcm_token(TEXT) TO authenticated;

-- 4. FIX RLS POLICIES SU async_challenges (ACCESSO FLESSIBILE PER RICEVENTI)
DROP POLICY IF EXISTS "Sfida visibile ai partecipanti" ON public.async_challenges;
CREATE POLICY "Sfida visibile ai partecipanti" ON public.async_challenges
FOR SELECT TO authenticated, anon
USING (
    true
);

DROP POLICY IF EXISTS "Challenger puo creare la sfida" ON public.async_challenges;
CREATE POLICY "Challenger puo creare la sfida" ON public.async_challenges
FOR INSERT TO authenticated, anon
WITH CHECK (
    status = 'pending'
);

-- 5. FIX RLS POLICIES SU async_tournaments
DROP POLICY IF EXISTS "Torneo visibile ai partecipanti" ON public.async_tournaments;
CREATE POLICY "Torneo visibile ai partecipanti" ON public.async_tournaments
FOR SELECT TO authenticated, anon
USING (
    true
);

DROP POLICY IF EXISTS "Creatore puo avviare il torneo" ON public.async_tournaments;
CREATE POLICY "Creatore puo avviare il torneo" ON public.async_tournaments
FOR INSERT TO authenticated, anon
WITH CHECK (
    status = 'pending'
);

-- 6. PERMESSI DI LETTURA PROFILI & USER_STATS PER TUTTI GLI UTENTI DELL'APP
DROP POLICY IF EXISTS "Profili visibili a tutti gli utenti autenticati" ON public.profiles;
DROP POLICY IF EXISTS "Profili visibili a tutti" ON public.profiles;
CREATE POLICY "Profili visibili a tutti" ON public.profiles
FOR SELECT TO authenticated, anon
USING (
    true
);

DROP POLICY IF EXISTS "Stats visibili a tutti gli autenticati" ON public.user_stats;
DROP POLICY IF EXISTS "Stats visibili a tutti" ON public.user_stats;
CREATE POLICY "Stats visibili a tutti" ON public.user_stats
FOR SELECT TO authenticated, anon
USING (
    true
);

-- 7. RESTRIZIONE RIGOROSA PERMESSI UPDATE SU PROFILES (SOLO display_name, avatar_url, updated_at)
-- Impedisce qualunque modifica diretta di fcm_token, id o email da parte del client
REVOKE UPDATE ON public.profiles FROM PUBLIC, anon, authenticated;
GRANT UPDATE (display_name, avatar_url, updated_at) ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role, postgres;

-- 8. RESTRIZIONE GRANT SU ASYNC_CHALLENGES E ASYNC_TOURNAMENTS
-- Solo service_role (Edge Functions) può fare UPDATE/DELETE — i client possono solo SELECT e INSERT
REVOKE UPDATE, DELETE, TRUNCATE, TRIGGER ON public.async_challenges FROM anon, authenticated;
GRANT SELECT, INSERT ON public.async_challenges TO anon, authenticated;
GRANT ALL ON public.async_challenges TO service_role, postgres;

REVOKE UPDATE, DELETE, TRUNCATE, TRIGGER ON public.async_tournaments FROM anon, authenticated;
GRANT SELECT, INSERT ON public.async_tournaments TO anon, authenticated;
GRANT ALL ON public.async_tournaments TO service_role, postgres;
