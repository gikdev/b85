import { InfoIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { namoratabSlice } from "./store"

const { setAboutSheet } = namoratabSlice.actions

export function InfoBtn() {
  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      className={skins.btnIcon()}
      onClick={() => dispatch(setAboutSheet("open"))}
    >
      <InfoIcon size={32} />
    </button>
  )
}
