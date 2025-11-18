import { ConsoleProvider, Logger, logLevels } from "@gikdev/logger"
import { DevtoolsProvider } from "./devtools-provider"
import { ToastProvider } from "./toast-provider"

const devtoolsProvider = new DevtoolsProvider()
const toastProvider = new ToastProvider(import.meta.env.DEV || false)
const consoleProvider = new ConsoleProvider()

export const logger = new Logger({
  minLogLevel: logLevels.INFO,
  providers: [consoleProvider, toastProvider, devtoolsProvider],
})
