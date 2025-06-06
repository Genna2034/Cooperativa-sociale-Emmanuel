import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          emailjs: ['@emailjs/browser'],
          helmet: ['react-helmet-async'],
          icons: ['lucide-react']
        }
      }
    },
    // Ottimizzazioni per performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Compressione gzip
    reportCompressedSize: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  // Preload delle risorse critiche
  server: {
    preTransformRequests: false
  }
});