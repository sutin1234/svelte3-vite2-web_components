import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path";
import fs from "fs";


let basePath = "./src/lib/web_components";
const getAllFiles = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);
const srcFiles = getAllFiles(basePath);



export default defineConfig({
  plugins: [
    svelte({
      exclude: ['./src/App.svelte', './src/lib/Counter.svelte'],
      compilerOptions: {
        customElement: true
      }
    }),
  ],
  build: {
    emptyOutDir: true,
    minify: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: srcFiles,
      output: [{
        entryFileNames: (filePath) => {
          console.log(process.platform)
          let wc_arr = filePath.facadeModuleId.split('web_components');
          const filename = process.platform === "win32" ? wc_arr[2].replace('.svelte', '.js') : wc_arr[1].replace('.svelte', '.js')
          const fileName_ok = filename.replace('.ts', '.js')
          return `wc${fileName_ok}`; // wc/filename.js
        },
        format: "esm",
        dir: "dist",
      }],

    }
  }
})
