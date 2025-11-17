import { HouseIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { InfoBtn } from "./info-btn"

export const TopBar = () => (
  <TopAppBar
    title="نامرتب"
    startingStuff={<GoHomeBtn />}
    endingStuff={<InfoBtn />}
  />
)

const GoHomeBtn = () => (
  <Link to="/" className={skins.btnIcon()}>
    <HouseIcon size={32} />
  </Link>
)
