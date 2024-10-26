import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import { staticData } from '../data/staticData';
import '../styles/cv.css';

const CV = () => {
  const { language } = useContext(AppContext);
  const currentLanguageData = staticData[language].home;

  const renderViewCVText = (text) => {
    const [baseText] = text.split('👀');
    return (
      <>
        {baseText}<span className="animated-eyes">👀</span>
      </>
    );
  };

  return (
    <motion.div 
      id="cv-section"
      className="cv-download-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.a 
        href="/cv/Martin-Siles-Software-Engineer.pdf" 
        download="Martin-Siles-Software-Engineer.pdf"
        className="btn btn-primary cv-button download"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="download-icon-wrapper">
          <span className="download-emoji">📄</span>
        </span>
        {currentLanguageData.downloadCV}
      </motion.a>
      <motion.a 
        href="/cv/Martin-Siles-Software-Engineer.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-secondary cv-button view"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {renderViewCVText(currentLanguageData.viewCV)}
      </motion.a>
    </motion.div>
  );
};

export default CV;
