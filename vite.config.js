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
    Prerenderer({
      staticDir: path.join(__dirname, "dist"),
      // ADD EVERY NEW PAGE URL HERE:
      routes: [
        "/contest/hotshots-photography-contest",
        "/contest/hotshots-photography-contest",
        "/",
        "/contest/margazhi-month-photography-contest",
      ],
      renderer: new Renderer(),
    }),
  ],
});

