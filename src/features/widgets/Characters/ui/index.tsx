import React, {FC} from 'react'
import {StyledGrid, StyledBox, StyledCharactersWidget} from './style'
import CharacterN from "../templates/CharacterN";
import ArrayRender from "../../../../components/shared/lib/ArrayRender";
import StyleContainer from "../../../../styles/StyleContainer";
import StyledTitleBadge from "../../../../components/shared/atoms/StyledTitleBadge";
import HighlightedButton from "../../../../components/shared/atoms/Buttons/HighligtedButton";


export type UIPropertyType = {}

const chars = ['Cofresi', 'Sorzetty', 'Illusionary Mage', 'Free Key Weekly', 'Forever In Bronze', 'Lord Razghul', 'Rengar Misthunter', 'Brennika Dieser', 'Fuer Owbens', 'Letho Of Ghetto']

const UI: FC<UIPropertyType> = props => {
    return (
            <StyledCharactersWidget>
                <StyledTitleBadge name={'Characters'}/>
                <StyledBox>
                    <StyledGrid>
                        <ArrayRender items={chars} renderItem={character => <CharacterN name={character}/>}/>
                    </StyledGrid>
                    <HighlightedButton
                        buttonName={'Back'}
                        highlightStyle={2} buttonUrl={'/'}
                        key={'backRouteButton'}/>
                </StyledBox>
            </StyledCharactersWidget>
    )
}

export default UI
