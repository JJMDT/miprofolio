import React from "react";
import { CardProyect } from "./CardsProyects";

const Title = ({ text }) => {
  return <h2 className="display-5 fw-bold text-white">{text}</h2>;
};

const Description = ({ text }) => {
  return <p className="mb-4">{text}</p>;
};

export const Proyectos = () => {
  return (
    <>
      <section id="enlaceProyectos" className="py-5 text-center proyectos">
        <div className="container">
          <div className="col-lg- col-md-auto mx-auto">
            <Title text="Proyectos más recientes" />
            <Description text="Explora mi selección más reciente de proyectos excepcionales. Desde aplicaciones web hasta experiencias móviles, estos ejemplos reflejan nuestro compromiso continuo con la excelencia y la innovación en cada paso del camino." />
          </div>

          <div className="d-flex flex-wrap justify-content-center container">
            <div className="p-2">
              <CardProyect
                imageUrl="/assets/proyecto/porfolio.JPG"
                title="LandingPage"
                subtitle="Porfolio Personal"
                description="Porfolio personal con toda la informacion"
                link="https://color-game-pledu.netlify.app/"
              />
            </div>
            <div className="p-2">
              <CardProyect
                imageUrl="/assets/proyecto/poke.avif"
                title="Pokemon"
                subtitle="Pokemon´s cards"
                description="Encontra a tu pokemon favorito en esta aplicacion"
                link="https://color-game-pledu.netlify.app/"
              />
            </div>

            <div className="p-2">
              <CardProyect
                imageUrl="/assets/proyecto/pop.jpg"
                title="Tienda Funko"
                subtitle="Tienda web"
                description="Tienda online de figuras coleccionables FUNKOPOP!"
                link="https://tiendafunko.netlify.app/"
              />
            </div>

            <div className="p-2">
              <CardProyect
                imageUrl="/assets/proyecto/clima.png"
                title="Weather Channel"
                subtitle="Consulta el clima"
                description="¿Quieres saber cómo va a estar el clima en la ciudad? "
                link="https://appclimaapp.netlify.app/"
              />
            </div>

            <div className="p-2">
              <CardProyect
                imageUrl="/assets/proyecto/color.png"
                title="Color Game"
                subtitle="Adivina el color"
                description="Juego donde tendrás que adivinar un color al azar"
                link="https://color-game-pledu.netlify.app/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
