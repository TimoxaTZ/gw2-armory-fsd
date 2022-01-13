import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from '../structure'

export const slice = createSlice({
  name: `HeaderW`,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ header: string }>) {
      state.header = action.payload.header
    },
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
