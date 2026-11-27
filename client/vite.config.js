//vite.config.js

//Configuring Vite for React
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'; // to use path.resolve


export default defineConfig({
  root: __dirname,
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../dist'), // absolute path to the root dist folder
    emptyOutDir: true, // clears the output directory before building
    manifest: true,
  },
});
