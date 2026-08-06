import { Link, Navigate, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { ContentCta } from '../components/ContentPage'
import { getGuide } from '../data/guides'

export default function GuidePage() {
  const { slug } = useParams()
  const guide = getGuide(slug)

  if (!guide) {
    return <Navigate to="/guides" replace />
  }

  return (
    <>
      <PageMeta
        title={guide.title}
        description={guide.description}
        path={`/guides/${guide.slug}`}
      />
      <article className="content-page">
        <header className="content-page__header">
          <p className="eyebrow">
            <Link to="/guides" className="content-back">
              Guides
            </Link>
            <span aria-hidden> / </span>
            {guide.category}
          </p>
          <h1 className="display-title display-title--sm">{guide.title}</h1>
          <p className="content-page__lead">{guide.description}</p>
          <p className="content-page__meta">{guide.readMinutes} min read</p>
        </header>

        <div className="content-page__body">
          {guide.sections.map((section) => (
            <section key={section.heading} className="content-section">
              <h2 className="content-section__title">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={`${section.heading}-${i}`}>{p}</p>
              ))}
            </section>
          ))}

          <ContentCta to="/quiz" label="Practice with quizzes" />
        </div>
      </article>
    </>
  )
}
