import React from 'react';
import { motion } from 'framer-motion';
import bannerGmail from '../images/bannerGmail.png';

const About = () => {
  const SocialSection = ({ title, description, linkText, linkUrl, bgColor, textColor, backgroundImage, buttonTextColor }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '50vh',
        padding: '2rem',
        backgroundColor: bgColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
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
      <h2>About Me</h2>
      <p>I am a passionate Full Stack Developer with experience in various technologies including JavaScript, Node.js, React, Vue, Angular, Python, and Go. I love creating efficient and scalable web applications that solve real-world problems.</p>
      <h3>My Journey</h3>
      <p>I started my journey in web development... (Add more details about your journey)</p>
      <h3>Skills</h3>
      <ul>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>Frontend: React, Vue, Angular</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>Backend: Node.js, Express, Python, Go</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>Database: MongoDB, PostgreSQL</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>DevOps: Docker, Kubernetes</motion.li>
      </ul>
      
      <div style={{ height: '100vh', marginTop: '3rem' }}>
        <SocialSection
          title="Check out my YouTube Channel!"
          description="Subscribe to my channel for insightful tutorials, coding tips, and tech discussions. Learn about the latest in web development and software engineering."
          linkText="Visit My YouTube Channel"
          linkUrl="https://www.youtube.com/@martinsiles"
          bgColor="transparent"
          textColor="#ffffff"
          backgroundImage={bannerGmail}
          buttonTextColor="#212121"
        />

        <SocialSection
          title="Connect with me on LinkedIn!"
          description="Join my professional network for career updates, industry insights, and networking opportunities. Let's grow together in the tech world."
          linkText="Visit My LinkedIn Profile"
          linkUrl="https://www.linkedin.com/in/martinsilesreche/"
          bgColor="#00436a"
          textColor="#ffffff"
        />
      </div>
    </motion.div>
  );
};

export default About;