import SectionHeading from './SectionHeading.jsx'

export default function About({ paragraphs }) {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16">
      <SectionHeading title="About" />
      <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  )
}
