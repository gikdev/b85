import { createFileRoute } from "@tanstack/react-router"
import { skins } from "#/shared/skins"
import { BottomBar } from "./-bottom-bar"
import { ContentArea } from "./-content-area"
import { TopBar } from "./-top-bar"

export const Route = createFileRoute("/apps/nebula/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={skins.page()}>
      <TopBar />

      <ContentArea />

      <BottomBar />
    </div>
  )
}
