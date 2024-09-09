import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '../LanguageContext';

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <header>
      <div className="header-content">
        <nav>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/">{language === 'es' ? 'Inicio' : 'Home'}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/about">{language === 'es' ? 'Sobre Mí' : 'About'}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/projects">{language === 'es' ? 'Proyectos' : 'Projects'}</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/contact">{language === 'es' ? 'Contacto' : 'Contact'}</Link></motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;