import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import preserveUseClient from "rollup-plugin-preserve-use-client";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preserveUseClient()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        index: "src/index.ts",
      },
      output: {
        dir: "dist",
        format: "es",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    minify: false,
    emptyOutDir: true,
    target: "esnext",
  },
});
