import { VitePWA } from "vite-plugin-pwa"

export const vitePwa = VitePWA({
  registerType: "prompt",
  injectRegister: false,

  pwaAssets: {
    disabled: false,
    config: ".config/vite/pwa-assets.ts",
  },

  manifest: {
    name: "B85",
    short_name: "B85",
    description: "A useful app for myself.",
    theme_color: "#00BCFF",
  },

  workbox: {
    globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
    cleanupOutdatedCaches: true,
    clientsClaim: true,
  },

  devOptions: {
    enabled: false,
    navigateFallback: "index.html",
    suppressWarnings: true,
    type: "module",
  },
})
