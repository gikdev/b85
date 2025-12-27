import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface PickOneState {
  items: string[]
}

const initialState: PickOneState = {
  items: [],
}

export const pickOneSlice = createSlice({
  name: "Pick One",
  initialState,
  reducers: {
    fill: (state, action: PayloadAction<string>) => {
      state.items = action.payload
        .trim()
        .split("\n")
        .map(i => i.trim())
        .filter(i => !!i)
    },

    choose: (state, action: PayloadAction<"A" | "B">) => {
      if (action.payload === "A") {
        state.items.splice(1, 1)
      }

      if (action.payload === "B") {
        state.items.splice(0, 1)
      }
    },

    reset: state => {
      state.items = []
    },
  },
})
