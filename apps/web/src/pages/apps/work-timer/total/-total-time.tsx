import { TimeFormatter } from "#/lib/utils"
import { useAppSelector } from "#/store"

export function TotalTime() {
  const totalSeconds = useAppSelector(s => s.apps.workTimer.totalSeconds)
  const total = new TimeFormatter(totalSeconds).toPersianTime()

  return (
    <p className="text-title font-black text-tusi-100" dir="ltr">
      {total}
    </p>
  )
}
