import { DownloadSimpleIcon, HouseIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { downloadContent } from "#/lib/file"
import { skins } from "#/shared/skins"
import { useAppSelector } from "#/store"

export const TopBar = () => (
  <TopAppBar
    title="نبیولا"
    className="md:hidden"
    startingStuff={<GoHomeBtn />}
    endingStuff={<DownloadContentBtn />}
  />
)

const GoHomeBtn = () => (
  <Link to="/" className={skins.btnIcon()}>
    <HouseIcon size={32} />
  </Link>
)

function DownloadContentBtn() {
  const content = useAppSelector(s => s.apps.nebula.content)

  return (
    <button
      type="button"
      className={skins.btnIcon()}
      onClick={() => downloadContent(content)}
    >
      <DownloadSimpleIcon size={32} />
    </button>
  )
}
