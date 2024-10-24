import { defineConfig } from 'vite';
import react, { Options } from '@vitejs/plugin-react';

export default defineConfig({
  worker: { plugins: () => [react()] },
  plugins: [react({ fastRefresh: false } as Options)],
  resolve: {
    alias: []
  },
  assetsInclude: ['*.csv']
});
