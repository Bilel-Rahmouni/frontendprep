import { useCallback, useState } from 'react'
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router'
import { View } from 'react-native'
import {
  getLevel,
  getPart,
  getQuizTimeLabel,
  getQuizzesForLevel,
  QUESTIONS_PER_QUIZ,
} from '@frontendprep/content'
import RowButton from '../../../../src/components/RowButton'
import Screen from '../../../../src/components/Screen'
import { useProgress } from '../../../../src/hooks/useProgress'

function param(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

export default function QuizListScreen() {
  const params = useLocalSearchParams()
  const partId = param(params.partId)
  const levelId = param(params.levelId)
  const router = useRouter()
  const part = getPart(partId)
  const level = getLevel(levelId)
  const { getLevelProgressBundle, version } = useProgress()
  const [bundle, setBundle] = useState(null)

  useFocusEffect(
    useCallback(() => {
      if (!partId || !levelId) return undefined
      let cancelled = false
      getLevelProgressBundle(partId, levelId).then((data) => {
        if (!cancelled) setBundle(data)
      })
      return () => {
        cancelled = true
      }
    }, [partId, levelId, getLevelProgressBundle, version]),
  )

  if (!part || !level) {
    return <Screen subtitle="Not found." />
  }

  const quizzes = getQuizzesForLevel(partId, levelId)
  const quizProg = Object.fromEntries((bundle?.quizzes || []).map((q) => [q.id, q]))
  const examProg = bundle?.exam
  const levelProg = bundle

  let examMeta = `Random ${QUESTIONS_PER_QUIZ} Q · ${getQuizTimeLabel()}`
  if (examProg?.bestPct != null) {
    examMeta += ` · best ${examProg.bestPct}%`
    if (examProg.passed) examMeta += ' · passed'
  }

  return (
    <Screen
      subtitle={
        levelProg ? `${levelProg.passed}/${levelProg.total} quizzes passed` : undefined
      }
    >
      <View style={{ gap: 10 }}>
        <RowButton
          title="Mock exam"
          meta={examMeta}
          onPress={() => router.push(`/quiz/${partId}/${levelId}/exam`)}
        />
        {quizzes.map((quiz, i) => {
          const prog = quizProg[quiz.id]
          let meta = `${QUESTIONS_PER_QUIZ} Q · ${getQuizTimeLabel()}`
          if (prog?.bestPct != null) {
            meta += ` · best ${prog.bestPct}%`
            if (prog.passed) meta += ' · passed'
          }
          return (
            <RowButton
              key={quiz.id}
              title={`Quiz ${i + 1}`}
              meta={meta}
              onPress={() => router.push(`/quiz/${partId}/${levelId}/${i}`)}
            />
          )
        })}
      </View>
    </Screen>
  )
}
