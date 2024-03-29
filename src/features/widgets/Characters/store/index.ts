import { name } from '../constants/name';
import { CharacterNamesList } from '../lib/types';
import { initialState } from '../structure';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ characters: CharacterNamesList }>) {
      state.characters = action.payload.characters;
    },
  },
});

export const Actions = {
  ...slice.actions,
};

export const Reducer = slice.reducer;
