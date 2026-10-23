export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 border-t border-ink/20 pt-5 dark:border-white/25">
      <h2 className="font-display text-3xl font-bold tracking-tight font-stretch-semi-expanded sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-graphite dark:text-blueprint-ink">{subtitle}</p>}
    </div>
  )
}
