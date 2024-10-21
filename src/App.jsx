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
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-lg md:text-xl">Inicio</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-lg md:text-xl">Innovación Digital</a>
          <a href="#" className="text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-lg md:text-xl">Colaboración Conmigo</a>
        </nav>
        <div className="flex items-center space-x-6">
          <button onClick={toggleDarkMode} className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#1E3A8A] dark:border-[#F6C453] flex items-center justify-center transition-colors duration-300">
            <div className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#F6C453]' : 'bg-[#1E3A8A]'}`}></div>
            {isDarkMode ? <FaSun className="text-[#1E3A8A] z-10 text-2xl md:text-3xl" /> : <FaMoon className="text-[#F6C453] z-10 text-2xl md:text-3xl" />}
          </button>
          <div className="md:hidden w-1/6 z-30" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl md:text-4xl" />
            ) : (
              <FaBars className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl md:text-4xl" />
            )}
          </div>
        </div>
      </header>

      {/* Menú Responsive */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#1E3A8A] dark:bg-[#0A0E17] flex flex-col items-center justify-center space-y-8 md:space-y-12 z-20">
          <a href="#" className="text-[#F6C453] dark:text-[#A3E635] text-2xl md:text-3xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway" onClick={toggleMenu}>Inicio</a>
          <a href="#" className="text-[#F6C453] dark:text-[#A3E635] text-2xl md:text-3xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway" onClick={toggleMenu}>Innovación Digital</a>
          <a href="#" className="text-[#F6C453] dark:text-[#A3E635] text-2xl md:text-3xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway" onClick={toggleMenu}>Colaboración Conmigo</a>
        </div>
      )}

      {/* Sección Hero Minimalista */}
      <section
        className="flex items-center justify-center min-h-screen bg-cover bg-center px-6 md:px-8 pt-0 pb-0"
        style={{
          backgroundImage: `url(${isDarkMode ? '/background-dark.png' : '/background-light.png'})`,
        }}
      >
        <div className="text-center mt-10 max-w-xl md:max-w-2xl bg-[#F0F4F8]/90 dark:bg-[#1E293B]/80 p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-[#1E3A8A] dark:text-[#F6C453] font-raleway leading-tight">Impulsa tu visión con tecnología y creatividad</h1>
          <p className="text-lg md:text-2xl text-[#345B79] dark:text-[#D1D5DB] mb-6 md:mb-8 font-libre-baskerville">
            Soy Yamid Rodriguez, un apasionado desarrollador full stack que une innovación y sabiduría para crear experiencias digitales únicas y significativas.
          </p>
        </div>
      </section>

      {/* Sección de Servicios en Layout Asimétrico */}
      <section className="py-16 px-8 md:py-20 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#F6C453] mb-10 text-center md:text-left font-raleway">Lo que ofrezco para tu transformación</h2>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex items-center">
              <div className="bg-[#345B79] dark:bg-[#A3E635] w-12 h-1 mr-4 md:w-16 md:mr-6"></div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Lecturas de Tarot Clarividentes</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-[#345B79] dark:bg-[#A3E635] w-12 h-1 mr-4 md:w-16 md:mr-6"></div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Desarrollo Web Personalizado</h3>
            </div>
            <div className="flex items-center">
              <div className="bg-[#345B79] dark:bg-[#A3E635] w-12 h-1 mr-4 md:w-16 md:mr-6"></div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] font-raleway">Fotografía Creativa y Expresiva</h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="bg-[#E4F1F6] dark:bg-[#1E293B] p-10 md:p-14 rounded-lg shadow-lg max-w-sm">
            <p className="text-base md:text-lg text-[#345B79] dark:text-[#F6C453] font-libre-baskerville">
              Mi misión es ayudarte a conectar con tu esencia y plasmar tus sueños en experiencias digitales cautivadoras. Creatividad, intuición y conocimiento a tu servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Minimalista */}
      <section className="relative py-20 px-8 md:py-28 md:px-20 lg:px-32">
        <div className="absolute inset-0 -z-10 bg-[#1E3A8A] dark:bg-[#A3E635] opacity-10"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-12 md:mb-16 font-raleway">Hablemos y creemos juntos</h2>
        <div className="flex justify-center">
          <form className="w-full max-w-lg md:max-w-2xl bg-[#F0F4F8]/90 dark:bg-[#1E293B]/80 p-10 md:p-12 rounded-md shadow-md">
            <label htmlFor="name" className="block font-medium mb-4 md:mb-6 text-[#1E3A8A] dark:text-[#F6C453] font-raleway text-lg">
              Tu Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-4 md:p-5 mb-6 md:mb-8 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Tu nombre completo"
            />
            <label htmlFor="message" className="block font-medium mb-4 md:mb-6 text-[#1E3A8A] dark:text-[#F6C453] font-raleway text-lg">
              Tu Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-4 md:p-5 mb-6 md:mb-8 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Cuéntame sobre tus ideas o preguntas"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 md:py-4 bg-[#2C7A7B] dark:bg-[#A3E635] text-white dark:text-gray-900 font-bold rounded-md hover:bg-[#345B79] dark:hover:bg-[#A3E635]/90 transition font-raleway text-lg"
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