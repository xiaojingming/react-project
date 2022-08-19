import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/create': {
        target: 'https://www.mxnzp.com/api/barcode/',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
