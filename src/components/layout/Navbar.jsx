import useScrollSpy from '../../hooks/useScrollSpy'
import { companyLogos } from '../../lib/logoConfig'
import Button from '../ui/Button'

const navLinks = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'trust-risk', label: 'Trust & Risk' },
  { id: 'faq', label: 'FAQ' },
]

export default function Navbar() {
  const activeSection = useScrollSpy(navLinks.map((link) => link.id), 140)

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
        <a href="#join-waitlist" className="shrink-0">
          <Button className="px-4 py-2 text-xs sm:text-sm">Join waitlist</Button>
        </a>
      </div>
    </header>
  )
}
