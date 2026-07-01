import { readJson, writeJson } from './storage'

const KEY = 'bookmarks'

function loadAll() {
  return readJson(KEY, [])
}

function saveAll(ids) {
  writeJson(KEY, ids)
}

export function getBookmarks() {
  return loadAll()
}

export function isBookmarked(questionId) {
  return loadAll().includes(questionId)
}

export function toggleBookmark(questionId) {
  const ids = loadAll()
  const idx = ids.indexOf(questionId)
  if (idx >= 0) {
    ids.splice(idx, 1)
  } else {
    ids.push(questionId)
  }
  saveAll(ids)
  return ids.includes(questionId)
}

export function removeBookmark(questionId) {
  saveAll(loadAll().filter((id) => id !== questionId))
}
