import { CornersOutIcon } from "@phosphor-icons/react"
import { useFullscreen } from "@reactuses/core"
import { useRef } from "react"
import { skins } from "#/shared/skins"

export function GoFullscreenBtn() {
  const docRef = useRef<HTMLElement>(document.documentElement)
  const [, { enterFullscreen }] = useFullscreen(docRef)

  return (
    <button type="button" className={skins.btnIcon()} onClick={enterFullscreen}>
      <CornersOutIcon size={32} />
    </button>
  )
}
