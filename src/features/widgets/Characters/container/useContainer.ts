import { useEffect } from 'react'
import { UIPropertyType } from '../ui'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useActions } from '../../../../utils/hooks/useActions'
// import { characters } from '../../../services/characters'

export const useContainer = () => {
  useEffect(() => {}, [])

  // const {} = useActions(characters.Actions)
  // const {} = useAppSelector(state => state.characters)
  const data: UIPropertyType = {}
  return data
}
