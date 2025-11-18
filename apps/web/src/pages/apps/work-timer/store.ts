import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { useAppSelector } from "#/store"
import type { Currency } from "./shared"

interface WorkTimerStore {
  currency: Currency
  hourlyRate: number
  totalSeconds: number
  startedAt: string | null
  endedAt: string | null
  dailyTimeTarget: number
  isDailyGoalSetupSheetOpen: boolean
  isChangeTotalSheetOpen: boolean
}

const initialState: WorkTimerStore = {
  currency: "IRT",
  hourlyRate: 100,
  totalSeconds: 0,
  startedAt: null,
  endedAt: null,
  dailyTimeTarget: 5 * 60 * 60,
  isDailyGoalSetupSheetOpen: false,
  isChangeTotalSheetOpen: false,
}

export const workTimerSlice = createSlice({
  name: "Work Timer",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<WorkTimerStore["currency"]>) => {
      state.currency = action.payload
    },

    setHourlyRate: (
      state,
      action: PayloadAction<WorkTimerStore["hourlyRate"]>,
    ) => {
      state.hourlyRate = action.payload
    },

    setTotalSeconds: (
      state,
      action: PayloadAction<WorkTimerStore["totalSeconds"]>,
    ) => {
      state.totalSeconds = action.payload
    },

    incTotalSeconds: state => {
      state.totalSeconds += 60
    },

    incTotalSecondsBy: (state, action: PayloadAction<number>) => {
      state.totalSeconds += action.payload
    },

    decTotalSeconds: state => {
      const final = state.totalSeconds - 60
      state.totalSeconds = final < 0 ? 0 : final
    },

    startTimer: state => {
      state.startedAt = new Date().toISOString()
      state.endedAt = null
    },

    endTimer: state => {
      state.endedAt = new Date().toISOString()
    },

    resetTimer: state => {
      state.startedAt = null
      state.endedAt = null
    },

    setDailyTimeTarget: (
      state,
      action: PayloadAction<WorkTimerStore["dailyTimeTarget"]>,
    ) => {
      state.dailyTimeTarget = action.payload
    },

    openDailyGoalSetupSheet: state => {
      state.isDailyGoalSetupSheetOpen = true
    },

    closeDailyGoalSetupSheet: state => {
      state.isDailyGoalSetupSheetOpen = false
    },

    openChangeTotalSheet: state => {
      state.isChangeTotalSheetOpen = true
    },

    closeChangeTotalSheet: state => {
      state.isChangeTotalSheetOpen = false
    },
  },
})

export function calcWorkTimerElapsedSeconds(
  startedAt: string | null,
  endedAt: string | null,
) {
  if (!startedAt) return 0

  const start = new Date(startedAt).getTime()
  const end = endedAt ? new Date(endedAt).getTime() : Date.now()

  return Math.floor((end - start) / 1000)
}

export function useDailyProgress() {
  const totalSeconds = useAppSelector(s => s.apps.workTimer.totalSeconds)
  const dailyTimeTarget = useAppSelector(s => s.apps.workTimer.dailyTimeTarget)

  if (dailyTimeTarget <= 0) return 0

  const percentRaw = (totalSeconds / dailyTimeTarget) * 100
  const percentMax100 = Math.min(percentRaw, 100)
  const percentRound = Math.floor(percentMax100)

  return percentRound
}
