import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "#/pages/apps/work-timer/home/page"

export const Route = createFileRoute("/apps/work-timer/")({
  component: HomePage,
  staticData: {
    appTitle: "تایمر کار",
  },
})
