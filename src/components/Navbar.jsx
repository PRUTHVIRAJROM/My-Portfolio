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
    <header className="sticky top-0 z-10 border-b border-ink/15 bg-paper/90 backdrop-blur-sm dark:border-white/15 dark:bg-blueprint/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 font-mono text-xs">
        <a href="#top" className="font-medium">
          {name}
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop links: hidden on small screens, shown from `md` up */}
          <ul className="hidden gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline hover:underline-offset-4">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="border border-current px-2.5 py-1.5 hover:bg-ink hover:text-paper dark:hover:bg-white dark:hover:text-blueprint"
          >
            {darkMode ? 'Paper mode' : 'Blueprint mode'}
          </button>

          {/* Mobile menu button: only shown below `md` */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            className="md:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="border-t border-ink/15 px-5 py-2 font-mono text-sm md:hidden dark:border-white/15">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-2.5">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
