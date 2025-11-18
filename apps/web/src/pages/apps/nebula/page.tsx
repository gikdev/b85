import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { BottomBar } from "./bottom-bar"
import { ContentArea } from "./content-area"
import { DownloadContentBtn } from "./shared"

export const HomePage = () => (
  <div className={skins.page()}>
    <TopAppBar
      title="نبیولا"
      className="md:hidden"
      startingStuff={<GoHomeBtn />}
      endingStuff={<DownloadContentBtn />}
    />

    <ContentArea />

    <BottomBar />
  </div>
)
