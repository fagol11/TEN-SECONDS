/**
 * Google AdMob Configuration & Unit IDs for Ten Seconds
 */

export const ADMOB_CONFIG = {
  // Official AdMob App ID
  appId: 'ca-app-pub-1867031805275219~1641299978',

  // Ad Unit IDs
  units: {
    // Rewarded Video Ad Unit ID (For +1 Extra Life ❤️)
    rewardedLife: 'ca-app-pub-1867031805275219/1996523193',
    
    // Interstitial Ad Unit ID (Optional - between game rounds)
    interstitialRound: 'ca-app-pub-1867031805275219/interstitial-round',
    
    // Banner Ad Unit ID (Optional - bottom of screens)
    bannerBottom: 'ca-app-pub-1867031805275219/banner-bottom',
  },

  // Test Ad Unit IDs provided by Google for development/testing
  testUnits: {
    rewarded: 'ca-app-pub-3940256099942544/5224354917',
    interstitial: 'ca-app-pub-3940256099942544/1033173712',
    banner: 'ca-app-pub-3940256099942544/6300978111',
  }
};
