import Section from '../layout/Section'

const pipelineCards = [
  {
    id: 'aggregate',
    title: 'Aggregate',
    description: 'We ingest multi-book odds data continuously.',
  },
  {
    id: 'detect',
    title: 'Detect',
    description: 'The engine detects cross-market arbitrage windows.',
  },
  {
    id: 'execute',
    title: 'Execute',
    description: 'You get structured opportunities before lines move.',
  },
]

function handleCardMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  event.currentTarget.style.setProperty('--x', `${x}px`)
  event.currentTarget.style.setProperty('--y', `${y}px`)
}

export default function Features() {
  return (
    <Section id="features" className="pt-0">
      <div className="mx-auto w-full max-w-4xl rounded-md border border-slate-800 bg-surface p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {pipelineCards.map((card, index) => (
            <article
              key={card.id}
              onMouseMove={handleCardMouseMove}
              className="group relative overflow-hidden rounded-md border border-transparent bg-slate-900/40 p-4 transition-colors duration-300 hover:border-[#64FFDA]"
              style={{ '--x': '50%', '--y': '50%' }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(240px circle at var(--x) var(--y), rgba(100, 255, 218, 0.16), transparent 60%)',
                }}
              />
              <p className="relative text-xs uppercase tracking-[0.16em] text-brandTeal">
                {index + 1}. {card.title}
              </p>
              <p className="relative mt-2 text-sm text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
