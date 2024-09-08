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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
