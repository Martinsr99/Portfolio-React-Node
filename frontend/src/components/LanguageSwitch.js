import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import '../styles/LanguageSwitch.css';
import spainFlag from '../images/spain-flag.png';
import ukFlag from '../images/uk-flag.png';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      className="language-switch"
      onClick={toggleLanguage}
      aria-label={language === 'es' ? "Switch to English" : "Cambiar a español"}
    >
      <img 
        src={language === 'es' ? spainFlag : ukFlag} 
        alt={language === 'es' ? "Español" : "English"} 
        className="flag-icon"
      />
    </button>
  );
};

export default LanguageSwitch;