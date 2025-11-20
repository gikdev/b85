import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Devtools } from "#/integrations/devtools"
import { PwaManager } from "#/integrations/pwa"
import { TanStackQueryProvider } from "#/integrations/tanstack-query"
import { Toaster } from "#/integrations/toaster"
import { AppStoreProvider } from "#/store"

export const Route = createRootRoute({
  component: () => (
    <>
      <TanStackQueryProvider>
        <AppStoreProvider>
          <Outlet />
          <Devtools />
          <Toaster />
          <PwaManager />
        </AppStoreProvider>
      </TanStackQueryProvider>
    </>
  ),
})
