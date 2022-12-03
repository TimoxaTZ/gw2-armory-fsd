import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { StyledName } from './style';

type OwnPropsType = {
  name: string;
};

export const CharacterN: FC<OwnPropsType> = React.memo(({ name }) => (
  <NavLink to={`/characters/${name}`}>
    <StyledName>{name}</StyledName>
  </NavLink>
));
