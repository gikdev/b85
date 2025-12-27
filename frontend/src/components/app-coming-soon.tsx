import type { Icon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"

interface AppComingSoonProps {
  Icon: Icon
  title: string
}

export function AppComingSoon({ Icon, title }: AppComingSoonProps) {
  return (
    <div className="flex flex-col p-8 gap-4 items-center justify-center min-h-dvh">
      <Icon weight="fill" className="text-tusi-100" size={96} />

      <h1 className="font-black text-center text-title text-tusi-100">
        {title}
      </h1>

      <p className="">
        <span>به زودی... (</span>

        <Link to="/" className="text-brand-500 border-b border-current">
          بازگشت به خانه
        </Link>

        <span>)</span>
      </p>
    </div>
  )
}
