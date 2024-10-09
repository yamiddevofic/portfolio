import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),  // Integración de TailwindCSS
        autoprefixer(), // Autoprefixer para compatibilidad entre navegadores
      ],
    },
    modules: {
      scopeBehaviour: 'local', // Asegura que los CSS Modules sean locales por defecto
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Genera nombres únicos
    },
  },
})
