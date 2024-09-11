import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import LanguageSwitch from './components/LanguageSwitch';
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

  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <LanguageSwitch />
        <ScrollToTop />
        <AnimatePresence mode='wait'>
          <motion.div
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
            style={{ opacity: isPending ? 0.8 : 1, flex: 1 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
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
