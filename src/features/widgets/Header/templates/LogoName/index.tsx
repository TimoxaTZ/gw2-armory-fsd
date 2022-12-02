import React, { FC } from 'react';

import { StyledLogoName } from './style';

type OwnPropsType = {
  text: string;
};

const LogoName: FC<OwnPropsType> = ({ text }) => <StyledLogoName>{text}</StyledLogoName>;

export default LogoName;
