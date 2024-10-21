import React, { useContext, useCallback, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import { AppContext } from '../AppContext';
import { educationData } from '../data/educationData';
import { certificationsData } from '../data/certificationsData';
import '../styles/education.css';
import '../styles/buttons.css';

const translations = {
  es: {
    title: "Educación y Certificaciones",
    viewCertificate: "Ver Certificado",
    courseContents: "Contenidos del curso:",
    certificateNotFound: "Certificado no encontrado",
    instructor: "Instructor:",
    duration: "Duración:"
  },
  en: {
    title: "Education and Certifications",
    viewCertificate: "View Certificate",
    courseContents: "Course contents:",
    certificateNotFound: "Certificate not found",
    instructor: "Instructor:",
    duration: "Duration:"
  }
};

const Education = () => {
  const { language, darkMode, selectedCert, setSelectedCert } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('education');
  const t = translations[language];

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

  const timelineData = activeTab === 'education' ? educationData : sortedCertificationsData;

  return (
    <motion.div 
      className={`education-container ${darkMode ? 'dark-mode' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="section-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Typed
          strings={[t.title]}
          typeSpeed={50}
          backSpeed={30}
          loop={false}
        />
      </motion.h2>

      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} 
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button 
          className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`} 
          onClick={() => setActiveTab('certifications')}
        >
          Certifications
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
              {activeTab === 'education' ? (
                <>
                  <h3>{item.institution}</h3>
                  <p className="date">{item.year}</p>
                  <p className="degree">{item.degree}</p>
                  <p>{item.description}</p>
                </>
              ) : (
                <>
                  <h3>{item.name}</h3>
                  <p className="date">{item.date}</p>
                  <p className="platform">{item.platform}</p>
                  {item.instructor && <p><strong>{t.instructor}</strong> {item.instructor}</p>}
                  {item.duration && <p><strong>{t.duration}</strong> {item.duration}</p>}
                  <motion.button 
                    onClick={(e) => handleCertificateClick(e, item.pdfUrl)}
                    className="btn btn-primary btn-certificate"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {t.viewCertificate}
                  </motion.button>
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
            <h4>{selectedCert.name}</h4>
            <p>{selectedCert.platform} - {selectedCert.date}</p>
            {selectedCert.instructor && <p><strong>{t.instructor}</strong> {selectedCert.instructor}</p>}
            {selectedCert.duration && <p><strong>{t.duration}</strong> {selectedCert.duration}</p>}
            <p><strong>{t.courseContents}</strong></p>
            <ul>
              {selectedCert.contents.map((item, index) => (
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
