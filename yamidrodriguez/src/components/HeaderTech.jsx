import React from 'react';

const HeaderTech = () => {
  return (
    <header className="bg-dark-blue text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-raleway font-bold">
          YamidTech
        </div>

        {/* Menú de navegación */}
        <nav className="space-x-6">
          <a href="#about" className="hover:text-cyan-bright transition duration-300">Acerca de</a>
          <a href="#projects" className="hover:text-cyan-bright transition duration-300">Proyectos</a>
          <a href="#contact" className="hover:text-cyan-bright transition duration-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderTech;
