import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const Projects = () => {
  const workExperience = [
    {
      id: 1,
      company: 'Raw iGaming',
      period: 'September 2023 - Currently',
      position: 'FullStack Developer',
      description: 'Creation of client/server systems (Go, Js, Vue, Python,...) and maintaining cloud and Kubernetes infrastructure for modern slot games.'
    },
    {
      id: 2,
      company: 'EOSOL',
      period: 'February - September 2023',
      position: 'Backend Developer',
      description: 'Working with Python, NodeJS and PostgreSQL to develop a massive data storage application and its post processing.'
    },
    {
      id: 3,
      company: 'NTT DATA',
      period: 'November 2021 - February 2023',
      position: 'Full Stack Developer',
      description: 'Backend: Developing BFFs with NodeJS and TypeScript (APIREST, MicroServices). Frontend: Developing WebComponents with Angular (TypeScript, SCSS, HTML).'
    },
    {
      id: 4,
      company: 'NUCLEOO',
      period: 'May 2021 - November 2021',
      position: 'FullStack Developer Intern',
      description: 'Developing the structure for a NGO in an international project, working with Python, TypeScript, MongoDB in a team of 4 software engineers.'
    }
  ];

  const projects = [
    { id: 1, title: 'E-commerce Platform', description: 'A full-stack e-commerce solution using MERN stack.' },
    { id: 2, title: 'Task Management App', description: 'A Vue.js and Node.js based task management application.' },
    { id: 3, title: 'Data Visualization Dashboard', description: 'An interactive dashboard built with React and D3.js.' },
  ];

  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Work Experience</h2>
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
              <p className="period">{job.period}</p>
              <p className="position">{job.position}</p>
              <p>{job.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="section-title">Personal Projects</h2>
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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;