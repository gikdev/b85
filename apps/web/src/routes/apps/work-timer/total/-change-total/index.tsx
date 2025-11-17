import { PencilSimpleIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../../-store"
import { ChangeTotalSheet } from "./change-total-sheet"

export function ChangeTotal() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(s => s.apps.workTimer.isChangeTotalSheetOpen)
  const open = () => dispatch(workTimerSlice.actions.openChangeTotalSheet())
  const close = () => dispatch(workTimerSlice.actions.closeChangeTotalSheet())

  return (
    <>
      <ChangeTotalBtn onClick={open} />

      {isOpen && <ChangeTotalSheet onClose={close} />}
    </>
  )
}

interface ChangeTotalBtnProps {
  onClick: () => void
}

function ChangeTotalBtn({ onClick }: ChangeTotalBtnProps) {
  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
      onClick={onClick}
    >
      <PencilSimpleIcon size={32} />
    </button>
  )
}
