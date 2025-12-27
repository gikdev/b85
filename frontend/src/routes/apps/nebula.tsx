import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "#/pages/apps/nebula/page"

export const Route = createFileRoute("/apps/nebula")({
  component: HomePage,
})
