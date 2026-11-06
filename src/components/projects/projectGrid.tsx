import { useMemo, useState } from 'react';
import type { Project } from '../../types/projects';
import { ProjectCard } from './projectCard';
import { ProjectFilter } from './projectFilter';

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="project-shell">
      <ProjectFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
