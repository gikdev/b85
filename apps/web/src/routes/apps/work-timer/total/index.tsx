import { createFileRoute } from "@tanstack/react-router"
import { ChangeTotal } from "./-change-total"
import { DecTotalBtn } from "./-dec-total-btn"
import { GoalTracker } from "./-goal-tracker"
import { IncTotalBtn } from "./-inc-total-btn"
import { TotalTime } from "./-total-time"

export const Route = createFileRoute("/apps/work-timer/total/")({
  component: RouteComponent,
  staticData: {
    appTitle: "مجموع کار",
  },
})

function RouteComponent() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center gap-8 p-4">
      <div className="flex flex-col gap-8 items-center">
        <TotalTime />
        <Controls />
        <GoalTracker />
      </div>
    </main>
  )
}

const Controls = () => (
  <div className="flex w-full items-center justify-center gap-8">
    <DecTotalBtn />
    <ChangeTotal />
    <IncTotalBtn />
  </div>
)
