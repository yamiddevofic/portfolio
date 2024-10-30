// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // Habilitar React y Tailwind en Astro
    integrations: [react(), tailwind()],
    output: 'static' // Asegura que Astro genere una salida estática, que es ideal para despliegues en plataformas como Vercel
});
