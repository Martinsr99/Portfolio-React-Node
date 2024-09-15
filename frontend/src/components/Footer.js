import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const translations = {
  es: {
    rights: "Todos los derechos reservados."
  },
  en: {
    rights: "All rights reserved."
  }
};

const Footer = () => {
  const { language, darkMode } = useContext(AppContext);

  return (
    <footer style={{
      backgroundColor: darkMode ? '#1a1a1a' : '#2c3e50',
      color: '#ffffff',
      padding: '20px 0',
      textAlign: 'center',
      width: '100%',
      transition: 'background-color 0.3s ease'
    }}>
      <p>&copy; 2024 Martin Siles. {translations[language].rights}</p>
    </footer>
  );
};

export default Footer;