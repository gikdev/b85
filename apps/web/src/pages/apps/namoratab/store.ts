import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type ModalState = "open" | "closed"

interface NamoratabStore {
  content: string
  aboutSheet: ModalState
  result: string | null
}

const initialState: NamoratabStore = {
  content: "",
  aboutSheet: "closed",
  result: null,
}

export const namoratabSlice = createSlice({
  name: "Namoratab",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },
    setResult: (state, action: PayloadAction<string | null>) => {
      state.result = action.payload
    },
    setAboutSheet: (state, action: PayloadAction<ModalState>) => {
      state.aboutSheet = action.payload
    },
  },
})
