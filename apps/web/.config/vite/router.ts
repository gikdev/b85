import { tanstackRouter } from "@tanstack/router-plugin/vite"

export const router = tanstackRouter({
  target: "react",
  autoCodeSplitting: false,
  semicolons: false,
  quoteStyle: "double",
})
