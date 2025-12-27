import { createFileRoute } from "@tanstack/react-router"
import { PrayPage } from "#/pages/apps/rakat/pray/page"

export const Route = createFileRoute("/apps/rakat/pray")({
  component: PrayPage,
})
