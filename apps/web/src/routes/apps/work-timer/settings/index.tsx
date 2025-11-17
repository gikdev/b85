import { createFileRoute } from "@tanstack/react-router"
import { SettingsForm } from "./-settings-form"

export const Route = createFileRoute("/apps/work-timer/settings/")({
  component: RouteComponent,
  staticData: {
    appTitle: "تنظیمات",
  },
})

function RouteComponent() {
  return (
    <main className="flex flex-col flex-1 items-center gap-4 p-4">
      <SettingsForm />
    </main>
  )
}
