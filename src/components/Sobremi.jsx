import { Container, Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import { DownloadCVButton } from "./DownloadCVButton";
import Confetti from "react-confetti";

const ProfileImage = ({ src, alt, onClick }) => {
  return <Image className="imgPerfil" src={src} alt={alt} onClick={onClick} />;
};

const Title = ({ text }) => {
  return (
    <h1 className="fw-bold titleAboutMe" id="sobreMi">
      {text}
    </h1>
  );
};

const AboutMe = ({ text }) => {
  return <p className="text-center m-4 aboutMe ">{text}</p>;
};

export const Sobremi = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  // Función que maneja el clic en la imagen de perfil
  const handleProfileClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confeti visible por 3 segundos
  };

  return (
    <div className="bg-dark text-secondary px-5 py-5 text-center sobre-mi centered">
      {showConfetti && <Confetti />}
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <ProfileImage
              src="/assets/profile/retrato.png"
              alt="Foto de Juan José La Terra"
              onClick={handleProfileClick}  // Pasamos onClick como prop
            />
            <Title text="Hola ! soy Juan 👋🏼" />
            <AboutMe
              text="Estudiante de Desarrollo de Software 👨‍💻 Tengo una vision clara y es utilizar 
               la tecnologia simplificar la vida de los demas...
 Me destaco por mi capacidad de aprendizaje, resolución de problemas y trabajo en equipo,
 buscando siempre mejorar y aportar valor a cada proyecto en el que participo.
 Mi objetivo es seguir creciendo profesionalmente en el mundo IT, adquiriendo experiencia y
 enfrentando nuevos desafíos. "
            />
          </Col>
        </Row>
      </Container>
      <DownloadCVButton/>
    </div>
  );
};
