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
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
      <SectionHeading title="Projects" subtitle="A few things I've built recently." />

      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={
              tag === activeTag
                ? 'rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white'
                : 'rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium hover:border-indigo-500 dark:border-slate-700'
            }
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
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
