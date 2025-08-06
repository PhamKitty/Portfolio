import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ensures assets work in /docs for GitHub Pages
  build: {
    outDir: 'dist'
  }
});