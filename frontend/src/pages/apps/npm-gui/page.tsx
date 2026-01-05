import {
  ClipboardTextIcon,
  FileDashedIcon,
  TrashIcon,
} from "@phosphor-icons/react"
import { open } from "@tauri-apps/plugin-dialog"
import { readTextFile } from "@tauri-apps/plugin-fs"
import { useState } from "react"
import { toast } from "react-toastify"
import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { Button } from "#/components/ui/button"
import path from "path-browserify"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table"
import { skins } from "#/shared/skins"
import { runCommand } from "./command"
import {
  collectDependencies,
  type NormalizedDependency,
  type PackageJson,
  sortPackagesByName,
} from "./package-json"

export function HomePage() {
  const [packageFilePath, setPackageFilePath] = useState<string | null>(null)
  const [packageConfig, setPackageConfig] = useState<PackageJson | null>(null)
  const [dependencies, setDependencies] = useState<NormalizedDependency[]>([])

  const handleSelect = async () => {
    const filePath = await open({
      directory: false,
      multiple: false,
      title: "Select a Package.json file",
      filters: [{ name: "package.json", extensions: ["json"] }],
    })

    if (!filePath) return
    console.log(filePath)
    setPackageFilePath(filePath)

    const content = await readTextFile(filePath)
    const pkg = JSON.parse(content) as PackageJson
    setPackageConfig(pkg)

    const allDeps = collectDependencies(pkg)
    const sortedDeps = sortPackagesByName(allDeps)
    setDependencies(sortedDeps)
  }

  const handleRemove = async (depName: string) => {
    if (!packageConfig || !packageFilePath) return

    try {
      const folderPath = path.dirname(packageFilePath)
      const result = await runCommand({
        cmd: "pnpm",
        args: ["remove", depName],
        cwd: folderPath,
      })

      if (result.success) {
        setDependencies(prev => prev.filter(d => d.name !== depName))
        toast.success(`✅ Removed ${depName}`)
      } else {
        console.error(result.stderr)
        toast.error(`❌ Failed to remove ${depName}:\n${result.stderr}`)
      }
    } catch (err) {
      console.error(err)
      toast.error(`❌ Error removing ${depName}:\n${err}`)
    }
  }

  return (
    <div className={skins.page({ className: "font-code" })} dir="ltr">
      <TopAppBar
        title="NPM GUI"
        startingStuff={<GoHomeBtn />}
        endingStuff={
          <Button onClick={handleSelect} variant="ghost" size="icon-md">
            <FileDashedIcon />
          </Button>
        }
      />

      <main className="flex flex-col flex-1 items-center gap-4 p-4 w-full max-w-full mx-auto">
        <div className="w-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-full">Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {dependencies.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-fg">
                    No dependencies found
                  </TableCell>
                </TableRow>
              )}

              {dependencies.map(dep => (
                <TableRow key={`${dep.kind}:${dep.name}`}>
                  <TableCell>{dep.name}</TableCell>
                  <TableCell>{dep.kind}</TableCell>
                  <TableCell>{dep.version}</TableCell>
                  <TableCell className="inline-flex gap-1">
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      title="Copy package name"
                      disabled
                    >
                      <ClipboardTextIcon size={18} />
                    </Button>

                    <Button
                      size="icon-sm"
                      variant="ghost"
                      title="Remove dependency"
                      onClick={() => handleRemove(dep.name)}
                    >
                      <TrashIcon size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}
