import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import {Footer} from "./Footer";


export const DetalleProyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const proyecto = ProyectSlaider.find((p) => p.id === parseInt(id));

  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Se ejecuta cuando cambia el ID del proyecto

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
    <div>

    <Container fluid className=" min-vh-100 backgroundDark " >
      <Container className="py-4 ">
        <Button
          variant="outline-primary"
          onClick={() => navigate("/")}
          className="me-2"
          >
          <ArrowBackIcon className="me-1" />
          Volver
        </Button>

        <Row>
          <Col lg={8} className="mx-auto d-flex justify-content-between align-items-center flex-column ">
            {/* Project Header */}
            <Box className="mb-4 d-flex justify-content-between align-items-center flex-column">
              <Typography variant="h2" component="h1" className="text-white fw-bold mb-3">
                {proyecto.title}
              </Typography>
   
              <Typography variant="h5" className="mb-4 text-white text-center"> 
                {proyecto.description}
              </Typography>
            </Box>

        
            {/* Technologies Section */}
            <Box className="mb-4 text-white py-5 d-flex justify-content-between align-items-center flex-column">
              <Typography variant="h4" className="fw-bold mb-3">
                Tecnologías Utilizadas
              </Typography>
              <Box className="d-flex flex-wrap gap-2">
                {proyecto?.stack ? proyecto.stack.split(", ").map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech.trim().toUpperCase()}
                    variant="filled"
                    color="primary"
                    style={{ cursor: "default" }}
                    />
                  )) : null}
              </Box>
            </Box>
            {/* Action Buttons */}
            <Box className="mb-4 text-white ">
           
              <Button
              // Cambia el tipo de botón a outline
              variant="outline-primary"
              href={proyecto.link}
              target="_blank"
              >
                <LaunchIcon className="me-2 " />
                Ver Proyecto
              </Button>
            </Box>

            {/* Media Selection Buttons */}
            
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
                  {proyecto.snapshot.map((media, index) => {
                    // Función para detectar si es un video por la extensión
                    const isVideo = (url) => {
                      const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov'];
                      return videoExtensions.some(ext => url.toLowerCase().includes(ext));
                    };

                    return (
                      <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        {isVideo(media) ? (
                          <video 
                            src={media} 
                            className="d-block w-100" 
                            controls
                            muted
                            autoPlay
                            loop
                            style={{ 
                              height: "400px", 
                              objectFit: "contain" 
                            }}
                          >
                            Tu navegador no soporta la reproducción de videos.
                          </video>
                        ) : (
                          <img 
                            src={media} 
                            className="d-block w-100" 
                            alt={`Screenshot ${index + 1} del proyecto ${proyecto.title}`}
                            style={{ 
                              height: "400px", 
                              objectFit: "contain" 
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
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
          </Col>
        </Row>
      </Container>
    </Container>
      <Footer />
              </div>
  );
};
