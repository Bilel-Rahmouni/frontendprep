import CodeDemo from './CodeDemo'
import BookmarkButton from './BookmarkButton'

export default function QuestionCard({
  question,
  questionNumber,
  total,
  selectedIndex,
  onSelect,
  showAnswer,
  disabled,
  showBookmark = false,
  titleId = 'question-title',
  reviewOnly = false,
}) {
  const effectiveSelectedIndex = reviewOnly ? question.correct : selectedIndex
  const isCorrect = effectiveSelectedIndex === question.correct
  const skipped = !reviewOnly && selectedIndex === undefined
  const groupName = `question-${question.id}`
  const focusIndex = effectiveSelectedIndex ?? 0
  const verdict = reviewOnly ? 'Correct answer' : isCorrect ? 'Correct' : skipped ? 'Time ran out' : 'Incorrect'

  function handleOptionKeyDown(event, index) {
    if (disabled) return

    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End']
    if (!keys.includes(event.key)) return

    event.preventDefault()

    const lastIndex = question.options.length - 1
    let nextIndex = index

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = index === lastIndex ? 0 : index + 1
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = index === 0 ? lastIndex : index - 1
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = lastIndex
    }

    onSelect(nextIndex)
    requestAnimationFrame(() => {
      document
        .querySelector(`[data-question-id="${question.id}"][data-option-index="${nextIndex}"]`)
        ?.focus()
    })
  }

  return (
    <article className={`question-card ${showAnswer ? 'question-card--revealed' : ''}`}>
      <header className="question-card__header">
        <span className="question-card__progress">Question {questionNumber}</span>
        <span className="question-card__total">of {total}</span>
        {showBookmark && <BookmarkButton questionId={question.id} />}
      </header>

      <h2 id={titleId} className="question-card__title">
        {question.question}
      </h2>

      <div
        role="radiogroup"
        aria-labelledby={titleId}
        aria-readonly={disabled || undefined}
        className="question-card__options"
      >
        {question.options.map((option, index) => {
          let stateClass = ''
          if (showAnswer) {
            if (index === question.correct) stateClass = 'option--correct'
            else if (!skipped && index === selectedIndex) stateClass = 'option--wrong'
          } else if (index === effectiveSelectedIndex) {
            stateClass = 'option--selected'
          }

          const checked = index === effectiveSelectedIndex

          return (
            <button
              key={`${question.id}-${index}`}
              type="button"
              role="radio"
              name={groupName}
              aria-checked={checked}
              tabIndex={disabled ? undefined : index === focusIndex ? 0 : -1}
              data-question-id={question.id}
              data-option-index={index}
              className={`option ${stateClass}`}
              style={{ '--delay': `${index * 40}ms` }}
              onClick={() => !disabled && onSelect(index)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
              disabled={disabled}
            >
              <span className="option__letter">{String.fromCharCode(65 + index)}</span>
              <span className="option__text">{option}</span>
              {showAnswer && index === question.correct && (
                <span className="option__badge option__badge--ok" aria-hidden>
                  ✓
                </span>
              )}
              {showAnswer && !skipped && index === selectedIndex && index !== question.correct && (
                <span className="option__badge option__badge--bad" aria-hidden>
                  ✗
                </span>
              )}
            </button>
          )
        })}
      </div>

      {showAnswer && (
        <div className={`question-card__feedback ${isCorrect ? 'feedback--ok' : 'feedback--bad'}`}>
          <p className="question-card__verdict">
            <span
              className={`verdict-icon ${isCorrect ? 'verdict-icon--ok' : 'verdict-icon--bad'}`}
              aria-hidden
            >
              {isCorrect ? '✓' : skipped ? '–' : '✗'}
            </span>
            {verdict}
          </p>
          <p className="question-card__explanation">{question.explanation}</p>
          <CodeDemo demo={question.demo} />
        </div>
      )}
    </article>
  )
}
