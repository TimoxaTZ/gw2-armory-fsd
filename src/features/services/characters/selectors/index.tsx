// import { createSelector } from 'reselect';

import { AppStateType } from '../../../../app/store/store';

const SelectCharacters = (state: AppStateType) => state.Characters.characters;
