import React, { useState, useEffect } from 'react';
import './App.css'; // Aquí aplicarás TailwindCSS
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; // Iconos para el menú y el modo oscuro

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode !== null ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Aplicar o eliminar la clase 'dark' al html en lugar del body
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    // Mostrar el header con un efecto al hacer scroll hacia abajo
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
      if (currentScroll > lastScrollTop) {
        setShowHeader(false); // Ocultar header al bajar
      } else {
        setShowHeader(true); // Mostrar header al subir
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="font-raleway bg-gradient-to-b from-[#D8EAF5] to-[#E6F5EA] dark:from-[#0B0F1A] dark:to-[#151C27] min-h-screen text-gray-900 dark:text-gray-100">
      {/* Encabezado de la Aplicación con efecto de scroll mejorado */}
      <header className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 md:p-6 transition-all duration-500 ease-in-out ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${isScrolled ? 'bg-[#E5E7EB]/80 dark:bg-[#1C2733]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'} z-20`}>
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full">
            {isDarkMode ? (
              <img
                src="/Yamid-rodriguez-light.png"
                className="w-16 h-16 object-contain lg:w-20 lg:h-20 sm:w-12 sm:h-12"
                alt="Logo Yamid Rodriguez"
              />
            ) : (
              <img
                src="/Yamid-rodriguez-dark.png"
                className="w-16 h-16 object-contain lg:w-20 lg:h-20 sm:w-12 sm:h-12"
                alt="Logo Yamid Rodriguez"
              />
            )}
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-12">
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-xl">Inicio</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-xl">Mis Servicios</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-xl">Conecta Conmigo</a>
        </nav>
        <div className="flex items-center space-x-6">
          <button onClick={toggleDarkMode} className="relative w-14 h-14 rounded-full border-2 border-[#1E3A8A] dark:border-[#F6C453] flex items-center justify-center transition-colors duration-300">
            <div className={`absolute w-10 h-10 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#F6C453]' : 'bg-[#1E3A8A]'}`}></div>
            {isDarkMode ? <FaSun className="text-[#1E3A8A] z-10 text-3xl" /> : <FaMoon className="text-[#F6C453] z-10 text-3xl" />}
          </button>
          <div className="md:hidden w-1/6 z-30" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-[#1E3A8A] dark:text-[#F6C453] text-4xl" />
            ) : (
              <FaBars className="text-[#1E3A8A] dark:text-[#F6C453] text-4xl" />
            )}
          </div>
        </div>
      </header>

      {/* Menú Responsive */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#1E3A8A] dark:bg-[#0A0E17] flex flex-col items-center justify-center space-y-12 z-20">
          <a href="#" className="text-[#F6C453] dark:text-[#A3E635] text-3xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway" onClick={toggleMenu}>Inicio</a>
          <a href="#" className="text-[#F6C453] dark:text-[#A3E635] text-3xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway" onClick={toggleMenu}>Mis Servicios</a>
          <a href="#" className="text-[#F6C453] dark:text-[#A3E635] text-3xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway" onClick={toggleMenu}>Conecta Conmigo</a>
        </div>
      )}

      {/* Sección Hero Minimalista */}
      <section
        className="flex items-center justify-center min-h-[90vh] bg-cover bg-center px-8 pt-32 pb-12"
        style={{
          backgroundImage: `url(${isDarkMode ? '/background-dark.png' : '/background-light.png'})`,
        }}
      >
        <div className="text-center max-w-2xl bg-[#F0F4F8]/90 dark:bg-[#1E293B]/80 p-12 rounded-lg shadow-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1E3A8A] dark:text-[#F6C453] font-raleway leading-tight">Descubre el poder de la innovación</h1>
          <p className="text-xl md:text-2xl text-[#345B79] dark:text-[#D1D5DB] mb-8 font-libre-baskerville">
            Soy Yamid Rodriguez, un apasionado desarrollador full stack comprometido en transformar ideas en experiencias digitales memorables.
          </p>
        </div>
      </section>

      {/* Sección de Servicios en Layout Asimétrico */}
      <section className="py-20 px-12 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#1E3A8A] dark:text-[#F6C453] mb-12 text-center md:text-left font-raleway">Mis Servicios</h2>
          <div className="flex flex-col gap-10">
            <div className="flex items-center">
              <div className="bg-[#345B79] dark:bg-[#A3E635] w-16 h-1 mr-6"></div>
              <h3 className="text-3xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Tarot Transformador</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-[#345B79] dark:bg-[#A3E635] w-16 h-1 mr-6"></div>
              <h3 className="text-3xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Programación a tu Ritmo</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-[#345B79] dark:bg-[#A3E635] w-16 h-1 mr-6"></div>
              <h3 className="text-3xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Fotografía Creativa y Emotiva</h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-[#E4F1F6] dark:bg-[#1E293B] p-14 rounded-lg shadow-lg max-w-md">
            <p className="text-lg text-[#345B79] dark:text-[#F6C453] font-libre-baskerville">
              Cada servicio está diseñado para empoderarte: desde descubrir tu mundo interior, hasta capturar momentos que realmente importan. Exploración, aprendizaje y creatividad al alcance de tu mano.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Minimalista */}
      <section className="relative py-32 px-10 md:px-20 lg:px-40">
        <div className="absolute inset-0 -z-10 bg-[#1E3A8A] dark:bg-[#A3E635] opacity-10"></div>
        <h2 className="text-4xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-16 font-raleway">Ponte en Contacto</h2>
        <div className="flex justify-center">
          <form className="w-full max-w-2xl bg-[#F0F4F8]/90 dark:bg-[#1E293B]/80 p-12 rounded-md shadow-md">
            <label htmlFor="name" className="block font-medium mb-6 text-[#1E3A8A] dark:text-[#F6C453] font-raleway text-lg">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-5 mb-8 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Tu nombre completo"
            />
            <label htmlFor="message" className="block font-medium mb-6 text-[#1E3A8A] dark:text-[#F6C453] font-raleway text-lg">
              Tu Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-5 mb-8 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-[#2C7A7B] dark:bg-[#A3E635] text-white dark:text-gray-900 font-bold rounded-md hover:bg-[#345B79] dark:hover:bg-[#A3E635]/90 transition font-raleway text-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
