import { CheckCircleIcon, TargetIcon } from "@phosphor-icons/react"
import { cn } from "tailwind-variants"
import { useDailyProgress } from "../../-store"
import { ProgressBar } from "./progress-bar"

export function GoalTracker() {
  return (
    <div className="rounded-md-elements flex gap-1 overflow-hidden h-10 w-full">
      <ProgressBar />
      <GoalTargetIndicator />
    </div>
  )
}

function GoalTargetIndicator() {
  const dailyProgressPercent = useDailyProgress()
  const isGoalAchieved = dailyProgressPercent >= 100

  const styles = cn(
    "h-full w-10 flex items-center justify-center rounded-sm-elements",
    isGoalAchieved ? "bg-brand-600 text-tusi-100" : "bg-tusi-800",
  )()

  return (
    <div className={styles}>
      {isGoalAchieved ? (
        <CheckCircleIcon size={24} weight="fill" />
      ) : (
        <TargetIcon size={24} />
      )}
    </div>
  )
}
