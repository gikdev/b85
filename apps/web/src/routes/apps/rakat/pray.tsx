import { ArrowClockwiseIcon } from "@phosphor-icons/react"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { cn } from "tailwind-variants"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { rakatSlice } from "./-store"

export const Route = createFileRoute("/apps/rakat/pray")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex flex-col flex-1 items-center justify-between gap-4 p-4">
      <RakatsSuperBtn />

      <ResetBtn />
    </main>
  )
}

function RakatsSuperBtn() {
  const currentSajde = useAppSelector(s => s.apps.rakat.currentSajde)
  const rakatCount = useAppSelector(s => s.apps.rakat.rakatCount)
  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      onClick={() => dispatch(rakatSlice.actions.incCurrentSajde())}
      className="w-full flex-1 flex flex-col p-2 gap-2 rounded-sm-elements border-2 border-dashed border-brand-600"
    >
      <Rakat disabled={rakatCount < 1} isOff={currentSajde < 0}>
        <Sajde isOff={currentSajde < 1} />
        <Sajde isOff={currentSajde < 2} />
      </Rakat>

      <Rakat disabled={rakatCount < 2} isOff={currentSajde < 2}>
        <Sajde isOff={currentSajde < 3} />
        <Sajde isOff={currentSajde < 4} />
      </Rakat>

      <Rakat disabled={rakatCount < 3} isOff={currentSajde < 4}>
        <Sajde isOff={currentSajde < 5} />
        <Sajde isOff={currentSajde < 6} />
      </Rakat>

      <Rakat disabled={rakatCount < 4} isOff={currentSajde < 6}>
        <Sajde isOff={currentSajde < 7} />
        <Sajde isOff={currentSajde < 8} />
      </Rakat>
    </button>
  )
}

interface RakatProps {
  isOff: boolean
  disabled: boolean
  children: ReactNode
}

function Rakat({ children, disabled, isOff }: RakatProps) {
  return (
    <div
      className={cn(
        "w-full rounded-sm-elements flex flex-1 bg-tusi-700 gap-2 p-2",
        disabled ? "invisible" : "",
        isOff ? "opacity-25" : "",
      )()}
    >
      {children}
    </div>
  )
}

interface SajdeProps {
  isOff: boolean
}

function Sajde({ isOff = false }: SajdeProps) {
  return (
    <div
      className={cn(
        "flex-1 h-full bg-tusi-500 rounded-sm-elements",
        isOff ? "opacity-25" : "",
      )()}
    />
  )
}

function ResetBtn() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(rakatSlice.actions.reset())
    navigate({ to: "/apps/rakat" })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={skins.btn({ className: "w-full" })}
    >
      <ArrowClockwiseIcon size={24} weight="fill" />
      <span>از اول</span>
    </button>
  )
}
