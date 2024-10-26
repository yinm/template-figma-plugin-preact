import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/plugin/**/*.spec.ts"],
    setupFiles: "src/plugin/tests/setup.ts",
  },
});
