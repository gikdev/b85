import { ArrowClockwiseIcon } from "@phosphor-icons/react"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "#/components/ui/button"
import { useAppDispatch } from "#/store"
import { rakatSlice } from "../store"

const { reset } = rakatSlice.actions

export function ResetBtn() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(reset())
    navigate({ to: "/apps/rakat" })
  }

  return (
    <Button variant="ghost" onClick={handleClick} className="w-full">
      <ArrowClockwiseIcon />
      <span>از اول</span>
    </Button>
  )
}
