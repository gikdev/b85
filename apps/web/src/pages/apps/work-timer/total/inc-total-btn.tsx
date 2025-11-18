import { PlusIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../store"

const { incTotalSeconds } = workTimerSlice.actions

export function IncTotalBtn() {
  const dispatch = useAppDispatch()
  const handleIncTotalSeconds = () => dispatch(incTotalSeconds())

  useKeyPress(["+"], handleIncTotalSeconds)
  useKeyPress(["="], handleIncTotalSeconds)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
      onClick={handleIncTotalSeconds}
    >
      <PlusIcon size={32} />
    </button>
  )
}
