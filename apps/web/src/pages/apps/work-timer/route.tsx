import { HouseIcon } from "@phosphor-icons/react"
import {
  createFileRoute,
  Link,
  Outlet,
  useMatches,
} from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { WorkTimerBottomTabs } from "./-shared"

export const Route = createFileRoute("/apps/work-timer")({
  component: RouteComponent,
})

function RouteComponent() {
  const matches = useMatches()
  const currentMatch = matches[matches.length - 1]
  const title = currentMatch?.staticData?.appTitle || "تایمر کار"

  return (
    <div className={skins.page()}>
      <TopAppBar
        title={title}
        startingStuff={
          <Link to="/" className={skins.btnIcon()}>
            <HouseIcon size={32} />
          </Link>
        }
      />

      <Outlet />

      <WorkTimerBottomTabs />
    </div>
  )
}
