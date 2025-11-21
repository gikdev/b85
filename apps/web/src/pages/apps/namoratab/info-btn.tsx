import { InfoIcon } from "@phosphor-icons/react"
import { Button } from "#/components/ui/button"
import { useAppDispatch } from "#/store"
import { namoratabSlice } from "./store"

const { setAboutSheet } = namoratabSlice.actions

export function InfoBtn() {
  const dispatch = useAppDispatch()

  return (
    <Button size="icon-md" onClick={() => dispatch(setAboutSheet("open"))}>
      <InfoIcon />
    </Button>
  )
}
