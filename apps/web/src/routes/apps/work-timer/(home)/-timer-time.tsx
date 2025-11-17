import { useCallback, useEffect, useState } from "react"
import { TimeFormatter } from "#/lib/utils"
import { useAppSelector } from "#/store"
import { calcWorkTimerElapsedSeconds } from "../-store"

export function TimerTime() {
  const startedAt = useAppSelector(s => s.apps.workTimer.startedAt)
  const endedAt = useAppSelector(s => s.apps.workTimer.endedAt)
  const elapsedSeconds = calcWorkTimerElapsedSeconds(startedAt, endedAt)
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const id = setInterval(() => forceUpdate(), 100)
    return () => clearInterval(id)
  }, [forceUpdate])

  const timerTime = new TimeFormatter(elapsedSeconds).toPersianTime()

  return (
    <p dir="ltr" className="text-title font-black text-tusi-100">
      {timerTime}
    </p>
  )
}

function useForceUpdate() {
  const [, setCount] = useState(0)

  const forceUpdate = useCallback(() => setCount(n => n + 1), [])

  return forceUpdate
}
