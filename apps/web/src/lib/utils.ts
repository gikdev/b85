import type { MouseEvent } from "react"
import { toast } from "react-toastify"
import { extractErrorMessage } from "./errors"

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
