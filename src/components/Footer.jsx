export default function Footer({ name }) {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-between gap-2 border-t border-ink/15 px-5 py-6 font-mono text-[11px] text-graphite dark:border-white/15 dark:text-blueprint-ink">
      <span>
        © {year} {name}
      </span>
      <span>React · Tailwind CSS · Vite</span>
    </footer>
  )
}
