import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../AppContext';
import { ReactTyped } from 'react-typed';
import '../styles/testimonials.css';

const Testimonials = () => {
  const { language } = useContext(AppContext);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add('visible');
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

  const testimonials = {
    es: [
      {
        id: 1,
        name: "Irene Aguilera Gómez",
        position: "Diseñadora Gráfica",
        text: "Martin es un programador Full Stack sobresaliente. Su capacidad para entender y aplicar soluciones efectivas es increíble. Traduce ideas complejas en resultados prácticos y eficientes.",
        linkedin: "https://www.linkedin.com/in/irene-aguilera-g%C3%B3mez-543420330/"
      },
      {
        id: 2,
        name: "Ismael Calero Morales",
        position: "Desarrollador Backend",
        text: "La habilidad de Martin para resolver problemas complejos es asombrosa. Es un mentor paciente y dedicado que inspira a pensar diferente. Su ética de trabajo y capacidad de aprendizaje son ejemplares.",
        linkedin: "https://www.linkedin.com/in/thismadev/"
      }
    ],
    en: [
      {
        id: 1,
        name: "Irene Aguilera Gómez",
        position: "Graphic Designer",
        text: "Martin is an outstanding Full Stack programmer. His ability to understand and apply effective solutions is incredible. He translates complex ideas into practical and efficient results.",
        linkedin: "https://www.linkedin.com/in/irene-aguilera-g%C3%B3mez-543420330/"
      },
      {
        id: 2,
        name: "Ismael Calero Morales",
        position: "Backend Developer",
        text: "Martin's ability to solve complex problems is amazing. He's a patient and dedicated mentor who inspires different thinking. His work ethic and learning capacity are exemplary.",
        linkedin: "https://www.linkedin.com/in/thismadev/"
      }
    ]
  };

  return (
    <section className="testimonials">
      <h2 ref={titleRef}>
        <ReactTyped
          strings={[language === 'es' ? 'Testimonios' : 'Testimonials']}
          typeSpeed={50}
          backSpeed={30}
          loop={false}
        />
      </h2>
      <div className="testimonials-container">
        {testimonials[language].map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card fade-in-up">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">
              <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                {testimonial.name}
              </a>
            </p>
            <p className="testimonial-position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
