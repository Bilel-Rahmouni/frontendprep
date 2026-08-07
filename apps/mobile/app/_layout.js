import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import AdsConsentBanner from '../src/components/AdsConsentBanner'
import HeaderTitle from '../src/components/HeaderTitle'
import SplashScreen from '../src/components/SplashScreen'
import { ConsentProvider, useConsent } from '../src/consent/ConsentContext'
import { initializeAds } from '../src/lib/ads'
import { colors } from '../src/theme'

const SPLASH_MS = 1800

function AppShell() {
  const { adsAllowed } = useConsent()

  useEffect(() => {
    if (adsAllowed) initializeAds()
  }, [adsAllowed])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.bg },
          headerShadowVisible: false,
          headerTintColor: colors.textH,
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: colors.bg },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: () => <HeaderTitle title="frontendprep" showLogo />,
          }}
        />
        <Stack.Screen name="quiz/index" options={{ title: 'Tracks' }} />
        <Stack.Screen name="quiz/[partId]/index" options={{ title: 'Difficulty' }} />
        <Stack.Screen name="quiz/[partId]/[levelId]/index" options={{ title: 'Quizzes' }} />
        <Stack.Screen
          name="quiz/[partId]/[levelId]/[quizIndex]"
          options={{ title: 'Quiz', headerBackTitle: 'Back' }}
        />
        <Stack.Screen name="prep" options={{ title: 'Preparation' }} />
        <Stack.Screen name="guides/index" options={{ title: 'Guides' }} />
        <Stack.Screen name="guides/[slug]" options={{ title: 'Guide' }} />
        <Stack.Screen name="saved" options={{ title: 'Saved' }} />
      </Stack>
      <AdsConsentBanner />
    </View>
  )
}

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_MS)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen />
      </>
    )
  }

  return (
    <ConsentProvider>
      <AppShell />
    </ConsentProvider>
  )
}
