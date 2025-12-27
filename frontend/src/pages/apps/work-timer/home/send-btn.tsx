import { PaperPlaneTiltIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { Button } from "#/components/ui/button"
import { useAppDispatch, useAppStore } from "#/store"
import { calcWorkTimerElapsedSeconds, workTimerSlice } from "../store"

const { incTotalSecondsBy, resetTimer } = workTimerSlice.actions

export function SendBtn() {
  const dispatch = useAppDispatch()
  const appStore = useAppStore()

  const addElapsedToTotal = () => {
    const { endedAt, startedAt } = appStore.getState().apps.workTimer
    const elapsedSeconds = calcWorkTimerElapsedSeconds(startedAt, endedAt)
    dispatch(incTotalSecondsBy(elapsedSeconds))
    dispatch(resetTimer())
  }

  useKeyPress(["s"], addElapsedToTotal)

  return (
    <Button size="icon-xl" onClick={addElapsedToTotal}>
      <PaperPlaneTiltIcon />
    </Button>
  )
}
