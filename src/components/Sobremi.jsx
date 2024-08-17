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
          <Col lg={12}>
            <ProfileImage
              src="/assets/perfil1.jfif"
              alt="Foto de Juan José La Terra"
            />
            <Title text="Hola ! soy Juan 👋🏼" />
            <AboutMe
              text="Soy estudiante de la carrera de Desarrollo de Software con habilidades destacadas para el trabajo en equipo,
organización y responsabilidad. Me considero proactivo, disfruto aprendiendo y adquiriendo nuevas
experiencias. Busco un puesto desafiante y dinámico donde pueda aportar mis conocimientos y, al mismo
tiempo, seguir desarrollándome profesionalmente"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
