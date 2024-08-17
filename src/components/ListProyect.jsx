// src/components/ListProyect.jsx

import React from "react";
import { Card } from "react-bootstrap";

export const ListProyect = ({ title, subtitle, description, imageUrl, link }) => {
  return (
    <Card className="mb-3">
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Ver Proyecto
        </a>
      </Card.Body>
    </Card>
  );
};
