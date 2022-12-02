import React, { FC } from 'react';

import { HighlightedButton } from '../../../../components/shared/atoms/Buttons/HighligtedButton';
import { Loading } from '../../../../components/shared/atoms/Loading';
import { StyledTitleBadge } from '../../../../components/shared/atoms/StyledTitleBadge';
import { ArrayRender } from '../../../../components/shared/lib/ArrayRender';
import { CharactersType } from '../lib/types';
import { CharacterN } from '../templates/CharacterN';

import { StyledBox, StyledCharactersWidget, StyledGrid } from './style';

export type UIPropertyType = {
  characters: CharactersType;
  loading: boolean;
};

export const UI: FC<UIPropertyType> = React.memo(({ characters, loading }) => (
  <StyledCharactersWidget>
    <StyledTitleBadge name="Characters" />
    {!loading ? (
      <StyledBox>
        <StyledGrid>
          <ArrayRender
            items={characters}
            renderItem={(character) => <CharacterN key={character} name={character} />}
          />
        </StyledGrid>
        <HighlightedButton buttonName="Back" highlight={2} buttonUrl="/" key="backRouteButton" />
      </StyledBox>
    ) : (
      <Loading />
    )}
  </StyledCharactersWidget>
));
