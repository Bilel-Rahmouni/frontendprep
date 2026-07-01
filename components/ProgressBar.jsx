export default function ProgressBar({ value, max, label }) {
  const pct = Math.round((value / max) * 100)

  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
      <div className="progress-bar__track">
        <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress-bar__label">
        {value} / {max}
      </span>
    </div>
  )
}
