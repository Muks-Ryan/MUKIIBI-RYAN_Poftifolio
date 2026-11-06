export const navigation = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'research', label: 'Research', href: '#research' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export type PageId = (typeof navigation)[number]['id'];
