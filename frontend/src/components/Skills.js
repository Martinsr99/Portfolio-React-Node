import React, { useState, useContext, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaAws, FaAngular, FaVuejs
} from 'react-icons/fa';
import { 
  SiJavascript, SiCss3, SiHtml5, SiMongodb, SiPostgresql, SiNestjs, SiExpress 
} from 'react-icons/si';
import { DiGo, DiDocker } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { AppContext } from '../AppContext';
import { skillsTranslations } from '../data/skillsTranslations';
import { homeTranslations } from '../data/homeTranslations';
import '../styles/skills.css';

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

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isSkillsTitleVisible, setIsSkillsTitleVisible] = useState(false);
  const { language } = useContext(AppContext);
  const skillsTitleRef = useRef(null);

  const currentLanguageData = homeTranslations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSkillsTitleVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsTitleRef.current) {
      observer.observe(skillsTitleRef.current);
    }

    return () => {
      if (skillsTitleRef.current) {
        observer.unobserve(skillsTitleRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-section">
      <motion.h2 
        ref={skillsTitleRef}
        className="section-title skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {isSkillsTitleVisible && (
          <Typed
            strings={[currentLanguageData.skills.title]}
            typeSpeed={50}
            backSpeed={30}
            loop={false}
          />
        )}
      </motion.h2>
      <div className="skills-grid">
        {skillsTranslations.skills.map((skill) => {
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
                    <p>{skill.details[language]}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
