import {
  TanStackDevtools,
  type TanStackDevtoolsReactInit,
  type TanStackDevtoolsReactPlugin,
} from "@tanstack/react-devtools"
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { LoggingDevtools } from "#/logging/devtools"
import { SimpleReduxDevtools } from "#/store/simple-devtools"

const routerDevtools: TanStackDevtoolsReactPlugin = {
  name: "TanStack Router",
  render: <TanStackRouterDevtoolsPanel />,
  defaultOpen: false,
}

const queryDevtools: TanStackDevtoolsReactPlugin = {
  name: "TanStack Query",
  render: <ReactQueryDevtoolsPanel />,
  defaultOpen: false,
}

const loggingDevtools: TanStackDevtoolsReactPlugin = {
  name: "Logging",
  render: <LoggingDevtools />,
  defaultOpen: false,
}

const simpleReduxDevtools: TanStackDevtoolsReactPlugin = {
  name: "Simple Redux",
  render: <SimpleReduxDevtools />,
  defaultOpen: false,
}

const plugins = [routerDevtools, queryDevtools, loggingDevtools, simpleReduxDevtools]

const config: TanStackDevtoolsReactInit["config"] = {
  defaultOpen: false,
  theme: "dark",
  hideUntilHover: true,
  triggerHidden: true,
}

export const Devtools = () => (
  <TanStackDevtools config={config} plugins={plugins} />
)
