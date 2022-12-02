import React, { FC } from 'react';

import { StyledProgressbar } from './style';

import { CircularProgress } from '@mui/material';

type OwnPropertyType = {};

export const Loading: FC<OwnPropertyType> = React.memo(() => (
  <StyledProgressbar>
    <CircularProgress size={75} color="inherit" />
  </StyledProgressbar>
));
