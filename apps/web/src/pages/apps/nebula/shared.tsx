import { DownloadSimpleIcon } from "@phosphor-icons/react"
import { downloadContent } from "#/lib/file"
import { skins } from "#/shared/skins"
import { useAppSelector } from "#/store"

interface DownloadContentBtnProps {
  isDesktop?: boolean
}

export function DownloadContentBtn({
  isDesktop = false,
}: DownloadContentBtnProps) {
  const content = useAppSelector(s => s.apps.nebula.content)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: isDesktop ? "iconDesktop" : undefined })}
      onClick={() => downloadContent(content)}
    >
      <DownloadSimpleIcon size={isDesktop ? 24 : 32} />
    </button>
  )
}
