import type { Icon } from "@phosphor-icons/react"
import { CornersOutIcon } from "@phosphor-icons/react"
import { useFullscreen } from "@reactuses/core"
import { createFileRoute, Link } from "@tanstack/react-router"
import type { ComponentProps } from "react"
import { useRef } from "react"
import { type App, apps } from "#/data/apps"
import { skins } from "#/shared/skins"
import config from "../config.json"
import { cn } from "tailwind-variants"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col p-8 gap-8">
      <h3 className="font-bold text-h1 text-center flex flex-col gap-2">
        <span className="text-tusi-100">خوش اومدی،</span>
        <span className="text-brand-500">محمدمهدی :)</span>
      </h3>

      <div className="flex w-full items-center justify-center gap-8">
        <GoFullscreen />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {apps.map(mapApp)}
      </div>

      <p className="text-center">
        <code>v{config.version}</code>
      </p>
    </div>
  )
}

function GoFullscreen() {
  const docRef = useRef<HTMLElement>(document.documentElement)
  const [, { enterFullscreen }] = useFullscreen(docRef)

  return (
    <button type="button" className={skins.btnIcon()} onClick={enterFullscreen}>
      <CornersOutIcon size={32} />
    </button>
  )
}

function mapApp(app: App) {
  const key = app.id

  const appItem = (
    <AppItem Icon={app.Icon} title={app.title} disabled={app.disabled} />
  )

  return app.disabled ? (
    <div className="" key={key}>
      {appItem}
    </div>
  ) : (
    <Link
      to={`/apps/${app.id}` as ComponentProps<typeof Link>[`to`]}
      key={key}
      className=""
    >
      {appItem}
    </Link>
  )
}

interface AppItemProps {
  title: string
  Icon: Icon
  disabled?: boolean
}

function AppItem({ Icon, title, disabled = false }: AppItemProps) {
  const container = cn(
    "p-1 flex flex-col gap-1 text-center items-center",
    disabled ? "opacity-25" : "",
  )()

  return (
    <div className={container}>
      <div className="p-2 size-12 rounded-sm-elements text-tusi-100 bg-tusi-600">
        <Icon size={32} weight="fill" />
      </div>

      <span className="text-tusi-300 text-body-sm">{title}</span>
    </div>
  )
}
