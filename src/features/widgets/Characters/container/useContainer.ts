import { useEffect } from 'react';

import { useActions } from '../../../../utils/hooks/useActions';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { Actions } from '../../../services/characters/store';
import { UIPropertyType } from '../ui';

export const useContainer = () => {
  const token = localStorage.getItem('token') || null;

  useEffect(() => {
    token && GetCharactersTC(token);
  }, []);

  const { loading: status, characters } = useAppSelector((state) => state.characters);

  const charactersNamesList = characters || [];

  const { GetCharactersTC } = useActions(Actions);

  const data: UIPropertyType = {
    characters: charactersNamesList,
    loading: status,
  };
  return data;
};
