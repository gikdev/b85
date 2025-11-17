import { PencilSimpleIcon } from "@phosphor-icons/react"
import { memo } from "react"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../../../-store"
import { DailyGoalSetupSheet } from "./daily-goal-setup-sheet"

export const ChangeDailyGoalBtn = memo(_ChangeDailyGoalBtn)
function _ChangeDailyGoalBtn() {
  const isOpen = useAppSelector(s => s.apps.workTimer.isDailyGoalSetupSheetOpen)
  const dispatch = useAppDispatch()
  const open = () => dispatch(workTimerSlice.actions.openDailyGoalSetupSheet())
  const close = () =>
    dispatch(workTimerSlice.actions.closeDailyGoalSetupSheet())

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={skins.btnIcon({ size: "inputish", theme: "inputish" })}
      >
        <PencilSimpleIcon size={24} />
      </button>
      {isOpen && <DailyGoalSetupSheet onClose={close} />}
    </>
  )
}
