import React, { createContext, useState, useTransition, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default to Spanish
  const [isPending, startTransition] = useTransition();
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleLanguage = () => {
    startTransition(() => {
      setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
    });
  };

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ language, toggleLanguage, isPending, darkMode, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};