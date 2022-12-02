import { name } from '../constants/name';
import { initialState } from '../structure';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ characters: string }>) {
      state.characters = action.payload.characters;
    },
  },
});

export const Actions = {
  ...slice.actions,
};

export const Reducer = slice.reducer;
