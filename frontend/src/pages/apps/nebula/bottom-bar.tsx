import {
  CornersInIcon,
  CornersOutIcon,
  HurricaneIcon,
} from "@phosphor-icons/react"
import { useFullscreen } from "@reactuses/core"
import { useRef } from "react"
import { GoHomeBtn } from "#/components/go-home-btn"
import { Button } from "#/components/ui/button"
import { DownloadContentBtn } from "./shared"

export const BottomBar = () => (
  <nav
    className="
      hidden md:flex items-center justify-center
      gap-2 px-2 py-2 bg-transparent border border-border
      absolute bottom-8 left-1/2 -translate-x-1/2
      rounded-md-elements opacity-50 hover:opacity-100
    "
  >
    <GoHomeBtn />
    <AppName />
    <Separator />
    <DownloadContentBtn />
    <FullscreenBtn />
  </nav>
)

const AppName = () => (
  <div className="flex items-center justify-center gap-1 text-main-fg font-bold">
    <HurricaneIcon size={24} weight="fill" />
    <span>نبیولا</span>
  </div>
)

const Separator = () => (
  <hr className="border-none w-px h-6 inline-block bg-tusi-800" />
)

function FullscreenBtn() {
  const docRef = useRef<HTMLElement>(document.documentElement)
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(docRef)

  const CornersIcon = isFullscreen ? CornersInIcon : CornersOutIcon

  return (
    <Button size="icon-md" onClick={toggleFullscreen}>
      <CornersIcon />
    </Button>
  )
}
