import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialTicker from './components/SocialTicker'
import ProblemAgitation from './components/ProblemAgitation'
import ProductShowcase from './components/ProductShowcase'
import Benefits from './components/Benefits'
import HowToUse from './components/HowToUse'
import Ingredients from './components/Ingredients'
import ResultsTimeline from './components/ResultsTimeline'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import MobileStickyCTA from './components/MobileStickyCTA'
import './App.css'

function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <SocialTicker />
      <ProblemAgitation />
      <ProductShowcase />
      <Benefits />
      <HowToUse />
      <Ingredients />
      <ResultsTimeline />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  )
}

export default App
