import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // "@/..." maps to <root>/src so that
      // "@/components/ui/background-pixel-stars" -> <root>/src/components/ui/...
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
