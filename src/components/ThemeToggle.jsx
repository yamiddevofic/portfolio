// components/ThemeToggle.jsx
import React from 'react';

const ThemeToggle = () => {
  // Función para manejar el cambio de tema
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    // Opcional: guardar preferencia en localStorage
    const isDark = document.documentElement.classList.contains('light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-100/20 dark:border-purple-100/10 shadow-lg transition-all hover:scale-105"
      aria-label="Cambiar tema"
    >
      {/* Ícono Sol */}
      <svg
        className="w-5 h-5 text-amber-500 hidden dark:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      {/* Ícono Luna */}
      <svg
        className="w-5 h-5 text-purple-600 block dark:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;