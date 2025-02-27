import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import image from '@rollup/plugin-image';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    image()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@models': path.resolve(__dirname, './src/models'),
      '@services': path.resolve(__dirname, './src/services'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  base: './', 
  publicDir: 'public',
  build: {
    assetsDir: "assets",
    rollupOptions: {
      external: ['path', 'module',"/background.jpg"],
      output: {
        format: 'esm',
        manualChunks: {
          vendor: ['react', 'react-dom']
        },
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  ssr: {
    target: 'webworker',
    noExternal: true
  },
  assetsInclude: ['**/*.jpg']
})
