import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { headerTranslations } from '../data/headerTranslations';

const Header = () => {
  const { language, toggleLanguage, darkMode, toggleTheme } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = headerTranslations[language];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleHomeClick = (event) => {
    event.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    toggleMenu();
  };

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className="header-content">
        <nav className={`nav-menu ${isOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleHomeClick}>
                {t.cv}
              </Link>
            </li>
            <li><Link to="/about" onClick={toggleMenu}>{t.about}</Link></li>
            <li><Link to="/portfolio" onClick={toggleMenu}>{t.portfolio}</Link></li>
          </ul>
        </nav>
      </div>

      <div className="controls-wrapper">
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
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
