import { SectionHeading } from '../components/common/sectionHeading';
import { researchTopics } from '../data/research';

export default function ResearchPage() {
  return (
    <section id="research" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Research & innovation"
          title="Ideas rooted in impact and intelligent systems."
          description="Exploring educational transformation, digital systems, and technology-enabled solutions for institutions and communities."
        />
        <div className="research-grid">
          {researchTopics.map((item) => (
            <article key={item.title} className="research-card glass-panel">
              <span className="research-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}