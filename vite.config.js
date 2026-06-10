import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- Yeh line add karein

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- Aur isko yahan register karein
  ],
  base: '/edusphere-website/', // <--- Yeh line add karein agar aap GitHub Pages par deploy kar rahe hain
})