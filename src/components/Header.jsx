import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-opacity-95 backdrop-blur-md shadow-lg' 
          : 'bg-opacity-100'
      }`}
      style={{ 
        backgroundColor: isScrolled ? '#202e22' : '#202e22',
        borderBottom: isScrolled ? '1px solid #306677' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, #c49b24, #ffd700)'
              }}
            >
              LOGO
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium relative group"
              style={{ color: '#72aba0' }}
            >
              Inicio
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#c49b24' }}
              ></span>
            </a>
            
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
                style={{ color: '#72aba0' }}
              >
                Servicios
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown */}
              <div 
                className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                style={{ backgroundColor: '#122f3a' }}
              >
                <div className="py-2">
                  <a href="#servicio1" className="block px-4 py-2 text-sm hover:bg-opacity-20 transition-colors duration-200" style={{ color: '#69998c' }}>
                    Servicio 1
                  </a>
                  <a href="#servicio2" className="block px-4 py-2 text-sm hover:bg-opacity-20 transition-colors duration-200" style={{ color: '#69998c' }}>
                    Servicio 2
                  </a>
                  <a href="#servicio3" className="block px-4 py-2 text-sm hover:bg-opacity-20 transition-colors duration-200" style={{ color: '#69998c' }}>
                    Servicio 3
                  </a>
                </div>
              </div>
            </div>

            <a 
              href="#sobre-nosotros" 
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium relative group"
              style={{ color: '#72aba0' }}
            >
              Sobre Nosotros
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#c49b24' }}
              ></span>
            </a>
            
            <a 
              href="#contacto" 
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium relative group"
              style={{ color: '#72aba0' }}
            >
              Contacto
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#c49b24' }}
              ></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              className="px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              style={{ 
                backgroundColor: '#4d94a5',
                border: '2px solid #579295'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#579295';
                e.target.style.boxShadow = '0 8px 25px rgba(77, 148, 165, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4d94a5';
                e.target.style.boxShadow = 'none';
              }}
            >
              Comenzar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 transition-colors duration-200 p-2"
              style={{ color: '#72aba0' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div 
            className="px-2 pt-2 pb-3 space-y-1 rounded-b-lg"
            style={{ backgroundColor: '#122f3a' }}
          >
            <a 
              href="#inicio" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-opacity-20"
              style={{ color: '#69998c' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-opacity-20"
              style={{ color: '#69998c' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#sobre-nosotros" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-opacity-20"
              style={{ color: '#69998c' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </a>
            <a 
              href="#contacto" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-opacity-20"
              style={{ color: '#69998c' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <div className="pt-2">
              <button 
                className="w-full px-4 py-2 rounded-full font-semibold text-white transition-all duration-300"
                style={{ 
                  backgroundColor: '#4d94a5',
                  border: '2px solid #579295'
                }}
              >
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;