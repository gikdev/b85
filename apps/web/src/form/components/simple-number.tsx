import { skins } from "#/shared/skins"
import { useFieldContext } from ".."
import { ErrorMsg } from "./error-msg"

interface SimpleNumberProps {
  label: string
}

export function SimpleNumber({ label }: SimpleNumberProps) {
  const field = useFieldContext<number>()

  return (
    <label className={skins.labeler()}>
      <p>{label}</p>

      <input
        dir="ltr"
        type="number"
        className={skins.input()}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.valueAsNumber)}
      />

      <ErrorMsg field={field} />
    </label>
  )
}
