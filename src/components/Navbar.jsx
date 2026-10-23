import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ name, darkMode, onToggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="text-lg font-bold text-slate-900 dark:text-white">
          {name}
        </a>

        <div className="flex items-center gap-2">
          {/* Desktop links: hidden on small screens, shown from `md` up */}
          <ul className="hidden gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium hover:text-indigo-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-4 rounded-full p-2 text-xl hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile menu button: only shown below `md` */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-xl hover:bg-slate-100 md:hidden dark:hover:bg-slate-800"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="border-t border-slate-200 px-4 py-2 md:hidden dark:border-slate-800">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-medium hover:text-indigo-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
