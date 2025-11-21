import {
  type ChangeEventHandler,
  type FocusEventHandler,
  useEffect,
  useState,
} from "react"
import { useAppDispatch, useAppSelector } from "#/store"
import { nebulaSlice } from "./store"

const { setContent } = nebulaSlice.actions

export function ContentArea() {
  const [value, setValue] = useState("")
  const content = useAppSelector(s => s.apps.nebula.content)
  const dispatch = useAppDispatch()

  useEffect(() => setValue(content), [content])

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e =>
    setValue(e.target.value)

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = e =>
    dispatch(setContent(e.target.value))

  return (
    <main
      className="
        flex flex-col flex-1 items-center
        justify-center gap-4 p-4 md:gap-8
        md:p-8 mx-auto w-full max-w-238
      "
    >
      <textarea
        dir="auto"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="
          w-full flex-1 resize-none border-none
          outline-none focus:text-main-fg
          font-code no-scrollbar
        "
      />
    </main>
  )
}
