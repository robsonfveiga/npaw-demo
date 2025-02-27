import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

// Update all __dirname references using:
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url))
    }
  }
})
