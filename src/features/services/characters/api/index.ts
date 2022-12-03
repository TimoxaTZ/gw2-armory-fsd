import { instance } from '../../../../app/api/axios';
import { AccountType, CharacterType, ItemType, StatsType, UpgradeType } from '../lib/types';

export const RestAPI = {
  async getCharacters(token: string) {
    return await instance.get<CharacterType[]>(`v2/characters?&access_token=${token}`);
  },
  async getCharactersFullData(token: string) {
    return await instance.get<CharacterType[]>(`v2/characters?ids=all&access_token=${token}`);
  },
  async getAccountName(token: string) {
    return await instance.get<AccountType>(`v2/account?access_token=${token}`);
  },
  async getItem(params: number, stats?: StatsType) {
    return await instance.get<ItemType>(`v2/items/${params}`);
  },
  async getUpgrades(params: number) {
    return await instance.get<UpgradeType>(`v2/items/${params}`);
  },
  async getInfusions(params: number) {
    return await instance.get<UpgradeType>(`v2/items/${params}`);
  },
};
