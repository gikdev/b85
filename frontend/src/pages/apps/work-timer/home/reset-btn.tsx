import { ArrowUUpRightIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { Button } from "#/components/ui/button"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../store"

const { resetTimer } = workTimerSlice.actions

export function ResetBtn() {
  const dispatch = useAppDispatch()

  const handleTimerReset = () => dispatch(resetTimer())

  useKeyPress(["r"], handleTimerReset)

  return (
    <Button size="icon-xl" onClick={handleTimerReset}>
      <ArrowUUpRightIcon />
    </Button>
  )
}
