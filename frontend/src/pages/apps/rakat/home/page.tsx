import { Navigate } from "@tanstack/react-router"
import { useAppSelector } from "#/store"

export function HomePage() {
  const destination = useDestination()

  return <Navigate to={destination} />
}

const useDestination = () =>
  useAppSelector(s => {
    const rakatCount = s.apps.rakat.rakatCount
    const isValid = [2, 3, 4].includes(rakatCount)
    return isValid ? "/apps/rakat/pray" : "/apps/rakat/choose"
  })
