import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiMongodb } from 'react-icons/si';
import profileImage from '../images/profile-image.jpg';

// Mapa de iconos actualizado
const iconMap = {
  React: FaReact,
  Node: FaNodeJs,
  'Node.js': FaNodeJs, // Normalizando Node.js a Node en el mapa
  Python: FaPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  CSS: SiCss3,
  HTML: SiHtml5,
  SQL: FaDatabase,
  MongoDB: SiMongodb, // Icono para MongoDB
  Docker: FaDocker,   // Icono para Docker
  AWS: FaAws          // Icono para AWS
};

// Función para normalizar los nombres de habilidades
const normalizeSkillName = (skill) => {
  const normalizedSkill = skill.toLowerCase();
  switch (normalizedSkill) {
    case 'javascript':
      return 'JavaScript';
    case 'typescript':
      return 'TypeScript';
    case 'css':
      return 'CSS';
    case 'html':
      return 'HTML';
    case 'node.js':
      return 'Node.js';
    case 'sql':
      return 'SQL';
    case 'mongodb':
      return 'MongoDB';
    case 'docker':
      return 'Docker';
    case 'aws':
      return 'AWS';
    default:
      return skill.charAt(0).toUpperCase() + skill.slice(1);
  }
};

const Home = () => {
  const [info, setInfo] = useState(null);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

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
          >
            <h3 className="skills-title">My Skills</h3>
            <Slider {...settings}>
              {info.skills.map((skill, index) => {
                const normalizedSkill = normalizeSkillName(skill);
                const Icon = iconMap[normalizedSkill] || FaDatabase; // Icono predeterminado en caso de no encontrar coincidencia
                return (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  >
                    <Icon className="skill-icon" />
                    <p className="skill-name">{normalizedSkill}</p>
                  </motion.div>
                );
              })}
            </Slider>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Home;
