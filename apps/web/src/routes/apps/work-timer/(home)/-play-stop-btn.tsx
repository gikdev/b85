import { PlayIcon, StopIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../-store"

export function PlayStopBtn() {
  const startedAt = useAppSelector(s => s.apps.workTimer.startedAt)
  const endedAt = useAppSelector(s => s.apps.workTimer.endedAt)
  const dispatch = useAppDispatch()

  const isPlaying = startedAt != null && endedAt == null
  const Icon = isPlaying ? StopIcon : PlayIcon

  const thingToDo = () => {
    if (isPlaying) {
      dispatch(workTimerSlice.actions.endTimer())
    } else {
      dispatch(workTimerSlice.actions.startTimer())
    }
  }

  useKeyPress([" "], thingToDo)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "xl", theme: "brand" })}
      onClick={thingToDo}
    >
      <Icon size={48} weight="fill" />
    </button>
  )
}
