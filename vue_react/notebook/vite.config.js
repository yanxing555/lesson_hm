import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'
// console.log(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createStyleImportPlugin({
    libs: [
      {
        libraryName: 'zarm',
        esModule: true,
        resolveStyle: name => `zarm/es/${name}/style/css`
      }
    ]
  })],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    }
  },
  resolve: {
    alias: {
      // 项目的物理路径
      '@': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000/api/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})