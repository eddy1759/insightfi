import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['insight.svg'],
      manifest: {
        name: 'InsightFi',
        short_name: 'InsightFi',
        description: 'AI-powered financial insights',
        theme_color: '#4f46e5',
      }
    })
  ],
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/material'],
  },
  build: {
    sourcemap: true,
  },
  server: {
    hmr: true,  
  },
})