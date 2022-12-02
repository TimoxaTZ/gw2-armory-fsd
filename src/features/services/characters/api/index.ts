import { instance } from '../../../../app/api/axios';
import { CharactersType } from '../lib/types';

export const RestAPI = {
  async getCharacters(token: string) {
    // return await instance.get<CharactersType[]>('v2/characters?ids=all&access_token=' + token);
    return await instance.get<CharactersType[]>('v2/characters');
  },
};
