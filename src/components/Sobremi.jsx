import { Container, Row, Col, Image } from "react-bootstrap";

const ProfileImage = ({ src, alt }) => {
  return <Image className="imgPerfil" src={src} alt={alt} />;
};

const Title = ({ text }) => {
  return (
    <h1 className="display-4 fw-bold text-white titulo" id="sobreMi">
      {text}
    </h1>
  );
};

const AboutMe = ({ text }) => {
  return <p className="text-white text-center m-4 aboutMe ">{text}</p>;
};

export const Sobremi = () => {
  return (
    <div className="bg-dark text-secondary px-5 py-5 text-center sobre-mi centered">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} >
            <ProfileImage
              src="/assets/perfil1.jfif"
              alt="Foto de Juan José La Terra"
            />
            <Title text="Hola ! soy Juan 👋🏼" />
            <AboutMe
              text="Soy un apasionado desarrollador con experiencia en frontend y backend.
              Disfruto creando soluciones innovadoras y proyectos desde cero. Siempre estoy en busca de nuevos desafíos y
              oportunidades para aprender. Estoy comprometido en ofrecer soluciones completas y atractivas que combinen
              tecnología y diseño para satisfacer las necesidades de los usuarios. ¡Espero con entusiasmo las
              oportunidades que el futuro traerá a mi camino!"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
