import { useRouter } from 'expo-router'
import { View } from 'react-native'
import { GUIDES } from '@frontendprep/content'
import RowButton from '../../src/components/RowButton'
import Screen from '../../src/components/Screen'

export default function GuidesScreen() {
  const router = useRouter()

  return (
    <Screen>
      <View style={{ gap: 10 }}>
        {GUIDES.map((guide) => (
          <RowButton
            key={guide.slug}
            title={guide.title}
            meta={`${guide.category} · ${guide.readMinutes} min`}
            onPress={() => router.push(`/guides/${guide.slug}`)}
          />
        ))}
      </View>
    </Screen>
  )
}
