//Configuring Vite for React
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: '../client', //setting the root directory
  plugins: [react()],
  build: {
   outDir: '../dist', //setting the output directory in the dist folder in the root 
   emptyOutDir: true, // clears the output directory before building
    manifest: true,
    rollupOptions: {
      input: "./main.jsx", //setting the entry point
    },
  },
});
