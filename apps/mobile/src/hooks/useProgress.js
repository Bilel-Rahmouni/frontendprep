import { useCallback, useEffect, useState } from 'react'
import {
  getGlobalProgress,
  getLevelProgress,
  getQuizProgress,
  getTrackProgress,
  recordQuizResult,
} from '../lib/progress'

let listeners = new Set()

function bump() {
  listeners.forEach((cb) => cb())
}

export function useProgress() {
  const [, setTick] = useState(0)

  useEffect(() => {
    const cb = () => setTick((t) => t + 1)
    listeners.add(cb)
    return () => listeners.delete(cb)
  }, [])

  const saveResult = useCallback(async (quizId, result) => {
    const entry = await recordQuizResult(quizId, result)
    bump()
    return entry
  }, [])

  return {
    saveResult,
    getQuizProgress,
    getLevelProgress,
    getTrackProgress,
    getGlobalProgress,
  }
}
