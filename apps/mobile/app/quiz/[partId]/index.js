import { useCallback, useState } from 'react'
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router'
import { View } from 'react-native'
import { getPart, LEVELS } from '@frontendprep/content'
import RowButton from '../../../src/components/RowButton'
import Screen from '../../../src/components/Screen'
import { useProgress } from '../../../src/hooks/useProgress'

function param(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

export default function LevelsScreen() {
  const { partId: partIdParam } = useLocalSearchParams()
  const partId = param(partIdParam)
  const router = useRouter()
  const part = getPart(partId)
  const { getTrackLevelsProgress, version } = useProgress()
  const [progress, setProgress] = useState({})

  useFocusEffect(
    useCallback(() => {
      if (!partId) return undefined
      let cancelled = false
      getTrackLevelsProgress(partId).then((data) => {
        if (!cancelled) setProgress(data)
      })
      return () => {
        cancelled = true
      }
    }, [partId, getTrackLevelsProgress, version]),
  )

  if (!part) {
    return <Screen subtitle="Track not found." />
  }

  return (
    <Screen>
      <View style={{ gap: 10 }}>
        {LEVELS.map((level) => {
          const prog = progress[level.id]
          const meta = prog
            ? `${prog.passed}/${prog.total} passed · ${level.description}`
            : level.description
          return (
            <RowButton
              key={level.id}
              title={level.label}
              meta={meta}
              onPress={() => router.push(`/quiz/${partId}/${level.id}`)}
            />
          )
        })}
      </View>
    </Screen>
  )
}
