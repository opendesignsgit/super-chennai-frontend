import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),

    // ssr({ prerender: true })
  ],
});
