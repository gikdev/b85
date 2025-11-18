import { ControlCenter } from "./control-center"
import { ResetBtn } from "./reset-btn"

export const PrayPage = () => (
  <main className="flex flex-col flex-1 items-center justify-between gap-4 p-4">
    <ControlCenter />

    <ResetBtn />
  </main>
)
