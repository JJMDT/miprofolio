import React from 'react';

export const Contacto = () => {
  // Lógica del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Procesar envío del formulario aquí
    alert("Mensaje enviado");
    event.target.reset();
  };

  return (
    <section className=" backgroundPrimary  text-secondary px-5 py-5">
      <div className="container">
      <div className="col-lg- col-md-auto mx-auto contacto">
      </div>
      <div className='container col-md-8' id="enlaceContacto">
        <h2 className='titleContacto'>Envíame un mensaje...</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/jjmdt36@gmail.com"
          method="POST"
          id="myForm"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
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
            <button className="btn btn-primary me-md-2" type="submit">
              Enviar
            </button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
};

