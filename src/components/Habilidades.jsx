import { Container, Row, Col } from 'react-bootstrap';

export const Habilidades = () => {
  return (
    <div className="text-secondary px-5 py-5">
      <Container>
        {/* Sección de texto */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="titulo-habilidades">
              Un vistazo a las tecnologías que utilizo
            </h2>
            <p>
              Mi conjunto de competencias tecnológicas: Abordando desde los
              Fundamentos Esenciales como HTML, CSS y JavaScript, hasta la
              Creación de Experiencias con Bootstrap y Node.js. Gestionando
              Datos Eficientemente con MySQL y Adoptando la Colaboración y el
              Control de Versiones a través de GitHub...
            </p>
          </Col>
        </Row>

        {/* Sección de imágenes */}
        <Row className="text-center">
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/html.png" alt="HTML" width="100" loading="lazy" />
          </Col>
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/css.png" alt="CSS" width="100" loading="lazy" />
          </Col>
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/js.png" alt="JavaScript" width="100" loading="lazy" />
          </Col>
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/bootstrap.png" alt="Bootstrap" width="100" loading="lazy" />
          </Col>
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/nodejs.png" alt="Node.js" width="100" loading="lazy" />
          </Col>
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/mysql.png" alt="MySQL" width="100" loading="lazy" />
          </Col>
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/github.png" alt="GitHub" width="100" loading="lazy" />
          </Col>
          <Col xs={6} sm={3} className="mb-4">
            <img src="src/assets/react.png" alt="React" width="100" loading="lazy" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
