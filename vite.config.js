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

const getFileName = (filePath) => {
  let wc_arr = filePath.facadeModuleId.split('web_components');
  const filename = wc_arr[wc_arr.length - 1].replace('.svelte', '.js')
  const fileName_ok = filename.replace('.ts', '.js')
  return `${fileName_ok.replace('/', '')}`;
}



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
      output: [
        {
          entryFileNames: (filePath) => getFileName(filePath),
          format: "esm",
          dir: "dist/esm",
        },
        {
          entryFileNames: (filePath) => getFileName(filePath),
          format: "cjs",
          dir: "dist/cjs",
        },
        {
          entryFileNames: (filePath) => getFileName(filePath),
          format: "amd",
          dir: "dist/amd",
        }
      ],

    }
  }
})
