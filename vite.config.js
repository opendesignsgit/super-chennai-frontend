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
import Renderer from "@prerenderer/renderer-puppeteer";
import Prerenderer from "@prerenderer/rollup-plugin";
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    Prerenderer({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/contest/hotshots-photography-contest",
        "/contest/margazhi-month-photography-contest",
        "/volunteer-in-chennai",
        "/work-in-chennai",
      ],
      renderer: new Renderer({
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
        navigationOptions: {
          timeout: 60000,
          // Correct format: String-ah array kulla podanum
          waitUntil: ["networkidle0"], 
        },
        // Render aaga 3 to 5 seconds wait panrathu safe
        renderAfterTime: 5000,
      }),
    }),
  ],
});
