import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import '../styles/education.css';

const translations = {
  es: {
    title: "Educación y Certificaciones",
    education: "Educación",
    certifications: "Certificaciones",
    institution: "Institución",
    degree: "Título",
    year: "Año",
    viewCertificate: "Ver Certificado",
    courseContents: "Contenidos del curso:"
  },
  en: {
    title: "Education and Certifications",
    education: "Education",
    certifications: "Certifications",
    institution: "Institution",
    degree: "Degree",
    year: "Year",
    viewCertificate: "View Certificate",
    courseContents: "Course contents:"
  }
};

const Education = () => {
  const { language, darkMode } = useContext(AppContext);
  const t = translations[language];
  const [selectedCert, setSelectedCert] = useState(null);

  const educationData = [
    {
      institution: "Universidad Tecnológica",
      degree: "Ingeniería en Informática",
      year: "2015 - 2019",
      description: "Especialización en Desarrollo de Software y Sistemas Distribuidos",
      theme: "university"
    },
    {
      institution: "Cambridge English",
      degree: "B2 First Certificate in English",
      year: "2016",
      description: "Certificado de nivel B2 en inglés según el Marco Común Europeo de Referencia para las lenguas (MCER)",
      theme: "language"
    }
  ];

  const certificationsData = [
    {
      name: "React - The Complete Guide",
      platform: "Udemy",
      year: "2022",
      pdfUrl: "/certificates/react-udemy.pdf",
      contents: [
        "JSX and React Components",
        "State and Props",
        "Hooks (useState, useEffect, useContext, etc.)",
        "Redux for State Management",
        "React Router for Navigation",
        "Advanced Concepts: Context API, Higher-Order Components"
      ]
    },
    {
      name: "Node.js Developer Course",
      platform: "Udemy",
      year: "2021",
      pdfUrl: "/certificates/node-udemy.pdf",
      contents: [
        "Asynchronous Programming in Node.js",
        "Express.js Framework",
        "RESTful API Development",
        "MongoDB and Mongoose",
        "Authentication and Security",
        "Deployment and CI/CD"
      ]
    },
    {
      name: "Python Pro Bootcamp",
      platform: "Udemy",
      year: "2020",
      pdfUrl: "/certificates/python-udemy.pdf",
      contents: [
        "Python Fundamentals and OOP",
        "Web Scraping with Beautiful Soup",
        "Data Analysis with Pandas",
        "Web Development with Flask",
        "GUI Development with Tkinter",
        "Automation and Scripting"
      ]
    },
    {
      name: "Angular - The Complete Guide",
      platform: "Udemy",
      year: "2022",
      pdfUrl: "/certificates/angular-udemy.pdf",
      contents: [
        "Angular Components and Databinding",
        "Directives and Pipes",
        "Services and Dependency Injection",
        "Routing and Navigation",
        "Observables and RxJS",
        "NgRx for State Management"
      ]
    },
    {
      name: "NestJS - The Complete Developer's Guide",
      platform: "Udemy",
      year: "2023",
      pdfUrl: "/certificates/nest-udemy.pdf",
      contents: [
        "NestJS Architecture and Modules",
        "Dependency Injection and Providers",
        "Controllers and Routing",
        "Database Integration with TypeORM",
        "Authentication and Authorization",
        "Microservices Architecture"
      ]
    }
  ];

  return (
    <div className={`education-container ${darkMode ? 'dark-mode' : ''}`}>
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