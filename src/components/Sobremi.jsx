import { Container, Row, Col } from 'react-bootstrap';

export const Sobremi = () => {
  return (
    <div className="bg-dark text-secondary px-5 py-5 text-center sobre-mi centered">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div id="enlace1"></div>
            <h1 className="display-5 fw-bold text-white titulo" id="sobremi">
              Hola! soy Juan José La Terra
            </h1>
            <p className="mb-4 textoSobreMi">
              Soy un apasionado desarrollador con experiencia en frontend y backend.
              Disfruto creando soluciones innovadoras y proyectos desde cero. Siempre estoy en busca de nuevos desafíos y
              oportunidades para aprender. Estoy comprometido en ofrecer soluciones completas y atractivas que combinen
              tecnología y diseño para satisfacer las necesidades de los usuarios. ¡Espero con entusiasmo las
              oportunidades que el futuro traerá a mi camino!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
