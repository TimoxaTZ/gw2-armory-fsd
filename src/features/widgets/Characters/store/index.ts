import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from '../structure'

export const slice = createSlice({
  name: `CharactersW`,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ characters: string }>) {
      state.characters = action.payload.characters
    },
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
