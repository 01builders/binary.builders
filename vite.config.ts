import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "pub",
  build: {
    outDir: "dist",
    assetsDir: "a",
    sourcemap: false,
  },
});
