import { HouseIcon } from "@phosphor-icons/react"
import { createFileRoute, Link, Outlet } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"

export const Route = createFileRoute("/apps/rakat")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={skins.page()}>
      <TopAppBar
        title="رکعت"
        startingStuff={
          <Link to="/" className={skins.btnIcon()}>
            <HouseIcon size={32} />
          </Link>
        }
      />

      <Outlet />
    </div>
  )
}
