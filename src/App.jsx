import React, { useState, useEffect } from 'react';
import './App.css'; // Aquí aplicarás TailwindCSS
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; // Iconos para el menú y el modo oscuro

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode !== null ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Aplicar o eliminar la clase 'dark' al html en lugar del body
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="font-raleway bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Encabezado de la Aplicación */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent z-10">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-full">
            {isDarkMode ? (
              <img
                src="/Yamid-rodriguez-light.png"
                className="w-20 h-20 object-contain lg:w-20 lg:h-20 sm:w-16 sm:h-16"
                alt="Logo Yamid Rodriguez"
              />
            ) : (
              <img
                src="/Yamid-rodriguez-dark.png"
                className="w-20 h-20 object-contain lg:w-20 lg:h-20 sm:w-16 sm:h-16"
                alt="Logo Yamid Rodriguez"
              />
            )}
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-deep-blue dark:text-yellow-200 hover:text-yellow-mustard dark:hover:text-yellow-500 transition font-raleway">Inicio</a>
          <a href="#" className="text-deep-blue dark:text-yellow-200 hover:text-yellow-mustard dark:hover:text-yellow-500 transition font-raleway">Servicios</a>
          <a href="#" className="text-deep-blue dark:text-yellow-200 hover:text-yellow-mustard dark:hover:text-yellow-500 transition font-raleway">Contacto</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-deep-blue dark:text-yellow-200 text-2xl font-raleway">
            {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-deep-blue" />}
          </button>
          <div className="md:hidden w-1/6" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-deep-blue dark:text-yellow-200 text-3xl" />
            ) : (
              <FaBars className="text-deep-blue dark:text-yellow-200 text-3xl" />
            )}
          </div>
        </div>
      </header>

      {/* Menú Responsive */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center space-y-6 z-20">
          <a href="#" className="text-deep-blue dark:text-yellow-200 text-2xl hover:text-yellow-mustard dark:hover:text-yellow-500 transition font-raleway" onClick={toggleMenu}>Inicio</a>
          <a href="#" className="text-deep-blue dark:text-yellow-200 text-2xl hover:text-yellow-mustard dark:hover:text-yellow-500 transition font-raleway" onClick={toggleMenu}>Servicios</a>
          <a href="#" className="text-deep-blue dark:text-yellow-200 text-2xl hover:text-yellow-mustard dark:hover:text-yellow-500 transition font-raleway" onClick={toggleMenu}>Contacto</a>
        </div>
      )}

      {/* Sección Hero Minimalista */}
      <section
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            isDarkMode
              ? 'https://i.pinimg.com/1200x/29/56/51/295651e0ebc2d447aa9752a9a2fd9aa7.jpg'
              : 'https://i.pinimg.com/564x/de/cb/1f/decb1fd5ecb570719e058d4666b485c8.jpg'
          })`,
        }}
      >
        <div className="text-center text-deep-blue dark:text-yellow-200 max-w-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-emerald-green dark:text-yellow-400 font-raleway">Yamid Rodriguez</h1>
          <p className="text-lg md:text-xl text-light-black dark:text-gray-300 mb-6 font-libre-baskerville">
            Full Stack Developer Aspiring
          </p>
        </div>
      </section>

      {/* Sección de Servicios en Layout Asimétrico */}
      <section className="py-16 px-8 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-deep-blue dark:text-yellow-200 mb-8 text-center md:text-left font-raleway">Servicios</h2>
          <div className="flex flex-col gap-12">
            <div className="flex items-center">
              <div className="bg-emerald-green dark:bg-yellow-400 w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-deep-blue dark:text-yellow-200 font-raleway">Lecturas de Tarot</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-emerald-green dark:bg-yellow-400 w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-deep-blue dark:text-yellow-200 font-raleway">Enseñanza de Programación</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-emerald-green dark:bg-yellow-400 w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-deep-blue dark:text-yellow-200 font-raleway">Fotografía</h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-light-gray dark:bg-gray-800 p-10 rounded-lg shadow-lg max-w-sm">
            <p className="text-base text-deep-blue/80 dark:text-gray-300 font-libre-baskerville">
              Cada servicio está diseñado para guiarte y brindarte una experiencia única, ya sea que desees explorar tu interior, aprender habilidades técnicas o capturar momentos especiales.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Minimalista */}
      <section className="relative py-16 px-6 md:px-20 lg:px-40">
        <div className="absolute inset-0 -z-10 bg-emerald-green dark:bg-yellow-400 opacity-10"></div>
        <h2 className="text-4xl font-bold text-center text-deep-blue dark:text-yellow-200 mb-8 font-raleway">Contáctame</h2>
        <div className="flex justify-center">
          <form className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-md shadow-md">
            <label htmlFor="name" className="block font-medium mb-4 text-deep-blue dark:text-yellow-200 font-raleway">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-4 mb-6 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-green dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-deep-blue dark:text-gray-200 font-libre-baskerville"
              placeholder="Tu nombre completo"
            />
            <label htmlFor="message" className="block font-medium mb-4 text-deep-blue dark:text-yellow-200 font-raleway">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-4 mb-6 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-green dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-deep-blue dark:text-gray-200 font-libre-baskerville"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-mustard dark:bg-yellow-500 text-deep-blue dark:text-gray-900 font-bold rounded-md hover:bg-yellow-mustard/90 dark:hover:bg-yellow-600 transition font-raleway"
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
