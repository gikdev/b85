import { HouseIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { skins } from "#/shared/skins"

export const GoHomeBtn = ({ isDesktop = false }: { isDesktop?: boolean }) => (
  <Link
    to="/"
    className={skins.btnIcon({ size: isDesktop ? "iconDesktop" : undefined })}
  >
    <HouseIcon size={isDesktop ? 24 : 32} />
  </Link>
)
