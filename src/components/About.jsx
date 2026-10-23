import SectionHeading from './SectionHeading.jsx'

export default function About({ paragraphs }) {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
      <SectionHeading title="About me" />
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  )
}
