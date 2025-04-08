import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/HJU/',  // Replace with your repository name
  optimizeDeps: {
    include: ['react-router-dom'],
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
