// Tailwind only generates classes it can find written out in full in your code,
// so build class names with a lookup table, not `border-${color}-500`.
const accentClasses = {
  sky: 'border-t-sky-500',
  rose: 'border-t-rose-500',
  emerald: 'border-t-emerald-500',
  amber: 'border-t-amber-500',
  indigo: 'border-t-indigo-500',
}

export default function ProjectCard({ project, isFavourite, onToggleFavourite }) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border border-t-4 border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${accentClasses[project.accent]}`}
    >
      <img src={project.image} alt={project.title} className="aspect-video w-full object-cover" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <button
            type="button"
            onClick={onToggleFavourite}
            aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            className="text-xl"
          >
            {isFavourite ? '★' : '☆'}
          </button>
        </div>

        <p className="mt-2 flex-1 text-slate-500 dark:text-slate-400">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium dark:bg-slate-800"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-4 text-sm font-semibold">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">
              Live demo ↗
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">
              Source code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
