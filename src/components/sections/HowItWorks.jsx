import Section from '../layout/Section'

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="pt-0">
      <div className="mx-auto w-full max-w-4xl rounded-md border border-slate-800 bg-surface p-6 text-center">
        <h2 className="text-2xl font-semibold text-platinum">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
          BijecBet continuously monitors odds data and highlights risk-aware
          arbitrage opportunities before market shifts.
        </p>
      </div>
    </Section>
  )
}
