import { createFileRoute } from "@tanstack/react-router"
import { SettingsPage } from "#/pages/apps/work-timer/settings/page"

export const Route = createFileRoute("/apps/work-timer/settings")({
  component: SettingsPage,
})
