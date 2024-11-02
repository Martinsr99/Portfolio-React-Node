import React, { useContext, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AppProvider, AppContext } from './AppContext';
import { PulseLoader } from 'react-spinners';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './styles/loading.css';

// Lazy load components with increased timeout
const Home = lazy(() => Promise.race([
  import('./components/Home'),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), 10000)
  )
]));

const About = lazy(() => Promise.race([
  import('./components/About'),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), 10000)
  )
]));

const Portfolio = lazy(() => Promise.race([
  import('./components/Portfolio'),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), 10000)
  )
]));

// Loading component
const LoadingFallback = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div className="loading-container">
      <div className="loading-content">
        <PulseLoader 
          color={darkMode ? "#ffffff" : "#000000"} 
          size={15}
          margin={2}
          speedMultiplier={0.8}
        />
        <div className="loading-text">
          Loading...
        </div>
      </div>
    </div>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { isPending, darkMode } = useContext(AppContext);

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
      const componentsToPreload = ['./components/Education', './components/Contact', './components/Portfolio'];
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

  return (
    <Router>
      <div className={`App app-container ${darkMode ? 'dark-mode' : ''}`}>
        <Header />
        <ScrollToTop />
        <main style={{ 
          flex: 1, 
          transition: 'opacity var(--transition-speed) ease-in-out', 
          opacity: isPending ? 0.5 : 1
        }}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
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
