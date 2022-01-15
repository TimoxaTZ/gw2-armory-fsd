import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from '../structure'
import asyncActions from '../thunks/io'

export const slice = createSlice({
  name: `Characters`,
  initialState,
  reducers: {
    // setJWT(state, action: PayloadAction<{ characters: string }>) {
    //   state.characters = action.payload.characters
    // },
  },
  extraReducers: builder => {
    builder.addCase(asyncActions.GetCharactersTC.fulfilled, (state, action) => {
      state.loading = true
      state.characters = action.payload;
      state.loading = false
    })
  },
})

export const Actions = {
  ...slice.actions,
  ...asyncActions,
}

export const Reducer = slice.reducer
