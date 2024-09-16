import React, { useState, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaAws, FaAngular, FaVuejs, FaFileDownload
} from 'react-icons/fa';
import { 
  SiJavascript, SiCss3, SiHtml5, SiMongodb, SiPostgresql, SiNestjs, SiExpress 
} from 'react-icons/si';
import { DiGo, DiDocker } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { AppContext } from '../AppContext';
import profileImage from '../images/profile-image.jpg';
import '../styles/home.css';
import { staticData } from '../data/staticData';

const iconMap = {
  React: FaReact,
  Node: FaNodeJs,
  'Node.js': FaNodeJs,
  Python: FaPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  CSS: SiCss3,
  HTML: SiHtml5,
  SQL: FaDatabase,
  MongoDB: SiMongodb,
  Docker: DiDocker,
  AWS: FaAws,
  PostgreSQL: SiPostgresql,
  Angular: FaAngular,
  Vue: FaVuejs,
  Golang: DiGo,
  Next: TbBrandNextjs,
  NestJS: SiNestjs,
  Express: SiExpress
};

const translations = {
  es: {
    title: "Mis Habilidades",
    version: "Versión",
    details: "Detalles",
    fullStackDeveloper: "Desarrollador Full Stack",
    downloadCV: "Descargar CV",
    viewCV: "Ver CV"
  },
  en: {
    title: "My Skills",
    version: "Version",
    details: "Details",
    fullStackDeveloper: "Full Stack Developer",
    downloadCV: "Download CV",
    viewCV: "View CV"
  }
};

const Home = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { language, darkMode } = useContext(AppContext);
  const skillsRef = useRef(null);

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
            alt={staticData.name} 
            className="profile-image"
          />
          <h1 className="name">
            {staticData.name}
          </h1>
          <h2 className="title">
            {translations[language].fullStackDeveloper}
          </h2>
          <p className="bio">
            {staticData.bio}
          </p>
          <motion.div 
            className="cv-download-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="/cv/Martin-Siles-Software-Engineer.pdf" 
              download="Martin-Siles-Software-Engineer.pdf"
              className="cv-button download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload /> {translations[language].downloadCV}
            </motion.a>
            <motion.a 
              href="/cv/Martin-Siles-Software-Engineer.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cv-button view"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations[language].viewCV}
            </motion.a>
          </motion.div>
        </div>

        <div 
          ref={skillsRef}
          className="skills-section"
        >
          <h3 className="skills-title">
            {translations[language].title}
          </h3>
          <div className="skills-grid">
            {staticData.skills.map((skill, index) => {
              const Icon = iconMap[skill.name] || FaDatabase;
              return (
                <div
                  key={`${skill.name}-${language}`}
                  className="skill-item"
                  onMouseEnter={() => setHoveredSkill(skill)} 
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Icon className="skill-icon" />
                  <p className="skill-name">{skill.name}</p>
                  <AnimatePresence>
                    {hoveredSkill && hoveredSkill.name === skill.name && (
                      <motion.div 
                        className="skill-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p>{skill.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
