import { ArrowRight, Code2, Cpu, Sparkles } from '../assets/icons/icons';
import { Button } from '../components/common/button';
import { PhotoCard } from '../components/common/photoCard';
import portrait from '../assets/images/MuksRyan.png';

export default function HomePage() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={14} /> NEXUS CYBER INTERFACE</span>
          <h1>
            Build <span className="highlight">meaningful</span> digital systems.
          </h1>
          <p>
            I am <strong>Mukiibi Ryan</strong>, a software engineering student and aspiring developer creating
            interfaces, systems, and experiences that connect technology with education, institutions, and human impact.
          </p>

          <div className="cta-row">
            <Button href="#projects" variant="primary">
              View projects <ArrowRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary">Contact me</Button>
          </div>

          <div className="hero-stats">
            <div className="stat-card"><strong>Year 2</strong><span>Software engineering</span></div>
            <div className="stat-card"><strong>2029</strong><span>Expected graduation</span></div>
            <div className="stat-card"><strong>Uganda</strong><span>Based in</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <PhotoCard
            src={portrait}
            name="Mukiibi Ryan"
            subtitle="Software Engineering Student"
            caption="Portrait"
          />
          <div className="hero-focus glass-panel">
            <strong>Current focus</strong>
            <span><Code2 size={14} /> Frontend engineering</span>
            <span><Cpu size={14} /> Systems for education and impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}