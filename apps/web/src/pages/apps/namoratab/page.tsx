import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { AboutSheet } from "./about-sheet"
import { ContentInput } from "./content-input"
import { InfoBtn } from "./info-btn"
import { OrganizeBtn } from "./organize-btn"
import { ResultSheet } from "./result-sheet"

export const HomePage = () => (
  <div className={skins.page()}>
    <TopAppBar
      title="نامرتب"
      startingStuff={<GoHomeBtn />}
      endingStuff={<InfoBtn />}
    />

    <main className="flex flex-col gap-4 p-4 flex-1">
      <ContentInput />

      <OrganizeBtn />
    </main>

    <ResultSheet />
    <AboutSheet />
  </div>
)
