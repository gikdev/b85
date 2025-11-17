import { SquareIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"

export function Pending() {
  return (
    <div className={skins.page({ className: "items-center justify-center" })}>
      <div className="p-2 rounded-sm-elements bg-brand-800 text-brand-200 animate-spin">
        <SquareIcon size={32} weight="fill" />
      </div>
    </div>
  )
}
