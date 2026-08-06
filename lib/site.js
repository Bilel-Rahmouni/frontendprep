/** Set VITE_SITE_URL in .env for production (no trailing slash) */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://frontendprep.app').replace(/\/$/, '')

export const SITE_NAME = 'frontendprep'

export const DEFAULT_DESCRIPTION =
  '1,200 timed quiz questions covering HTML, CSS, React, and frontend development. Practice quizzes, mock exams, study guides, and preparation tips.'

export const OG_IMAGE = `${SITE_URL}/og-image.png`
