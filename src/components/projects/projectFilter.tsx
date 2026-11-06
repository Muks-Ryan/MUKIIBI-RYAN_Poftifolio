type ProjectFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="project-filter" aria-label="Project categories filter">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === active ? 'filter-button active' : 'filter-button'}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
