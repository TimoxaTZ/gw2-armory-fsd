import React, { FC } from 'react'
import { StyledGrid, StyledBox, StyledCharactersWidget } from './style'
import CharacterN from '../templates/CharacterN'
import ArrayRender from '../../../../components/shared/lib/ArrayRender'
import StyledTitleBadge from '../../../../components/shared/atoms/StyledTitleBadge'
import HighlightedButton from '../../../../components/shared/atoms/Buttons/HighligtedButton'
import { CharactersType } from '../lib/types'
import Loading from '../../../../components/shared/atoms/Loading'

export type UIPropertyType = {
  characters: CharactersType
  loading: boolean
}

const UI: FC<UIPropertyType> = ({ characters, loading }) => {
  return (
    <StyledCharactersWidget>
      <StyledTitleBadge name={'Characters'} />
      {!loading ? (
        <StyledBox>
          <StyledGrid>
            <ArrayRender items={characters} renderItem={character => <CharacterN key={character} name={character} />} />
          </StyledGrid>
          <HighlightedButton buttonName={'Back'} highlight={2} buttonUrl={'/'} key={'backRouteButton'} />
        </StyledBox>
      ) : (
        <Loading />
      )}
    </StyledCharactersWidget>
  )
}

export default UI
