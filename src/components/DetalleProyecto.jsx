import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProyectSlaider } from "../proyectosData";
import {
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Box, Chip, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";


export const DetalleProyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMedia, setSelectedMedia] = useState('image'); // 'image' o 'video'

  const proyecto = ProyectSlaider.find((p) => p.id === parseInt(id));

  // Video random de YouTube
  const randomVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  // Datos hardcodeados temporales
  const projectData = {
    screenshots: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
    ],
    technologies: proyecto?.stack ? proyecto.stack.split(", ") : [],
    githubRepo: "https://github.com/usuario/proyecto",
    liveDemo: proyecto?.link || "#",
  };

  if (!proyecto) {
    return (
      <Container className="mt-5 text-center">
        <Box sx={{ py: 5 }}>
          <Typography variant="h4" gutterBottom>
            Proyecto no encontrado
          </Typography>
          <Button
            variant="primary"
            onClick={() => navigate("/")}
            className="mt-3"
          >
            <ArrowBackIcon style={{ marginRight: "8px" }} />
            Volver al inicio
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container fluid className=" min-vh-100 backgroundDark" >
      <Container className="py-4">
        <Button
          variant="outline-primary"
          onClick={() => navigate("/")}
          className="me-2"
        >
          <ArrowBackIcon className="me-1" />
          Volver
        </Button>

        <Row>
          <Col lg={8} className="mx-auto ">
            {/* Project Header */}
            <Box className="mb-4">
              <Typography variant="h3" component="h1" className="text-white fw-bold mb-3">
                {proyecto.title}
              </Typography>
              <Typography variant="h6"  className="mb-3 text-white ">
                {proyecto.subtitle}
              </Typography>
              <Typography variant="body1" className="mb-4 text-white ">
                {proyecto.description}
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box className="mb-4 text-white ">
           
              <Button
                variant="primary"
                href={proyecto.link}
                target="_blank"
              >
                <LaunchIcon className="me-2 " />
                Ver Proyecto
              </Button>
            </Box>

            {/* Media Selection Buttons */}
            <Box className="mb-3 text-white ">
              <Typography variant="h6" className="mb-2">
                Vista previa del proyecto:
              </Typography>
             
            </Box>
            
            {/* Main Image/Video */}
            {proyecto.snapshot && proyecto.snapshot.length > 0 ? (
              <div id="carouselExampleIndicators" className="carousel slide w-100">
                <div className="carousel-indicators">
                  {proyecto.snapshot.map((_, index) => (
                    <button 
                      key={index}
                      type="button" 
                      data-bs-target="#carouselExampleIndicators" 
                      data-bs-slide-to={index} 
                      className={index === 0 ? "active" : ""} 
                      aria-current={index === 0 ? "true" : undefined}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {proyecto.snapshot.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img 
                        src={image} 
                        className="d-block w-100" 
                        alt={`Screenshot ${index + 1} del proyecto ${proyecto.title}`}
                        style={{ 
                          height: "400px", 
                          objectFit: "contain" 
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                {proyecto.snapshot.length > 1 && (
                  <>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div 
                className="d-flex align-items-center justify-content-center bg-secondary text-white"
                style={{ height: "400px", borderRadius: "0.375rem" }}
              >
                <Typography variant="h6">
                  No hay imágenes disponibles para este proyecto
                </Typography>
              </div>
            )}

        

            {/* Technologies Section */}
            <Box className="mb-4 text-white ">
              <Typography variant="h5" className="fw-bold mb-3">
                Tecnologías Utilizadas
              </Typography>
              <Box className="d-flex flex-wrap gap-2">
                {projectData.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech.trim()}
                    variant="outlined"
                    color="primary"
                    style={{ cursor: "default" }}
                  />
                ))}
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
