import { useState } from 'react'

const baseTopWavePath =
  'M0,130 C100,40 200,220 300,130 C400,40 500,220 600,130 C700,40 800,220 900,130 C1000,40 1100,220 1200,130'
const baseBottomWavePath =
  'M0,130 C100,220 200,40 300,130 C400,220 500,40 600,130 C700,220 800,40 900,130 C1000,220 1100,40 1200,130'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function BackgroundBanner() {
  const [spread, setSpread] = useState(0)

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerY = rect.height / 2
    const deltaFromCenter = Math.abs(event.clientY - rect.top - centerY)
    const intensity = 1 - clamp(deltaFromCenter / centerY, 0, 1)
    setSpread(clamp(intensity * 22, 0, 22))
  }

  return (
    <section className="px-6 pb-8 pt-4 sm:pb-10 sm:pt-6" aria-label="Bijec Bet banner">
      <div
        className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-md border border-slate-800 bg-background"
        onMouseMove={onMove}
        onMouseLeave={() => setSpread(0)}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(100,255,218,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.10) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 1200 260"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={baseTopWavePath}
            fill="none"
            stroke="rgba(100,255,218,0.45)"
            strokeWidth="2"
            style={{
              transform: `translateY(-${spread}px)`,
              transformOrigin: 'center',
              transition: 'transform 220ms ease-out',
            }}
          />
          <path
            d={baseBottomWavePath}
            fill="none"
            stroke="rgba(100,255,218,0.35)"
            strokeWidth="2"
            style={{
              transform: `translateY(${spread}px)`,
              transformOrigin: 'center',
              transition: 'transform 220ms ease-out',
            }}
          />
        </svg>
        <div className="relative flex h-40 items-center justify-center sm:h-48">
          <h2 className="font-sans text-2xl font-semibold uppercase tracking-[0.65em] text-brandTeal sm:text-3xl">
            BIJEC BET
          </h2>
        </div>
      </div>
    </section>
  )
}
