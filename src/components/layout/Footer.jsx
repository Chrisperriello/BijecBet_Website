import { companyLogos } from '../../lib/logoConfig'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-surface/30 px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 text-center">
        <img
          src={companyLogos.footer.src}
          alt={companyLogos.footer.alt}
          className="h-12 w-auto rounded-sm object-contain"
          loading="lazy"
          width={2400}
          height={960}
        />
        <p className="max-w-3xl text-xs text-slate-400">
          BijecBet is a data analytics platform, not a sportsbook. We do not
          accept wagers. Arbitrage execution includes risks such as line movement
          and account limitations.
        </p>
        <p className="max-w-3xl text-xs text-slate-500">
          If you or someone you know has a gambling problem and wants help, call
          1-800-GAMBLER.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <a href="#" className="hover:text-slate-300">
            Terms
          </a>
          <a href="#" className="hover:text-slate-300">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-300">
            X
          </a>
        </div>
      </div>
    </footer>
  )
}
