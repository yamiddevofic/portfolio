import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Efecto para iniciar el carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia 3000 a la cantidad de milisegundos que deseas para cada slide
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []); // El array vacío como segundo argumento asegura que este efecto solo se ejecute una vez, al montar el componente

  return (
    <div className="carousel">
      <button className="arrow prev" onClick={prevSlide}>&#10094;</button>
      <img className="slide" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="arrow next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
