import { Button } from "#/components/ui/button"
import { MinusIcon } from "@phosphor-icons/react"
import { useAppDispatch } from "#/store"
import { useKeyPress } from "react-haiku"
import { workTimerSlice } from "../store"

const { decTotalSeconds } = workTimerSlice.actions

export function DecTotalBtn() {
  const dispatch = useAppDispatch()
  const handleDecTotalSeconds = () => dispatch(decTotalSeconds())

  useKeyPress(["-"], handleDecTotalSeconds)

  return (
    <Button onClick={handleDecTotalSeconds} variant="ghost" size="icon-xl">
      <MinusIcon size={32} />
    </Button>
  )
}
