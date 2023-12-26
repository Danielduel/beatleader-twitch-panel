import { defineConfig } from "npm:vite@5.0.2";
import react from "npm:@vitejs/plugin-react-swc";
import tailwindcss from "npm:@vituum/vite-plugin-tailwindcss";

import "npm:react@^18.2.0";
import "npm:react-dom@^18.2.0";
import "npm:tailwindcss";
import "npm:postcss";

// import "npm:@fortawesome/free-solid-svg-icons";
// import "npm:@fortawesome/free-regular-svg-icons";
// import "npm:@fortawesome/free-brands-svg-icons";

import "npm:@fortawesome/fontawesome-free";

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
  plugins: [react(), tailwindcss()],
});
