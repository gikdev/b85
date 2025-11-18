import {
  type ChangeEventHandler,
  type FocusEventHandler,
  useEffect,
  useState,
} from "react"
import { skins } from "#/shared/skins"
import { useAppDispatch, useAppSelector } from "#/store"
import { namoratabSlice } from "./store"

const { setContent } = namoratabSlice.actions

export function ContentInput() {
  const [value, setValue] = useState("")
  const content = useAppSelector(s => s.apps.namoratab.content)
  const dispatch = useAppDispatch()

  useEffect(() => setValue(content), [content])

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setValue(e.target.value)
  }

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = e => {
    dispatch(setContent(e.target.value))
  }

  return (
    <div className="flex flex-cols flex-1">
      <textarea
        dir="auto"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={skins.input({
          isMultiline: true,
          className: "flex-1 resize-none",
        })}
      />
    </div>
  )
}
