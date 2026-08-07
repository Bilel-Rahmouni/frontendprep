import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { View } from 'react-native'
import { LEVELS, PARTS, QUESTIONS_PER_LEVEL } from '@frontendprep/content'
import RowButton from '../../src/components/RowButton'
import Screen from '../../src/components/Screen'
import { useProgress } from '../../src/hooks/useProgress'

export default function TracksScreen() {
  const router = useRouter()
  const { getTrackProgress } = useProgress()
  const [progress, setProgress] = useState({})

  useEffect(() => {
    let cancelled = false
    Promise.all(
      PARTS.map(async (part) => {
        const p = await getTrackProgress(part.id)
        return [part.id, p]
      }),
    ).then((entries) => {
      if (!cancelled) setProgress(Object.fromEntries(entries))
    })
    return () => {
      cancelled = true
    }
  }, [getTrackProgress])

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
