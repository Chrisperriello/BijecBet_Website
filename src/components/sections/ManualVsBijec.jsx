import { CheckCircle2, XCircle } from 'lucide-react'
import Section from '../layout/Section'

const manualItems = ['High Latency', 'Human Error', 'Missed Windows']
const bijecItems = [
  'Sub-10ms Detection',
  'Real time AI advice',
  'Institutional Precision',
]

export default function ManualVsBijec() {
  return (
    <Section id="manual-vs-bijec" className="pt-0">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-md border border-slate-800">
        <div className="grid md:grid-cols-2">
          <div className="bg-slate-900/55 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Manual</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-400">Traditional Workflow</h2>
            <ul className="mt-5 space-y-3">
              {manualItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-500">
                  <XCircle className="h-4 w-4 text-slate-600" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-[#0A192F] p-6 sm:p-7">
            <div
              className="pointer-events-none absolute inset-0 opacity-100"
              style={{
                boxShadow: 'inset 0 0 60px rgba(100,255,218,0.20), 0 0 45px rgba(100,255,218,0.22)',
              }}
              aria-hidden="true"
            />
            <p className="relative text-xs uppercase tracking-[0.2em] text-[#64FFDA]">Bijec</p>
            <h2 className="relative mt-2 text-2xl font-semibold text-platinum">BijecBet Engine</h2>
            <ul className="relative mt-5 space-y-3">
              {bijecItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#E0E1DD]">
                  <CheckCircle2 className="h-4 w-4 text-[#64FFDA]" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
