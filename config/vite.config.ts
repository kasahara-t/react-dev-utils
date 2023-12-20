import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? 'react-dev-utils' : './',
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../docs'),
  },
  css: {
    postcss: path.resolve(__dirname, './postcss.config.js'),
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, '../src/app/'),
      '@common': path.resolve(__dirname, '../src/common/'),
      '@features': path.resolve(__dirname, '../src/features/'),
      '@lib': path.resolve(__dirname, '../src/lib/'),
    },
  },
});
