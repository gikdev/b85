import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "#/pages/apps/pick-one/page"

export const Route = createFileRoute("/apps/pick-one")({
  component: HomePage,
})
