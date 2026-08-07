import { LEVELS, PASS_THRESHOLD, QUIZZES_PER_LEVEL } from '@frontendprep/content'
import { readJson, writeJson } from './storage'

const KEY = 'progress'

async function loadAll() {
  return readJson(KEY, {})
}

async function saveAll(data) {
  await writeJson(KEY, data)
}

export async function recordQuizResult(quizId, { pct, score, total }) {
  const all = await loadAll()
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
  await saveAll(all)
  return next
}

export async function getQuizProgress(quizId) {
  const all = await loadAll()
  return all[quizId] ?? null
}

export async function getLevelProgress(partId, levelId) {
  const all = await loadAll()
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

export async function getTrackProgress(partId) {
  let passed = 0
  const total = LEVELS.length * QUIZZES_PER_LEVEL

  for (const level of LEVELS) {
    const { passed: lp } = await getLevelProgress(partId, level.id)
    passed += lp
  }

  return { passed, total }
}

export async function getGlobalProgress() {
  const parts = ['html', 'css', 'react', 'frontend']
  let passed = 0
  let total = 0
  for (const partId of parts) {
    const t = await getTrackProgress(partId)
    passed += t.passed
    total += t.total
  }
  return { passed, total }
}
