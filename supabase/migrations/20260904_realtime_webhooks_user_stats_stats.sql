-- ============================================================
-- TEN SECONDS — MIGRATION 20260904
-- Realtime publication, user_stats speed & accuracy metrics, leaderboard_view
-- ============================================================

-- 1. PUBBLICAZIONE REALTIME (POSTGRES_CHANGES)
-- Garantisce che le tabelle async_challenges e async_tournaments siano incluse nella pubblicazione Realtime
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_publication_tables 
        WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'async_challenges'
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.async_challenges;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_publication_tables 
        WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'async_tournaments'
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.async_tournaments;
    END IF;
END $$;

-- 2. NUOVE COLONNE IN user_stats: TEMPO MEDIO RISPOSTA E RISPOSTE SBAGLIATE
ALTER TABLE public.user_stats
    ADD COLUMN IF NOT EXISTS total_correct_time_ms BIGINT NOT NULL DEFAULT 0 CHECK (total_correct_time_ms >= 0),
    ADD COLUMN IF NOT EXISTS total_wrong_answers INTEGER NOT NULL DEFAULT 0 CHECK (total_wrong_answers >= 0),
    ADD COLUMN IF NOT EXISTS measured_correct_answers INTEGER NOT NULL DEFAULT 0 CHECK (measured_correct_answers >= 0);

CREATE INDEX IF NOT EXISTS idx_user_stats_correct_time ON public.user_stats(total_correct_time_ms);
CREATE INDEX IF NOT EXISTS idx_user_stats_wrong_answers ON public.user_stats(total_wrong_answers);
CREATE INDEX IF NOT EXISTS idx_user_stats_measured_correct ON public.user_stats(measured_correct_answers);

-- 3. AGGIORNAMENTO VIEW leaderboard_view CON METRICHE DERIVATE DI ACCURATEZZA E VELOCITÀ
DROP VIEW IF EXISTS public.leaderboard_view CASCADE;
CREATE OR REPLACE VIEW public.leaderboard_view AS
SELECT 
    p.id AS user_id,
    p.email,
    p.display_name,
    p.avatar_url,
    COALESCE(us.total_score, 0) AS total_score,
    COALESCE(MAX(s.punteggio), 0) AS max_punteggio,
    COALESCE(us.total_games_played, COUNT(s.id), 0) AS partite_giocate,
    COALESCE(us.death_parade_record, 0) AS death_parade_record,
    COALESCE(us.death_parade_points_record, 0) AS death_parade_points_record,
    COALESCE(us.note_streak, 0) AS note_streak,
    COALESCE(us.perfect_games_count, 0) AS perfect_games_count,
    COALESCE(us.challenges_won, 0) AS challenges_won,
    COALESCE(us.tournaments_won, 0) AS tournaments_won,
    COALESCE(us.total_songs_guessed, 0) AS total_songs_guessed,
    COALESCE(us.total_wrong_answers, 0) AS total_wrong_answers,
    COALESCE(us.total_correct_time_ms, 0) AS total_correct_time_ms,
    COALESCE(us.measured_correct_answers, 0) AS measured_correct_answers,
    CASE 
        WHEN (COALESCE(us.measured_correct_answers, 0) + COALESCE(us.total_wrong_answers, 0)) > 0 
        THEN ROUND((us.measured_correct_answers::NUMERIC / (us.measured_correct_answers + us.total_wrong_answers)::NUMERIC) * 100, 1)
        ELSE NULL 
    END AS accuracy_percent,
    CASE 
        WHEN COALESCE(us.measured_correct_answers, 0) > 0 
        THEN ROUND((us.total_correct_time_ms::NUMERIC / 1000.0 / us.measured_correct_answers::NUMERIC), 2)
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
    us.total_wrong_answers, us.total_correct_time_ms, us.measured_correct_answers;

GRANT SELECT ON public.leaderboard_view TO anon, authenticated, service_role;
