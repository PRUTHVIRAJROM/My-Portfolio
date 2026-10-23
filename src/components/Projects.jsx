import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects({ projects }) {
  const [activeTag, setActiveTag] = useState('All')
  const [favourites, setFavourites] = useState([])

  // Every unique tag across all projects, with "All" first.
  const tags = ['All', ...new Set(projects.flatMap((project) => project.tags))]

  const visibleProjects =
    activeTag === 'All' ? projects : projects.filter((project) => project.tags.includes(activeTag))

  function toggleFavourite(id) {
    // Never change state in place: build a new array so React sees the change.
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favId) => favId !== id))
    } else {
      setFavourites([...favourites, id])
    }
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16">
      <SectionHeading title="Projects" subtitle="Blah blah blah blah blah blah." />

      <div className="mb-10 flex flex-wrap gap-2 font-mono text-xs">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            aria-pressed={tag === activeTag}
            className={
              tag === activeTag
                ? 'border border-ink bg-ink px-3 py-2 text-paper dark:border-white dark:bg-white dark:text-blueprint'
                : 'border border-ink/25 px-3 py-2 hover:border-ink dark:border-white/30 dark:hover:border-white'
            }
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isFavourite={favourites.includes(project.id)}
            onToggleFavourite={() => toggleFavourite(project.id)}
          />
        ))}
      </div>
    </section>
  )
}
