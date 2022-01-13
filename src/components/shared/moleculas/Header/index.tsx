import React, {FC} from 'react'
import {StyledHeader, StyledHeaderButtons, StyledLogo, StyledLogoName, StyledNamedLogo} from './style'
import logo from './../../../../assets/images/logo.jpg'
import SimpleButton from "../../atoms/Buttons/SimpleButton";

type OwnPropertyType = {}

const Header: FC<OwnPropertyType> = () => {

    const token = localStorage.getItem('token')

    return (
        <StyledHeader>
            <StyledNamedLogo>
                <StyledLogo src={logo}/>
                <StyledLogoName>Guild Wars 2 Armory</StyledLogoName>
            </StyledNamedLogo>
            <StyledHeaderButtons>
              <SimpleButton buttonUrl={'/'} buttonName={'About'}/>
              <SimpleButton buttonUrl={'/auth'} buttonName={!token ? 'Login' : 'Change API-key'}/>
            </StyledHeaderButtons>
        </StyledHeader>
    )
}

export default Header
