import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

const rootElement = document.querySelector("#root")

if (!rootElement) throw new Error("No root element found with id 'root'")

createRoot(rootElement).render(
  <StrictMode>
    <h1>سلام دنیا!</h1>
  </StrictMode>,
)
