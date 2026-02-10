import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Classes />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
