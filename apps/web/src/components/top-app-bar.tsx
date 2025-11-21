import type { ReactNode } from "react"
import { tvcn } from "#/lib/utils"

interface TopAppBarProps {
  title: string
  startingStuff?: ReactNode
  endingStuff?: ReactNode
  className?: string
}

export function TopAppBar({
  title,
  endingStuff,
  startingStuff,
  className,
}: TopAppBarProps) {
  return (
    <header
      className={tvcn(
        "h-16 p-2 flex items-center justify-between border-b border-border",
        className,
      )}
    >
      <div className="size-12 flex items-center justify-center">
        {startingStuff}
      </div>
      {/* {startingStuff} */}

      <p className="font-bold text-main-fg">{title}</p>

      <div className="size-12 flex items-center justify-center">
        {endingStuff}
      </div>
    </header>
  )
}
