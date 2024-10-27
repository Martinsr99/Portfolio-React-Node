import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../AppContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { headerTranslations } from '../data/headerTranslations';

const Header = () => {
  const { language, toggleLanguage, darkMode, toggleTheme } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const t = headerTranslations[language];

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

  const scrollToTop = (event) => {
    event.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // We need to wait for the navigation to complete before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    toggleMenu();
  };

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
            <li><a href="#" onClick={scrollToTop}>{t.cv}</a></li>
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
