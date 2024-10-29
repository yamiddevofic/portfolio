import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Sun, Moon } from 'lucide-react';

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-full min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-800' 
        : 'bg-gradient-to-br from-emerald-300 via-teal-200 to-blue-200'
    }`}>
      {/* Unified Navigation */}
      <nav className="w-full p-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold text-white">Yamid Rodriguez</div>
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'text-white hover:bg-white/10' 
                : 'text-gray-800 hover:bg-gray-800/10'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
            href="#colabora" 
            className={`font-semibold hover:underline ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Colabora
          </a>
          <a 
            href="#proyectos" 
            className={`font-semibold hover:underline ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Proyectos
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="w-full py-20 md:py-32 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[size:40px_40px]" />
        
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Tecnología para Transformar
            <span className={`block text-7xl my-2 ${
              isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
            }`}>
              &
            </span> 
            Soluciones con Impacto
          </h1>

          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Empoderamos a las personas con soluciones tecnológicas innovadoras que 
            aportan sabiduría, creatividad y frescura a cada proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`group relative px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center ${
              isDarkMode 
                ? 'bg-emerald-500 hover:bg-emerald-400 text-white' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}>
              Colabora con Nosotros
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className={`group px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center ${
              isDarkMode 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-gray-800/10 hover:bg-gray-800/20 text-gray-800'
            }`}>
              Explora Proyectos
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${
          isDarkMode ? 'bg-emerald-500/30' : 'bg-emerald-300/30'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl ${
          isDarkMode ? 'bg-blue-500/30' : 'bg-blue-300/30'
        }`} />
      </section>
    </div>
  );
};

export default HeroSection;