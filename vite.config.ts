import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        // In build SSR (prerender) i pacchetti sono esterni: niente manualChunks
        manualChunks: isSsrBuild ? undefined : {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          emailjs: ['@emailjs/browser'],
          helmet: ['react-helmet-async'],
          icons: ['lucide-react']
        }
      }
    },
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
      },
      mangle: true
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  },
  // Preload delle risorse critiche
  server: {
    preTransformRequests: false
  }
}));
