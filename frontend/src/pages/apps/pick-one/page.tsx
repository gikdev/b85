import { useState } from "react"
import { GoHomeBtn } from "#/components/go-home-btn"
import { TopAppBar } from "#/components/top-app-bar"
import { Button } from "#/components/ui/button"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { pickOneSlice } from "./store"
import { usePickOneState } from "./use-pick-one-state"

export function HomePage() {
  return (
    <div className={skins.page()}>
      <TopAppBar title="Pick One" startingStuff={<GoHomeBtn />} />

      <main className="flex flex-col flex-1 items-center gap-4 p-4 w-full max-w-160 mx-auto">
        <MainSection />
      </main>
    </div>
  )
}

const { choose, fill, reset } = pickOneSlice.actions

function MainSection() {
  const dispatch = useAppDispatch()
  const state = usePickOneState()
  const [input, setInput] = useState("")

  switch (state.status) {
    case "EMPTY":
      return (
        <>
          <textarea
            dir="auto"
            value={input}
            onChange={e => setInput(e.target.value)}
            className={skins.input({
              isMultiline: true,
              className: "w-full min-h-40 flex-1",
            })}
          />

          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              dispatch(fill(input))
              setInput("")
            }}
          >
            شروع
          </Button>
        </>
      )

    case "WINNER":
      return (
        <>
          <p>
            <span>گزینه برتر: </span>
            <span dir="auto">{state.winner}</span>
          </p>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => dispatch(reset())}
          >
            از اول
          </Button>
        </>
      )

    case "CHOOSING":
      return (
        <>
          <p>انتخاب کن:</p>

          <Button
            dir="auto"
            variant="secondary"
            className="w-full"
            onClick={() => dispatch(choose("A"))}
          >
            {state.optionA}
          </Button>

          <Button
            dir="auto"
            variant="secondary"
            className="w-full"
            onClick={() => dispatch(choose("B"))}
          >
            {state.optionB}
          </Button>
        </>
      )
  }
}
