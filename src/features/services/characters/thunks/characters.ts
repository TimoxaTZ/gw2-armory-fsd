import { ThunkError } from '../../../../app/entry/lib/types';
import { ThunkCreator } from '../../../../utils/functions/ThunkCreator';
import { RestAPI } from '../api';
import { name } from '../constants/name';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const GetCharactersTC = createAsyncThunk<any, string, ThunkError>(
  `${name}/Get`,
  async (payload, thunkAPI) =>
    await ThunkCreator(
      {
        apiMethod: async () => {
          const res = await RestAPI.getCharacters(payload);
          return res;
        },
      },
      thunkAPI,
    ),
);
