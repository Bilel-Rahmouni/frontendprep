import { useMemo, useState } from 'react'
import { getCategoryLabel, getTipsByCategory, PREP_CATEGORIES, PREP_TIPS } from '../data/preparationTips'
import PageMeta from '../components/PageMeta'

export default function PreparationHub() {
  const [category, setCategory] = useState('all')
  const tips = useMemo(() => getTipsByCategory(category), [category])
  const activeCat = PREP_CATEGORIES.find((c) => c.id === category)

  return (
    <>
      <PageMeta
        title="Preparation"
        path="/prep"
        description="72 curated study tips for HTML, CSS, JavaScript, React, and test day."
      />
      <section className="prep-page">
      <div className="prep-page__hero">
        <p className="eyebrow">Study guide</p>
        <h1 className="display-title display-title--sm">Preparation</h1>
        <p className="prep-page__stat">{PREP_TIPS.length} curated tips</p>
      </div>

      <div className="prep-layout">
        <aside className="prep-sidebar">
          <nav className="prep-sidebar__nav" aria-label="Categories">
            {PREP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`prep-sidebar__btn ${category === cat.id ? 'prep-sidebar__btn--active' : ''}`}
                aria-pressed={category === cat.id}
                style={{ '--cat-tone': cat.tone }}
                onClick={() => setCategory(cat.id)}
              >
                <span className="prep-sidebar__dot" aria-hidden />
                {cat.label}
                {cat.id !== 'all' && (
                  <span className="prep-sidebar__count">
                    {PREP_TIPS.filter((t) => t.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        <div className="prep-feed">
          <header className="prep-feed__head">
            <h2 className="prep-feed__title">{activeCat?.label ?? 'All'}</h2>
            <span className="prep-feed__count">{tips.length}</span>
          </header>

          <ul className="prep-feed__list">
            {tips.map((tip, i) => {
              const cat = PREP_CATEGORIES.find((c) => c.id === tip.category)
              return (
                <li
                  key={tip.id}
                  className="tip-card"
                  style={{
                    '--tip-tone': cat?.tone ?? 'var(--accent)',
                    '--i': i % 10,
                  }}
                >
                  <span className="tip-card__rail" aria-hidden />
                  <div className="tip-card__inner">
                    <span className="tip-card__cat">{getCategoryLabel(tip.category)}</span>
                    <h3 className="tip-card__title">{tip.title}</h3>
                    <p className="tip-card__body">{tip.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
