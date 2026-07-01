import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadQuestions } from '../data/questions'
import { useBookmarks } from '../hooks/useBookmarks'
import PageMeta from '../components/PageMeta'
import QuestionCard from '../components/quiz/QuestionCard'
import BookmarkButton from '../components/quiz/BookmarkButton'

const LEVEL_BY_SHORT_ID = {
  b: 'beginner',
  i: 'intermediate',
  a: 'advanced',
}

function getQuestionBankKey(id) {
  if (id.startsWith('html-')) {
    const [, level] = id.match(/^html-(beginner|intermediate|advanced)-/) ?? []
    return level ? `html/${level}` : null
  }

  const [, prefix, shortLevel] = id.match(/^(css|react|fe)-([bia])-/) ?? []
  const partId = prefix === 'fe' ? 'frontend' : prefix
  const level = LEVEL_BY_SHORT_ID[shortLevel]

  return partId && level ? `${partId}/${level}` : null
}

export default function SavedQuestionsHub() {
  const { bookmarkIds } = useBookmarks()
  const bookmarkKey = bookmarkIds.join(',')
  const hasBookmarks = bookmarkIds.length > 0
  const [cache, setCache] = useState({ key: '', data: [] })

  const loading = hasBookmarks && cache.key !== bookmarkKey
  const questions = cache.key === bookmarkKey ? cache.data : []

  useEffect(() => {
    if (!hasBookmarks) return

    let cancelled = false
    const bankKeys = [...new Set(bookmarkIds.map(getQuestionBankKey).filter(Boolean))]
    const jobs = bankKeys.map((key) => {
      const [partId, levelId] = key.split('/')
      return loadQuestions(partId, levelId)
    })

    Promise.all(jobs)
      .then((banks) => {
        if (cancelled) return
        const all = banks.flat()
        const questionsById = new Map(all.map((q) => [q.id, q]))
        setCache({
          key: bookmarkKey,
          data: bookmarkIds.map((id) => questionsById.get(id)).filter(Boolean),
        })
      })
      .catch(() => {
        if (!cancelled) setCache({ key: bookmarkKey, data: [] })
      })

    return () => {
      cancelled = true
    }
  }, [bookmarkIds, bookmarkKey, hasBookmarks])

  return (
    <>
      <PageMeta
        title="Saved questions"
        path="/saved"
        description="Review bookmarked quiz questions from frontendprep."
        noindex
      />
      <section className="hub-page saved-page">
      <div className="hub-page__hero hub-page__hero--compact">
        <p className="eyebrow">Bookmarks</p>
        <h1 className="display-title display-title--sm">Saved questions</h1>
        <p className="saved-page__count">{bookmarkIds.length} saved</p>
      </div>

      {loading && <p className="loading-text">Loading…</p>}

      {!loading && !questions.length && (
        <div className="saved-page__empty">
          <p>No saved questions yet.</p>
          <Link to="/quiz" className="btn btn--ghost">
            Take a quiz
          </Link>
        </div>
      )}

      {!loading && questions.length > 0 && (
        <ol className="quiz-review__list">
          {questions.map((q, i) => (
            <li key={q.id} className="saved-page__item">
              <div className="saved-page__item-head">
                <BookmarkButton questionId={q.id} showLabel />
              </div>
              <QuestionCard
                question={q}
                questionNumber={i + 1}
                total={questions.length}
                selectedIndex={undefined}
                titleId={`saved-question-title-${q.id}`}
                onSelect={() => {}}
                showAnswer
                disabled
                reviewOnly
              />
            </li>
          ))}
        </ol>
      )}
    </section>
    </>
  )
}
