import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '../LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/" onClick={toggleMenu}>{language === 'es' ? 'Inicio' : 'Home'}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/about" onClick={toggleMenu}>{language === 'es' ? 'Sobre Mí' : 'About'}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/projects" onClick={toggleMenu}>{language === 'es' ? 'Proyectos' : 'Projects'}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/education" onClick={toggleMenu}>{language === 'es' ? 'Educación' : 'Education'}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/contact" onClick={toggleMenu}>{language === 'es' ? 'Contacto' : 'Contact'}</Link></motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;