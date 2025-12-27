import type { LogLevel } from "@gikdev/logger"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import * as uuid from "uuid"
import { safeToString } from "#/lib/utils"

interface LogEntryInput {
  level: LogLevel
  message: string
  options?: Record<string, unknown>
}

export interface LogEntry {
  id: string
  level: LogLevel
  message: string
  options: string | null
  createdAt: number
}

interface LoggingDevtoolsStore {
  entries: LogEntry[]
}

const initialState: LoggingDevtoolsStore = {
  entries: [],
}

export const loggingDevtoolsSlice = createSlice({
  initialState,
  name: "Logging Devtools",
  reducers: {
    log: (state, action: PayloadAction<LogEntryInput>) => {
      state.entries.push({
        id: uuid.v4(),
        level: action.payload.level,
        message: action.payload.message,
        options: safeToString(action.payload.options),
        createdAt: Date.now(),
      })
    },

    clear: state => {
      state.entries = []
    },

    clearByLevel: (state, action: PayloadAction<LogLevel>) => {
      state.entries = state.entries.filter(e => e.level !== action.payload)
    },
  },
})
