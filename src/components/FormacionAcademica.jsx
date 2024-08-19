import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de incluir Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Asegúrate de incluir Bootstrap Icons CSS
import { DownloadCVButton } from "./DownloadCVButton";

const Section = ({ title, institution, period, details, icon }) => (
  <div className="mb-4 cursos">
    <h3 className="titileCurso" >
      <i className={`iconoFormacion bi ${icon}`}></i>
      {title}
    </h3>
    <h5 className="institucion">{institution}</h5>
    <p className="periodo"> 
      <strong>Periodo:</strong> {period}
    </p>
    {details && <p className="details" >{details}</p>}
  </div>
);

export const FormacionAcademica = () => {
  return (
    <section>
      <div className="bg-dark text-secondary px-5 py-5" id="enlaceFormacion">
        <div
          className="container d-flex  justify-content-center align-items-center"
          style={{ flexDirection: "column" }}
        >
          <h2 className=" text-center  titleFormacion">
            {" "}
            <i
              className="bi bi-mortarboard"
              style={{ fontSize: "50px", color: "white", padding: "10px" }}
            ></i>
            Formación Académica
          </h2>
          <div className="row p-4">
            <div className="col-md-6">
              <Section
                title="Desarrollo de Software"
                institution="Instituto de Formación Técnica Superior N°11"
                period="2023 - Actualidad"
                details="Conocimientos adquiridos en técnicas de programación, POO en C#, diagramas Entidad Relación, manejo de BBDD MySQL Server, e Inglés Técnico."
                icon="bi-bookmark-heart"
              />
              <Section
                title="Técnico en Informática"
                institution="Escuela de Educación Secundaria Técnica Nº 1 Raúl Scalabrini Ortiz"
                period="2012 - Finalizado"
                details="Título de Técnico en Informática Personal y Profesional."
                icon="bi-bookmark-check"
              />
              <Section
                title="Desarrollo Web Inicial"
                institution="UTN Argentina Programa 4.0"
                period="2023 - Finalizado"
                details="Base sólida en desarrollo web , incluyó la creación de sitios web utilizando HTML, CSS, JS así como la introducción a conceptos de diseño web responsivo y accesibilidad."
                icon="bi-laptop"
              />
            </div>
            <div className="col-md-6">
              <Section
                title="Desarrollo Web con React"
                institution="UTN Argentina Programa 4.0"
                period="2023 - Finalizado"
                details="Desarrollo de aplicaciones con componentes funcionales, hooks, consumo de APIs, y manejo de eventos dinámicos."
                icon="bi-columns-gap"
              />
              <Section
                title="Full Stack con Node.js"
                institution="CODO A CODO"
                period="2023 - Finalizado"
                details="Desarrollo Frontend con HTML, CSS, JavaScript, Bootstrap; Backend con Node.js, Express.js; y manejo de BBDD con MySQL Workbench."
                icon="bi-stack"
              />
              <Section
                title="SQL"
                institution="Instituto de Formación Política y Gestión Pública"
                period="2023 - Finalizado"
                details="Conceptos de CRUD, diseño y manejo de BBDD relacionales, y consultas SQL."
                icon="bi-database"
              />
            </div>
          </div>
          <DownloadCVButton />
        </div>
      </div>
    </section>
  );
};
