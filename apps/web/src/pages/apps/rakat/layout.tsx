import type { PropsWithChildren } from "react"
import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={skins.page()}>
      <TopAppBar title="رکعت" startingStuff={<GoHomeBtn />} />

      {children}
    </div>
  )
}
