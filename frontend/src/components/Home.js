import React, { useContext, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import profileImage from '../images/profile-image.jpg';
import '../styles/home.css';
import '../styles/buttons.css';
import '../styles/education.css';
import { homeTranslations } from '../data/homeTranslations';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Education from './Education';
import Skills from './Skills';
import CV from './CV';

const Home = () => {
  const { language, darkMode } = useContext(AppContext);
  const projectsRef = useRef(null);
  const location = useLocation();

  const currentLanguageData = homeTranslations[language];

  useEffect(() => {
    if (location.hash === '#projects') {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const themeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="background-animation"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={themeVariants}
      >
        <div className="intro-section">
          <img 
            src={profileImage}
            alt={currentLanguageData.name} 
            className="profile-image"
          />
          <h1 className="name">
            {currentLanguageData.name}
          </h1>
          <h2 className="title">
            {currentLanguageData.role}
          </h2>
          <p className="bio">
            {currentLanguageData.bio}
          </p>
          <CV />
        </div>

        <Skills />

        <Testimonials />

        <Education />

        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
