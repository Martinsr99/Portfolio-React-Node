import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const translations = {
  es: {
    rights: "Todos los derechos reservados."
  },
  en: {
    rights: "All rights reserved."
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
};

const Footer = () => {
  const { language } = useContext(AppContext);

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
            whileHover="hover"
            variants={iconVariants}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
            whileHover="hover"
            variants={iconVariants}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <p className="copyright">&copy; 2024 Martin Siles. {translations[language].rights}</p>
      </div>
    </footer>
  );
};

export default Footer;