import { readJson, writeJson } from './storage'

const KEY = 'bookmarks'

async function loadAll() {
  return readJson(KEY, [])
}

async function saveAll(ids) {
  await writeJson(KEY, ids)
}

export async function getBookmarks() {
  return loadAll()
}

export async function isBookmarked(questionId) {
  const ids = await loadAll()
  return ids.includes(questionId)
}

export async function toggleBookmark(questionId) {
  const ids = await loadAll()
  const idx = ids.indexOf(questionId)
  if (idx >= 0) {
    ids.splice(idx, 1)
  } else {
    ids.push(questionId)
  }
  await saveAll(ids)
  return ids.includes(questionId)
}

export async function removeBookmark(questionId) {
  const ids = await loadAll()
  await saveAll(ids.filter((id) => id !== questionId))
}
