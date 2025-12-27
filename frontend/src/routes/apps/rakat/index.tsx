import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "#/pages/apps/rakat/home/page"

export const Route = createFileRoute("/apps/rakat/")({
  component: HomePage,
})
