//Configuring Vite for React
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: './client', //setting the root directory
  build: {
   outDir: '../dist', //setting the output directory
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx", //setting the entry point
    },
  },
});
