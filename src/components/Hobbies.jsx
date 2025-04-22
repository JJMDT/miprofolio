import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Hobbies = () => {
  const hobbys = [
    { title: "Pasar tiempo en familia", icon: "bi-house" },
    { title: "Tecnología", icon: "bi-tools" },
    { title: "Cocinar", icon: "bi bi-cup-straw" },
    { title: "Jugar videojuegos", icon: "bi bi-controller" },
    { title: "Realizar actividad al aire libre", icon: "bi bi-sun" },
    { title: "Inversiones de acciones, CEDEARs", icon: "bi-graph-up" },
    { title: "Deportes y actividad fisica", icon: "bi-dribbble" },
    { title: "Desarrollar aplicaciones", icon: "bi bi-code-slash" },
    { title: "Ver series y películas", icon: "bi bi-camera-reels" },
    { title: "Aprender cosas nuevas", icon: "bi bi-lightbulb" },
    { title: "Escuchar música", icon: "bi-music-note-beamed" },
    { title: "Investigar y aprender", icon: "bi bi-binoculars" },
  ];

  const Section = ({ title, icon }) => (
    <div className="mb-4 containerTitle ">
      <h3 className="titleHobbie ">
        <span style={{ color: "skyblue" }}>
          <i className={`iconHobbies ${icon}`}></i>
        </span>
        {title}
      </h3>
    </div>
  );

  return (
    <section>
      <div className="hobbiesContainer backgroundDark px-5 py-5">
        <div className="container hobbiesContainerTitle">
          <h2 className=" fw-bold  text-center  m-4 titleHobbies">
            <i className="bi bi-star star"></i>
            Interes y Entretenimiento
          </h2>
          <div className="row p-4">
            {hobbys.map((hobby, index) => (
              <div className="col-md-6" key={index}>
                <Section title={hobby.title} icon={hobby.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
