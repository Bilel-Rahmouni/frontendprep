/** Opaque logos per theme — black mark on white / white mark on black. */
export default function BrandLogo({ className = '', alt = 'frontendprep' }) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <img
        className="brand-logo__img brand-logo__img--on-light"
        src="/logo-on-white.png"
        alt={alt}
        width={40}
        height={40}
        decoding="async"
      />
      <img
        className="brand-logo__img brand-logo__img--on-dark"
        src="/logo-on-black.png"
        alt=""
        width={40}
        height={40}
        decoding="async"
        aria-hidden
      />
    </span>
  )
}
