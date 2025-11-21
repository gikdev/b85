import { useCallback, useEffect, useState } from "react"
import { TimeFormatter } from "#/lib/utils"
import { useAppSelector } from "#/store"
import { calcWorkTimerElapsedSeconds } from "../store"

const useElapsedSeconds = () =>
  useAppSelector(s => {
    const { startedAt, endedAt } = s.apps.workTimer
    return calcWorkTimerElapsedSeconds(startedAt, endedAt)
  })

export function TimerTime() {
  const elapsedSeconds = useElapsedSeconds()
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const id = setInterval(() => forceUpdate(), 100)
    return () => clearInterval(id)
  }, [forceUpdate])

  const timerTime = new TimeFormatter(elapsedSeconds).toPersianTime()

  return (
    <p dir="ltr" className="text-title font-black text-main-fg">
      {timerTime}
    </p>
  )
}

function useForceUpdate() {
  const [, setCount] = useState(0)

  const forceUpdate = useCallback(() => setCount(n => n + 1), [])

  return forceUpdate
}
