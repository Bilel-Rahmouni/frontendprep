import { readJson, writeJson } from './storage'

const KEY = 'consent'

export const CONSENT_ACCEPTED = 'accepted'
export const CONSENT_REJECTED = 'rejected'

export async function getConsent() {
  const value = await readJson(KEY, null)
  if (value === CONSENT_ACCEPTED || value === CONSENT_REJECTED) return value
  return null
}

export async function setConsent(value) {
  await writeJson(KEY, value)
}

export async function hasAcceptedAds() {
  return (await getConsent()) === CONSENT_ACCEPTED
}
