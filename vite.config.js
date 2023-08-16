import { defineConfig } from "vite";
import pages from "./vitejs/pages.config";

const pagesInput = {};

pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});

export default defineConfig({
  build: {
    target: "es2017",
    outDir: "build",
    rollupOptions: {
      input: {
        ...pagesInput,
      },
    },
  },
});
