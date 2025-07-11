import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ProyectSlaider } from "../proyectosData";

export function ListProyect() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/proyecto/${projectId}`);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column py-5" id="enlaceProyectos"
>
      <h2 className="titleProject">Proyectos más recientes</h2>
    <div className="container">
      {ProyectSlaider.map((item, idx) => (
        <div
        className={`row align-items-center mb-5 ${idx % 2 !== 0 ? "flex-row-reverse" : ""}`}
        key={item.id}
        >
          <div className="col-md-6">
            <Card.Img
              variant="top"
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "100%", height: "250px", objectFit: "contain", borderRadius: "10px" }}
              />
          </div>
          <div className="col-md-6">
            <Card.Body>
              <Card.Title className="titulo-Proyecto">{item.title}</Card.Title>
              <Card.Text className="descripcion-Proyecto">{item.description}</Card.Text>
              <Button variant="primary" onClick={() => handleProjectClick(item.id)}>
                Ver proyecto
              </Button>
            </Card.Body>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
}
