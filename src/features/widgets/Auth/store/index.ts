import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from '../structure'

export const slice = createSlice({
  name: `AuthW`,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ auth: string }>) {
      state.auth = action.payload.auth
    },
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
