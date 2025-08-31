import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CV from './pages/CV.jsx'
import Projects from './pages/Projects.jsx'
import Papers from './pages/Papers.jsx'
import Paper from './pages/Paper.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/papers/:slug" element={<Paper />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}