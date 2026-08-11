import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { GUIDES, PARTS, PREP_TIPS } from '@frontendprep/content'
import LegalLinks from '../src/components/LegalLinks'
import RowButton from '../src/components/RowButton'
import Screen from '../src/components/Screen'
import { spacing } from '../src/theme'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <Screen>
      <View style={styles.nav}>
        <RowButton
          title="Quizzes"
          meta={`${PARTS.length} tracks · 1,200 questions`}
          onPress={() => router.push('/quiz')}
        />
        <RowButton
          title="Guides"
          meta={`${GUIDES.length} study articles`}
          onPress={() => router.push('/guides')}
        />
        <RowButton
          title="Prep tips"
          meta={`${PREP_TIPS.length} short tips`}
          onPress={() => router.push('/prep')}
        />
        <RowButton
          title="Saved"
          meta="Bookmarked questions"
          onPress={() => router.push('/saved')}
        />
      </View>

      <LegalLinks />
    </Screen>
  )
}

const styles = StyleSheet.create({
  nav: {
    gap: spacing.sm,
  },
})
