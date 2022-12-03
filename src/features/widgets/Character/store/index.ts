import { name } from '../constants/name';
import { initialState } from '../structure';

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    // setJWT(state, action: PayloadAction<{ characters: string }>) {
    //   // state.character = action.payload.character;
    // },
  },
});

export const Actions = {
  ...slice.actions,
};

export const Reducer = slice.reducer;
