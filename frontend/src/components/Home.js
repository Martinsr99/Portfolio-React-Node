import React, { useContext, useRef, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import profileImage from '../images/profile-image.jpg';
import '../styles/home.css';
import '../styles/buttons.css';
import '../styles/education.css';
import { homeTranslations } from '../data/homeTranslations';
import CV from './CV';

// Lazy load components
const Projects = lazy(() => import('./Projects'));
const Testimonials = lazy(() => import('./Testimonials'));
const Education = lazy(() => import('./Education'));
const Skills = lazy(() => import('./Skills'));

// Loading component for lazy loaded sections
const SectionLoading = () => (
  <div className="section-loading">
    <div className="loading-spinner"></div>
  </div>
);

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
            loading="eager" // Carga prioritaria de la imagen de perfil
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

        <Suspense fallback={<SectionLoading />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <Education />
        </Suspense>

        <div id="projects" ref={projectsRef}>
          <Suspense fallback={<SectionLoading />}>
            <Projects />
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
};

// Exportar con React.memo para evitar re-renders innecesarios
export default React.memo(Home);
