import React, { FC } from 'react';

import { StyledTitle, StyledTitleBox } from './style';

export const AboutLine: FC = React.memo(() => (
  <StyledTitleBox>
    <StyledTitle>About GW2 Armory</StyledTitle>
  </StyledTitleBox>
));
