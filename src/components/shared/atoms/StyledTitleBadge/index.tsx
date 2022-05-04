import React, { FC } from 'react'
import { StyledName } from './style'

type OwnPropsType = {
  name: string
}

const StyledTitleBadge: FC<OwnPropsType> = ({ name }) => {
  return <StyledName>{name}</StyledName>
}

export default StyledTitleBadge
