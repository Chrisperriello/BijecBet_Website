import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { trackEvent } from '../../lib/analytics'

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <article
            key={item.id}
            className="overflow-hidden rounded-md border border-slate-800 bg-surface"
          >
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-platinum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandTeal"
                onClick={() => {
                  const nextOpen = isOpen ? -1 : index
                  setOpenIndex(nextOpen)
                  if (nextOpen !== -1) {
                    trackEvent('faq_expand', {
                      question: item.question,
                    })
                  }
                }}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                id={`${item.id}-trigger`}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen ? (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-trigger`}
                className="border-t border-slate-800 px-5 py-4 text-sm text-slate-300"
              >
                {item.answer}
              </div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}
