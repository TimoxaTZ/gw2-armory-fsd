import React, { FC } from 'react';

import { HighlightedButton } from '../../../../components/shared/atoms/Buttons/HighligtedButton';
import { Styled } from '../../../../styles/DynamicStyledComponent';
import { AboutLine } from '../templates/AboutLine';
import ContentFilling from '../templates/ContentFilling';

export type UIPropertyType = {
  token: string | null;
};

export const UI: FC<UIPropertyType> = React.memo(({ token }) => (
  <Styled.div height="60vh" column justify-content="space-between" middle>
    <AboutLine />
    <ContentFilling />
    <Styled.div middle>
      <HighlightedButton
        buttonName={token === null ? 'Set API-Key' : 'Change API-Key'}
        highlight={2}
        buttonUrl="/auth"
        key="setApiTokenButton"
      />
      <HighlightedButton
        buttonName="Characters"
        highlight={1}
        buttonUrl="/characters"
        key="charactersRouteButton"
      />
    </Styled.div>
  </Styled.div>
));
