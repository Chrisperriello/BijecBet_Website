import { companyLogos } from '../../lib/logoConfig'
import { trackEvent } from '../../lib/analytics'
import { motion, useReducedMotion } from 'framer-motion'
import Section from '../layout/Section'
import Button from '../ui/Button'
import WaitlistForm from '../ui/WaitlistForm'
import { usePlatform } from '../../lib/PlatformContext'

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
  const { platform } = usePlatform()

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
        <div className="mt-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brandTeal/20 bg-brandTeal/5 px-3 py-1 text-xs font-medium text-brandTeal">
            {platform === 'mac' ? (
              <>
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.057 12.781c.032 2.609 2.247 3.48 2.282 3.497-.02.067-.355 1.214-1.16 2.394-.696 1.02-1.419 2.035-2.553 2.056-1.113.021-1.471-.66-2.744-.66-1.272 0-1.666.639-2.724.68-1.096.042-1.921-.954-2.62-1.975-1.429-2.09-2.523-5.91-1.049-8.471.733-1.272 2.039-2.079 3.447-2.1.1.069.066.023.066.023 1.076.082 2.09.821 2.744.821.655 0 1.884-.897 3.178-.767 1.23.051 2.222.651 2.871 1.603-2.6.438-2.185 3.193.282 3.912zm-3.232-7.85c.579-.705.967-1.685.86-2.66-.84.034-1.859.56-2.461 1.265-.54.629-.982 1.628-.854 2.583.937.072 1.876-.483 2.455-1.188z" />
                </svg>
                Optimized for Mac
              </>
            ) : (
              <>
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 17.102L9.75 21.9V12.3H0v8.251zM10.5 2V11.7H24V0L10.5 2zm0 19.9L24 24V12.3H10.5v9.601z" />
                </svg>
                Optimized for Windows
              </>
            )}
          </span>
        </div>
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
