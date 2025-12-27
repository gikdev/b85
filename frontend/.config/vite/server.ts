import type { UserConfig } from "vite"

export const server: UserConfig["server"] = {
  strictPort: true,
  watch: {
    ignored: ["**/src-tauri/**"],
  },
  proxy: {
    "/api": {
      target: "http://localhost:5078",
      changeOrigin: true,
      secure: false,
    },
  },
}
