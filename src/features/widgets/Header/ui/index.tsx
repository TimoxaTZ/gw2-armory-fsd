import React, { FC } from 'react';

import logo from '../../../../assets/images/logo.jpg';
import { SimpleButton } from '../../../../components/shared/atoms/Buttons/SimpleButton';
import Logo from '../templates/Logo';
import LogoName from '../templates/LogoName';

import { StyledHeader, StyledLogoContainer, StyledNavMenu } from './style';

export type UIPropertyType = {
  token: string | null;
  currentPagePath: string;
};

export const UI: FC<UIPropertyType> = React.memo(({ token, currentPagePath }) => (
  <StyledHeader>
    <StyledLogoContainer>
      <Logo src={logo} />
      <LogoName text="Guild Wars 2 Armory" />
    </StyledLogoContainer>
    <StyledNavMenu>
      <SimpleButton buttonUrl="/auth" buttonName={!token ? 'Login' : 'Change API-key'} />
      {currentPagePath !== '/' && <SimpleButton buttonUrl="/" buttonName="About" />}
    </StyledNavMenu>
  </StyledHeader>
));
