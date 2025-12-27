import "./shared/styles.css"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { GeneralError } from "./pages/common/general-error"
import { NotFound } from "./pages/common/not-found"
import { Pending } from "./pages/common/pending"
import { routeTree } from "./routeTree.gen"
import { enable } from "@tauri-apps/plugin-autostart"

export const router = createRouter({
  routeTree,
  defaultPendingComponent: Pending,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: GeneralError,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }

  interface StaticDataRouteOption {
    appTitle?: string
  }
}

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("no root element!")
if (rootElement.innerHTML) throw new Error("Root element has innerHTML!")

const root = ReactDOM.createRoot(rootElement)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

function start() {
  if (!window) return
  if (!('__TAURI__' in window)) return

  console.log("Running in Tauri mode...")

  enable().catch(err => console.error(err))
}

start()
