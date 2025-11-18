import type { Icon } from "@phosphor-icons/react"
import { tvcn } from "#/lib/utils"

interface AppItemProps {
  title: string
  Icon: Icon
  disabled?: boolean
}

export function AppItem({ Icon, title, disabled = false }: AppItemProps) {
  const container = tvcn(
    "p-1 flex flex-col gap-1 text-center items-center",
    disabled ? "opacity-25" : "",
  )

  return (
    <div className={container}>
      <div className="p-2 size-12 rounded-sm-elements text-tusi-100 bg-tusi-600">
        <Icon size={32} weight="fill" />
      </div>

      <span className="text-tusi-300 text-body-sm">{title}</span>
    </div>
  )
}
