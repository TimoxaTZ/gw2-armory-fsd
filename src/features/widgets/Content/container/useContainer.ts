import { useEffect } from 'react'
import { UIPropertyType } from '../ui'
// import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
// import { useActions } from '../../../../utils/hooks/useActions'
// import { content } from '../../../services/content'

export const useContainer = () => {
  useEffect(() => {}, [])

  // const {} = useActions(content.Actions)
  // const {} = useAppSelector(state => state.content)

  const token = localStorage.getItem('token'
  )
  const data: UIPropertyType = {
    token: token
  }
  return data
}
