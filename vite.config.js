import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio/',
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
