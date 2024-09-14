import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icon": path.resolve(__dirname, "src/assets/icon"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});
