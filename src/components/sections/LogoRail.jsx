

import { partnerLogoPlaceholders } from '../../lib/logoConfig'

export default function LogoRail() {
  return (
    <section
      aria-label="Partner logos"
      className="mx-auto w-full max-w-6xl px-6 pb-12 sm:pb-16"
    >
      <div className="rounded-md border border-slate-800 bg-surface p-5 sm:p-6">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Monitored sports books (Not Associated)
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {partnerLogoPlaceholders.map((slot) => (
            <div
              key={slot.id}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-md border border-slate-700 bg-slate-900/50 p-2 sm:h-28 sm:w-28"
              role="img"
              aria-label={slot.label}
            >
              {slot.src ? (
                <img
                  src={slot.src}
                  alt={slot.text}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width={112}
                  height={112}
                />
              ) : (
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {slot.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
