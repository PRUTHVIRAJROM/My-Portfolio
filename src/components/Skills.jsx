import SectionHeading from './SectionHeading.jsx'

// Each skill group is a breadboard, and each skill is a chip plugged into it.
// The `breadboard` and `chip` classes are defined in index.css.
export default function Skills({ skills }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16">
      <SectionHeading title="Skills" subtitle="Blah blah blah blah blah." />
      <div className="space-y-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="breadboard border border-ink/10 px-5 pt-5 pb-8 dark:border-white/20"
          >
            <h3 className="font-mono text-[11px] tracking-wide text-graphite dark:text-blueprint-ink">
              {group.category}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-9">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="chip px-5 py-3 font-mono text-xs text-white transition-transform motion-safe:hover:-translate-y-0.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
