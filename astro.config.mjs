import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Mantenemos tu configuración para que React no se rompa
  jsx: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  // Inyectamos Tailwind v4 a través de Vite
  vite: {
    plugins: [tailwindcss()],
  },
});