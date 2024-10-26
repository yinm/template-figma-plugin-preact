import path from "node:path";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), viteSingleFile()],
  root: "src/ui",
  build: {
    emptyOutDir: false, // Suppress warning
    outDir: path.resolve("dist"),
  },
});
