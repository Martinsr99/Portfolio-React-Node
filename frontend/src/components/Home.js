import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaAws, FaAngular, FaVuejs, FaSun, FaMoon, FaFileDownload
} from 'react-icons/fa';
import { 
  SiJavascript, SiCss3, SiHtml5, SiMongodb, SiPostgresql, SiNextdotjs, SiNestjs, SiExpress 
} from 'react-icons/si';
import { DiGo, DiDocker } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { LanguageContext } from '../LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import profileImage from '../images/profile-image.jpg';
import '../styles/home.css';

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
    bio: "Soy un apasionado desarrollador full stack con experiencia en crear soluciones web innovadoras y eficientes. Me especializo en JavaScript y sus frameworks modernos, siempre buscando aprender y aplicar las últimas tecnologías en mis proyectos.",
    toggleTheme: "Cambiar tema",
    downloadCV: "Descargar CV",
    viewCV: "Ver CV"
  },
  en: {
    title: "My Skills",
    version: "Version",
    details: "Details",
    fullStackDeveloper: "Full Stack Developer",
    bio: "I'm a passionate full stack developer with experience in creating innovative and efficient web solutions. I specialize in JavaScript and its modern frameworks, always looking to learn and apply the latest technologies in my projects.",
    toggleTheme: "Toggle theme",
    downloadCV: "Download CV",
    viewCV: "View CV"
  }
};

const Home = () => {
  const [info, setInfo] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { language } = useContext(LanguageContext);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: false, amount: 0.2 });

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/info?lang=${language}`);
        console.log('API response:', response.data);
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching info:', error);
      }
    };
    fetchInfo();
  }, [language]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const themeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="background-animation"></div>

      <motion.div 
        className="controls-container"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <LanguageSwitch />
        <motion.button 
          onClick={toggleTheme} 
          className="theme-toggle" 
          aria-label={translations[language].toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </motion.button>
      </motion.div>

      {info && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={themeVariants}
        >
          <div className="intro-section">
            <img 
              src={profileImage}
              alt={info.name} 
              className="profile-image"
            />
            <h1 className="name">
              Martin Siles
            </h1>
            <h2 className="title">
              {translations[language].fullStackDeveloper}
            </h2>
            <p className="bio">
              {translations[language].bio}
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
              {info.skills && info.skills.map((skill, index) => {
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
      )}
    </div>
  );
};

export default Home;
