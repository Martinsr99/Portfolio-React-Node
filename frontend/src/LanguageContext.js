import React, { createContext, useState, useTransition } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default to Spanish
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    startTransition(() => {
      setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isPending }}>
      {children}
    </LanguageContext.Provider>
  );
};