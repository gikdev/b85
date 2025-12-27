import { HouseIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { buttonVariants } from "./ui/button"

export const GoHomeBtn = () => (
  <Link
    to="/"
    className={buttonVariants({ size: "icon-md", variant: "ghost" })}
  >
    <HouseIcon />
  </Link>
)
