import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Evita dos copias de React (pnpm + prebundle de react-github-calendar)
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    // Que el calendario use el mismo React que la app, no uno embebido en el chunk
    exclude: ['react-github-calendar'],
  },
})
