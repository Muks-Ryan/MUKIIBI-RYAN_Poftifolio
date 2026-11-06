import { BriefcaseBusiness, Code2, GraduationCap, Sparkles } from '../assets/icons/icons';
import { SectionHeading } from '../components/common/sectionHeading';

export default function AboutPage() {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Engineer with a purpose beyond code."
          description="I am a software engineering student and aspiring developer focused on building impactful systems that blend technology, education, and community transformation."
        />

        <div className="about-grid">
          <div className="panel glass-panel">
            <p>
              My work is driven by deep curiosity, strategic thinking, and a desire to use engineering,
              mathematics, and education to solve real-world problems. I believe technology should be useful,
              accessible, and transformational.
            </p>
            <p>
              I am especially interested in educational technology, institutional systems, and human-centered
              digital experiences that help schools, NGOs, and public institutions operate more effectively.
            </p>
            <div className="chip-row">
              <span className="chip">Software Engineering Student</span>
              <span className="chip">Frontend Developer</span>
              <span className="chip">UI/UX Designer</span>
            </div>
          </div>

          <div className="stack-panel glass-panel">
            <div className="mini-stat"><Code2 size={20} /><div><strong>Focus</strong><span>Web experiences &amp; digital systems</span></div></div>
            <div className="mini-stat"><GraduationCap size={20} /><div><strong>Study</strong><span>BSc. Software Engineering, Cavendish University Uganda</span></div></div>
            <div className="mini-stat"><BriefcaseBusiness size={20} /><div><strong>Mission</strong><span>Build systems that solve meaningful problems</span></div></div>
            <div className="mini-stat"><Sparkles size={20} /><div><strong>Vision</strong><span>Thought leader, educator, and impactful engineer</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}