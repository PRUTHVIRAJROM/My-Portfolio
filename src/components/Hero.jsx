export default function Hero({ profile }) {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-medium text-indigo-500">Hi, I'm</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium">{profile.role}</p>
          <p className="mt-4 max-w-xl text-slate-500 dark:text-slate-400">{profile.tagline}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">📍 {profile.location}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-500"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-300 px-5 py-2.5 font-semibold hover:border-indigo-500 dark:border-slate-700"
            >
              Get in touch
            </a>
          </div>
        </div>

        <img
          src={profile.avatar}
          alt={profile.name}
          className="size-40 rounded-full ring-4 ring-indigo-500/30 sm:size-56"
        />
      </div>
    </section>
  )
}
