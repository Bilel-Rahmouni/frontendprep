import { usePathname } from 'expo-router'
import AdBanner from './AdBanner'

/** Hide on timed quiz / exam runners only. */
function isQuizRunner(pathname) {
  if (!pathname) return false
  const parts = pathname.split('/').filter(Boolean)
  // /quiz/:partId/:levelId/:quizIndex|exam
  return parts[0] === 'quiz' && parts.length >= 4
}

/** Single app-wide anchored banner — mount once in root layout. */
export default function AppAdsBanner() {
  const pathname = usePathname()
  if (isQuizRunner(pathname)) return null
  return <AdBanner slot="home" />
}
