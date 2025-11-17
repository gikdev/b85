import { type ChangeEvent, useEffect, useId, useState } from "react"
import { skins } from "#/shared/skins"
import { TimeFormatter } from "#/lib/utils"
import { useAppDispatch, useAppSelector } from "#/store"
import type { Currency } from "../../-shared"
import { workTimerSlice } from "../../-store"
import { ChangeDailyGoalBtn } from "./change-daily-goal-btn"

const inputStyle = skins.input({ className: "flex-1 w-full" })

export function SettingsForm() {
  return (
    <>
      <HourlyInput />
      <CurrencyInput />
      <DailyGoalInput />
    </>
  )
}

function HourlyInput() {
  const [value, setValue] = useState(0)
  const hourlyRate = useAppSelector(s => s.apps.workTimer.hourlyRate)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setValue(hourlyRate)
  }, [hourlyRate])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value)
    const isNum = !Number.isNaN(num)
    setValue(isNum ? num : 0)
  }

  const handleBlur = () => {
    if (value === hourlyRate) return
    dispatch(workTimerSlice.actions.setHourlyRate(value))
  }

  return (
    <label className={skins.labeler()}>
      <p>مقدار درآمد در ساعت</p>

      <input
        dir="ltr"
        type="number"
        className={skins.input()}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </label>
  )
}

function CurrencyInput() {
  const currency = useAppSelector(s => s.apps.workTimer.currency)
  const dispatch = useAppDispatch()

  return (
    <label className={skins.labeler()}>
      <p>واحد پولی</p>

      <select
        className={skins.select()}
        value={currency}
        onChange={e =>
          dispatch(
            workTimerSlice.actions.setCurrency(e.target.value as Currency),
          )
        }
      >
        <option value={"IRR" satisfies Currency}>ریال</option>
        <option value={"IRT" satisfies Currency}>تومان</option>
        <option value={"USD" satisfies Currency}>دلار</option>
      </select>
    </label>
  )
}

function DailyGoalInput() {
  const id = useId()
  const dailyTimeTarget = useAppSelector(s => s.apps.workTimer.dailyTimeTarget)
  const target = new TimeFormatter(dailyTimeTarget).toPersianTime()

  return (
    <div className={skins.labeler()}>
      <label htmlFor={id}>هدف روزانه</label>

      <div className={skins.elementGroup({ className: "h-14" })}>
        <ChangeDailyGoalBtn />

        <input
          id={id}
          dir="ltr"
          className={inputStyle}
          readOnly
          value={target}
        />
      </div>
    </div>
  )
}
