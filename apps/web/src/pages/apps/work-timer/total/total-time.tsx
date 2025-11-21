import { TimeFormatter } from "#/lib/utils"
import { useAppSelector } from "#/store"

const useTotalSeconds = () =>
  useAppSelector(s =>
    new TimeFormatter(s.apps.workTimer.totalSeconds).toPersianTime(),
  )

export function TotalTime() {
  const totalSeconds = useTotalSeconds()

  return (
    <p className="text-title font-black text-main-fg" dir="ltr">
      {totalSeconds}
    </p>
  )
}
