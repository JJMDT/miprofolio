import React from 'react';

const Section = ({ title, institution, period, details }) => (
  <div className="mt-4">
    <h3 className="text-white">{title}</h3>
    <p className="text-secondary">{institution}</p>
    <p className="text-secondary">{period}</p>
    {details && <p className="text-secondary">{details}</p>}
  </div>
);


export const FormacionAcademica = () => {
    return (
      <div className="bg-dark text-secondary px-5 py-5">
        <div className="container">
          <h2 className="text-white text-center m-4">Formación Académica</h2>
          <div className="row p-4">
            <div className="col-md-6">
              <Section
                title="Técnico en Informática"
                institution="Escuela de Educación Secundaria Técnica Nº 1 Raúl Scalabrini Ortiz"
                period="2012 - Finalizado"
                details="Título de Técnico en Informática Personal y Profesional."
              />
              <Section
                title="Desarrollo de Software"
                institution="Instituto de Formación Técnica Superior N°11"
                period="2023 - Actualidad"
                details="Conocimientos adquiridos en técnicas de programación, POO en C#, diagramas Entidad Relación, manejo de BBDD MySQL Server, e Inglés Técnico."
              />
              <Section
                title="Desarrollo Web Inicial"
                institution="UTN Argentina Programa 4.0"
                period="2023 - Finalizado"
              />
            </div>
            <div className="col-md-6">
              <Section
                title="Desarrollo Web con React"
                institution="UTN Argentina Programa 4.0"
                period="2023 - Finalizado"
                details="Desarrollo de aplicaciones con componentes funcionales, hooks, consumo de APIs, y manejo de eventos dinámicos."
              />
              <Section
                title="Full Stack con Node.js"
                institution="CODO A CODO"
                period="2023 - Finalizado"
                details="Desarrollo Frontend con HTML, CSS, JavaScript, Bootstrap; Backend con Node.js, Express.js; y manejo de BBDD con MySQL Workbench."
              />
              <Section
                title="SQL"
                institution="Instituto de Formación Política y Gestión Pública"
                period="2023 - Finalizado"
                details="Conceptos de CRUD, diseño y manejo de BBDD relacionales, y consultas SQL."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };