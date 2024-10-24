import React, { useContext, useCallback, useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import { AppContext } from '../AppContext';
import { educationData } from '../data/educationData';
import { certificationsData } from '../data/certificationsData';
import '../styles/education.css';
import '../styles/buttons.css';

const translations = {
  es: {
    title: "Certificaciones y Educación",
    viewCertificate: "Ver Certificado",
    courseContents: "Contenidos del curso:",
    certificateNotFound: "Certificado no encontrado",
    instructor: "Instructor:",
    duration: "Duración:",
    certifications: "Certificaciones",
    education: "Educación"
  },
  en: {
    title: "Certifications and Education",
    viewCertificate: "View Certificate",
    courseContents: "Course contents:",
    certificateNotFound: "Certificate not found",
    instructor: "Instructor:",
    duration: "Duration:",
    certifications: "Certifications",
    education: "Education"
  }
};

const Education = () => {
  const { language, darkMode, selectedCert, setSelectedCert } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('certifications');
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);
  const t = translations[language];

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

  const handleCertSelect = useCallback((cert) => {
    setSelectedCert(cert);
  }, [setSelectedCert]);

  const handleCertDeselect = useCallback(() => {
    setSelectedCert(null);
  }, [setSelectedCert]);

  const handleCertificateClick = useCallback((event, pdfUrl) => {
    event.preventDefault();
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  }, []);

  const sortedCertificationsData = useMemo(() => {
    return [...certificationsData].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }, [certificationsData]);

  const timelineData = activeTab === 'certifications' ? sortedCertificationsData : educationData;

  return (
    <motion.div 
      className={`education-container ${darkMode ? 'dark-mode' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        ref={titleRef}
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isTitleVisible && (
          <Typed
            strings={[t.title]}
            typeSpeed={50}
            backSpeed={30}
            loop={false}
          />
        )}
      </motion.h2>

      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`} 
          onClick={() => setActiveTab('certifications')}
        >
          {t.certifications}
        </button>
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} 
          onClick={() => setActiveTab('education')}
        >
          {t.education}
        </button>
      </div>
      
      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div 
              className="timeline-content"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'certifications' ? (
                <>
                  <h3>{item.name[language]}</h3>
                  <p className="date">{item.date}</p>
                  <p className="platform">{item.platform}</p>
                  {item.instructor && <p><strong>{t.instructor}</strong> {item.instructor}</p>}
                  {item.duration && <p><strong>{t.duration}</strong> {item.duration[language]}</p>}
                  <motion.button 
                    onClick={(e) => handleCertificateClick(e, item.pdfUrl)}
                    className="btn btn-primary btn-certificate"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {t.viewCertificate}
                  </motion.button>
                </>
              ) : (
                <>
                  <h3>{item.institution}</h3>
                  <p className="date">{item.year}</p>
                  <p className="degree">{item.degree[language]}</p>
                  <p>{item.description[language]}</p>
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="certificate-preview"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <h4>{selectedCert.name[language]}</h4>
            <p>{selectedCert.platform} - {selectedCert.date}</p>
            {selectedCert.instructor && <p><strong>{t.instructor}</strong> {selectedCert.instructor}</p>}
            {selectedCert.duration && <p><strong>{t.duration}</strong> {selectedCert.duration[language]}</p>}
            <p><strong>{t.courseContents}</strong></p>
            <ul>
              {selectedCert.contents[language].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Education;
