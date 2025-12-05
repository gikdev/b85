import type { Icon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"

interface AppItemProps {
  id: string
  title: string
  Icon: Icon
}

export const AppItem = ({ Icon, title, id }: AppItemProps) => (
  <Link
    to={
      // biome-ignore lint/suspicious/noExplicitAny: ...
      `/apps/${id}` as any
    }
    className="p-1 flex flex-col gap-1 text-center items-center hover:text-main-fg group"
  >
    <div className="p-2 size-12 rounded-sm-elements bg-secondary-bg">
      <Icon size={32} weight="fill" />
    </div>

    <span className="text-body-sm">{title}</span>
  </Link>
)
