/** Logo variant follows `data-theme` in CSS so it never desyncs from the page colors. */
export default function BrandLogo({ className = '', alt = 'frontendprep' }) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <img
        className="brand-logo__img brand-logo__img--on-light"
        src="/logo.png"
        alt={alt}
        width={40}
        height={40}
        decoding="async"
      />
      <img
        className="brand-logo__img brand-logo__img--on-dark"
        src="/logo-light.png"
        alt=""
        width={40}
        height={40}
        decoding="async"
        aria-hidden
      />
    </span>
  )
}
