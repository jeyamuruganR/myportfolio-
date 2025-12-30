import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './assets/pages/herosection.jsx'
import About from "./assets/pages/About.jsx"
import Projects from './assets/pages/Projects.jsx'
import Skills from './assets/pages/Skills.jsx'
import Education from './assets/pages/Education.jsx'
import Contact from './assets/pages/Contact.jsx'

function App() {


  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
        
    </>
  )
}

export default App
