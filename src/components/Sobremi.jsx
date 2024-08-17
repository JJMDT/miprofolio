import { Container, Row, Col,Image  } from 'react-bootstrap';

const ProfileImage = ({ src, alt }) => {
  return <Image className="imgPerfil" src={src} alt={alt} />;
};

const Title = ({ text }) => {
  return <h1 className="display-5 fw-bold text-white titulo">{text}</h1>;
};

const AboutMe = ({text}) => {
  return <p className="mb-4 textoSobreMi">{text}</p>;
}

export const Sobremi = () => {
  return (
    <div className="bg-dark text-secondary px-5 py-5 text-center sobre-mi centered" id='enlaceformacion'>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>

          {/* <Image className='imgPerfil' src="/assets/perfil1.jfif" /> */}
          <ProfileImage src="/assets/perfil1.jfif" alt="Foto de Juan José La Terra" />
            <div id="sobreMi"></div>
         
            <Title text="Hola ! soy Juan 👋🏼" />
            <AboutMe text="Soy un apasionado desarrollador con experiencia en frontend y backend.
              Disfruto creando soluciones innovadoras y proyectos desde cero. Siempre estoy en busca de nuevos desafíos y
              oportunidades para aprender. Estoy comprometido en ofrecer soluciones completas y atractivas que combinen
              tecnología y diseño para satisfacer las necesidades de los usuarios. ¡Espero con entusiasmo las
              oportunidades que el futuro traerá a mi camino!" />
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};
