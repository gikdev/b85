/** biome-ignore-all lint/performance/noDynamicNamespaceImportAccess: It is what it is... */
import { useState } from "react"
import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
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
        className={skins.input({ className: "w-full" })}
        value={selectedPrompt}
        onChange={e =>
          setSelectedPrompt(e.target.value as typeof selectedPrompt)
        }
      >
        <option value={""}>هیچ</option>

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
          className: "w-full flex-1",
        })}
      />

      <button
        type="button"
        disabled={selectedPrompt === "" || input === ""}
        className={skins.btn({
          intent: "brand",
          mode: "contained",
          className: "w-full",
        })}
        onClick={() => {
          const prompt = prompts[selectedPrompt as Prompt]
          const result = prompt.replace("{{INPUT}}", input)
          copy(result)
        }}
      >
        ساخت و کپی پرامپت
      </button>
    </main>
  )
}

function fromConstToTitle(str: string) {
  return str
    .toLowerCase() // my_commit_msg
    .replace(/_/g, " ") // my commit msg
    .replace(/\b\w/g, c => c.toUpperCase()) // My Commit Msg
}
