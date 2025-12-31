import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative base so the bundle loads correctly on GitHub Pages even if served from a subpath
  base: './',
  server: {
    port: 3000,
    open: true
  }
})
