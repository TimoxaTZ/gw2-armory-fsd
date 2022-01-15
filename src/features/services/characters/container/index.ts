import { useEffect } from 'react'
import { Actions } from '../store'
import { useActions } from '../../../../utils/hooks/useActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'

export const useContainer = () => {
  // const token = localStorage.getItem('token')

  useEffect(() => {
    // token !== null && GetCharactersTC(token)
  }, [])

  const {GetCharactersTC} = useActions(Actions)
  // const {characters} = useAppSelector(state => state.characters)
}
