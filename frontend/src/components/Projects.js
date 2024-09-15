import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import { LanguageContext } from '../LanguageContext';
import '../styles/projects.css';

const translations = {
  es: {
    workExperience: "Experiencia Laboral",
    personalProjects: "Proyectos Personales",
    currently: "Actualmente",
  },
  en: {
    workExperience: "Work Experience",
    personalProjects: "Personal Projects",
    currently: "Currently",
  }
};

const Projects = () => {
  const { language } = useContext(LanguageContext);
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

  const projects = [
    { 
      id: 1, 
      title: {
        es: 'Plataforma de Comercio Electrónico',
        en: 'E-commerce Platform'
      }, 
      description: {
        es: 'Una solución de comercio electrónico full-stack utilizando el stack MERN.',
        en: 'A full-stack e-commerce solution using MERN stack.'
      }
    },
    { 
      id: 2, 
      title: {
        es: 'Aplicación de Gestión de Tareas',
        en: 'Task Management App'
      }, 
      description: {
        es: 'Una aplicación de gestión de tareas basada en Vue.js y Node.js.',
        en: 'A Vue.js and Node.js based task management application.'
      }
    },
    { 
      id: 3, 
      title: {
        es: 'Panel de Visualización de Datos',
        en: 'Data Visualization Dashboard'
      }, 
      description: {
        es: 'Un panel interactivo construido con React y D3.js.',
        en: 'An interactive dashboard built with React and D3.js.'
      }
    },
  ];

  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">{t.workExperience}</h2>
      <div className="timeline">
        {workExperience.map((job, index) => (
          <motion.div
            key={job.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: job.id * 0.2 }}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <h3>{job.company}</h3>
              <p className="period">{job.period[language]}</p>
              <p className="position">{job.position[language]}</p>
              <p>{job.description[language]}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="section-title">{t.personalProjects}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <div className="project-icon">
              <FaCode />
            </div>
            <h3>{project.title[language]}</h3>
            <p>{project.description[language]}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;