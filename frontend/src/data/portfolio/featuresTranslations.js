export const featuresTranslations = {
  es: {
    title: 'Características Principales',
    description: 'Características clave implementadas en el portfolio:',
    points: [
      {
        text: 'Diseño adaptativo con experiencia fluida',
        code: `// Control de visibilidad del header basado en scroll
useEffect(() => {
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < lastScrollY || currentScrollY < 70) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 70) {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', controlNavbar);

  return () => {
    window.removeEventListener('scroll', controlNavbar);
  };
}, [lastScrollY]);`
      },
      {
        text: 'Sistema de internacionalización completo',
        code: `// Implementación del cambio de idioma con transición suave
const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    startTransition(() => {
      setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
    });
  };

  return (
    <AppContext.Provider value={{ 
      language, 
      toggleLanguage, 
      isPending 
    }}>
      {children}
    </AppContext.Provider>
  );
};`
      },
      {
        text: 'Tema claro/oscuro con persistencia',
        code: `// Implementación del tema oscuro con persistencia
const [darkMode, setDarkMode] = useState(() => {
  const savedMode = localStorage.getItem('darkMode');
  return savedMode ? JSON.parse(savedMode) : true;
});

const toggleTheme = () => {
  setDarkMode(prevMode => !prevMode);
};

useEffect(() => {
  document.body.classList.toggle('dark-mode', darkMode);
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
}, [darkMode]);`
      }
    ]
  },
  en: {
    title: 'Key Features',
    description: 'Key features implemented in the portfolio:',
    points: [
      {
        text: 'Adaptive design with seamless experience',
        code: `// Header visibility control based on scroll
useEffect(() => {
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < lastScrollY || currentScrollY < 70) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 70) {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', controlNavbar);

  return () => {
    window.removeEventListener('scroll', controlNavbar);
  };
}, [lastScrollY]);`
      },
      {
        text: 'Complete internationalization system',
        code: `// Language switching implementation with smooth transition
const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    startTransition(() => {
      setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
    });
  };

  return (
    <AppContext.Provider value={{ 
      language, 
      toggleLanguage, 
      isPending 
    }}>
      {children}
    </AppContext.Provider>
  );
};`
      },
      {
        text: 'Light/dark theme with persistence',
        code: `// Dark theme implementation with persistence
const [darkMode, setDarkMode] = useState(() => {
  const savedMode = localStorage.getItem('darkMode');
  return savedMode ? JSON.parse(savedMode) : true;
});

const toggleTheme = () => {
  setDarkMode(prevMode => !prevMode);
};

useEffect(() => {
  document.body.classList.toggle('dark-mode', darkMode);
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
}, [darkMode]);`
      }
    ]
  }
};
