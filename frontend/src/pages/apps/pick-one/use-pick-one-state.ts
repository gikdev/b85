import { createSelector } from "@reduxjs/toolkit"
import { type AppState, useAppSelector } from "#/store"

type DerivedPickOneState =
  | { status: "EMPTY" }
  | {
      status: "WINNER"
      winner: string
    }
  | {
      status: "CHOOSING"
      optionA: string
      optionB: string
    }

const selectPickOneState = createSelector(
  // FIXME: Because of a weird ghost-ish issue...
  (s: AppState) => s.apps.pickOne?.items || [],
  (items): DerivedPickOneState => {
    if (items.length === 0) return { status: "EMPTY" }
    if (items.length === 1) return { status: "WINNER", winner: items[0] }
    return { status: "CHOOSING", optionA: items[0], optionB: items[1] }
  },
)

export const usePickOneState = (): DerivedPickOneState =>
  useAppSelector(selectPickOneState)
