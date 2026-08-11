import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import AppAdsBanner from '../src/components/AppAdsBanner'
import HeaderTitle from '../src/components/HeaderTitle'
import SplashScreen from '../src/components/SplashScreen'
import { initializeAds } from '../src/lib/ads'
import { colors } from '../src/theme'

const SPLASH_MS = 1800

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_MS)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    initializeAds()
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
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1 }}>
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
      </View>
      <AppAdsBanner />
    </View>
  )
}
