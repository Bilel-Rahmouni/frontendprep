import { useCallback, useSyncExternalStore } from 'react'
import {
  getGlobalProgress,
  getLevelProgress,
  getQuizProgress,
  getTrackProgress,
  recordQuizResult,
} from '../lib/progress'

let progressVersion = 0

function subscribe(cb) {
  const handler = () => {
    progressVersion += 1
    cb()
  }
  window.addEventListener('storage', handler)
  window.addEventListener('progress-changed', handler)
  return () => {
    window.removeEventListener('storage', handler)
    window.removeEventListener('progress-changed', handler)
  }
}

function getSnapshot() {
  return progressVersion
}

function bump() {
  progressVersion += 1
  window.dispatchEvent(new Event('progress-changed'))
}

export function useProgress() {
  useSyncExternalStore(subscribe, getSnapshot, () => 0)

  const saveResult = useCallback((quizId, result) => {
    const entry = recordQuizResult(quizId, result)
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
