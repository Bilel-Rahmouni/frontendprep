import { Link } from 'react-router-dom'
import PageMeta from './PageMeta'

export default function ContentPage({
  title,
  description,
  path,
  eyebrow,
  lead,
  children,
  noindex = false,
  wide = false,
}) {
  return (
    <>
      <PageMeta title={title} description={description} path={path} noindex={noindex} />
      <article className={`content-page ${wide ? 'content-page--wide' : ''}`}>
        <header className="content-page__header">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="display-title display-title--sm">{title}</h1>
          {lead && <p className="content-page__lead">{lead}</p>}
        </header>
        <div className="content-page__body">{children}</div>
      </article>
    </>
  )
}

export function ContentSection({ title, children }) {
  return (
    <section className="content-section">
      {title && <h2 className="content-section__title">{title}</h2>}
      {children}
    </section>
  )
}

export function ContentCta({ to = '/quiz', label = 'Start practicing' }) {
  return (
    <p className="content-cta">
      <Link to={to} className="btn btn--primary">
        {label}
      </Link>
    </p>
  )
}
