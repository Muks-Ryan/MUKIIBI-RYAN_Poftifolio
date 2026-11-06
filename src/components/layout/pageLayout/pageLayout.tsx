import type { ReactNode } from 'react';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import type { PageId } from '../../../data/navigation';

type PageLayoutProps = {
  children: ReactNode;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
};

export function PageLayout({ children, currentPage, onNavigate }: PageLayoutProps) {
  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
