import QuestionCard from './QuestionCard'

export default function QuizReview({ questions, answers, onBack }) {
  return (
    <div className="quiz-results">
      <button type="button" className="back-link" onClick={onBack}>
        ← Results
      </button>
      <h1 className="display-title display-title--sm">Explanations</h1>

      <ol className="quiz-review__list">
        {questions.map((q, i) => (
          <li key={q.id}>
            <QuestionCard
              question={q}
              questionNumber={i + 1}
              total={questions.length}
              selectedIndex={answers[i]}
              titleId={`question-title-${q.id}`}
              onSelect={() => {}}
              showAnswer
              disabled
              showBookmark
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
