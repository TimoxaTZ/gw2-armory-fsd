import React, { FC } from 'react';

import { StyledBox, StyledTextField } from './style';

const ContentFilling: FC = () => (
  <StyledBox>
    <StyledTextField>
      You need to use your personal API-key, which you can get in your GW2 account. Next step you
      need to log in using this API-key. After that you can use all armory tools and check your
      characters, achievements, inventory, storage, builds and current armor which equipped on
      selected character.
    </StyledTextField>
  </StyledBox>
);

export default ContentFilling;
