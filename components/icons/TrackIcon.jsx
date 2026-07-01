const BRAND = {
  html: {
    viewBox: '0 0 24 24',
    color: '#E34F26',
    path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
  },
  css: {
    viewBox: '0 0 384 512',
    color: '#1572B6',
    path: 'M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z',
  },
}

const CUSTOM = {
  react: (
    <>
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
      <ellipse cx="24" cy="24" rx="17" ry="6.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse
        cx="24"
        cy="24"
        rx="17"
        ry="6.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="17"
        ry="6.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        transform="rotate(120 24 24)"
      />
    </>
  ),
  frontend: (
    <>
      <rect
        x="7"
        y="11"
        width="34"
        height="26"
        rx="3"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M7 18h34" stroke="currentColor" strokeWidth="2" />
      <circle cx="12.5" cy="14.5" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="14.5" r="1.5" fill="currentColor" />
      <circle cx="22.5" cy="14.5" r="1.5" fill="currentColor" />
      <path
        d="M13 25h10M13 30h16M27 25l3.5 5L27 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
}

export default function TrackIcon({ trackId }) {
  const brand = BRAND[trackId]
  if (brand) {
    return (
      <svg
        className="track-icon track-icon--brand"
        viewBox={brand.viewBox}
        fill={brand.color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d={brand.path} />
      </svg>
    )
  }

  const icon = CUSTOM[trackId]
  if (!icon) return null

  return (
    <svg
      className="track-icon"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {icon}
    </svg>
  )
}
