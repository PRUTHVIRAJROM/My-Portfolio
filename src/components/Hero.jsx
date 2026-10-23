export default function Hero({ profile }) {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-end gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-xs text-graphite dark:text-blueprint-ink">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-none font-bold tracking-tight font-stretch-semi-expanded sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-8 max-w-[38ch] text-xl leading-relaxed text-graphite dark:text-blueprint-ink">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs">
            <a
              href="#projects"
              className="bg-ink px-5 py-3.5 text-paper hover:bg-wire-blue dark:bg-white dark:text-blueprint dark:hover:bg-blueprint-ink"
            >
              See projects ↓
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="border border-ink px-5 py-3.5 hover:bg-ink hover:text-paper dark:border-white dark:hover:bg-white dark:hover:text-blueprint"
            >
              Email me
            </a>
          </div>
        </div>

        {/* Photo with crop marks in each corner, like a print proof */}
        <figure className="relative w-48 justify-self-start p-3 sm:w-60 md:justify-self-end">
          <span className="absolute top-0 left-0 size-4 border-t border-l border-ink/40 dark:border-white/50" />
          <span className="absolute top-0 right-0 size-4 border-t border-r border-ink/40 dark:border-white/50" />
          <span className="absolute bottom-0 left-0 size-4 border-b border-l border-ink/40 dark:border-white/50" />
          <span className="absolute right-0 bottom-0 size-4 border-r border-b border-ink/40 dark:border-white/50" />
          <img src={profile.avatar} alt={profile.name} className="aspect-[4/5] w-full object-cover grayscale" />
        </figure>
      </div>
    </section>
  )
}
