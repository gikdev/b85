import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface NamoratabStore {
  content: string
  isAboutSheetOpen: boolean
}

const initialState: NamoratabStore = {
  content: "",
  isAboutSheetOpen: false,
}

export const namoratabSlice = createSlice({
  name: "Namoratab",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },
    openAboutSheet: state => {
      state.isAboutSheetOpen = true
    },
    closeAboutSheet: state => {
      state.isAboutSheetOpen = true
    },
  },
})
