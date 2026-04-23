import useScrollSpy from '../../hooks/useScrollSpy'
import { companyLogos } from '../../lib/logoConfig'
import Button from '../ui/Button'
import { usePlatform } from '../../lib/PlatformContext'

const navLinks = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'trust-risk', label: 'Trust & Risk' },
  { id: 'faq', label: 'FAQ' },
]

export default function Navbar() {
  const activeSection = useScrollSpy(navLinks.map((link) => link.id), 140)
  const { platform, setPlatform } = usePlatform()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#hero" className="shrink-0">
          <img
            src={companyLogos.navbar.src}
            alt={companyLogos.navbar.alt}
            className="h-10 w-10 rounded-full object-cover"
            loading="eager"
            width={40}
            height={40}
          />
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm transition-colors ${
                  isActive
                    ? 'text-brandTeal'
                    : 'text-slate-300 hover:text-platinum'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="appearance-none rounded-md border border-slate-700 bg-slate-900 px-2 py-1.5 pr-6 text-[10px] font-medium text-slate-200 transition-colors hover:border-brandTeal focus:border-brandTeal focus:outline-none sm:px-3 sm:py-2 sm:pr-8 sm:text-sm"
              aria-label="Select your platform"
            >
              <option value="windows">Windows</option>
              <option value="mac">Mac</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-slate-400 sm:px-2">
              <svg className="h-3 w-3 fill-current sm:h-4 sm:w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <a href="#join-waitlist" className="shrink-0">
            <Button className="px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-sm">Join waitlist</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
