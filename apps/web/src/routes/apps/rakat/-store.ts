import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface RakatStore {
  rakatCount: number
  currentSajde: number
}

const initialState: RakatStore = {
  rakatCount: 0,
  currentSajde: 0,
}

export const rakatSlice = createSlice({
  name: "Rakat",
  initialState,
  reducers: {
    setRakatCount: (state, action: PayloadAction<number>) => {
      state.rakatCount = action.payload
      state.currentSajde = 0
    },

    incCurrentSajde: state => {
      const maxSajde = state.rakatCount * 2
      const final = state.currentSajde + 1

      state.currentSajde = final > maxSajde ? maxSajde : final
    },

    reset: state => {
      state.rakatCount = 0
      state.currentSajde = 0
    },
  },
})
