import { CurrencyInput } from "./currency-input"
import { DailyGoalInput } from "./daily-goal-input"
import { DailyGoalSetupSheet } from "./daily-goal-setup-sheet"
import { HourlyInput } from "./hourly-input"

export const SettingsPage = () => (
  <main className="flex flex-col flex-1 items-center gap-4 p-4">
    <HourlyInput />
    <CurrencyInput />
    <DailyGoalInput />
    <DailyGoalSetupSheet />
  </main>
)
