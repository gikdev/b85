import { createFileRoute } from "@tanstack/react-router"
import { TotalPage } from "#/pages/apps/work-timer/total/page"

export const Route = createFileRoute("/apps/work-timer/total")({
  component: TotalPage,
})
