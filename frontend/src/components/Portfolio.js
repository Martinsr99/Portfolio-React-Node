import React, { useContext, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { AppContext } from '../AppContext';
import { portfolioTranslations } from '../data/portfolio';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  FaReact, FaRoute
} from 'react-icons/fa';
import { 
  SiFramer, SiCss3, SiReact
} from 'react-icons/si';
import '../styles/portfolio.css';

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

const iconMap = {
  'React.js': FaReact,
  'React Router': FaRoute,
  'Framer Motion': SiFramer,
  'CSS3': SiCss3,
  'Context API': SiReact
};

const Portfolio = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = portfolioTranslations[language];
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleCode, setVisibleCode] = useState({});
  const [expandedSections, setExpandedSections] = useState({});
  const [hoveredTech, setHoveredTech] = useState(null);
  const titleRef = useRef(null);
  const metricsUrl = "https://www.projectwallace.com/css-code-quality?url=martinsiles.es&prettify=1";

  useEffect(() => {
    const currentTitleRef = titleRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  const toggleCode = (index, section) => {
    setVisibleCode(prev => {
      const newState = { ...prev };
      Object.keys(newState).forEach(key => {
        if (key !== `${section}-${index}`) {
          newState[key] = false;
        }
      });
      newState[`${section}-${index}`] = !prev[`${section}-${index}`];
      return newState;
    });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderCodeCards = (points, section) => (
    <div className="architecture-grid">
      {points.map((point, index) => (
        <motion.div 
          key={index} 
          className={`architecture-item ${visibleCode[`${section}-${index}`] ? 'expanded' : ''}`}
          layout
          transition={{ duration: 0.3 }}
        >
          <div className="architecture-card">
            <h3>{point.text}</h3>
            <button 
              className="code-toggle-btn"
              onClick={() => toggleCode(index, section)}
            >
              {visibleCode[`${section}-${index}`] ? t.hideCodeButton : t.showCodeButton}
            </button>
          </div>
          <AnimatePresence>
            {visibleCode[`${section}-${index}`] && (
              <motion.div 
                className="code-wrapper"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="code-section">
                  <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    className="code-block"
                    wrapLines={true}
                    showLineNumbers={true}
                  >
                    {point.code}
                  </SyntaxHighlighter>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );

  const renderTechStack = () => (
    <div className="tech-stack-grid">
      {t.techStackPoints.technologies.map((tech) => {
        const Icon = iconMap[tech.name] || FaReact;
        return (
          <div
            key={tech.name}
            className="tech-stack-item"
            onMouseEnter={() => setHoveredTech(tech)} 
            onMouseLeave={() => setHoveredTech(null)}
          >
            <Icon className="tech-stack-icon" />
            <p className="tech-stack-name">{tech.name}</p>
            <AnimatePresence>
              {hoveredTech && hoveredTech.name === tech.name && (
                <motion.div 
                  className="tech-stack-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p>{tech.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  const renderSection = (sectionKey, title, description, content) => (
    <motion.section 
      className={`portfolio-section-item ${expandedSections[sectionKey] ? 'expanded' : ''}`}
      layout
      transition={{ duration: 0.3 }}
    >
      <div className="section-header" onClick={() => toggleSection(sectionKey)}>
        <h3>{title}</h3>
        <button className="expand-toggle">
          {expandedSections[sectionKey] ? '−' : '+'}
        </button>
      </div>
      <AnimatePresence>
        {expandedSections[sectionKey] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{description}</p>
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );

  return (
    <div className={`portfolio-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="portfolio-content">
        <motion.h2
          ref={titleRef}
          className="portfolio-title gradient-text"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {isTitleVisible && (
            <ReactTyped
              strings={[t.title]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
            />
          )}
        </motion.h2>
        
        <div className="portfolio-container">
          {renderSection(
            'architecture',
            t.architectureTitle,
            t.architectureDescription,
            renderCodeCards(t.architecturePoints, 'architecture')
          )}

          {renderSection(
            'performance',
            t.performanceTitle,
            t.performanceDescription,
            renderCodeCards(t.performancePoints, 'performance')
          )}

          {renderSection(
            'accessibility',
            t.accessibilityTitle,
            t.accessibilityDescription,
            renderCodeCards(t.accessibilityPoints, 'accessibility')
          )}

          {renderSection(
            'seo',
            t.seoTitle,
            t.seoDescription,
            renderCodeCards(t.seoPoints, 'seo')
          )}

          {renderSection(
            'features',
            t.featuresTitle,
            t.featuresDescription,
            renderCodeCards(t.featuresPoints, 'features')
          )}

          {renderSection(
            'tech-stack',
            t.techStackTitle,
            t.techStackPoints.description,
            renderTechStack()
          )}

          {renderSection(
            'css-metrics',
            t.cssMetricsTitle,
            <div dangerouslySetInnerHTML={{ __html: t.cssMetricsDescription }} />,
            <div className="metrics-grid">
              <div className="metric-item">
                <h4>MAINTAINABILITY</h4>
                <span className="metric-value">97</span>
              </div>
              <div className="metric-item">
                <h4>COMPLEXITY</h4>
                <span className="metric-value">97</span>
              </div>
              <div className="metric-item">
                <h4>PERFORMANCE</h4>
                <span className="metric-value">97</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
