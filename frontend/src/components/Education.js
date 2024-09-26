import React, { useContext, useCallback } from 'react';
import { AppContext } from '../AppContext';
import { educationData } from '../data/educationData';
import { certificationsData } from '../data/certificationsData';
import '../styles/education.css';
import '../styles/buttons.css';

const translations = {
  es: {
    title: "Educación y Certificaciones",
    education: "Educación",
    certifications: "Certificaciones",
    institution: "Institución",
    degree: "Título",
    year: "Año",
    viewCertificate: "Ver Certificado",
    courseContents: "Contenidos del curso:",
    certificateNotFound: "Certificado no encontrado"
  },
  en: {
    title: "Education and Certifications",
    education: "Education",
    certifications: "Certifications",
    institution: "Institution",
    degree: "Degree",
    year: "Year",
    viewCertificate: "View Certificate",
    courseContents: "Course contents:",
    certificateNotFound: "Certificate not found"
  }
};

const Education = () => {
  const { language, darkMode, selectedCert, setSelectedCert } = useContext(AppContext);
  const t = translations[language];

  const handleCertSelect = useCallback((cert) => {
    setSelectedCert(cert);
  }, [setSelectedCert]);

  const handleCertDeselect = useCallback(() => {
    setSelectedCert(null);
  }, [setSelectedCert]);

  const handleKeyDown = useCallback((event, cert) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCertSelect(cert);
    }
  }, [handleCertSelect]);

  const handleCertificateClick = useCallback((event, pdfUrl) => {
    event.preventDefault();
    fetch(pdfUrl)
      .then(response => {
        if (response.ok) {
          window.open(pdfUrl, '_blank', 'noopener,noreferrer');
        } else {
          alert(t.certificateNotFound);
        }
      })
      .catch(() => {
        alert(t.certificateNotFound);
      });
  }, [t.certificateNotFound]);

  return (
    <div className={`education-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="background-animation"></div>
      <h2>{t.title}</h2>
      
      <section className="education-section">
        <h3>{t.education}</h3>
        {educationData.map((edu, index) => (
          <div key={index} className={`education-item ${edu.theme}`}>
            <h4>{edu.institution}</h4>
            <p><strong>{t.degree}:</strong> {edu.degree}</p>
            <p><strong>{t.year}:</strong> {edu.year}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      <section className="certifications-section">
        <h3>{t.certifications}</h3>
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="certification-item"
              onMouseEnter={() => handleCertSelect(cert)}
              onMouseLeave={handleCertDeselect}
              onFocus={() => handleCertSelect(cert)}
              onBlur={handleCertDeselect}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, cert)}
            >
              <h4>{cert.name}</h4>
              <p>{cert.platform}</p>
              <p>{cert.year}</p>
              <a 
                href={cert.pdfUrl} 
                onClick={(e) => handleCertificateClick(e, cert.pdfUrl)}
                className="btn btn-primary view-certificate"
              >
                {t.viewCertificate}
              </a>
            </div>
          ))}
        </div>
      </section>

      {selectedCert && (
        <div className="certificate-preview">
          <h4>{selectedCert.name}</h4>
          <p>{selectedCert.platform} - {selectedCert.year}</p>
          <p><strong>{t.courseContents}</strong></p>
          <ul>
            {selectedCert.contents.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Education;