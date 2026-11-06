import { Code2, Database, Palette } from '../assets/icons/icons';
import { SectionHeading } from '../components/common/sectionHeading';
import { skillGroups } from '../data/skills';

const iconMap = { design: Palette, systems: Code2, data: Database };

export default function SkillsPage() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Technical skills"
          title="Building digital tools with thoughtful execution."
          description="I combine product thinking, interface craft, and systems understanding to turn ideas into clear, usable, and reliable experiences."
        />
        <div className="skill-grid">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Code2;
            return (
              <article key={group.title} className="skill-panel glass-panel">
                <Icon size={26} />
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => <span key={item} className="tag">{item}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}