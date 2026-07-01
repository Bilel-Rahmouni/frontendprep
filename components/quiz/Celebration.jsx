import { useState } from 'react'
import { PASS_THRESHOLD } from '../../data/quizConfig'

const COLORS = ['#e85d04', '#2563eb', '#16a34a', '#f59e0b', '#ef4444', '#8b5cf6', '#ff8c42']

function ConfettiPiece({ style }) {
  return <span className="confetti-piece" style={style} aria-hidden />
}

export default function Celebration({ pct }) {
  const [pieces] = useState(() =>
    Array.from({ length: 48 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.8}s`,
      duration: `${1.8 + Math.random() * 1.2}s`,
      color: COLORS[i % COLORS.length],
      rotate: `${Math.random() * 360}deg`,
      size: `${6 + Math.random() * 8}px`,
    })),
  )

  if (pct < PASS_THRESHOLD) return null

  return (
    <div className="celebration" role="status" aria-live="polite">
      <div className="celebration__confetti">
        {pieces.map((p) => (
          <ConfettiPiece
            key={p.id}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              background: p.color,
              width: p.size,
              height: p.size,
              transform: `rotate(${p.rotate})`,
            }}
          />
        ))}
      </div>
      <div className="celebration__banner">
        <span className="celebration__emoji" aria-hidden>🎉</span>
        <p className="celebration__title">Passed!</p>
        <p className="celebration__score">{pct}% — great work</p>
      </div>
    </div>
  )
}
