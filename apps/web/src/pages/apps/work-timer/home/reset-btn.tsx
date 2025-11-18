import { ArrowUUpRightIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../store"

const { resetTimer } = workTimerSlice.actions

export function ResetBtn() {
  const dispatch = useAppDispatch()

  const handleTimerReset = () => dispatch(resetTimer())

  useKeyPress(["r"], handleTimerReset)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg" })}
      onClick={handleTimerReset}
    >
      <ArrowUUpRightIcon size={32} />
    </button>
  )
}
