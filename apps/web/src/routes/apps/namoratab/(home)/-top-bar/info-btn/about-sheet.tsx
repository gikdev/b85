import { XIcon } from "@phosphor-icons/react"
import { Sheet } from "#/components/sheet"
import { skins } from "#/shared/skins"

interface AboutSheetProps {
  onClose: () => void
}

export function AboutSheet({ onClose }: AboutSheetProps) {
  return (
    <Sheet.Container onOverlayClick={onClose}>
      <Sheet.Handle />

      <Sheet.Content className="flex flex-col gap-4 text-center">
        <p className="font-bold text-h3 text-tusi-100">درباره «نامرتب»</p>

        <p className="leading-relaxed">
          هدف این برنامه، کمک به کانال‌دارانی هست که باید محتوای کانال‌شون مرتب،
          بدون غلط املایی، و با ایموجی باشه. از اون‌جایی که می‌دیدم که مرتب‌کردن
          مطالب کانال، کاری نیست که «لازم باشه من انجام بدم»، گفتم یه
          برنامه‌بنویسم و این رو به هوش مصنوعی بسپرم. این بود که این برنامه متولد
          شد ✨
        </p>

        <button
          type="button"
          onClick={onClose}
          className={skins.btn({ intent: "neutral", mode: "text" })}
        >
          <XIcon />
          <span>بستن</span>
        </button>
      </Sheet.Content>
    </Sheet.Container>
  )
}
