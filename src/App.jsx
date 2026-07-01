import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '../components/Header'
import SiteFooter from '../components/SiteFooter'
import { ThemeProvider } from '../context/ThemeProvider'

const QuizHub = lazy(() => import('./QuizHub'))
const PreparationHub = lazy(() => import('./PreparationHub'))
const SavedQuestionsHub = lazy(() => import('./SavedQuestionsHub'))

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
            <Route index element={<Navigate to="/quiz" replace />} />
            <Route path="quiz" element={<QuizHub />} />
            <Route path="quiz/:partId" element={<QuizHub />} />
            <Route path="quiz/:partId/:levelId" element={<QuizHub />} />
            <Route path="quiz/:partId/:levelId/:quizIndex" element={<QuizHub />} />
            <Route path="prep" element={<PreparationHub />} />
            <Route path="saved" element={<SavedQuestionsHub />} />
            <Route path="*" element={<Navigate to="/quiz" replace />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
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
