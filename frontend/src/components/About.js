import React, { useContext, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../AppContext';
import '../styles/about.css';

const translations = {
  es: {
    youtubeTitle: "¡Visita mi Canal de YouTube!",
    youtubeDescription: "Suscríbete a mi canal para tutoriales perspicaces, consejos de codificación y discusiones tecnológicas. Aprende sobre lo último en desarrollo web e ingeniería de software.",
    youtubeButton: "Visita Mi Canal de YouTube",
    linkedinTitle: "¡Conéctate conmigo en LinkedIn!",
    linkedinDescription: "Únete a mi red profesional para actualizaciones de carrera, perspectivas de la industria y oportunidades de networking. Crezcamos juntos en el mundo de la tecnología.",
    linkedinButton: "Visita Mi Perfil de LinkedIn",
    githubTitle: "¡Explora mis proyectos en GitHub!",
    githubDescription: "Descubre mis repositorios, contribuciones a proyectos de código abierto y más. Observa mi evolución como desarrollador a través de mi código.",
    githubButton: "Visita Mi Perfil de GitHub"
  },
  en: {
    youtubeTitle: "Check out my YouTube Channel!",
    youtubeDescription: "Subscribe to my channel for insightful tutorials, coding tips, and tech discussions. Learn about the latest in web development and software engineering.",
    youtubeButton: "Visit My YouTube Channel",
    linkedinTitle: "Connect with me on LinkedIn!",
    linkedinDescription: "Join my professional network for career updates, industry insights, and networking opportunities. Let's grow together in the tech world.",
    linkedinButton: "Visit My LinkedIn Profile",
    githubTitle: "Explore my projects on GitHub!",
    githubDescription: "Discover my repositories, open-source contributions, and more. See my evolution as a developer through my code.",
    githubButton: "Visit My GitHub Profile"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, translateY: 50 },
  visible: { 
    opacity: 1, 
    translateY: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const About = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = translations[language];

  const SocialSection = useCallback(({ title, description, linkText, linkUrl, sectionClass, buttonClass }) => (
    <motion.div
      layout
      className={`social-section ${sectionClass}`}
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, layout: { duration: 0.2 } }}
    >
      <div className="social-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <motion.a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-button ${buttonClass}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {linkText}
        </motion.a>
      </div>
    </motion.div>
  ), []);

  const socialSections = useMemo(() => [
    {
      title: t.youtubeTitle,
      description: t.youtubeDescription,
      linkText: t.youtubeButton,
      linkUrl: "https://www.youtube.com/@martinsiles",
      sectionClass: "youtube-section",
      buttonClass: "youtube-button"
    },
    {
      title: t.linkedinTitle,
      description: t.linkedinDescription,
      linkText: t.linkedinButton,
      linkUrl: "https://www.linkedin.com/in/martinsilesreche/",
      sectionClass: "linkedin-section",
      buttonClass: "linkedin-button"
    },
    {
      title: t.githubTitle,
      description: t.githubDescription,
      linkText: t.githubButton,
      linkUrl: "https://github.com/Martinsr99",
      sectionClass: "github-section",
      buttonClass: "github-button"
    }
  ], [t]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        className={`about-container ${darkMode ? 'dark-mode' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="social-sections-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialSections.map((section, index) => (
            <SocialSection key={index} {...section} />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;