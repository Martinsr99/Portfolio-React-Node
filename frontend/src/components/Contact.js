import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css';
import { LanguageContext } from '../LanguageContext';

const translations = {
  es: {
    getInTouch: "Ponte en Contacto",
    name: "Nombre",
    email: "Correo Electrónico",
    message: "Mensaje",
    sendMessage: "Enviar Mensaje",
    yourName: "Tu Nombre",
    yourEmail: "tu.correo@ejemplo.com",
    yourMessageHere: "Tu mensaje aquí...",
    sendingMessage: "Enviando mensaje...",
    messageSent: "¡Mensaje enviado con éxito!",
    failedToSend: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
    errorOccurred: "Ocurrió un error. Por favor, inténtalo más tarde."
  },
  en: {
    getInTouch: "Get in Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "your.email@example.com",
    yourMessageHere: "Your message here...",
    sendingMessage: "Sending message...",
    messageSent: "Message sent successfully!",
    failedToSend: "Failed to send message. Please try again.",
    errorOccurred: "An error occurred. Please try again later."
  }
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info(t.sendingMessage, { autoClose: false, toastId: 'sending' });

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.dismiss('sending');
        toast.success(t.messageSent);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.dismiss('sending');
        toast.error(t.failedToSend);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.dismiss('sending');
      toast.error(t.errorOccurred);
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="contact-title">{t.getInTouch}</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name">{t.name}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder={t.yourName}
          />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email">{t.email}</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={t.yourEmail}
          />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="message">{t.message}</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder={t.yourMessageHere}
          ></textarea>
        </motion.div>
        <motion.button
          className="submit-button"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.sendMessage}
        </motion.button>
      </form>
      <ToastContainer position="bottom-right" />
    </motion.div>
  );
};

export default Contact;