import { Sheet } from "#/components/sheet"
import { skins } from "#/shared/skins"
import { CopyResultBtn } from "./copy-result-btn"

interface ResultSheetProps {
  result: string
  onClose: () => void
}

export function ResultSheet({ onClose, result }: ResultSheetProps) {
  return (
    <Sheet.Container
      onOverlayClick={onClose}
      contentContainerClassName="h-[80dvh]"
    >
      <Sheet.Handle />

      <Sheet.Content className="flex flex-col gap-4">
        <p className="font-bold text-h3 text-tusi-100 text-center">خروجی:</p>

        <textarea
          readOnly
          value={result}
          className={skins.input({
            isMultiline: true,
            className: "flex-1",
          })}
        />

        <CopyResultBtn result={result} />
      </Sheet.Content>
    </Sheet.Container>
  )
}
