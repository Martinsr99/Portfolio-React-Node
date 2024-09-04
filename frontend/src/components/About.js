import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Me</h2>
      <p>I am a passionate Full Stack Developer with experience in various technologies including JavaScript, Node.js, React, Vue, Angular, Python, and Go. I love creating efficient and scalable web applications that solve real-world problems.</p>
      <h3>My Journey</h3>
      <p>I started my journey in web development... (Add more details about your journey)</p>
      <h3>Skills</h3>
      <ul>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>Frontend: React, Vue, Angular</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>Backend: Node.js, Express, Python, Go</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>Database: MongoDB, PostgreSQL</motion.li>
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>DevOps: Docker, Kubernetes</motion.li>
      </ul>
    </motion.div>
  );
};

export default About;