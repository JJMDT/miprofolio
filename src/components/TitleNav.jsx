import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export const TitleNav = ({ text }) => {
  useEffect(() => {
    ScrollReveal().reveal('#subtitulo', {
      duration: 500,
      origin: 'bottom',
      distance: '20px',
      opacity: 0,
      easing: 'ease-in-out',
      reset: false,
    });
  }, []);

  return (
    <p id="subtitulo" className="text-white">
      {text}
    </p>
  );
};
