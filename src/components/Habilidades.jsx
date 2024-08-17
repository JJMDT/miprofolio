import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export const Habilidades = () => {

  const Title = ({text}) =>{
    return <h2 className="display-5 fw-bold  titulo">{text}</h2>;
  }

  const Description = ({text}) => {
    return <p className="mb-4 ">{text}</p>;

  }
  const tecnologias = [
    { src: '/assets/html.png', alt: 'HTML', descripcion: 'Estructura y semántica de páginas web' },
    { src: '/assets/css.png', alt: 'CSS', descripcion: 'Diseño y estilo de interfaces' },
    { src: '/assets/js.png', alt: 'JavaScript', descripcion: 'Interactividad y lógica en el navegador' },
    { src: '/assets/bootstrap.png', alt: 'Bootstrap', descripcion: 'Framework para diseño responsivo y componentes' },
    { src: '/assets/figma.png', alt: 'Figma', descripcion: 'Herramienta de diseño colaborativo para interfaces y prototipos' },
    { src: '/assets/vsc.png', alt: 'Visual Studio Code', descripcion: 'Editor de código fuente con soporte para múltiples lenguajes y extensiones' },
    { src: '/assets/nodejs.png', alt: 'Node.js', descripcion: 'Entorno de ejecución para JavaScript en el servidor' },
    { src: '/assets/react.png', alt: 'React', descripcion: 'Biblioteca para construir interfaces de usuario interactivas' },
    { src: '/assets/mysql.png', alt: 'MySQL', descripcion: 'Sistema de gestión de bases de datos relacional' },
    { src: '/assets/c.png', alt: 'C#', descripcion: 'Lenguaje de programación para desarrollo en .NET' },
    { src: '/assets/vs.png', alt: 'Visual Studio', descripcion: 'Editor de código fuente con soporte para múltiples lenguajes y extensiones' },
    { src: '/assets/github.png', alt: 'GitHub', descripcion: 'Plataforma para control de versiones y colaboración' },
  ];
  

  return (
    <div className="text-secondary px-5 py-5">
      <Container>
        {/* Sección de texto */}
        <Row className="text-center mb-4">
          <Col>
           <Title text="Tecnologias" />
           <Description text="Estas son las tecnologias y herramientas utilizadas a lo largo de mi aprendizaje
           Abordando desde los fundamentos escenciales como HTML CSS JS, hasta la creacion de experiencias mas lindas con Bootstrap, react y node js,
           gestionando datos eficientemente con la utilizacion de bases de datos" />
            
           
          </Col>
        </Row>

        {/* Sección de imágenes */}
        <Row className="text-center">
          {tecnologias.map((tech, index) => (
            <Col xs={6} sm={2} className="mb-4" key={index}>
              <img
                src={tech.src}
                alt={tech.alt}
                width="100"
                loading="lazy"
                className="img-fluid"
              />
              <p>
                {tech.descripcion}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
