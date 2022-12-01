import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [ vue() ],
  server:{

    proxy:{
      '/api': {
        target: 'http://152.136.185.210:5000/',
        rewrite: path => path.replace(/^\/api/,''),
        changeOrigin: true,
      },
    }

  }

})
