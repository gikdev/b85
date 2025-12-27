import { skins } from "#/shared/skins"
import { useFieldContext } from ".."
import { ErrorMsg } from "./error-msg"

interface SimpleTextInputProps {
  label: string
  inputType?: "text" | "password"
}

export function SimpleTextInput({
  label,
  inputType = "text",
}: SimpleTextInputProps) {
  const field = useFieldContext<string>()

  return (
    <label className={skins.labeler()}>
      <p>{label}</p>

      <input
        dir="ltr"
        type={inputType}
        name={field.name}
        className={skins.input()}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value)}
      />

      <ErrorMsg field={field} />
    </label>
  )
}
