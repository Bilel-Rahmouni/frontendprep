import { Link } from 'react-router-dom'
import ContentPage, { ContentSection } from '../components/ContentPage'

export default function AdPrivacyPage() {
  return (
    <ContentPage
      title="Advertising & privacy"
      description="How frontendprep uses Google AdSense and AdMob ads on the website and Android app."
      path="/ad-privacy"
      eyebrow="Privacy"
      lead="Last updated: August 11, 2026"
    >
      <ContentSection title="Why we show ads">
        <p>
          frontendprep is free. We use Google advertising to help pay for hosting and continued
          content work. Ads appear on the website and in the Android app. Timed quizzes stay
          ad-free in the app.
        </p>
      </ContentSection>

      <ContentSection title="Website (Google AdSense)">
        <p>
          On frontendprep.site, AdSense units load only after you Accept in the cookie consent
          banner. Reject ads keeps the site usable without loading the AdSense script. See the{' '}
          <Link to="/privacy">Privacy Policy</Link> for cookies and local storage details.
        </p>
      </ContentSection>

      <ContentSection title="Android app (Google AdMob)">
        <p>
          The Android app may show AdMob banner ads outside timed quizzes. Google’s Mobile Ads SDK
          may process data such as approximate location inferred from IP address, app interactions,
          diagnostics, and advertising identifiers (for example Android Advertising ID). That data
          is collected and shared with Google for advertising, analytics, and fraud prevention.
        </p>
        <p>
          We do not create an account for you and we do not upload your quiz progress to our
          servers. Progress and bookmarks stay on your device.
        </p>
      </ContentSection>

      <ContentSection title="Your choices">
        <p>
          Manage ad personalization at{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . On Android you can also reset or opt out of the Advertising ID in system settings.
          Learn how Google uses data from apps and sites that use its services:{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/partner-sites
          </a>
          .
        </p>
      </ContentSection>

      <ContentSection title="Delete data">
        <p>
          Clear app storage or uninstall to remove on-device progress. For a deletion request, see{' '}
          <Link to="/delete-data">Request data deletion</Link>.
        </p>
      </ContentSection>

      <ContentSection title="Full policy">
        <p>
          This page summarizes advertising. The complete{' '}
          <Link to="/privacy">Privacy Policy</Link> covers the website, the app, and contact
          details.
        </p>
      </ContentSection>
    </ContentPage>
  )
}
