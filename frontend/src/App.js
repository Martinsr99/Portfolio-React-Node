import React, { useContext, useEffect, useRef, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AppProvider, AppContext } from './AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './styles/loading.css';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

// Loading component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-content">
      <img 
        src="/logo.webp" 
        alt="Loading..." 
        className="loading-logo"
      />
      <div className="loading-text">
        Loading...
      </div>
    </div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { isPending, darkMode } = useContext(AppContext);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Add a class to the body when language is changing
    if (isPending) {
      document.body.classList.add('language-transition');
    } else {
      document.body.classList.remove('language-transition');
    }

    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Preload other components after initial load
    const preloadComponents = () => {
      const componentsToPreload = ['./components/Projects', './components/Education', './components/Contact'];
      componentsToPreload.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        document.head.appendChild(link);
      });
    };

    // Preload after a short delay to not block initial render
    const timer = setTimeout(preloadComponents, 2000);
    return () => clearTimeout(timer);
  }, [isPending, darkMode]);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div 
        className={`App app-container ${darkMode ? 'dark-mode' : ''}`} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden'
        }}
      >
        <Header scrollToProjects={scrollToProjects} />
        <ScrollToTop />
        <main style={{ 
          flex: 1, 
          transition: 'opacity var(--transition-speed) ease-in-out', 
          opacity: isPending ? 0.5 : 1,
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden'
        }}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home projectsRef={projectsRef} />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
