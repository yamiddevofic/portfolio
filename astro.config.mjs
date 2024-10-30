import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Importante para que pueda manejar APIs del lado del servidor
  adapter: vercel(),
  integrations: [
    react(), // Añadir integración de React
    tailwind({ config: './tailwind.config.cjs' }) // Añadir integración de Tailwind con el archivo de configuración específico
  ],
});
