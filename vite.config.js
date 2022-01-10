import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path";
import fs from "fs";
import multi from '@rollup/plugin-multi-entry';



let basePath = "./src/lib/web_components";
const getAllFiles = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    console.log(`input : ${name}`)
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);
const srcFiles = getAllFiles(basePath);



export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    }),
  ],
  build: {
    outDir: 'build/wc',
    emptyOutDir: true,
    minify: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: srcFiles,
      output: [{
        entryFileNames: (filePath) => `[name]/[name].js`,
        format: "esm",
        dir: "build/wc",
      }],

    }
  }
})
