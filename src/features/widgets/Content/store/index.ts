import { name } from '../constants/name';
import { initialState } from '../structure';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ content: string }>) {
      state.content = action.payload.content;
    },
  },
});

export const Actions = {
  ...slice.actions,
};

export const Reducer = slice.reducer;
