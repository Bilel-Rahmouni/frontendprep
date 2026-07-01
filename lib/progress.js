import { LEVELS, QUIZZES_PER_LEVEL } from '../data/catalog'
import { PASS_THRESHOLD } from '../data/quizConfig'
import { readJson, writeJson } from './storage'

const KEY = 'progress'

function loadAll() {
  return readJson(KEY, {})
}

function saveAll(data) {
  writeJson(KEY, data)
}

export function recordQuizResult(quizId, { pct, score, total }) {
  const all = loadAll()
  const prev = all[quizId] ?? { attempts: 0, bestPct: 0, passed: false }
  const next = {
    attempts: prev.attempts + 1,
    bestPct: Math.max(prev.bestPct, pct),
    lastPct: pct,
    lastScore: score,
    lastTotal: total,
    passed: prev.passed || pct >= PASS_THRESHOLD,
    lastAttempt: new Date().toISOString(),
  }
  all[quizId] = next
  saveAll(all)
  return next
}

export function getQuizProgress(quizId) {
  return loadAll()[quizId] ?? null
}

export function getLevelProgress(partId, levelId) {
  const all = loadAll()
  let passed = 0
  const quizzes = []

  for (let i = 0; i < QUIZZES_PER_LEVEL; i++) {
    const id = `${partId}-${levelId}-q${i + 1}`
    const entry = all[id]
    if (entry?.passed) passed++
    quizzes.push({ quizIndex: i, id, ...entry })
  }

  return { passed, total: QUIZZES_PER_LEVEL, quizzes }
}

export function getTrackProgress(partId) {
  let passed = 0
  const total = LEVELS.length * QUIZZES_PER_LEVEL

  for (const level of LEVELS) {
    const { passed: lp } = getLevelProgress(partId, level.id)
    passed += lp
  }

  return { passed, total }
}

export function getGlobalProgress() {
  const parts = ['html', 'css', 'react', 'frontend']
  let passed = 0
  let total = 0
  for (const partId of parts) {
    const t = getTrackProgress(partId)
    passed += t.passed
    total += t.total
  }
  return { passed, total }
}
