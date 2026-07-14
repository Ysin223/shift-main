import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shift-main/',
  plugins: [react()],
  server: {
    open: true,
  },
});
