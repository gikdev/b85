import { useState } from "react"
import { copyInnerContent, getLogLevelEmoji, prettifyJson } from "#/lib/utils"
import { useAppSelector } from "#/store"
import type { LogEntry } from "./slice"

export function LoggingDevtools() {
  const entries = useAppSelector(s => s.loggingDevtools.entries)

  return (
    <div className="font-['JetBrains_Mono']! flex flex-col">
      {entries.map(e => (
        <LogEntryComponent {...e} key={e.id} />
      ))}
    </div>
  )
}

function LogEntryComponent({
  createdAt,
  id,
  level,
  message,
  options,
}: LogEntry) {
  const [isOpen, setOpen] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setOpen(p => !p)}
      onContextMenu={copyInnerContent}
      key={id}
      className="hover:bg-white/10 p-4 flex flex-col gap-2 cursor-pointer"
    >
      <p className="flex items-center">
        <span>[{getLogLevelEmoji(level)}]&nbsp;</span>
        <strong>{message}</strong>
        <span className="text-xs ms-auto font-main">
          {new Date(createdAt).toLocaleString("fa")}
        </span>
      </p>

      {isOpen && options && (
        <pre className="text-start text-xs font-[inherit]">
          {prettifyJson(options)}
        </pre>
      )}
    </button>
  )
}
