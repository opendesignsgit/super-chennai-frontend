import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import ssr from 'vite-plugin-ssr/plugin';

import prerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(), 
    // ssr()
    // prerender({
    //   routes: ['/', '/live', '/contact'] // add your paths here
    // })
  ],
})
