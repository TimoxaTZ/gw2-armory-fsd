import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkCreator } from '../../../../utils/lib/ThunkCreator'
import RestAPI from '../api'
import { ThunkError } from '../../../../app/entry/lib/types'

const GetCharactersTC = createAsyncThunk<any, void, ThunkError>('Characters/Get', async (payload, thunkAPI) => {
  return await ThunkCreator({ apiMethod: RestAPI.getCharacters, payload }, thunkAPI)
})

export default GetCharactersTC
