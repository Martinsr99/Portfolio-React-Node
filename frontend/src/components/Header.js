import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../AppContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { language, toggleLanguage, darkMode, toggleTheme } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const translations = {
    es: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre Mí',
      toggleTheme: 'Cambiar tema',
      toggleLanguage: 'EN'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'ES'
    }
  };

  const t = translations[language];

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'} ${darkMode ? 'dark' : 'light'}`}>
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
            <li><Link to="/#projects" onClick={toggleMenu}>{t.projects}</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>{t.about}</Link></li>
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
          <button 
            onClick={toggleLanguage} 
            className="language-toggle"
            aria-label={t.toggleLanguage}
          >
            {t.toggleLanguage}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
