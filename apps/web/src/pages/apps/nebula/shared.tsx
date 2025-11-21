import { DownloadSimpleIcon } from "@phosphor-icons/react"
import { Button } from "#/components/ui/button"
import { downloadContent } from "#/lib/file"
import { useAppSelector } from "#/store"

export function DownloadContentBtn() {
  const content = useAppSelector(s => s.apps.nebula.content)

  return (
    <Button size="icon-md" onClick={() => downloadContent(content)}>
      <DownloadSimpleIcon />
    </Button>
  )
}
