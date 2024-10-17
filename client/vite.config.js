//vite.config.js

//Configuring Vite for React
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'; // to use path.resolve


export default defineConfig({
  base: '/www.martapolii.com/', // Base URL for GitHub Pages
  root: '.', // setting the root directory to the current directory
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../dist'), // absolute path to the root dist folder
    emptyOutDir: true, // clears the output directory before building
    manifest: true,
    rollupOptions: {
      input: "./index.html" // setting the entry point to index.html. this way it is copied into the dist folder. 
    },
  },
});
