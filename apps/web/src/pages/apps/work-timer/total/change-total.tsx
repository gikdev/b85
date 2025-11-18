import { PencilSimpleIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../store"

const { openChangeTotalSheet } = workTimerSlice.actions

export function ChangeTotal() {
  const dispatch = useAppDispatch()
  const open = () => dispatch(openChangeTotalSheet())

  return (
    <button
      type="button"
      onClick={open}
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
    >
      <PencilSimpleIcon size={32} />
    </button>
  )
}
