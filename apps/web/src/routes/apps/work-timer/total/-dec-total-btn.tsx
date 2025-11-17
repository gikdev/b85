import { MinusIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../-store"

export function DecTotalBtn() {
  const dispatch = useAppDispatch()

  const decTotalSeconds = () =>
    dispatch(workTimerSlice.actions.decTotalSeconds())

  useKeyPress(["-"], decTotalSeconds)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
      onClick={decTotalSeconds}
    >
      <MinusIcon size={32} />
    </button>
  )
}
