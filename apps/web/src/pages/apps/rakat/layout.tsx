import { HouseIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import type { PropsWithChildren } from "react"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={skins.page()}>
      <TopAppBar
        title="رکعت"
        startingStuff={
          <Link to="/" className={skins.btnIcon()}>
            <HouseIcon size={32} />
          </Link>
        }
      />

      {children}
    </div>
  )
}
