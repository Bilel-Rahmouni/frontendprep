import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CookieConsent from '../components/CookieConsent'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'
import { ThemeProvider } from '../context/ThemeProvider'

const HomePage = lazy(() => import('./HomePage'))
const QuizHub = lazy(() => import('./QuizHub'))
const PreparationHub = lazy(() => import('./PreparationHub'))
const SavedQuestionsHub = lazy(() => import('./SavedQuestionsHub'))
const GuidesHub = lazy(() => import('./GuidesHub'))
const GuidePage = lazy(() => import('./GuidePage'))
const FaqPage = lazy(() => import('./FaqPage'))
const AboutPage = lazy(() => import('./AboutPage'))
const PrivacyPage = lazy(() => import('./PrivacyPage'))
const AdPrivacyPage = lazy(() => import('./AdPrivacyPage'))
const DeleteDataPage = lazy(() => import('./DeleteDataPage'))
const TermsPage = lazy(() => import('./TermsPage'))

function RouteFallback() {
  return (
    <div className="hub-page hub-page--loading">
      <p className="loading-text">Loading…</p>
    </div>
  )
}

function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="app-main">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="quiz" element={<QuizHub />} />
            <Route path="quiz/:partId" element={<QuizHub />} />
            <Route path="quiz/:partId/:levelId" element={<QuizHub />} />
            <Route path="quiz/:partId/:levelId/:quizIndex" element={<QuizHub />} />
            <Route path="prep" element={<PreparationHub />} />
            <Route path="guides" element={<GuidesHub />} />
            <Route path="guides/:slug" element={<GuidePage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="ad-privacy" element={<AdPrivacyPage />} />
            <Route path="delete-data" element={<DeleteDataPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="saved" element={<SavedQuestionsHub />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-bg" aria-hidden />
      <BrowserRouter>
        <div className="app-shell">
          <Layout />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
