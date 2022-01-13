import React, { FC } from 'react'
import { StyledLogoName } from './style'

type OwnPropsType = {
  text: string
}

const LogoName: FC<OwnPropsType> = props => {
  return <StyledLogoName>{props.text}</StyledLogoName>
}

export default LogoName
