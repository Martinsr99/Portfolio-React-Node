import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <nav>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/">Home</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/about">About</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/projects">Projects</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/contact">Contact</Link></motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;