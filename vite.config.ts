import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
