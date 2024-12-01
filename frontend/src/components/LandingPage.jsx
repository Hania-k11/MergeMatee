import React from 'react'


import WhyMergeMate from './WhyMergeMate'
import HowItWorks from './HowItWorks'
import KeyFeatures from './KeyFeatures'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Footer from './Footer'
import NavBar from './NavBar'
import Hero from './Hero'


const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <NavBar/>
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

export default LandingPage