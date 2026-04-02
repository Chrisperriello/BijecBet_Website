import { AlertTriangle } from 'lucide-react'
import Section from '../layout/Section'

export default function TrustDisclaimer() {
  return (
    <Section id="trust-risk" className="pt-0">
      <div className="mx-auto w-full max-w-4xl rounded-md border border-slate-800 bg-surface p-6 sm:p-7">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-slate-700 bg-slate-900/35 p-5">
            <h2 className="text-xl font-semibold" style={{ color: '#E0E1DD' }}>
              Safety &amp; Compliance
            </h2>
            <ul
              className="mt-4 list-disc space-y-2 pl-5 text-sm"
              style={{ color: '#E0E1DD' }}
            >
              <li>BijecBet is an analytics platform, not a sportsbook.</li>
              <li>We do not accept wagers or hold bettor funds.</li>
              <li>Market data is monitored continuously for timing accuracy.</li>
              <li>Operational controls are designed for transparent signal output.</li>
            </ul>
          </div>
          <div className="rounded-md border border-[#64FFDA33] bg-[#0B1E3B]/65 p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-[#64FFDA]" aria-hidden="true" />
              <h3 className="text-lg font-semibold" style={{ color: '#E0E1DD' }}>
                Risk Disclosure
              </h3>
            </div>
            <p className="mt-3 text-sm leading-6" style={{ color: '#E0E1DD' }}>
              Arbitrage execution includes real market risk. Lines can move before
              both legs are placed, sportsbooks can limit stakes, and account
              restrictions may affect strategy continuity.
            </p>
            <p className="mt-3 text-sm leading-6" style={{ color: '#E0E1DD' }}>
              Historical edge indicators and projected percentages are informational
              only and do not guarantee future returns.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
