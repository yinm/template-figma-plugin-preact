import preact from "@preact/preset-vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [preact()],
  test: {
    include: ["src/ui/**/*.spec.ts?(x)"],
    environment: "jsdom",
    setupFiles: "src/ui/tests/setup.ts",
  },
});
