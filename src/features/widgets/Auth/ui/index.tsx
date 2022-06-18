import { useEffect, useState } from 'react'
import { PresentationStyle } from './style'
import StyleContainer from '../../../../styles/StyleContainer'
import SimpleButton from '../../../../components/shared/atoms/Buttons/SimpleButton'

export type UIPropertyType = {}

const UI: FC<UIPropertyType> = props => {
  const [value, setValue] = useState('')
  const [token, setCurrentToken] = useState<string | null>('')

  useEffect(() => {
    setCurrentToken(localStorage.getItem('token'))
  }, [token])

  const setToken = (value: string) => {
    localStorage.setItem('token', value)
    setValue('')
    setCurrentToken(value)
  }
  const resetToken = () => {
    localStorage.clear()
    setCurrentToken(null)
  }

  return (
    <StyleContainer column middle>
      Authorization Page
      <div>Current token is: {token}</div>
      {token == null && <input placeholder={'Set your token here...'} value={value} onChange={e => setValue(e.currentTarget.value)} />}
      {token == null && <SimpleButton onClick={() => setToken(value)} buttonName={'Set token'} />}
      {token !== null && <SimpleButton onClick={() => resetToken()} buttonName={'Clear token'} />}
    </StyleContainer>
  )
}

export default UI
