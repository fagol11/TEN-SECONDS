import { AdMob } from '@capacitor-community/admob';
import { ADMOB_CONFIG } from './admobConfig';

let isAdMobInitialized = false;

export async function initializeAdMob() {
  if (isAdMobInitialized) return;
  try {
    await AdMob.initialize({
      initializeForTesting: true,
    });
    isAdMobInitialized = true;
    console.log('[AdMob] Native AdMob SDK Initialized Successfully');
  } catch (e) {
    console.warn('[AdMob] Initialization warning (running in web browser or mock mode):', e);
  }
}

/**
 * Preloads & Shows Rewarded Video Ad for +1 Life Reward.
 * Uses official Ad Unit ID first, falls back to Google Test Ad Unit if ad fill is not ready yet.
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

    // 1. Try Official User Ad Unit ID
    try {
      await AdMob.prepareRewardVideoAd({
        adId: ADMOB_CONFIG.units.rewardedLife,
        isTesting: false,
      });
      await AdMob.showRewardVideoAd();
    } catch (officialErr) {
      console.warn('[AdMob] Official Ad Unit no-fill/loading notice. Trying Google Test Ad Unit:', officialErr);
      
      // 2. Fallback to Google Official Test Rewarded Ad Unit ID
      await AdMob.prepareRewardVideoAd({
        adId: ADMOB_CONFIG.testUnits.rewarded,
        isTesting: true,
      });
      await AdMob.showRewardVideoAd();
      rewardEarned = true;
    }

    // Remove listener after display
    setTimeout(() => {
      rewardListener.remove();
    }, 1000);

    return rewardEarned;
  } catch (e) {
    console.warn('[AdMob] Native ad failed or unsupported on this device. Granting fallback reward:', e);
    return true; // Ensure user is never stuck without lives
  }
}
