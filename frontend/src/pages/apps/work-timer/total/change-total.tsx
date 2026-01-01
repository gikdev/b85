import { PencilSimpleIcon } from "@phosphor-icons/react"
import { Button } from "#/components/ui/button"
import { useAppDispatch } from "#/store"
import { workTimerSlice } from "../store"

const { openChangeTotalSheet } = workTimerSlice.actions

export function ChangeTotal() {
  const dispatch = useAppDispatch()
  const open = () => dispatch(openChangeTotalSheet())

  return (
    <Button onClick={open} variant="ghost" size="icon-xl">
      <PencilSimpleIcon />
    </Button>
  )
}
