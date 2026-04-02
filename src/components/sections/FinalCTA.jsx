import Section from '../layout/Section'
import WaitlistForm from '../ui/WaitlistForm'

export default function FinalCTA() {
  return (
    <Section id="join-waitlist" className="pt-0">
      <div className="mx-auto w-full max-w-4xl rounded-md border border-slate-800 bg-surface p-8 text-center">
        <h2 className="text-2xl font-semibold">Join the private beta</h2>
        <p className="mt-2 text-sm text-slate-300">
          Capacity is limited so we can maintain execution quality.
        </p>
        <WaitlistForm source="footer" className="mx-auto mt-6" />
      </div>
    </Section>
  )
}
