import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import type { Currency } from "../shared"
import { workTimerSlice } from "../store"

const { setCurrency } = workTimerSlice.actions

export function CurrencyInput() {
  const currency = useAppSelector(s => s.apps.workTimer.currency)
  const dispatch = useAppDispatch()

  return (
    <label className={skins.labeler()}>
      <p>واحد پولی</p>

      <select
        className={skins.select()}
        value={currency}
        onChange={e => dispatch(setCurrency(e.target.value as Currency))}
      >
        <option value={"IRR" satisfies Currency}>ریال</option>
        <option value={"IRT" satisfies Currency}>تومان</option>
        <option value={"USD" satisfies Currency}>دلار</option>
      </select>
    </label>
  )
}
