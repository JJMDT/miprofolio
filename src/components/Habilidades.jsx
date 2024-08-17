import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export const Habilidades = () => {

  const Title = ({text}) =>{
    return <h2 className="display-5 fw-bold  tituloHabilidades">{text}</h2>;
  }

  const Description = ({text}) => {
    return <p className="text-white text-center m-4 habilidades">{text}</p>;

  }
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
  ];
  

  return (
    <div className="text-secondary px-5 py-5 tecnologias">
      <Container>
        <Row className="text-white text-center m-4 ">
          <Col>
           <Title text="Tecnologias utilizadas" />
            
           
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
              <p className='text-white'>
                {tech.descripcion}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
