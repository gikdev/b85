import type { PropsWithChildren } from "react"
import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { WorkTimerBottomTabs } from "./work-timer-bottom-tabs"

export const Layout = ({ children }: PropsWithChildren) => (
  <div className={skins.page()}>
    <TopAppBar title="تایمر کار" startingStuff={<GoHomeBtn />} />

    {children}

    <WorkTimerBottomTabs />
  </div>
)
