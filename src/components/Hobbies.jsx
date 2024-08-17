import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Hobbies = () => {
  const Section = ({ title, icon }) => (
    <div className="mb-4 ">
      <h3 style={{ color: "white" }}>
        <span style={{ color: "skyblue" }}>
        <i className={`bi ${icon}`} style={{ marginRight: '10px' }}></i>
        </span>
        {title}
      </h3>
    </div>
  );

  return (
    <section>
      <div className="hobbies text-secondary px-5 py-5" id="enlaceFormacion">
        <div className="container">
          <h2 className="text-white text-center m-4">
            <i
              className="bi bi-star"
              style={{ fontSize: "50px", color: "orange", padding: "10px" }}
            ></i>
            Mis Entretenimientos
          </h2>
          <div className="row p-4">
            <div className="col-md-6">
              <Section title="Pasar tiempo en familia" icon="bi-house" />
              <Section title="Realizar actividad al aire libre" icon="bi bi-sun" />
              <Section title="Deportes y actividad fisica" icon="bi-dribbble" />
            </div>
            <div className="col-md-6">
              <Section title="Realizar proyectos de aplicaciones" icon="bi-laptop" />
              <Section title="Inversiones de acciones, CEDEARs" icon="bi-graph-up" />
              <Section title="Tecnología" icon="bi-tools" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};