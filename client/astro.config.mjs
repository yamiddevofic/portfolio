import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Importante para que pueda manejar APIs del lado del servidor
  adapter: vercel(),
});
