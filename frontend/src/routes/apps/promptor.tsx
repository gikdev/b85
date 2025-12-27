import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "#/pages/apps/promptor/page"

export const Route = createFileRoute("/apps/promptor")({
  component: HomePage,
})
