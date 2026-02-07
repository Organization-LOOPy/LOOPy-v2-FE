// import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'path';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // svgSpritePlugin({
    //   iconDirs: [path.join(dirname, 'src/icons/source')],
    //   symbolId: 'icon-[name]',
    //   inject: 'body-last',
    // }),
  ],

  resolve: {
    alias: {
      '@': path.join(dirname, 'src'),
    },
  },

  build: {
    sourcemap: true,
  },
});
