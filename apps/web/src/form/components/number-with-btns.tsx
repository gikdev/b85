import { MinusIcon, PlusIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useFieldContext } from ".."
import { ErrorMsg } from "./error-msg"
import { Button } from "#/components/ui/button"
import { useId } from "react"

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
        <Button
          size="icon-md"
          variant="ghost"
          onClick={() => field.handleChange(field.state.value - 1)}
        >
          <MinusIcon />
        </Button>

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

        <Button
          size="icon-md"
          variant="ghost"
          onClick={() => field.handleChange(field.state.value + 1)}
        >
          <PlusIcon />
        </Button>
      </div>

      <ErrorMsg field={field} />
    </div>
  )
}
