import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "#/pages/apps/namoratab/page"

export const Route = createFileRoute("/apps/namoratab")({
  component: HomePage,
})
