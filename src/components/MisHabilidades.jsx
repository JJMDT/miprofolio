import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Container, Row, Col } from 'react-bootstrap';


const MisHabilidades = () => {
  const softskills = ["Iniciativa", "Resolucion de problemas y orientacion a resultados", "Perseverancia y determinacion", "Adaptabilidad", "Trabajo en equipo", "Empatia e Inteligencia emocional","Responsavilidad"];
  const hardskills = ["HTML", "CSS", "JavaScript", "Bootstrap","Material UI", "Figma", "Visual Studio Code", "Node.js", "React", "MySQL", "C#", "Git / Github", "Angular", "Ionic", "Typescript"];

  const tecnologias = [
    { src: '/assets/tools/html.png', alt: 'HTML', descripcion: 'Estructura y semántica de páginas web' },
    { src: '/assets/tools/css.png', alt: 'CSS', descripcion: 'Diseño y estilo de interfaces' },
    { src: '/assets/tools/js.png', alt: 'JavaScript', descripcion: 'Interactividad y lógica en el navegador' },
    { src: '/assets/tools/bs.png', alt: 'Bootstrap', descripcion: 'Framework para diseño responsivo y componentes' },
    { src: '/assets/tools/figma.png', alt: 'Figma', descripcion: 'Herramienta de diseño colaborativo para interfaces y prototipos' },
    { src: '/assets/tools/vsc.png', alt: 'Visual Studio Code', descripcion: 'Editor de código fuente con soporte para múltiples lenguajes y extensiones' },
    { src: '/assets/tools/nodejs.png', alt: 'Node.js', descripcion: 'Entorno de ejecución para JavaScript en el servidor' },
    { src: '/assets/tools/react.png', alt: 'React', descripcion: 'Biblioteca para construir interfaces de usuario interactivas' },
    { src: '/assets/tools/mysql.png', alt: 'MySQL', descripcion: 'Sistema de gestión de bases de datos relacional' },
    { src: '/assets/tools/csharp.png', alt: 'C#', descripcion: 'Lenguaje de programación para desarrollo en .NET' },
    { src: '/assets/tools/visual.png', alt: 'Visual Studio', descripcion: 'Editor de código fuente con soporte para múltiples lenguajes y extensiones' },
    { src: '/assets/tools/github.png', alt: 'GitHub', descripcion: 'Plataforma para control de versiones y colaboración' },
    { src: '/assets/tools/angular.png', alt: 'Angular', descripcion: 'Framework para construir aplicaciones web' },
    { src: '/assets/tools/ionic.png', alt: 'Ionic', descripcion: 'Framework para construir aplicaciones móviles' },
    { src: '/assets/tools/ts.png', alt: 'Typescript', descripcion: 'Lenguaje de programación tipado y basado en JavaScript' },
  ];
  return (
    <section>
      <div className="hobbiesContainer backgroundDark py-5" id="misHabilidades">
        <div className="container hobbiesContainerTitle">
          <h2 className=" fw-bold  text-center  titleHobbies">
            <i className="bi bi-star star" style={{padding:'20px'}}></i>
            Mis Habilidades 
            <i className="bi bi-star star" style={{padding:'20px'}}></i>
           
          </h2>
                <li className="habilidades">💡 Proactividad: Siempre en busca de nuevos desafíos y oportunidades para aprender.</li>
                <li className="habilidades">🔧 Resolución de problemas: Enfoque práctico y analítico para encontrar soluciones eficientes.</li>
                <li className="habilidades">🏁 Orientación a resultados: Foco constante en alcanzar objetivos concretos y de calidad.</li>
                <li className="habilidades">🔥 Perseverancia y determinación: Enfrento los desafíos con constancia y motivación hasta alcanzar las metas.</li>
                <li className="habilidades">🔄 Adaptabilidad: Capacidad para aprender tecnologías nuevas y adaptarme a equipos y entornos dinámicos.</li>
                <li className="habilidades">🤝 Trabajo en equipo: Buena comunicación y colaboración, priorizando objetivos comunes.</li>
                <li className="habilidades">📈 Compromiso y responsabilidad: Cumplimiento de tareas, organización y constancia.</li>
                <li className="habilidades">🧘‍♂️ Inteligencia emocional: Manejo de la presión y construcción de relaciones laborales sanas.</li>
              
            </div>
            </div>
          </section>
   
  );
};

export default MisHabilidades;