import { FolderGit, Globe, Mail, MessageCircleMore } from '../../assets/icons/icons';
import { contactDetails } from '../../data/contact';

const links = [
  { label: 'Email', href: `mailto:${contactDetails.email}`, icon: Mail },
  { label: 'LinkedIn', href: contactDetails.linkedin, icon: Globe },
  { label: 'GitHub', href: contactDetails.github, icon: FolderGit },
  { label: 'WhatsApp', href: contactDetails.whatsapp, icon: MessageCircleMore },
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'social-row compact' : 'social-row'} aria-label="Social links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={label === 'Email' ? undefined : '_blank'}
          rel={label === 'Email' ? undefined : 'noreferrer'}
          aria-label={label}
          className="social-link"
        >
          <Icon size={18} />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}
