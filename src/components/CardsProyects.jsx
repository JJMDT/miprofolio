import React from "react";

export const CardProyect = ({ title, subtitle, description, imageUrl, link }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} className="imagenCard" alt={title}  />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {subtitle && <h6>{subtitle}</h6>}
        <p className="card-text">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Dar un vistazo
          </a>
        )}
      </div>
    </div>
  );
};
