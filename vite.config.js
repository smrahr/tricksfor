import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@context": path.resolve(__dirname, "src/context"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@imports": path.resolve(__dirname, "src/imports"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
});
