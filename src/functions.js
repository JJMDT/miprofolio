
function cargarAnimaciones() {
  


    window.sr = ScrollReveal();
    sr.reveal('.sobre-mi', {
        duration: 1500,
        origin: 'top',
        distance: '-50px'
    });

      sr.reveal('.scroll-header', {
        duration: 1000,
        origin: 'bottom',
        distance: '-50px'
      });



      sr.reveal('.seccion-habilidades', {
        duration: 1000,
        origin: 'bottom',
        distance: '400px'
      });
      sr.reveal('.proyectos', {
        duration: 1000,
        origin: 'bottom',
        distance: '400px'
      });

      sr.reveal('.contacto', {
        duration: 1000,
        origin: 'bottom',
        distance: '400px'
      });

      sr.reveal('.b-example-divider ', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px'
      });




      ScrollReveal({ duration: 1000 })

      ScrollReveal().reveal('.navbar-nav', { delay: 1000 });
      ScrollReveal().reveal('#subtitulo', { delay: 2000 });
      ScrollReveal().reveal('.logo', { delay: 1000 });
      ScrollReveal().reveal('.texto-footer', { delay: 500 });

    }

    window.addEventListener('load', cargarAnimaciones);
    

    document.getElementById("myForm").addEventListener("submit", function () {
      setTimeout(function () {
          // Limpia los campos después de enviar el formulario
          document.querySelector('.form-select[name="proyecto"]').selectedIndex = 0;
          document.querySelector('input[name="nombre"]').value = "";
          document.querySelector('input[name="email"]').value = "";
          document.querySelector('textarea[name="textarea"]').value = "";
      }, 0);
    });

    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }

  
    $(document).ready(function () {
      $('[data-toggle="collapse"]').click(function () {
        $('.navbar-collapse').collapse('toggle');
      });
    });
    
    function validar(){

      var nombre = document.getElementById("id_nombre").value;

      if(nombre ==""){
        alert("Por favor, complete todos los campos.");
       
        return false; // Evitar que el formulario se envíe
    }

    return true;
    }