import React from 'react'
import { Styled } from '../../../../styles/DynamicStyledComponent'

type OwnPropertyType = {}

export const Simple: FC<OwnPropertyType> = React.memo(() => {
  return <Styled.div>simple</Styled.div>
})

