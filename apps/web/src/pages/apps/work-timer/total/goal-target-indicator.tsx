import { CheckCircleIcon, TargetIcon } from "@phosphor-icons/react"
import { tvcn } from "#/lib/utils"
import { useDailyProgress } from "../store"

export function GoalTargetIndicator() {
  const dailyProgressPercent = useDailyProgress()
  const isGoalAchieved = dailyProgressPercent >= 100

  const styles = tvcn(
    "h-full w-10 flex items-center justify-center rounded-sm-elements",
    isGoalAchieved ? "bg-primary-bg text-main-fg" : "bg-muted-bg",
  )

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
