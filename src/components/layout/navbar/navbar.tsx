import { Button } from '../../common/button';
import { ThemeToggle } from '../../common/themeToggle';
import { navigation, type PageId } from '../../../data/navigation';
import brandPortrait from '../../../assets/images/Mukiibi Ryan.jpg';

type NavbarProps = {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
};

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a href="#home" className="brand-mark" aria-label="Mukiibi Ryan home">
          <img className="brand-mark__image" src={brandPortrait} alt="" />
          <span className="brand-mark__text">Mukiibi Ryan</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={currentPage === item.id ? 'page' : undefined}
              className={currentPage === item.id ? 'active' : undefined}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <ThemeToggle />
          <Button href="#contact" className="d-none d-md-inline-flex">
            Let&apos;s work together
          </Button>
        </div>
      </div>
    </header>
  );
}
