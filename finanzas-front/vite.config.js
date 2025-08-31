import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  server: {
    host: true, // Escucha en todas las interfaces de red
    port: 5173, // Opcional: cambiar puerto
    strictPort: true, // Falla si el puerto está ocupado
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
