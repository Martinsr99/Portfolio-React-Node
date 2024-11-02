import React, { useContext, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { AppContext } from '../AppContext';
import { portfolioTranslations } from '../data/portfolioTranslations';
import cssQualityImage from '../images/portfolio/cssQuality.png';
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
  const { language } = useContext(AppContext);
  const t = portfolioTranslations[language];
  const [isTitleVisible, setIsTitleVisible] = useState(false);
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

  const renderPointsList = (points) => (
    <ul className="points-list">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );

  return (
    <div className="portfolio-section">
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
          {renderPointsList(t.architecturePoints)}
        </section>

        <section className="performance">
          <h3>{t.performanceTitle}</h3>
          <p>{t.performanceDescription}</p>
          {renderPointsList(t.performancePoints)}
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
  );
};

export default Portfolio;
