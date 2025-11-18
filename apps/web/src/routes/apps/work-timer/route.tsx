import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Layout } from "#/pages/apps/work-timer/layout"

export const Route = createFileRoute("/apps/work-timer")({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
})
