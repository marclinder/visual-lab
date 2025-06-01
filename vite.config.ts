import { defineConfig } from 'vite';

export default defineConfig({
  base: '/visual-lab/', // Use '/' if this is your root GitHub Pages repo
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
