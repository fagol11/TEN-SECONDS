-- ==============================================================================
-- DATABASE WEBHOOK TRIGGERS: async_challenges & async_tournaments -> send-fcm-notification
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Function & Trigger per async_challenges
CREATE OR REPLACE FUNCTION public.handle_async_challenges_webhook()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  payload JSONB;
BEGIN
  payload := jsonb_build_object(
    'type', TG_OP,
    'table', TG_TABLE_NAME,
    'schema', TG_TABLE_SCHEMA,
    'record', CASE WHEN TG_OP = 'DELETE' THEN NULL ELSE row_to_json(NEW) END,
    'old_record', CASE WHEN TG_OP = 'INSERT' THEN NULL ELSE row_to_json(OLD) END
  );

  PERFORM net.http_post(
    url := 'https://rddntjxqbqwrcdvhuaxi.supabase.co/functions/v1/send-fcm-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer sb_publishable_3Z6TY-lCTZAbhi6GsX4QyA_AmW0ctpq'
    ),
    body := payload
  );

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_async_challenges_webhook ON public.async_challenges;
CREATE TRIGGER trigger_async_challenges_webhook
AFTER INSERT OR UPDATE ON public.async_challenges
FOR EACH ROW
EXECUTE FUNCTION public.handle_async_challenges_webhook();

-- Function & Trigger per async_tournaments
CREATE OR REPLACE FUNCTION public.handle_async_tournaments_webhook()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  payload JSONB;
BEGIN
  payload := jsonb_build_object(
    'type', TG_OP,
    'table', TG_TABLE_NAME,
    'schema', TG_TABLE_SCHEMA,
    'record', CASE WHEN TG_OP = 'DELETE' THEN NULL ELSE row_to_json(NEW) END,
    'old_record', CASE WHEN TG_OP = 'INSERT' THEN NULL ELSE row_to_json(OLD) END
  );

  PERFORM net.http_post(
    url := 'https://rddntjxqbqwrcdvhuaxi.supabase.co/functions/v1/send-fcm-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer sb_publishable_3Z6TY-lCTZAbhi6GsX4QyA_AmW0ctpq'
    ),
    body := payload
  );

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_async_tournaments_webhook ON public.async_tournaments;
CREATE TRIGGER trigger_async_tournaments_webhook
AFTER INSERT OR UPDATE ON public.async_tournaments
FOR EACH ROW
EXECUTE FUNCTION public.handle_async_tournaments_webhook();
