import { CopyIcon } from "@phosphor-icons/react"
import { copyTextToClipboard } from "#/lib/copy-to-clipboard"
import { extractErrorMessage } from "#/lib/errors"
import { skins } from "#/shared/skins"

interface CopyResultBtnProps {
  result: string
}

export function CopyResultBtn({ result }: CopyResultBtnProps) {
  const handleClick = () =>
    copyTextToClipboard(result).catch(error =>
      alert(extractErrorMessage({ error })),
    )

  return (
    <button
      type="button"
      onClick={handleClick}
      className={skins.btn({ intent: "neutral", mode: "text" })}
    >
      <CopyIcon />
      <span>کپی</span>
    </button>
  )
}
