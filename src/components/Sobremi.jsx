import { Container, Row, Col, Image } from "react-bootstrap";

const ProfileImage = ({ src, alt }) => {
  return <Image className="imgPerfil" src={src} alt={alt} />;
};

const Title = ({ text }) => {
  return (
    <h1 className=" fw-bold  titleAboutMe" id="sobreMi">
      {text}
    </h1>
  );
};

const AboutMe = ({ text }) => {
  return <p className="text-center m-4 aboutMe ">{text}</p>;
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
              text="Estudiante de Desarrollo de Software 👨‍💻 con un vision clara.
Utilizar la tecnologia para mejorar la vida de los demas...
Como padre de familia 👨‍👨‍👧‍👧, entiendo la importancia de simplificar las cosas
para que todos puedan disfrutar de mas tiempo y energia para lo que realmente importa.

Mi pasion por la tecnologia me llevo a elegir la programacion 👨🏼‍💻 como carrera,
y mi objetivo 🎯 es crear sistemas que faciliten la vida diaria de las personas.

Me motiva investigar🕵🏼‍♂️ y aprender 📚 para ofrecer soluciones innovadoras 💡.
Pienso que la tecnologia debe ser una herramienta para ayudar a los demas, no solo una forma
de avanzar en mi carrera."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
