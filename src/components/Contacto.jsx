import React from 'react';

export const Contacto = () => {
  const validar = (event) => {
    // Tu lógica de validación aquí
    return true; // Permite el envío del formulario si la validación es correcta
  };

  return (
    <section className="contact">
      <div className="contacto" id="enlace3">
        <h2>Deja tu mensaje</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/jjmdt36@gmail.com"
          method="POST"
          id="myForm"
          onSubmit={validar}
        >
          <div className="mb-3">
            <select
              id="id_proyecto"
              name="proyecto"
              className="form-select"
              aria-label="Default select example"
            >
              <option value="" disabled selected>Proyecto de interés</option>
              <option value="1">Proyecto 1</option>
              <option value="2">Proyecto 2</option>
              <option value="3">Proyecto 3</option>
              <option value="4">Otro</option>
            </select>
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
              name="textarea"
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
