import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "#/pages/apps/npm-gui/page"

export const Route = createFileRoute("/apps/npm-gui")({
  component: HomePage,
})
