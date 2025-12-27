import { open } from "@tauri-apps/plugin-dialog"
import { readTextFile } from "@tauri-apps/plugin-fs"
import { useState } from "react"
import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { Button } from "#/components/ui/button"
import { skins } from "#/shared/skins"
import type { PackageJson } from "./package-json"

export function HomePage() {
  return (
    <div className={skins.page()}>
      <TopAppBar title="NPM GUI" startingStuff={<GoHomeBtn />} />

      <main className="flex flex-col flex-1 items-center gap-4 p-4 w-full max-w-160 mx-auto">
        <MainSection />
      </main>
    </div>
  )
}

function MainSection() {
  const [pkg, setPkg] = useState<PackageJson | null>(null)

  const handleSelect = async () => {
    const filePath = await open({
      directory: false,
      multiple: false,
      title: "Select a Package.json file",
      filters: [{ name: "package.json", extensions: ["json"] }],
    })
    if (!filePath) return

    const content = await readTextFile(filePath)
    const pkg = JSON.parse(content) as PackageJson

    setPkg(pkg)
  }

  return (
    <div>
      <Button onClick={handleSelect}>
        Select a <code>package.json</code>
      </Button>

      {pkg && (
        <div>
          <p>Name: {pkg.name || "-"}</p>
          <p>Deps: {Object.keys(pkg.dependencies || {}).join(", ")}</p>
        </div>
      )}
    </div>
  )
}
