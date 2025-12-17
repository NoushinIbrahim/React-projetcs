import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/React-projetcs/Ecommerce-Website/", // Important for GitHub Pages subfolder
});
