// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import Renderer from "@prerenderer/renderer-puppeteer";
// import Prerenderer from "@prerenderer/rollup-plugin";
// import path from "path";

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),
//     Prerenderer({
//       staticDir: path.join(__dirname, "dist"),
//       // ADD EVERY NEW PAGE URL HERE:
//       routes: [
//         // "/contest/hotshots-photography-contest",
//         "/contest/hotshots-photography-contest",
//         "/",
//         "/contest/margazhi-month-photography-contest",
//         "/volunteer-in-chennai",
//         "/work-in-chennai",
//       ],
//       // renderer: new Renderer(),
//       renderer: new Renderer({
//         // 1. Root user-kaana settings
//         args: [
//           "--no-sandbox",
//           "--disable-setuid-sandbox",
//           "--disable-dev-shm-usage",
//         ],

//         // 2. Timeout-ah increase pannunga (30s to 60s)
//         navigationOptions: {
//           timeout: 60000,
//           waitUntil: "networkidle0", // Network mothama stop aagura varai wait pannum
//         },

//         // 3. Render aaga extra time (Optionally)
//         renderAfterTime: 50,
//       }),
//     }),
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

const httpsConfig = (() => {
  try {
    return {
      key: fs.readFileSync("localhost-key.pem"),
      cert: fs.readFileSync("localhost.pem"),
    };
  } catch {
    return undefined;
  }
})();

export default defineConfig({
  plugins: [tailwindcss(), react()],
  css: {
    devSourcemap: true,
  },
  server: {
    host: true,
    ...(httpsConfig && { https: httpsConfig }),
  },
});
