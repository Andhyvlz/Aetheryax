// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // You can add global Sass variables or mixins here if needed
        // example: additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
});