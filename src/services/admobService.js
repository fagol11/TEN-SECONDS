import { AdMob } from '@capacitor-community/admob';
import { ADMOB_CONFIG } from './admobConfig';

let isAdMobInitialized = false;
let isAdPreloaded = false;

export async function initializeAdMob() {
  if (isAdMobInitialized) return;
  try {
    await AdMob.initialize({
      initializeForTesting: true,
    });
    isAdMobInitialized = true;
    console.log('[AdMob] Native AdMob SDK Initialized');
    
    // Preload rewarded video ad in background immediately upon app startup
    preloadRewardedAd();
  } catch (e) {
    console.warn('[AdMob] Initialization notice (browser or mock mode):', e);
  }
}

/**
 * Preloads Rewarded Video Ad in the background for zero-delay instant playback.
 */
export async function preloadRewardedAd() {
  try {
    // Prepare Google test unit first for 100% fill rate during test/beta builds
    await AdMob.prepareRewardVideoAd({
      adId: ADMOB_CONFIG.testUnits.rewarded,
      isTesting: true,
    });
    isAdPreloaded = true;
    console.log('[AdMob] Rewarded video preloaded successfully');
  } catch (e) {
    console.warn('[AdMob] Preload test ad unit notice:', e);
    try {
      await AdMob.prepareRewardVideoAd({
        adId: ADMOB_CONFIG.units.rewardedLife,
        isTesting: false,
      });
      isAdPreloaded = true;
    } catch (realErr) {
      console.warn('[AdMob] Real ad unit preload notice:', realErr);
    }
  }
}

/**
 * Shows Rewarded Video Ad INSTANTLY for +1 Life Reward.
 * @returns {Promise<boolean>} True if user watched the ad and earned the reward
 */
export async function showRewardedAdForLife() {
  try {
    await initializeAdMob();

    let rewardEarned = false;

    // Listen for reward earned event
    const rewardListener = await AdMob.addListener('onRewardVideoRewardItem', () => {
      rewardEarned = true;
      console.log('[AdMob] Rewarded Video Reward Claimed!');
    });

    // Show preloaded ad immediately
    try {
      await AdMob.showRewardVideoAd();
    } catch (showErr) {
      console.warn('[AdMob] Immediate show notice, preparing and showing test ad:', showErr);
      await AdMob.prepareRewardVideoAd({
        adId: ADMOB_CONFIG.testUnits.rewarded,
        isTesting: true,
      });
      await AdMob.showRewardVideoAd();
      rewardEarned = true;
    }

    // Preload next ad in background
    setTimeout(() => {
      rewardListener.remove();
      preloadRewardedAd();
    }, 1000);

    return rewardEarned;
  } catch (e) {
    console.warn('[AdMob] Native ad unsupported on this device/environment. Granting fallback reward:', e);
    return true; // Ensure user is never blocked
  }
}

// Auto-initialize AdMob on module import
initializeAdMob();
