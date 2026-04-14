import Section from '../layout/Section'
import Accordion from '../ui/Accordion'

const faqItems = [
  {
    id: 'faq-1',
    question: 'How does BijecBet identify opportunities?',
    answer:
      'BijecBet monitors odds feeds, compares books in real time, and highlights arbitrage windows before lines shift.',
  },
  {
    id: 'faq-2',
    question: 'Is this a sportsbook?',
    answer:
      'No. BijecBet is an analytics platform and does not take bets or hold user funds.',
  },
  {
    id: 'faq-3',
    question: 'How fast are updates?',
    answer:
      'The platform is designed for near real-time detection so opportunities can be acted on quickly.',
  },
  {
    id: 'faq-4',
    question: 'Which platforms are supported?',
    answer:
      'BijecBet currently supports both Windows and Mac. You can select your platform in the navigation bar to see optimized content and download options.',
  },
]

export default function FAQ() {
  return (
    <Section id="faq" className="pt-0">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="mb-5 text-2xl font-semibold text-platinum">FAQ</h2>
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
