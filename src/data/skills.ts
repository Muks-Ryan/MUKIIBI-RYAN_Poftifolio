import type { SkillCategory } from '../types/skills';

export const skillGroups: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    icon: 'design',
    accent: 'primary',
    items: ['React', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Software Design',
    icon: 'systems',
    accent: 'secondary',
    items: ['UI/UX Design', 'System Thinking', 'Product Strategy', 'Design Systems'],
  },
  {
    title: 'Data & Institutions',
    icon: 'data',
    accent: 'accent',
    items: ['Database Design', 'Institutional Systems', 'Research', 'Technical Communication'],
  },
];
