import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GUIDES, PARTS, PREP_TIPS } from '@frontendprep/content'
import Screen from '../src/components/Screen'
import { colors, spacing } from '../src/theme'

export default function HomeScreen() {
  return (
    <Screen
      adSlot="home"
      subtitle="Timed HTML, CSS, React, and frontend practice — same content as the web app."
    >
      <View style={styles.metrics}>
        <Metric value="1,200" label="Questions" />
        <Metric value={String(PARTS.length)} label="Tracks" />
        <Metric value={String(GUIDES.length)} label="Guides" />
        <Metric value={String(PREP_TIPS.length)} label="Tips" />
      </View>

      <Link href="/quiz" asChild>
        <Pressable style={styles.primary}>
          <Text style={styles.primaryText}>Start quizzes</Text>
        </Pressable>
      </Link>

      <View style={styles.row}>
        <Link href="/guides" asChild>
          <Pressable style={styles.secondary}>
            <Text style={styles.secondaryText}>Guides</Text>
          </Pressable>
        </Link>
        <Link href="/prep" asChild>
          <Pressable style={styles.secondary}>
            <Text style={styles.secondaryText}>Prep tips</Text>
          </Pressable>
        </Link>
      </View>

      <Link href="/saved" asChild>
        <Pressable style={styles.secondary}>
          <Text style={styles.secondaryText}>Saved questions</Text>
        </Pressable>
      </Link>
    </Screen>
  )
}

function Metric({ value, label }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  metric: {
    width: '50%',
    paddingVertical: spacing.md,
    paddingRight: spacing.md,
  },
  metricValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textH,
  },
  metricLabel: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  primary: {
    backgroundColor: colors.textH,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: {
    color: colors.bg,
    fontWeight: '600',
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  secondary: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  secondaryText: {
    color: colors.textH,
    fontWeight: '600',
    fontSize: 15,
  },
})
