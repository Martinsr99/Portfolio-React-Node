export const architectureTranslations = {
  es: {
    title: 'Arquitectura',
    description: 'El portfolio está construido siguiendo una arquitectura modular y escalable:',
    points: [
      {
        text: 'Componentes React reutilizables y modulares',
        code: `// Componente modular con props para reutilización
const Portfolio = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = portfolioTranslations[language];
  
  const renderCodeCards = (points, section) => (
    <div className="architecture-grid">
      {points.map((point, index) => (
        <motion.div 
          key={index} 
          className={\`architecture-item \${visibleCode[\`\${section}-\${index}\`] ? 'expanded' : ''}\`}
          layout
          transition={{ duration: 0.3 }}
        >
          {/* Contenido de la tarjeta */}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className={\`portfolio-section \${darkMode ? 'dark-mode' : ''}\`}>
      {/* Contenido del portfolio */}
    </div>
  );
};`
      },
      {
        text: 'Gestión de estado global con Context API',
        code: `// Gestión de estado global usando Context API
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [isPending, startTransition] = useTransition();
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  return (
    <AppContext.Provider value={{ 
      language, 
      toggleLanguage, 
      isPending,
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
function AppContent() {
  const { isPending, darkMode } = useContext(AppContext);

  return (
    <div className={\`app \${darkMode ? 'dark-mode' : ''}\`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}`
      },
      {
        text: 'Sistema de traducciones modular',
        code: `// Sistema de traducciones organizado por componentes
// /data/portfolio/index.js
import { architectureTranslations } from './architectureTranslations';
import { performanceTranslations } from './performanceTranslations';
import { accessibilityTranslations } from './accessibilityTranslations';
import { seoTranslations } from './seoTranslations';

export const portfolioTranslations = {
  es: {
    title: 'Creación del Portfolio',
    architectureTitle: architectureTranslations.es.title,
    architectureDescription: architectureTranslations.es.description,
    architecturePoints: architectureTranslations.es.points,
    // ... más traducciones
  },
  en: {
    title: 'Portfolio Creation',
    architectureTitle: architectureTranslations.en.title,
    architectureDescription: architectureTranslations.en.description,
    architecturePoints: architectureTranslations.en.points,
    // ... more translations
  }
};`
      }
    ]
  },
  en: {
    title: 'Architecture',
    description: 'The portfolio is built following a modular and scalable architecture:',
    points: [
      {
        text: 'Reusable and modular React components',
        code: `// Modular component with props for reusability
const Portfolio = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = portfolioTranslations[language];
  
  const renderCodeCards = (points, section) => (
    <div className="architecture-grid">
      {points.map((point, index) => (
        <motion.div 
          key={index} 
          className={\`architecture-item \${visibleCode[\`\${section}-\${index}\`] ? 'expanded' : ''}\`}
          layout
          transition={{ duration: 0.3 }}
        >
          {/* Card content */}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className={\`portfolio-section \${darkMode ? 'dark-mode' : ''}\`}>
      {/* Portfolio content */}
    </div>
  );
};`
      },
      {
        text: 'Global state management with Context API',
        code: `// Global state management using Context API
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [isPending, startTransition] = useTransition();
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  return (
    <AppContext.Provider value={{ 
      language, 
      toggleLanguage, 
      isPending,
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
function AppContent() {
  const { isPending, darkMode } = useContext(AppContext);

  return (
    <div className={\`app \${darkMode ? 'dark-mode' : ''}\`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}`
      },
      {
        text: 'Modular translation system',
        code: `// Translation system organized by components
// /data/portfolio/index.js
import { architectureTranslations } from './architectureTranslations';
import { performanceTranslations } from './performanceTranslations';
import { accessibilityTranslations } from './accessibilityTranslations';
import { seoTranslations } from './seoTranslations';

export const portfolioTranslations = {
  es: {
    title: 'Creación del Portfolio',
    architectureTitle: architectureTranslations.es.title,
    architectureDescription: architectureTranslations.es.description,
    architecturePoints: architectureTranslations.es.points,
    // ... more translations
  },
  en: {
    title: 'Portfolio Creation',
    architectureTitle: architectureTranslations.en.title,
    architectureDescription: architectureTranslations.en.description,
    architecturePoints: architectureTranslations.en.points,
    // ... more translations
  }
};`
      }
    ]
  }
};
