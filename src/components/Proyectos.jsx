import React from "react";
import Table from "react-bootstrap/Table";
import { proyectosData } from "../proyectosData";

const Title = ({ text }) => {
  return <h2 className="titleProject">{text}</h2>;
};

const Description = ({ text }) => {
  return <p className="subtitleProject">{text}</p>;
};

export const Proyectos = () => {
  return (
    <>
      <section
        id="enlaceProyectos"
        className="py-5 text-center backgroundDark proyectos"
      >
        <div className="container">
          <div className="col-lg col-md-auto mx-auto">
            <Title text="Proyectos más recientes" />
            
          </div>

          <div className="mt-4">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Stack</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {proyectosData.slice().reverse().map((proyecto, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{proyecto.title}</td>
                    <td>{proyecto.description}</td>
                    <td>{proyecto.stack}</td>
                    <td>
                      <a
                        id="linkProyecto"
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;
