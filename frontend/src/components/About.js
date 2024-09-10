import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../LanguageContext';
import bannerGmail from '../images/bannerGmail.png';
import bannerLinkedin from '../images/bannerLinkedin.png';

const translations = {
  es: {
    aboutMe: "Sobre Mí",
    aboutMeDescription: "Soy un apasionado Desarrollador Full Stack con experiencia en diversas tecnologías incluyendo JavaScript, Node.js, React, Vue, Angular, Python y Go. Me encanta crear aplicaciones web eficientes y escalables que resuelven problemas del mundo real.",
    myJourney: "Mi Trayectoria",
    journeyDescription: "Comencé mi trayectoria en el desarrollo web... (Añade más detalles sobre tu trayectoria)",
    skills: "Habilidades",
    frontend: "Frontend: React, Vue, Angular",
    backend: "Backend: Node.js, Express, Python, Go",
    database: "Base de Datos: MongoDB, PostgreSQL",
    devOps: "DevOps: Docker, Kubernetes",
    youtubeTitle: "¡Visita mi Canal de YouTube!",
    youtubeDescription: "Suscríbete a mi canal para tutoriales perspicaces, consejos de codificación y discusiones tecnológicas. Aprende sobre lo último en desarrollo web e ingeniería de software.",
    youtubeButton: "Visita Mi Canal de YouTube",
    linkedinTitle: "¡Conéctate conmigo en LinkedIn!",
    linkedinDescription: "Únete a mi red profesional para actualizaciones de carrera, perspectivas de la industria y oportunidades de networking. Crezcamos juntos en el mundo de la tecnología.",
    linkedinButton: "Visita Mi Perfil de LinkedIn"
  },
  en: {
    aboutMe: "About Me",
    aboutMeDescription: "I am a passionate Full Stack Developer with experience in various technologies including JavaScript, Node.js, React, Vue, Angular, Python, and Go. I love creating efficient and scalable web applications that solve real-world problems.",
    myJourney: "My Journey",
    journeyDescription: "I started my journey in web development... (Add more details about your journey)",
    skills: "Skills",
    frontend: "Frontend: React, Vue, Angular",
    backend: "Backend: Node.js, Express, Python, Go",
    database: "Database: MongoDB, PostgreSQL",
    devOps: "DevOps: Docker, Kubernetes",
    youtubeTitle: "Check out my YouTube Channel!",
    youtubeDescription: "Subscribe to my channel for insightful tutorials, coding tips, and tech discussions. Learn about the latest in web development and software engineering.",
    youtubeButton: "Visit My YouTube Channel",
    linkedinTitle: "Connect with me on LinkedIn!",
    linkedinDescription: "Join my professional network for career updates, industry insights, and networking opportunities. Let's grow together in the tech world.",
    linkedinButton: "Visit My LinkedIn Profile"
  }
};

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const SocialSection = ({ title, description, linkText, linkUrl, bgColor, textColor, backgroundImage, buttonTextColor }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '50vh',
        minHeight: '300px',
        padding: '2rem',
        backgroundColor: bgColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
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
        backgroundColor: backgroundImage ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
      }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '1rem' }}>
        <h3 style={{ color: textColor, marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>{title}</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.4', marginBottom: '1.5rem', color: textColor }}>
          {description}
        </p>
        <motion.a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: textColor,
            color: buttonTextColor || bgColor,
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            boxShadow: `0 4px 15px ${textColor}50`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 6px 20px ${textColor}80`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {linkText}
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t.aboutMe}</h2>
      <p>{t.aboutMeDescription}</p>
      <h3>{t.myJourney}</h3>
      <p>{t.journeyDescription}</p>
      <h3>{t.skills}</h3>
      <ul>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>{t.frontend}</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>{t.backend}</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>{t.database}</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>{t.devOps}</motion.li>
      </ul>
      
      <div style={{ marginTop: '3rem' }}>
        <SocialSection
          title={t.youtubeTitle}
          description={t.youtubeDescription}
          linkText={t.youtubeButton}
          linkUrl="https://www.youtube.com/@martinsiles"
          bgColor="transparent"
          textColor="#ffffff"
          backgroundImage={bannerGmail}
          buttonTextColor="#212121"
        />

        <SocialSection
          title={t.linkedinTitle}
          description={t.linkedinDescription}
          linkText={t.linkedinButton}
          linkUrl="https://www.linkedin.com/in/martinsilesreche/"
          bgColor="transparent"
          textColor="#ffffff"
          backgroundImage={bannerLinkedin}
          buttonTextColor="#0077B5"
        />
      </div>
    </motion.div>
  );
};

export default About;