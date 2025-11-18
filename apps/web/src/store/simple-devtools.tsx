/** biome-ignore-all lint/correctness/noChildrenProp: I LIKE TO USE IT! */
import { useAppSelector } from "."

export function SimpleReduxDevtools() {
  const state = useAppSelector(s => JSON.stringify(s, null, 2))

  return (
    <pre
      className="bg-tusi-900 text-tusi-300 p-4 font-['JetBrains_Mono_Regular']"
      children={state}
    />
  )
}
