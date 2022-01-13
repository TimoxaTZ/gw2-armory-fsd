import React, { FC } from 'react'
import { StyledImg } from './style'
import logo from './../../../../assets/images/logo.jpg'

export type OwnPropsType = {
  src: string
}

const Logo: FC<OwnPropsType> = props => {
  return <StyledImg src={props.src}/>
}

export default Logo
