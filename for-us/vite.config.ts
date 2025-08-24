import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 this is very important for GitHub Pages
  base: "/self/",
  plugins: [react()],
})
