import React, { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import '../styles/education.css';

const translations = {
  es: {
    title: "Educación y Certificaciones",
    education: "Educación",
    certifications: "Certificaciones",
    institution: "Institución",
    degree: "Título",
    year: "Año",
    viewCertificate: "Ver Certificado"
  },
  en: {
    title: "Education and Certifications",
    education: "Education",
    certifications: "Certifications",
    institution: "Institution",
    degree: "Degree",
    year: "Year",
    viewCertificate: "View Certificate"
  }
};

const Education = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [selectedCert, setSelectedCert] = useState(null);

  const educationData = [
    {
      institution: "Universidad Tecnológica",
      degree: "Ingeniería en Informática",
      year: "2015 - 2019",
      description: "Especialización en Desarrollo de Software y Sistemas Distribuidos"
    }
  ];

  const certificationsData = [
    {
      name: "React - The Complete Guide",
      platform: "Udemy",
      year: "2022",
      pdfUrl: "/certificates/react-udemy.pdf"
    },
    {
      name: "Node.js Developer Course",
      platform: "Udemy",
      year: "2021",
      pdfUrl: "/certificates/node-udemy.pdf"
    },
    {
      name: "Python Pro Bootcamp",
      platform: "Udemy",
      year: "2020",
      pdfUrl: "/certificates/python-udemy.pdf"
    },
    {
      name: "Angular - The Complete Guide",
      platform: "Udemy",
      year: "2022",
      pdfUrl: "/certificates/angular-udemy.pdf"
    },
    {
      name: "NestJS - The Complete Developer's Guide",
      platform: "Udemy",
      year: "2023",
      pdfUrl: "/certificates/nest-udemy.pdf"
    }
  ];

  return (
    <div className="education-container">
      <h2>{t.title}</h2>
      
      <section className="education-section">
        <h3>{t.education}</h3>
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
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
              onMouseEnter={() => setSelectedCert(cert)}
              onMouseLeave={() => setSelectedCert(null)}
            >
              <h4>{cert.name}</h4>
              <p>{cert.platform}</p>
              <p>{cert.year}</p>
              <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="view-certificate">
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
          <a href={selectedCert.pdfUrl} target="_blank" rel="noopener noreferrer" className="view-certificate">
            {t.viewCertificate}
          </a>
        </div>
      )}
    </div>
  );
};

export default Education;