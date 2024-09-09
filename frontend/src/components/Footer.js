import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const translations = {
  es: {
    rights: "Todos los derechos reservados."
  },
  en: {
    rights: "All rights reserved."
  }
};

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ffffff',
      padding: '20px 0',
      textAlign: 'center',
      width: '100%'
    }}>
      <p>&copy; 2024 Martin Siles. {translations[language].rights}</p>
    </footer>
  );
};

export default Footer;