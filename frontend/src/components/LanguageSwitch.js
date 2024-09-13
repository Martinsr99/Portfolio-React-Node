import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import '../styles/LanguageSwitch.css';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switch">
      <button
        className={`language-option ${language === 'es' ? 'active' : ''}`}
        onClick={() => language !== 'es' && toggleLanguage()}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        className={`language-option ${language === 'en' ? 'active' : ''}`}
        onClick={() => language !== 'en' && toggleLanguage()}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;