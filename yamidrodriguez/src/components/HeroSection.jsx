import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-cyan-bright to-dark-blue flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-raleway text-white">
          Innovación con Sabiduría & Desarrollo Humano
        </h1>
        <p className="text-lg font-libre text-light-gray mt-4">
          Fusionando creatividad, tecnología y sensibilidad para crear soluciones que transforman vidas con frescura y autenticidad.
        </p>
        <div className="mt-8 space-x-4">
          <a href="#" className="px-6 py-3 bg-cyan-bright text-white rounded-lg font-raleway">
            Colabora con Nosotros
          </a>
          <a href="#" className="px-6 py-3 bg-dark-blue text-white rounded-lg font-raleway">
            Explora Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
