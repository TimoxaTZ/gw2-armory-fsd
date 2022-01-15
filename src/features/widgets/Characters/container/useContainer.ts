import { useEffect } from 'react'
import { UIPropertyType } from '../ui'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useActions } from '../../../../utils/hooks/useActions'
import {Actions} from "../../../services/characters/store";

export const useContainer = () => {

  useEffect(() => {
    GetCharactersTC()
  }, [])

  const {loading: status, characters: charactersData} = useAppSelector(state => state.characters)

  const {GetCharactersTC} = useActions(Actions)

  const data: UIPropertyType = {
    characters: charactersData,
    loading: status
  }
  return data
}
