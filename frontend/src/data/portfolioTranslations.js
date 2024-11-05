export const portfolioTranslations = {
  es: {
    title: 'Creación del Portfolio',
    cssMetricsTitle: 'Análisis de Calidad CSS',
    cssMetricsDescription: 'Este portfolio ha sido desarrollado siguiendo las mejores prácticas de CSS. Utilizando Project Wallace, una herramienta especializada en análisis de código CSS, podemos evaluar métricas clave como la especificidad, reutilización y mantenibilidad del código. Haz clic en el título para explorar el análisis detallado.',
    techStackTitle: 'Stack Tecnológico',
    architectureTitle: 'Arquitectura',
    architectureDescription: 'El portfolio está construido siguiendo una arquitectura modular y escalable:',
    architecturePoints: [
      {
        text: 'Componentes React reutilizables y modulares',
        code: `// Componente modular con props para reutilización
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Ejemplo de uso con diferente contenido
<FeatureCard
  title="Title"
  description="Description"
  icon={<Icon />}
/>`
      },
      {
        text: 'Gestión de estado global con Context API',
        code: `// Gestión de estado global usando Context API
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Estado para preferencias de idioma y tema
  const [language, setLanguage] = useState('es');
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <AppContext.Provider value={{ 
      language, 
      darkMode, 
      toggleTheme 
    }}>
      {children}
    </AppContext.Provider>
  );
};`
      },
      {
        text: 'Sistema de rutas con React Router',
        code: `// Configuración de rutas de la aplicación
<Router>
  <Routes>
    {/* Rutas principales de navegación */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/education" element={<Education />} />
  </Routes>
</Router>`
      },
      {
        text: 'Lazy loading para optimización de carga',
        code: `// Importaciones dinámicas para división de código
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));

// Envolviendo componentes lazy con fallback de carga
<Suspense fallback={<LoadingSpinner />}>
  <About />
</Suspense>`
      },
      {
        text: 'Sistema de traducciones modular',
        code: `// Configuración del soporte multilingüe
const translations = {
  es: {
    welcome: 'Bienvenido',
    about: 'Sobre mí'
  },
  en: {
    welcome: 'Welcome',
    about: 'About me'
  }
};

// Uso de traducciones en componentes
const { language } = useContext(AppContext);
const t = translations[language];
<h1>{t.welcome}</h1>`
      }
    ],
    performanceTitle: 'Rendimiento',
    performanceDescription: 'Optimizado para una experiencia de usuario fluida:',
    performancePoints: [
      {
        text: 'Lazy loading con Intersection Observer',
        code: `// Implementación de Intersection Observer para carga perezosa
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
}, []);`
      },
      {
        text: 'Optimización de animaciones con Framer Motion',
        code: `// Animaciones optimizadas usando Framer Motion
<motion.div 
  className="code-wrapper"
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Contenido animado */}
</motion.div>`
      },
      {
        text: 'Gestión eficiente de estado',
        code: `// Optimización de actualizaciones de estado
const toggleCode = (index) => {
  setVisibleCode(prev => {
    const newState = { ...prev };
    // Cerrar otros códigos abiertos para mejorar rendimiento
    Object.keys(newState).forEach(key => {
      if (key !== index.toString()) {
        newState[key] = false;
      }
    });
    newState[index] = !prev[index];
    return newState;
  });
};`
      }
    ],
    accessibilityTitle: 'Accesibilidad',
    accessibilityDescription: 'Diseñado pensando en la accesibilidad:',
    accessibilityPoints: [
      'Estructura semántica HTML5',
      'Contraste de colores WCAG 2.1',
      'Navegación por teclado',
      'Textos alternativos para imágenes',
      'Roles ARIA cuando necesario'
    ],
    seoTitle: 'SEO y Metadatos',
    seoDescription: 'Optimizado para motores de búsqueda:',
    seoPoints: [
      'Meta tags dinámicos',
      'Estructura de datos schema.org',
      'URLs amigables',
      'Sitemap XML',
      'Open Graph para redes sociales'
    ],
    featuresTitle: 'Características Principales',
    featureResponsive: 'Diseño adaptativo con experiencia fluida en todos los dispositivos',
    featureMultilingual: 'Sistema de internacionalización completo (Español/Inglés)',
    featureDarkMode: 'Tema claro/oscuro con persistencia de preferencias',
    featureAnimations: 'Animaciones y transiciones optimizadas para rendimiento',
    featurePerformance: 'Optimización avanzada de carga y rendimiento',
    showCodeButton: 'Mostrar Código',
    hideCodeButton: 'Ocultar Código'
  },
  en: {
    title: 'Portfolio Creation',
    cssMetricsTitle: 'CSS Quality Analysis',
    cssMetricsDescription: 'This portfolio has been developed following CSS best practices. Using Project Wallace, a specialized CSS code analysis tool, we can evaluate key metrics such as specificity, reusability, and code maintainability. Click the title to explore the detailed analysis.',
    techStackTitle: 'Tech Stack',
    architectureTitle: 'Architecture',
    architectureDescription: 'The portfolio is built following a modular and scalable architecture:',
    architecturePoints: [
      {
        text: 'Reusable and modular React components',
        code: `// Modular component with props for reusability
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Example usage with different content
<FeatureCard
  title="Title"
  description="Description"
  icon={<Icon />}
/>`
      },
      {
        text: 'Global state management with Context API',
        code: `// Global state management using Context API
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // State for language and theme preferences
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <AppContext.Provider value={{ 
      language, 
      darkMode, 
      toggleTheme 
    }}>
      {children}
    </AppContext.Provider>
  );
};`
      },
      {
        text: 'Routing system with React Router',
        code: `// Application routing configuration
<Router>
  <Routes>
    {/* Main navigation routes */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/education" element={<Education />} />
  </Routes>
</Router>`
      },
      {
        text: 'Lazy loading for load optimization',
        code: `// Dynamic imports for code splitting
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));

// Wrapping lazy components with loading fallback
<Suspense fallback={<LoadingSpinner />}>
  <About />
</Suspense>`
      },
      {
        text: 'Modular translation system',
        code: `// Multilingual support configuration
const translations = {
  es: {
    welcome: 'Bienvenido',
    about: 'Sobre mí'
  },
  en: {
    welcome: 'Welcome',
    about: 'About me'
  }
};

// Using translations in components
const { language } = useContext(AppContext);
const t = translations[language];
<h1>{t.welcome}</h1>`
      }
    ],
    performanceTitle: 'Performance',
    performanceDescription: 'Optimized for a smooth user experience:',
    performancePoints: [
      {
        text: 'Lazy loading with Intersection Observer',
        code: `// Implementation of Intersection Observer for lazy loading
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
}, []);`
      },
      {
        text: 'Animation optimization with Framer Motion',
        code: `// Optimized animations using Framer Motion
<motion.div 
  className="code-wrapper"
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Animated content */}
</motion.div>`
      },
      {
        text: 'Efficient state management',
        code: `// State update optimization
const toggleCode = (index) => {
  setVisibleCode(prev => {
    const newState = { ...prev };
    // Close other open codes to improve performance
    Object.keys(newState).forEach(key => {
      if (key !== index.toString()) {
        newState[key] = false;
      }
    });
    newState[index] = !prev[index];
    return newState;
  });
};`
      }
    ],
    accessibilityTitle: 'Accessibility',
    accessibilityDescription: 'Designed with accessibility in mind:',
    accessibilityPoints: [
      'Semantic HTML5 structure',
      'WCAG 2.1 color contrast',
      'Keyboard navigation',
      'Alternative texts for images',
      'ARIA roles when needed'
    ],
    seoTitle: 'SEO & Metadata',
    seoDescription: 'Optimized for search engines:',
    seoPoints: [
      'Dynamic meta tags',
      'Schema.org structured data',
      'SEO-friendly URLs',
      'XML Sitemap',
      'Open Graph for social media'
    ],
    featuresTitle: 'Key Features',
    featureResponsive: 'Adaptive design with seamless experience across all devices',
    featureMultilingual: 'Complete internationalization system (Spanish/English)',
    featureDarkMode: 'Light/dark theme with preference persistence',
    featureAnimations: 'Performance-optimized animations and transitions',
    featurePerformance: 'Advanced loading and performance optimization',
    showCodeButton: 'Show Code',
    hideCodeButton: 'Hide Code'
  }
};
