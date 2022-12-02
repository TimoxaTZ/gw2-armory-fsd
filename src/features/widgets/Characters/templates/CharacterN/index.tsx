import React, { FC } from 'react';

import { StyledName } from './style';

type OwnPropsType = {
  name: string;
};

export const CharacterN: FC<OwnPropsType> = React.memo(({ name }) => (
  <StyledName>{name}</StyledName>
));
