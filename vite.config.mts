import { defineConfig } from "npm:vite@^5.0.0";
import react from "npm:@vitejs/plugin-react-swc@^3.5.0";
import tailwindcss from "npm:@vituum/vite-plugin-tailwindcss";

import "npm:react@^18.2.0";
import "npm:react-dom@^18.2.0";
import "npm:tailwindcss";
import "npm:postcss";
import "npm:rollup";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        panel: "./panel.html",
        config: "./config.html",
      },
    },
    assetsDir: "app",
  },
  plugins: [react(), tailwindcss()],
});
