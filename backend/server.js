const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/info', (req, res) => {
  res.json({
    name: 'Martin Siles',
    title: 'Desarrollador Full Stack',
    bio: 'Soy un apasionado desarrollador full stack con experiencia en crear soluciones web innovadoras y eficientes. Me especializo en JavaScript y sus frameworks modernos, siempre buscando aprender y aplicar las últimas tecnologías en mis proyectos.',
    skills: [
      'JavaScript', 
      'React', 
      'Node.js', 
      'Python', 
      'MongoDB', 
      'Docker', 
      'AWS',
      'PostgreSQL',  // Nueva habilidad
      'Angular',      // Nueva habilidad
      'Vue',          // Nueva habilidad
      'Kubernetes',   // Nueva habilidad
      'Golang',       // Nueva habilidad
      'Next',         // Nueva habilidad
      'Nest',         // Nueva habilidad
      'Express'       // Nueva habilidad
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
