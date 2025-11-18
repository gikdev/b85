import { ClockIcon, GearIcon, TimerIcon } from "@phosphor-icons/react"
import { linkOptions, useLocation, useNavigate } from "@tanstack/react-router"
import { useKeyPress } from "react-haiku"
import { BottomTabBar, type TabItem } from "#/components/bottom-tab-bar"

const workTimerTabs: TabItem[] = [
  {
    id: "timer",
    url: linkOptions({ to: "/apps/work-timer" }).to,
    title: "تایمر",
    Icon: TimerIcon,
  },
  {
    id: "total",
    url: linkOptions({ to: "/apps/work-timer/total" }).to,
    title: "مجموع",
    Icon: ClockIcon,
  },
  {
    id: "settings",
    url: linkOptions({ to: "/apps/work-timer/settings" }).to,
    title: "تنظیمات",
    Icon: GearIcon,
  },
]

export function WorkTimerBottomTabs() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useKeyPress(["T"], () => {
    const isInTotalPage = pathname.includes("total")
    if (isInTotalPage) navigate({ to: "/apps/work-timer" })
    else navigate({ to: "/apps/work-timer/total" })
  })

  return <BottomTabBar tabItems={workTimerTabs} />
}
