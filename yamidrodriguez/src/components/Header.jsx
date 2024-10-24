import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Inicializar isDarkMode en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedMode = JSON.parse(localStorage.getItem('isDarkMode'));
        if (savedMode !== null) {
          setIsDarkMode(savedMode);
        }
      } catch (e) {
        console.error('Error al acceder al localStorage', e);
      }
    }
  }, []);

  // Actualizar la clase 'dark' en el <html>
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  // Manejo del scroll para mostrar/ocultar el header
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let lastScrollTop = 0;
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        setIsScrolled(currentScroll > 50);

        if (currentScroll > lastScrollTop) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        lastScrollTop = Math.max(0, currentScroll);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 md:p-6 transition-all duration-500 ease-in-out ${
        showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled
          ? 'bg-[#E5E7EB]/80 dark:bg-[#1C2733]/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } z-20`}
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full">
          <img
            src={
              isDarkMode
                ? 'https://yamidrodriguez.com/Yamid-rodriguez-light.png'
                : 'https://yamidrodriguez.com/Yamid-rodriguez-dark.png'
            }
            className="w-16 h-16 object-contain lg:w-20 lg:h-20 sm:w-12 sm:h-12"
            alt="Logo Yamid Rodriguez"
          />
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        {['Inicio', 'Sobre Mí', 'Tecnologías', 'Contacto'].map((section, index) => (
          <a
            key={index}
            href={`#${section.toLowerCase().replace('í', 'i').replace(' ', '')}`}
            className="flex items-center text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-base md:text-lg"
          >
            {section}
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-6">
        <button
          onClick={toggleDarkMode}
          className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1E3A8A] dark:border-[#F6C453] flex items-center justify-center transition-colors duration-300"
        >
          <div
            className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${
              isDarkMode ? 'bg-[#F6C453]' : 'bg-[#1E3A8A]'
            }`}
          ></div>
          {isDarkMode ? (
            <FaSun className="text-[#1E3A8A] z-10 text-xl md:text-2xl" />
          ) : (
            <FaMoon className="text-[#F6C453] z-10 text-xl md:text-2xl" />
          )}
        </button>
        <div className="md:hidden w-1/6 z-30" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl" />
          ) : (
            <FaBars className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl" />
          )}
        </div>
      </div>
      {/* Menú Responsive */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#1E3A8A] dark:bg-[#0A0E17] flex flex-col items-center justify-center space-y-6 z-20">
          {['Inicio', 'Sobre Mí', 'Servicios', 'Submarcas', 'Proyectos', 'Tecnologías', 'Contacto'].map(
            (section, index) => (
              <a
                key={index}
                href={`#${section.toLowerCase().replace('í', 'i').replace(' ', '')}`}
                className="text-[#F6C453] dark:text-[#A3E635] text-xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway"
                onClick={toggleMenu}
              >
                {section}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
