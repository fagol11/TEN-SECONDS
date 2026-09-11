import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';
import { saveUserFcmToken } from './supabaseClient';

let isPushInitialized = false;
let isLocalInitialized = false;
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
 * Show a native system tray notification via LocalNotifications.
 * Works seamlessly on Android/iOS and appears in the notification shade/drawer.
 */
export async function showSystemNotification({ title, body, message, data = {}, id = null }) {
  const contentBody = body || message || '';
  if (!Capacitor.isNativePlatform()) {
    console.log('[SystemNotification Web]', title, contentBody);
    return;
  }

  try {
    let perm = await LocalNotifications.checkPermissions();
    if (perm.display === 'prompt' || perm.display === 'prompt-with-rationale') {
      perm = await LocalNotifications.requestPermissions();
    }
    if (perm.display !== 'granted') {
      console.warn('[LocalNotifications] Permission not granted for display');
      return;
    }

    const notifId = id ? (typeof id === 'number' ? id : Math.abs(hashCode(String(id)))) : Math.floor(Math.random() * 1000000);

    await LocalNotifications.schedule({
      notifications: [
        {
          id: notifId,
          title: title || 'Ten Seconds 🎵',
          body: contentBody,
          channelId: 'ten_seconds_notifications',
          smallIcon: 'ic_stat_music_note',
          iconColor: '#10b981',
          extra: data,
          schedule: { at: new Date(Date.now() + 100) },
        },
      ],
    });
  } catch (err) {
    console.warn('[LocalNotifications] Schedule error:', err);
  }
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Initialize Push Notifications on Native Android / iOS platforms.
 * Sets up custom notification channels, requests permissions, and captures the FCM registration token.
 */
export async function initPushNotifications({ onTokenReceived, onNotificationReceived, onNotificationActionPerformed } = {}) {
  if (!Capacitor.isNativePlatform()) {
    console.log('[PushNotifications] Web platform detected — Native push notifications skipped');
    return { success: false, reason: 'web_platform' };
  }

  try {
    // 1. Create Android Notification Channel for High-Priority Alerts & Game Challenges
    if (Capacitor.getPlatform() === 'android') {
      try {
        await PushNotifications.createChannel({
          id: 'ten_seconds_notifications',
          name: 'Ten Seconds Notifiche',
          description: 'Notifiche in tempo reale per sfide 1vs1, richieste di amicizia e record',
          importance: 5, // High Importance (Heads-up popups)
          visibility: 1, // Public on lockscreen
          sound: 'default',
          vibration: true,
          lights: true,
          lightColor: '#10b981', // Emerald glow
        });
      } catch (channelErr) {
        console.warn('[PushNotifications] Channel creation notice:', channelErr);
      }

      try {
        await LocalNotifications.createChannel({
          id: 'ten_seconds_notifications',
          name: 'Ten Seconds Notifiche',
          description: 'Notifiche in tempo reale per sfide 1vs1, richieste di amicizia e record',
          importance: 5,
          visibility: 1,
          sound: 'default',
          vibration: true,
          lights: true,
          lightColor: '#10b981',
        });
      } catch (locErr) {
        console.warn('[LocalNotifications] Channel creation notice:', locErr);
      }
    }

    // 2. Check and Request Push Permissions
    let permStatus = await PushNotifications.checkPermissions();
    if (permStatus.receive === 'prompt' || permStatus.receive === 'prompt-with-rationale') {
      permStatus = await PushNotifications.requestPermissions();
    }

    try {
      await LocalNotifications.requestPermissions();
    } catch(e) {}

    if (permStatus.receive !== 'granted') {
      console.warn('[PushNotifications] Push permissions not granted:', permStatus.receive);
      return { success: false, reason: 'permission_denied' };
    }

    if (isPushInitialized) {
      const cached = getActiveFcmToken();
      if (cached) {
        syncFcmTokenToUser().catch(() => {});
        if (onTokenReceived) onTokenReceived(cached);
      }
      return { success: true, token: cached };
    }

    // 3. Register listeners
    await PushNotifications.removeAllListeners();

    // Registration Success: Obtain device FCM token
    PushNotifications.addListener('registration', async (token) => {
      const fcmToken = token.value;
      currentFcmToken = fcmToken;
      try {
        localStorage.setItem('ten_seconds_fcm_token', fcmToken);
      } catch(e) {}

      console.log('[PushNotifications] Device FCM Registration Token acquired:', fcmToken.substring(0, 15) + '...');

      // Save token to Supabase for the current authenticated user
      await syncFcmTokenToUser();

      if (onTokenReceived) {
        onTokenReceived(fcmToken);
      }
    });

    // Registration Error
    PushNotifications.addListener('registrationError', (error) => {
      console.warn('[PushNotifications] Registration error:', error);
    });

    // Notification Received while App is in Foreground
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('[PushNotifications] Foreground Notification Received:', notification.title, notification.body);
      
      // Do NOT call showSystemNotification here: FCM already delivers the system tray notification.
      // Calling showSystemNotification would duplicate the notification in the tray.
      if (onNotificationReceived) {
        onNotificationReceived(notification);
      }
    });

    // Notification Click / Action Performed (App opened from notification tray)
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('[PushNotifications] Notification Action Performed:', notification.actionId, notification.notification.data);
      if (onNotificationActionPerformed) {
        onNotificationActionPerformed(notification);
      }
    });

    try {
      LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
        if (onNotificationActionPerformed) {
          onNotificationActionPerformed({ notification: { data: notification.notification.extra } });
        }
      });
    } catch(e) {}

    // 4. Register device with FCM
    await PushNotifications.register();
    isPushInitialized = true;

    return { success: true };
  } catch (err) {
    console.warn('[PushNotifications] Initialization exception:', err);
    return { success: false, error: err?.message || err };
  }
}
