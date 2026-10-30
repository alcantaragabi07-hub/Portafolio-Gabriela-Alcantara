// @ts-nocheck
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function copyStaticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const dirs = ['images', 'video'];
      for (const dir of dirs) {
        const src = path.resolve(rootDir, dir);
        const dest = path.resolve(rootDir, 'dist', dir);
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
        }
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), copyStaticAssetsPlugin()],
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      hmr: typeof process !== 'undefined' ? process.env?.DISABLE_HMR !== 'true' : true,
      watch: typeof process !== 'undefined' && process.env?.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
