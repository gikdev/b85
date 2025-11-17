import { createFileRoute } from "@tanstack/react-router"
import { PlayStopBtn } from "./-play-stop-btn"
import { ResetBtn } from "./-reset-btn"
import { SendBtn } from "./-send-btn"
import { TimerTime } from "./-timer-time"

export const Route = createFileRoute("/apps/work-timer/(home)/")({
  component: RouteComponent,
  staticData: {
    appTitle: "تایمر کار",
  },
})

function RouteComponent() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center gap-8 p-4">
      <div className="flex flex-col gap-8 items-center">
        <TimerTime />

        <div className="flex w-full items-center justify-center gap-8">
          <SendBtn />

          <PlayStopBtn />

          <ResetBtn />
        </div>
      </div>
    </main>
  )
}
