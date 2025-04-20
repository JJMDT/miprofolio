// src/components/CssCarousel.jsx
import React, { useEffect, useState } from "react";
import "./CssCarousel.css";
import { proyectosData } from "../proyectosData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const carousel = document.querySelector('.carousel');
    const list = document.querySelector('.list');
    const runningTime = document.querySelector('.carousel .timeRunning');

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    function resetTimeAnimation() {
      runningTime.style.animation = 'none';
      runningTime.offsetHeight; /* trigger reflow */
      runningTime.style.animation = null;
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    }

    function showSlider(type) {
      let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
      if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= proyectosData.length ? 0 : nextIndex;
        });
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
        setCurrentIndex((prevIndex) => {
          const prevIndexNew = prevIndex - 1;
          return prevIndexNew < 0 ? proyectosData.length - 1 : prevIndexNew;
        });
      }

      clearTimeout(runTimeOut);

      runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    }

    nextBtn.onclick = () => showSlider('next');
    prevBtn.onclick = () => showSlider('prev');

    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="content-section">
        <div className="content">
          <div className="title">{proyectosData[currentIndex].title}</div>
          <div className="name">{proyectosData[currentIndex].subtitle}</div>
          <div className="descripcion">{proyectosData[currentIndex].description}</div>
          <div className="botones">
            <button onClick={() => window.open(proyectosData[currentIndex].link, '_blank')}>ver proyecto</button>
          </div>
        </div>
      </div>
      <div className="list">
        {proyectosData.map((proyecto, index) => (
          <div 
            key={index} 
            className="item" 
            style={{backgroundImage: `url(${proyecto.imageUrl})`}}
          >
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="prev"> ◄ </button>
        <button className="next"> ► </button>
      </div>
      <div className="timeRunning"></div>
    </div>
  );
};

export default Carousel;
