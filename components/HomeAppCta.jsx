const PLAY_STORE_URL =
  import.meta.env.VITE_PLAY_STORE_URL ||
  'https://play.google.com/store/apps/details?id=com.indigenoustech.frontendprep'

const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL || ''

export default function HomeAppCta() {
  return (
    <section className="home-section home-app" aria-labelledby="home-app-heading">
      <div className="home-section__head">
        <h2 id="home-app-heading" className="home-section__title">
          App
        </h2>
        <p className="home-section__lead">
          Same quizzes on Android — progress and bookmarks stay on your device.
        </p>
      </div>
      <div className="home-app__actions">
        <a
          href={PLAY_STORE_URL}
          className="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </a>
        {APP_STORE_URL ? (
          <a
            href={APP_STORE_URL}
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store
          </a>
        ) : null}
      </div>
    </section>
  )
}
