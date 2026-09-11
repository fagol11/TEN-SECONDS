// Supabase Edge Function: send-fcm-notification
// Sends Firebase Cloud Messaging (FCM v1) push notifications using Google Service Account credentials.
// Supports both direct invocations from clients and automatic Database Webhooks (INSERT / UPDATE on async_challenges & async_tournaments).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.8";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// In-memory token cache to avoid requesting a new OAuth2 access token on every single invocation
let cachedAccessToken: { token: string; expiresAt: number } | null = null;

// Base64URL helper
function base64UrlEncode(str: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function arrayBufferToBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// Convert PEM PKCS#8 private key string into CryptoKey using standard Web Crypto API
async function importPrivateKey(pem: string): Promise<CryptoKey> {
  const pemHeader = '-----BEGIN PRIVATE KEY-----';
  const pemFooter = '-----END PRIVATE KEY-----';
  
  const cleanPem = pem
    .replace(pemHeader, '')
    .replace(pemFooter, '')
    .replace(/[\r\n\s]/g, '');

  const binaryDerString = atob(cleanPem);
  const binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }

  return await crypto.subtle.importKey(
    'pkcs8',
    binaryDer.buffer,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );
}

// Generate Google OAuth2 Access Token for FCM v1 API
async function getGoogleAccessToken(serviceAccount: { client_email: string; private_key: string }): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  // Return cached token if valid for at least another 5 minutes
  if (cachedAccessToken && cachedAccessToken.expiresAt > now + 300) {
    return cachedAccessToken.token;
  }

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const payload = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const privateKey = await importPrivateKey(serviceAccount.private_key);
  const encoder = new TextEncoder();
  const signatureBuffer = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    encoder.encode(unsignedToken)
  );

  const signature = arrayBufferToBase64Url(signatureBuffer);
  const signedJwt = `${unsignedToken}.${signature}`;

  // Exchange JWT for Google OAuth2 Access Token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: signedJwt,
    }),
  });

  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text();
    throw new Error(`Failed to obtain Google OAuth2 Access Token: ${tokenResponse.status} ${errorBody}`);
  }

  const tokenData = await tokenResponse.json();
  cachedAccessToken = {
    token: tokenData.access_token,
    expiresAt: now + (tokenData.expires_in || 3600),
  };

  return tokenData.access_token;
}

// Helper per recuperare token FCM da profiles.
// SICUREZZA: risolve SOLO per user_id (UUID) o email verificata.
// NESSUN fallback per display_name — la risoluzione del nome avviene
// esclusivamente lato client (sendAsyncChallengeToSupabase) prima dell'inserimento,
// garantendo che record.challenged contenga sempre un'email canonica univoca.
async function getFcmTokensForIdentifiers(supabaseAdmin: any, identifiers: string[]): Promise<string[]> {
  const cleanIds = identifiers.map(i => String(i || '').trim().toLowerCase()).filter(Boolean);
  if (cleanIds.length === 0) return [];

  const tokens = new Set<string>();

  try {
    const { data: allProfiles, error } = await supabaseAdmin
      .from('profiles')
      .select('id, email, fcm_token')
      .not('fcm_token', 'is', null);

    if (!error && allProfiles) {
      for (const p of allProfiles) {
        if (!p.fcm_token) continue;
        const pId = String(p.id || '').trim().toLowerCase();
        const pEmail = String(p.email || '').trim().toLowerCase();

        const isMatch = cleanIds.some(target => {
          const cleanTarget = target.toLowerCase();
          return (
            (pId    && cleanTarget === pId)    ||
            (pEmail && cleanTarget === pEmail)
          );
        });

        if (isMatch) {
          tokens.add(p.fcm_token);
        }
      }
    }
  } catch (e) {
    console.warn('[send-fcm-notification] Token lookup notice:', e);
  }

  return Array.from(tokens);
}

function formatCleanDisplayName(str: string | null | undefined, fallback = 'Un amico'): string {
  if (!str) return fallback;
  let clean = String(str).trim();
  if (clean.includes('@')) {
    const beforeAt = clean.split('@')[0].trim();
    const words = beforeAt.replace(/[._+-]+/g, ' ').split(' ').filter(Boolean);
    if (words.length > 0) {
      return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    }
    return beforeAt;
  }
  return clean;
}

async function getPlayerDisplayName(supabaseAdmin: any, identifier: string | null | undefined, fallbackName?: string): Promise<string> {
  if (!identifier && !fallbackName) return 'Un avversario';
  try {
    const clean = String(identifier || fallbackName || '').trim().toLowerCase();
    if (clean && !clean.startsWith('ts-') && supabaseAdmin) {
      const { data } = await supabaseAdmin
        .from('profiles')
        .select('display_name')
        .or(`email.ilike.${clean},id.eq.${clean}`)
        .limit(1)
        .maybeSingle();
      if (data?.display_name) return data.display_name;
    }
  } catch (_) {}
  return formatCleanDisplayName(fallbackName || identifier);
}

// Handler
Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Read the secret from Supabase Environment
    const serviceAccountJson = Deno.env.get('FCM_SERVICE_ACCOUNT');
    if (!serviceAccountJson) {
      console.error('[send-fcm-notification] Missing FCM_SERVICE_ACCOUNT secret on Supabase');
      return new Response(
        JSON.stringify({
          error: 'Secret FCM_SERVICE_ACCOUNT non configurato su Supabase. Esegui: supabase secrets set FCM_SERVICE_ACCOUNT=...',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const serviceAccount = JSON.parse(serviceAccountJson);
    if (!serviceAccount.project_id || !serviceAccount.client_email || !serviceAccount.private_key) {
      return new Response(
        JSON.stringify({ error: 'Il segreto FCM_SERVICE_ACCOUNT non contiene le chiavi necessarie (project_id, client_email, private_key).' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Inizializza client Supabase admin
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabaseAdmin = (supabaseUrl && supabaseServiceKey)
      ? createClient(supabaseUrl, supabaseServiceKey, { auth: { persistSession: false } })
      : null;

    // 2. Parse request body (gestione doppio formato: RPC Client o Database Webhook)
    const body = await req.json().catch(() => ({}));

    let notifTitle = 'Ten Seconds';
    let notifMessage = 'Hai una nuova notifica!';
    let notifData: Record<string, string> = {};
    let notifImageUrl: string | undefined = undefined;
    let recipientTokens: string[] = [];
    let topic: string | undefined = undefined;

    // --- RAMO A: DATABASE WEBHOOK (INSERT / UPDATE DA SUPABASE) ---
    if (body.type && body.table && body.record && supabaseAdmin) {
      const { type, table, record, old_record } = body;
      console.log(`[send-fcm-notification] Database Webhook triggered: ${type} on ${table}`);

      if (table === 'async_challenges') {
        // 1. INSERT nuova sfida diretta
        if (type === 'INSERT') {
          const challengedTarget = String(record.challenged || '').trim();
          if (challengedTarget && challengedTarget !== '__RANDOM_OPPONENT__') {
            recipientTokens = await getFcmTokensForIdentifiers(supabaseAdmin, [challengedTarget]);
            const challengerDisplayName = await getPlayerDisplayName(supabaseAdmin, record.challenger?.email, record.challenger?.name);
            notifTitle = '🔥 Nuova Sfida 1vs1 Ricevuta!';
            notifMessage = `${challengerDisplayName} ti ha sfidato su "${record.playlist?.title || 'una playlist'}"!`;
            notifData = {
              screen: 'challenges',
              type: 'challenge_received',
              challengeId: String(record.id),
              challengerName: challengerDisplayName
            };
          }
        }
        // 2. UPDATE sfida
        else if (type === 'UPDATE') {
          const oldChallenged = String(old_record?.challenged || '');
          const newChallenged = String(record.challenged || '');

          // Caso Claim Sfida Casuale: __RANDOM_OPPONENT__ -> email reale
          if (oldChallenged === '__RANDOM_OPPONENT__' && newChallenged !== '__RANDOM_OPPONENT__') {
            const challengerEmail = record.challenger?.email || record.challenger?.name;
            if (challengerEmail) {
              recipientTokens = await getFcmTokensForIdentifiers(supabaseAdmin, [challengerEmail]);
              const claimerDisplayName = await getPlayerDisplayName(supabaseAdmin, newChallenged, newChallenged);
              notifTitle = '⚔️ Sfida Casuale Accettata!';
              notifMessage = `${claimerDisplayName} ha accettato la tua sfida su "${record.playlist?.title || 'la playlist'}"!`;
              notifData = {
                screen: 'challenges',
                type: 'challenge_claimed',
                challengeId: String(record.id),
                opponentName: claimerDisplayName
              };
            }
          }
          // Caso Completamento Sfida: pending -> completed
          else if (old_record?.status === 'pending' && record.status === 'completed') {
            const challengerEmail = record.challenger?.email || record.challenger?.name;
            if (challengerEmail) {
              recipientTokens = await getFcmTokensForIdentifiers(supabaseAdmin, [challengerEmail]);

              const challengedDisplayName = await getPlayerDisplayName(supabaseAdmin, record.challenged, record.challenged);
              const challengerDisplayName = await getPlayerDisplayName(supabaseAdmin, record.challenger?.email, record.challenger?.name);

              const winnerStr = String(record.winner || '').trim().toLowerCase();
              const cEmail = String(record.challenger?.email || '').trim().toLowerCase();
              const cName = String(record.challenger?.name || '').trim().toLowerCase();

              const isTie = winnerStr === 'tie';
              const isChallengerWinner = !isTie && (
                (cEmail && winnerStr === cEmail) ||
                (cName && winnerStr === cName) ||
                winnerStr === challengerDisplayName.toLowerCase()
              );

              notifTitle = '🏆 Sfida 1vs1 Conclusa!';
              if (isTie) {
                notifMessage = `Hai pareggiato la sfida 1vs1 contro ${challengedDisplayName}`;
              } else if (isChallengerWinner) {
                notifMessage = `Hai vinto la sfida 1vs1 contro ${challengedDisplayName}`;
              } else {
                notifMessage = `Hai perso la sfida 1vs1 contro ${challengedDisplayName}`;
              }

              notifData = {
                screen: 'challenge_result',
                type: 'challenge_completed',
                challengeId: String(record.id),
                winner: String(record.winner || ''),
                opponentName: challengedDisplayName
              };
            }
          }
        }
      } else if (table === 'async_tournaments') {
        if (type === 'INSERT') {
          const rawInvited = Array.isArray(record.invited_identifiers) ? record.invited_identifiers : [];
          const creatorEmail = record.creator?.email ? String(record.creator.email).trim().toLowerCase() : '';
          const creatorUserId = (record.creator?.userId || record.creator?.id) ? String(record.creator.userId || record.creator.id).trim().toLowerCase() : '';
          const creatorName = record.creator?.name ? String(record.creator.name).trim().toLowerCase() : '';
          const creatorCode = record.creator?.playerCode ? String(record.creator.playerCode).trim().toLowerCase() : '';

          const isCreatorIdentifier = (val: any) => {
            if (!val) return false;
            const clean = String(val).trim().toLowerCase();
            return clean === creatorEmail || clean === creatorUserId || clean === creatorName || clean === creatorCode;
          };

          // Deduplica gli invitati per userId o email normalizzata ed escludi categoricamente il creatore
          const invited = Array.from(new Set(
            rawInvited
              .map((i: any) => String(i || '').trim().toLowerCase())
              .filter((i: string) => i && !isCreatorIdentifier(i))
          ));

          console.log(`[send-fcm-notification] [tournament:INSERT] Filtered invited identifiers for "${record.name}":`, invited);

          if (invited.length > 0) {
            const candidateTokens = await getFcmTokensForIdentifiers(supabaseAdmin, invited);

            // Protezione difensiva: recupera i token associati al creatore ed escludili da ogni notifica
            let creatorTokens = new Set<string>();
            const creatorKeys = [creatorEmail, creatorUserId].filter(Boolean);
            if (creatorKeys.length > 0) {
              const cTokens = await getFcmTokensForIdentifiers(supabaseAdmin, creatorKeys);
              creatorTokens = new Set(cTokens);
            }

            recipientTokens = candidateTokens.filter(t => !creatorTokens.has(t));
          } else {
            recipientTokens = [];
          }

          const creatorDisplayName = await getPlayerDisplayName(supabaseAdmin, record.creator?.email, record.creator?.name);
          notifTitle = '👑 Invito a un Torneo!';
          notifMessage = `${creatorDisplayName} ti ha invitato al torneo "${record.name}"!`;
          notifData = {
            screen: 'challenges',
            type: 'tournament_received',
            tournamentId: String(record.id)
          };
        } else if (type === 'UPDATE' && old_record?.status !== 'completed' && record.status === 'completed') {
          const participants = Array.isArray(record.participants) ? record.participants.map((p: any) => p.email || p.identifier) : [];
          recipientTokens = await getFcmTokensForIdentifiers(supabaseAdmin, participants);
          const winnerDisplayName = await getPlayerDisplayName(supabaseAdmin, record.winner?.email, record.winner?.name);
          notifTitle = '👑 Torneo Concluso!';
          notifMessage = `Il torneo "${record.name}" è terminato! Vincitore: ${winnerDisplayName}`;
          notifData = {
            screen: 'challenge_result',
            type: 'tournament_completed',
            tournamentId: String(record.id)
          };
        }
      }
    } 
    // --- RAMO B: CHIAMATA DIRETTA DALL'APP ---
    else {
      const { token, tokens, topic: reqTopic, title, message, body: notifBody, imageUrl, data } = body;
      notifTitle = title || notifTitle;
      notifMessage = message || notifBody || notifMessage;
      notifImageUrl = imageUrl;
      notifData = data || {};
      topic = reqTopic;
      recipientTokens = tokens || (token ? [token] : []);
    }

    // Se nessun destinatario o topic è stato trovato (es. webhook su eventi non rilevanti)
    if (recipientTokens.length === 0 && !topic) {
      return new Response(
        JSON.stringify({ success: true, message: 'Nessun destinatario da notificare per questa richiesta/evento.' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // 3. Acquire Google OAuth2 token for FCM v1
    const accessToken = await getGoogleAccessToken(serviceAccount);
    const fcmEndpoint = `https://fcm.googleapis.com/v1/projects/${serviceAccount.project_id}/messages:send`;

    const results: Array<{ target: string; success: boolean; messageId?: string; error?: string }> = [];

    // Send to topic if specified
    if (topic) {
      const payload = {
        message: {
          topic: topic,
          notification: {
            title: notifTitle,
            body: notifMessage,
            ...(notifImageUrl ? { image: notifImageUrl } : {}),
          },
          data: Object.fromEntries(Object.entries(notifData).map(([k, v]) => [k, String(v)])),
          android: {
            priority: 'HIGH',
            notification: {
              sound: 'default',
              channel_id: 'ten_seconds_notifications',
              default_sound: true,
              default_vibrate_timings: true,
            },
          },
        },
      };

      const res = await fetch(fcmEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const json = await res.json();
        results.push({ target: `topic:${topic}`, success: true, messageId: json.name });
      } else {
        const errText = await res.text();
        results.push({ target: `topic:${topic}`, success: false, error: errText });
      }
    }

    // Send to device tokens
    for (const fcmToken of recipientTokens) {
      if (!fcmToken || fcmToken.trim() === '') {
        continue;
      }

      const payload = {
        message: {
          token: fcmToken,
          notification: {
            title: notifTitle,
            body: notifMessage,
            ...(notifImageUrl ? { image: notifImageUrl } : {}),
          },
          data: Object.fromEntries(Object.entries(notifData).map(([k, v]) => [k, String(v)])),
          android: {
            priority: 'HIGH',
            notification: {
              sound: 'default',
              channel_id: 'ten_seconds_notifications',
              default_sound: true,
              default_vibrate_timings: true,
            },
          },
        },
      };

      const res = await fetch(fcmEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const json = await res.json();
        const msgId = json.name || '(no id)';
        console.log(
          `[send-fcm-notification] FCM OK — token: ${fcmToken.substring(0, 12)}... | messageId: ${msgId}`
        );
        results.push({ target: fcmToken.substring(0, 12) + '...', success: true, messageId: msgId });
      } else {
        const errText = await res.text();
        let errCode = 'UNKNOWN';
        try {
          const errJson = JSON.parse(errText);
          errCode = errJson?.error?.details?.[0]?.errorCode ||
                    errJson?.error?.status ||
                    errJson?.error?.message ||
                    'UNKNOWN';
        } catch (_) {}

        console.error(
          `[send-fcm-notification] FCM error for token ${fcmToken.substring(0, 12)}...: ${errCode} — ${errText.substring(0, 200)}`
        );

        results.push({ target: fcmToken.substring(0, 12) + '...', success: false, error: errCode });

        // Cleanup automatico: rimuovi token UNREGISTERED o INVALID da profiles
        if (
          supabaseAdmin &&
          (errCode === 'UNREGISTERED' ||
           errCode === 'INVALID_ARGUMENT' ||
           errCode.includes('registration-token-not-registered') ||
           errCode.includes('invalid-registration-token'))
        ) {
          try {
            await supabaseAdmin
              .from('profiles')
              .update({ fcm_token: null })
              .eq('fcm_token', fcmToken);
          } catch (_) {}
        }
      }
    }

    const allSuccessful = results.length === 0 || results.every(r => r.success);

    return new Response(
      JSON.stringify({
        success: allSuccessful,
        sentCount: results.filter(r => r.success).length,
        total: results.length,
        results,
      }),
      {
        status: allSuccessful ? 200 : 207,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('[send-fcm-notification] Error:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Internal Server Error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
