import { PlayIcon, StopIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../store"

const useIsPlaying = () =>
  useAppSelector(s => {
    const { startedAt, endedAt } = s.apps.workTimer
    const hasStarted = startedAt != null
    const hasEnded = endedAt != null
    return hasStarted && !hasEnded
  })

export function PlayStopBtn() {
  const dispatch = useAppDispatch()
  const isPlaying = useIsPlaying()
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
