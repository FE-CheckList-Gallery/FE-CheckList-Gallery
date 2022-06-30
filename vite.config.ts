import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias(),
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@images', replacement: resolve(__dirname, 'src/images') },
      { find: '@lib', replacement: resolve(__dirname, 'src/lib') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
    ],
  },
});
