import { SectionHeading } from '../components/common/sectionHeading';
import { educationItems } from '../data/education';

export default function EducationPage() {
  return (
    <section id="education" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation and continuous learning."
          description="Focused on software engineering theory, practical building, and the use of technology to improve education and institutional systems."
        />
        <div className="timeline-grid">
          {educationItems.map((item) => (
            <article key={item.title} className="timeline-card glass-panel">
              <span className="timeline-badge">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="timeline-meta">{item.institution}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}