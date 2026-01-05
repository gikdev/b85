import { platform } from "@tauri-apps/plugin-os"
import { Command } from "@tauri-apps/plugin-shell"

interface RunCommandOptions {
  cmd: string // e.g., "pnpm" or "npm"
  args?: string[] // e.g., ["install"]
  cwd?: string // working directory
}

export async function runCommand({ cmd, args = [], cwd }: RunCommandOptions) {
  let program = ""
  let shellArgs: string[] = []

  const osPlatform = platform() // returns "windows" | "linux" | "macos" etc :contentReference[oaicite:4]{index=4}

  if (osPlatform === "windows") {
    // run via PowerShell
    program = "powershell"
    shellArgs = ["-NoProfile", "-Command", `${cmd} ${args.join(" ")}`]
  } else {
    // run via sh on Unix
    program = "sh"
    shellArgs = ["-c", `${cmd} ${args.join(" ")}`]
  }

  try {
    const command = Command.create(program, shellArgs, { cwd })
    console.log(command)
    const output = await command.execute()
    return {
      success: output.code === 0,
      stdout: output.stdout,
      stderr: output.stderr,
    }
  } catch (err) {
    return {
      success: false,
      stderr: err?.toString() ?? "Unknown error",
    }
  }

}
