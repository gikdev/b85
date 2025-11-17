import type { Icon } from "@phosphor-icons/react"
import { Link, useLocation } from "@tanstack/react-router"
import type { FileRouteTypes } from "#/routeTree.gen"
import { cn } from "tailwind-variants"

export interface TabItem {
  id: string
  url: FileRouteTypes["to"]
  title: string
  Icon: Icon
}

interface BottomTabBarProps {
  tabItems: TabItem[]
}

export function BottomTabBar({ tabItems }: BottomTabBarProps) {
  return (
    <footer className="h-16 flex border-t border-tusi-800">
      {tabItems.map(item => (
        <Tab key={item.id} Icon={item.Icon} title={item.title} url={item.url} />
      ))}
    </footer>
  )
}

interface TabProps extends Omit<TabItem, "id"> {}

function Tab({ Icon, title, url }: TabProps) {
  const { pathname } = useLocation()
  const isActive = url === pathname

  const styleContainer = cn(
    `
      flex flex-col gap-0 
      flex-1 cursor-pointer
      hover:bg-tusi-800 hover:text-tusi-100
      items-center justify-center
    `,
    isActive ? "text-tusi-100" : "",
  )()

  const styleText = cn("text-body-sm", isActive ? "font-bold" : "")()

  return (
    <Link to={url} className={styleContainer}>
      <Icon size={24} weight={isActive ? "fill" : "regular"} />
      <span className={styleText}>{title}</span>
    </Link>
  )
}
