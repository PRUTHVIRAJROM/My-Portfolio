import SectionHeading from './SectionHeading.jsx'

export default function Contact({ email, socials }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16">
      <SectionHeading title="Contact" subtitle="Blah blah blah blah? Blah blah blah." />
      <a
        href={`mailto:${email}`}
        className="font-display text-2xl font-semibold tracking-tight break-all underline decoration-ink/25 underline-offset-8 font-stretch-semi-expanded hover:text-wire-blue hover:decoration-current sm:text-4xl dark:decoration-white/30"
      >
        {email}
      </a>
      <ul className="mt-10 flex gap-8 font-mono text-xs">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-wire-blue"
            >
              {social.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
