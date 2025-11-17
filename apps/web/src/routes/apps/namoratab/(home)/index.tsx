import { createFileRoute } from "@tanstack/react-router"
import { skins } from "#/shared/skins"
import { ContentInput } from "./-content-input"
import { OrganizeBtn } from "./-organize-btn"
import { TopBar } from "./-top-bar"

export const Route = createFileRoute("/apps/namoratab/(home)/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={skins.page()}>
      <TopBar />

      <main className="flex flex-col gap-4 p-4 flex-1">
        <ContentInput />

        <OrganizeBtn />
      </main>
    </div>
  )
}
