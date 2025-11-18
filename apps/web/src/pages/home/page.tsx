import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { apps } from "#/data/apps"
import config from "../../config.json"
import { AppItem } from "./app-item"
import { GoFullscreenBtn } from "./go-fullscreen-btn"

export const HomePage = () => (
  <div className="flex flex-col p-8 gap-8">
    <h3 className="font-bold text-h1 text-center flex flex-col gap-2">
      <span className="text-tusi-100">خوش اومدی،</span>
      <span className="text-brand-500">محمدمهدی :)</span>
    </h3>

    <div className="flex w-full items-center justify-center gap-8">
      <GoFullscreenBtn />
    </div>

    <div className="flex flex-wrap items-center justify-center gap-4">
      {apps.map(app => (
        <DisabledLink
          key={app.id}
          to={app.disabled ? undefined : `/apps/${app.id}`}
        >
          <AppItem Icon={app.Icon} title={app.title} disabled={app.disabled} />
        </DisabledLink>
      ))}
    </div>

    <p className="text-center">
      <code>v{config.version}</code>
    </p>
  </div>
)

interface DisabledLinkProps {
  to?: string
  children: ReactNode
}

const DisabledLink = ({ to, children }: DisabledLinkProps) =>
  to ? <Link to={to}>{children}</Link> : <div>{children}</div>
