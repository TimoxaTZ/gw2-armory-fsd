import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useActions } from '../../../../utils/hooks/useActions';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { Actions } from '../../../services/characters/store';
import { UIPropertyType } from '../ui';

export const useContainer = () => {
  const token = localStorage.getItem('token') || null;
  const { pathname } = useLocation();
  const location = pathname.replace('/characters/', '').replace('%20', ' ');

  useEffect(() => {
    token && GetCharacterTC(token);
  }, []);

  const {
    loading: status,
    characters,
    charactersData,
  } = useAppSelector((state) => state.characters);

  const characterName =
    //TODO: remove it later and use only from fulldata.
    characters.find((name) => name === location) ||
    charactersData.find((c) => c.name === location)?.name ||
    'Loading...';

  const { GetCharacterTC } = useActions(Actions);

  const data: UIPropertyType = {
    character: characterName,
    charactersData,
    loading: status,
  };
  return data;
};
