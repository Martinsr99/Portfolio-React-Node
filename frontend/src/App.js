import React, { useContext, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AppProvider, AppContext } from './AppContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';

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
  }, [isPending, darkMode]);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className={`App app-container ${darkMode ? 'dark-mode' : ''}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header scrollToProjects={scrollToProjects} />
        <ScrollToTop />
        <main style={{ flex: 1, transition: 'opacity 0.3s ease-in-out', opacity: isPending ? 0.5 : 1 }}>
          <Routes>
            <Route path="/" element={<Home projectsRef={projectsRef} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
          </Routes>
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
