import React from 'react'
import Login from './Login'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WhyMergeMate from './components/WhyMergeMate'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">
    <NavBar />
    <Hero />
    <WhyMergeMate />
    <HowItWorks />
    <KeyFeatures />
    <Testimonials />
    <CallToAction />
    <Footer />
  </main>
  )
}

export default App