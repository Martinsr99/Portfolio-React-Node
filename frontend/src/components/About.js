import React, { useContext, useCallback, useMemo, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../AppContext';
import Contact from './Contact';
import { ReactTyped } from 'react-typed';
import '../styles/about.css';

const translations = {
  es: {
    pageTitle: "¿Dónde encontrarme?",
    youtubeTitle: "¡Visita mi Canal de YouTube!",
    youtubeDescription: "Suscríbete a mi canal para tutoriales perspicaces, consejos de codificación y discusiones tecnológicas. Aprende sobre lo último en desarrollo web e ingeniería de software.",
    youtubeButton: "YouTube",
    linkedinTitle: "¡Conéctate conmigo en LinkedIn!",
    linkedinDescription: "Únete a mi red profesional para actualizaciones de carrera, perspectivas de la industria y oportunidades de networking. Crezcamos juntos en el mundo de la tecnología.",
    linkedinButton: "LinkedIn",
    linkedinStats: {
      role: "FullStack Engineer",
      experience: "+4 años de experiencia",
      skills: ["React", "Angular", "Node.js", "Python"],
      education: "Ingeniería telecomunicaciones"
    },
    githubTitle: "¡Explora mis proyectos en GitHub!",
    githubDescription: "Descubre mis repositorios, contribuciones a proyectos de código abierto y más. Observa mi evolución como desarrollador a través de mi código.",
    githubButton: "GitHub",
    githubStats: {
      repos: "Repositorios Públicos",
      contributions: "Contribuciones este año",
      stars: "Estrellas recibidas",
      followers: "Seguidores"
    }
  },
  en: {
    pageTitle: "Where to find me?",
    youtubeTitle: "Check out my YouTube Channel!",
    youtubeDescription: "Subscribe to my channel for insightful tutorials, coding tips, and tech discussions. Learn about the latest in web development and software engineering.",
    youtubeButton: "YouTube",
    linkedinTitle: "Connect with me on LinkedIn!",
    linkedinDescription: "Join my professional network for career updates, industry insights, and networking opportunities. Let's grow together in the tech world.",
    linkedinButton: "LinkedIn",
    linkedinStats: {
      role: "FullStack Engineer",
      experience: "+4 years of experience",
      skills: ["React", "Angular", "Node.js", "Python"],
      education: "Telecommunications Engineering"
    },
    githubTitle: "Explore my projects on GitHub!",
    githubDescription: "Discover my repositories, open-source contributions, and more. See my evolution as a developer through my code.",
    githubButton: "GitHub",
    githubStats: {
      repos: "Public Repositories",
      contributions: "Contributions this year",
      stars: "Stars received",
      followers: "Followers"
    }
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

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
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
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const SocialSection = useCallback(({ title, description, linkText, linkUrl, sectionClass, buttonClass, youtubeEmbed, stats }) => (
    <motion.div
      layout
      className={`social-section ${sectionClass}`}
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, layout: { duration: 0.2 } }}
    >
      {youtubeEmbed && (
        <iframe
          className="youtube-iframe"
          src="https://www.youtube.com/embed/y6MNk25ANMM?autoplay=1&mute=1&start=50"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {stats && sectionClass === 'linkedin-section' && (
        <div className="linkedin-preview">
          <div className="stats-grid">
            <div className="stat-item">
              <h4>{stats.role}</h4>
            </div>
            <div className="stat-item">
              <h4>{stats.experience}</h4>
            </div>
            <div className="stat-item skills">
              <h4>Skills</h4>
              <div className="skills-list">
                {stats.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="stat-item">
              <h4>{stats.education}</h4>
            </div>
          </div>
        </div>
      )}
      {stats && sectionClass === 'github-section' && (
        <div className="github-preview">
          <div className="github-activity">
            <div className="contribution-graph">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="contribution-row">
                  {[...Array(7)].map((_, j) => (
                    <div key={j} className="contribution-cell"></div>
                  ))}
                </div>
              ))}
            </div>
            <div className="github-stats">
              <div className="stat-box">
                <span className="stat-value">20+</span>
                <span className="stat-label">{stats.repos}</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">500+</span>
                <span className="stat-label">{stats.contributions}</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">50+</span>
                <span className="stat-label">{stats.stars}</span>
              </div>
            </div>
          </div>
        </div>
      )}
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
      buttonClass: "youtube-button",
      youtubeEmbed: true
    },
    {
      title: t.linkedinTitle,
      description: t.linkedinDescription,
      linkText: t.linkedinButton,
      linkUrl: "https://www.linkedin.com/in/martinsilesreche/",
      sectionClass: "linkedin-section",
      buttonClass: "linkedin-button",
      stats: t.linkedinStats
    },
    {
      title: t.githubTitle,
      description: t.githubDescription,
      linkText: t.githubButton,
      linkUrl: "https://github.com/Martinsr99",
      sectionClass: "github-section",
      buttonClass: "github-button",
      stats: t.githubStats
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
        <motion.h2
          ref={titleRef}
          className="about-title gradient-text"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {isTitleVisible && (
            <ReactTyped
              strings={[t.pageTitle]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
            />
          )}
        </motion.h2>
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
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
