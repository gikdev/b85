import { ClockIcon, GearIcon, TimerIcon } from "@phosphor-icons/react"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { useKeyPress } from "react-haiku"
import { BottomTabBar, type TabItem } from "#/components/bottom-tab-bar"

const workTimerTabs: TabItem[] = [
  {
    id: "timer",
    url: "/apps/work-timer",
    title: "تایمر",
    Icon: TimerIcon,
  },
  {
    id: "total",
    url: "/apps/work-timer/total",
    title: "مجموع",
    Icon: ClockIcon,
  },
  {
    id: "settings",
    url: "/apps/work-timer/settings",
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
