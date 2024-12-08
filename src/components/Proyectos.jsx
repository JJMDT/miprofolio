import React from "react";
import { ListProyect } from "./ListProyect";
import { Accordion } from "react-bootstrap";
import { proyectosData } from "../proyectosData";



const Title = ({ text }) => {
  return <h2 className="  titleProject">{text}</h2>;
};

const Description = ({ text }) => {
  return <p className="subtitleProject">{text}</p>;
};

// Filtra proyectos por tipo y genera una lista de proyectos por cada tipo
const getProyectosByType = (type) => {
  return proyectosData.filter(proyecto => proyecto.type === type);
};

const tiposDeProyectos = ["web", "app"];

export const Proyectos = () => {
    return (
      <>
        <section id="enlaceProyectos" className="py-5 text-center backgroundDark proyectos">
          <div className="container">
            <div className="col-lg- col-md-auto mx-auto">
              <Title text="Proyectos más recientes" />
              <Description text="proyectos realizados" />
            </div>
  
            <div className="d-flex flex-wrap justify-content-center">
              <Accordion className="acordionProject" >
                {tiposDeProyectos.map((tipo, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header className="acordionTitleProject">{tipo} Projects</Accordion.Header>
                    <Accordion.Body>
                      <div className="  d-flex flex-wrap justify-content-center">
                        {getProyectosByType(tipo).map((proyecto, idx) => (
                          <div className="p-2 "  key={idx}>
                            <ListProyect
                              title={proyecto.title}
                             // subtitle={proyecto.subtitle}
                              description={proyecto.description}
                              imageUrl={proyecto.imageUrl}
                              link={proyecto.link}
                            />
                          </div>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </>
  );
};
