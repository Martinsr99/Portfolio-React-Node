import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaAws, FaAngular, FaVuejs, FaSun, FaMoon
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiCss3, SiHtml5, SiMongodb, SiPostgresql, SiNextdotjs, SiNestjs, SiExpress 
} from 'react-icons/si';
import { DiGo, DiDocker } from 'react-icons/di';
import { LanguageContext } from '../LanguageContext';
import profileImage from '../images/profile-image.jpg';
import '../styles/home.css';

const iconMap = {
  React: FaReact,
  Node: FaNodeJs,
  'Node.js': FaNodeJs,
  Python: FaPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
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
  Next: SiNextdotjs,
  Nest: SiNestjs,
  Express: SiExpress
};

const translations = {
  es: {
    title: "Mis Habilidades",
    version: "Versión",
    details: "Detalles",
    fullStackDeveloper: "Desarrollador Full Stack",
    bio: "Soy un apasionado desarrollador full stack con experiencia en crear soluciones web innovadoras y eficientes. Me especializo en JavaScript y sus frameworks modernos, siempre buscando aprender y aplicar las últimas tecnologías en mis proyectos.",
    toggleTheme: "Cambiar tema"
  },
  en: {
    title: "My Skills",
    version: "Version",
    details: "Details",
    fullStackDeveloper: "Full Stack Developer",
    bio: "I'm a passionate full stack developer with experience in creating innovative and efficient web solutions. I specialize in JavaScript and its modern frameworks, always looking to learn and apply the latest technologies in my projects.",
    toggleTheme: "Toggle theme"
  }
};

const Home = () => {
  const [info, setInfo] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { language } = useContext(LanguageContext);
  const [darkMode, setDarkMode] = useState(false);
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: false, amount: 0.2 });

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/info?lang=${language}`);
        console.log('API response:', response.data); // Log the API response
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching info:', error);
      }
    };
    fetchInfo();
  }, [language]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  console.log('Rendering Home component, info:', info); // Log the info state

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        className={`home-container ${darkMode ? 'dark-mode' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
          <span className="sr-only">{translations[language].toggleTheme}</span>
        </button>

        {info && (
          <>
            <motion.div 
              className="intro-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.img 
                src={profileImage}
                alt={info.name} 
                className="profile-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.h1 
                className="name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Martin Siles
              </motion.h1>
              <motion.h2 
                className="title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {translations[language].fullStackDeveloper}
              </motion.h2>
              <motion.p 
                className="bio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {translations[language].bio}
              </motion.p>
            </motion.div>

            <motion.div 
              ref={skillsRef}
              className="skills-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3 className="skills-title">{translations[language].title}</h3>
              <div className="skills-grid">
                {info.skills && info.skills.map((skill, index) => {
                  console.log('Rendering skill:', skill); // Log each skill being rendered
                  const Icon = iconMap[skill.name] || FaDatabase;
                  return (
                    <motion.div
                      key={`${skill.name}-${language}`}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      onMouseEnter={() => setHoveredSkill(skill)} 
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <Icon className="skill-icon" />
                      <p className="skill-name">{skill.name}</p>
                      {hoveredSkill && hoveredSkill.name === skill.name && (
                        <motion.div 
                          className="skill-overlay"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="skill-overlay-content">
                            {React.createElement(iconMap[hoveredSkill.name] || FaDatabase, { className: "skill-overlay-icon" })}
                            <h4>{hoveredSkill.name}</h4>
                            <p>{translations[language].version}: {hoveredSkill.version}</p>
                            <p>{translations[language].details}: {hoveredSkill.details}</p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
