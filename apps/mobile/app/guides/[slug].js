import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { getGuide } from '@frontendprep/content'
import Screen from '../../src/components/Screen'
import { colors, spacing } from '../../src/theme'

export default function GuideDetailScreen() {
  const { slug } = useLocalSearchParams()
  const guide = getGuide(slug)

  if (!guide) {
    return <Screen title="Guide not found" />
  }

  return (
    <Screen
      adSlot="guide"
      title={guide.title}
      subtitle={`${guide.category} · ${guide.readMinutes} min read`}
    >
      {guide.sections.map((section) => (
        <View key={section.heading} style={styles.section}>
          <Text style={styles.heading}>{section.heading}</Text>
          {section.paragraphs.map((p, i) => (
            <Text key={`${section.heading}-${i}`} style={styles.p}>
              {p}
            </Text>
          ))}
        </View>
      ))}
    </Screen>
  )
}

const styles = StyleSheet.create({
  section: {
    gap: spacing.sm,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textH,
  },
  p: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.text,
  },
})
