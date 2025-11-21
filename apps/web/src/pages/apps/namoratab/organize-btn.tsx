import { SparkleIcon } from "@phosphor-icons/react"
import { Button } from "#/components/ui/button"
import { useAppSelector } from "#/store"
import { useOrganizeWithAi } from "./shared"

export function OrganizeBtn() {
  const { mutate, isPending } = useOrganizeWithAi()
  const content = useAppSelector(s => s.apps.namoratab.content)
  const organize = () => mutate(content)

  return (
    <Button variant="primary" disabled={isPending} onClick={organize}>
      <SparkleIcon weight="fill" />
      <span>مرتب کن</span>
    </Button>
  )
}
