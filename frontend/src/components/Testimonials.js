import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../AppContext';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { testimonialsTranslations } from '../data/testimonialsTranslations';
import '../styles/testimonials.css';

const Testimonials = () => {
  const { language } = useContext(AppContext);
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const t = testimonialsTranslations[language];

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
    <section className="testimonials">
      <motion.h2 
        ref={titleRef}
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isTitleVisible && (
          <ReactTyped
            strings={[t.sectionTitle]}
            typeSpeed={50}
            backSpeed={30}
            loop={false}
          />
        )}
      </motion.h2>
      <div className="testimonials-container">
        {t.testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id} 
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.1 }
            }}
          >
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">
              <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                {testimonial.name}
              </a>
            </p>
            <p className="testimonial-position">{testimonial.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
