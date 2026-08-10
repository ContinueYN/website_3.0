import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // 使用自定义域名时部署在站点根路径，base 必须为 '/'
  // （原 '/website_3.0/' 仅适用于 continueyn.github.io/website_3.0 项目页）
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  assetsInclude: ['**/*.vroid', '**/*.vrm'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  preview: {
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          lucide: ['lucide-vue-next'],
          aos: ['aos'],
        },
      },
    },
  },
})
