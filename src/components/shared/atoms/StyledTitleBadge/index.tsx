import React, { FC } from 'react';

import { StyledName } from './style';

type OwnPropsType = {
  name: string;
};

export const StyledTitleBadge: FC<OwnPropsType> = ({ name }) => <StyledName>{name}</StyledName>;
