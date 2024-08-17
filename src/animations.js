// src/animations.js

import ScrollReveal from 'scrollreveal';

export function cargarAnimaciones() {
  const sr = ScrollReveal();

  sr.reveal('.sobre-mi', {
    duration: 1200,
    origin: 'top',
    distance: '-50px',
  });

  sr.reveal('.scroll-header', {
    duration: 1200,
    origin: 'bottom',
    distance: '-50px',
  });

//   sr.reveal('.seccion-habilidades, .proyectos, .contacto', {
//     duration: 1000,
//     origin: 'bottom',
//     distance: '400px',
//   });

//   sr.reveal('.b-example-divider', {
//     duration: 1000,
//     origin: 'bottom',
//     distance: '50px',
//   });

//   sr.reveal('.navbar-nav', { delay: 1000 });
//   //sr.reveal('#subtitulo', { delay: 1000 });
//   sr.reveal('.logo', { delay: 1000 });
//   sr.reveal('.texto-footer', { delay: 500 });
}
