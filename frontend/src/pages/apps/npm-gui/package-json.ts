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

export interface Person {
  name?: string
  email?: string
  url?: string
}

export type Dependencies = Record<string, string>
