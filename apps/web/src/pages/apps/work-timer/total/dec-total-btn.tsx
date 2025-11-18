import { MinusIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../store"

const { decTotalSeconds } = workTimerSlice.actions

export function DecTotalBtn() {
  const dispatch = useAppDispatch()
  const handleDecTotalSeconds = () => dispatch(decTotalSeconds())

  useKeyPress(["-"], handleDecTotalSeconds)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
      onClick={handleDecTotalSeconds}
    >
      <MinusIcon size={32} />
    </button>
  )
}
