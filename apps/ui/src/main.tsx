import "./styles/index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouteHome } from "./routes/home"

const rootElement = document.querySelector("#root")

if (!rootElement) throw new Error("No root element found with id 'root'")

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <RouteHome />
  </StrictMode>,
)
