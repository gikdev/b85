import type { AnyFieldApi } from "@tanstack/react-form"
import { skins } from "#/shared/skins"

function convertErorrsToString(err: unknown) {
  if (typeof err === "string") return err
  if (typeof err === "object" && err != null) {
    if ("msg" in err && typeof err.msg === "string") return err.msg
    if ("message" in err && typeof err.message === "string") return err.message
  }

  return "یه مشکلی پیش اومده"
}

export function ErrorMsg({ field }: { field: AnyFieldApi }) {
  const showError = !field.state.meta.isValid
  const errorMsg = field.state.meta.errors.map(convertErorrsToString).join(",")

  return showError && <p className={skins.errorMsg()}>{errorMsg}</p>
}
