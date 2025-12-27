import { GoalTargetIndicator } from "./goal-target-indicator"
import { ProgressBar } from "./progress-bar"

export function GoalTracker() {
  return (
    <div className="rounded-md-elements flex gap-1 overflow-hidden h-10 w-full">
      <ProgressBar />
      <GoalTargetIndicator />
    </div>
  )
}
