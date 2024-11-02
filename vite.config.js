import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
  },
  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
  },
});
