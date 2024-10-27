import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import '../styles/social-cards.css';

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

const SocialCards = ({ translations }) => {
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
      title: translations.youtubeTitle,
      description: translations.youtubeDescription,
      linkText: translations.youtubeButton,
      linkUrl: "https://www.youtube.com/@martinsiles",
      sectionClass: "youtube-section",
      buttonClass: "youtube-button",
      youtubeEmbed: true
    },
    {
      title: translations.linkedinTitle,
      description: translations.linkedinDescription,
      linkText: translations.linkedinButton,
      linkUrl: "https://www.linkedin.com/in/martinsilesreche/",
      sectionClass: "linkedin-section",
      buttonClass: "linkedin-button",
      stats: translations.linkedinStats
    },
    {
      title: translations.githubTitle,
      description: translations.githubDescription,
      linkText: translations.githubButton,
      linkUrl: "https://github.com/Martinsr99",
      sectionClass: "github-section",
      buttonClass: "github-button",
      stats: translations.githubStats
    }
  ], [translations]);

  return (
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
  );
};

export default SocialCards;
