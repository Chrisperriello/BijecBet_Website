import { companyLogos } from '../../lib/logoConfig'
import { trackEvent } from '../../lib/analytics'
import { motion, useReducedMotion } from 'framer-motion'
import Section from '../layout/Section'
import Button from '../ui/Button'
import WaitlistForm from '../ui/WaitlistForm'

const marketFeedItems = [
  'DraftKings: +110 | FanDuel: -105 -> 2.4% Arb',
  'BetMGM: +125 | BetRivers: -118 -> 1.9% Arb',
  'FanDuel: +102 | DraftKings: -101 -> 1.4% Arb',
  'BetRivers: +145 | BetMGM: -136 -> 2.1% Arb',
  'DraftKings: +133 | FanDuel: -128 -> 1.7% Arb',
  'BetMGM: +118 | FanDuel: -112 -> 1.6% Arb',
  'Caesars: +120 | bet365: -114 -> 1.8% Arb',
  'ESPN BET: +112 | Fanatics: -108 -> 1.6% Arb',
  'Hard Rock: +140 | DraftKings: -132 -> 2.2% Arb',
  'PointsBet: +109 | BetMGM: -103 -> 1.5% Arb',
  'Unibet: +127 | BetRivers: -119 -> 1.9% Arb',
  'FanDuel: +150 | Caesars: -141 -> 2.0% Arb',
  'bet365: +116 | ESPN BET: -110 -> 1.7% Arb',
  'Fanatics: +138 | PointsBet: -130 -> 2.1% Arb',
  'DraftKings: +105 | Hard Rock: -102 -> 1.3% Arb',
  'BetMGM: +129 | Unibet: -121 -> 1.9% Arb',
  'Caesars: +134 | FanDuel: -126 -> 1.8% Arb',
  'BetRivers: +121 | bet365: -115 -> 1.7% Arb',
  'ESPN BET: +126 | DraftKings: -118 -> 1.9% Arb',
  'PointsBet: +131 | Fanatics: -124 -> 1.8% Arb',
  'Hard Rock: +144 | BetMGM: -136 -> 2.2% Arb',
  'Unibet: +117 | Caesars: -111 -> 1.6% Arb',
  'FanDuel: +123 | BetRivers: -116 -> 1.7% Arb',
  'bet365: +128 | DraftKings: -120 -> 1.9% Arb',
]

const MotionDiv = motion.div

function LiveMarketFeed() {
  const prefersReducedMotion = useReducedMotion()
  const rows = [...marketFeedItems, ...marketFeedItems]

  return (
    <div
      className="mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-md border p-4 text-left"
      style={{
        backgroundColor: '#0B1E3B',
        borderColor: 'rgba(100, 255, 218, 0.2)',
      }}
      aria-label="Live market feed"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brandTeal">
        Live Market Feed
      </p>
      <div className="relative h-36 overflow-hidden">
        <MotionDiv
          className="space-y-2"
          animate={prefersReducedMotion ? undefined : { y: ['0%', '-50%'] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 14, repeat: Infinity, ease: 'linear' }
          }
        >
          {rows.map((item, index) => (
            <p
              key={`${item}-${index}`}
              className="font-mono text-sm leading-6 text-slate-200"
            >
              {item}
            </p>
          ))}
        </MotionDiv>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <Section id="hero">
      <div className="mx-auto w-full max-w-4xl rounded-md border border-slate-800 bg-surface p-8 text-center">
          <img
            src={companyLogos.navbar.src}
            alt={companyLogos.navbar.alt}
            className="mx-auto h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
            loading="eager"
            width={64}
            height={64}
          />
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
          Think Less. Win More.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
          Join the waitlist for the private beta for real-time arbitrage analytics across books
          and exchanges.
        </p>
        <LiveMarketFeed />
        <WaitlistForm source="hero" className="mx-auto mt-8" />
        <div className="mt-6">
          <a
            href="#how-it-works"
            onClick={() =>
              trackEvent('hero_cta_click', {
                location: 'hero',
                destination: 'how-it-works',
              })
            }
          >
            <Button variant="outline">See how it works</Button>
          </a>
        </div>
        <img
          src={companyLogos.hero.src}
          alt={companyLogos.hero.alt}
          className="mt-8 w-full rounded-md border border-slate-700 object-cover"
          loading="eager"
          width={2160}
          height={344}
        />
      </div>
    </Section>
  )
}
