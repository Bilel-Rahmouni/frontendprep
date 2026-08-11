import { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import Screen from '../src/components/Screen'
import { useBookmarks } from '../src/hooks/useBookmarks'
import { loadQuestions } from '../src/lib/loadQuestions'
import { spacing } from '../src/theme'
import { useTheme } from '../src/theme/ThemeContext'

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
  const { colors } = useTheme()
  const { bookmarkIds, ready, toggleBookmark } = useBookmarks()
  const bookmarkKey = bookmarkIds.join(',')
  const hasBookmarks = bookmarkIds.length > 0
  const [cache, setCache] = useState({ key: '', data: [] })
  const [error, setError] = useState(null)
  const [retryNonce, setRetryNonce] = useState(0)

  const loadingQuestions = ready && hasBookmarks && cache.key !== bookmarkKey && !error
  const questions = cache.key === bookmarkKey ? cache.data : []

  useEffect(() => {
    if (!ready) return undefined
    if (!hasBookmarks) {
      setCache({ key: '', data: [] })
      setError(null)
      return undefined
    }

    let cancelled = false
    setError(null)
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
        if (!cancelled) setError('Could not load saved questions.')
      })

    return () => {
      cancelled = true
    }
  }, [bookmarkIds, bookmarkKey, hasBookmarks, retryNonce, ready])

  if (!ready || loadingQuestions) {
    return (
      <Screen>
        <ActivityIndicator color={colors.textH} />
      </Screen>
    )
  }

  return (
    <Screen subtitle={`${questions.length} saved`}>
      {error ? (
        <View style={styles.empty}>
          <Text style={[styles.emptyText, { color: colors.textMuted }]}>{error}</Text>
          <Pressable
            style={[styles.primary, { backgroundColor: colors.textH }]}
            onPress={() => {
              setError(null)
              setCache({ key: '', data: [] })
              setRetryNonce((n) => n + 1)
            }}
          >
            <Text style={[styles.primaryText, { color: colors.bg }]}>Retry</Text>
          </Pressable>
        </View>
      ) : null}

      {!error && !questions.length && (
        <View style={styles.empty}>
          <Text style={[styles.emptyText, { color: colors.textMuted }]}>
            {hasBookmarks ? 'Saved questions unavailable.' : 'No saved questions yet.'}
          </Text>
          {!hasBookmarks ? (
            <Link href="/quiz" asChild>
              <Pressable style={[styles.primary, { backgroundColor: colors.textH }]}>
                <Text style={[styles.primaryText, { color: colors.bg }]}>Take a quiz</Text>
              </Pressable>
            </Link>
          ) : null}
        </View>
      )}

      {!error &&
        questions.map((q, i) => (
          <View
            key={q.id}
            style={[styles.card, { borderColor: colors.border, backgroundColor: colors.surface }]}
          >
            <View style={styles.head}>
              <Text style={[styles.meta, { color: colors.textMuted }]}>Q{i + 1}</Text>
              <Pressable onPress={() => toggleBookmark(q.id)} hitSlop={8}>
                <Text style={[styles.bookmark, { color: colors.accent }]}>★ Saved</Text>
              </Pressable>
            </View>
            <Text style={[styles.question, { color: colors.textH }]}>{q.question}</Text>
            <Text style={[styles.explanation, { color: colors.text }]}>{q.explanation}</Text>
          </View>
        ))}
    </Screen>
  )
}

const styles = StyleSheet.create({
  empty: { gap: spacing.md },
  emptyText: { fontSize: 15 },
  primary: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: { fontWeight: '600', fontSize: 15 },
  card: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  meta: { fontSize: 12, fontWeight: '600' },
  bookmark: { fontSize: 13, fontWeight: '600' },
  question: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
  explanation: { fontSize: 14, lineHeight: 21 },
})
