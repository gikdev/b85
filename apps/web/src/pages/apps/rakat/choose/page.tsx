import { CaretRightIcon, HandsPrayingIcon } from "@phosphor-icons/react"
import { useNavigate } from "@tanstack/react-router"
import { tvcn } from "#/lib/utils"
import { useAppDispatch } from "#/store"
import { rakatSlice } from "../store"

export const ChoosePage = () => (
  <main className="flex flex-col flex-1 items-center justify-between gap-8 p-4">
    <RakatOptionSection />
  </main>
)

const { setRakatCount } = rakatSlice.actions

function RakatOptionSection() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const chooseRakat = (count: number) => () => {
    dispatch(setRakatCount(count))
    navigate({ to: "/apps/rakat/pray" })
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-h1 font-bold text-main-fg text-center">چند رکعت؟</h1>

      <p className="text-center">
        تعداد رکعت یا نمازی که می‌خوای بخونی رو انتخاب کن
      </p>

      <div className="flex flex-col gap-4 w-full">
        <RakatOption title="۲ رکعت (صبح)" onClick={chooseRakat(2)} />
        <RakatOption title="۳ رکعت (مغرب)" onClick={chooseRakat(3)} />
        <RakatOption title="۴ رکعت (ظهر، عصر و ...)" onClick={chooseRakat(4)} />
      </div>
    </div>
  )
}

interface RakatOptionProps {
  onClick?: () => void
  title: string
}

function RakatOption({ title, onClick }: RakatOptionProps) {
  const containerStyles = tvcn(`
    cursor-pointer rounded-sm-elements
    bg-secondary-bg/50
    hover:bg-secondary-bg hover:text-main-fg
    flex items-center justify-start
    py-2 gap-4 min-h-14 px-4
  `)

  return (
    <button onClick={onClick} type="button" className={containerStyles}>
      <HandsPrayingIcon size={24} />
      <span className="flex-1 text-start">{title}</span>
      <CaretRightIcon mirrored size={24} />
    </button>
  )
}
