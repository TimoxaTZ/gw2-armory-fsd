import React, { FC } from 'react';

import { StyledButtonBody, StyledButtonContainer, StyledNavLinkHighlight } from './style';

type OwnPropertyType = {
  buttonUrl: string;
  buttonName: string;
  highlight: 1 | 2;
  resetStorage?: boolean;
};

export const HighlightedButton: FC<OwnPropertyType> = React.memo(
  ({ buttonUrl, resetStorage, buttonName, highlight }) => {
    //reset api-token
    if (resetStorage) {
      localStorage.clear();
    }

    return (
      <StyledButtonContainer>
        <StyledNavLinkHighlight to={buttonUrl} highlight={highlight}>
          <StyledButtonBody>{buttonName}</StyledButtonBody>
        </StyledNavLinkHighlight>
      </StyledButtonContainer>
    );
  },
);
