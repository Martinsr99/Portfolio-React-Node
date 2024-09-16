import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import bannerLinkedin from '../images/bannerLinkedin.png';
import bannerYoutube from '../images/bannerYoutube.png';
import githubBackground from '../images/github.webp';

const translations = {
  es: {
    youtubeTitle: "¡Visita mi Canal de YouTube!",
    youtubeDescription: "Suscríbete a mi canal para tutoriales perspicaces, consejos de codificación y discusiones tecnológicas. Aprende sobre lo último en desarrollo web e ingeniería de software.",
    youtubeButton: "Visita Mi Canal de YouTube",
    linkedinTitle: "¡Conéctate conmigo en LinkedIn!",
    linkedinDescription: "Únete a mi red profesional para actualizaciones de carrera, perspectivas de la industria y oportunidades de networking. Crezcamos juntos en el mundo de la tecnología.",
    linkedinButton: "Visita Mi Perfil de LinkedIn",
    githubTitle: "¡Explora mis proyectos en GitHub!",
    githubDescription: "Descubre mis repositorios, contribuciones a proyectos de código abierto y más. Observa mi evolución como desarrollador a través de mi código.",
    githubButton: "Visita Mi Perfil de GitHub"
  },
  en: {
    youtubeTitle: "Check out my YouTube Channel!",
    youtubeDescription: "Subscribe to my channel for insightful tutorials, coding tips, and tech discussions. Learn about the latest in web development and software engineering.",
    youtubeButton: "Visit My YouTube Channel",
    linkedinTitle: "Connect with me on LinkedIn!",
    linkedinDescription: "Join my professional network for career updates, industry insights, and networking opportunities. Let's grow together in the tech world.",
    linkedinButton: "Visit My LinkedIn Profile",
    githubTitle: "Explore my projects on GitHub!",
    githubDescription: "Discover my repositories, open-source contributions, and more. See my evolution as a developer through my code.",
    githubButton: "Visit My GitHub Profile"
  }
};

const About = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = translations[language];

  const SocialSection = ({ title, description, linkText, linkUrl, backgroundImage, buttonColor, hoverShadowColor }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '50vh',
        minHeight: '300px',
        padding: '2rem',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem',
        '@media (max-width: 768px)': {
          height: 'auto',
          minHeight: '50vh',
        },
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '1rem' }}>
        <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>{title}</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.4', marginBottom: '1.5rem', color: '#ffffff' }}>
          {description}
        </p>
        <motion.a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: buttonColor,
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            boxShadow: `0 4px 15px ${buttonColor}50`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 6px 20px ${hoverShadowColor || buttonColor}80`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {linkText}
        </motion.a>
      </div>
    </motion.div>
  );

  const containerStyle = {
    background: darkMode
      ? 'linear-gradient(135deg, #0a192f 0%, #0c2447 100%)'
      : 'linear-gradient(135deg, #f0f4f8 0%, #d0e2f3 50%, #b0d0e8 100%)',
    color: darkMode ? '#e0e0e0' : '#333333',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: darkMode ? '0 4px 6px rgba(255, 255, 255, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    minHeight: '100vh',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={containerStyle}
    >
      <div style={{ marginTop: '3rem' }}>
        <SocialSection
          title={t.youtubeTitle}
          description={t.youtubeDescription}
          linkText={t.youtubeButton}
          linkUrl="https://www.youtube.com/@martinsiles"
          backgroundImage={bannerYoutube}
          buttonColor="#FF0000"
        />

        <SocialSection
          title={t.linkedinTitle}
          description={t.linkedinDescription}
          linkText={t.linkedinButton}
          linkUrl="https://www.linkedin.com/in/martinsilesreche/"
          backgroundImage={bannerLinkedin}
          buttonColor="#0077B5"
        />

        <SocialSection
          title={t.githubTitle}
          description={t.githubDescription}
          linkText={t.githubButton}
          linkUrl="https://github.com/Martinsr99"
          backgroundImage={githubBackground}
          buttonColor="#161B22"
          hoverShadowColor="#4078c0"
        />
      </div>
    </motion.div>
  );
};

export default About;