import React from 'react';

export const Contacto = () => {

  const validar = (event) => {
    // Ejemplo de lógica de validación
    const nombre = event.target.nombre.value.trim();
    const email = event.target.email.value.trim();
    

    if (!nombre || !email) {
      alert("Por favor, completa todos los campos.");
      event.preventDefault(); // Evita el envío del formulario si la validación falla
      return;
    }

    // Permite el envío del formulario si la validación es correcta
    return true;
  };

  return (
    <section className="contact">
      <div className="contacto" id="enlaceContacto">
        <h2>Deja tu mensaje</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/jjmdt36@gmail.com"
          method="POST"
          id="myForm"
          onSubmit={validar}
        >
          <div className="mb-3">
            
            <br />
            <input
              type="text"
              name="nombre"
              className="form-control"
              id="id_nombre"
              placeholder="Nombre"
            />
            <br />
            <input
              type="email"
              name="email"
              className="form-control"
              id="id_email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="mensaje"
              className="form-control"
              id="id_mensaje"
              rows="3"
              placeholder="Escribir mensaje"
            ></textarea>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button className="btn btn-dark me-md-2" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
