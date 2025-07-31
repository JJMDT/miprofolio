import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de incluir Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Asegúrate de incluir Bootstrap Icons CSS
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DownloadCVButton } from "./DownloadCVButton";


export const FormacionAcademica = () => {
  const FormacionData = [{
    title: "Desarrollo de Software",
    institution: "Instituto de Formación Técnica Superior N°11",
    period: "2023 - Actualidad",
    details: "Conocimientos adquiridos, POO en C# y TypeScript, diagramas Entidad Relación, manejo de BBDD MySQL Server, Inglés Técnico, Desarrollo de aplicaciones moviles con Ionic y Angular, Bases en metodologias de pruebas diseño y casos de pruebas (testing), Conocimientos en TICs y esquemas de distribusion de red.",
    icon: <FaLaptopCode />
  },{
    title: "Técnico en Informática",
    institution: "Escuela de Educación Secundaria Técnica Nº 1 Raúl Scalabrini Ortiz",
    period: "2012 - Finalizado",
    details: "Título de Técnico en Informática Personal y Profesional.",
    icon: <FaTools />
  },{
    title: "AWS Academy Cloud Foundations",
    institution: "Amazon Web Services (AWS)",
    period: "2025 - Finalizado",
    details: "Introducción a los fundamentos del cloud computing y a los servicios principales de AWS. Incluyó conceptos como modelos de servicio (IaaS, PaaS, SaaS), regiones y zonas de disponibilidad, IAM, EC2, S3, RDS, VPC, arquitectura en la nube, seguridad, facturación y buenas prácticas.",
    Credential: "https://www.credly.com/go/FBqDpg66",
    icon: <FaAws />
   },
  //{
  //   title: "Desarrollo Web con React",
  //   institution: "UTN Argentina Programa 4.0",
  //   period: "2023 - Finalizado",
  //   details: "Desarrollo de aplicaciones con componentes funcionales, hooks, consumo de APIs, y manejo de eventos dinámicos.",
  //   icon: <FaLaptop />
  // },
  {
    title: "Full Stack con Node.js",
    institution: "CODO A CODO",
    period: "2023 - Finalizado",
    details: "Desarrollo Frontend con HTML, CSS, JavaScript, Bootstrap; Backend con Node.js, Express.js; y manejo de BBDD con MySQL Workbench.",
    icon:<FaNodeJs />
  },
  //{
  //   title: "SQL",
  //   institution: "Instituto de Formación Política y Gestión Pública",
  //   period: "2023 - Finalizado",
  //   details: "Conceptos de CRUD, diseño y manejo de BBDD relacionales, y consultas SQL.",
  //   icon: <FaDatabase />
  // },
  {
    title: "React",
    institution: "ui.dev",
    period: "Finalizado",
    details: "Desarrollo de aplicaciones con React utilizando componentes funcionales, props, hooks y manejo de estado local y global. Incluyó React Router para navegación, consumo de APIs, manejo de eventos dinámicos y estructuras de componentes reutilizables.",
    icon: <FaReact />
  },
  {
    title:"TypeScript",
    institution:"ui.dev",
    period:"Finalizado",
    details:"Bases en TypeScript, tipos, interfaces, clases, y manejo de errores.",
    icon: <SiTypescript />
  }
]
  
return (

  <section>
    <div className="bg-dark text-secondary px-5 py-5" id="enlaceFormacion">
        <div
          className="container d-flex  justify-content-center align-items-center"
          style={{ flexDirection: "column" }}
        >
          <h2 className="  fw-bold  text-center  titleFormacion">
            <i
              className="bi bi-mortarboard"
              style={{ fontSize: "50px", color: "white", padding: "10px" }}
            ></i>
            Formación Académica
          </h2>
          </div>
      </div>
    <div className="container">
      <div className="row">
        {FormacionData.map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="cursos">
              <h3 className="titileCurso">
                <i className={`iconoFormacion bi ${item.icon}`}>  
                {item.icon}
                </i>
                {item.title}
              </h3>
              <h5 className="institucion">{item.institution}</h5>
              <p className="periodo">
                <strong>Periodo:</strong> {item.period}
              </p>
              {item.details && <p className="details">{item.details}</p>}
            </div>
            {item.Credential && (
              <a href={item.Credential} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Ver Credencial
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="boton" style={{ textAlign: "center", margin: "50px" }}>

      <DownloadCVButton />
      </div>
    </div>
  </section>
);
};