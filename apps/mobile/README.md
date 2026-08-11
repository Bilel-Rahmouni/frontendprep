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

One anchored banner is mounted in the root layout on all screens except timed quiz/exam runners.

**Android AdMob App ID** is set in `app.json`:
`ca-app-pub-1493161259058671~2248223494`

**Banner unit** (app-wide): `ca-app-pub-1493161259058671/2391693723`

iOS still uses Google’s test App ID until you create an iOS AdMob app. Dev builds use Google test banners; release builds use your real unit ID.

After changing App IDs, rebuild native code (`npx expo prebuild` / EAS).

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
