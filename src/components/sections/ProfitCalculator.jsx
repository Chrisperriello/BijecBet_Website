import { useMemo, useState } from 'react'
import Section from '../layout/Section'

const TRADES_PER_DAY = 5

function formatUsd(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value)
}

export default function ProfitCalculator() {
  const [bankroll, setBankroll] = useState(2500)
  const [arbPercent, setArbPercent] = useState(2.4)

  const dailyExpectedValue = useMemo(() => {
    return bankroll * (arbPercent / 100) * TRADES_PER_DAY
  }, [bankroll, arbPercent])

  return (
    <Section id="profit-calculator" className="pt-0">
      <div className="mx-auto w-full max-w-4xl rounded-md border border-slate-800 bg-surface p-6 sm:p-7">
        <h2 className="text-2xl font-semibold text-platinum">Profit Calculator</h2>
        <p className="mt-2 text-sm text-slate-300">
          Model projected edge from bankroll and average arbitrage spread.
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
              <label htmlFor="bankroll-slider">Total Bankroll</label>
              <span className="font-mono text-brandTeal">{formatUsd(bankroll)}</span>
            </div>
            <input
              id="bankroll-slider"
              type="range"
              min={100}
              max={10000}
              step={100}
              value={bankroll}
              onChange={(event) => setBankroll(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-brandTeal"
              aria-label="Total Bankroll"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
              <label htmlFor="arb-slider">Avg. Arb %</label>
              <span className="font-mono text-brandTeal">{arbPercent.toFixed(2)}%</span>
            </div>
            <input
              id="arb-slider"
              type="range"
              min={1}
              max={5}
              step={0.1}
              value={arbPercent}
              onChange={(event) => setArbPercent(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-brandTeal"
              aria-label="Average Arbitrage Percent"
            />
          </div>
        </div>

        <div className="mt-8 rounded-md border border-[#64FFDA33] bg-[#0A192F] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.18em]" style={{ color: '#E0E1DD' }}>
            Mathematically Guaranteed Yield
          </p>
          <p className="mt-3 text-4xl font-bold sm:text-5xl" style={{ color: '#64FFDA' }}>
            {formatUsd(dailyExpectedValue)}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Daily Expected Value at {TRADES_PER_DAY} trades/day
          </p>
        </div>
      </div>
    </Section>
  )
}
