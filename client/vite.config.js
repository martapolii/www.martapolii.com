//Configuring Vite for React
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: '../client', //setting the root directory
  plugins: [react()],
  build: {
   outDir: '../dist', //setting the output directory
    manifest: true,
    rollupOptions: {
      input: "./index.html", //setting the entry point
    },
  },
});
