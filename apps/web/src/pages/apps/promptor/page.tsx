/** biome-ignore-all lint/performance/noDynamicNamespaceImportAccess: It is what it is... */

import { TrashIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { Button } from "#/components/ui/button"
import { useCopyToClipboardMutation } from "#/lib/copy-to-clipboard"
import { skins } from "#/shared/skins"
import * as prompts from "./prompts"

export const HomePage = () => (
  <div className={skins.page()}>
    <TopAppBar title="پرامپتور" startingStuff={<GoHomeBtn />} />

    <MainSection />
  </div>
)

type Prompt = keyof typeof prompts

function MainSection() {
  const [input, setInput] = useState("")
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | "">("")
  const { mutate: copy } = useCopyToClipboardMutation()

  return (
    <main className="flex flex-col flex-1 items-center gap-4 p-4 w-full max-w-160 mx-auto">
      <select
        dir="auto"
        className={skins.input({ className: "w-full" })}
        value={selectedPrompt}
        onChange={e =>
          setSelectedPrompt(e.target.value as typeof selectedPrompt)
        }
      >
        <option value="">هیچ</option>

        {Object.keys(prompts).map(p => (
          <option key={p} value={p}>
            {fromConstToTitle(p)}
          </option>
        ))}
      </select>

      <textarea
        dir="auto"
        disabled={selectedPrompt === ""}
        value={input}
        onChange={e => setInput(e.target.value)}
        className={skins.input({
          isMultiline: true,
          className: "w-full flex-1 font-mono",
        })}
      />

      <div className="flex items-center gap-2 w-full">
        <Button
          variant="destructive"
          size="icon-md"
          onClick={() => setInput("")}
        >
          <TrashIcon />
        </Button>

        <Button
          className="flex-1"
          variant="primary"
          disabled={selectedPrompt === "" || input === ""}
          onClick={() => {
            const prompt = prompts[selectedPrompt as Prompt]
            const result = prompt.render({ input })
            copy(result)
          }}
        >
          ساخت و کپی پرامپت
        </Button>
      </div>
    </main>
  )
}

/**
 * Converts a CONSTANT_CASE string into a human-readable Title Case string.
 *
 * ## Behavior
 * - Converts the entire string to lowercase.
 * - Replaces all underscores (`_`) with spaces.
 * - Capitalizes the first letter of every word.
 *
 * This function **does not mutate** the input string—it returns a new one.
 *
 * ## Constraints
 * - `str` must be a non-empty string.
 * - Underscores are treated as word separators.
 * - Characters other than letters/digits are left unchanged except where the
 *   capitalization regex applies.
 *
 * ## Example
 * ```ts
 * fromConstToTitle("MY_COMMIT_MSG")
 * // → "My Commit Msg"
 * ```
 *
 * @param str - The CONSTANT_CASE string to transform.
 *              Must be a valid string (not `null` or `undefined`).
 *
 * @returns A new string formatted in Title Case.
 */
function fromConstToTitle(str: string) {
  return str
    .toLowerCase() // my_commit_msg
    .replace(/_/g, " ") // my commit msg
    .replace(/\b\w/g, c => c.toUpperCase()) // My Commit Msg
}
