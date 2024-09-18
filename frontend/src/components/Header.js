import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { language, toggleLanguage, darkMode, toggleTheme } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
    <header className="header">
      <div className="header-content">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav-menu ${isOpen ? 'show' : ''}`}>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/" onClick={toggleMenu}>{t.home}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/about" onClick={toggleMenu}>{t.about}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/projects" onClick={toggleMenu}>{t.projects}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/education" onClick={toggleMenu}>{t.education}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/contact" onClick={toggleMenu}>{t.contact}</Link></motion.li>
          </motion.ul>
        </nav>
        <div className="controls-container">
          <motion.button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label={t.toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
          <motion.div 
            className="language-toggle-container"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
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
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;