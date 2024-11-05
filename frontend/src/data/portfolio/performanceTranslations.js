export const performanceTranslations = {
  es: {
    title: 'Rendimiento',
    description: 'Optimizado para una experiencia de usuario fluida:',
    points: [
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
        text: 'Animaciones optimizadas con Framer Motion',
        code: `// Animaciones optimizadas usando Framer Motion
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

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
const toggleCode = (index, section) => {
  setVisibleCode(prev => {
    const newState = { ...prev };
    // Cerrar otros códigos abiertos para mejorar rendimiento
    Object.keys(newState).forEach(key => {
      if (key !== \`\${section}-\${index}\`) {
        newState[key] = false;
      }
    });
    newState[\`\${section}-\${index}\`] = !prev[\`\${section}-\${index}\`];
    return newState;
  });
};`
      }
    ]
  },
  en: {
    title: 'Performance',
    description: 'Optimized for a smooth user experience:',
    points: [
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
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

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
const toggleCode = (index, section) => {
  setVisibleCode(prev => {
    const newState = { ...prev };
    // Close other open codes to improve performance
    Object.keys(newState).forEach(key => {
      if (key !== \`\${section}-\${index}\`) {
        newState[key] = false;
      }
    });
    newState[\`\${section}-\${index}\`] = !prev[\`\${section}-\${index}\`];
    return newState;
  });
};`
      }
    ]
  }
};
