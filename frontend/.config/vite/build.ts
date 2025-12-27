import type { UserConfig } from "vite"

const platform = process.env.TAURI_ENV_PLATFORM
const isDebugMode = Boolean(process.env.TAURI_ENV_DEBUG)

export const build: UserConfig["build"] = {
  target: platform == "windows" ? "chrome105" : "safari13",
  minify: isDebugMode ? false : "esbuild",
  sourcemap: isDebugMode,
}
