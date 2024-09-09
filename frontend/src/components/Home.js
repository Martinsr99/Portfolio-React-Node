import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaAws, FaAngular, FaVuejs 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiCss3, SiHtml5, SiMongodb, SiPostgresql, SiNextdotjs, SiNestjs, SiExpress 
} from 'react-icons/si';
import { DiGo, DiDocker } from 'react-icons/di';
import { LanguageContext } from '../LanguageContext';
import profileImage from '../images/profile-image.jpg';

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
    bio: "Soy un apasionado desarrollador full stack con experiencia en crear soluciones web innovadoras y eficientes. Me especializo en JavaScript y sus frameworks modernos, siempre buscando aprender y aplicar las últimas tecnologías en mis proyectos."
  },
  en: {
    title: "My Skills",
    version: "Version",
    details: "Details",
    fullStackDeveloper: "Full Stack Developer",
    bio: "I'm a passionate full stack developer with experience in creating innovative and efficient web solutions. I specialize in JavaScript and its modern frameworks, always looking to learn and apply the latest technologies in my projects."
  }
};

const Home = () => {
  const [info, setInfo] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/info?lang=${language}`);
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching info:', error);
      }
    };
    fetchInfo();
  }, [language]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.05 }}
      >
        {info && (
          <>
            <motion.div 
              className="intro-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.05 }}
            >
              <motion.img 
                src={profileImage}
                alt={info.name} 
                className="profile-image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.05 }}
              />
              <motion.h1 
                className="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05 }}
              >
                Martin Siles
              </motion.h1>
              <motion.h2 
                className="title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05 }}
              >
                {translations[language].fullStackDeveloper}
              </motion.h2>
              <motion.p 
                className="bio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05 }}
              >
                {translations[language].bio}
              </motion.p>
            </motion.div>

            <motion.div 
              className="skills-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.05 }}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3 className="skills-title">{translations[language].title}</h3>
              <div className="skills-grid">
                {info.skills.map((skill, index) => {
                  const Icon = iconMap[skill.name] || FaDatabase;
                  return (
                    <motion.div
                      key={`${skill.name}-${language}`}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.05 }}
                      onMouseEnter={() => setHoveredSkill(skill)} 
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <Icon className="skill-icon" />
                      <p className="skill-name">{skill.name}</p>
                      {hoveredSkill && hoveredSkill.name === skill.name && (
                        <div className="skill-overlay">
                          <div className="skill-overlay-content">
                            {React.createElement(iconMap[hoveredSkill.name] || FaDatabase, { className: "skill-overlay-icon" })}
                            <h4>{hoveredSkill.name}</h4>
                            <p>{translations[language].version}: {hoveredSkill.version}</p>
                            <p>{translations[language].details}: {hoveredSkill.details}</p>
                          </div>
                        </div>
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
