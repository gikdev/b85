import { PencilSimpleIcon } from "@phosphor-icons/react"
import { useId } from "react"
import { TimeFormatter } from "#/lib/utils"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../store"
import { Button } from "#/components/ui/button"

const inputStyle = skins.input({ className: "flex-1 w-full" })

const { openDailyGoalSetupSheet } = workTimerSlice.actions

export function DailyGoalInput() {
  const id = useId()
  const dailyTimeTarget = useAppSelector(s => s.apps.workTimer.dailyTimeTarget)
  const target = new TimeFormatter(dailyTimeTarget).toPersianTime()

  return (
    <div className={skins.labeler()}>
      <label htmlFor={id}>هدف روزانه</label>

      <div className={skins.elementGroup({ className: "h-14" })}>
        <ChangeDailyGoalBtn />

        <input
          id={id}
          dir="ltr"
          className={inputStyle}
          readOnly
          value={target}
        />
      </div>
    </div>
  )
}

function ChangeDailyGoalBtn() {
  const dispatch = useAppDispatch()
  const open = () => dispatch(openDailyGoalSetupSheet())

  return (
    <Button onClick={open} size="icon-md" variant="ghost">
      <PencilSimpleIcon size={24} />
    </Button>
  )
}
