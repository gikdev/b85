import "./shared/styles.css"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { GeneralError } from "./routes/-general-error"
import { NotFound } from "./routes/-not-found"
import { Pending } from "./routes/-pending"
import { routeTree } from "./routeTree.gen"

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
