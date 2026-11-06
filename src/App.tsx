import { lazy, Suspense, useEffect, useState } from 'react';
import { PageLayout } from './components/layout/pageLayout/pageLayout';
import { navigation, type PageId } from './data/navigation';

const HomePage = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const ProjectsPage = lazy(() => import('./pages/projects'));
const SkillsPage = lazy(() => import('./pages/skills'));
const EducationPage = lazy(() => import('./pages/education'));
const ResearchPage = lazy(() => import('./pages/research'));
const ContactPage = lazy(() => import('./pages/contact'));

const pages = {
  home: HomePage,
  about: AboutPage,
  projects: ProjectsPage,
  skills: SkillsPage,
  education: EducationPage,
  research: ResearchPage,
  contact: ContactPage,
};

function getPageFromHash(): PageId {
  return navigation.find((page) => page.href === window.location.hash)?.id ?? 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const syncPageWithHash = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', syncPageWithHash);
    return () => window.removeEventListener('hashchange', syncPageWithHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const CurrentPage = pages[currentPage];

  return (
    <PageLayout onNavigate={setCurrentPage} currentPage={currentPage}>
      <Suspense
        fallback={
          <div className="container page-loading" role="status">
            <span className="spinner-border spinner-border-sm text-info" aria-hidden="true" />
            <span>Loading page…</span>
          </div>
        }
      >
        <CurrentPage />
      </Suspense>
    </PageLayout>
  );
}
