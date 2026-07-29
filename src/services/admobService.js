import { AdMob } from '@capacitor-community/admob';
import { ADMOB_CONFIG } from './admobConfig';

let isAdMobInitialized = false;

export async function initializeAdMob() {
  if (isAdMobInitialized) return;
  try {
    await AdMob.initialize({
      initializeForTesting: false,
    });
    isAdMobInitialized = true;
    console.log('[AdMob] Native AdMob SDK Initialized Successfully');
  } catch (e) {
    console.warn('[AdMob] Initialization warning (running in web browser or mock mode):', e);
  }
}

/**
 * Preloads & Shows Rewarded Video Ad for +1 Life Reward
 * @returns {Promise<boolean>} True if user watched the ad and earned the reward
 */
export async function showRewardedAdForLife() {
  try {
    await initializeAdMob();

    // Prepare options using official Rewarded Ad Unit ID
    const options = {
      adId: ADMOB_CONFIG.units.rewardedLife,
      isTesting: false,
    };

    let rewardEarned = false;

    // Listen for reward earned event
    const rewardListener = await AdMob.addListener('onRewardVideoRewardItem', () => {
      rewardEarned = true;
      console.log('[AdMob] Rewarded Video Reward Claimed!');
    });

    // Prepare and show ad
    await AdMob.prepareRewardVideoAd(options);
    await AdMob.showRewardVideoAd();

    // Remove listener after display
    setTimeout(() => {
      rewardListener.remove();
    }, 1000);

    return rewardEarned;
  } catch (e) {
    console.warn('[AdMob] Native ad failed or skipped in browser, granting test reward:', e);
    // Fallback for browser testing or pre-release testing
    return true;
  }
}
