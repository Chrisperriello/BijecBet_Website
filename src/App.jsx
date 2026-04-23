import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import BackgroundBanner from './components/sections/BackgroundBanner'
import FAQ from './components/sections/FAQ'
import Features from './components/sections/Features'
import FinalCTA from './components/sections/FinalCTA'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import LogoRail from './components/sections/LogoRail'
import ManualVsBijec from './components/sections/ManualVsBijec'
import ProfitCalculator from './components/sections/ProfitCalculator'
import TrustDisclaimer from './components/sections/TrustDisclaimer'
import { PlatformProvider } from './lib/PlatformContext'

export default function App() {
  return (
    <PlatformProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <BackgroundBanner />
          <Hero />
          <HowItWorks />
          <Features />
          <ManualVsBijec />
          <ProfitCalculator />
          <TrustDisclaimer />
          <LogoRail />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </PlatformProvider>
  )
}
