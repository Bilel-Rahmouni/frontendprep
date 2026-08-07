# frontendprep mobile

Expo (React Native) app using shared content from `@frontendprep/content`.

## Setup

Mobile has its **own** `node_modules`. Root `npm run build` does not build or install this app.

```bash
cd apps/mobile
npm install
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar @react-native-async-storage/async-storage
npx expo install react-native-google-mobile-ads
```

## Ads (AdMob banners)

Banners show on Home, Guides, and Prep after the user Accepts the consent banner. Timed quizzes stay ad-free.

`app.json` currently uses **Google test AdMob app IDs**. Before release:

1. Create an AdMob app for `com.indigenoustech.frontendprep` (Android / iOS).
2. Replace `androidAppId` / `iosAppId` (and the top-level `react-native-google-mobile-ads` keys) with your real App IDs.
3. Create 3 banner units and set in `.env`:

```
EXPO_PUBLIC_ADMOB_BANNER_HOME=
EXPO_PUBLIC_ADMOB_BANNER_GUIDE=
EXPO_PUBLIC_ADMOB_BANNER_PREP=
```

AdMob needs a **custom native build** (not Expo Go):

```bash
npx expo prebuild
npx expo run:android
# or
eas build --platform android
```

## Run

```bash
cd apps/mobile
npx expo start
```

Then press `i` / `a`, or use a dev client / release build when testing real ads.
