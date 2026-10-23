import SectionHeading from './SectionHeading.jsx'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="scroll-mt-16 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <SectionHeading title="Skills" subtitle="Things I use, and things I'm learning." />
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
