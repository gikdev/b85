/** biome-ignore-all lint/complexity/useLiteralKeys: I get TS error. */
import {
  type ILoggingProvider,
  type LogLevel,
  type LogOptions,
  logLevels,
} from "@gikdev/logger"
import { type ToastOptions, toast } from "react-toastify"

export class ToastProvider implements ILoggingProvider {
  private isDevMode = false

  constructor(isDevMode = false) {
    this.isDevMode = isDevMode
  }

  log(level: LogLevel, message: string, options?: LogOptions): void {
    const toastOption = options?.["toast"]
    const canUserSee = typeof toastOption === "boolean" && toastOption === true
    if (!canUserSee && !this.isDevMode) return

    const toastOptions: ToastOptions<unknown> = {
      className: canUserSee ? undefined : "font-['JetBrains_Mono']!",
      theme: canUserSee ? undefined : "dark",
      rtl: canUserSee ? undefined : false,
      position: canUserSee ? undefined : "bottom-left",
    }

    switch (level) {
      case logLevels.TRACE:
        toast.info(message, toastOptions)
        break

      case logLevels.DEBUG:
        toast.info(message, toastOptions)
        break

      case logLevels.INFO:
        toast.info(message, toastOptions)
        break

      case logLevels.WARNING:
        toast.warning(message, toastOptions)
        break

      case logLevels.ERROR:
        toast.error(message, toastOptions)
        break

      case logLevels.CRITICAL:
        toast.error(message, toastOptions)
        break

      default:
        break
    }
  }
}
