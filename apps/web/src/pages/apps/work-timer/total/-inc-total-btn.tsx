import { PlusIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../-store"

export function IncTotalBtn() {
  const dispatch = useAppDispatch()

  const incTotalSeconds = () =>
    dispatch(workTimerSlice.actions.incTotalSeconds())

  useKeyPress(["+"], incTotalSeconds)
  useKeyPress(["="], incTotalSeconds)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
      onClick={incTotalSeconds}
    >
      <PlusIcon size={32} />
    </button>
  )
}
