import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { vitePwa } from "./.config/vite/pwa"
import { router } from "./.config/vite/router"
import { server } from "./.config/vite/server"

const plugins = [
  router,
  react(),
  tailwindcss(),
  tsconfigPaths(),
  vitePwa,
  null,
  null,
  null,
]

export default defineConfig({
  plugins,
  server,
})
