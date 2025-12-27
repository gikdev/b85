import { type ChangeEvent, useEffect, useState } from "react"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { workTimerSlice } from "../store"

const { setHourlyRate } = workTimerSlice.actions

export function HourlyInput() {
  const [value, setValue] = useState(0)
  const hourlyRate = useAppSelector(s => s.apps.workTimer.hourlyRate)
  const dispatch = useAppDispatch()

  useEffect(() => setValue(hourlyRate), [hourlyRate])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value)
    const isNum = !Number.isNaN(num)
    setValue(isNum ? num : 0)
  }

  const handleBlur = () => {
    if (value === hourlyRate) return
    dispatch(setHourlyRate(value))
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
