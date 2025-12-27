import { PlusIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../store"
import { Button } from "#/components/ui/button"

const { incTotalSeconds } = workTimerSlice.actions

export function IncTotalBtn() {
  const dispatch = useAppDispatch()
  const handleIncTotalSeconds = () => dispatch(incTotalSeconds())

  useKeyPress(["+"], handleIncTotalSeconds)
  useKeyPress(["="], handleIncTotalSeconds)

  return (
    <Button variant="ghost" size="icon-xl" onClick={handleIncTotalSeconds}>
      <PlusIcon />
    </Button>
  )
}
