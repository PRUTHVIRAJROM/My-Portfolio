export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}
