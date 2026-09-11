-- ==========================================================
-- TEN SECONDS: USER STATS & ATOMIC SCORE SUBMISSION MIGRATION
-- ==========================================================

-- 1. TABELLA USER_STATS (Fonte di verità unica per statistiche e record)
CREATE TABLE IF NOT EXISTS public.user_stats (
    user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    death_parade_record INTEGER NOT NULL DEFAULT 0 CHECK (death_parade_record >= 0),
    death_parade_points_record INTEGER NOT NULL DEFAULT 0 CHECK (death_parade_points_record >= 0),
    note_streak INTEGER NOT NULL DEFAULT 0 CHECK (note_streak >= 0),
    last_daily_date DATE,
    perfect_games_count INTEGER NOT NULL DEFAULT 0 CHECK (perfect_games_count >= 0),
    challenges_won INTEGER NOT NULL DEFAULT 0 CHECK (challenges_won >= 0),
    tournaments_won INTEGER NOT NULL DEFAULT 0 CHECK (tournaments_won >= 0),
    total_games_played INTEGER NOT NULL DEFAULT 0 CHECK (total_games_played >= 0),
    total_songs_guessed INTEGER NOT NULL DEFAULT 0 CHECK (total_songs_guessed >= 0),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indici per classifiche (user_id è già indicizzato come PRIMARY KEY)
CREATE INDEX IF NOT EXISTS idx_user_stats_death_parade ON public.user_stats(death_parade_record DESC);
CREATE INDEX IF NOT EXISTS idx_user_stats_streak ON public.user_stats(note_streak DESC);

-- 2. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;

-- SELECT consentita a tutti gli utenti autenticati (per profili, classifiche e sfide)
DROP POLICY IF EXISTS "Stats visibili a tutti gli autenticati" ON public.user_stats;
CREATE POLICY "Stats visibili a tutti gli autenticati"
    ON public.user_stats
    FOR SELECT
    TO authenticated
    USING (true);

-- Scrittura (INSERT / UPDATE / DELETE) consentita ESCLUSIVAMENTE lato server tramite service_role
DROP POLICY IF EXISTS "Solo Edge Function scrive le stats" ON public.user_stats;
CREATE POLICY "Solo Edge Function scrive le stats"
    ON public.user_stats
    FOR ALL
    TO service_role
    USING (true);

-- Policy DELETE su public.scores da service_role (per reset-user-stats Edge Function)
DROP POLICY IF EXISTS "Service role can delete scores for reset" ON public.scores;
CREATE POLICY "Service role can delete scores for reset"
    ON public.scores
    FOR DELETE
    TO service_role
    USING (true);

-- 3. FUNZIONE HANDLE_NEW_USER() ESTESA
-- Crea atomicamente profiles E user_stats nella stessa transazione al login / registrazione
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_name TEXT;
    v_avatar TEXT;
BEGIN
    -- Gestione flessibile chiavi raw_user_meta_data fornite da Google o altri provider
    v_name := COALESCE(
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'name',
        NEW.raw_user_meta_data->>'displayName',
        NEW.raw_user_meta_data->>'user_name',
        split_part(NEW.email, '@', 1),
        'Giocatore'
    );

    v_avatar := COALESCE(
        NEW.raw_user_meta_data->>'avatar_url',
        NEW.raw_user_meta_data->>'picture',
        NEW.raw_user_meta_data->>'imageUrl',
        NULL
    );

    -- A. Inserimento / Aggiornamento riga profiles
    INSERT INTO public.profiles (id, email, display_name, avatar_url, created_at, updated_at)
    VALUES (
        NEW.id,
        NEW.email,
        v_name,
        v_avatar,
        now(),
        now()
    )
    ON CONFLICT (id) DO UPDATE
    SET 
        email = EXCLUDED.email,
        display_name = COALESCE(public.profiles.display_name, EXCLUDED.display_name),
        avatar_url = COALESCE(public.profiles.avatar_url, EXCLUDED.avatar_url),
        updated_at = now();

    -- B. Inserimento riga user_stats con valori di default (stessa transazione atomica)
    INSERT INTO public.user_stats (
        user_id,
        death_parade_record,
        death_parade_points_record,
        note_streak,
        last_daily_date,
        perfect_games_count,
        challenges_won,
        tournaments_won,
        total_games_played,
        total_songs_guessed,
        updated_at
    )
    VALUES (
        NEW.id,
        0,
        0,
        0,
        NULL,
        0,
        0,
        0,
        0,
        0,
        now()
    )
    ON CONFLICT (user_id) DO NOTHING;

    RETURN NEW;
END;
$$;

-- Ricollega il trigger su auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- 4. INIZIALIZZAZIONE BACKFILL PER TUTTI I PROFILI ESISTENTI
INSERT INTO public.user_stats (
    user_id,
    death_parade_record,
    death_parade_points_record,
    note_streak,
    last_daily_date,
    perfect_games_count,
    challenges_won,
    tournaments_won,
    total_games_played,
    total_songs_guessed,
    updated_at
)
SELECT 
    p.id,
    0,
    0,
    0,
    NULL,
    0,
    0,
    0,
    COALESCE(COUNT(s.id), 0),
    0,
    now()
FROM public.profiles p
LEFT JOIN public.scores s ON s.user_id = p.id
GROUP BY p.id
ON CONFLICT (user_id) DO NOTHING;
