import { LEVELS, PARTS, PASS_THRESHOLD, QUIZZES_PER_LEVEL } from '@frontendprep/content'
import { readJson, updateJson } from './storage'

const KEY = 'progress'

async function loadAll() {
  const data = await readJson(KEY, {})
  return data && typeof data === 'object' && !Array.isArray(data) ? data : {}
}

function examId(partId, levelId) {
  return `${partId}-${levelId}-exam`
}

function quizId(partId, levelId, index) {
  return `${partId}-${levelId}-q${index + 1}`
}

export async function recordQuizResult(id, { pct, score, total }) {
  return updateJson(
    KEY,
    (all) => {
      const prev = all[id] ?? { attempts: 0, bestPct: 0, passed: false }
      return {
        ...all,
        [id]: {
          attempts: (prev.attempts || 0) + 1,
          bestPct: Math.max(prev.bestPct || 0, pct),
          lastPct: pct,
          lastScore: score,
          lastTotal: total,
          passed: Boolean(prev.passed) || pct >= PASS_THRESHOLD,
          lastAttempt: new Date().toISOString(),
        },
      }
    },
    {},
  ).then((all) => all[id])
}

export async function getQuizProgress(id) {
  const all = await loadAll()
  return all[id] ?? null
}

export async function getLevelProgress(partId, levelId) {
  const all = await loadAll()
  let passed = 0
  const quizzes = []

  for (let i = 0; i < QUIZZES_PER_LEVEL; i++) {
    const id = quizId(partId, levelId, i)
    const entry = all[id]
    if (entry?.passed) passed++
    quizzes.push({ quizIndex: i, id, ...entry })
  }

  const exam = all[examId(partId, levelId)] ?? null

  return {
    passed,
    total: QUIZZES_PER_LEVEL,
    quizzes,
    exam,
  }
}

export async function getTrackProgress(partId) {
  const all = await loadAll()
  let passed = 0
  const total = LEVELS.length * QUIZZES_PER_LEVEL

  for (const level of LEVELS) {
    for (let i = 0; i < QUIZZES_PER_LEVEL; i++) {
      if (all[quizId(partId, level.id, i)]?.passed) passed++
    }
  }

  return { passed, total }
}

/** One AsyncStorage read for the whole tracks screen. */
export async function getAllTracksProgress() {
  const all = await loadAll()
  const result = {}

  for (const { id: partId } of PARTS) {
    let passed = 0
    const total = LEVELS.length * QUIZZES_PER_LEVEL
    for (const level of LEVELS) {
      for (let i = 0; i < QUIZZES_PER_LEVEL; i++) {
        if (all[quizId(partId, level.id, i)]?.passed) passed++
      }
    }
    result[partId] = { passed, total }
  }

  return result
}

/** One AsyncStorage read for a level's quiz list + exam. */
export async function getLevelProgressBundle(partId, levelId) {
  return getLevelProgress(partId, levelId)
}

/** One AsyncStorage read for all levels in a track. */
export async function getTrackLevelsProgress(partId) {
  const all = await loadAll()
  const result = {}
  for (const level of LEVELS) {
    let passed = 0
    for (let i = 0; i < QUIZZES_PER_LEVEL; i++) {
      if (all[quizId(partId, level.id, i)]?.passed) passed++
    }
    result[level.id] = { passed, total: QUIZZES_PER_LEVEL }
  }
  return result
}

export async function getGlobalProgress() {
  const tracks = await getAllTracksProgress()
  let passed = 0
  let total = 0
  for (const partId of Object.keys(tracks)) {
    passed += tracks[partId].passed
    total += tracks[partId].total
  }
  return { passed, total }
}
