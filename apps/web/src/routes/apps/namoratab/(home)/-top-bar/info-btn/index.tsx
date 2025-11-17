import { InfoIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { namoratabSlice } from "../../../-store"
import { AboutSheet } from "./about-sheet"

export function InfoBtn() {
  const isOpen = useAppSelector(s => s.apps.namoratab.isAboutSheetOpen)
  const dispatch = useAppDispatch()

  return (
    <>
      <button
        type="button"
        className={skins.btnIcon()}
        onClick={() => dispatch(namoratabSlice.actions.openAboutSheet())}
      >
        <InfoIcon size={32} />
      </button>

      {isOpen && (
        <AboutSheet
          onClose={() => dispatch(namoratabSlice.actions.closeAboutSheet())}
        />
      )}
    </>
  )
}
