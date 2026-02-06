import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import Unfonts from 'unplugin-fonts/vite';
import autoprefixer from 'autoprefixer';
import postCSSCustomMedia from 'postcss-custom-media';
import tailwindCSS from 'tailwindcss';
import postcssGlobalData from '@csstools/postcss-global-data';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  server: {
    port: 3000,
  },
  base: process.env.BASE_URL || '/',
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
  },
  plugins: [
    vue(),
    svgLoader(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'TT Interphases Pro',
            local: 'TT Interphases Pro',
            src: ['./src/assets/fonts/*.ttf'],
          },
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
    }),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/*.js',
      ),
      strictMessage: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ['./src/assets/styles/media.css'],
        }),
        autoprefixer,
        postCSSCustomMedia,
        tailwindCSS,
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
