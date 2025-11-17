import { ArrowUUpRightIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../-store"

export function ResetBtn() {
  const dispatch = useAppDispatch()

  const resetTimer = () => dispatch(workTimerSlice.actions.resetTimer())

  useKeyPress(["r"], resetTimer)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg" })}
      onClick={resetTimer}
    >
      <ArrowUUpRightIcon size={32} />
    </button>
  )
}
