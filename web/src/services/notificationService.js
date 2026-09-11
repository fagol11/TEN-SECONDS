import { saveUserFcmToken } from './supabaseClient';

let currentFcmToken = null;

export function getActiveFcmToken() {
  return currentFcmToken || localStorage.getItem('ten_seconds_fcm_token');
}

export async function syncFcmTokenToUser() {
  const token = getActiveFcmToken();
  if (!token) return;
  try {
    await saveUserFcmToken(token);
  } catch (e) {
    console.warn('[NotificationService] Sync FCM token notice:', e);
  }
}

/**
 * Show notification in web browser if supported and granted.
 */
export async function showSystemNotification({ title, body, message, data = {}, id = null }) {
  const contentBody = body || message || '';
  console.log('[SystemNotification Web]', title, contentBody);
  
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title || 'Ten Seconds 🎵', {
        body: contentBody,
        data: data
      });
    } catch(e) {}
  }
}

/**
 * Push notifications stub for pure web environment.
 */
export async function initPushNotifications({ onTokenReceived, onNotificationReceived, onNotificationActionPerformed } = {}) {
  console.log('[PushNotifications] Web platform detected — Native push notifications skipped');
  return { success: false, reason: 'web_platform' };
}

export function openSystemNotificationSettings() {
  console.log('[NotificationService] Notification settings requested on web');
}
