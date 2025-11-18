import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Layout } from "#/pages/apps/rakat/layout"

export const Route = createFileRoute("/apps/rakat")({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
})
