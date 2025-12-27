import { PlayIcon, StopIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { Button } from "#/components/ui/button"
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
    <Button size="icon-3xl" variant="primary" onClick={thingToDo}>
      <Icon weight="fill" />
    </Button>
  )
}
