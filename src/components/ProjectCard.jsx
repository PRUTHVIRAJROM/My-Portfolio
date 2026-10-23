// Tailwind only generates classes it can find written out in full in your code,
// so build class names with a lookup table, not `border-l-wire-${color}`.
const wireClasses = {
  red: 'border-l-wire-red',
  blue: 'border-l-wire-blue',
  green: 'border-l-wire-green',
  yellow: 'border-l-wire-yellow',
}

export default function ProjectCard({ project, isFavourite, onToggleFavourite }) {
  return (
    <article
      className={`flex flex-col border border-l-[3px] border-ink/15 bg-white dark:border-y-white/30 dark:border-r-white/30 dark:bg-blueprint ${wireClasses[project.wire]}`}
    >
      <img src={project.image} alt="" className="aspect-[16/9] w-full border-b border-ink/10 object-cover dark:border-white/20" />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight font-stretch-semi-expanded">
            {project.title}
          </h3>
          <button
            type="button"
            onClick={onToggleFavourite}
            aria-pressed={isFavourite}
            className="shrink-0 font-mono text-xs text-graphite hover:text-ink dark:text-blueprint-ink dark:hover:text-white"
          >
            {isFavourite ? '★ Starred' : '☆ Star'}
          </button>
        </div>

        <p className="mt-3 flex-1 leading-relaxed text-graphite dark:text-blueprint-ink">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-graphite dark:text-blueprint-ink">
          {project.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>

        <div className="mt-6 flex gap-6 border-t border-ink/10 pt-4 font-mono text-xs dark:border-white/20">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-wire-blue">
              Live site ↗
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-wire-blue">
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
