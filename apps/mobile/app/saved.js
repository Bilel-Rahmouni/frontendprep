import { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import Screen from '../src/components/Screen'
import { useBookmarks } from '../src/hooks/useBookmarks'
import { loadQuestions } from '../src/lib/loadQuestions'
import { colors, spacing } from '../src/theme'

const LEVEL_BY_SHORT_ID = {
  b: 'beginner',
  i: 'intermediate',
  a: 'advanced',
}

function getQuestionBankKey(id) {
  if (id.startsWith('html-')) {
    const [, level] = id.match(/^html-(beginner|intermediate|advanced)-/) ?? []
    return level ? `html/${level}` : null
  }

  const [, prefix, shortLevel] = id.match(/^(css|react|fe)-([bia])-/) ?? []
  const partId = prefix === 'fe' ? 'frontend' : prefix
  const level = LEVEL_BY_SHORT_ID[shortLevel]

  return partId && level ? `${partId}/${level}` : null
}

export default function SavedScreen() {
  const { bookmarkIds, toggleBookmark } = useBookmarks()
  const bookmarkKey = bookmarkIds.join(',')
  const hasBookmarks = bookmarkIds.length > 0
  const [cache, setCache] = useState({ key: '', data: [] })

  const loading = hasBookmarks && cache.key !== bookmarkKey
  const questions = cache.key === bookmarkKey ? cache.data : []

  useEffect(() => {
    if (!hasBookmarks) {
      setCache({ key: '', data: [] })
      return undefined
    }

    let cancelled = false
    const bankKeys = [...new Set(bookmarkIds.map(getQuestionBankKey).filter(Boolean))]
    const jobs = bankKeys.map((key) => {
      const [partId, levelId] = key.split('/')
      return loadQuestions(partId, levelId)
    })

    Promise.all(jobs)
      .then((banks) => {
        if (cancelled) return
        const all = banks.flat()
        const byId = new Map(all.map((q) => [q.id, q]))
        setCache({
          key: bookmarkKey,
          data: bookmarkIds.map((id) => byId.get(id)).filter(Boolean),
        })
      })
      .catch(() => {
        if (!cancelled) setCache({ key: bookmarkKey, data: [] })
      })

    return () => {
      cancelled = true
    }
  }, [bookmarkIds, bookmarkKey, hasBookmarks])

  return (
    <Screen subtitle={`${bookmarkIds.length} saved`}>
      {loading && <ActivityIndicator color={colors.textH} />}

      {!loading && !questions.length && (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No saved questions yet.</Text>
          <Link href="/quiz" asChild>
            <Pressable style={styles.primary}>
              <Text style={styles.primaryText}>Take a quiz</Text>
            </Pressable>
          </Link>
        </View>
      )}

      {!loading &&
        questions.map((q, i) => (
          <View key={q.id} style={styles.card}>
            <View style={styles.head}>
              <Text style={styles.meta}>Q{i + 1}</Text>
              <Pressable onPress={() => toggleBookmark(q.id)} hitSlop={8}>
                <Text style={styles.bookmark}>★ Saved</Text>
              </Pressable>
            </View>
            <Text style={styles.question}>{q.question}</Text>
            <Text style={styles.explanation}>{q.explanation}</Text>
          </View>
        ))}
    </Screen>
  )
}

const styles = StyleSheet.create({
  empty: { gap: spacing.md },
  emptyText: { color: colors.textMuted, fontSize: 15 },
  primary: {
    backgroundColor: colors.textH,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: { color: colors.bg, fontWeight: '600', fontSize: 15 },
  card: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    gap: 8,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  meta: { fontSize: 12, fontWeight: '600', color: colors.textMuted },
  bookmark: { fontSize: 13, fontWeight: '600', color: colors.accent },
  question: { fontSize: 16, fontWeight: '600', lineHeight: 24, color: colors.textH },
  explanation: { fontSize: 14, lineHeight: 21, color: colors.text },
})
