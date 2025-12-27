import { CornersOutIcon } from "@phosphor-icons/react"
import { useFullscreen } from "@reactuses/core"
import { useRef } from "react"
import { Button } from "#/components/ui/button"

export function GoFullscreenBtn() {
  const docRef = useRef<HTMLElement>(document.documentElement)
  const [, { enterFullscreen }] = useFullscreen(docRef)

  return (
    <Button onClick={enterFullscreen} variant="ghost" size="icon-md">
      <CornersOutIcon />
    </Button>
  )
}
