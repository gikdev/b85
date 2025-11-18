import { ArrowClockwiseIcon } from "@phosphor-icons/react"
import { useNavigate } from "@tanstack/react-router"
import { skins } from "#/shared/skins"
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
    <button
      type="button"
      onClick={handleClick}
      className={skins.btn({ className: "w-full" })}
    >
      <ArrowClockwiseIcon size={24} weight="fill" />
      <span>از اول</span>
    </button>
  )
}
