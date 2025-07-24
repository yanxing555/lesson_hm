import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // 注意这里拼写是 resolve，不是 resovle
    alias: {
      '@': path.resolve(__dirname, './src'), // 推荐加上 ./ 以避免路径问题
    },
  },
});