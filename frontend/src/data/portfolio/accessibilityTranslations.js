export const accessibilityTranslations = {
  es: {
    title: 'Accesibilidad',
    description: 'Diseñado pensando en la accesibilidad:',
    points: [
      {
        text: 'Controles accesibles con ARIA',
        code: `// Implementación de controles accesibles
// Header.js
<button 
  onClick={toggleTheme} 
  className="theme-toggle" 
  aria-label={t.toggleTheme}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

<button 
  onClick={toggleLanguage} 
  className="language-toggle"
  aria-label={t.toggleLanguage}
>
  {language === 'es' ? 'EN' : 'ES'}
</button>

// LanguageSwitch.js
<button
  onClick={toggleLanguage}
  aria-label={language === 'es' ? "Switch to English" : "Cambiar a español"}
>
  <img
    src={language === 'es' ? spainFlag : ukFlag}
    alt={language === 'es' ? "Español" : "English"}
    className="flag-icon"
  />
</button>`
      },
      {
        text: 'Enlaces y recursos con descripciones',
        code: `// Implementación de enlaces accesibles
// Footer.js
<a
  href={githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="social-icon"
>
  <FaGithub />
</a>

<a
  href={linkedinUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="social-icon"
>
  <FaLinkedin />
</a>

// Portfolio.js
<img 
  src={cssQualityImage} 
  alt="CSS Quality Metrics" 
  className="quality-image"
/>`
      },
      {
        text: 'Navegación por teclado',
        code: `// Implementación de navegación por teclado
// Header.js
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  return (
    <header className={\`header \${darkMode ? 'dark' : 'light'} \${isVisible ? '' : 'hidden'}\`}>
      <nav className={\`nav-menu \${isOpen ? 'show' : ''}\`}>
        {/* Navegación accesible */}
      </nav>
    </header>
  );
};`
      }
    ]
  },
  en: {
    title: 'Accessibility',
    description: 'Designed with accessibility in mind:',
    points: [
      {
        text: 'Accessible controls with ARIA',
        code: `// Implementation of accessible controls
// Header.js
<button 
  onClick={toggleTheme} 
  className="theme-toggle" 
  aria-label={t.toggleTheme}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

<button 
  onClick={toggleLanguage} 
  className="language-toggle"
  aria-label={t.toggleLanguage}
>
  {language === 'es' ? 'EN' : 'ES'}
</button>

// LanguageSwitch.js
<button
  onClick={toggleLanguage}
  aria-label={language === 'es' ? "Switch to English" : "Cambiar a español"}
>
  <img
    src={language === 'es' ? spainFlag : ukFlag}
    alt={language === 'es' ? "Español" : "English"}
    className="flag-icon"
  />
</button>`
      },
      {
        text: 'Links and resources with descriptions',
        code: `// Implementation of accessible links
// Footer.js
<a
  href={githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="social-icon"
>
  <FaGithub />
</a>

<a
  href={linkedinUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="social-icon"
>
  <FaLinkedin />
</a>

// Portfolio.js
<img 
  src={cssQualityImage} 
  alt="CSS Quality Metrics" 
  className="quality-image"
/>`
      },
      {
        text: 'Keyboard navigation',
        code: `// Implementation of keyboard navigation
// Header.js
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  return (
    <header className={\`header \${darkMode ? 'dark' : 'light'} \${isVisible ? '' : 'hidden'}\`}>
      <nav className={\`nav-menu \${isOpen ? 'show' : ''}\`}>
        {/* Accessible navigation */}
      </nav>
    </header>
  );
};`
      }
    ]
  }
};
