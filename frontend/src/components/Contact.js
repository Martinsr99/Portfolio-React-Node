import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css';
import '../styles/toast.css';
import { AppContext } from '../AppContext';
import emailjs from 'emailjs-com';

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
    errorOccurred: "Ocurrió un error. Por favor, inténtalo más tarde.",
    captcha: "Por favor, resuelve este captcha simple",
    captchaPlaceholder: "Resultado del captcha",
    captchaInvalid: "Captcha inválido. Por favor, inténtalo de nuevo."
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
    errorOccurred: "An error occurred. Please try again later.",
    captcha: "Please solve this simple captcha",
    captchaPlaceholder: "Captcha result",
    captchaInvalid: "Invalid captcha. Please try again."
  }
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const { language, darkMode } = useContext(AppContext);
  const t = translations[language];

  useEffect(() => {
    // Generate a simple captcha question
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion(`${num1} + ${num2} = ?`);
    setCaptchaAnswer((num1 + num2).toString());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captcha !== captchaAnswer) {
      toast.error(t.captchaInvalid, {
        className: `custom-toast custom-toast-error ${darkMode ? 'dark-mode' : ''}`
      });
      return;
    }

    toast.info(t.sendingMessage, { 
      autoClose: false, 
      toastId: 'sending',
      className: `custom-toast custom-toast-info ${darkMode ? 'dark-mode' : ''}`
    });

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      toast.dismiss('sending');
      toast.success(t.messageSent, {
        className: `custom-toast custom-toast-success ${darkMode ? 'dark-mode' : ''}`
      });
      setName('');
      setEmail('');
      setMessage('');
      setCaptcha('');
      // Generate a new captcha question
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      setCaptchaQuestion(`${num1} + ${num2} = ?`);
      setCaptchaAnswer((num1 + num2).toString());
    } catch (error) {
      console.error('Error:', error);
      toast.dismiss('sending');
      toast.error(t.errorOccurred, {
        className: `custom-toast custom-toast-error ${darkMode ? 'dark-mode' : ''}`
      });
    }
  };

  return (
    <motion.div
      className={`contact-container ${darkMode ? 'dark-mode' : ''}`}
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
        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="captcha">{t.captcha}: {captchaQuestion}</label>
          <input
            type="text"
            id="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
            placeholder={t.captchaPlaceholder}
          />
        </motion.div>
        <motion.div className="submit-button-container">
          <motion.button
            className="btn btn-primary btn-large submit-button"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.sendMessage}
          </motion.button>
        </motion.div>
      </form>
      <ToastContainer position="bottom-right" />
    </motion.div>
  );
};

export default Contact;