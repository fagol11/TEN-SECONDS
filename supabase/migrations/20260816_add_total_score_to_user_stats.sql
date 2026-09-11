-- ==========================================================
-- TEN SECONDS: ADD TOTAL_SCORE TO USER_STATS & UPDATE LEADERBOARD VIEW
-- ==========================================================

-- 1. Aggiunta colonna total_score a user_stats se non esiste
ALTER TABLE public.user_stats
ADD COLUMN IF NOT EXISTS total_score INTEGER NOT NULL DEFAULT 0 CHECK (total_score >= 0);

CREATE INDEX IF NOT EXISTS idx_user_stats_total_score ON public.user_stats(total_score DESC);

-- 2. Aggiornamento della VIEW leaderboard_view per ordinare per total_score
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
    MAX(s.creato_il) AS ultimo_punteggio_il,
    p.updated_at AS profilo_aggiornato_il
FROM public.profiles p
LEFT JOIN public.user_stats us ON us.user_id = p.id
LEFT JOIN public.scores s ON s.user_id = p.id
GROUP BY p.id, p.email, p.display_name, p.avatar_url, p.updated_at, us.total_score, us.total_games_played, us.death_parade_record, us.death_parade_points_record, us.note_streak, us.perfect_games_count, us.challenges_won, us.tournaments_won;

GRANT SELECT ON public.leaderboard_view TO anon, authenticated, service_role;
