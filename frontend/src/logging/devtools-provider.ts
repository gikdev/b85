import type { ILoggingProvider, LogLevel, LogOptions } from "@gikdev/logger"
import { store } from "#/store"
import { loggingDevtoolsSlice } from "./slice"

export class DevtoolsProvider implements ILoggingProvider {
  log(
    level: LogLevel,
    message: string,
    options?: LogOptions,
  ): void | Promise<void> {
    store.dispatch(
      loggingDevtoolsSlice.actions.log({
        level,
        message,
        options,
      }),
    )
  }
}
