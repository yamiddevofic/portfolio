import React, { useState } from 'react';
import './App.css'; // Aquí aplicarás TailwindCSS
import { FaBars, FaTimes } from 'react-icons/fa'; // Iconos para el menú

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-raleway bg-gray-50 min-h-screen">
      {/* Encabezado de la Aplicación */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent z-10">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-full">
            <img src="/yamid-rodriguez.png" className='w-1/5'></img>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-deep-blue hover:text-yellow-mustard transition">Inicio</a>
          <a href="#" className="text-deep-blue hover:text-yellow-mustard transition">Servicios</a>
          <a href="#" className="text-deep-blue hover:text-yellow-mustard transition">Contacto</a>
        </nav>
        <div className="md:hidden w-1/6" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-deep-blue text-3xl" />
          ) : (
            <FaBars className="text-deep-blue text-3xl" />
          )}
        </div>
      </header>

      {/* Menú Responsive */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 z-20">
          <a href="#" className="text-deep-blue text-2xl hover:text-yellow-mustard transition" onClick={toggleMenu}>Inicio</a>
          <a href="#" className="text-deep-blue text-2xl hover:text-yellow-mustard transition" onClick={toggleMenu}>Servicios</a>
          <a href="#" className="text-deep-blue text-2xl hover:text-yellow-mustard transition" onClick={toggleMenu}>Contacto</a>
        </div>
      )}

      {/* Sección Hero Minimalista */}
      <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://chitaga.tech/images/muro-blanco.jpg)' }}>
        <div className="text-center text-deep-blue max-w-lg">
          <h1 className="text-6xl font-bold mb-4 text-emerald-green">Yamid Rodriguez</h1>
          <p className="text-lg text-light-gray mb-6">
            Web Designer / UI Developer
          </p>
        </div>
      </section>

      {/* Sección de Servicios en Layout Asimétrico */}
      <section className="py-16 px-8 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-deep-blue mb-8 text-center md:text-left">Servicios</h2>
          <div className="flex flex-col gap-12">
            <div className="flex items-center">
              <div className="bg-emerald-green w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-deep-blue">Lecturas de Tarot</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-emerald-green w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-deep-blue">Enseñanza de Programación</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-emerald-green w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-deep-blue">Fotografía</h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-light-gray p-10 rounded-lg shadow-lg max-w-sm">
            <p className="text-base text-deep-blue/80">
              Cada servicio está diseñado para guiarte y brindarte una experiencia única, ya sea que desees explorar tu interior, aprender habilidades técnicas o capturar momentos especiales.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Minimalista */}
      <section className="relative py-16 px-6 md:px-20 lg:px-40">
        <div className="absolute inset-0 -z-10 bg-emerald-green opacity-10"></div>
        <h2 className="text-4xl font-bold text-center text-deep-blue mb-8">Contáctame</h2>
        <div className="flex justify-center">
          <form className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
            <label htmlFor="name" className="block font-medium mb-4 text-deep-blue">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-4 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-green"
              placeholder="Tu nombre completo"
            />
            <label htmlFor="message" className="block font-medium mb-4 text-deep-blue">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-4 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-green"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-mustard text-deep-blue font-bold rounded-md hover:bg-yellow-mustard/90 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
