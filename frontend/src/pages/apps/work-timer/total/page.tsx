import { Controls } from "./controls"
import { GoalTracker } from "./goal-tracker"
import { TotalTime } from "./total-time"

export const TotalPage = () => (
  <main className="flex flex-col flex-1 items-center justify-center gap-8 p-4">
    <div className="flex flex-col gap-8 items-center">
      <TotalTime />
      <Controls />
      <GoalTracker />
    </div>
  </main>
)
