import { useCallback, useRef } from 'react'
import { PASS_THRESHOLD } from '../../data/quizConfig'

export default function ShareResultCard({ quiz, pct, score, total, passed }) {
  const canvasRef = useRef(null)

  const drawCard = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return null

    const w = 600
    const h = 320
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')

    const grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, '#121018')
    grad.addColorStop(1, '#1c1a26')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = '#e63e00'
    ctx.fillRect(0, 0, w, 4)

    ctx.fillStyle = '#8c8798'
    ctx.font = '500 14px system-ui, sans-serif'
    ctx.fillText('frontendprep', 32, 48)

    ctx.fillStyle = '#f2eff8'
    ctx.font = '700 28px system-ui, sans-serif'
    ctx.fillText(quiz.title, 32, 88)

    ctx.fillStyle = passed ? '#1dc978' : '#e63e00'
    ctx.font = '800 72px system-ui, sans-serif'
    ctx.fillText(`${pct}%`, 32, 180)

    ctx.fillStyle = '#a09aad'
    ctx.font = '500 18px system-ui, sans-serif'
    ctx.fillText(`${score} / ${total} correct`, 32, 220)

    ctx.fillStyle = passed ? '#1dc978' : '#8c8798'
    ctx.font = '600 16px system-ui, sans-serif'
    ctx.fillText(
      passed ? `Passed · above ${PASS_THRESHOLD}%` : `Need ${PASS_THRESHOLD}% to pass`,
      32,
      260,
    )

    ctx.fillStyle = '#5e5968'
    ctx.font = '500 13px system-ui, sans-serif'
    ctx.fillText('frontendprep.app', 32, 296)

    return canvas
  }, [quiz.title, pct, score, total, passed])

  const shareText = `frontendprep — ${quiz.title}: ${pct}% (${score}/${total}). ${passed ? 'Passed!' : 'Keep practicing!'}`

  async function handleShare() {
    drawCard()
    const canvas = canvasRef.current

    if (navigator.share) {
      try {
        await navigator.share({ title: 'frontendprep Result', text: shareText })
        return
      } catch {
        /* cancelled */
      }
    }

    if (canvas) {
      const link = document.createElement('a')
      link.download = `frontend-prep-${pct}pct.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareText)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="share-card">
      <canvas ref={canvasRef} className="share-card__canvas" aria-hidden />
      <div className="share-card__actions">
        <button type="button" className="btn btn--ghost btn--sm" onClick={handleShare}>
          Share result
        </button>
        <button type="button" className="btn btn--ghost btn--sm" onClick={handleCopy}>
          Copy text
        </button>
      </div>
    </div>
  )
}
