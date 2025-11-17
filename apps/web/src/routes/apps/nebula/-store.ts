import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface NebulaStore {
  content: string
}

const initialState: NebulaStore = {
  content: "",
}

export const nebulaSlice = createSlice({
  name: "Nebula",
  initialState,
  reducers: {
    setContent: (store, action: PayloadAction<string>) => {
      store.content = action.payload
    },
  },
})
