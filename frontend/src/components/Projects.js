import React, { useContext, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import { FaCode } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import { projectsTranslations } from '../data/projectsTranslations';
import '../styles/projects.css';

// Import company logos
import rawIGamingLogo from '../images/companies/raw-igaming-logo.png';
import eosolLogo from '../images/companies/eosol-logo.png';
import nttDataLogo from '../images/companies/ntt-data-logo.png';
import nucleooLogo from '../images/companies/nucleoo-logo.png';

const companyLogos = {
  'Raw iGaming': rawIGamingLogo,
  'EOSOL': eosolLogo,
  'NTT DATA': nttDataLogo,
  'NUCLEOO': nucleooLogo
};

const Projects = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = projectsTranslations[language];
  const workExperienceTitleRef = useRef(null);
  const personalProjectsTitleRef = useRef(null);
  const [isWorkExperienceTitleVisible, setIsWorkExperienceTitleVisible] = useState(false);
  const [isPersonalProjectsTitleVisible, setIsPersonalProjectsTitleVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === workExperienceTitleRef.current) {
            setIsWorkExperienceTitleVisible(true);
          } else if (entry.target === personalProjectsTitleRef.current) {
            setIsPersonalProjectsTitleVisible(true);
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (workExperienceTitleRef.current) {
      observer.observe(workExperienceTitleRef.current);
    }

    if (personalProjectsTitleRef.current) {
      observer.observe(personalProjectsTitleRef.current);
    }

    return () => {
      if (workExperienceTitleRef.current) {
        observer.unobserve(workExperienceTitleRef.current);
      }
      if (personalProjectsTitleRef.current) {
        observer.unobserve(personalProjectsTitleRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className={`projects-container ${darkMode ? 'dark-mode' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="background-animation"></div>

      <div className="work-experience-section">
        <motion.h2 
          ref={workExperienceTitleRef}
          className="section-title work-experience-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isWorkExperienceTitleVisible && (
            <Typed
              strings={[t.workExperience]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
            />
          )}
        </motion.h2>

        <div className="timeline">
          {t.workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: job.id * 0.2 }}
            >
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="company-logo">
                  <a href={job.linkedIn} target="_blank" rel="noopener noreferrer">
                    <img src={companyLogos[job.company]} alt={`${job.company} logo`} />
                  </a>
                </div>
                <h3>
                  <a href={job.linkedIn} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                </h3>
                <p className="period">{job.period}</p>
                <p className="position">{job.position}</p>
                <p>{job.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="personal-projects-section">
        <motion.h2 
          ref={personalProjectsTitleRef}
          className="section-title personal-projects-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isPersonalProjectsTitleVisible && (
            <Typed
              strings={[t.personalProjects]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
            />
          )}
        </motion.h2>
        <div className="projects-grid">
          <motion.div
            className="project-card martinsiles-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="project-icon">
              <FaCode />
            </div>
            <h3>
              <a href="https://martinsil.es" target="_blank" rel="noopener noreferrer">
                martinsil.es
              </a>
            </h3>
            <h4>{t.webServices}</h4>
            <p>{t.martinsilesDescription}</p>
            <a 
              href="https://martinsil.es" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              {t.visitSite}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
