import React from 'react'
import { Styled } from '../../../styles/DynamicStyledComponent'

type OwnPropertyType = {}

export const Simple: FC<OwnPropertyType> = React.memo(() => {
  return <Styled.div>123</Styled.div>
})

