import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaAws, FaAngular, FaVuejs 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiCss3, SiHtml5, SiMongodb, SiPostgresql, SiNextdotjs, SiNestjs, SiExpress 
} from 'react-icons/si';
import { DiGo, DiDocker } from 'react-icons/di';
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

const Home = () => {
  const [info, setInfo] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/info');
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching info:', error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {info && (
        <>
          <motion.div 
            className="intro-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.img 
              src={profileImage}
              alt={info.name} 
              className="profile-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <motion.h1 
              className="name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {info.name}
            </motion.h1>
            <motion.h2 
              className="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {info.title}
            </motion.h2>
            <motion.p 
              className="bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {info.bio}
            </motion.p>
          </motion.div>

          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            onMouseLeave={() => setHoveredSkill(null)}  // Ocultar cuando el ratón sale de la sección
          >
            <h3 className="skills-title">My Skills</h3>
            <div className="skills-grid">
              {info.skills.map((skill, index) => {
                const Icon = iconMap[skill.name] || FaDatabase; 
                return (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setHoveredSkill(skill)} // Mostrar cuando el ratón está sobre una habilidad
                  >
                    <Icon className="skill-icon" />
                    <p className="skill-name">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
            {hoveredSkill && (
              <div className="skill-overlay">
                <div className="skill-overlay-content">
                  {React.createElement(iconMap[hoveredSkill.name] || FaDatabase, { className: "skill-overlay-icon" })}
                  <h4>{hoveredSkill.name}</h4>
                  <p>Version: {hoveredSkill.version}</p>
                  <p>{hoveredSkill.details}</p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Home;
