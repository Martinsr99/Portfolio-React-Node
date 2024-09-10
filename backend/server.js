const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Log email configuration (without full password)
console.log('Email configuration:');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '********' : 'Not set');

// Rate limiting for email sending
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3 // limit each IP to 3 requests per windowMs
});

// Store session tokens (in-memory storage, consider using a database for production)
const sessionTokens = new Set();

// Existing route for info (no rate limiting)
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Martin Siles',
    title: 'Desarrollador Full Stack',
    bio: 'Soy un apasionado desarrollador full stack con experiencia en crear soluciones web innovadoras y eficientes. Me especializo en JavaScript y sus frameworks modernos, siempre buscando aprender y aplicar las últimas tecnologías en mis proyectos.',
    skills: [
      { name: 'JavaScript', version: 'ES2021', details: 'Amplia experiencia en desarrollo frontend y backend' },
      { name: 'React', version: '18.x', details: 'Desarrollo de aplicaciones SPA y componentes reutilizables' },
      { name: 'Node.js', version: '16.x', details: 'Creación de APIs RESTful y microservicios' },
      { name: 'Python', version: '3.9', details: 'Análisis de datos y automatización de tareas' },
      { name: 'Angular', version: '13.x', details: 'Desarrollo de aplicaciones empresariales' },
      { name: 'Vue', version: '3.x', details: 'Creación de interfaces de usuario interactivas' },
      { name: 'Docker', version: '20.10', details: 'Containerización de aplicaciones y servicios' },
      { name: 'AWS', version: 'Múltiples servicios', details: 'Despliegue y gestión de aplicaciones en la nube' },
      { name: 'MongoDB', version: '5.0', details: 'Diseño e implementación de bases de datos NoSQL' },
      { name: 'PostgreSQL', version: '14.x', details: 'Gestión de bases de datos relacionales' },
      { name: 'Next.js', version: '12.x', details: 'Desarrollo de aplicaciones React con renderizado del lado del servidor' },
      { name: 'Express', version: '4.x', details: 'Creación de servidores web y APIs' },
      { name: 'NestJS', version: '8.x', details: 'Desarrollo de aplicaciones backend escalables' },
      { name: 'Golang', version: '1.18', details: 'Desarrollo de microservicios de alto rendimiento' },
      { name: 'CSS', version: 'CSS3', details: 'Diseño responsivo y animaciones avanzadas' }
    ]
  });
});

// Route for sending emails (with rate limiting)
app.post('/api/send-email', emailLimiter, async (req, res) => {
  const { name, email, message, captcha } = req.body;
  const sessionToken = req.headers['x-session-token'];

  console.log('Received request:', { name, email, message, captcha, sessionToken });

  // Verify session token
  if (!sessionTokens.has(sessionToken)) {
    console.log('Invalid session token:', sessionToken);
    return res.status(403).send('Invalid session token');
  }

  // Verify captcha (simple implementation, consider using a more robust solution for production)
  if (!captcha) {
    console.log('Captcha is missing');
    return res.status(400).send('Captcha is required');
  }

  console.log('Attempting to send email...');
  console.log('From:', email);
  console.log('To: silesreche.martin@gmail.com');

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email options
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'silesreche.martin@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    console.log('Sending email...');
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully');

    // Remove the used session token
    sessionTokens.delete(sessionToken);
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.code === 'EAUTH') {
      console.error('Authentication error. Please check your email credentials.');
      console.error('Make sure you\'re using an "app password" if you have 2-factor authentication enabled.');
    }
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

// New route to generate and store a session token
app.get('/api/generate-token', (req, res) => {
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  sessionTokens.add(token);
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
