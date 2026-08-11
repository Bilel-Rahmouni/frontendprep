import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import {
  ActivityIndicator,
  Alert,
  AppState,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  formatQuizTime,
  getLevel,
  getPart,
  getQuizMeta,
  PASS_THRESHOLD,
  QUESTIONS_PER_QUIZ,
  QUIZ_TIME_SEC,
  QUIZZES_PER_LEVEL,
} from '@frontendprep/content'
import { useBookmarks } from '../../../../src/hooks/useBookmarks'
import { useProgress } from '../../../../src/hooks/useProgress'
import { getExamMeta, shuffleQuestions } from '../../../../src/lib/examMode'
import { loadQuestions } from '../../../../src/lib/loadQuestions'
import { spacing } from '../../../../src/theme'
import { useTheme } from '../../../../src/theme/ThemeContext'

function param(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

export default function QuizRunnerScreen() {
  const params = useLocalSearchParams()
  const partId = param(params.partId)
  const levelId = param(params.levelId)
  const quizIndexParam = param(params.quizIndex)
  const router = useRouter()
  const navigation = useNavigation()
  const { colors } = useTheme()
  const isExam = quizIndexParam === 'exam'
  const quizIndex = isExam ? null : Number(quizIndexParam)

  const part = getPart(partId)
  const level = getLevel(levelId)
  const { saveResult } = useProgress()
  const { toggleBookmark, isBookmarked } = useBookmarks()

  const [bank, setBank] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_TIME_SEC)
  const [done, setDone] = useState(false)
  const [review, setReview] = useState(false)
  const [examSeed, setExamSeed] = useState(0)
  const [saveError, setSaveError] = useState(false)
  const [saveTick, setSaveTick] = useState(0)
  const savedRef = useRef(false)
  const endsAtRef = useRef(null)
  const mountedRef = useRef(true)
  const bankKeyRef = useRef('')
  const bankKey = `${partId}/${levelId}`

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const quiz = useMemo(() => {
    if (!part || !level) return null
    if (isExam) return getExamMeta(partId, levelId, part.label, level.label)
    if (!Number.isInteger(quizIndex) || quizIndex < 0 || quizIndex >= QUIZZES_PER_LEVEL) return null
    return getQuizMeta(partId, levelId, quizIndex)
  }, [part, level, isExam, partId, levelId, quizIndex])

  const questions = useMemo(() => {
    if (!bank.length || !quiz) return []
    if (isExam) return shuffleQuestions(bank, QUESTIONS_PER_QUIZ)
    return bank.slice(quiz.start, quiz.end)
  }, [bank, quiz, isExam, examSeed])

  const resetRun = useCallback(() => {
    setCurrent(0)
    setAnswers({})
    setSecondsLeft(QUIZ_TIME_SEC)
    setDone(false)
    setReview(false)
    setSaveError(false)
    savedRef.current = false
    endsAtRef.current = Date.now() + QUIZ_TIME_SEC * 1000
    if (isExam) setExamSeed((s) => s + 1)
  }, [isExam])

  useEffect(() => {
    if (done || loading || error) return undefined
    const sub = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault()
      Alert.alert('Leave quiz?', 'This attempt will not be saved.', [
        { text: 'Stay', style: 'cancel' },
        {
          text: 'Leave',
          style: 'destructive',
          onPress: () => navigation.dispatch(e.data.action),
        },
      ])
    })
    return sub
  }, [navigation, done, loading, error])

  useEffect(() => {
    let cancelled = false
    setError(null)

    // Same level bank already in memory — skip spinner when switching quizzes
    if (bankKeyRef.current === bankKey) {
      resetRun()
      setLoading(false)
      return undefined
    }

    setLoading(true)
    resetRun()
    loadQuestions(partId, levelId)
      .then((qs) => {
        if (cancelled) return
        bankKeyRef.current = bankKey
        setBank(qs)
        setLoading(false)
        endsAtRef.current = Date.now() + QUIZ_TIME_SEC * 1000
      })
      .catch((err) => {
        if (cancelled) return
        setError(err?.message || 'Could not load questions.')
        setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [partId, levelId, quizIndexParam, resetRun, bankKey])

  const finishQuiz = useCallback(() => {
    setDone(true)
  }, [])

  useEffect(() => {
    if (!done || !quiz || !questions.length || savedRef.current) return
    let cancelled = false
    setSaveError(false)
    const correct = questions.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0)
    const pct = Math.round((correct / questions.length) * 100)
    saveResult(quiz.id, { pct, score: correct, total: questions.length }).then((entry) => {
      if (cancelled) return
      if (entry) savedRef.current = true
      else setSaveError(true)
    })
    return () => {
      cancelled = true
    }
  }, [done, quiz, questions, answers, saveResult, saveTick])

  useEffect(() => {
    if (loading || error || done || !questions.length) return undefined

    let intervalId
    let finished = false

    const syncFromDeadline = () => {
      if (finished) return
      const endsAt = endsAtRef.current
      if (!endsAt) return
      const remaining = Math.max(0, Math.ceil((endsAt - Date.now()) / 1000))
      setSecondsLeft(remaining)
      if (remaining <= 0) {
        finished = true
        if (intervalId) clearInterval(intervalId)
        finishQuiz()
      }
    }

    syncFromDeadline()
    intervalId = setInterval(syncFromDeadline, 250)

    const onAppState = (state) => {
      if (state === 'active') syncFromDeadline()
    }
    const sub = AppState.addEventListener('change', onAppState)

    return () => {
      if (intervalId) clearInterval(intervalId)
      sub.remove()
    }
  }, [loading, error, done, questions.length, finishQuiz, quizIndexParam, examSeed])

  const retryLoad = () => {
    setLoading(true)
    setError(null)
    bankKeyRef.current = ''
    loadQuestions(partId, levelId)
      .then((qs) => {
        if (!mountedRef.current) return
        bankKeyRef.current = bankKey
        setBank(qs)
        resetRun()
        setLoading(false)
      })
      .catch((err) => {
        if (!mountedRef.current) return
        setError(err?.message || 'Could not load questions.')
        setLoading(false)
      })
  }

  if (!part || !level || !quiz) {
    return (
      <View style={[styles.center, { backgroundColor: colors.bg }]}>
        <Text style={[styles.error, { color: colors.textMuted }]}>Quiz not found</Text>
        <Pressable
          style={[styles.primary, { backgroundColor: colors.textH }]}
          onPress={() => router.replace('/quiz')}
        >
          <Text style={[styles.primaryText, { color: colors.bg }]}>Back to tracks</Text>
        </Pressable>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: colors.bg }]}>
        <ActivityIndicator color={colors.textH} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={[styles.center, { backgroundColor: colors.bg }]}>
        <Text style={[styles.error, { color: colors.textMuted }]}>{error}</Text>
        <Pressable style={[styles.primary, { backgroundColor: colors.textH }]} onPress={retryLoad}>
          <Text style={[styles.primaryText, { color: colors.bg }]}>Retry</Text>
        </Pressable>
      </View>
    )
  }

  if (done) {
    if (!questions.length) {
      return (
        <View style={[styles.center, { backgroundColor: colors.bg }]}>
          <Text style={[styles.error, { color: colors.textMuted }]}>No questions loaded.</Text>
          <Pressable
            style={[styles.primary, { backgroundColor: colors.textH }]}
            onPress={() => router.back()}
          >
            <Text style={[styles.primaryText, { color: colors.bg }]}>Back</Text>
          </Pressable>
        </View>
      )
    }

    const correct = questions.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0)
    const pct = Math.round((correct / questions.length) * 100)
    const passed = pct >= PASS_THRESHOLD

    if (review) {
      return (
        <ScrollView
          style={[styles.root, { backgroundColor: colors.bg }]}
          contentContainerStyle={styles.pad}
        >
          <Text style={[styles.heading, { color: colors.textH }]}>Review</Text>
          {questions.map((q, i) => {
            const selected = answers[i]
            const ok = selected === q.correct
            const bookmarked = isBookmarked(q.id)
            return (
              <View
                key={q.id}
                style={[
                  styles.reviewCard,
                  { borderColor: colors.border, backgroundColor: colors.surface },
                ]}
              >
                <View style={styles.reviewHead}>
                  <Text style={[styles.reviewMeta, { color: colors.textMuted }]}>
                    Q{i + 1} · {ok ? 'Correct' : selected == null ? 'Skipped' : 'Incorrect'}
                  </Text>
                  <Pressable onPress={() => toggleBookmark(q.id)} hitSlop={8}>
                    <Text style={[styles.bookmark, { color: colors.accent }]}>
                      {bookmarked ? '★ Saved' : '☆ Save'}
                    </Text>
                  </Pressable>
                </View>
                <Text style={[styles.question, { color: colors.textH }]}>{q.question}</Text>
                {q.demo?.code ? (
                  <Text style={[styles.code, { color: colors.text, backgroundColor: colors.surface2 }]}>
                    {q.demo.code}
                  </Text>
                ) : null}
                <View style={styles.options}>
                  {q.options.map((option, oi) => {
                    const isCorrect = oi === q.correct
                    const isSelected = selected === oi
                    const borderColor = isCorrect
                      ? colors.success
                      : isSelected
                        ? colors.error
                        : colors.border
                    return (
                      <View
                        key={`${q.id}-opt-${oi}`}
                        style={[
                          styles.option,
                          {
                            borderColor,
                            backgroundColor: isCorrect || isSelected ? colors.bg : colors.surface,
                          },
                        ]}
                      >
                        <Text style={[styles.optionText, { color: colors.textH }]}>
                          {option}
                          {isCorrect ? ' · correct' : isSelected ? ' · yours' : ''}
                        </Text>
                      </View>
                    )
                  })}
                </View>
                <Text style={[styles.explanation, { color: colors.text }]}>{q.explanation}</Text>
              </View>
            )
          })}
          <Pressable
            style={[styles.primary, { backgroundColor: colors.textH }]}
            onPress={() => setReview(false)}
          >
            <Text style={[styles.primaryText, { color: colors.bg }]}>Back to results</Text>
          </Pressable>
        </ScrollView>
      )
    }

    return (
      <ScrollView
        style={[styles.root, { backgroundColor: colors.bg }]}
        contentContainerStyle={styles.pad}
      >
        <Text style={[styles.heading, { color: colors.textH }]}>Results</Text>
        <Text style={[styles.score, { color: colors.textH }]}>
          {correct}/{questions.length} · {pct}%
        </Text>
        <Text style={{ fontSize: 15, fontWeight: '600', color: passed ? colors.success : colors.textMuted }}>
          {passed ? 'Passed' : 'Keep practicing'}
        </Text>
        {saveError ? (
          <View style={{ gap: 8 }}>
            <Text style={[styles.error, { color: colors.error }]}>Could not save progress.</Text>
            <Pressable
              style={[styles.primary, { backgroundColor: colors.textH }]}
              onPress={() => setSaveTick((n) => n + 1)}
            >
              <Text style={[styles.primaryText, { color: colors.bg }]}>Retry save</Text>
            </Pressable>
          </View>
        ) : null}
        <Pressable
          style={[styles.primary, { backgroundColor: colors.textH }]}
          onPress={() => setReview(true)}
        >
          <Text style={[styles.primaryText, { color: colors.bg }]}>Review answers</Text>
        </Pressable>
        <Pressable
          style={[styles.secondary, { borderColor: colors.border, backgroundColor: colors.surface }]}
          onPress={resetRun}
        >
          <Text style={[styles.secondaryText, { color: colors.textH }]}>Retry</Text>
        </Pressable>
        <Pressable
          style={[styles.secondary, { borderColor: colors.border, backgroundColor: colors.surface }]}
          onPress={() => router.back()}
        >
          <Text style={[styles.secondaryText, { color: colors.textH }]}>Back to quizzes</Text>
        </Pressable>
      </ScrollView>
    )
  }

  const q = questions[current]
  if (!q) {
    return (
      <View style={[styles.center, { backgroundColor: colors.bg }]}>
        <Text style={[styles.error, { color: colors.textMuted }]}>No questions loaded.</Text>
      </View>
    )
  }

  const selected = answers[current]
  const isLast = current === questions.length - 1

  return (
    <ScrollView
      style={[styles.root, { backgroundColor: colors.bg }]}
      contentContainerStyle={styles.pad}
    >
      <View style={styles.top}>
        <Text style={[styles.meta, { color: colors.textMuted }]}>
          {current + 1}/{questions.length}
        </Text>
        <Text
          style={[
            styles.timer,
            { color: colors.textH },
            secondsLeft <= 30 && { color: colors.error },
          ]}
        >
          {formatQuizTime(secondsLeft)}
        </Text>
      </View>
      <Text style={[styles.question, { color: colors.textH }]}>{q.question}</Text>
      <View style={styles.options}>
        {q.options.map((option, i) => {
          const active = selected === i
          return (
            <Pressable
              key={`${q.id}-${i}`}
              style={[
                styles.option,
                {
                  borderColor: active ? colors.textH : colors.border,
                  backgroundColor: active ? colors.bg : colors.surface,
                },
              ]}
              onPress={() => setAnswers((prev) => ({ ...prev, [current]: i }))}
            >
              <Text
                style={[
                  styles.optionText,
                  { color: colors.textH },
                  active && styles.optionTextActive,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          )
        })}
      </View>
      <Pressable
        style={[styles.primary, { backgroundColor: colors.textH }]}
        onPress={() => {
          if (isLast) finishQuiz()
          else setCurrent((c) => c + 1)
        }}
      >
        <Text style={[styles.primaryText, { color: colors.bg }]}>
          {isLast ? 'Submit quiz' : selected == null ? 'Skip' : 'Next question'}
        </Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  pad: { padding: spacing.lg, paddingBottom: 40, gap: spacing.md },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.md,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  meta: { fontSize: 13, fontWeight: '600' },
  timer: { fontSize: 16, fontWeight: '700', fontVariant: ['tabular-nums'] },
  heading: { fontSize: 22, fontWeight: '700' },
  question: { fontSize: 18, fontWeight: '600', lineHeight: 26 },
  options: { gap: 10 },
  option: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
  },
  optionText: { fontSize: 15, lineHeight: 22 },
  optionTextActive: { fontWeight: '600' },
  primary: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryDisabled: { opacity: 0.35 },
  primaryText: { fontWeight: '600', fontSize: 15 },
  secondary: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryText: { fontWeight: '600', fontSize: 15 },
  score: { fontSize: 32, fontWeight: '700' },
  error: { textAlign: 'center' },
  reviewCard: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  reviewHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  reviewMeta: { fontSize: 12, fontWeight: '600' },
  bookmark: { fontSize: 13, fontWeight: '600' },
  explanation: { fontSize: 14, lineHeight: 21 },
  code: {
    fontFamily: 'Courier',
    fontSize: 12,
    lineHeight: 18,
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
})
