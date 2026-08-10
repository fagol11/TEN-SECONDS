import { AdMob, RewardAdPluginEvents } from '@capacitor-community/admob';
import { ADMOB_CONFIG } from './admobConfig';

let isAdMobInitialized = false;

export async function initializeAdMob() {
  if (isAdMobInitialized) return;
  try {
    if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.()) {
      await AdMob.initialize({
        initializeForTesting: false,
      });
      isAdMobInitialized = true;
      console.log('[AdMob] Native AdMob SDK Initialized');
      preloadRewardedAd();
    }
  } catch (e) {
    console.warn('[AdMob] Initialization notice:', e);
  }
}

export async function preloadRewardedAd() {
  try {
    if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.()) {
      await AdMob.prepareRewardVideoAd({
        adId: ADMOB_CONFIG.units.rewardedLife,
        isTesting: false,
      });
    }
  } catch (e) {
    try {
      if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.()) {
        await AdMob.prepareRewardVideoAd({
          adId: ADMOB_CONFIG.testUnits.rewarded,
          isTesting: true,
        });
      }
    } catch (testErr) {}
  }
}

export async function showRewardedAdForLife() {
  try {
    if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.()) {
      await initializeAdMob();

      let rewardEarned = false;

      const rewardListener = await AdMob.addListener(
        RewardAdPluginEvents.Rewarded,
        () => {
          rewardEarned = true;
        }
      );

      try {
        await AdMob.showRewardVideoAd();
        rewardEarned = true;
      } catch (showErr) {
        try {
          await AdMob.prepareRewardVideoAd({
            adId: ADMOB_CONFIG.testUnits.rewarded,
            isTesting: true,
          });
          await AdMob.showRewardVideoAd();
          rewardEarned = true;
        } catch (fallbackErr) {
          console.warn('[AdMob] Native ad fallback notice:', fallbackErr);
        }
      }

      await new Promise(resolve => setTimeout(resolve, 500));
      rewardListener.remove();
      preloadRewardedAd();

      return rewardEarned;
    }
  } catch (e) {
    console.warn('[AdMob] Native ad unsupported on this device:', e);
  }

  return true;
}

if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.()) {
  initializeAdMob();
}
