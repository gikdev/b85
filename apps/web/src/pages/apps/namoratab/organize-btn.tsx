import { SparkleIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useAppSelector } from "#/store"
import { useOrganizeWithAi } from "./shared"

export function OrganizeBtn() {
  const { mutate, isPending } = useOrganizeWithAi()
  const content = useAppSelector(s => s.apps.namoratab.content)
  const organize = () => mutate(content)

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={organize}
      className={skins.btn({ color: "brand" })}
    >
      <SparkleIcon weight="fill" />
      <span>مرتب کن</span>
    </button>
  )
}
