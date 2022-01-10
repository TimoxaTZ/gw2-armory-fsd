import React, { FC } from 'react'
import { PresentationStyle } from './style'
import StyleContainer from '../../../../styles/StyleContainer'
import HighlightedButton from "../../../../components/shared/atoms/HighligtedButton";
import ContentFilling from "../templates/ContentFilling";
import AboutLine from "../templates/AboutLine";

export type UIPropertyType = {}

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
                    buttonName={'Set Api-Token'}
                    highlightStyle={2} buttonUrl={'/auth'}
                    key={'setApiTokenButton'}/>
                {/*<StyledButton*/}
                {/*    buttonName={'Characters'}*/}
                {/*    buttonStyle={2}*/}
                {/*    buttonUrl={'/characters'}*/}
                {/*    key={'charactersButton'}/>*/}
            </StyleContainer>
  </StyleContainer>
}

export default UI
