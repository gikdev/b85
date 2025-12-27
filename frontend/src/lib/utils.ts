import { type LogLevel, logLevels } from "@gikdev/logger"
import type { MouseEvent } from "react"
import { toast } from "react-toastify"
import { type CnOptions, cn } from "tailwind-variants"
import { extractErrorMessage } from "./errors"

export const tvcn = (...classes: CnOptions) => cn(...classes)

export function copyContentToClipboard(e: MouseEvent<HTMLElement>) {
  const text = e.currentTarget.textContent?.trim()
  if (!text) return

  navigator.clipboard
    .writeText(text)
    .then(() => toast.success("کپی شد."))
    .catch(error => toast.error(extractErrorMessage({ error })))
}

type PositionElements = Array<{ position: number }>

export const sortByPosition = <T extends PositionElements>(items: T) =>
  [...items].sort((a, b) => a.position - b.position)

export const strToNullableNum = (str: string) =>
  Number.isNaN(Number(str)) ? null : Number(str)

export function toPersianDigits(str: string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return str.replace(/\d/g, d => persianDigits[+d])
}

export class TimeFormatter {
  private totalSeconds = 0

  constructor(totalSeconds: number = 0) {
    this.totalSeconds = totalSeconds
  }

  private formatTime(): string {
    const hours = Math.floor(this.totalSeconds / 3600)
    const minutes = Math.floor((this.totalSeconds % 3600) / 60)
    const seconds = this.totalSeconds % 60

    return (
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`
    )
  }

  toEnglishTime(): string {
    return this.formatTime()
  }

  toPersianTime(): string {
    return toPersianDigits(this.formatTime())
  }
}

export function safeToString(input: unknown): string | null {
  if (input == null) return null // handles null & undefined

  // 1) Try JSON.stringify
  try {
    const json = JSON.stringify(input)
    if (typeof json === "string") return json
  } catch {
    // ignore
  }

  // 2) Try String(...)
  try {
    const str = String(input)
    if (typeof str === "string") return str
  } catch {
    // ignore
  }

  // 3) Total failure
  return null
}

export function getLogLevelEmoji(logLevel: LogLevel) {
  switch (logLevel) {
    case logLevels.TRACE:
      return "🐾"

    case logLevels.DEBUG:
      return "🔎"

    case logLevels.INFO:
      return "ℹ️"

    case logLevels.WARNING:
      return "⚠️"

    case logLevels.ERROR:
      return "❌"

    case logLevels.CRITICAL:
      return "💣"

    default:
      return "❔"
  }
}

export const copyInnerContent = (e: MouseEvent<HTMLButtonElement>) => {
  const text = e.currentTarget.innerText
  navigator.clipboard.writeText(text).catch(console.error)
}

/**
 * If `input` is a valid JSON string, returns a prettified version.
 * Otherwise, returns the original string.
 */
export function prettifyJson(input: string): string {
  try {
    const parsed = JSON.parse(input)
    return JSON.stringify(parsed, null, 2) // 2-space indentation
  } catch {
    return input
  }
}
