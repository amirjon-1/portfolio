import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experince from './sections/Experience'
import AllProjects from './pages/AllProjects'

const Home = () => (
  <main className="bg-white min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experince />
    <Contact />
    <Footer />
  </main>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
