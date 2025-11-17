import { CircleNotchIcon } from "@phosphor-icons/react"
import type { ComponentProps, ReactNode } from "react"
import { useFormContext } from ".."

interface SubmitBtnProps {
  iconStarting?: ReactNode
  iconEnding?: ReactNode
  title: string | null
  onClick?: () => void
  type?: ComponentProps<"button">["type"]
  className?: string
}

export function SubmitBtn({
  iconStarting,
  iconEnding,
  title,
  onClick,
  type,
  className = "",
}: SubmitBtnProps) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={s => [s.canSubmit, s.isSubmitting]}>
      {([canSubmit, isSubmitting]) => {
        const showTitle = title !== null
        const finalTitle = isSubmitting ? "در حال بارگذاری..." : title
        const finalType = type || "button"
        const defaultClickHandler = () => form.handleSubmit()
        const finalClickHandler = onClick ?? defaultClickHandler

        return (
          <button
            type={finalType}
            onClick={finalClickHandler}
            disabled={!canSubmit || isSubmitting}
            className={className}
          >
            {isSubmitting ? (
              <CircleNotchIcon />
            ) : (
              <>
                {iconStarting}
                {showTitle && <span>{finalTitle}</span>}
                {iconEnding}
              </>
            )}
          </button>
        )
      }}
    </form.Subscribe>
  )
}
