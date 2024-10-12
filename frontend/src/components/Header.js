import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../AppContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { language, toggleLanguage, darkMode, toggleTheme } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const translations = {
    es: {
      home: 'Inicio',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      education: 'Educación',
      contact: 'Contacto',
      toggleTheme: 'Cambiar tema',
      toggleLanguage: 'Switch to English'
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Cambiar a Español'
    }
  };

  const t = translations[language];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-content">
        <div 
          className="menu-icon" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav-menu ${isOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>{t.home}</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>{t.about}</Link></li>
            <li><Link to="/#projects" onClick={toggleMenu}>{t.projects}</Link></li>
            <li><Link to="/education" onClick={toggleMenu}>{t.education}</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>{t.contact}</Link></li>
          </ul>
        </nav>
        <div className="controls-container">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label={t.toggleTheme}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="language-toggle-container">
            <input 
              type="checkbox" 
              id="language-toggle" 
              className="language-toggle-checkbox" 
              checked={language === 'en'}
              onChange={toggleLanguage}
            />
            <label htmlFor="language-toggle" className="language-toggle-label">
              <span className="language-toggle-inner"></span>
              <span className="language-toggle-switch"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
