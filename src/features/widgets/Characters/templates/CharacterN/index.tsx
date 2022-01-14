import React, { FC } from 'react'
import {StyledName} from './style'

type OwnPropsType = {
    name: string
}

const CharacterN: FC<OwnPropsType> = props => {
  return (
        <StyledName>{props.name}</StyledName>
  )
}

export default CharacterN
