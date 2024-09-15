import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
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
  const { language, isPending } = useContext(LanguageContext);

  useEffect(() => {
    // Add a class to the body when language is changing
    if (isPending) {
      document.body.classList.add('language-transition');
    } else {
      document.body.classList.remove('language-transition');
    }
  }, [isPending]);

  return (
    <Router>
      <div className="App app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <ScrollToTop />
        <main style={{ flex: 1, transition: 'opacity 0.3s ease-in-out', opacity: isPending ? 0.5 : 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
