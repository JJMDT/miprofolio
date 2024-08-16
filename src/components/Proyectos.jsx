import React from 'react';
import '../app.css'; // Asegúrate de importar el archivo CSS donde has definido las clases

export const Proyectos = () => {
  return (
    <>
      <div id="enlace2"></div>
      <section className="py-5 text-center proyectos">
        <div className="container">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h2 className="tituloProyectos">Proyectos más recientes</h2>
            <p>
              Explora mi selección más reciente de proyectos excepcionales. Desde aplicaciones web hasta experiencias móviles, estos ejemplos reflejan nuestro compromiso continuo con la excelencia y la innovación en cada paso del camino.
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                {/* <img src="img/colors.png" className="card-img-top" alt="Color Game"/> */}
                <div className="card-body">
                  <h5 className="card-title">Color Game</h5>
                  <h6>Proyecto n°1</h6>
                  <p className="card-text">Es un juego donde tendrás que adivinar un color al azar...</p>
                  <a href="https://color-game-pledu.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Dar un vistazo</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                {/* <img src="img/images.jfif" className="card-img-top" alt="Weather Channel"/> */}
                <div className="card-body">
                  <h5 className="card-title">Weather Channel</h5>
                  <h6>Proyecto n°2</h6>
                  <p className="card-text">¿Quieres saber cómo va a estar el clima en la ciudad? ¡Míralo aquí!</p>
                  <a href="https://appclimaapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Dar un vistazo</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                {/* <img src="img/funkos-banner.webp" className="card-img-top" alt="Tienda Funko"/> */}
                <div className="card-body">
                  <h5 className="card-title">Tienda Funko</h5>
                  <h6>Proyecto n°3</h6>
                  <p className="card-text">Tienda online de figuras coleccionables FUNKOPOP! </p>

                  <a href="https://tiendafunko.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Dar un vistazo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
