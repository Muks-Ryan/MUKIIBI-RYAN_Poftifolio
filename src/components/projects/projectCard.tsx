import { ArrowUpRight } from '../../assets/icons/icons';
import type { Project } from '../../types/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card glass-panel">
      <div className="project-card__header">
        <span className="project-card__category">{project.category}</span>
        <ArrowUpRight size={18} />
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-card__meta">
        <span>{project.metrics}</span>
        <a href={project.demo}>View</a>
      </div>
    </article>
  );
}
