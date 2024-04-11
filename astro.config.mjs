import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
          assetsInlineLimit: 10240, // Cambiado a 10 KB
          
        }
        
      } 
});
