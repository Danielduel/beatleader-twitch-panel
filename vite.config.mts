import { defineConfig } from "npm:vite@5.0.2";
import react from "npm:@vitejs/plugin-react-swc";

import "npm:react@^18.2.0";
import "npm:react-dom@^18.2.0";
import "npm:tailwindcss";
import "npm:postcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        panel: "./src/pages/panel.html",
        mobile: "./src/pages/mobile.html",
        config: "./src/pages/config.html",
      },
    },
    assetsDir: "app",
  },
  plugins: [react()] // , tailwindcss()],
});
