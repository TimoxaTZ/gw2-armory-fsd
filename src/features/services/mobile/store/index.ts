import { name } from '../constants/name';
import { initialState } from '../structure';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
  },
});

export const Actions = {
  ...slice.actions,
};

export const Reducer = slice.reducer;
