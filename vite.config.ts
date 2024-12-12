import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {preloadImages} from "./plugins/preloadImages"
import path from "node:path"
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, "./src") }
  },
  plugins: [vue(), preloadImages({
    dir: "**.{jpg,png,svg,jpeg}",
    attrs: {
      rel: "preload",
    }
  })],
})
