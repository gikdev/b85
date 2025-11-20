import type { UserConfig } from "vite"

export const server: UserConfig["server"] = {
  port: 5184,
  proxy: {
    "/api": {
      target: "http://localhost:5078",
      changeOrigin: true,
      secure: false,
    },
  },
}
