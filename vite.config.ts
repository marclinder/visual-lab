import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',          // Default Vite behavior
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
