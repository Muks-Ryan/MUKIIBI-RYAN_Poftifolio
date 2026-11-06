import { ArrowRight } from '../assets/icons/icons';
import { Button } from '../components/common/button';
import { ProjectGrid } from '../components/projects/projectGrid';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Projects</span>
          <h2>Selected work shaped by clarity, utility, and vision.</h2>
          <p>
            These portfolio pieces demonstrate my interest in digital systems, educational technology, and well-designed interfaces that solve practical problems.
          </p>
        </div>
        <ProjectGrid projects={projects} />
        <div className="cta-row project-cta">
          <Button href="#contact" variant="primary">Discuss a project <ArrowRight size={16} /></Button>
        </div>
      </div>
    </section>
  );
}