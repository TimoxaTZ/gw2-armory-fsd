import { useEffect } from 'react'
import { UIPropertyType } from '../ui'
import {useLocalStorage} from "../../../../utils/hooks/useLocalStorage";


export const useContainer = () => {

  useEffect(() => {}, [])

  const token = localStorage.getItem('token')

  const data: UIPropertyType = {
    token: token
  }
  return data
}
