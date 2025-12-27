import { ChangeTotal } from "./change-total"
import { ChangeTotalSheet } from "./change-total-sheet"
import { DecTotalBtn } from "./dec-total-btn"
import { IncTotalBtn } from "./inc-total-btn"

export const Controls = () => (
  <div className="flex w-full items-center justify-center gap-8">
    <DecTotalBtn />
    <ChangeTotal />
    <IncTotalBtn />
    <ChangeTotalSheet />
  </div>
)
