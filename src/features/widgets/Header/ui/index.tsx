import React, { FC } from 'react'
import { StyledHeader, StyledLogoContainer, StyledNavMenu } from './style'
import LogoName from '../templates/LogoName'
import Logo from '../templates/Logo'
import logo from '../../../../assets/images/logo.jpg'
import SimpleButton from '../../../../components/shared/atoms/Buttons/SimpleButton'

export type UIPropertyType = {
  token: string | null
  currentPagePath: string
}

const UI: FC<UIPropertyType> = ({ token, currentPagePath }) => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <Logo src={logo} />
        <LogoName text={'Guild Wars 2 Armory'} />
      </StyledLogoContainer>
      <StyledNavMenu>
        <SimpleButton buttonUrl={'/auth'} buttonName={!token ? 'Login' : 'Change API-key'} />
        {currentPagePath !== '/' && <SimpleButton buttonUrl={'/'} buttonName={'About'} />}
      </StyledNavMenu>
    </StyledHeader>
  )
}

export default UI
