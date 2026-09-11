/**
 * Web Admob Service Fallback
 */
export async function initializeAdMob() {
  return true;
}

export async function showRewardedAdForLife() {
  console.log('[AdMob Web] Mock rewarded ad for life');
  return { rewarded: true };
}
