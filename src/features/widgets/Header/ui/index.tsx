import React, {FC} from 'react'
import {StyledHeader, StyledLogoContainer, StyledNavMenu} from './style'
import LogoName from "../templates/LogoName";
import Logo from "../templates/Logo";
import logo from "../../../../assets/images/logo.jpg";
import SimpleButton from "../../../../components/shared/atoms/Buttons/SimpleButton";

export type UIPropertyType = {
  token: string | null
}

const UI: FC<UIPropertyType> = props => {

    return (
        <StyledHeader>
              <StyledLogoContainer>
                  <Logo src={logo}/>
                  <LogoName text={'Guild Wars 2 Armory'}/>
              </StyledLogoContainer>
              <StyledNavMenu>
                  <SimpleButton buttonUrl={'/'} buttonName={'About'}/>
                  <SimpleButton buttonUrl={'/auth'} buttonName={!props.token ? 'Login' : 'Change API-key'}/>
              </StyledNavMenu>
        </StyledHeader>
    )
}

export default UI
