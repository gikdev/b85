import { createFileRoute, Navigate } from "@tanstack/react-router"
import { useAppSelector } from "#/store"

export const Route = createFileRoute("/apps/rakat/")({
  component: RouteComponent,
})

function RouteComponent() {
  const rakatCount = useAppSelector(s => s.apps.rakat.rakatCount)

  const isValidRakat = [2, 3, 4].includes(rakatCount)

  return (
    <Navigate to={isValidRakat ? "/apps/rakat/pray" : "/apps/rakat/choose"} />
  )
}
