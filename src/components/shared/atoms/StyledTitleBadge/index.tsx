import React, { FC } from 'react'
import {StyledName} from './style'

type OwnPropsType = {
    name: string
}

const StyledTitleBadge: FC<OwnPropsType> = props => {
  return (
        <StyledName>{props.name}</StyledName>
  )
}

export default StyledTitleBadge
