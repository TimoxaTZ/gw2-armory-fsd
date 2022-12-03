import React, { FC } from 'react';

import { HighlightedButton } from '../../../../components/shared/atoms/Buttons/HighligtedButton';
import { Loading } from '../../../../components/shared/atoms/Loading';
import { StyledTitleBadge } from '../../../../components/shared/atoms/StyledTitleBadge';
import { CharacterType } from '../lib/types';

import { StyledBox, StyledCharactersWidget } from './style';

export type UIPropertyType = {
  character: string;
  charactersData: CharacterType[];
  loading: boolean;
};

export const UI: FC<UIPropertyType> = React.memo(({ character, charactersData, loading }) =>
  !loading ? (
    <StyledCharactersWidget>
      <StyledTitleBadge name={character} />
      {!charactersData.length && <Loading />}
      {/* here will be items render */}
      <StyledBox>
        <HighlightedButton
          buttonName="to characters list"
          highlight={1}
          buttonUrl="/characters"
          key="backRouteButton"
        />
      </StyledBox>
    </StyledCharactersWidget>
  ) : (
    <Loading />
  ),
);
