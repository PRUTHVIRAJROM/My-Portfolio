import SectionHeading from './SectionHeading.jsx'

export default function Contact({ email, socials }) {
  return (
    <section id="contact" className="scroll-mt-16 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <SectionHeading title="Let's talk" subtitle="Have an idea, an internship, or just want to say hi?" />
        <a
          href={`mailto:${email}`}
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500"
        >
          {email}
        </a>
        <ul className="mt-8 flex justify-center gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-indigo-500"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
