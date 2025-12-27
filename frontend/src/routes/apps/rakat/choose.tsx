import { createFileRoute } from "@tanstack/react-router"
import { ChoosePage } from "#/pages/apps/rakat/choose/page"

export const Route = createFileRoute("/apps/rakat/choose")({
  component: ChoosePage,
})
