import Section from '../layout/Section'
import Button from '../ui/Button'

const BETA_URL = 'https://bijec.web.app'

export default function FinalCTA() {
  return (
    <Section id="beta-access" className="pt-0">
      <div className="mx-auto w-full max-w-4xl rounded-md border border-slate-800 bg-surface p-8 text-center">
        <h2 className="text-2xl font-semibold">Ready for the private beta?</h2>
        <p className="mt-2 text-sm text-slate-300">
          Launch Bijec and start using the beta.
        </p>
        <div className="mt-6">
          <a href={BETA_URL}>
            <Button>Go to beta</Button>
          </a>
        </div>
      </div>
    </Section>
  )
}
