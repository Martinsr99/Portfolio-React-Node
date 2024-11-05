import React, { useContext, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { AppContext } from '../AppContext';
import { portfolioTranslations } from '../data/portfolioTranslations';
import cssQualityImage from '../images/portfolio/cssQuality.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

const Portfolio = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = portfolioTranslations[language];
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleCode, setVisibleCode] = useState({});
  const titleRef = useRef(null);

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

  const renderPointsList = (points) => (
    <ul className="points-list">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );

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
          <section className="css-metrics">
            <a 
              href="https://www.projectwallace.com/css-code-quality?url=martinsiles.es&prettify=1"
              target="_blank"
              rel="noopener noreferrer"
              className="css-metrics-title"
            >
              <h3>{t.cssMetricsTitle}</h3>
            </a>
            <div className="metrics-content">
              <p>{t.cssMetricsDescription}</p>
              <div className="metrics-image">
                <img 
                  src={cssQualityImage} 
                  alt="CSS Quality Metrics" 
                  className="quality-image"
                />
              </div>
            </div>
          </section>

          <section className="architecture">
            <h3>{t.architectureTitle}</h3>
            <p>{t.architectureDescription}</p>
            {renderCodeCards(t.architecturePoints, 'architecture')}
          </section>

          <section className="performance">
            <h3>{t.performanceTitle}</h3>
            <p>{t.performanceDescription}</p>
            {renderCodeCards(t.performancePoints, 'performance')}
          </section>

          <section className="accessibility">
            <h3>{t.accessibilityTitle}</h3>
            <p>{t.accessibilityDescription}</p>
            {renderPointsList(t.accessibilityPoints)}
          </section>

          <section className="seo">
            <h3>{t.seoTitle}</h3>
            <p>{t.seoDescription}</p>
            {renderPointsList(t.seoPoints)}
          </section>

          <section className="tech-stack">
            <h3>{t.techStackTitle}</h3>
            <div className="tech-details">
              <ul>
                <li>React.js</li>
                <li>React Router</li>
                <li>Framer Motion</li>
                <li>CSS3</li>
                <li>Context API</li>
              </ul>
            </div>
          </section>

          <section className="features">
            <h3>{t.featuresTitle}</h3>
            <div className="features-list">
              <ul>
                <li>{t.featureResponsive}</li>
                <li>{t.featureMultilingual}</li>
                <li>{t.featureDarkMode}</li>
                <li>{t.featureAnimations}</li>
                <li>{t.featurePerformance}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
