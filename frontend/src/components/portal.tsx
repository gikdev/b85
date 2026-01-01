import type { ReactNode } from "react"
import { createPortal } from "react-dom"
import { logger } from "#/logging"

interface PortalProps {
  children: ReactNode
  query: string
}

export function Portal({ children, query }: PortalProps) {
  const target = document.querySelector(query)

  if (!target) {
    logger.warn("No target elements found in Portal component")
    return null
  }

  return createPortal(children, target)
}
