-- ============================================================
-- TEN SECONDS — MIGRATION 20260817
-- Schema async_challenges, async_tournaments, FCM token
-- ============================================================

-- ============================================================
-- PARTE 1: FCM TOKEN SU PROFILES
-- "ultimo dispositivo vince" — upsert sovrascrive sempre
-- ============================================================

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS fcm_token TEXT;

CREATE INDEX IF NOT EXISTS idx_profiles_fcm_token
  ON public.profiles (fcm_token)
  WHERE fcm_token IS NOT NULL;

-- ============================================================
-- PARTE 2: TABELLA async_challenges (sfide 1vs1 asincrone)
-- ============================================================

DROP TABLE IF EXISTS public.async_challenges CASCADE;
CREATE TABLE IF NOT EXISTS public.async_challenges (
    id                         TEXT PRIMARY KEY,
    challenger                 JSONB NOT NULL,      -- { name, email, avatar, flag }
    challenged                 TEXT NOT NULL,        -- email, playerCode, o '__RANDOM_OPPONENT__'

    -- Metadati partita (scritti dal client alla creazione)
    playlist                   JSONB,
    tracks                     JSONB,
    song_count                 INTEGER NOT NULL DEFAULT 10,

    -- Punteggi: WRITE-ONLY dalla Edge Function submit-challenge-score via service_role
    challenger_score           INTEGER,             -- NULL al momento della creazione
    challenger_correct         INTEGER,
    challenger_total_time_ms   BIGINT,
    challenged_score           INTEGER,             -- NULL fino alla risposta validata
    challenged_correct         INTEGER,
    challenged_total_time_ms   BIGINT,

    -- Stato e risultato (scritti solo da Edge Function)
    status                     TEXT NOT NULL DEFAULT 'pending'
                                   CHECK (status IN ('pending', 'completed', 'expired', 'forfeited')),
    winner                     TEXT,

    -- Timestamp in ms epoch (compatibili con Date.now() del client)
    created_at                 BIGINT NOT NULL
                                   DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::BIGINT,
    expires_at                 BIGINT,
    completed_at               BIGINT
);

CREATE INDEX IF NOT EXISTS idx_async_challenges_challenger_email
    ON public.async_challenges ((challenger->>'email'));
CREATE INDEX IF NOT EXISTS idx_async_challenges_challenged
    ON public.async_challenges (challenged);
CREATE INDEX IF NOT EXISTS idx_async_challenges_status
    ON public.async_challenges (status);
CREATE INDEX IF NOT EXISTS idx_async_challenges_created_at
    ON public.async_challenges (created_at DESC);

ALTER TABLE public.async_challenges ENABLE ROW LEVEL SECURITY;

-- SELECT: challenger, challenged (email esatta), o sfide aperte con sentinella
DROP POLICY IF EXISTS "Sfida visibile ai partecipanti" ON public.async_challenges;
CREATE POLICY "Sfida visibile ai partecipanti"
    ON public.async_challenges
    FOR SELECT
    TO authenticated
    USING (
        (challenger->>'email') = (auth.jwt()->>'email')
        OR challenged = (auth.jwt()->>'email')
        OR challenged = '__RANDOM_OPPONENT__'
    );

-- INSERT: client puo' creare solo con score NULL (impossibile falsificare all'insert)
DROP POLICY IF EXISTS "Challenger puo creare la sfida" ON public.async_challenges;
CREATE POLICY "Challenger puo creare la sfida"
    ON public.async_challenges
    FOR INSERT
    TO authenticated
    WITH CHECK (
        (challenger->>'email') = (auth.jwt()->>'email')
        AND challenger_score IS NULL
        AND challenged_score IS NULL
        AND winner IS NULL
        AND status = 'pending'
    );

-- UPDATE: SOLO service_role (Edge Function submit-challenge-score)
DROP POLICY IF EXISTS "Solo service_role aggiorna punteggi sfida" ON public.async_challenges;
CREATE POLICY "Solo service_role aggiorna punteggi sfida"
    ON public.async_challenges
    FOR UPDATE
    TO service_role
    USING (true)
    WITH CHECK (true);

-- DELETE: solo service_role
DROP POLICY IF EXISTS "Solo service_role elimina sfide" ON public.async_challenges;
CREATE POLICY "Solo service_role elimina sfide"
    ON public.async_challenges
    FOR DELETE
    TO service_role
    USING (true);

-- ============================================================
-- PARTE 3: TABELLA async_tournaments (tornei multi-giocatore)
-- ============================================================

DROP TABLE IF EXISTS public.async_tournaments CASCADE;
CREATE TABLE IF NOT EXISTS public.async_tournaments (
    id                     TEXT PRIMARY KEY,
    name                   TEXT NOT NULL,
    creator                JSONB NOT NULL,           -- { name, email, avatar }
    invited_identifiers    TEXT[] NOT NULL DEFAULT '{}',

    -- Metadati partita
    playlist               JSONB,
    tracks                 JSONB,
    song_count             INTEGER NOT NULL DEFAULT 10,

    -- participants: [{ name, email, identifier, avatar, hasPlayed, score, correct, totalTimeMs, playedAt }]
    -- I campi score nei sotto-oggetti sono WRITE-ONLY da Edge Function
    participants           JSONB NOT NULL DEFAULT '[]',

    status                 TEXT NOT NULL DEFAULT 'pending'
                               CHECK (status IN ('pending', 'active', 'completed', 'expired')),
    winner                 JSONB,

    created_at             BIGINT NOT NULL
                               DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::BIGINT,
    expires_at             BIGINT,
    completed_at           BIGINT
);

CREATE INDEX IF NOT EXISTS idx_async_tournaments_creator_email
    ON public.async_tournaments ((creator->>'email'));
CREATE INDEX IF NOT EXISTS idx_async_tournaments_status
    ON public.async_tournaments (status);
CREATE INDEX IF NOT EXISTS idx_async_tournaments_created_at
    ON public.async_tournaments (created_at DESC);

ALTER TABLE public.async_tournaments ENABLE ROW LEVEL SECURITY;

-- SELECT: creatore o email nell'array invited_identifiers
DROP POLICY IF EXISTS "Torneo visibile ai partecipanti" ON public.async_tournaments;
CREATE POLICY "Torneo visibile ai partecipanti"
    ON public.async_tournaments
    FOR SELECT
    TO authenticated
    USING (
        (creator->>'email') = (auth.jwt()->>'email')
        OR (auth.jwt()->>'email') = ANY(invited_identifiers)
    );

-- INSERT: solo creatore, winner NULL, status pending
DROP POLICY IF EXISTS "Creatore puo avviare il torneo" ON public.async_tournaments;
CREATE POLICY "Creatore puo avviare il torneo"
    ON public.async_tournaments
    FOR INSERT
    TO authenticated
    WITH CHECK (
        (creator->>'email') = (auth.jwt()->>'email')
        AND winner IS NULL
        AND status = 'pending'
    );

-- UPDATE: SOLO service_role
DROP POLICY IF EXISTS "Solo service_role aggiorna punteggi torneo" ON public.async_tournaments;
CREATE POLICY "Solo service_role aggiorna punteggi torneo"
    ON public.async_tournaments
    FOR UPDATE
    TO service_role
    USING (true)
    WITH CHECK (true);

-- DELETE: solo service_role
DROP POLICY IF EXISTS "Solo service_role elimina tornei" ON public.async_tournaments;
CREATE POLICY "Solo service_role elimina tornei"
    ON public.async_tournaments
    FOR DELETE
    TO service_role
    USING (true);

-- ============================================================
-- PARTE 4: GRANT
-- ============================================================

GRANT SELECT, INSERT ON public.async_challenges TO authenticated;
GRANT ALL ON public.async_challenges TO service_role;

GRANT SELECT, INSERT ON public.async_tournaments TO authenticated;
GRANT ALL ON public.async_tournaments TO service_role;

-- ============================================================
-- NOTE POST-MIGRAZIONE (promemoria per Supabase Dashboard)
-- ============================================================
-- 1. Database Webhook su async_challenges INSERT:
--    notifica challenged (o sfide random) via send-fcm-notification
-- 2. Database Webhook su async_challenges UPDATE:
--    notifica challenger quando challenged_score viene valorizzato
-- 3. Verificare log su Dashboard -> Edge Functions -> send-fcm-notification -> Logs
