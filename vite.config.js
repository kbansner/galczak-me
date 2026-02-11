import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  root: "src", // Tells Vite your code is in /src
  build: {
    outDir: "../dist", // Places compressed files in /dist
    emptyOutDir: true,
    minify: "esbuild", // High-level JS compression
    cssMinify: false,
  },
  plugins: [
    viteImagemin({
      // Automatic image compression
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
    }),
  ],
});
