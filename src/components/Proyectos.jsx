import React from "react";
import { ListProyect } from "./ListProyect";
import { Accordion } from "react-bootstrap";

const proyectosData = [
  {
    title: "LandingPage",
    subtitle: "Porfolio Personal",
    description: "Porfolio personal con toda la información",
    imageUrl: "/assets/proyecto/porfolio.JPG",
    link: "https://soyjuan.netlify.app//",
    type: "web"
  },
  {
    title: "Pokemon",
    subtitle: "Pokemon's cards",
    description: "Encuentra a tu pokemon favorito en esta aplicación",
    imageUrl: "/assets/proyecto/poke.avif",
    link: "https://glistening-horse-b219d1.netlify.app/",
    type: "web"
  },
  {
    title: "Rick and Morty",
    subtitle: "Rick and Morty cards",
    description: "Encuentra a tu personajo favorito en esta aplicación",
    imageUrl: "/assets/proyecto/rick.avif",
    link: "https://animated-travesseiro-528f40.netlify.app/",
    type: "web"
  },
  {
    title: "Tienda Funko",
    subtitle: "Tienda web",
    description: "Tienda online de figuras coleccionables FUNKOPOP!",
    imageUrl: "/assets/proyecto/pop.jpg",
    link: "https://tiendafunko.netlify.app/",
    type: "ecommerce"
  },
  {
    title: "Weather Channel",
    subtitle: "Consulta el clima",
    description: "¿Quieres saber cómo va a estar el clima en la ciudad?",
    imageUrl: "/assets/proyecto/clima.png",
    link: "https://appclimaapp.netlify.app/",
    type: "app"
  },
  {
    title: "Color Game",
    subtitle: "Adivina el color",
    description: "Juego donde tendrás que adivinar un color al azar",
    imageUrl: "/assets/proyecto/color.png",
    link: "https://color-game-pledu.netlify.app/",
    type: "app"
  }
];


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

const tiposDeProyectos = ["web", "app", "ecommerce"];

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
                              subtitle={proyecto.subtitle}
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
