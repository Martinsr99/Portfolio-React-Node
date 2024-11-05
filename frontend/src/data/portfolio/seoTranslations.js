export const seoTranslations = {
  es: {
    title: 'SEO y Metadatos',
    description: 'Optimizado para motores de búsqueda:',
    points: [
      {
        text: 'Meta tags dinámicos',
        code: `// Implementación de meta tags dinámicos
const SEO = ({ title, description, lang }) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Meta tags para redes sociales */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/profile-image.jpg" />
      
      {/* Meta tags para Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

// Uso en componentes
<SEO 
  title="Portfolio - Martin Siles"
  description="Portfolio profesional de Martin Siles, Ingeniero de Software"
  lang="es"
/>`
      },
      {
        text: 'Estructura de datos Schema.org',
        code: `// Implementación de Schema.org
const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Martin Siles",
    "jobTitle": "Software Engineer",
    "url": "https://martinsiles.es",
    "sameAs": [
      "https://github.com/username",
      "https://linkedin.com/in/username"
    ],
    "knowsAbout": [
      "React",
      "JavaScript",
      "Node.js",
      "Web Development"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};`
      },
      {
        text: 'Optimización de rutas y enlaces',
        code: `// Configuración de rutas SEO-friendly
const routes = [
  {
    path: '/',
    element: <Home />,
    // Metadata para cada ruta
    meta: {
      title: 'Inicio | Martin Siles',
      description: 'Portfolio profesional y proyectos'
    }
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    meta: {
      title: 'Portfolio | Martin Siles',
      description: 'Proyectos y trabajos destacados'
    }
  }
];

// Componente de enlace optimizado
const SEOLink = ({ to, children, title }) => (
  <Link 
    to={to}
    title={title}
    rel={to.startsWith('http') ? 'noopener noreferrer' : undefined}
    target={to.startsWith('http') ? '_blank' : undefined}
  >
    {children}
  </Link>
);`
      }
    ]
  },
  en: {
    title: 'SEO & Metadata',
    description: 'Optimized for search engines:',
    points: [
      {
        text: 'Dynamic meta tags',
        code: `// Dynamic meta tags implementation
const SEO = ({ title, description, lang }) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Social media meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/profile-image.jpg" />
      
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

// Usage in components
<SEO 
  title="Portfolio - Martin Siles"
  description="Professional portfolio of Martin Siles, Software Engineer"
  lang="en"
/>`
      },
      {
        text: 'Schema.org structured data',
        code: `// Schema.org implementation
const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Martin Siles",
    "jobTitle": "Software Engineer",
    "url": "https://martinsiles.es",
    "sameAs": [
      "https://github.com/username",
      "https://linkedin.com/in/username"
    ],
    "knowsAbout": [
      "React",
      "JavaScript",
      "Node.js",
      "Web Development"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};`
      },
      {
        text: 'Route and link optimization',
        code: `// SEO-friendly route configuration
const routes = [
  {
    path: '/',
    element: <Home />,
    // Metadata for each route
    meta: {
      title: 'Home | Martin Siles',
      description: 'Professional portfolio and projects'
    }
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    meta: {
      title: 'Portfolio | Martin Siles',
      description: 'Featured projects and work'
    }
  }
];

// Optimized link component
const SEOLink = ({ to, children, title }) => (
  <Link 
    to={to}
    title={title}
    rel={to.startsWith('http') ? 'noopener noreferrer' : undefined}
    target={to.startsWith('http') ? '_blank' : undefined}
  >
    {children}
  </Link>
);`
      }
    ]
  }
};
