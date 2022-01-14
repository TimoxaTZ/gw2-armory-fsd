import React, { FC } from 'react'
import StyleContainer from '../../../../styles/StyleContainer'
import HighlightedButton from "../../../../components/shared/atoms/Buttons/HighligtedButton";
import ContentFilling from "../templates/ContentFilling";
import AboutLine from "../templates/AboutLine";

export type UIPropertyType = {
    token: string | null
}

const UI: FC<UIPropertyType> = props => {

  return <StyleContainer
                    height={'60vh'}
                    column
                    justify-content={'space-between'}
                    middle>
            <AboutLine/>
            <ContentFilling/>
            <StyleContainer middle>
                <HighlightedButton
                    buttonName={props.token === null ? 'Set API-Key' : 'Change API-Key'}
                    highlightStyle={2} buttonUrl={'/auth'}
                    key={'setApiTokenButton'}/>
                <HighlightedButton
                    buttonName={'Characters'}
                    highlightStyle={1} buttonUrl={'/characters'}
                    key={'charactersRouteButton'}/>
            </StyleContainer>
  </StyleContainer>
}

export default UI
