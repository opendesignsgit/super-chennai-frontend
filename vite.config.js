import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Renderer from "@prerenderer/renderer-puppeteer";
import Prerenderer from "@prerenderer/rollup-plugin";
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
   
  ],
});
