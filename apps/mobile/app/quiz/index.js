import { useCallback, useState } from 'react'
import { useFocusEffect, useRouter } from 'expo-router'
import { View } from 'react-native'
import { LEVELS, PARTS, QUESTIONS_PER_LEVEL } from '@frontendprep/content'
import RowButton from '../../src/components/RowButton'
import Screen from '../../src/components/Screen'
import { useProgress } from '../../src/hooks/useProgress'

export default function TracksScreen() {
  const router = useRouter()
  const { getAllTracksProgress, version } = useProgress()
  const [progress, setProgress] = useState({})

  useFocusEffect(
    useCallback(() => {
      let cancelled = false
      getAllTracksProgress().then((all) => {
        if (!cancelled) setProgress(all)
      })
      return () => {
        cancelled = true
      }
    }, [getAllTracksProgress, version]),
  )

  return (
    <Screen>
      <View style={{ gap: 10 }}>
        {PARTS.map((part) => {
          const prog = progress[part.id]
          const totalQ = QUESTIONS_PER_LEVEL * LEVELS.length
          const meta = prog
            ? `${prog.passed}/${prog.total} quizzes passed · ${totalQ} Q`
            : `${totalQ} questions · ${LEVELS.length} levels`
          return (
            <RowButton
              key={part.id}
              title={part.label}
              meta={meta}
              onPress={() => router.push(`/quiz/${part.id}`)}
            />
          )
        })}
      </View>
    </Screen>
  )
}
