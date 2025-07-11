import { useParams, useNavigate } from "react-router-dom";
import { ProyectSlaider } from "../proyectosData";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

export const DetalleProyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Buscar el proyecto por ID
  const proyecto = ProyectSlaider.find(p => p.id === parseInt(id));
  
  if (!proyecto) {
    return (
      <Container className="mt-5 text-center">
        <h2>Proyecto no encontrado</h2>
        <Button variant="primary" onClick={() => navigate("/")}>
          <ArrowBackIcon style={{ marginRight: '8px' }} />
          Volver al inicio
        </Button>
      </Container>
    );
  }

return (
    <Container fluid className="py-5" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <Container>
            {/* Botón de regreso arriba */}
            <Row className="mb-4">
                <Col>
                    <Button
                        variant="outline-primary"
                        onClick={() => navigate("/")}
                        className="d-flex align-items-center"
                    >
                        <ArrowBackIcon style={{ marginRight: '8px' }} />
                        Volver al portfolio
                    </Button>
                </Col>
            </Row>

            {/* Dos columnas: imágenes e información */}
            <Row>
                {/* Columna de imágenes con slider */}
                <Col lg={6} className="mb-4">
                    
                        <div style={{ position: "relative" }}>
                            {/* Slider de imágenes */}
                            <img
                                src={proyecto.images && proyecto.images.length > 0 ? proyecto.images[sliderIndex] : proyecto.imageUrl}
                                alt={proyecto.title}
                                className="w-100"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                            {/* Botones de navegación */}
                            {proyecto.images && proyecto.images.length > 1 && (
                                <>
                                    <Button
                                        variant="light"
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "10px",
                                            transform: "translateY(-50%)",
                                            zIndex: 2,
                                            opacity: 0.7
                                        }}
                                        onClick={() =>
                                            setSliderIndex((prev) =>
                                                prev === 0 ? proyecto.images.length - 1 : prev - 1
                                            )
                                        }
                                    >
                                        {"<"}
                                    </Button>
                                    <Button
                                        variant="light"
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "10px",
                                            transform: "translateY(-50%)",
                                            zIndex: 2,
                                            opacity: 0.7
                                        }}
                                        onClick={() =>
                                            setSliderIndex((prev) =>
                                                prev === proyecto.images.length - 1 ? 0 : prev + 1
                                            )
                                        }
                                    >
                                        {">"}
                                    </Button>
                                </>
                            )}
                        </div>
                        {/* Indicadores */}
                        {proyecto.images && proyecto.images.length > 1 && (
                            <div className="d-flex justify-content-center mt-2">
                                {proyecto.images.map((_, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: idx === sliderIndex ? "#0d6efd" : "#ccc",
                                            display: "inline-block",
                                            margin: "0 4px"
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    
                </Col>
                <Col lg={6}>
                    <Card className="w-100">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as="h1" className="mb-3 text-primary">
                                {proyecto.title}
                            </Card.Title>
                            <Card.Text className="mb-4 flex-grow-1" style={{ fontSize: "1.1rem" }}>
                                {proyecto.description}
                            </Card.Text>
                            <div className="mb-4">
                                <h5 className="text-secondary mb-2">Tecnologías utilizadas:</h5>
                                <p className="text-muted">{proyecto.stack}</p>
                            </div>
                            <div className="d-flex gap-3 mt-auto">
                                {proyecto.link && (
                                    <Button
                                        variant="primary"
                                        href={proyecto.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="d-flex align-items-center"
                                    >
                                        <LaunchIcon style={{ marginRight: '8px' }} />
                                        Ver
                                    </Button>
                                )}
                                <Button
                                    variant="outline-secondary"
                                    className="d-flex align-items-center"
                                >
                                    <GitHubIcon style={{ marginRight: '8px' }} />
                                    Ver código
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Container>
);
};