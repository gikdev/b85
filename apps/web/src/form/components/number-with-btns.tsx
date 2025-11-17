import { MinusIcon, PlusIcon } from "@phosphor-icons/react"
import { useId } from "react"
import { skins } from "#/shared/skins"
import { useFieldContext } from ".."
import { ErrorMsg } from "./error-msg"

const inputishBtn = skins.btnIcon({
  size: "inputish",
  theme: "inputish",
})

interface NumberWithBtnsProps {
  label: string
}

export function NumberWithBtns({ label }: NumberWithBtnsProps) {
  const id = useId()
  const field = useFieldContext<number>()

  return (
    <div className={skins.labeler()}>
      <label htmlFor={id}>{label}</label>

      <div className={skins.elementGroup({ className: "h-14" })}>
        <button
          type="button"
          onClick={() => field.handleChange(field.state.value - 1)}
          className={inputishBtn}
        >
          <MinusIcon size={24} />
        </button>

        <input
          dir="ltr"
          id={id}
          step="0"
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          type="number"
          onChange={e => field.handleChange(e.target.valueAsNumber)}
          className={skins.input({
            className: "w-full flex-1 text-center",
          })}
        />

        <button
          type="button"
          onClick={() => field.handleChange(field.state.value + 1)}
          className={inputishBtn}
        >
          <PlusIcon size={24} />
        </button>
      </div>

      <ErrorMsg field={field} />
    </div>
  )
}
