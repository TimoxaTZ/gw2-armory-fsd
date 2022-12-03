import { ThunkError } from '../../../../app/entry/lib/types';
// import { ThunkCreator } from '../../../../utils/functions/ThunkCreator';
import { RestAPI } from '../api';
import { name } from '../constants/name';
import { CharacterType, EquipmentType, InfixUpgradeAttributesType } from '../lib/types';

import { createAsyncThunk } from '@reduxjs/toolkit';

//TODO: NEED TO REFACTOR IT.
export const GetCharacterTC = createAsyncThunk<any, string, ThunkError>(
  `${name}/GetFullData`,
  async (params) => {
    const res = await RestAPI.getCharactersFullData(params);
    if (res.data) {
      const charactersPromises = res.data.map(async (character: CharacterType) => {
        const newEquip = character?.equipment?.map(async (item: EquipmentType) => {
          try {
            const newStats = await RestAPI.getItem(item.id);
            return { ...item, statsStorage: newStats.data };
          } catch (e) {
            return item;
          }
        });

        const newEquipResponse = await Promise.all(newEquip);

        // ---------------------------STATS----------------------------

        //Преобразование infix_upgrade статов в item.stats
        const statsReducedEquip = newEquipResponse.map(async (item) => {
          try {
            const itemHasStats = item.stats;
            // Проверяем наличие статов на шмотке, если их нет, запускаем преобразование
            if (!itemHasStats) {
              // Получаем statsStorage у шмотки
              const itemStatsStorage = item.statsStorage as EquipmentType['statsStorage'];
              // Зануляем возможность storage быть undefined
              if (itemStatsStorage) {
                // получаем статы образца infix_upgrade
                const infixUpgradeAttributes = itemStatsStorage.details.infix_upgrade.attributes;
                // Преобразуем статы из вида {attribute: 'Power', modifier: 100}
                // в массив объектов вида [{Power: 100}]
                const attributesArray = infixUpgradeAttributes.map(
                  (stat: InfixUpgradeAttributesType) => {
                    const attribute: InfixUpgradeAttributesType = stat;
                    return { [attribute.attribute]: attribute.modifier };
                  },
                );
                // преобразовываем массив объектов [{Power: 100}, {Precision:50}, {Ferocity: 50}]
                // в ассоциативный массив {Power: 100, Precision: 50, Ferocity: 50}
                const attributesObject = Object.assign({}, ...attributesArray);
                // получаем объект вида {id: 0, attributes: {Power: 100, Precision: 50, Ferocity: 50}}
                const reducedStats = { id: 0, attributes: attributesObject };
                // возвращаем предмет, но с добавленным атрибутом "stats"
                // console.log({...item, stats: reducedStats})
                return { ...item, stats: reducedStats };
              }
            }
            return { ...item };
          } catch (e) {
            //если что-то пошло не так, возвращаем изначальные данные
            return item;
          }
        });

        // -------------------------INFUSIONS--------------------------

        // Просим дождаться выполнения всех преобразований статов.
        const statsReduceResponse = await Promise.all(statsReducedEquip);

        // Преобразуем эквип с преобразованными статами в эквип с инфьюзками.
        const infusionsReduceEquip = statsReduceResponse.map(async (item) => {
          try {
            const currentInfusions: any = item.infusions?.map(async (infusion: number) => {
              try {
                // Получаем список инфьюзок в итемах по их айдишнику через API
                const infusionsData = await RestAPI.getInfusions(infusion);
                // если инфьюзка есть в итеме, возвращаем вместо айдишника объект {[id]: {infusionData}
                return { [infusion]: infusionsData.data };
              } catch (e) {
                return item;
              }
            });
            // дожидаемся выполнения промиса получения даты инфьюзок
            const currentInfusionsResponse = await Promise.all(currentInfusions);
            // преобразуем объект [{id: {data}}] в ассоциативный массив {id: {data}}
            const infusionsResponseObj = Object.assign({}, ...currentInfusionsResponse);

            return { ...item, infusions: infusionsResponseObj };
          } catch (e) {
            return item;
          }
        });

        const infusionsReduceResponse = await Promise.all(infusionsReduceEquip);

        // -----------------------UPGRADES------------------------------
        const upgradesReduceEquip = infusionsReduceResponse.map(async (item) => {
          try {
            const currentUpgrades = item.upgrades?.map(async (upgrade: number) => {
              try {
                const upgradesData = await RestAPI.getUpgrades(upgrade);
                const upgrades = upgradesData.data;
                const bonuses = upgrades.details.bonuses;

                // let prices = Object.fromEntries([[bonuses]]);
                // console.log(prices)
                // let set = new Set(bonuses)
                // console.log(set) /

                // const bonusesReduced = Object.entries(bonuses).map( async ([runesCount, setBonus]) => {
                //     try {
                //         const bonusObject = {[`(${parseInt(runesCount)+1})`]: setBonus}
                //         return await bonusObject
                //     } catch (e) {
                //         return [runesCount,setBonus]
                //     }
                //     const bonusesReducedResponse = await Promise.all(bonusesReduced)
                //     console.log(bonusesReducedResponse)
                // })

                const bonusesObj = Object.assign({}, bonuses);
                const assignedBonuses = Object.assign({}, bonusesObj);

                return {
                  [upgrade]: { ...upgradesData.data, upgradesSetBonus: assignedBonuses },
                };
              } catch (e) {
                return item;
              }
            });

            const currentUpgradesResponse = await Promise.all(currentUpgrades);
            const upgradesResponseObj = Object.assign({}, ...currentUpgradesResponse);
            return { ...item, upgrades: upgradesResponseObj };
          } catch (e) {
            return item;
          }
        });

        const upgradesReduceResponse = await Promise.all(upgradesReduceEquip);

        return { ...character, equipment: upgradesReduceResponse };
      });
      // -----------------------UPGRADES------------------------------

      const response = await Promise.all(charactersPromises);

      const characters: CharacterType[] = response.reduce((acc: any, character) => {
        // Beta Characters Filter
        if (character.flags?.find((f) => f === 'Beta')) {
          return [...acc];
        }
        return [
          ...acc,
          {
            ...character,
          },
        ];
      }, []);

      return characters;
    }
    return [];
  },
);
