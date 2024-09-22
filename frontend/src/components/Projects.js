import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import '../styles/projects.css';

const translations = {
  es: {
    workExperience: "Experiencia Laboral",
    personalProjects: "Proyectos Personales",
    currently: "Actualmente",
    webServices: "Servicios Web",
    martinsilesDescription: "Ofrezco servicios de creación web para negocios locales, ayudándoles a establecer una presencia en línea efectiva y atractiva.",
  },
  en: {
    workExperience: "Work Experience",
    personalProjects: "Personal Projects",
    currently: "Currently",
    webServices: "Web Services",
    martinsilesDescription: "I offer web creation services for local businesses, helping them establish an effective and attractive online presence.",
  }
};

const Projects = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = translations[language];

  const workExperience = [
    {
      id: 1,
      company: 'Raw iGaming',
      period: {
        es: 'Septiembre 2023 - Actualmente',
        en: 'September 2023 - Currently'
      },
      position: {
        es: 'Desarrollador FullStack',
        en: 'FullStack Developer'
      },
      description: {
        es: 'Creación de sistemas cliente/servidor (Go, Js, Vue, Python,...) y mantenimiento de infraestructura en la nube y Kubernetes para juegos de tragamonedas modernos.',
        en: 'Creation of client/server systems (Go, Js, Vue, Python,...) and maintaining cloud and Kubernetes infrastructure for modern slot games.'
      }
    },
    {
      id: 2,
      company: 'EOSOL',
      period: {
        es: 'Febrero - Septiembre 2023',
        en: 'February - September 2023'
      },
      position: {
        es: 'Desarrollador Backend',
        en: 'Backend Developer'
      },
      description: {
        es: 'Trabajando con Python, NodeJS y PostgreSQL para desarrollar una aplicación de almacenamiento masivo de datos y su post-procesamiento.',
        en: 'Working with Python, NodeJS and PostgreSQL to develop a massive data storage application and its post processing.'
      }
    },
    {
      id: 3,
      company: 'NTT DATA',
      period: {
        es: 'Noviembre 2021 - Febrero 2023',
        en: 'November 2021 - February 2023'
      },
      position: {
        es: 'Desarrollador Full Stack',
        en: 'Full Stack Developer'
      },
      description: {
        es: 'Backend: Desarrollo de BFFs con NodeJS y TypeScript (APIREST, MicroServicios). Frontend: Desarrollo de WebComponents con Angular (TypeScript, SCSS, HTML).',
        en: 'Backend: Developing BFFs with NodeJS and TypeScript (APIREST, MicroServices). Frontend: Developing WebComponents with Angular (TypeScript, SCSS, HTML).'
      }
    },
    {
      id: 4,
      company: 'NUCLEOO',
      period: {
        es: 'Mayo 2021 - Noviembre 2021',
        en: 'May 2021 - November 2021'
      },
      position: {
        es: 'Becario Desarrollador FullStack',
        en: 'FullStack Developer Intern'
      },
      description: {
        es: 'Desarrollo de la estructura para una ONG en un proyecto internacional, trabajando con Python, TypeScript, MongoDB en un equipo de 4 ingenieros de software.',
        en: 'Developing the structure for a NGO in an international project, working with Python, TypeScript, MongoDB in a team of 4 software engineers.'
      }
    }
  ];

  return (
    <motion.div
      className={`projects-container ${darkMode ? 'dark-mode' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="background-animation"></div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.workExperience}
      </motion.h2>
      <div className="timeline">
        {workExperience.map((job, index) => (
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
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <h3>{job.company}</h3>
              <p className="period">{job.period[language]}</p>
              <p className="position">{job.position[language]}</p>
              <p>{job.description[language]}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.personalProjects}
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
          <a href="https://martinsil.es" target="_blank" rel="noopener noreferrer" className="visit-site-btn">
            {language === 'es' ? 'Visitar Sitio' : 'Visit Site'}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;