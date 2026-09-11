-- ==========================================================
-- TEN SECONDS: SUPABASE DATABASE ARCHITECTURE
-- PROFILES, SCORES, TRIGGER AUTH, LEADERBOARD VIEW & RLS
-- ==========================================================

-- 1. TABELLA PROFILES
-- Id unico derivato direttamente da auth.users.id (UUID)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    display_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

-- 2. TRIGGER SU AUTH.USERS (AFTER INSERT)
-- Crea automaticamente la riga corrispondente in profiles al primo login/registrazione Google
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

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Trigger automatico per aggiornare updated_at e preservare id/email invariabili
CREATE OR REPLACE FUNCTION public.set_profiles_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    NEW.email = OLD.email;
    NEW.id = OLD.id;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_profiles_updated_at ON public.profiles;
CREATE TRIGGER trg_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.set_profiles_updated_at();

-- 3. TABELLA SCORES
-- Ogni partita completata viene salvata come singola riga
CREATE TABLE IF NOT EXISTS public.scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    punteggio INTEGER NOT NULL CHECK (punteggio >= 0),
    modalita TEXT NOT NULL,
    creato_il TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_scores_user_id ON public.scores(user_id);
CREATE INDEX IF NOT EXISTS idx_scores_modalita ON public.scores(modalita);
CREATE INDEX IF NOT EXISTS idx_scores_punteggio ON public.scores(punteggio DESC);
CREATE INDEX IF NOT EXISTS idx_scores_creato_il ON public.scores(creato_il DESC);

-- 4. VISTA CLASSIFICA DINAMICA AGGREGATA (MAX / GROUP BY)
-- Calcola sempre in tempo reale il punteggio massimo per profilo senza salvarlo in colonne statiche
CREATE OR REPLACE VIEW public.leaderboard_view AS
SELECT 
    p.id AS user_id,
    p.email,
    p.display_name,
    p.avatar_url,
    COALESCE(MAX(s.punteggio), 0) AS max_punteggio,
    COUNT(s.id) AS partite_giocate,
    MAX(s.creato_il) AS ultimo_punteggio_il
FROM public.profiles p
LEFT JOIN public.scores s ON s.user_id = p.id
GROUP BY p.id, p.email, p.display_name, p.avatar_url;

-- 5. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scores ENABLE ROW LEVEL SECURITY;

-- Policy PROFILES:
-- SELECT consentita a tutti gli utenti autenticati per consultare profili e classifica
DROP POLICY IF EXISTS "Profili visibili a tutti gli utenti autenticati" ON public.profiles;
CREATE POLICY "Profili visibili a tutti gli utenti autenticati"
    ON public.profiles
    FOR SELECT
    TO authenticated
    USING (true);

-- UPDATE consentita SOLO al proprietario del profilo su auth.uid() = id
DROP POLICY IF EXISTS "Utenti possono modificare solo il proprio profilo" ON public.profiles;
CREATE POLICY "Utenti possono modificare solo il proprio profilo"
    ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Policy SCORES:
-- SELECT consentita agli utenti autenticati
DROP POLICY IF EXISTS "Scores visibili agli utenti autenticati" ON public.scores;
CREATE POLICY "Scores visibili agli utenti autenticati"
    ON public.scores
    FOR SELECT
    TO authenticated
    USING (true);

-- INSERT consentita ESCLUSIVAMENTE lato server (Edge Function tramite service_role key)
DROP POLICY IF EXISTS "Insert scores consentito solo da service_role" ON public.scores;
CREATE POLICY "Insert scores consentito solo da service_role"
    ON public.scores
    FOR INSERT
    TO service_role
    WITH CHECK (true);

-- 6. POPOLAMENTO INIZIALE PROFILES DAGLI UTENTI AUTH.USERS ESISTENTI
INSERT INTO public.profiles (id, email, display_name, avatar_url, created_at, updated_at)
SELECT 
    au.id,
    au.email,
    COALESCE(
        au.raw_user_meta_data->>'full_name',
        au.raw_user_meta_data->>'name',
        split_part(au.email, '@', 1),
        'Giocatore'
    ),
    COALESCE(
        au.raw_user_meta_data->>'avatar_url',
        au.raw_user_meta_data->>'picture',
        NULL
    ),
    au.created_at,
    now()
FROM auth.users au
ON CONFLICT (id) DO NOTHING;
