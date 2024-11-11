import path from "node:path";
import { defineConfig } from "vite";

const target = "es2015";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/plugin",
  esbuild: {
    target,
  },
  build: {
    target,
    outDir: path.resolve("dist"),
    emptyOutDir: false, // Suppress the warning
    rollupOptions: {
      input: "src/plugin/code.ts",
      output: {
        entryFileNames: "code.js",
      },
    },
  },
});
