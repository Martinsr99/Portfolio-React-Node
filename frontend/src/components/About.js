import React, { useContext, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../AppContext';
import Contact from './Contact';
import SocialCards from './SocialCards';
import { ReactTyped } from 'react-typed';
import { socialCardsTranslations } from '../data/socialCardsTranslations';
import { aboutTranslations } from '../data/aboutTranslations';
import '../styles/about.css';

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

const About = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = aboutTranslations[language];
  const socialCardsT = socialCardsTranslations[language];
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        className={`about-container ${darkMode ? 'dark-mode' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h2
          ref={titleRef}
          className="about-title gradient-text"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {isTitleVisible && (
            <ReactTyped
              strings={[t.pageTitle]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
            />
          )}
        </motion.h2>
        <SocialCards translations={socialCardsT} />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
