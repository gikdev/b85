import { CopyIcon } from "@phosphor-icons/react"
import { toast } from "react-toastify"
import { Sheet } from "#/components/sheet"
import { Button } from "#/components/ui/button"
import { copyTextToClipboard } from "#/lib/copy-to-clipboard"
import { extractErrorMessage } from "#/lib/errors"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { namoratabSlice } from "./store"

const { setResult } = namoratabSlice.actions

export function ResultSheet() {
  const result = useAppSelector(s => s.apps.namoratab.result)
  const dispatch = useAppDispatch()
  const onClose = () => dispatch(setResult(null))

  if (!result) return null

  return (
    <Sheet.Container
      onOverlayClick={onClose}
      contentContainerClassName="h-[80dvh]"
    >
      <Sheet.Handle />

      <Sheet.Content className="flex flex-col gap-4">
        <p className="font-bold text-h3 text-main-fg text-center">خروجی:</p>

        <textarea
          readOnly
          value={result}
          className={skins.input({
            isMultiline: true,
            className: "flex-1",
          })}
        />

        <CopyResultBtn />
      </Sheet.Content>
    </Sheet.Container>
  )
}

function CopyResultBtn() {
  const result = useAppSelector(s => s.apps.namoratab.result)
  const handleClick = () => {
    if (!result) return

    copyTextToClipboard(result).catch(error =>
      toast.error(extractErrorMessage({ error })),
    )
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      <CopyIcon />
      <span>کپی</span>
    </Button>
  )
}
