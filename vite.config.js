import { defineConfig } from "vite"

export default defineConfig({
  base: "/assets/",
  build: {
    emptyOutDir: false,
    manifest: false,
    outDir: "app/assets/builds",
    rollupOptions: {
      input: {
        application: "app/javascript/application.js",
      },
      output: {
        assetFileNames: "[name][extname]",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
        inlineDynamicImports: true,
      },
    },
    sourcemap: true,
  },
})
