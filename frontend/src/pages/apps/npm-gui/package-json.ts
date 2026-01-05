export interface PackageJson {
  name?: string
  version?: string
  private?: boolean
  description?: string
  keywords?: string[]
  homepage?: string
  bugs?: string | { url?: string; email?: string }
  license?: string
  author?: string | Person
  contributors?: Array<string | Person>
  funding?: string | { type?: string; url?: string }

  type?: "module" | "commonjs"

  main?: string
  module?: string
  types?: string
  typings?: string
  bin?: string | Record<string, string>
  files?: string[]
  exports?: unknown

  scripts?: Record<string, string>

  dependencies?: Dependencies
  devDependencies?: Dependencies
  peerDependencies?: Dependencies
  optionalDependencies?: Dependencies

  engines?: {
    node?: string
    npm?: string
    pnpm?: string
    yarn?: string
  }

  os?: string[]
  cpu?: string[]

  workspaces?: string[] | { packages?: string[] }

  packageManager?: string

  // Allow unknown fields (VERY important)
  [key: string]: unknown
}

interface Person {
  name?: string
  email?: string
  url?: string
}

type Dependencies = Record<string, string>

type DependencyKind = "normal" | "dev" | "peer" | "optional"

export interface NormalizedDependency {
  name: string
  version: string
  kind: DependencyKind
}

export function collectDependencies(pkg: PackageJson): NormalizedDependency[] {
  const sections: Array<[DependencyKind, Dependencies | undefined]> = [
    ["normal", pkg.dependencies],
    ["dev", pkg.devDependencies],
    ["peer", pkg.peerDependencies],
    ["optional", pkg.optionalDependencies],
  ]

  return sections.flatMap(([kind, deps]) =>
    Object.entries(deps ?? {}).map(([name, version]) => ({
      name,
      version,
      kind,
    })),
  )
}

export function sortPackagesByName<T extends { name: string }>(
  packages: T[],
): T[] {
  return [...packages].sort((a, b) => {
    const normalize = (name: string) =>
      name.startsWith("@") ? name.slice(1) : name

    return normalize(a.name).localeCompare(normalize(b.name), undefined, {
      sensitivity: "base",
    })
  })
}
