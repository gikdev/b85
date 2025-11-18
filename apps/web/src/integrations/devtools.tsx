import {
  TanStackDevtools,
  type TanStackDevtoolsReactInit,
  type TanStackDevtoolsReactPlugin,
} from "@tanstack/react-devtools"
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { LoggingDevtools } from "#/logging/devtools"

const routerDevtools: TanStackDevtoolsReactPlugin = {
  name: "TanStack Router",
  render: <TanStackRouterDevtoolsPanel />,
  defaultOpen: false,
}

const queryDevtools: TanStackDevtoolsReactPlugin = {
  name: "TanStack Query",
  render: <ReactQueryDevtoolsPanel />,
  defaultOpen: true,
}

const loggingDevtools: TanStackDevtoolsReactPlugin = {
  name: "Logging",
  render: <LoggingDevtools />,
  defaultOpen: true,
}

const plugins = [routerDevtools, queryDevtools, loggingDevtools]

const config: TanStackDevtoolsReactInit["config"] = {
  defaultOpen: false,
  theme: "dark",
  hideUntilHover: true,
}

export const Devtools = () => (
  <TanStackDevtools config={config} plugins={plugins} />
)
