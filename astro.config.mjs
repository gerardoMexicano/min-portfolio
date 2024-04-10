import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
          assetsInlineLimit: 10240, // Cambiado a 10 KB
          
        },ssr: {
            inline: true, // Habilita la incrustación de scripts en línea durante la generación del servidor
          }
        
      } 
});
