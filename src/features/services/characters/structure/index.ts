import { CharacterNamesList, CharacterType } from '../lib/types';

export const initialState = {
  loading: true,
  characters: [] as CharacterNamesList,
  charactersData: [] as CharacterType[],
};
