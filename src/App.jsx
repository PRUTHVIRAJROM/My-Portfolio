import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile, about, skills, projects } from './data/portfolio.js'

function getInitialDarkMode() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)

  // Runs after render whenever darkMode changes: put the `dark` class on <html>
  // (see index.css) and remember the choice for next visit.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      <Navbar
        name={profile.name}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <main>
        <Hero profile={profile} />
        <About paragraphs={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact email={profile.email} socials={profile.socials} />
      </main>
      <Footer name={profile.name} />
    </div>
  )
}
