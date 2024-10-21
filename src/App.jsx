import React, { useState, useEffect } from 'react';
import './App.css'; // Aquí aplicarás TailwindCSS
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; // Iconos para el menú y el modo oscuro

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode !== null ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showHeader, setShowHeader] = useState(false);

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
    // Mostrar el header solo cuando se hace scroll hacia abajo
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
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
    <div className="font-raleway bg-gradient-to-b from-[#E0F4FF] to-[#F0FFF4] dark:from-[#0A0E17] dark:to-[#10161D] min-h-screen text-gray-900 dark:text-gray-100">
      {/* Encabezado de la Aplicación con efecto de scroll */}
      <header className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 md:p-6 transition-transform duration-500 ease-in-out ${showHeader ? 'translate-y-0' : '-translate-y-full'} bg-[#E5E7EB]/90 dark:bg-[#0F172A]/90 shadow-md z-10 backdrop-blur-md`}>
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-full">
            {isDarkMode ? (
              <img
                src="/Yamid-rodriguez-light.png"
                className="w-14 h-14 object-contain lg:w-16 lg:h-16 sm:w-12 sm:h-12"
                alt="Logo Yamid Rodriguez"
              />
            ) : (
              <img
                src="/Yamid-rodriguez-dark.png"
                className="w-14 h-14 object-contain lg:w-16 lg:h-16 sm:w-12 sm:h-12"
                alt="Logo Yamid Rodriguez"
              />
            )}
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#2C7A7B] dark:hover:text-[#A3E635] transition font-raleway">Inicio</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#2C7A7B] dark:hover:text-[#A3E635] transition font-raleway">Servicios</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#2C7A7B] dark:hover:text-[#A3E635] transition font-raleway">Contacto</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-[#1E3A8A] dark:text-[#F6C453] text-2xl font-raleway p-3 rounded-full hover:bg-[#CFFAFE] dark:hover:bg-[#1E293B] transition">
            {isDarkMode ? <FaSun className="text-[#F6C453]" /> : <FaMoon className="text-[#1E3A8A]" />}
          </button>
          <div className="md:hidden w-1/6" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl" />
            ) : (
              <FaBars className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl" />
            )}
          </div>
        </div>
      </header>

      {/* Menú Responsive */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#E5E7EB] dark:bg-[#0A0E17] flex flex-col items-center justify-center space-y-8 z-20">
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] text-2xl hover:text-[#2C7A7B] dark:hover:text-[#A3E635] transition font-raleway" onClick={toggleMenu}>Inicio</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] text-2xl hover:text-[#2C7A7B] dark:hover:text-[#A3E635] transition font-raleway" onClick={toggleMenu}>Servicios</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] text-2xl hover:text-[#2C7A7B] dark:hover:text-[#A3E635] transition font-raleway" onClick={toggleMenu}>Contacto</a>
        </div>
      )}

      {/* Sección Hero Minimalista */}
      <section
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${isDarkMode ? '/background-dark.webp' : '/background-light.webp'})`,
        }}
      >
        <div className="text-center max-w-lg bg-[#F1F5F9]/90 dark:bg-[#1E293B]/80 p-10 rounded-lg shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Yamid Rodriguez</h1>
          <p className="text-lg md:text-xl text-[#334155] dark:text-[#D1D5DB] mb-6 font-libre-baskerville">
            Full Stack Developer Aspiring
          </p>
        </div>
      </section>

      {/* Sección de Servicios en Layout Asimétrico */}
      <section className="py-20 px-8 md:px-24 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#1E3A8A] dark:text-[#F6C453] mb-10 text-center md:text-left font-raleway">Servicios</h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-center">
              <div className="bg-[#2C7A7B] dark:bg-[#A3E635] w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Lecturas de Tarot</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-[#2C7A7B] dark:bg-[#A3E635] w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Enseñanza de Programación</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-[#2C7A7B] dark:bg-[#A3E635] w-12 h-1 mr-4"></div>
              <h3 className="text-2xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Fotografía</h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-[#E0F7FA] dark:bg-[#1E293B] p-10 rounded-lg shadow-lg max-w-sm">
            <p className="text-base text-[#1E3A8A] dark:text-[#D1D5DB] font-libre-baskerville">
              Cada servicio está diseñado para guiarte y brindarte una experiencia única, ya sea que desees explorar tu interior, aprender habilidades técnicas o capturar momentos especiales.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Minimalista */}
      <section className="relative py-20 px-6 md:px-24 lg:px-40">
        <div className="absolute inset-0 -z-10 bg-[#1E3A8A] dark:bg-[#A3E635] opacity-10"></div>
        <h2 className="text-4xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-10 font-raleway">Contáctame</h2>
        <div className="flex justify-center">
          <form className="w-full max-w-md bg-[#F1F5F9]/90 dark:bg-[#0F172A]/80 p-8 rounded-md shadow-md">
            <label htmlFor="name" className="block font-medium mb-4 text-[#1E3A8A] dark:text-[#F6C453] font-raleway">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-4 mb-6 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Tu nombre completo"
            />
            <label htmlFor="message" className="block font-medium mb-4 text-[#1E3A8A] dark:text-[#F6C453] font-raleway">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-4 mb-6 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#1E3A8A] dark:bg-[#F6C453] text-white dark:text-gray-900 font-bold rounded-md hover:bg-[#334155] dark:hover:bg-[#F6C453]/90 transition font-raleway"
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