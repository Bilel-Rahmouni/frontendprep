import { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
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
  const { getLevelProgress } = useProgress()
  const [progress, setProgress] = useState({})

  useEffect(() => {
    if (!partId) return undefined
    let cancelled = false
    Promise.all(
      LEVELS.map(async (level) => {
        const p = await getLevelProgress(partId, level.id)
        return [level.id, p]
      }),
    ).then((entries) => {
      if (!cancelled) setProgress(Object.fromEntries(entries))
    })
    return () => {
      cancelled = true
    }
  }, [partId, getLevelProgress])

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
