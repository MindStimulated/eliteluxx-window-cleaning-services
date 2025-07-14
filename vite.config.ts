import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/eliteluxx-window-cleaning/', // Base path
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
          supabase: ['@supabase/supabase-js'],
          // Group service pages for better caching
          services: [
            './src/components/ResidentialWindows',
            './src/components/CommercialWindows',
            './src/components/SolarPanelCleaning',
            './src/components/PressureWashing'
          ],
          'services-extended': [
            './src/components/ScreenRepair',
            './src/components/LuxuryMaintenance',
            './src/components/ShortTermRentalCleaning'
          ],
          legal: [
            './src/components/TermsOfService',
            './src/components/PrivacyPolicy'
          ],
          blog: [
            './src/components/Blog',
            './src/components/BlogPostDetail'
          ]
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    // Enable build optimizations
    target: 'esnext',
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['lucide-react']
  },
  // Enable CSS code splitting
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
});